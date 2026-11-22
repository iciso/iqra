import { connection } from "next/server"
import SimpleTopPlayers from "@/components/challenge/simple-top-players"
import { getChallengePlayers } from "@/lib/server/leaderboard-data"
import PageHeader from "@/components/shared/page-header"
import { pageContainerClass } from "@/lib/page-layout"

export default async function Challenges() {
  // Players come from the database on every request, never from the build.
  await connection()
  const initialPlayers = await getChallengePlayers()

  return (
    <div className={pageContainerClass}>
      <PageHeader title="Challenges" subtitle="Test your knowledge against other players" />
      <SimpleTopPlayers initialPlayers={initialPlayers} />
    </div>
  )
}
