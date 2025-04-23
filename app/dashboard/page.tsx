"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChallengeCard } from "@/components/challenge/challenge-card"
import { ChallengeLimits } from "@/components/dashboard/challenge-limits"
import { Leaderboard } from "@/components/dashboard/leaderboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Plus, Flame, BookOpen, BarChart3, Bell } from "lucide-react"
import {
  getUserChallenges,
  acceptChallenge,
  declineChallenge,
  getLeaderboardUsers,
  getCurrentUser,
  getDailyLimits,
  startDailyChallenge,
} from "@/lib/api/challenge"
import type { Challenge, User } from "@/types/challenge"

export default function DashboardPage() {
  const router = useRouter()
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [leaderboardUsers, setLeaderboardUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [dailyLimits, setDailyLimits] = useState({
    dailyChallenges: 0,
    maxDailyChallenges: 5,
    categoriesUsed: 0,
    maxDailyCategories: 3,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isStartingDaily, setIsStartingDaily] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [challengesData, usersData, userData, limitsData] = await Promise.all([
          getUserChallenges("current"),
          getLeaderboardUsers(),
          getCurrentUser(),
          getDailyLimits(),
        ])

        setChallenges(challengesData)
        setLeaderboardUsers(usersData)
        setCurrentUser(userData)
        setDailyLimits(limitsData)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleAcceptChallenge = async (challengeId: string) => {
    try {
      const updatedChallenge = await acceptChallenge(challengeId)
      setChallenges(challenges.map((c) => (c.id === challengeId ? updatedChallenge : c)))

      // Navigate to the challenge page after a short delay
      setTimeout(() => {
        router.push(`/challenges/${challengeId}`)
      }, 500)
    } catch (error) {
      console.error("Error accepting challenge:", error)
    }
  }

  const handleDeclineChallenge = async (challengeId: string) => {
    try {
      const updatedChallenge = await declineChallenge(challengeId)
      setChallenges(challenges.map((c) => (c.id === challengeId ? updatedChallenge : c)))
    } catch (error) {
      console.error("Error declining challenge:", error)
    }
  }

  const handleStartChallenge = (challengeId: string) => {
    router.push(`/challenges/${challengeId}`)
  }

  const handleStartDailyChallenge = async () => {
    try {
      setIsStartingDaily(true)
      const dailyChallenge = await startDailyChallenge()
      router.push(`/challenges/${dailyChallenge.id}`)
    } catch (error) {
      console.error("Error starting daily challenge:", error)
      setIsStartingDaily(false)
    }
  }

  if (isLoading || !currentUser) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <p className="dark:text-white">Loading dashboard...</p>
      </main>
    )
  }

  const pendingChallenges = challenges.filter((c) => c.status === "pending" && c.opponent.id === currentUser.id)
  const activeChallenges = challenges.filter((c) => c.status === "accepted")
  const completedChallenges = challenges.filter((c) => c.status === "completed").slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">IQRA Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full relative dark:border-green-700 dark:text-green-400"
            >
              <Bell className="h-5 w-5" />
              {pendingChallenges.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {pendingChallenges.length}
                </span>
              )}
            </Button>
            <ThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="border-green-200 shadow-sm dark:border-green-800 md:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-green-800 dark:text-green-400">Profile</CardTitle>
                <Link href="/profile">
                  <Button variant="ghost" className="h-8 dark:text-green-400">
                    Edit
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold dark:text-white">{currentUser.name}</h2>
                  <div className="flex items-center mt-1">
                    <Trophy className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
                    <span className="font-medium text-green-700 dark:text-green-400">{currentUser.kp} KP</span>
                    {currentUser.streak && currentUser.streak > 0 && (
                      <div className="flex items-center ml-4">
                        <Flame className="h-4 w-4 text-orange-500 mr-1" />
                        <span className="text-orange-500">{currentUser.streak} day streak</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentUser.badges?.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ChallengeLimits
            dailyChallenges={dailyLimits.dailyChallenges}
            maxDailyChallenges={dailyLimits.maxDailyChallenges}
            categoriesUsed={dailyLimits.categoriesUsed}
            maxDailyCategories={dailyLimits.maxDailyCategories}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {pendingChallenges.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Pending Challenges
                </h2>
                <div className="space-y-4">
                  {pendingChallenges.map((challenge) => (
                    <ChallengeCard
                      key={challenge.id}
                      challenge={challenge}
                      onAccept={handleAcceptChallenge}
                      onDecline={handleDeclineChallenge}
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-green-800 dark:text-green-400 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Your Challenges
                </h2>
                <Link href="/challenges/new">
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                    <Plus className="mr-2 h-4 w-4" />
                    New Challenge
                  </Button>
                </Link>
              </div>

              <Tabs defaultValue="active">
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                  {activeChallenges.length > 0 ? (
                    <div className="space-y-4">
                      {activeChallenges.map((challenge) => (
                        <ChallengeCard key={challenge.id} challenge={challenge} onStart={handleStartChallenge} />
                      ))}
                    </div>
                  ) : (
                    <Card className="border-green-200 shadow-sm dark:border-green-800">
                      <CardContent className="text-center py-8">
                        <p className="dark:text-white mb-4">No active challenges</p>
                        <Link href="/challenges/new">
                          <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                            Start a Challenge
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                <TabsContent value="completed">
                  {completedChallenges.length > 0 ? (
                    <div className="space-y-4">
                      {completedChallenges.map((challenge) => (
                        <ChallengeCard key={challenge.id} challenge={challenge} />
                      ))}
                      {challenges.filter((c) => c.status === "completed").length > 3 && (
                        <div className="text-center">
                          <Link href="/challenges/history">
                            <Button variant="link" className="text-green-600 dark:text-green-400">
                              View all completed challenges
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Card className="border-green-200 shadow-sm dark:border-green-800">
                      <CardContent className="text-center py-8">
                        <p className="dark:text-white">No completed challenges yet</p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Daily Challenge
              </h2>
              <Card className="border-green-200 shadow-lg dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold dark:text-white">Ramadan Special</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Test your knowledge about Ramadan</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      2x KP Reward
                    </Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Complete today's special challenge about Ramadan fasting rules and earn double Knowledge Points!
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                    onClick={handleStartDailyChallenge}
                    disabled={isStartingDaily}
                  >
                    {isStartingDaily ? "Starting..." : "Start Daily Challenge"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Leaderboard users={leaderboardUsers} currentUserId={currentUser.id} />

            <Card className="border-green-200 shadow-sm dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-800 dark:text-green-400 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="dark:text-gray-300">Challenges Completed</span>
                    <span className="font-medium dark:text-white">
                      {challenges.filter((c) => c.status === "completed").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="dark:text-gray-300">Win Rate</span>
                    <span className="font-medium dark:text-white">67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="dark:text-gray-300">Avg. Correct Answers</span>
                    <span className="font-medium dark:text-white">4.2/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="dark:text-gray-300">Favorite Category</span>
                    <span className="font-medium dark:text-white">Quran</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
