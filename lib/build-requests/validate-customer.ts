import "server-only";

const CUSTOMER_DETAIL_ERROR_MESSAGE = "Build request customer details are invalid.";
const CUSTOMER_DETAIL_FIELDS = ["name", "email", "country", "notes"] as const;
const NAME_MAX_LENGTH = 200;
const EMAIL_MIN_LENGTH = 3;
const EMAIL_MAX_LENGTH = 320;
const COUNTRY_CODE_PATTERN = /^[A-Z]{2}$/;
const NOTES_MAX_LENGTH = 5000;
const CONTROL_CHARACTER_PATTERN = /\p{Cc}/u;
const NOTES_DISALLOWED_CONTROL_CHARACTER_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/u;
const WHITESPACE_PATTERN = /\s/u;

export type BuildRequestCustomerValidationField =
  | "root"
  | "name"
  | "email"
  | "country"
  | "notes";

export type BuildRequestCustomerValidationCode =
  | "invalid_type"
  | "unexpected_field"
  | "required"
  | "invalid_format"
  | "too_short"
  | "too_long"
  | "disallowed_character";

export type ValidatedBuildRequestCustomerDetails = Readonly<{
  customerName: string;
  customerEmailNormalized: string;
  customerCountryCode: string;
  customerNotes: string | null;
}>;

export class BuildRequestCustomerValidationError extends Error {
  readonly field: BuildRequestCustomerValidationField;
  readonly code: BuildRequestCustomerValidationCode;

  constructor(
    field: BuildRequestCustomerValidationField,
    code: BuildRequestCustomerValidationCode,
  ) {
    super(CUSTOMER_DETAIL_ERROR_MESSAGE);
    this.name = "BuildRequestCustomerValidationError";
    this.field = field;
    this.code = code;
  }
}

function fail(
  field: BuildRequestCustomerValidationField,
  code: BuildRequestCustomerValidationCode,
): never {
  throw new BuildRequestCustomerValidationError(field, code);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

function assertAllowedCustomerDetailFields(input: Record<string, unknown>) {
  if (Object.getOwnPropertySymbols(input).length > 0) {
    fail("root", "unexpected_field");
  }

  for (const key of Object.getOwnPropertyNames(input)) {
    if (!CUSTOMER_DETAIL_FIELDS.includes(key as (typeof CUSTOMER_DETAIL_FIELDS)[number])) {
      fail("root", "unexpected_field");
    }
  }
}

function readRequiredString(
  input: Record<string, unknown>,
  field: "name" | "email" | "country",
) {
  if (!Object.prototype.hasOwnProperty.call(input, field)) {
    fail(field, "required");
  }

  const value = input[field];
  if (typeof value !== "string") {
    fail(field, "invalid_type");
  }

  return value;
}

function normalizeCustomerName(value: string) {
  const unicodeNormalized = value.normalize("NFC");

  if (CONTROL_CHARACTER_PATTERN.test(unicodeNormalized)) {
    fail("name", "disallowed_character");
  }

  const normalized = unicodeNormalized.trim().replace(/\s+/gu, " ");
  if (normalized.length < 1) {
    fail("name", "too_short");
  }
  if (normalized.length > NAME_MAX_LENGTH) {
    fail("name", "too_long");
  }

  return normalized;
}

function normalizeCustomerEmail(value: string) {
  if (CONTROL_CHARACTER_PATTERN.test(value) || WHITESPACE_PATTERN.test(value)) {
    fail("email", "disallowed_character");
  }

  const normalized = value.trim().toLowerCase();
  if (normalized.length < EMAIL_MIN_LENGTH) {
    fail("email", "too_short");
  }
  if (normalized.length > EMAIL_MAX_LENGTH) {
    fail("email", "too_long");
  }

  const parts = normalized.split("@");
  if (parts.length !== 2) {
    fail("email", "invalid_format");
  }

  const [localPart, domain] = parts;
  if (
    localPart.length < 1 ||
    domain.length < 1 ||
    !domain.includes(".") ||
    domain.startsWith(".") ||
    domain.endsWith(".") ||
    domain.split(".").some((part) => part.length < 1)
  ) {
    fail("email", "invalid_format");
  }

  return normalized;
}

function normalizeCustomerCountryCode(value: string) {
  const normalized = value.trim().toUpperCase();

  if (!COUNTRY_CODE_PATTERN.test(normalized)) {
    fail("country", "invalid_format");
  }

  return normalized;
}

function normalizeCustomerNotes(input: Record<string, unknown>) {
  if (!Object.prototype.hasOwnProperty.call(input, "notes")) {
    return null;
  }

  const value = input.notes;
  if (value === null) {
    return null;
  }
  if (typeof value !== "string") {
    fail("notes", "invalid_type");
  }

  const normalized = value
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .trim();

  if (normalized.length === 0) {
    return null;
  }
  if (NOTES_DISALLOWED_CONTROL_CHARACTER_PATTERN.test(normalized)) {
    fail("notes", "disallowed_character");
  }
  if (normalized.length > NOTES_MAX_LENGTH) {
    fail("notes", "too_long");
  }

  return normalized;
}

export function validateBuildRequestCustomerDetails(
  input: unknown,
): ValidatedBuildRequestCustomerDetails {
  if (!isPlainObject(input)) {
    fail("root", "invalid_type");
  }

  assertAllowedCustomerDetailFields(input);

  return {
    customerName: normalizeCustomerName(readRequiredString(input, "name")),
    customerEmailNormalized: normalizeCustomerEmail(
      readRequiredString(input, "email"),
    ),
    customerCountryCode: normalizeCustomerCountryCode(
      readRequiredString(input, "country"),
    ),
    customerNotes: normalizeCustomerNotes(input),
  };
}
