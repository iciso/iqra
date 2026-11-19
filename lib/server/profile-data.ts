import { getDatabaseUrl, withClient, toPlain } from "./neon"
import type { ProfileChallengeRow, ProfileEntryRow } from "./types"

// Reads that used to live in app/api/profile/entries and app/api/profile/challenges.
// Both return [] on any failure, as the old routes did.

export async function getProfileEntries(name: string): Promise<ProfileEntryRow[]> {
  const databaseUrl = getDatabaseUrl()
  if (!name || !databaseUrl) return []

  try {
    return await withClient(databaseUrl, async (client) => {
      const result = await client.query(
        `SELECT id, name, score, total_questions, percentage, category, difficulty, challenge, date
         FROM leaderboard_entries
         WHERE LOWER(name) = LOWER($1)
         ORDER BY date DESC
         LIMIT 200`,
        [name],
      )
      return toPlain(result.rows) as ProfileEntryRow[]
    })
  } catch (error) {
    console.error("[profile/entries]", error)
    return []
  }
}

export async function getProfileChallenges(name: string): Promise<ProfileChallengeRow[]> {
  const databaseUrl = getDatabaseUrl()
  if (!name || !databaseUrl) return []

  try {
    return await withClient(databaseUrl, async (client) => {
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
      return toPlain(result.rows) as ProfileChallengeRow[]
    })
  } catch (error) {
    console.error("[profile/challenges]", error)
    return []
  }
}
