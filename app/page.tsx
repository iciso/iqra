import { connection } from "next/server"
import HomeClient from "./home-client"
import { getChallengePlayers } from "@/lib/server/leaderboard-data"

export default async function HomePage() {
  // Challenge players come from the database on every request, never from the build.
  await connection()
  const initialPlayers = await getChallengePlayers()

  return <HomeClient initialPlayers={initialPlayers} />
}
