import "server-only";

import { pricingConfig } from "@/config/pricing";
import { getPostgresPool } from "@/lib/db";
import { convertEurCentsToRonBani } from "@/lib/money";
import type {
  BuildRequestConfigurationSnapshot,
  BuildRequestLocale,
  ItemizedTrustedPriceSnapshot,
} from "@/lib/build-requests/types";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const IDEMPOTENCY_KEY_HASH_PATTERN = /^[0-9a-f]{64}$/;
const ISO_COUNTRY_CODE_PATTERN = /^[A-Z]{2}$/;
const PUBLIC_REFERENCE_MIN_LENGTH = 20;
const PUBLIC_REFERENCE_MAX_LENGTH = 64;
const CUSTOMER_NAME_MAX_LENGTH = 200;
const CUSTOMER_EMAIL_MIN_LENGTH = 3;
const CUSTOMER_EMAIL_MAX_LENGTH = 320;
const CUSTOMER_NOTES_MAX_LENGTH = 5000;
const INPUT_VALIDATION_ERROR_MESSAGE = "Build request persistence input is invalid.";

const INSERT_BUILD_REQUEST_SQL = `
  INSERT INTO public.build_requests (
    id,
    public_reference,
    idempotency_key_hash,
    request_locale,
    customer_name,
    customer_email_normalized,
    customer_country_code,
    customer_notes,
    configuration_snapshot,
    pricing_snapshot
  )
  VALUES (
    $1::uuid,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9::jsonb,
    $10::jsonb
  )
  ON CONFLICT (idempotency_key_hash) DO NOTHING
  RETURNING
    id,
    public_reference,
    request_locale,
    created_at,
    request_status,
    customer_notification_status,
    internal_notification_status
`;

const SELECT_BUILD_REQUEST_BY_IDEMPOTENCY_HASH_SQL = `
  SELECT
    id,
    public_reference,
    request_locale,
    created_at,
    request_status,
    customer_notification_status,
    internal_notification_status
  FROM public.build_requests
  WHERE idempotency_key_hash = $1
  LIMIT 1
`;

const RECORD_CUSTOMER_NOTIFICATION_SENT_SQL = `
  UPDATE public.build_requests
  SET
    customer_notification_status = 'sent'
  WHERE id = $1::uuid
  RETURNING
    id,
    public_reference,
    request_locale,
    updated_at,
    request_status,
    customer_notification_status,
    internal_notification_status
`;

const RECORD_CUSTOMER_NOTIFICATION_FAILED_SQL = `
  UPDATE public.build_requests
  SET
    customer_notification_status = 'failed',
    notification_last_error = $2
  WHERE id = $1::uuid
  RETURNING
    id,
    public_reference,
    request_locale,
    updated_at,
    request_status,
    customer_notification_status,
    internal_notification_status
`;

const RECORD_INTERNAL_NOTIFICATION_SENT_SQL = `
  UPDATE public.build_requests
  SET
    internal_notification_status = 'sent'
  WHERE id = $1::uuid
  RETURNING
    id,
    public_reference,
    request_locale,
    updated_at,
    request_status,
    customer_notification_status,
    internal_notification_status
`;

const RECORD_INTERNAL_NOTIFICATION_FAILED_SQL = `
  UPDATE public.build_requests
  SET
    internal_notification_status = 'failed',
    notification_last_error = $2
  WHERE id = $1::uuid
  RETURNING
    id,
    public_reference,
    request_locale,
    updated_at,
    request_status,
    customer_notification_status,
    internal_notification_status
`;

type BuildRequestOperationalStatus =
  | "received"
  | "under_review"
  | "quoted"
  | "closed"
  | "cancelled";

type BuildRequestNotificationStatus =
  | "pending"
  | "sending"
  | "sent"
  | "failed"
  | "not_required";

