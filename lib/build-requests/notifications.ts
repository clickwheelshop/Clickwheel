import "server-only";

import { Resend } from "resend";
import type {
  BuildRequestConfigurationSnapshot,
  BuildRequestLocale,
  ItemizedTrustedPriceSnapshot,
} from "@/lib/build-requests/types";
import type { ValidatedBuildRequestCustomerDetails } from "@/lib/build-requests/validate-customer";

type BuildRequestNotificationInput = Readonly<{
  id: string;
  publicReference: string;
  locale: BuildRequestLocale;
  customer: ValidatedBuildRequestCustomerDetails;
  configurationSnapshot: BuildRequestConfigurationSnapshot;
  pricingSnapshot: ItemizedTrustedPriceSnapshot;
}>;

export type BuildRequestNotificationResult =
  | Readonly<{ outcome: "sent" }>
  | Readonly<{
      outcome: "failed";
      errorCode: "notification_not_configured" | "notification_send_failed";
    }>;

let resendClient: Resend | null = null;

function readNotificationConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const internalRecipient = process.env.BUILD_REQUEST_NOTIFICATION_EMAIL;

  if (!apiKey || !fromEmail || !internalRecipient) {
    return null;
  }

  return {
    apiKey,
    fromEmail,
    internalRecipient,
  };
}

function getResendClient(apiKey: string) {
  resendClient ??= new Resend(apiKey);

  return resendClient;
}

function formatTrustedEstimate(
  locale: BuildRequestLocale,
  pricingSnapshot: ItemizedTrustedPriceSnapshot,
) {
  const amount = (pricingSnapshot.display.totalMinor / 100).toFixed(2);

  return locale === "ro" ? `${amount} RON` : `€${amount}`;
}

function formatSelectedConfiguration(
  configurationSnapshot: BuildRequestConfigurationSnapshot,
) {
  const selected = configurationSnapshot.selected;
  const accessories = selected.accessories.map((accessory) => accessory.label);

  return [
    `Model: ${selected.model.label}`,
    `Storage: ${selected.storage.label}`,
    `Battery: ${selected.battery.label}`,
    `Finish: ${selected.finish.label}`,
    `Backplate: ${selected.backplate.label}`,
    `Software: ${selected.software.label}`,
    `Accessories: ${accessories.length > 0 ? accessories.join(", ") : "None"}`,
  ].join("\n");
}

function buildCustomerText(input: BuildRequestNotificationInput) {
  const estimate = formatTrustedEstimate(input.locale, input.pricingSnapshot);

  if (input.locale === "ro") {
    return [
      "Am primit cererea ta de build Clickwheel.",
      "",
      "Aceasta nu este o confirmare de comanda sau de plata.",
      "Echipa Clickwheel va analiza cererea si iti va raspunde pe email.",
      "",
      `Referinta: ${input.publicReference}`,
      `Estimare de incredere: ${estimate}`,
    ].join("\n");
  }

  return [
    "We received your Clickwheel build request.",
    "",
    "This is not an order confirmation or payment confirmation.",
    "Clickwheel will review the request and reply by email.",
    "",
    `Reference: ${input.publicReference}`,
    `Trusted estimate: ${estimate}`,
  ].join("\n");
}

function buildInternalText(input: BuildRequestNotificationInput) {
  const notes = input.customer.customerNotes ?? "None";

  return [
    "New Clickwheel build request",
    "",
    `Reference: ${input.publicReference}`,
    `Locale: ${input.locale}`,
    `Trusted estimate: ${formatTrustedEstimate(input.locale, input.pricingSnapshot)}`,
    "",
    "Customer",
    `Name: ${input.customer.customerName}`,
    `Email: ${input.customer.customerEmailNormalized}`,
    `Country: ${input.customer.customerCountryCode}`,
    `Notes: ${notes}`,
    "",
    "Selected configuration",
    formatSelectedConfiguration(input.configurationSnapshot),
  ].join("\n");
}

async function sendBuildRequestEmail({
  idempotencyKey,
  to,
  subject,
  text,
}: Readonly<{
  idempotencyKey: string;
  to: string;
  subject: string;
  text: string;
}>): Promise<BuildRequestNotificationResult> {
  const config = readNotificationConfig();

  if (!config) {
    return { outcome: "failed", errorCode: "notification_not_configured" };
  }

  try {
    const result = await getResendClient(config.apiKey).emails.send(
      {
        from: config.fromEmail,
        to,
        subject,
        text,
      },
      {
        idempotencyKey,
      },
    );

    if (result.error) {
      return { outcome: "failed", errorCode: "notification_send_failed" };
    }

    return { outcome: "sent" };
  } catch {
    return { outcome: "failed", errorCode: "notification_send_failed" };
  }
}

export async function sendCustomerBuildRequestConfirmation(
  input: BuildRequestNotificationInput,
): Promise<BuildRequestNotificationResult> {
  return sendBuildRequestEmail({
    idempotencyKey: `build-request/customer/${input.id}`,
    to: input.customer.customerEmailNormalized,
    subject: `Clickwheel build request ${input.publicReference}`,
    text: buildCustomerText(input),
  });
}

export async function sendInternalBuildRequestNotification(
  input: BuildRequestNotificationInput,
): Promise<BuildRequestNotificationResult> {
  const config = readNotificationConfig();

  if (!config) {
    return { outcome: "failed", errorCode: "notification_not_configured" };
  }

  return sendBuildRequestEmail({
    idempotencyKey: `build-request/internal/${input.id}`,
    to: config.internalRecipient,
    subject: `Clickwheel build request ${input.publicReference}`,
    text: buildInternalText(input),
  });
}
