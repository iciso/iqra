import { NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function GET(request: NextRequest) {
  try {
    const databaseUrl = getDatabaseUrl()

    if (!databaseUrl) {
      console.log("[v0] No database URL, returning empty players list")
      return NextResponse.json(
        {
          success: true,
          players: [],
          source: "empty",
          message: "No database configured",
        },
        { status: 200 }
      )
    }

    // Initialize Neon pool
    const pool = new Pool({ connectionString: databaseUrl })

    try {
      const client = await pool.connect()
      try {
        // Get top players from leaderboard_entries
        const query = `
          SELECT DISTINCT
            name,
            MAX(score) as total_score,
            MAX(percentage) as best_percentage,
            COUNT(*) as quiz_count,
            MAX(submitted_at) as last_played
          FROM leaderboard_entries
          WHERE name IS NOT NULL AND name != ''
          GROUP BY name
          ORDER BY best_percentage DESC, total_score DESC
          LIMIT 20
        `

        const result = await client.query(query)
        const players = result.rows.map((row, index) => ({
          id: `player-${index}`,
          username: row.name?.toLowerCase().split(" ")[0] || "player",
          full_name: row.name,
          total_score: parseInt(row.total_score) || 0,
          best_percentage: parseInt(row.best_percentage) || 0,
          quiz_count: parseInt(row.quiz_count) || 0,
          last_played: row.last_played,
        }))

        console.log(`[v0] Retrieved ${players.length} challenge players from Neon`)

        return NextResponse.json(
          {
            success: true,
            players,
            source: "neon",
            count: players.length,
          },
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
      {
        success: false,
        players: [],
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