type BuildRequestRow = {
  id: string;
  public_reference: string;
  request_locale: BuildRequestLocale;
  created_at: Date;
  request_status: BuildRequestOperationalStatus;
  customer_notification_status: BuildRequestNotificationStatus;
  internal_notification_status: BuildRequestNotificationStatus;
};

type BuildRequestNotificationOutcomeRow = Omit<BuildRequestRow, "created_at"> & {
  updated_at: Date;
};

type NotificationOutcomeUpdateQuery = Readonly<{
  sql: string;
  values: readonly [string] | readonly [string, string];
}>;

type ValidatedSelectedItemSnapshot = Readonly<{
  id: string;
  label: string;
  priceEurCents: number;
}>;

type ValidatedSelectedModelSnapshot = ValidatedSelectedItemSnapshot &
  Readonly<{
    technicalSecondaryLine: string;
  }>;

type ValidatedNormalizedIds = Readonly<{
  model: string;
  storage: string;
  battery: string;
  finish: string;
  backplate: string;
  software: string;
  accessories: readonly string[];
}>;

export type CreateBuildRequestInput = Readonly<{
  id: string;
  publicReference: string;
  idempotencyKeyHash: string;
  locale: BuildRequestLocale;
  customerName: string;
  customerEmailNormalized: string;
  customerCountryCode: string;
  customerNotes?: string | null;
  configurationSnapshot: BuildRequestConfigurationSnapshot;
  pricingSnapshot: ItemizedTrustedPriceSnapshot;
}>;

export type CreateBuildRequestResult = Readonly<{
  outcome: "created" | "existing";
  id: string;
  publicReference: string;
  locale: BuildRequestLocale;
  createdAt: string;
  requestStatus: BuildRequestOperationalStatus;
  customerNotificationStatus: BuildRequestNotificationStatus;
  internalNotificationStatus: BuildRequestNotificationStatus;
}>;

export type RecordBuildRequestNotificationOutcomeInput = Readonly<{
  id: string;
  channel: "customer" | "internal";
  status: "sent" | "failed";
  errorCode?: string | null;
}>;

export type RecordBuildRequestNotificationOutcomeResult = Readonly<{
  id: string;
  publicReference: string;
  locale: BuildRequestLocale;
  updatedAt: string;
  requestStatus: BuildRequestOperationalStatus;
  customerNotificationStatus: BuildRequestNotificationStatus;
  internalNotificationStatus: BuildRequestNotificationStatus;
}>;

export class BuildRequestRepositoryInputError extends Error {
  constructor() {
    super(INPUT_VALIDATION_ERROR_MESSAGE);
    this.name = "BuildRequestRepositoryInputError";
  }
}

export class BuildRequestRepositoryError extends Error {
  constructor() {
    super("Build request persistence failed.");
    this.name = "BuildRequestRepositoryError";
  }
}

function assertValidInput(
  condition: boolean,
): asserts condition {
  if (!condition) {
    throw new BuildRequestRepositoryInputError();
  }
}

function isPlainJsonObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

function assertExactKeys(
  value: Record<string, unknown>,
  expectedKeys: readonly string[],
) {
  const actualKeys = Object.getOwnPropertyNames(value);

  assertValidInput(actualKeys.length === expectedKeys.length);
  assertValidInput(Object.getOwnPropertySymbols(value).length === 0);
  for (const key of expectedKeys) {
    assertValidInput(Object.prototype.hasOwnProperty.call(value, key));
    assertValidInput(value[key] !== undefined);
  }
}

function assertPlainObjectWithKeys(
  value: unknown,
  expectedKeys: readonly string[],
): asserts value is Record<string, unknown> {
  assertValidInput(isPlainJsonObject(value));
  assertExactKeys(value, expectedKeys);
}

function assertNonEmptyString(value: unknown): asserts value is string {
  assertValidInput(typeof value === "string" && value.length > 0);
}

