import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () =>
  process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return NextResponse.json({ error: "Missing challenge id" }, { status: 400 })
  }

  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    return NextResponse.json({ error: "No database connection configured" }, { status: 500 })
  }

  const pool = new Pool({ connectionString: databaseUrl })
  try {
    const client = await pool.connect()
    try {
      // 1. Fetch the challenge row
      const challengeResult = await client.query(
        `SELECT id, challenger_name, challenged_name, category, difficulty,
                question_count, status, created_at, expires_at,
                challenger_score, challenged_score,
                challenger_completed_at, challenged_completed_at
         FROM challenges WHERE id = $1`,
        [id],
      )

      if (challengeResult.rows.length === 0) {
        return NextResponse.json({ error: "Challenge not found" }, { status: 404 })
      }

      const challenge = challengeResult.rows[0]

      // 2. Fetch scores from leaderboard_entries for this challenge
      //    Each player may have one row with challenge = this id
      const scoresResult = await client.query(
        `SELECT name, score, total_questions, percentage
         FROM leaderboard_entries
         WHERE challenge = $1
         ORDER BY submitted_at ASC`,
        [id],
      )

      // Map scores by name (case-insensitive)
      const scoreMap: Record<string, { score: number; total_questions: number; percentage: number }> = {}
      scoresResult.rows.forEach((row) => {
        scoreMap[row.name.toLowerCase().trim()] = {
          score: row.score,
          total_questions: row.total_questions,
          percentage: row.percentage,
        }
      })

      const challengerKey = challenge.challenger_name.toLowerCase().trim()
      const challengedKey = challenge.challenged_name.toLowerCase().trim()

      const enriched = {
        ...challenge,
        challenger_score:
          challenge.challenger_score ??
          scoreMap[challengerKey]?.score ??
          null,
        challenged_score:
          challenge.challenged_score ??
          scoreMap[challengedKey]?.score ??
          null,
        challenger_percentage: scoreMap[challengerKey]?.percentage ?? null,
        challenged_percentage: scoreMap[challengedKey]?.percentage ?? null,
        challenger_total: scoreMap[challengerKey]?.total_questions ?? challenge.question_count,
        challenged_total: scoreMap[challengedKey]?.total_questions ?? challenge.question_count,
        both_played: scoreMap[challengerKey] !== undefined && scoreMap[challengedKey] !== undefined,
      }

      return NextResponse.json({ challenge: enriched }, { status: 200 })
    } finally {
      client.release()
    }
  } finally {
    await pool.end()
  }
}
