import { NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

// Get database URL from environment variables
const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

// Ensure leaderboard table exists
async function ensureLeaderboardTable(pool: Pool) {
  try {
    const client = await pool.connect()
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS leaderboard_entries (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          score INTEGER NOT NULL,
          total_questions INTEGER NOT NULL,
          percentage INTEGER NOT NULL,
          category VARCHAR(255),
          difficulty VARCHAR(50),
          challenge VARCHAR(50),
          date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE INDEX IF NOT EXISTS idx_leaderboard_entries_percentage ON leaderboard_entries(percentage DESC);
        CREATE INDEX IF NOT EXISTS idx_leaderboard_entries_score ON leaderboard_entries(score DESC);
      `)
      console.log("[v0] Leaderboard table ensured")
    } finally {
      client.release()
    }
  } catch (error) {
    console.error("[v0] Error ensuring leaderboard table:", error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, score, totalQuestions, percentage, category, difficulty, challenge } = body

    // Validate input
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }

    if (score === undefined || !totalQuestions || percentage === undefined) {
      return NextResponse.json({ error: "Missing quiz data" }, { status: 400 })
    }

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) {
      console.warn("[v0] No database URL found, returning success (will use localStorage)")
      // Return success anyway - localStorage will handle it on client side
      const result = {
        id: Date.now().toString(),
        name: name.trim(),
        score,
        totalQuestions,
        percentage,
        category,
        difficulty,
        challenge,
        date: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
      }
      return NextResponse.json({ success: true, message: "Saved locally", result }, { status: 200 })
    }

    // Initialize Neon pool
    const pool = new Pool({ connectionString: databaseUrl })

    try {
      // Ensure table exists
      await ensureLeaderboardTable(pool)

      // Insert leaderboard entry
      const query = `
        INSERT INTO leaderboard_entries (name, score, total_questions, percentage, category, difficulty, challenge)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, name, score, total_questions, percentage, category, difficulty, challenge, date, submitted_at
      `

      const client = await pool.connect()
      try {
        const result = await client.query(query, [
          name.trim(),
          score,
          totalQuestions,
          percentage,
          category || null,
          difficulty || null,
          challenge || null,
        ])

        const savedEntry = result.rows[0]
        console.log("[v0] Quiz result saved to Neon:", savedEntry)

        return NextResponse.json(
          {
            success: true,
            message: "Quiz result saved to leaderboard",
            result: savedEntry,
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
    console.error("[v0] Error submitting quiz result:", error)
    return NextResponse.json(
      {
        error: "Failed to save quiz result",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