function assertSafeNonNegativeInteger(value: unknown): asserts value is number {
  assertValidInput(
    typeof value === "number" && Number.isSafeInteger(value) && value >= 0,
  );
}

function assertSafeNotificationErrorCode(value: unknown): asserts value is string {
  assertValidInput(
    typeof value === "string" && /^[a-z0-9_]{1,80}$/.test(value),
  );
}

function assertNotificationOutcomeInputKeys(
  input: Record<string, unknown>,
) {
  const actualKeys = Object.getOwnPropertyNames(input);
  const allowedKeys = ["id", "channel", "status", "errorCode"];

  assertValidInput(Object.getOwnPropertySymbols(input).length === 0);
  assertValidInput(Object.prototype.hasOwnProperty.call(input, "id"));
  assertValidInput(Object.prototype.hasOwnProperty.call(input, "channel"));
  assertValidInput(Object.prototype.hasOwnProperty.call(input, "status"));

  for (const key of actualKeys) {
    assertValidInput(allowedKeys.includes(key));
    assertValidInput(input[key] !== undefined);
  }
}

function validateSelectedItemSnapshot(
  value: unknown,
): ValidatedSelectedItemSnapshot {
  assertPlainObjectWithKeys(value, ["id", "label", "priceEurCents"]);
  const { id, label, priceEurCents } = value;

  assertNonEmptyString(id);
  assertNonEmptyString(label);
  assertSafeNonNegativeInteger(priceEurCents);

  return {
    id,
    label,
    priceEurCents,
  };
}

function validateSelectedModelSnapshot(
  value: unknown,
): ValidatedSelectedModelSnapshot {
  assertPlainObjectWithKeys(value, [
    "id",
    "label",
    "priceEurCents",
    "technicalSecondaryLine",
  ]);
  const { id, label, priceEurCents, technicalSecondaryLine } = value;

  assertNonEmptyString(id);
  assertNonEmptyString(label);
  assertSafeNonNegativeInteger(priceEurCents);
  assertNonEmptyString(technicalSecondaryLine);

  return {
    id,
    label,
    priceEurCents,
    technicalSecondaryLine,
  };
}

function validateNormalizedIds(value: unknown): ValidatedNormalizedIds {
  assertPlainObjectWithKeys(value, [
    "model",
    "storage",
    "battery",
    "finish",
    "backplate",
    "software",
    "accessories",
  ]);
  const {
    model,
    storage,
    battery,
    finish,
    backplate,
    software,
    accessories,
  } = value;

  assertNonEmptyString(model);
  assertNonEmptyString(storage);
  assertNonEmptyString(battery);
  assertNonEmptyString(finish);
  assertNonEmptyString(backplate);
  assertNonEmptyString(software);
  assertValidInput(Array.isArray(accessories));

  const validatedAccessories: string[] = [];

  for (const accessoryId of accessories) {
    assertNonEmptyString(accessoryId);
    validatedAccessories.push(accessoryId);
  }

  return {
    model,
    storage,
    battery,
    finish,
    backplate,
    software,
    accessories: validatedAccessories,
  };
}

function validateSelectedConfigurationItems(
  value: unknown,
  normalizedIds: ValidatedNormalizedIds,
) {
  assertPlainObjectWithKeys(value, [
    "model",
    "storage",
    "battery",
    "finish",
    "backplate",
    "software",
    "accessories",
  ]);
  const model = validateSelectedModelSnapshot(value.model);
  const storage = validateSelectedItemSnapshot(value.storage);
  const battery = validateSelectedItemSnapshot(value.battery);
  const finish = validateSelectedItemSnapshot(value.finish);
  const backplate = validateSelectedItemSnapshot(value.backplate);
  const software = validateSelectedItemSnapshot(value.software);
  const { accessories } = value;

  assertValidInput(Array.isArray(accessories));

  const validatedAccessories = accessories.map((accessory) =>
    validateSelectedItemSnapshot(accessory),
  );

  assertValidInput(model.id === normalizedIds.model);
  assertValidInput(storage.id === normalizedIds.storage);
  assertValidInput(battery.id === normalizedIds.battery);
  assertValidInput(finish.id === normalizedIds.finish);
  assertValidInput(backplate.id === normalizedIds.backplate);
  assertValidInput(software.id === normalizedIds.software);
  assertValidInput(validatedAccessories.length === normalizedIds.accessories.length);

  for (const [index, accessory] of validatedAccessories.entries()) {
    assertValidInput(accessory.id === normalizedIds.accessories[index]);
  }
}

