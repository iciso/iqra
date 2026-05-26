import { NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

// Get database URL from environment variables
const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function GET(request: NextRequest) {
  try {
    const databaseUrl = getDatabaseUrl()
    
    if (!databaseUrl) {
      console.warn("[v0] No database URL found, returning empty leaderboard")
      return NextResponse.json({ entries: [], source: "No database" }, { status: 200 })
    }

    const pool = new Pool({ connectionString: databaseUrl })

    try {
      const client = await pool.connect()
      try {
        // Fetch top 100 entries sorted by percentage (descending), then by score
        const query = `
          SELECT 
            id,
            name,
            score,
            total_questions as "totalQuestions",
            percentage,
            category,
            difficulty,
            challenge,
            date,
            submitted_at as "submittedAt"
          FROM leaderboard_entries
          ORDER BY percentage DESC, score DESC, submitted_at DESC
          LIMIT 100
        `

        const result = await client.query(query)
        const entries = result.rows

        console.log(`[v0] Fetched ${entries.length} entries from leaderboard_entries table`)

        return NextResponse.json({ entries, source: "Neon Database" }, { status: 200 })
      } finally {
        client.release()
      }
    } finally {
      await pool.end()
    }
  } catch (error) {
    console.error("[v0] Error fetching leaderboard entries:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch leaderboard entries",
        entries: [],
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 200 } // Return 200 anyway so client doesn't break
    )
  }
}
