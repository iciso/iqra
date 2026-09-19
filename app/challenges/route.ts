export const dynamic = 'force-dynamic'
import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () =>
  process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL

export async function GET(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get("name")
    if (!name) return NextResponse.json({ challenges: [] })

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) return NextResponse.json({ challenges: [] })

    const pool = new Pool({ connectionString: databaseUrl })
    try {
      const client = await pool.connect()
      try {
        const result = await client.query(
          `SELECT id, challenger_name, challenged_name, category, difficulty,
                  question_count, status, created_at
           FROM challenges
           WHERE LOWER(challenger_name) = LOWER($1)
              OR LOWER(challenged_name) = LOWER($1)
           ORDER BY created_at DESC
           LIMIT 50`,
          [name]
        )
        return NextResponse.json({ challenges: result.rows })
      } finally { client.release() }
    } finally { await pool.end() }
  } catch (error) {
    console.error("[profile/challenges]", error)
    return NextResponse.json({ challenges: [] })
  }
}
