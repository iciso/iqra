"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChallengeQuiz } from "@/components/challenge/challenge-quiz"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  getChallengeById,
  getQuestionsForChallenge,
  submitChallengeAnswers,
  acceptChallenge,
} from "@/lib/api/challenge"
import type { Challenge } from "@/types/challenge"
import type { QuizQuestion } from "@/types/quiz"

export default function ChallengePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeData = await getChallengeById(params.id)
        if (!challengeData) {
          setError("Challenge not found")
          return
        }

        setChallenge(challengeData)

        // Accept challenges that are pending when the user visits the page directly
        if (challengeData.status === "pending" && challengeData.opponent.id === "current") {
          const updatedChallenge = await acceptChallenge(params.id)
          setChallenge(updatedChallenge)
        }

        // Only fetch questions if the challenge is accepted or completed
        if (challengeData.status === "accepted" || challengeData.status === "completed") {
          const questionsData = await getQuestionsForChallenge(params.id)
          setQuestions(questionsData)
        } else {
          setError("This challenge is not ready to start")
        }
      } catch (error) {
        console.error("Error fetching challenge:", error)
        setError("Failed to load challenge")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  const handleCompleteQuiz = async (answers: string[], timeRemaining: number[]) => {
    try {
      if (!challenge) return

      // Determine if current user is challenger or opponent (in a real app, use auth)
      const currentUserId = "current" // Mock current user ID

      await submitChallengeAnswers(challenge.id, currentUserId, answers, timeRemaining)

      // Redirect to results page
      router.push(`/challenges/${challenge.id}/results`)
    } catch (error) {
      console.error("Error submitting answers:", error)
      setError("Failed to submit answers")
    }
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <p className="dark:text-white">Loading challenge...</p>
      </main>
    )
  }

  if (error || !challenge) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
          <CardContent className="text-center py-8">
            <p className="dark:text-white mb-4">{error || "Challenge not found"}</p>
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

      <ChallengeQuiz
        questions={questions}
        categoryTitle={challenge.category}
        level={challenge.level}
        timeLimit={15}
        onComplete={handleCompleteQuiz}
      />
    </main>
  )
}
