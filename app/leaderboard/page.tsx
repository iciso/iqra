import { connection } from "next/server"
import LeaderboardClient from "./leaderboard-client"
import { getLeaderboardEntries } from "@/lib/server/leaderboard-data"

export default async function LeaderboardPage() {
  // Leaderboard rows come from the database on every request, never from the build.
  await connection()
  const initialEntries = await getLeaderboardEntries()

  return <LeaderboardClient initialEntries={initialEntries} />
}
