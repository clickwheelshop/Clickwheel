-- Clickwheel Phase 2A migration artifact. This file has not been applied.
-- Configuration and pricing snapshots are immutable historical records.
-- Customer PII is stored separately so it can be deleted or redacted later.
-- Browser-provided prices or totals must never be persisted; only trusted
-- server-calculated integer values belong in pricing_snapshot.

CREATE TABLE build_requests (
  id uuid PRIMARY KEY,
  public_reference varchar(64) NOT NULL UNIQUE,
  idempotency_key_hash varchar(64) NOT NULL UNIQUE,
  request_locale char(2) NOT NULL,

  customer_name varchar(200),
  customer_email_normalized varchar(320),
  customer_country_code char(2),
  customer_notes text,

  configuration_snapshot jsonb NOT NULL,
  pricing_snapshot jsonb NOT NULL,

  request_status varchar(32) NOT NULL DEFAULT 'received',
  customer_notification_status varchar(32) NOT NULL DEFAULT 'pending',
  internal_notification_status varchar(32) NOT NULL DEFAULT 'pending',
  notification_last_error text,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT build_requests_public_reference_length_check
    CHECK (char_length(public_reference) BETWEEN 20 AND 64),
  CONSTRAINT build_requests_idempotency_hash_format_check
    CHECK (idempotency_key_hash ~ '^[0-9a-f]{64}$'),
  CONSTRAINT build_requests_locale_check
    CHECK (request_locale IN ('en', 'ro')),
  CONSTRAINT build_requests_customer_name_length_check
    CHECK (
      customer_name IS NULL
      OR char_length(btrim(customer_name)) BETWEEN 1 AND 200
    ),
  CONSTRAINT build_requests_customer_email_length_check
    CHECK (
      customer_email_normalized IS NULL
      OR char_length(customer_email_normalized) BETWEEN 3 AND 320
    ),
  CONSTRAINT build_requests_customer_email_normalized_check
    CHECK (
      customer_email_normalized IS NULL
      OR customer_email_normalized = lower(customer_email_normalized)
    ),
  CONSTRAINT build_requests_country_code_check
    CHECK (
      customer_country_code IS NULL
      OR customer_country_code ~ '^[A-Z]{2}$'
    ),
  CONSTRAINT build_requests_customer_notes_length_check
    CHECK (
      customer_notes IS NULL
      OR char_length(customer_notes) <= 5000
    ),
  CONSTRAINT build_requests_configuration_snapshot_object_check
    CHECK (jsonb_typeof(configuration_snapshot) = 'object'),
  CONSTRAINT build_requests_pricing_snapshot_object_check
    CHECK (jsonb_typeof(pricing_snapshot) = 'object'),
  CONSTRAINT build_requests_request_status_check
    CHECK (
      request_status IN (
        'received',
        'under_review',
        'quoted',
        'closed',
        'cancelled'
      )
    ),
  CONSTRAINT build_requests_customer_notification_status_check
    CHECK (
      customer_notification_status IN (
        'pending',
        'sending',
        'sent',
        'failed',
        'not_required'
      )
    ),
  CONSTRAINT build_requests_internal_notification_status_check
    CHECK (
      internal_notification_status IN (
        'pending',
        'sending',
        'sent',
        'failed',
        'not_required'
      )
    ),
  CONSTRAINT build_requests_notification_error_length_check
    CHECK (
      notification_last_error IS NULL
      OR char_length(notification_last_error) <= 4000
    )
);

-- The public_reference UNIQUE constraint supplies its lookup index.
CREATE INDEX build_requests_created_at_idx
  ON build_requests (created_at DESC);

CREATE INDEX build_requests_customer_email_normalized_idx
  ON build_requests (customer_email_normalized)
  WHERE customer_email_normalized IS NOT NULL;

COMMENT ON COLUMN build_requests.public_reference IS
  'Application-generated high-entropy public reference; never sequential.';
COMMENT ON COLUMN build_requests.idempotency_key_hash IS
  'Hex-encoded SHA-256 hash; the raw idempotency key is not stored.';
COMMENT ON COLUMN build_requests.configuration_snapshot IS
  'Immutable trusted configuration snapshot. Must not contain customer PII.';
COMMENT ON COLUMN build_requests.pricing_snapshot IS
  'Immutable server-calculated integer pricing snapshot; never browser totals.';
COMMENT ON COLUMN build_requests.customer_name IS
  'Nullable to allow later GDPR deletion or redaction.';
COMMENT ON COLUMN build_requests.customer_email_normalized IS
  'Nullable to allow later GDPR deletion or redaction.';
COMMENT ON COLUMN build_requests.customer_country_code IS
  'Nullable to allow later GDPR deletion or redaction.';
COMMENT ON COLUMN build_requests.customer_notes IS
  'Nullable to allow later GDPR deletion or redaction.';

CREATE FUNCTION prevent_build_request_immutable_update()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.id IS DISTINCT FROM OLD.id
    OR NEW.created_at IS DISTINCT FROM OLD.created_at
    OR NEW.public_reference IS DISTINCT FROM OLD.public_reference
    OR NEW.idempotency_key_hash IS DISTINCT FROM OLD.idempotency_key_hash
    OR NEW.request_locale IS DISTINCT FROM OLD.request_locale
    OR NEW.configuration_snapshot IS DISTINCT FROM OLD.configuration_snapshot
    OR NEW.pricing_snapshot IS DISTINCT FROM OLD.pricing_snapshot
  THEN
    RAISE EXCEPTION
      'build request reference, locale, idempotency hash, and snapshots are immutable'
      USING ERRCODE = 'check_violation';
  END IF;

  -- Operational states, errors, and separately stored PII remain mutable.
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER build_requests_prevent_immutable_update
BEFORE UPDATE ON build_requests
FOR EACH ROW
EXECUTE FUNCTION prevent_build_request_immutable_update();
