import { Pool } from "@neondatabase/serverless"
import { z } from "zod"
import { getDatabaseUrl, toPlain } from "./neon"
import type { QuizResultRow } from "./types"

// Quiz result write that used to live in app/api/quiz/submit-result.

/** Validates a finished quiz. Mirrors the old route: name of 2+ characters, score/total/percentage required. */
export const quizResultSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(255),
  score: z.number().int().min(0),
  totalQuestions: z.number().int().min(1).max(1000),
  percentage: z.number().int().min(0).max(100),
  category: z.string().trim().max(255).nullish(),
  difficulty: z.string().trim().max(50).nullish(),
  challenge: z.string().trim().max(50).nullish(),
})

export type QuizResultInput = z.infer<typeof quizResultSchema>

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
    } finally {
      client.release()
    }
  } catch (error) {
    console.error("[quiz] Error ensuring leaderboard table:", error)
  }
}

export interface SavedQuizResult {
  message: string
  result: QuizResultRow
}

/** Saves a validated quiz result. With no database it answers "Saved locally", as the old route did. Throws on DB failure. */
export async function saveQuizResult(input: QuizResultInput): Promise<SavedQuizResult> {
  const category = input.category || null
  const difficulty = input.difficulty || null
  const challenge = input.challenge || null

  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    console.warn("[quiz] No database URL found, returning success (will use localStorage)")
    const now = new Date().toISOString()
    return {
      message: "Saved locally",
      result: {
        id: Date.now().toString(),
        name: input.name,
        score: input.score,
        total_questions: input.totalQuestions,
        percentage: input.percentage,
        category,
        difficulty,
        challenge,
        date: now,
        submitted_at: now,
      },
    }
  }

  const pool = new Pool({ connectionString: databaseUrl })
  try {
    await ensureLeaderboardTable(pool)

    const client = await pool.connect()
    try {
      const result = await client.query(
        `INSERT INTO leaderboard_entries (name, score, total_questions, percentage, category, difficulty, challenge)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, name, score, total_questions, percentage, category, difficulty, challenge, date, submitted_at`,
        [input.name, input.score, input.totalQuestions, input.percentage, category, difficulty, challenge],
      )
      return { message: "Quiz result saved to leaderboard", result: toPlain(result.rows[0]) as QuizResultRow }
    } finally {
      client.release()
    }
  } finally {
    await pool.end()
  }
}
