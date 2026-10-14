export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function GET(request: NextRequest) {
  try {
    const databaseUrl = getDatabaseUrl()

    if (!databaseUrl) {
      return NextResponse.json({ success: true, players: [], source: "empty" }, { status: 200 })
    }

    const pool = new Pool({ connectionString: databaseUrl })

    try {
      const client = await pool.connect()
      try {
        // Aggregate exactly the same way the leaderboard does:
        // SUM all scores and questions per player, then compute overall percentage.
        // No LIMIT — every player who has ever played appears and can be challenged.
        const result = await client.query(`
          SELECT
            name,
            SUM(score)                                                        AS total_score,
            SUM(total_questions)                                              AS total_questions,
            ROUND(
              SUM(score)::numeric / NULLIF(SUM(total_questions), 0) * 100
            )                                                                 AS best_percentage,
            COUNT(*)                                                          AS quiz_count,
            MAX(submitted_at)                                                 AS last_played
          FROM leaderboard_entries
          WHERE name IS NOT NULL
            AND name != ''
            AND LENGTH(name) >= 2
          GROUP BY name
          ORDER BY best_percentage DESC, total_score DESC
        `)

        const players = result.rows.map((row, index) => ({
          id: `player-${index}`,
          username: row.name?.toLowerCase().split(" ")[0] || "player",
          full_name: row.name,
          total_score: parseInt(row.total_score) || 0,
          total_questions: parseInt(row.total_questions) || 0,
          best_percentage: parseInt(row.best_percentage) || 0,
          quiz_count: parseInt(row.quiz_count) || 0,
          last_played: row.last_played,
        }))

        console.log(`[v0] Retrieved ${players.length} challenge players from Neon`)

        return NextResponse.json(
          { success: true, players, source: "neon", count: players.length },
          { status: 200 }
        )
      } finally {
        client.release()
      }
    } finally {
      await pool.end()
    }
  } catch (error) {
    console.error("[v0] Error fetching challenge players:", error)
    return NextResponse.json(
      { success: false, players: [], error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