function validateConfigurationSnapshot(
  value: unknown,
  locale: BuildRequestLocale,
) {
  assertPlainObjectWithKeys(value, [
    "schemaVersion",
    "locale",
    "normalizedIds",
    "selected",
  ]);
  assertValidInput(value.schemaVersion === 1);
  assertValidInput(value.locale === locale);
  assertValidInput(value.locale === "en" || value.locale === "ro");
  const normalizedIds = validateNormalizedIds(value.normalizedIds);
  validateSelectedConfigurationItems(value.selected, normalizedIds);
}

function validatePricingSnapshot(
  value: unknown,
  locale: BuildRequestLocale,
  configurationSnapshot: BuildRequestConfigurationSnapshot,
) {
  assertPlainObjectWithKeys(value, [
    "schemaVersion",
    "sourceCurrency",
    "modelBaseEurCents",
    "storageUpgradeEurCents",
    "batteryEurCents",
    "finishEurCents",
    "backplateEurCents",
    "softwareEurCents",
    "accessoriesTotalEurCents",
    "totalEurCents",
    "display",
    "ronConversion",
  ]);
  assertValidInput(value.schemaVersion === 1);
  assertValidInput(value.sourceCurrency === pricingConfig.sourceCurrency);
  assertSafeNonNegativeInteger(value.modelBaseEurCents);
  assertSafeNonNegativeInteger(value.storageUpgradeEurCents);
  assertSafeNonNegativeInteger(value.batteryEurCents);
  assertSafeNonNegativeInteger(value.finishEurCents);
  assertSafeNonNegativeInteger(value.backplateEurCents);
  assertSafeNonNegativeInteger(value.softwareEurCents);
  assertSafeNonNegativeInteger(value.accessoriesTotalEurCents);
  assertSafeNonNegativeInteger(value.totalEurCents);

  const expectedTotalEurCents =
    value.modelBaseEurCents +
    value.storageUpgradeEurCents +
    value.batteryEurCents +
    value.finishEurCents +
    value.backplateEurCents +
    value.softwareEurCents +
    value.accessoriesTotalEurCents;

  assertValidInput(value.totalEurCents === expectedTotalEurCents);

  const selected = configurationSnapshot.selected;
  assertValidInput(selected.model.priceEurCents === value.modelBaseEurCents);
  assertValidInput(selected.storage.priceEurCents === value.storageUpgradeEurCents);
  assertValidInput(selected.battery.priceEurCents === value.batteryEurCents);
  assertValidInput(selected.finish.priceEurCents === value.finishEurCents);
  assertValidInput(selected.backplate.priceEurCents === value.backplateEurCents);
  assertValidInput(selected.software.priceEurCents === value.softwareEurCents);
  assertValidInput(
    selected.accessories.reduce(
      (total, accessory) => total + accessory.priceEurCents,
      0,
    ) === value.accessoriesTotalEurCents,
  );

  assertPlainObjectWithKeys(value.display, ["currency", "totalMinor"]);
  assertSafeNonNegativeInteger(value.display.totalMinor);
  if (locale === "en") {
    assertValidInput(value.display.currency === "EUR");
    assertValidInput(value.display.totalMinor === value.totalEurCents);
  } else {
    assertValidInput(value.display.currency === "RON");
    assertValidInput(
      value.display.totalMinor === convertEurCentsToRonBani(value.totalEurCents),
    );
  }

  assertPlainObjectWithKeys(value.ronConversion, [
    "ronPerEurScaled",
    "rateScale",
    "rateVersion",
    "rateEffectiveAt",
  ]);
  assertValidInput(value.ronConversion.ronPerEurScaled === pricingConfig.ronPerEurScaled);
  assertValidInput(value.ronConversion.rateScale === pricingConfig.rateScale);
  assertValidInput(value.ronConversion.rateVersion === pricingConfig.rateVersion);
  assertValidInput(value.ronConversion.rateEffectiveAt === pricingConfig.rateEffectiveAt);
}

