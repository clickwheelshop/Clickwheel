import "server-only";

import { Pool } from "pg";

// Node-runtime-only database client. Never import this module into client components.
type GlobalWithPostgresPool = typeof globalThis & {
  __clickwheelPostgresPool?: Pool;
};

function readPostgresUrl() {
  const postgresUrl = process.env.POSTGRES_URL;

  if (!postgresUrl) {
    throw new Error("Database access is not configured: POSTGRES_URL is missing.");
  }

  return postgresUrl;
}

export function getPostgresPool() {
  const globalForPostgres = globalThis as GlobalWithPostgresPool;

  globalForPostgres.__clickwheelPostgresPool ??= new Pool({
    connectionString: readPostgresUrl(),
    max: 1,
  });

  return globalForPostgres.__clickwheelPostgresPool;
}
