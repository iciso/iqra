"use server"

import { z } from "zod"
import { getProfileChallenges, getProfileEntries } from "@/lib/server/profile-data"
import type { ProfileChallengeRow, ProfileEntryRow } from "@/lib/server/types"

const nameSchema = z.string().trim().min(1).max(255)

/**
 * A player's quiz entries and challenges. Replaces GET /api/profile/entries and /api/profile/challenges.
 * The player's name lives only in their browser (localStorage), so the server cannot know it while
 * rendering the page - the profile page calls this once it has read the name.
 */
export async function getProfileDataAction(name: unknown): Promise<{ entries: ProfileEntryRow[]; challenges: ProfileChallengeRow[] }> {
  const parsed = nameSchema.safeParse(name)
  if (!parsed.success) return { entries: [], challenges: [] }
  const [entries, challenges] = await Promise.all([
    getProfileEntries(parsed.data),
    getProfileChallenges(parsed.data),
  ])
  return { entries, challenges }
}