function serializeTrustedJsonObject(value: unknown) {
  try {
    const serialized = JSON.stringify(value);
    assertValidInput(typeof serialized === "string");

    return serialized;
  } catch {
    throw new BuildRequestRepositoryInputError();
  }
}

function validateAndSerializeInput(input: CreateBuildRequestInput) {
  assertValidInput(UUID_PATTERN.test(input.id));
  assertValidInput(
    typeof input.publicReference === "string" &&
      input.publicReference.length >= PUBLIC_REFERENCE_MIN_LENGTH &&
      input.publicReference.length <= PUBLIC_REFERENCE_MAX_LENGTH,
  );
  assertValidInput(
    IDEMPOTENCY_KEY_HASH_PATTERN.test(input.idempotencyKeyHash),
  );
  assertValidInput(
    input.locale === "en" || input.locale === "ro",
  );
  assertValidInput(
    typeof input.customerName === "string" &&
      input.customerName.trim().length >= 1 &&
      input.customerName.trim().length <= CUSTOMER_NAME_MAX_LENGTH,
  );
  assertValidInput(
    typeof input.customerEmailNormalized === "string" &&
      input.customerEmailNormalized.length >= CUSTOMER_EMAIL_MIN_LENGTH &&
      input.customerEmailNormalized.length <= CUSTOMER_EMAIL_MAX_LENGTH &&
      input.customerEmailNormalized === input.customerEmailNormalized.trim() &&
      input.customerEmailNormalized === input.customerEmailNormalized.toLowerCase(),
  );
  assertValidInput(
    ISO_COUNTRY_CODE_PATTERN.test(input.customerCountryCode),
  );
  assertValidInput(
    input.customerNotes === undefined ||
      input.customerNotes === null ||
      (typeof input.customerNotes === "string" &&
        input.customerNotes.length <= CUSTOMER_NOTES_MAX_LENGTH),
  );
  validateConfigurationSnapshot(input.configurationSnapshot, input.locale);
  validatePricingSnapshot(
    input.pricingSnapshot,
    input.locale,
    input.configurationSnapshot,
  );

  return {
    configurationSnapshotJson: serializeTrustedJsonObject(input.configurationSnapshot),
    pricingSnapshotJson: serializeTrustedJsonObject(input.pricingSnapshot),
  };
}

function toResult(
  outcome: CreateBuildRequestResult["outcome"],
  row: BuildRequestRow,
): CreateBuildRequestResult {
  return {
    outcome,
    id: row.id,
    publicReference: row.public_reference,
    locale: row.request_locale,
    createdAt: row.created_at.toISOString(),
    requestStatus: row.request_status,
    customerNotificationStatus: row.customer_notification_status,
    internalNotificationStatus: row.internal_notification_status,
  };
}

function toNotificationOutcomeResult(
  row: BuildRequestNotificationOutcomeRow,
): RecordBuildRequestNotificationOutcomeResult {
  return {
    id: row.id,
    publicReference: row.public_reference,
    locale: row.request_locale,
    updatedAt: row.updated_at.toISOString(),
    requestStatus: row.request_status,
    customerNotificationStatus: row.customer_notification_status,
    internalNotificationStatus: row.internal_notification_status,
  };
}

