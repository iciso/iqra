"use client"

import { useTranslation } from "react-i18next"
import { challengeCategoryLabel } from "@/lib/challenge-labels"

/** Translated category names, difficulty names and "time left" for challenges. */
export const useChallengeLabels = () => {
  const { t } = useTranslation("challenges")

  const categoryName = (id: string) =>
    t(`categoryNames.${id}`, { defaultValue: challengeCategoryLabel(id) })

  const difficultyName = (d: string) =>
    t(`difficulty.${d}`, { ns: "common", defaultValue: d.charAt(0).toUpperCase() + d.slice(1) })

  /** Client-only: it reads the current time. */
  const timeLeft = (dateString: string) => {
    const diffMs = new Date(dateString).getTime() - Date.now()
    if (diffMs <= 0) return t("timeLeft.expired")
    const h = Math.floor(diffMs / (1000 * 60 * 60))
    const m = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    return h > 0 ? t("timeLeft.hm", { h, m }) : t("timeLeft.m", { m })
  }

  return { t, categoryName, difficultyName, timeLeft }
}
