"use client"

import { useState, useEffect, useEffectEvent, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw, Users } from "lucide-react"
import EmptyState from "@/components/shared/empty-state"
import { useAuth } from "@/contexts/auth-context"
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog"
import TopPlayersList from "./top-players-list"
import { getChallengePlayersAction } from "@/app/actions/challenges"
import type { ChallengePlayersResult } from "@/lib/server/leaderboard-data"

interface Player {
  id: string
  username: string
  full_name?: string
  total_score: number
  best_percentage: number
}

interface SimpleTopPlayersProps {
  // Loaded by the server page. Used for the first paint and the first load; refreshes call the Server Action.
  initialPlayers?: ChallengePlayersResult
  // Home page: a plain list of the first `limit` players, no card of its own and no inner scroll.
  compact?: boolean
  limit?: number
}

interface StoredLeaderboardEntry {
  name: string
  score: number
  percentage: number
}

const FALLBACK_PLAYERS: Player[] = [] // Add fallback players if needed

const usablePlayers = (result?: ChallengePlayersResult | null): Player[] =>
  result?.success && result.players?.length
    ? result.players.filter((player: Player) => player.username !== "Test User")
    : []

export default function SimpleTopPlayers({ initialPlayers, compact = false, limit = 8 }: SimpleTopPlayersProps = {}) {
  const { t } = useTranslation("challenges")
  const { user, loading: authLoading } = useAuth()
  const initialRef = useRef<ChallengePlayersResult | null>(initialPlayers ?? null)
  const [players, setPlayers] = useState<Player[]>(() => usablePlayers(initialPlayers))
  const [loading, setLoading] = useState(() => usablePlayers(initialPlayers).length === 0)
  const [retryCount, setRetryCount] = useState(0)
  const [showAll, setShowAll] = useState(false)
  // Where the players came from is for the console only; players never see it.
  const [, setDataSource] = useState<string>("Loading...")
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const mountedRef = useRef(true)
  const loadingRef = useRef(false)
  const [challengeDialogOpen, setChallengeDialogOpen] = useState(false)
  const [selectedOpponent, setSelectedOpponent] = useState<Player | null>(null)

  const loadPlayers = async () => {
    if (loadingRef.current) {
      console.log("🛑 Already loading players, skipping...")
      return
    }

    try {
      loadingRef.current = true
      setLoading(true)
      setIsUsingFallback(false)
      console.log("🏆 Loading top players... (attempt", retryCount + 1, ")")

      // Server first: the page's own load on the first pass, the Server Action after that
      console.log("🔍 Step 1: Loading challenge players from the server...")
      try {
        const data =
          initialRef.current ??
          (await Promise.race([
            getChallengePlayersAction(),
            new Promise<never>((_, reject) => setTimeout(() => reject(new Error("API timeout")), 5000)),
          ]))
        initialRef.current = null

        const filteredData = usablePlayers(data)
        if (filteredData.length > 0) {
          console.log("✅ Players loaded from API:", filteredData.length, "players")
          if (mountedRef.current) {
            setPlayers(filteredData)
            setDataSource("Neon Database")
            setIsUsingFallback(false)
          }
          return
        }
      } catch (apiError) {
        console.error("❌ API error:", apiError)
      }

      console.log("🔍 Step 2: Trying localStorage for challenge data...")
      try {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem("quranQuizLeaderboard")
          if (stored) {
            const leaderboardData: StoredLeaderboardEntry[] = JSON.parse(stored)
            const storagePlayersMap = new Map<string, Player>()
            leaderboardData.forEach((entry) => {
              if (!storagePlayersMap.has(entry.name)) {
                storagePlayersMap.set(entry.name, {
                  id: `player-${Math.random()}`,
                  username: entry.name.split(" ")[0].toLowerCase(),
                  full_name: entry.name,
                  total_score: entry.score,
                  best_percentage: entry.percentage,
                })
              }
            })

            if (storagePlayersMap.size > 0) {
              const storagePlayers = Array.from(storagePlayersMap.values())
                .sort((a, b) => b.total_score - a.total_score || b.best_percentage - a.best_percentage || (a.full_name ?? "").localeCompare(b.full_name ?? ""))
              console.log("✅ Players loaded from localStorage:", storagePlayers.length, "players")
              if (mountedRef.current) {
                setPlayers(storagePlayers)
                setDataSource("Quiz Leaderboard")
                setIsUsingFallback(false)
              }
              return
            }
          }
        }
      } catch (storageError) {
        console.error("❌ localStorage error:", storageError)
      }

      console.log("🔍 Step 3: Using registered users as final fallback...")
      if (mountedRef.current) {
        const filteredFallbackPlayers = FALLBACK_PLAYERS.filter((player) => player.username !== "Test User")
        console.log("✅ Using registered users as fallback:", filteredFallbackPlayers.length, "users")
        setPlayers(filteredFallbackPlayers)
        setDataSource("Registered Users")
        setIsUsingFallback(true)
      }
    } catch (err) {
      console.error("❌ Load error:", (err as { message?: string } | null)?.message)
      if (mountedRef.current) {
        console.log("🔄 Using registered users as fallback data")
        const filteredFallbackPlayers = FALLBACK_PLAYERS.filter((player) => player.username !== "Test User")
        setPlayers(filteredFallbackPlayers)
        setDataSource("Registered Users")
        setIsUsingFallback(true)
        }

      if (retryCount < 1 && mountedRef.current) {
        const delay = 2000
        console.log(`🔄 Will retry in ${delay}ms... (attempt ${retryCount + 1}/1)`)
        setTimeout(() => {
          if (mountedRef.current) {
            setRetryCount(retryCount + 1)
            loadingRef.current = false
            loadPlayers()
          }
        }, delay)
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
      loadingRef.current = false
    }
  }

  const resetLoadingState = () => {
    console.log("🔄 Resetting loading state...")
    loadingRef.current = false
    setLoading(false)
    setRetryCount(0)
  }

  const handleChallenge = (player: Player) => {
    setSelectedOpponent(player)
    setChallengeDialogOpen(true)
  }

  const handleRetry = () => {
    console.log("🔄 Manual retry triggered by user")
    resetLoadingState()
    loadPlayers()
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    setTimeout(() => loadPlayers(), 100)
  }



  // Effects below call the latest loadPlayers without re-running when it changes.
  const onLoadPlayers = useEffectEvent(() => {
    loadPlayers()
  })
  const onShowAllChange = useEffectEvent(() => {
    if (!authLoading && mountedRef.current) loadPlayers()
  })

  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    mountedRef.current = true
    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...")
      onLoadPlayers()
    } else {
      console.log("⏳ Auth still loading, waiting...")
      const timeout = setTimeout(() => {
        console.log("Auth loading timeout - forcing completion")
        onLoadPlayers()
      }, 3000)
      return () => clearTimeout(timeout)
    }
    return () => {
      console.log("🚫 SimpleTopPlayers component unmounting")
      mountedRef.current = false
    }
  }, [authLoading])

  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("🔄 Auth state changed, reloading players...")
      onLoadPlayers()
    }
  }, [user, authLoading])

  useEffect(() => {
    onShowAllChange()
  }, [showAll])

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("⚠️ Safety timeout triggered - forcing fallback data")
        const filteredFallbackPlayers = FALLBACK_PLAYERS.filter((player) => player.username !== "Test User")
        setPlayers(filteredFallbackPlayers)
        setDataSource("Registered Users")
        setIsUsingFallback(true)
        setLoading(false)
          loadingRef.current = false
      }
    }, 10000)
    return () => clearTimeout(safetyTimeout)
  }, [loading])

  const challengeDialog = selectedOpponent && (
    <CategoryFirstChallengeDialog
      isOpen={challengeDialogOpen}
      onClose={() => {
        setChallengeDialogOpen(false)
        setSelectedOpponent(null)
      }}
      opponent={selectedOpponent}
    />
  )

  if (compact) {
    return (
      <>
        <TopPlayersList
          players={players.slice(0, limit)}
          loading={players.length === 0 && (authLoading || loading)}
          onChallenge={handleChallenge}
          showScores={!isUsingFallback}
        />
        {challengeDialog}
      </>
    )
  }

  if (authLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            {t("players.topPlayers")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">{t("players.initializing")}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading && retryCount === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            {t("players.topPlayers")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">{t("players.loadingTop")}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const cardTitle = isUsingFallback
    ? t("players.titleRegistered", { count: players.length })
    : showAll
      ? t("players.titleAll", { count: players.length })
      : t("players.titleTop", { count: players.length })

  return (
    <Card>
      <CardHeader className="px-3 md:px-6 py-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 md:gap-2">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
              <span className="text-sm md:text-base">{cardTitle}</span>
            </div>
          </div>
          <div className="flex gap-1 md:gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              title={showAll ? t("players.showTop") : t("players.showAll")}
              className="h-7 w-7 md:h-8 md:w-8 p-0 bg-transparent"
            >
              <Users className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRetry}
              disabled={loading}
              className="h-7 w-7 md:h-8 md:w-8 p-0 bg-transparent"
            >
              <RefreshCw className={`h-3 w-3 md:h-4 md:w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-6 py-2 md:py-4 max-h-[70vh] overflow-y-auto">
        {players.length === 0 ? (
          <EmptyState compact icon={<Users />} title={t("players.noneFound")} />
        ) : (
          <div className="space-y-2 md:space-y-3">
            {players.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                  {!isUsingFallback && (
                    <span className="w-5 md:w-6 text-xs md:text-sm font-medium text-gray-500">{index + 1}</span>
                  )}
                  <Avatar className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0">
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs md:text-sm">
                      {(player.full_name || player.username).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-xs md:text-sm truncate">{player.full_name || player.username}</p>
                    <p className="text-xs text-gray-500 hidden xs:block">
                      {isUsingFallback ? t("players.registeredUser") : t("players.player")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  {!isUsingFallback && (
                    <div className="text-right mr-1 md:mr-2">
                      <p className="font-medium text-xs md:text-sm">{t("pts", { value: player.total_score })}</p>
                      <p className="text-xs text-gray-500">{player.best_percentage}%</p>
                    </div>
                  )}
                  <Button
                    size="sm"
                    onClick={() =>
                      handleChallenge({
                        id: player.id,
                        username: player.username,
                        full_name: player.full_name,
                        total_score: player.total_score,
                        best_percentage: player.best_percentage,
                      })
                    }
                    className="h-7 md:h-8 py-0 px-2 md:px-3 text-xs bg-green-600 hover:bg-green-700"
                  >
                    {t("players.challenge")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {challengeDialog}
    </Card>
  )
}