function getNotificationOutcomeUpdateQuery(
  input: RecordBuildRequestNotificationOutcomeInput,
  errorCode: string | null,
): NotificationOutcomeUpdateQuery {
  if (input.channel === "customer") {
    if (input.status === "sent") {
      return {
        sql: RECORD_CUSTOMER_NOTIFICATION_SENT_SQL,
        values: [input.id],
      };
    }

    assertValidInput(errorCode !== null);

    return {
      sql: RECORD_CUSTOMER_NOTIFICATION_FAILED_SQL,
      values: [input.id, errorCode],
    };
  }

  if (input.status === "sent") {
    return {
      sql: RECORD_INTERNAL_NOTIFICATION_SENT_SQL,
      values: [input.id],
    };
  }

  assertValidInput(errorCode !== null);

  return {
    sql: RECORD_INTERNAL_NOTIFICATION_FAILED_SQL,
    values: [input.id, errorCode],
  };
}

export async function createOrGetBuildRequest(
  input: CreateBuildRequestInput,
): Promise<CreateBuildRequestResult> {
  assertValidInput(isPlainJsonObject(input));

  const { configurationSnapshotJson, pricingSnapshotJson } =
    validateAndSerializeInput(input);

  const pool = getPostgresPool();

  try {
    const insertResult = await pool.query<BuildRequestRow>(
      INSERT_BUILD_REQUEST_SQL,
      [
        input.id,
        input.publicReference,
        input.idempotencyKeyHash,
        input.locale,
        input.customerName,
        input.customerEmailNormalized,
        input.customerCountryCode,
        input.customerNotes ?? null,
        configurationSnapshotJson,
        pricingSnapshotJson,
      ],
    );

    const insertedRow = insertResult.rows[0];
    if (insertedRow) {
      return toResult("created", insertedRow);
    }

    const existingResult = await pool.query<BuildRequestRow>(
      SELECT_BUILD_REQUEST_BY_IDEMPOTENCY_HASH_SQL,
      [input.idempotencyKeyHash],
    );
    const existingRow = existingResult.rows[0];

    if (!existingRow) {
      throw new BuildRequestRepositoryError();
    }

    return toResult("existing", existingRow);
  } catch (error) {
    if (
      error instanceof BuildRequestRepositoryInputError ||
      error instanceof BuildRequestRepositoryError
    ) {
      throw error;
    }

    throw new BuildRequestRepositoryError();
  }
}

export async function recordBuildRequestNotificationOutcome(
  input: RecordBuildRequestNotificationOutcomeInput,
): Promise<RecordBuildRequestNotificationOutcomeResult> {
  assertValidInput(isPlainJsonObject(input));
  assertNotificationOutcomeInputKeys(input);
  assertValidInput(UUID_PATTERN.test(input.id));
  assertValidInput(input.channel === "customer" || input.channel === "internal");
  assertValidInput(input.status === "sent" || input.status === "failed");
  assertValidInput(
    input.errorCode === undefined ||
      input.errorCode === null ||
      typeof input.errorCode === "string",
  );

  const errorCode =
    input.status === "failed"
      ? (input.errorCode ?? "notification_failed")
      : null;

  if (errorCode !== null) {
    assertSafeNotificationErrorCode(errorCode);
  }

  const query = getNotificationOutcomeUpdateQuery(input, errorCode);
  const pool = getPostgresPool();

  try {
    const result = await pool.query<BuildRequestNotificationOutcomeRow>(
      query.sql,
      [...query.values],
    );
    const row = result.rows[0];

    if (!row) {
      throw new BuildRequestRepositoryError();
    }

    return toNotificationOutcomeResult(row);
  } catch (error) {
    if (
      error instanceof BuildRequestRepositoryInputError ||
      error instanceof BuildRequestRepositoryError
    ) {
      throw error;
    }

    throw new BuildRequestRepositoryError();
  }
}
