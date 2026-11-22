import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { connection } from "next/server"
import { pageMetadata } from "@/lib/seo"
import { describeChallenge, loadChallengeResult } from "@/lib/server/challenge-share"
import ChallengeResultsView from "./challenge-results-view"

type ChallengeResultsProps = { params: Promise<{ challengeId: string }> }

// A challenge is a personal match, so it stays out of search results (noindex), but its link
// still carries a full title, description and its own share card for WhatsApp and the like.
// The card comes from opengraph-image.tsx / twitter-image.tsx in this folder.
export async function generateMetadata({ params }: ChallengeResultsProps): Promise<Metadata> {
  await connection()
  const { challengeId } = await params
  const challenge = await loadChallengeResult(challengeId)
  if (!challenge) return { title: "Challenge not found", robots: { index: false, follow: false } }

  const { title, description } = describeChallenge(challenge)
  const base = pageMetadata({ title, description, path: `/challenge-results/${challengeId}`, noindex: true })
  return {
    ...base,
    openGraph: { ...base.openGraph, images: undefined },
    twitter: { ...base.twitter, images: undefined },
  }
}

export default async function ChallengeResultsPage({ params }: ChallengeResultsProps) {
  // Results come from the database on every request, never from the build.
  await connection()
  const { challengeId } = await params

  const challenge = await loadChallengeResult(challengeId)
  if (!challenge) notFound()

  return <ChallengeResultsView challenge={challenge} />
}
