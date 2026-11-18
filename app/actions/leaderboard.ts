"use server"

import { getLeaderboardEntries, type LeaderboardEntriesResult } from "@/lib/server/leaderboard-data"

/** Leaderboard rows for the refresh button and the 5-minute auto refresh; first paint comes from the page. */
export async function getLeaderboardEntriesAction(): Promise<LeaderboardEntriesResult> {
  return getLeaderboardEntries()
}
