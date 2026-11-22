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
  const path = `/challenge-results/${challengeId}`
  const base = pageMetadata({ title, description, path, noindex: true })
  const image = { width: 1200, height: 630, alt: title }
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ ...image, url: `${path}/opengraph-image` }] },
    twitter: { ...base.twitter, images: [{ ...image, url: `${path}/twitter-image` }] },
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
