"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Users, BookOpen, ArrowRight } from "lucide-react"
import { getLeaderboardUsers, getDailyLimits, createNewChallenge } from "@/lib/api/challenge"
import type { User } from "@/types/challenge"

const categories = [
  { id: "quran", name: "Quran" },
  { id: "fiqh", name: "Fiqh" },
  { id: "tafsir", name: "Tafsir" },
  { id: "hadeeth", name: "Hadeeth" },
  { id: "aqeedah", name: "Aqeedah" },
  { id: "seerah", name: "Seerah" },
  { id: "tazkiyah", name: "Tazkiyah" },
  { id: "history", name: "Islamic History" },
  { id: "dawah", name: "Dawah" },
  { id: "new-muslims", name: "New Muslims" },
  { id: "comparative", name: "Comparative Religion" },
]

export default function NewChallengePage() {
  const router = useRouter()
  const [category, setCategory] = useState("")
  const [level, setLevel] = useState("")
  const [opponentType, setOpponentType] = useState("friend")
  const [selectedOpponent, setSelectedOpponent] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [dailyLimits, setDailyLimits] = useState({
    dailyChallenges: 0,
    maxDailyChallenges: 5,
    categoriesUsed: 0,
    maxDailyCategories: 3,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersData, limitsData] = await Promise.all([getLeaderboardUsers(), getDailyLimits()])

        setUsers(usersData.filter((user) => user.id !== "current"))
        setDailyLimits(limitsData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleCreateChallenge = async () => {
    try {
      setIsCreating(true)

      // Determine opponent ID
      const opponentId = opponentType === "friend" ? selectedOpponent : "random-opponent"

      // Create the challenge
      const challenge = await createNewChallenge(category, Number.parseInt(level), opponentId)

      // If it's a random opponent, go directly to the challenge
      if (opponentType === "random") {
        router.push(`/challenges/${challenge.id}`)
      } else {
        // Otherwise, go back to dashboard
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Error creating challenge:", error)
      setIsCreating(false)
    }
  }

  const canCreateChallenge =
    category !== "" &&
    level !== "" &&
    (opponentType === "random" || selectedOpponent !== "") &&
    dailyLimits.dailyChallenges < dailyLimits.maxDailyChallenges

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <p className="dark:text-white">Loading...</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href="/dashboard">
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">Dashboard</span>
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-xl text-green-800 dark:text-green-400">Create New Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {dailyLimits.dailyChallenges >= dailyLimits.maxDailyChallenges ? (
            <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-lg">
              <p className="text-amber-800 dark:text-amber-300 font-medium">Daily Challenge Limit Reached</p>
              <p className="text-amber-700 dark:text-amber-400 text-sm mt-1">
                You've used all {dailyLimits.maxDailyChallenges} of your daily challenges. Try again tomorrow!
              </p>
            </div>
          ) : dailyLimits.categoriesUsed >= dailyLimits.maxDailyCategories ? (
            <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-lg">
              <p className="text-amber-800 dark:text-amber-300 font-medium">Daily Category Limit Reached</p>
              <p className="text-amber-700 dark:text-amber-400 text-sm mt-1">
                You've used all {dailyLimits.maxDailyCategories} of your daily categories. Try again tomorrow!
              </p>
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="category" className="block mb-2 dark:text-gray-300">
                  Select Category
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category" className="dark:border-gray-700">
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="level" className="block mb-2 dark:text-gray-300">
                  Select Difficulty Level
                </Label>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger id="level" className="dark:border-gray-700">
                    <SelectValue placeholder="Choose a level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Level 1 (Beginner)</SelectItem>
                    <SelectItem value="2">Level 2 (Intermediate)</SelectItem>
                    <SelectItem value="3">Level 3 (Advanced)</SelectItem>
                    <SelectItem value="4">Level 4 (Expert)</SelectItem>
                    <SelectItem value="5">Level 5 (Scholar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block mb-2 dark:text-gray-300">Choose Opponent</Label>
                <RadioGroup value={opponentType} onValueChange={setOpponentType} className="mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend" className="cursor-pointer flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      Challenge a Friend
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="random" id="random" />
                    <Label htmlFor="random" className="cursor-pointer flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      Random Opponent (similar KP)
                    </Label>
                  </div>
                </RadioGroup>

                {opponentType === "friend" && (
                  <div>
                    <Label htmlFor="opponent" className="block mb-2 dark:text-gray-300">
                      Select Friend
                    </Label>
                    <Select value={selectedOpponent} onValueChange={setSelectedOpponent}>
                      <SelectTrigger id="opponent" className="dark:border-gray-700">
                        <SelectValue placeholder="Choose a friend" />
                      </SelectTrigger>
                      <SelectContent>
                        {users.map((user) => (
                          <SelectItem key={user.id} value={user.id}>
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              {user.name} ({user.kp} KP)
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 flex items-center justify-center"
            onClick={handleCreateChallenge}
            disabled={!canCreateChallenge || isCreating}
          >
            {isCreating ? "Creating..." : "Create Challenge"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
