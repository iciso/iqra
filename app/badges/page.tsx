"use client"

import { useMemo, useSyncExternalStore } from "react"
import { useTranslation } from "react-i18next"
import BadgesCollection from "@/components/badges/badges-collection"
import PageHeader from "@/components/shared/page-header"
import { pageContainerClass } from "@/lib/page-layout"

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
  const { t } = useTranslation("profile")
  const badgesRaw = useSyncExternalStore(noSubscribe, readBadgesRaw, serverBadgesRaw)
  const isClient = badgesRaw !== undefined
  // Re-parse only when the stored string changes.
  const earnedBadges = useMemo(() => parseBadges(badgesRaw), [badgesRaw])

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <div className="mx-auto w-full max-w-6xl sm:px-6 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <p>{t("badges.loading")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={pageContainerClass}>
      <PageHeader
        title={t("badges.title")}
        subtitle={t("badges.subtitle")}
      />

      <div className="mx-auto w-full max-w-4xl">
        <BadgesCollection earnedBadges={earnedBadges} />
      </div>
    </div>
  )
}
