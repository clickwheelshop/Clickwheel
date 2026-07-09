import "server-only";

import { createHash, randomBytes, randomUUID } from "node:crypto";

const IDEMPOTENCY_KEY_ERROR_MESSAGE = "Build request idempotency key is invalid.";
const CLIENT_IDEMPOTENCY_KEY_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class BuildRequestIdempotencyKeyError extends Error {
  constructor() {
    super(IDEMPOTENCY_KEY_ERROR_MESSAGE);
    this.name = "BuildRequestIdempotencyKeyError";
  }
}

export function generateBuildRequestUuid() {
  return randomUUID();
}

export function generateBuildRequestPublicReference() {
  return `CW-${randomBytes(16).toString("base64url")}`;
}

export function hashBuildRequestIdempotencyKey(rawKey: unknown) {
  if (typeof rawKey !== "string" || !CLIENT_IDEMPOTENCY_KEY_PATTERN.test(rawKey)) {
    throw new BuildRequestIdempotencyKeyError();
  }

  return createHash("sha256").update(rawKey.toLowerCase()).digest("hex");
}
