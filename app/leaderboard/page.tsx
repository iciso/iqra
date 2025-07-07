"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Home, Filter, Search, RefreshCw, Database, Cloud, HardDrive } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OpponentProfile from "@/components/challenge/opponent-profile"
import { Badge } from "@/components/ui/badge"
import { getLeaderboardWithFallback } from "@/lib/database-with-fallback"
import { useToast } from "@/components/ui/use-toast"
import { Header } from "@/components/layout/header"

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
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isClient, setIsClient] = useState(false)
  const [filter, setFilter] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [activeChallengeType, setActiveChallengeType] = useState<string>("all")
  const [loading, setLoading] = useState(true) // Start with loading true
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [dataSource, setDataSource] = useState<string>("Loading...")
  const { toast } = useToast()

  // Add a function to filter and search the leaderboard
  const getFilteredLeaderboard = () => {
    return leaderboard
      .filter((entry) => {
        // Apply challenge type filter
        if (activeChallengeType !== "all" && entry.challenge !== activeChallengeType) {
          return false
        }

        // Apply category filter if selected
        if (filter && entry.category !== filter) {
          return false
        }

        // Apply search
        if (searchTerm && !entry.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false
        }

        return true
      })
      .sort((a, b) => {
        // First sort by score (descending)
        if (b.score !== a.score) {
          return b.score - a.score
        }

        // If scores are tied, sort by percentage (descending)
        if (b.percentage !== a.percentage) {
          return b.percentage - a.percentage
        }

        // If both are tied, sort by total questions (more questions = higher rank)
        return b.totalQuestions - a.totalQuestions
      })
  }

  // Get the user's best rank
  const getUserRank = (userName: string) => {
    if (!userName) return null

    const sortedEntries = leaderboard.sort((a, b) => b.percentage - a.percentage)
    const userEntry = sortedEntries.findIndex((entry) => entry.name === userName)

    return userEntry !== -1 ? userEntry + 1 : null
  }

  // Load leaderboard data with fallback mechanisms
  const loadLeaderboardData = async () => {
    try {
      setLoading(true)
      console.log("🏆 Loading leaderboard data directly...")

      // First try the database-with-fallback system
      try {
        const result = await getLeaderboardWithFallback()
        if (result && result.data && result.data.length > 0) {
          console.log(`✅ Retrieved ${result.data.length} entries from ${result.source}`)
          setLeaderboard(result.data)
          setDataSource(result.source)
          setLastRefresh(new Date())
          return
        }
      } catch (fallbackError) {
        console.error("❌ Fallback system error:", fallbackError)
      }

      // If that fails, try Supabase directly
      try {
        const { getTopPlayers } = await import("@/lib/supabase-queries")
        const topPlayers = await getTopPlayers(3000) // Remove limit to fetch all

        if (topPlayers && topPlayers.length > 0) {
          // Format the data for the leaderboard
          const formattedData = topPlayers.map((player) => ({
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
          setDataSource("Supabase User Profiles")
          setLastRefresh(new Date())
          return
        }
      } catch (supabaseError) {
        console.error("❌ Supabase direct error:", supabaseError)
      }

      // Final fallback to demo data
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
          user_id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
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

  // Initialize on component mount
  useEffect(() => {
    setIsClient(true)
    loadLeaderboardData() // Load data immediately on mount

    // Set up a refresh interval (every 5 minutes)
    const refreshInterval = setInterval(
      () => {
        loadLeaderboardData()
      },
      5 * 60 * 1000,
    )

    return () => clearInterval(refreshInterval)
  }, [])

  // Function to get medal icon based on position
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

  // Function to get source icon
  const getSourceIcon = (source: string) => {
    if (source.includes("Supabase")) return <Cloud className="h-4 w-4" />
    if (source.includes("Neon")) return <Database className="h-4 w-4" />
    return <HardDrive className="h-4 w-4" />
  }

  // Function to get source color
  const getSourceColor = (source: string) => {
    if (source.includes("Supabase")) return "bg-green-100 text-green-800"
    if (source.includes("Neon")) return "bg-blue-100 text-blue-800"
    if (source.includes("Demo")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-3xl border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading leaderboard...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <Card className="w-full max-w-4xl border-green-200 shadow-lg dark:border-green-800 overflow-hidden mt-2 sm:mt-0">
        <CardHeader className="text-center p-4 md:p-6">
          <div className="flex justify-center mb-2">
            <Trophy className="w-8 h-8 md:w-12 md:h-12 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold text-green-800 dark:text-green-400">
            IQRA Quiz Hall of Fame
          </CardTitle>
          {lastRefresh && (
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <p>Last updated: {lastRefresh.toLocaleTimeString()}</p>
              <div className="flex justify-center mt-1">
                <Badge variant="outline" className={`flex items-center gap-1 text-xs ${getSourceColor(dataSource)}`}>
                  {getSourceIcon(dataSource)}
                  <span className="hidden xs:inline">Data source:</span> {dataSource}
                </Badge>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-2 sm:p-4 md:p-6">
          <div className="mb-4 md:mb-6">
            <Tabs defaultValue="all" onValueChange={setActiveChallengeType}>
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 mb-4 h-auto">
                <TabsTrigger value="all" className="py-1.5 px-2 text-xs md:text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="daily" className="py-1.5 px-2 text-xs md:text-sm">
                  Daily
                </TabsTrigger>
                <TabsTrigger value="quiz" className="py-1.5 px-2 text-xs md:text-sm">
                  Quiz
                </TabsTrigger>
                <TabsTrigger value="challenge" className="py-1.5 px-2 text-xs md:text-sm hidden sm:block">
                  Challenge
                </TabsTrigger>
                <TabsTrigger value="quran" className="py-1.5 px-2 text-xs md:text-sm hidden sm:block">
                  Quran
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 md:mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search by name..."
                  className="pl-7 text-sm h-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex gap-1 text-xs h-9 flex-1 sm:flex-none dark:border-green-700 dark:text-green-400"
                  onClick={() => setFilter(filter ? "" : "Quran")}
                >
                  <Filter className="h-3.5 w-3.5" />
                  <span className="truncate">{filter || "All Categories"}</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex gap-1 text-xs h-9 flex-1 sm:flex-none dark:border-green-700 dark:text-green-400"
                  onClick={loadLeaderboardData}
                  disabled={loading}
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                  <span className="truncate">{loading ? "Loading..." : "Refresh"}</span>
                </Button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8 md:py-12">
              <RefreshCw className="h-6 w-6 md:h-8 md:w-8 animate-spin mx-auto mb-3 md:mb-4 text-green-600" />
              <p className="text-gray-600 dark:text-gray-300 text-sm">Loading leaderboard data...</p>
            </div>
          ) : getFilteredLeaderboard().length > 0 ? (
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="max-h-[60vh] overflow-y-auto">
                <Table className="w-full">
                  <TableCaption className="text-xs">Top scores from IQRA Quiz participants</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12 text-xs">Rank</TableHead>
                      <TableHead className="text-xs">Player</TableHead>
                      <TableHead className="text-xs hidden md:table-cell">Category</TableHead>
                      <TableHead className="text-xs hidden sm:table-cell">Type</TableHead>
                      <TableHead className="text-right text-xs">Score</TableHead>
                      <TableHead className="text-right text-xs">%</TableHead>
                      <TableHead className="text-right text-xs hidden sm:table-cell">Last Active</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getFilteredLeaderboard().map((entry, index) => (
                      <TableRow key={index} className={index < 3 ? "font-medium" : ""}>
                        <TableCell className="flex items-center py-2 text-xs">
                          {index + 1}
                          <span className="ml-1 md:ml-2">{getMedalIcon(index)}</span>
                        </TableCell>
                        <TableCell className="py-2">
                          <div className="flex items-center gap-1 md:gap-2">
                            {entry.name === "IQRA Bot" || entry.name === "QuizMaster" ? (
                              <OpponentProfile
                                opponent={{
                                  id: "bot-1",
                                  name: entry.name,
                                  type: "bot",
                                }}
                                size="sm"
                              />
                            ) : (
                              <div className="flex items-center gap-1 md:gap-2">
                                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xs font-medium">
                                  {entry.name.charAt(0)}
                                </div>
                                <span className="text-xs md:text-sm truncate max-w-[80px] sm:max-w-none">
                                  {entry.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="py-2 text-xs hidden md:table-cell">
                          {entry.category || "All Categories"}
                        </TableCell>
                        <TableCell className="py-2 text-xs hidden sm:table-cell">
                          {entry.challenge ? entry.challenge.charAt(0).toUpperCase() + entry.challenge.slice(1) : "All"}
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
                        <TableCell className="text-right py-2 text-xs hidden sm:table-cell">{entry.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 md:py-8 text-gray-500 dark:text-gray-400">
              <p className="text-sm">No entries match your search. Try adjusting your filters.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center gap-2 md:gap-4 p-4">
          <a
            href="/challenges"
            className="inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 h-8 md:h-10 px-3 md:px-4 py-2"
          >
            Back to Challenges
          </a>
          <a
            href="/badges"
            className="inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 md:h-10 px-3 md:px-4 py-2 dark:border-green-700 dark:text-green-400"
          >
            View Badges
          </a>
        </CardFooter>
      </Card>
    </main>
  )
}
