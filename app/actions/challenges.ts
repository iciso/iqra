"use server"

import { z } from "zod"
import {
  getChallengeSections,
  getPendingChallenges,
  insertChallenge,
  newChallengeSchema,
  type ChallengeSectionsResult,
} from "@/lib/server/challenge-data"
import { getChallengePlayers, type ChallengePlayersResult } from "@/lib/server/leaderboard-data"
import { getDatabaseUrl, withClient, errorMessage, toPlain } from "@/lib/server/neon"
import type { ChallengeRow } from "@/lib/server/types"

// No login exists in this app: players are identified by the name they typed (localStorage),
// exactly as the old /api/challenges/* routes did. No client-sent user id is accepted.

export type ChallengeActionState =
  | { success: true; challenge: ChallengeRow }
  | { success: false; error: string; details?: string }

/** Creates a pending challenge. Replaces POST /api/challenges/create for the challenge dialog. */
export async function createChallengeAction(input: unknown): Promise<ChallengeActionState> {
  const parsed = newChallengeSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false, error: "Missing required fields: challengerName, challengedName, category" }
  }

  try {
    const challenge = await insertChallenge(parsed.data)
    return { success: true, challenge }
  } catch (error) {
    console.error("[challenges] create error:", error)
    return { success: false, error: "Failed to create challenge", details: errorMessage(error) }
  }
}

const respondSchema = z.object({
  challengeId: z.string().trim().min(1).max(100),
  action: z.enum(["accept", "decline"]),
  // The name of the player answering. Only the challenged player can accept or decline.
  playerName: z.string().trim().min(1).max(255),
})

/** Accepts or declines a challenge. Replaces POST /api/challenges/respond. */
export async function respondToChallengeAction(input: unknown): Promise<ChallengeActionState> {
  const parsed = respondSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false, error: "Missing or invalid challengeId/action" }
  }

  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    return { success: false, error: "No database connection configured" }
  }

  const { challengeId, action, playerName } = parsed.data
  const newStatus = action === "accept" ? "accepted" : "declined"

  try {
    const row = await withClient(databaseUrl, async (client) => {
      const result = await client.query(
        `UPDATE challenges SET status = $1 WHERE id = $2 AND challenged_name = $3 RETURNING *`,
        [newStatus, challengeId, playerName],
      )
      return result.rows[0]
    })
    if (!row) return { success: false, error: "Challenge not found" }
    return { success: true, challenge: toPlain(row) as ChallengeRow }
  } catch (error) {
    console.error("[challenges] respond error:", error)
    return { success: false, error: "Failed to update challenge", details: errorMessage(error) }
  }
}

const nameSchema = z.string().trim().min(1).max(255)

/** Pending challenges sent to this player. Replaces GET /api/challenges?name=. */
export async function getPendingChallengesAction(name: unknown): Promise<ChallengeRow[]> {
  const parsed = nameSchema.safeParse(name)
  if (!parsed.success) return []
  return getPendingChallenges(parsed.data)
}

/** Players who can be challenged. Used for the refresh button; first paint comes from the page. */
export async function getChallengePlayersAction(): Promise<ChallengePlayersResult> {
  return getChallengePlayers()
}

const sectionsSchema = z.object({
  category: z.string().max(255),
  challenger: z.string().max(255).nullish(),
  challenged: z.string().max(255).nullish(),
})

/** Question sections per level and the ones these two players already used. Replaces GET /api/challenges/sections. */
export async function getChallengeSectionsAction(input: unknown): Promise<ChallengeSectionsResult> {
  const parsed = sectionsSchema.safeParse(input)
  if (!parsed.success) return { success: false, error: "Invalid category" }
  const { category, challenger, challenged } = parsed.data
  return getChallengeSections(category, challenger, challenged)
}
