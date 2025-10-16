"use client"
  
import { useEffect, useMemo, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, RefreshCw, Database, Cloud, HardDrive, Target, UserRoundSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import OpponentProfile from "@/components/challenge/opponent-profile"
import { Badge } from "@/components/ui/badge"
import { getLeaderboardWithFallback } from "@/lib/database-with-fallback"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"

interface LeaderboardEntry {
  name: string
  score: number
  totalQuestions: number
  percentage: number
  date: string
  category?: string
  difficulty?: string
  challenge?: string
  user_id?: string
}

export default function LeaderboardPage() {
  const { toast } = useToast()
  const { user } = useAuth()

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState(true)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [dataSource, setDataSource] = useState<string>("Loading...")

  // Sort for consistent ranks
  const sortLeaderboard = (entries: LeaderboardEntry[]) => {
    return [...entries].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      if (b.percentage !== a.percentage) return b.percentage - a.percentage
      return b.totalQuestions - a.totalQuestions
    })
  }

  // Show ALL players; no filters, no slicing
  const sorted = useMemo(() => sortLeaderboard(leaderboard), [leaderboard])

  // Current user details
  const myRank = useMemo(() => {
    if (!user) return null
    const idx = sorted.findIndex((e) => e.user_id === user.id)
    return idx >= 0 ? idx + 1 : null
  }, [sorted, user])

  const myEntry = useMemo(() => {
    if (!user) return null
    return sorted.find((e) => e.user_id === user.id) || null
  }, [sorted, user])

  const nextMilestone = useMemo(() => {
    if (!myRank || !myEntry) return null
    if (myRank <= 1) return null
    const above = sorted[myRank - 2]
    if (!above) return null
    const pointsBehind = Math.max(0, above.score - myEntry.score)
    return {
      targetName: above.name,
      targetRank: myRank - 1,
      pointsBehind,
    }
  }, [sorted, myRank, myEntry])

  // Load data (try fallback first, then Supabase with a high limit)
  const loadLeaderboardData = async () => {
    try {
      setLoading(true)

      // 1) Try Supabase first with a high limit so newcomers appear
      try {
        console.log("🏆 Leaderboard: trying Supabase first...")
        const { getTopPlayers } = await import("@/lib/supabase-queries")
        const topPlayers = await getTopPlayers(1000)
        if (topPlayers && topPlayers.length > 0) {
          console.log(`✅ Supabase returned ${topPlayers.length} players`)
          const formattedData = topPlayers.map((player: any) => ({
            name: player.full_name || player.username || "Unknown User",
            score: player.total_score || 0,
            totalQuestions: player.total_questions || 0,
            percentage:
              player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
            date: new Date().toLocaleDateString(),
            category: "All Categories",
            challenge: "all",
            user_id: player.id,
          }))
          setLeaderboard(formattedData)
          setDataSource(`Supabase User Profiles`)
          setLastRefresh(new Date())
          return
        } else {
          console.warn("⚠️ Supabase returned no players, trying fallback...")
        }
      } catch (err) {
        console.error("❌ Supabase direct error:", err)
      }

      // 2) Fallback (may return fewer rows, e.g., 20)
      try {
        console.log("📊 Leaderboard: trying fallback...")
        const result = await getLeaderboardWithFallback()
        if (result && result.data && result.data.length > 0) {
          console.log(`✅ Fallback returned ${result.data.length} players from ${result.source}`)
          setLeaderboard(result.data)
          setDataSource(result.source)
          setLastRefresh(new Date())
          return
        }
      } catch (fallbackError) {
        console.error("❌ Fallback system error:", fallbackError)
      }

      // 3) Demo data if everything fails
      console.log("⚠️ All data sources failed, using demo data")
      setLeaderboard([
        {
          name: "Dr. Muhammad Murtaza Ikram",
          score: 10,
          totalQuestions: 10,
          percentage: 100,
          date: new Date().toLocaleDateString(),
          category: "Quran",
          difficulty: "Easy",
          challenge: "daily",
          user_id: "demo-1",
        },
        {
          name: "IQRA Bot",
          score: 9,
          totalQuestions: 10,
          percentage: 90,
          date: new Date().toLocaleDateString(),
          category: "Quran",
          difficulty: "Easy",
          challenge: "daily",
          user_id: "demo-2",
        },
        {
          name: "QuizMaster",
          score: 8,
          totalQuestions: 10,
          percentage: 80,
          date: new Date().toLocaleDateString(),
          category: "Islamic History",
          difficulty: "Medium",
          challenge: "quiz",
          user_id: "demo-3",
        },
      ])
      setDataSource("Demo Data (All Sources Failed)")
    } catch (error) {
      console.error("❌ Critical error loading leaderboard:", error)
      toast({
        title: "Error loading leaderboard",
        description: "Please try refreshing the page",
        variant: "destructive",
      })
      setLeaderboard([])
      setDataSource("Error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setIsClient(true)
    loadLeaderboardData()
    const refreshInterval = setInterval(() => loadLeaderboardData(), 5 * 60 * 1000)
    return () => clearInterval(refreshInterval)
  }, [])

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 2:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return null
    }
  }

  const getSourceIcon = (source: string) => {
    if (source.includes("Supabase")) return <Cloud className="h-4 w-4" />
    if (source.includes("Neon")) return <Database className="h-4 w-4" />
    return <HardDrive className="h-4 w-4" />
  }

  const getSourceColor = (source: string) => {
    if (source.includes("Supabase")) return "bg-green-100 text-green-800"
    if (source.includes("Neon")) return "bg-blue-100 text-blue-800"
    if (source.includes("Demo")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  const handleFindMe = () => {
    if (!user) {
      toast({ title: "Not signed in", description: "Sign in to locate your rank.", variant: "default" })
      return
    }
    const el = document.getElementById(`leader-row-${user.id}`)
    if (!el) {
      toast({ title: "No games yet", description: "Play a quiz to appear on the leaderboard." })
      return
    }
    el.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-4xl border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading leaderboard...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <Card className="w-full max-w-4xl border-green-200 shadow-lg dark:border-green-800 overflow-visible mt-2 sm:mt-0">
        <CardHeader className="text-center p-4 md:p-6">
          <div className="flex justify-center mb-2">
            <Trophy className="w-8 h-8 md:w-12 md:h-12 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold text-green-800 dark:text-green-400">
            IQRA Quiz Hall of Fame
          </CardTitle>

          {/* Simple motivation summary */}
          <div className="mt-3 grid gap-2 sm:grid-cols-2 text-left">
            <div className="rounded-md border border-green-200 dark:border-green-800 p-3 bg-white/60 dark:bg-green-900/30">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Your Rank</span>
                {lastRefresh && (
                  <span className="text-[10px] md:text-xs text-gray-500">
                    Updated {lastRefresh.toLocaleTimeString()}
                  </span>
                )}
              </div>
              {myEntry && myRank ? (
                <div className="mt-1 flex items-end justify-between">
                  <div>
                    <div className="text-lg md:text-2xl font-semibold text-green-700 dark:text-green-300">
                      #{myRank}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {myEntry.score} pts • {myEntry.percentage}% best
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleFindMe}
                    className="h-8 px-2 text-xs dark:border-green-700 dark:text-green-400 bg-transparent"
                  >
                    <UserRoundSearch className="h-3.5 w-3.5 mr-1" />
                    Find me
                  </Button>
                </div>
              ) : (
                <div className="mt-1 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">
                  New here? Play a quiz to appear on the board.
                </div>
              )}
            </div>

            <div className="rounded-md border border-green-200 dark:border-green-800 p-3 bg-white/60 dark:bg-green-900/30">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Data source</span>
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 text-[10px] ${getSourceColor(dataSource)}`}
                >
                  {getSourceIcon(dataSource)}
                  {dataSource}
                </Badge>
              </div>
              {nextMilestone ? (
                <div className="mt-1 flex items-start gap-2">
                  <Target className="h-4 w-4 text-green-600 mt-0.5" />
                  <div className="text-xs md:text-sm text-gray-700 dark:text-gray-200">
                    You’re {nextMilestone.pointsBehind} pts behind #{nextMilestone.targetRank}{" "}
                    {nextMilestone.targetName}.
                  </div>
                </div>
              ) : (
                <div className="mt-1 text-xs md:text-sm text-gray-700 dark:text-gray-200">
                  Keep playing to climb the ranks!
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-2 sm:p-4 md:p-6">
          {loading ? (
            <div className="text-center py-8 md:py-12">
              <RefreshCw className="h-6 w-6 md:h-8 md:w-8 animate-spin mx-auto mb-3 md:mb-4 text-green-600" />
              <p className="text-gray-600 dark:text-gray-300 text-sm">Loading leaderboard data...</p>
            </div>
          ) : sorted.length > 0 ? (
            <>
              <div className="overflow-x-auto -mx-2 sm:mx-0 max-h-[70vh] overflow-y-auto rounded-md">
                <Table className="w-full">
                  <TableCaption className="text-xs">Total players: {sorted.length}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-14 text-xs">Rank</TableHead>
                      <TableHead className="text-xs">Player</TableHead>
                      <TableHead className="text-right text-xs">Score</TableHead>
                      <TableHead className="text-right text-xs">%</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sorted.map((entry, overallIndex) => {
                      const isMe = user && entry.user_id === user.id
                      return (
                        <TableRow
                          key={`${entry.user_id ?? entry.name}-${overallIndex}`}
                          id={isMe ? `leader-row-${entry.user_id}` : undefined}
                          className={`${overallIndex < 3 ? "font-medium" : ""} ${
                            isMe ? "bg-green-50 dark:bg-green-950/40" : ""
                          }`}
                        >
                          <TableCell className="py-2 text-xs">
                            <div className="flex items-center">
                              <span className="min-w-5">{overallIndex + 1}</span>
                              <span className="ml-1 md:ml-2">{getMedalIcon(overallIndex)}</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-2">
                            <div className="flex items-center gap-1 md:gap-2">
                              {entry.name === "IQRA Bot" || entry.name === "QuizMaster" ? (
                                <OpponentProfile opponent={{ id: "bot-1", name: entry.name, type: "bot" }} size="sm" />
                              ) : (
                                <div className="flex items-center gap-1 md:gap-2">
                                  <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xs font-medium">
                                    {entry.name.charAt(0)}
                                  </div>
                                  <span className="text-xs md:text-sm truncate max-w-[200px] sm:max-w-none">
                                    {entry.name}
                                  </span>
                                  {isMe && (
                                    <Badge variant="outline" className="text-[10px] ml-1">
                                      You
                                    </Badge>
                                  )}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right py-2 text-xs">
                            {entry.score}/{entry.totalQuestions}
                          </TableCell>
                          <TableCell className="text-right py-2 text-xs font-medium">
                            <span
                              className={
                                entry.percentage >= 90
                                  ? "text-green-600 dark:text-green-400"
                                  : entry.percentage >= 70
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-600 dark:text-gray-400"
                              }
                            >
                              {entry.percentage}%
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-3 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="flex gap-1 text-xs h-9 dark:border-green-700 dark:text-green-400 bg-transparent"
                  onClick={loadLeaderboardData}
                  disabled={loading}
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                  <span className="truncate">{loading ? "Refreshing..." : "Refresh"}</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-6 md:py-8 text-gray-500 dark:text-gray-400">
              <p className="text-sm">No players yet. Play a quiz to appear on the leaderboard.</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 p-4">
          <a
            href="/challenges"
            className="inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 h-8 md:h-10 px-3 md:px-4 py-2"
          >
            Back to Challenges
          </a>
          <a
            href="/badges"
            className="inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium border dark:border-green-700 dark:text-green-400 h-8 md:h-10 px-3 md:px-4 py-2"
          >
            View Badges
          </a>
        </CardFooter>
      </Card>
    </main>
  )
}
