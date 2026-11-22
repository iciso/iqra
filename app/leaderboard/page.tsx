import { connection } from "next/server"
import LeaderboardClient from "./leaderboard-client"
import { getLeaderboardEntries } from "@/lib/server/leaderboard-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Leaderboard",
  description: "Top IQRA players ranked by their quiz and challenge scores.",
  path: "/leaderboard",
})

export default async function LeaderboardPage() {
  // Leaderboard rows come from the database on every request, never from the build.
  await connection()
  const initialEntries = await getLeaderboardEntries()

  return <LeaderboardClient initialEntries={initialEntries} />
}
