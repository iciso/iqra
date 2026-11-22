"use client"

import { useCallback, useEffect, useState, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { getPendingChallengesAction, respondToChallengeAction } from "@/app/actions/challenges"
import type { ChallengeRow } from "@/lib/server/types"
import { readPlayerName, savePlayerName, subscribePlayerName } from "@/lib/player-name"

const REFRESH_MS = 60_000

// Server snapshot is undefined = "not read yet", so server and hydration renders agree.
const notReadOnServer = (): string | null | undefined => undefined

/** The saved player name; updates when it is saved anywhere (this tab or another). */
export function useSavedPlayerName() {
  return useSyncExternalStore(subscribePlayerName, readPlayerName, notReadOnServer)
}

type Loaded = { name: string; rows: ChallengeRow[]; failed: boolean }

/** Pending challenges sent to `name`, refreshed on window focus and every minute while visible. */
export function usePendingChallenges(name: string | null | undefined) {
  const router = useRouter()
  const [loaded, setLoaded] = useState<Loaded | null>(null)

  // State is set only in the promise callbacks, so this is safe to call from effects.
  const refresh = useCallback(() => {
    if (!name) return
    getPendingChallengesAction(name).then(
      (rows) => setLoaded({ name, rows: rows || [], failed: false }),
      () => setLoaded((prev) => ({ name, rows: prev?.name === name ? prev.rows : [], failed: true })),
    )
  }, [name])

  useEffect(() => {
    if (!name) return
    refresh()
    const tick = () => {
      if (document.visibilityState === "visible") refresh()
    }
    const timer = window.setInterval(tick, REFRESH_MS)
    window.addEventListener("focus", refresh)
    document.addEventListener("visibilitychange", tick)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener("focus", refresh)
      document.removeEventListener("visibilitychange", tick)
    }
  }, [name, refresh])

  const current = loaded && loaded.name === name ? loaded : null
  const challenges = current?.rows ?? []

  const respond = async (challengeId: string, action: "accept" | "decline") => {
    if (!name) return
    try {
      const result = await respondToChallengeAction({ challengeId, action, playerName: name })
      if (!result.success) throw new Error(result.error || "Failed")

      setLoaded((prev) => (prev ? { ...prev, rows: prev.rows.filter((c) => c.id !== challengeId) } : prev))

      if (action === "decline") {
        toast({ title: "Challenge Declined" })
        return
      }

      toast({ title: "Challenge Accepted! 🎯", description: "Starting your quiz now..." })
      const c = result.challenge
      // Make sure the name carries into the quiz before navigating.
      savePlayerName(name)
      router.push(
        `/quiz?category=${c.category}&difficulty=${c.difficulty}&challenge=${c.id}&questions=${c.question_count}${c.section_number ? `&section=${c.section_number}` : ""}&opponentName=${encodeURIComponent(c.challenger_name)}&challengerTurn=false`,
      )
    } catch (err) {
      toast({ title: "Error", description: (err as { message?: string } | null)?.message, variant: "destructive" })
    }
  }

  return {
    challenges,
    loading: !!name && !current,
    failed: current?.failed ?? false,
    refresh,
    respond,
  }
}
