export const dynamic = 'force-dynamic'
import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () =>
  process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL

export async function GET(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get("name")
    if (!name) return NextResponse.json({ entries: [] })

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) return NextResponse.json({ entries: [] })

    const pool = new Pool({ connectionString: databaseUrl })
    try {
      const client = await pool.connect()
      try {
        const result = await client.query(
          `SELECT id, name, score, total_questions, percentage, category, difficulty, challenge, date
           FROM leaderboard_entries
           WHERE LOWER(name) = LOWER($1)
           ORDER BY date DESC
           LIMIT 200`,
          [name]
        )
        return NextResponse.json({ entries: result.rows })
      } finally { client.release() }
    } finally { await pool.end() }
  } catch (error) {
    console.error("[profile/entries]", error)
    return NextResponse.json({ entries: [] })
  }
}
