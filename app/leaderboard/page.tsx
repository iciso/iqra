"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, Medal, Home } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface LeaderboardEntry {
  name: string
  score: number
  totalQuestions: number
  percentage: number
  date: string
  category?: string
  difficulty?: string
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Get leaderboard from localStorage
    try {
      const storedLeaderboard = localStorage.getItem("quranQuizLeaderboard")
      if (storedLeaderboard) {
        setLeaderboard(JSON.parse(storedLeaderboard))
      }
    } catch (error) {
      console.error("Error getting leaderboard:", error)
    }
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
        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-3xl border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">
            IQRA Quiz Hall of Fame
          </CardTitle>
        </CardHeader>
        <CardContent>
          {leaderboard.length > 0 ? (
            <Table>
              <TableCaption>Top scores from IQRA Quiz participants</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">Percentage</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((entry, index) => (
                  <TableRow key={index} className={index < 3 ? "font-medium" : ""}>
                    <TableCell className="flex items-center">
                      {index + 1}
                      <span className="ml-2">{getMedalIcon(index)}</span>
                    </TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.category || "Quran"}</TableCell>
                    <TableCell>{entry.difficulty || "Easy"}</TableCell>
                    <TableCell className="text-right">
                      {entry.score}/{entry.totalQuestions}
                    </TableCell>
                    <TableCell className="text-right">{entry.percentage}%</TableCell>
                    <TableCell className="text-right">{entry.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>No entries yet. Be the first to join the Hall of Fame!</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}
