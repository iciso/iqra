"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, Medal, Home, Filter, Search, RefreshCw, Database, Cloud, HardDrive } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OpponentProfile from "@/components/challenge/opponent-profile"
import { Badge } from "@/components/ui/badge"

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
  const [loading, setLoading] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [dataSource, setDataSource] = useState<string>("Loading...")

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
      .sort((a, b) => b.percentage - a.percentage)
  }

  // Get the user's best rank
  const getUserRank = (userName: string) => {
    if (!userName) return null

    const sortedEntries = leaderboard.sort((a, b) => b.percentage - a.percentage)
    const userEntry = sortedEntries.findIndex((entry) => entry.name === userName)

    return userEntry !== -1 ? userEntry + 1 : null
  }

  useEffect(() => {
    setIsClient(true)
    loadLeaderboardFromDatabase()
  }, [])

  const loadLeaderboardFromDatabase = async () => {
    try {
      setLoading(true)
      console.log("🏆 Loading leaderboard data...")

      // Get top players from user_profiles table (total scores)
      const { getTopPlayers } = await import("@/lib/supabase-queries")
      const topPlayers = await getTopPlayers(20)

      console.log("🏆 Top players data:", topPlayers)

      if (topPlayers && topPlayers.length > 0) {
        // Format the data for the leaderboard
        const formattedData = topPlayers.map((player) => ({
          name: player.full_name || player.username || "Unknown User",
          score: player.total_score || 0,
          totalQuestions: player.total_questions || 0,
          percentage: player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
          date: new Date().toLocaleDateString(),
          category: "All Categories",
          challenge: "all",
          user_id: player.id,
        }))

        setLeaderboard(formattedData)
        setDataSource("Supabase User Profiles")
        setLastRefresh(new Date())
      } else {
        throw new Error("No leaderboard data found")
      }
    } catch (error) {
      console.error("Error loading leaderboard:", error)

      // Final fallback to demo data
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
      ])
      setDataSource("Demo (Error)")
    } finally {
      setLoading(false)
    }
  }

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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full w-9 h-9 border border-gray-200 dark:border-green-700 dark:text-green-400"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </a>
      </div>

      <Card className="w-full max-w-4xl border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">
            IQRA Quiz Hall of Fame
          </CardTitle>
          {lastRefresh && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Last updated: {lastRefresh.toLocaleTimeString()}</p>
              <div className="flex justify-center mt-1">
                <Badge variant="outline" className={`flex items-center gap-2 ${getSourceColor(dataSource)}`}>
                  {getSourceIcon(dataSource)}
                  Data source: {dataSource}
                </Badge>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent>
          <div className="mb-6">
            <Tabs defaultValue="all" onValueChange={setActiveChallengeType}>
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
                <TabsTrigger value="challenge">Challenge</TabsTrigger>
                <TabsTrigger value="quran">Quran</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search by name..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="flex gap-2 dark:border-green-700 dark:text-green-400"
                onClick={() => setFilter(filter ? "" : "Quran")}
              >
                <Filter className="h-4 w-4" />
                {filter || "All Categories"}
              </Button>
              <Button
                variant="outline"
                className="flex gap-2 dark:border-green-700 dark:text-green-400"
                onClick={loadLeaderboardFromDatabase}
                disabled={loading}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Loading..." : "Refresh"}
              </Button>
            </div>
          </div>

          {getFilteredLeaderboard().length > 0 ? (
            <Table>
              <TableCaption>Top scores from IQRA Quiz participants</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">%</TableHead>
                  <TableHead className="text-right">Last Active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getFilteredLeaderboard().map((entry, index) => (
                  <TableRow key={index} className={index < 3 ? "font-medium" : ""}>
                    <TableCell className="flex items-center">
                      {index + 1}
                      <span className="ml-2">{getMedalIcon(index)}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
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
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-xs font-medium">
                              {entry.name.charAt(0)}
                            </div>
                            {entry.name}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{entry.category || "All Categories"}</TableCell>
                    <TableCell>
                      {entry.challenge ? entry.challenge.charAt(0).toUpperCase() + entry.challenge.slice(1) : "All"}
                    </TableCell>
                    <TableCell className="text-right">
                      {entry.score}/{entry.totalQuestions}
                    </TableCell>
                    <TableCell className="text-right font-medium">
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
                    <TableCell className="text-right">{entry.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>No entries match your search. Try adjusting your filters.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <a
            href="/challenges"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 h-10 px-4 py-2"
          >
            Back to Challenges
          </a>
          <a
            href="/badges"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 dark:border-green-700 dark:text-green-400"
          >
            View Badges
          </a>
        </CardFooter>
      </Card>
    </main>
  )
}
