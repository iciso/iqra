import { getDatabaseUrl, withClient, errorMessage, toPlain } from "./neon"
import type { LeaderboardRow } from "./types"

// Reads that used to live in app/api/leaderboard/entries and app/api/challenges/players.

export interface LeaderboardEntriesResult {
  entries: LeaderboardRow[]
  source: string
  error?: string
}

export async function getLeaderboardEntries(): Promise<LeaderboardEntriesResult> {
  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    return { entries: [], source: "No database" }
  }

  try {
    return await withClient(databaseUrl, async (client) => {
      const result = await client.query(`
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
        LIMIT 10000
      `)
      return { entries: toPlain(result.rows) as LeaderboardRow[], source: "Neon Database" }
    })
  } catch (error) {
    console.error("[leaderboard] Error fetching leaderboard entries:", error)
    return { entries: [], source: "Error", error: errorMessage(error) }
  }
}

export interface ChallengePlayer {
  id: string
  username: string
  full_name: string
  total_score: number
  total_questions: number
  best_percentage: number
  quiz_count: number
  last_played: string | null
}

export interface ChallengePlayersResult {
  success: boolean
  players: ChallengePlayer[]
  source?: string
  error?: string
}

export async function getChallengePlayers(): Promise<ChallengePlayersResult> {
  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    return { success: true, players: [], source: "empty" }
  }

  try {
    return await withClient(databaseUrl, async (client) => {
      // Aggregate exactly the same way the leaderboard does:
      // SUM all scores and questions per player, then compute overall percentage.
      // No LIMIT - every player who has ever played appears and can be challenged.
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
        ORDER BY total_score DESC, best_percentage DESC, name ASC
      `)

      const players: ChallengePlayer[] = result.rows.map((row: Record<string, unknown>, index: number) => ({
        id: `player-${index}`,
        username: String(row.name ?? "").toLowerCase().split(" ")[0] || "player",
        full_name: String(row.name),
        total_score: parseInt(String(row.total_score)) || 0,
        total_questions: parseInt(String(row.total_questions)) || 0,
        best_percentage: parseInt(String(row.best_percentage)) || 0,
        quiz_count: parseInt(String(row.quiz_count)) || 0,
        last_played: row.last_played ? new Date(row.last_played as string | Date).toISOString() : null,
      }))

      return { success: true, players, source: "neon" }
    })
  } catch (error) {
    console.error("[challenges] Error fetching challenge players:", error)
    return { success: false, players: [], error: errorMessage(error) }
  }
}
