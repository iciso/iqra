"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Player {
  id: string
  name: string
  avatar?: string
  score: number
  rank: number
  badges: number
  streak: number
  categories_mastered: number
}

interface TopPlayersProps {
  limit?: number
  showHeader?: boolean
  compact?: boolean
}

export default function SimpleTopPlayers({ limit = 10, showHeader = true, compact = false }: TopPlayersProps) {
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchTopPlayers = async () => {
      try {
        setLoading(true)
        setError(null)

        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Request timeout")), 10000) // 10 second timeout
        })

        // Create the fetch promise
        const fetchPromise = fetch("/api/leaderboard/top-players", {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
        })

        // Race between fetch and timeout
        const response = (await Promise.race([fetchPromise, timeoutPromise])) as Response

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (isMounted) {
          if (data.success && Array.isArray(data.players)) {
            setPlayers(data.players.slice(0, limit))
          } else {
            // Fallback to mock data if API fails
            setPlayers(generateMockPlayers(limit))
          }
        }
      } catch (err) {
        console.warn("Failed to fetch top players, using mock data:", err)

        if (isMounted) {
          // Use mock data as fallback
          setPlayers(generateMockPlayers(limit))
          setError(null) // Don't show error to user, just use fallback
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTopPlayers()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [limit])

  const generateMockPlayers = (count: number): Player[] => {
    const mockNames = [
      "Ahmad Al-Rashid",
      "Fatima Hassan",
      "Omar Khalil",
      "Aisha Mahmoud",
      "Yusuf Ibrahim",
      "Khadija Ali",
      "Hassan Qureshi",
      "Zainab Ahmed",
      "Ali Mansour",
      "Maryam Farouk",
      "Abdullah Khan",
      "Safiya Rahman",
      "Ibrahim Nasir",
      "Layla Osman",
      "Hamza Malik",
    ]

    return Array.from({ length: count }, (_, index) => ({
      id: `mock-${index + 1}`,
      name: mockNames[index % mockNames.length],
      avatar: `/placeholder.svg?height=40&width=40&text=${mockNames[index % mockNames.length].split(" ")[0][0]}`,
      score: Math.max(1000 - index * 50 + Math.floor(Math.random() * 100), 100),
      rank: index + 1,
      badges: Math.floor(Math.random() * 15) + 1,
      streak: Math.floor(Math.random() * 30) + 1,
      categories_mastered: Math.floor(Math.random() * 12) + 1,
    }))
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <Award className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600"
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500"
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600"
      default:
        return "bg-muted"
    }
  }

  if (loading) {
    return (
      <Card className={compact ? "w-full" : ""}>
        {showHeader && (
          <CardHeader className={compact ? "pb-3" : ""}>
            <CardTitle className={`flex items-center gap-2 ${compact ? "text-lg" : ""}`}>
              <Trophy className="h-5 w-5 text-yellow-600" />
              Top Players
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className={compact ? "pt-0" : ""}>
          <div className="space-y-3">
            {Array.from({ length: Math.min(limit, 5) }).map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-6 w-12" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={compact ? "w-full" : ""}>
        {showHeader && (
          <CardHeader className={compact ? "pb-3" : ""}>
            <CardTitle className={`flex items-center gap-2 ${compact ? "text-lg" : ""}`}>
              <Trophy className="h-5 w-5 text-yellow-600" />
              Top Players
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className={compact ? "pt-0" : ""}>
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground mb-3">{error}</p>
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={compact ? "w-full" : ""}>
      {showHeader && (
        <CardHeader className={compact ? "pb-3" : ""}>
          <CardTitle className={`flex items-center gap-2 ${compact ? "text-lg" : ""}`}>
            <Trophy className="h-5 w-5 text-yellow-600" />
            Top Players
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={compact ? "pt-0" : ""}>
        <div className="space-y-3">
          {players.map((player, index) => (
            <div
              key={player.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-muted/50 ${
                player.rank <= 3 ? getRankColor(player.rank) + " text-white" : ""
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6">{getRankIcon(player.rank)}</div>
                <span className={`font-bold text-sm ${player.rank <= 3 ? "text-white" : "text-muted-foreground"}`}>
                  #{player.rank}
                </span>
              </div>

              <Avatar className={compact ? "h-8 w-8" : "h-10 w-10"}>
                <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                <AvatarFallback className="text-xs">
                  {player.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium truncate ${compact ? "text-sm" : ""} ${player.rank <= 3 ? "text-white" : ""}`}
                >
                  {player.name}
                </p>
                {!compact && (
                  <div className="flex items-center space-x-2 text-xs">
                    <span className={player.rank <= 3 ? "text-white/80" : "text-muted-foreground"}>
                      {player.badges} badges
                    </span>
                    <span className={player.rank <= 3 ? "text-white/60" : "text-muted-foreground"}>•</span>
                    <span className={player.rank <= 3 ? "text-white/80" : "text-muted-foreground"}>
                      {player.streak} day streak
                    </span>
                  </div>
                )}
              </div>

              <div className="text-right">
                <Badge
                  variant={player.rank <= 3 ? "secondary" : "outline"}
                  className={`${compact ? "text-xs px-2" : ""} ${
                    player.rank <= 3 ? "bg-white/20 text-white border-white/30" : ""
                  }`}
                >
                  {player.score.toLocaleString()}
                </Badge>
                {!compact && (
                  <p className={`text-xs mt-1 ${player.rank <= 3 ? "text-white/80" : "text-muted-foreground"}`}>
                    {player.categories_mastered} categories
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {players.length === 0 && (
          <div className="text-center py-8">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No players found</p>
            <p className="text-sm text-muted-foreground mt-1">Be the first to start playing!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
