import { notFound } from "next/navigation"
import { connection } from "next/server"
import { getChallengeResult } from "@/lib/server/challenge-data"
import ChallengeResultsView from "./challenge-results-view"

export default async function ChallengeResultsPage({
  params,
}: {
  params: Promise<{ challengeId: string }>
}) {
  // Results come from the database on every request, never from the build.
  await connection()
  const { challengeId } = await params

  const challenge = await getChallengeResult(challengeId)
  if (!challenge) notFound()

  return <ChallengeResultsView challenge={challenge} />
}
