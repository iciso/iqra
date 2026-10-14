"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw, Users, Database } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog"

interface Player {
  id: string
  username: string
  full_name?: string
  total_score: number
  best_percentage: number
}

export default function SimpleTopPlayers() {
  const { user, loading: authLoading } = useAuth()
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [dataSource, setDataSource] = useState<string>("Loading...")
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const mountedRef = useRef(true)
  const loadingRef = useRef(false)
  const [challengeDialogOpen, setChallengeDialogOpen] = useState(false)
  const [selectedOpponent, setSelectedOpponent] = useState<Player | null>(null)

  const fallbackPlayers: Player[] = [] // Add fallback players if needed

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

      // Try the API endpoint first
      console.log("🔍 Step 1: Trying API endpoint for challenge players...")
      try {
        const response = await Promise.race([
          fetch("/api/challenges/players"),
          new Promise((_, reject) => setTimeout(() => reject(new Error("API timeout")), 5000)),
        ])

        const data = await response.json()
        if (data.success && data.players && data.players.length > 0) {
          const filteredData = data.players.filter((player: Player) => player.username !== "Test User")
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
            const leaderboardData = JSON.parse(stored)
            const storagePlayersMap = new Map<string, any>()
            leaderboardData.forEach((entry: any) => {
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
                .sort((a, b) => b.best_percentage - a.best_percentage || b.total_score - a.total_score)
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
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
        console.log("✅ Using registered users as fallback:", filteredFallbackPlayers.length, "users")
        setPlayers(filteredFallbackPlayers)
        setDataSource("Registered Users")
        setIsUsingFallback(true)
      }
    } catch (err: any) {
      console.error("❌ Load error:", err.message)
      if (mountedRef.current) {
        console.log("🔄 Using registered users as fallback data")
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
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

  const getSourceIcon = () => {
    if (dataSource.includes("Neon")) return <Database className="h-4 w-4" />
    if (dataSource.includes("Quiz Leaderboard")) return <Trophy className="h-4 w-4" />
    return <Users className="h-4 w-4" />
  }

  const getSourceColor = () => {
    if (dataSource.includes("Neon")) return "bg-blue-100 text-blue-800"
    if (dataSource.includes("Quiz Leaderboard")) return "bg-green-100 text-green-800"
    return "bg-purple-100 text-purple-800"
  }

  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    mountedRef.current = true
    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...")
      loadPlayers()
    } else {
      console.log("⏳ Auth still loading, waiting...")
      const timeout = setTimeout(() => {
        console.log("Auth loading timeout - forcing completion")
        loadPlayers()
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
      loadPlayers()
    }
  }, [user, authLoading])

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers()
    }
  }, [showAll])

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("⚠️ Safety timeout triggered - forcing fallback data")
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
        setPlayers(filteredFallbackPlayers)
        setDataSource("Registered Users")
        setIsUsingFallback(true)
        setLoading(false)
          loadingRef.current = false
      }
    }, 10000)
    return () => clearTimeout(safetyTimeout)
  }, [loading])

  if (authLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Initializing...</span>
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
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Loading top players...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const cardTitle = isUsingFallback
    ? `Registered Users (${players.length})`
    : showAll
      ? `All Players (${players.length})`
      : `Top Players (${players.length})`

  return (
    <Card>
      <CardHeader className="px-3 md:px-6 py-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 md:gap-2">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
              <span className="text-sm md:text-base">{cardTitle}</span>
            </div>
            <span className={`text-xs px-1 md:px-2 py-0.5 md:py-1 rounded flex items-center gap-1 ${getSourceColor()}`}>
              {getSourceIcon()}
              <span className="hidden xs:inline">{dataSource}</span>
            </span>
          </div>
          <div className="flex gap-1 md:gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              title={showAll ? "Show top players only" : "Show all players"}
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
          <div className="text-center py-4">
            <p className="text-gray-500 mb-2 text-sm">No players found</p>
          </div>
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
                      {isUsingFallback ? "Registered User" : "Player"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  {!isUsingFallback && (
                    <div className="text-right mr-1 md:mr-2">
                      <p className="font-medium text-xs md:text-sm">{player.total_score} pts</p>
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
                    Challenge
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {selectedOpponent && (
        <CategoryFirstChallengeDialog
          isOpen={challengeDialogOpen}
          onClose={() => {
            setChallengeDialogOpen(false)
            setSelectedOpponent(null)
          }}
          opponent={selectedOpponent}
        />
      )}
    </Card>
  )
}
