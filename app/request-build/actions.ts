"use server";

import { redirect } from "next/navigation";
import {
  generateBuildRequestPublicReference,
  generateBuildRequestUuid,
  hashBuildRequestIdempotencyKey,
} from "@/lib/build-requests/identifiers";
import {
  BuildRequestRepositoryInputError,
  createOrGetBuildRequest,
  recordBuildRequestNotificationOutcome,
} from "@/lib/build-requests/repository";
import {
  sendCustomerBuildRequestConfirmation,
  sendInternalBuildRequestNotification,
} from "@/lib/build-requests/notifications";
import { resolveBuildRequestConfiguration } from "@/lib/build-requests/resolve-configuration";
import type { BuildRequestLocale } from "@/lib/build-requests/types";
import {
  BuildRequestCustomerValidationError,
  validateBuildRequestCustomerDetails,
} from "@/lib/build-requests/validate-customer";

type BuildRequestActionErrorCode =
  | "invalid_submission"
  | "invalid_customer_details"
  | "invalid_idempotency_key"
  | "request_save_failed";

export type BuildRequestSubmissionActionState = Readonly<
  | {
      status: "idle";
    }
  | {
      status: "error";
      errorCode: BuildRequestActionErrorCode;
    }
>;

type ExpectedFormField =
  | "locale"
  | "model"
  | "storage"
  | "battery"
  | "finish"
  | "backplate"
  | "software"
  | "accessories"
  | "name"
  | "email"
  | "country"
  | "notes"
  | "idempotencyKey";

function errorState(
  errorCode: BuildRequestActionErrorCode,
): BuildRequestSubmissionActionState {
  return {
    status: "error",
    errorCode,
  };
}

function isFormData(value: unknown): value is FormData {
  return typeof FormData !== "undefined" && value instanceof FormData;
}

function readExpectedField(formData: FormData, field: ExpectedFormField) {
  return formData.get(field);
}

function readLocale(formData: FormData): BuildRequestLocale | null {
  const locale = readExpectedField(formData, "locale");

  return locale === "en" || locale === "ro" ? locale : null;
}

async function recordNotificationOutcomeSafely({
  id,
  channel,
  outcome,
  errorCode,
}: Readonly<{
  id: string;
  channel: "customer" | "internal";
  outcome: "sent" | "failed";
  errorCode?: string;
}>) {
  try {
    await recordBuildRequestNotificationOutcome({
      id,
      channel,
      status: outcome,
      errorCode: outcome === "failed" ? errorCode : null,
    });
  } catch {
    // Notification outcome recording must not fail the saved request.
  }
}

export async function submitBuildRequestAction(
  _previousState: BuildRequestSubmissionActionState,
  formData: FormData,
): Promise<BuildRequestSubmissionActionState> {
  if (!isFormData(formData)) {
    return errorState("invalid_submission");
  }

  const locale = readLocale(formData);
  if (!locale) {
    return errorState("invalid_submission");
  }

  const resolvedConfiguration = resolveBuildRequestConfiguration(locale, {
    model: readExpectedField(formData, "model"),
    storage: readExpectedField(formData, "storage"),
    battery: readExpectedField(formData, "battery"),
    finish: readExpectedField(formData, "finish"),
    backplate: readExpectedField(formData, "backplate"),
    software: readExpectedField(formData, "software"),
    accessories: readExpectedField(formData, "accessories"),
  });

  let customerDetails;
  try {
    customerDetails = validateBuildRequestCustomerDetails({
      name: readExpectedField(formData, "name"),
      email: readExpectedField(formData, "email"),
      country: readExpectedField(formData, "country"),
      notes: readExpectedField(formData, "notes"),
    });
  } catch (error) {
    if (error instanceof BuildRequestCustomerValidationError) {
      return errorState("invalid_customer_details");
    }

    return errorState("invalid_submission");
  }

  let idempotencyKeyHash: string;
  try {
    idempotencyKeyHash = hashBuildRequestIdempotencyKey(
      readExpectedField(formData, "idempotencyKey"),
    );
  } catch {
    return errorState("invalid_idempotency_key");
  }

  const id = generateBuildRequestUuid();
  const publicReference = generateBuildRequestPublicReference();

  let buildRequest;
  try {
    buildRequest = await createOrGetBuildRequest({
      id,
      publicReference,
      idempotencyKeyHash,
      locale,
      ...customerDetails,
      configurationSnapshot: resolvedConfiguration.snapshot.configuration,
      pricingSnapshot: resolvedConfiguration.snapshot.pricing,
    });
  } catch (error) {
    if (error instanceof BuildRequestRepositoryInputError) {
      return errorState("invalid_submission");
    }

    return errorState("request_save_failed");
  }

  if (buildRequest.outcome === "created") {
    const notificationInput = {
      id: buildRequest.id,
      publicReference: buildRequest.publicReference,
      locale: buildRequest.locale,
      customer: customerDetails,
      configurationSnapshot: resolvedConfiguration.snapshot.configuration,
      pricingSnapshot: resolvedConfiguration.snapshot.pricing,
    };

    try {
      const customerNotification =
        await sendCustomerBuildRequestConfirmation(notificationInput);

      await recordNotificationOutcomeSafely({
        id: buildRequest.id,
        channel: "customer",
        outcome: customerNotification.outcome,
        errorCode:
          customerNotification.outcome === "failed"
            ? customerNotification.errorCode
            : undefined,
      });
    } catch {
      await recordNotificationOutcomeSafely({
        id: buildRequest.id,
        channel: "customer",
        outcome: "failed",
        errorCode: "notification_send_failed",
      });
    }

    try {
      const internalNotification =
        await sendInternalBuildRequestNotification(notificationInput);

      await recordNotificationOutcomeSafely({
        id: buildRequest.id,
        channel: "internal",
        outcome: internalNotification.outcome,
        errorCode:
          internalNotification.outcome === "failed"
            ? internalNotification.errorCode
            : undefined,
      });
    } catch {
      await recordNotificationOutcomeSafely({
        id: buildRequest.id,
        channel: "internal",
        outcome: "failed",
        errorCode: "notification_send_failed",
      });
    }
  }

  redirect(
    buildRequest.locale === "ro"
      ? `/ro/request-build/confirmation/${buildRequest.publicReference}`
      : `/request-build/confirmation/${buildRequest.publicReference}`,
  );
}
