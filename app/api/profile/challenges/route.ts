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
          `SELECT
             c.id,
             c.challenger_name,
             c.challenged_name,
             c.category,
             c.difficulty,
             c.question_count,
             c.status,
             c.created_at,
             ch.score             AS challenger_score,
             ch.total_questions   AS challenger_total,
             cd.score             AS challenged_score,
             cd.total_questions   AS challenged_total
           FROM challenges c
           LEFT JOIN leaderboard_entries ch
             ON ch.challenge = c.id::text
             AND LOWER(ch.name) = LOWER(c.challenger_name)
           LEFT JOIN leaderboard_entries cd
             ON cd.challenge = c.id::text
             AND LOWER(cd.name) = LOWER(c.challenged_name)
           WHERE LOWER(c.challenger_name) = LOWER($1)
              OR LOWER(c.challenged_name)  = LOWER($1)
           ORDER BY c.created_at DESC
           LIMIT 50`,
          [name],
        )
        return NextResponse.json({ challenges: result.rows })
      } finally { client.release() }
    } finally { await pool.end() }
  } catch (error) {
    console.error("[profile/challenges]", error)
    return NextResponse.json({ challenges: [] })
  }
}
