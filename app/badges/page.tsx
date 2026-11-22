"use client"

import { useMemo, useSyncExternalStore } from "react"
import BadgesCollection from "@/components/badges/badges-collection"

// Badges live in localStorage. The snapshot is the raw string (stable between
// reads); the server snapshot is undefined so the server renders the loading state.
const noSubscribe = () => () => {}
const readBadgesRaw = () => localStorage.getItem("quranQuizBadges")
const serverBadgesRaw = () => undefined

// Same parsing as getEarnedBadges() in utils/badges, but from the snapshot string.
function parseBadges(raw: string | null | undefined): string[] {
  if (!raw) return []
  try {
    return JSON.parse(raw) as string[]
  } catch (error) {
    console.error("Error getting badges:", error)
    return []
  }
}

export default function BadgesPage() {
  const badgesRaw = useSyncExternalStore(noSubscribe, readBadgesRaw, serverBadgesRaw)
  const isClient = badgesRaw !== undefined
  // Re-parse only when the stored string changes.
  const earnedBadges = useMemo(() => parseBadges(badgesRaw), [badgesRaw])

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <div className="mx-auto w-full max-w-6xl sm:px-6 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <p>Loading badges...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl sm:px-6 flex flex-col items-center pt-16 p-4">
    
      <h1 className="text-3xl font-bold text-center mb-6 text-green-800 dark:text-green-400">Your Badge Collection</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
        Earn badges by completing challenges, achieving high scores, and maintaining learning streaks. Each badge
        represents a milestone in your Islamic knowledge journey.
      </p>

      <div className="w-full max-w-4xl">
        <BadgesCollection earnedBadges={earnedBadges} />
      </div>
    </div>
  )
}
