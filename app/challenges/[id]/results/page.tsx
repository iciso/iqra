"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChallengeResults } from "@/components/challenge/challenge-results"
import { ThemeToggle } from "@/components/theme-toggle"
import { getChallengeById, getCurrentUser, submitChallengeAnswers } from "@/lib/api/challenge"
import type { ChallengeResult, User } from "@/types/challenge"

export default function ChallengeResultsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [result, setResult] = useState<ChallengeResult | null>(null)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, you would fetch the actual result
        // For demo, we'll generate a mock result
        const [challengeData, userData] = await Promise.all([getChallengeById(params.id), getCurrentUser()])

        if (!challengeData) {
          setError("Challenge not found")
          return
        }

        setCurrentUser(userData)

        // For demo purposes, create a mock result
        // Mock answers and time remaining
        const answers = ["Al-Fatiha", "5", "Abu Bakr As-Siddiq", "The Oneness of Allah", "Jafari"]
        const timeRemaining = [8, 10, 5, 12, 7]

        const resultData = await submitChallengeAnswers(challengeData.id, userData.id, answers, timeRemaining)

        setResult(resultData)
      } catch (error) {
        console.error("Error fetching results:", error)
        setError("Failed to load challenge results")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <p className="dark:text-white">Loading results...</p>
      </main>
    )
  }

  if (error || !result || !currentUser) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
          <CardContent className="text-center py-8">
            <p className="dark:text-white mb-4">{error || "Results not available"}</p>
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              Back to Dashboard
            </Button>
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

      <ChallengeResults result={result} currentUser={currentUser} />
    </main>
  )
}
