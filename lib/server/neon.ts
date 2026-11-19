import { Pool, type PoolClient } from "@neondatabase/serverless"

// Server-only helpers. Imported by server components, server actions and API routes.

export const getDatabaseUrl = () =>
  process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL

/** Opens a pool, hands a client to `fn`, and always releases the client and ends the pool. */
export async function withClient<T>(databaseUrl: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const pool = new Pool({ connectionString: databaseUrl })
  try {
    const client = await pool.connect()
    try {
      return await fn(client)
    } finally {
      client.release()
    }
  } finally {
    await pool.end()
  }
}

export const errorMessage = (error: unknown) => (error instanceof Error ? error.message : "Unknown error")

/** Same shape the old JSON routes sent: Dates become ISO strings, nothing else changes. */
export const toPlain = <T>(value: T): T => JSON.parse(JSON.stringify(value))
