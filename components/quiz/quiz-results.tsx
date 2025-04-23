"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  categoryTitle: string
  difficulty: string
  onSaveScore: (name: string) => void
  onTryAgain: () => void
}

export default function QuizResults({
  score,
  totalQuestions,
  categoryTitle,
  difficulty,
  onSaveScore,
  onTryAgain,
}: QuizResultsProps) {
  const [userName, setUserName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // Calculate percentage
  const percentage = Math.round((score / totalQuestions) * 100)

  // Determine message based on score
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! MashaAllah!"
    if (percentage >= 60) return "Good job! Keep learning! Alhamdulilah!"
    return "Keep studying. You can improve! Astaghufiruallah!"
  }

  const handleSubmitScore = () => {
    if (!userName.trim()) return

    onSaveScore(userName)
    setSubmitted(true)
  }

  return (
    <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Quiz Results</CardTitle>
        {categoryTitle && difficulty && (
          <p className="text-green-600 dark:text-green-500 mt-1">
            {categoryTitle} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </p>
        )}
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500 dark:border-green-600"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  percentage >= 25
                    ? "100% 0%"
                    : `${50 + 50 * Math.sin((percentage * Math.PI) / 200)}% ${
                        50 - 50 * Math.cos((percentage * Math.PI) / 200)
                      }%`
                }${percentage >= 50 ? ", 100% 100%" : ""}${percentage >= 75 ? ", 0% 100%" : ""}${
                  percentage >= 100 ? ", 0% 0%" : ""
                })`,
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold dark:text-white">{percentage}%</span>
            </div>
          </div>
        </div>
        <p className="text-xl mb-2 dark:text-white">
          You scored <span className="font-bold text-green-700 dark:text-green-400">{score}</span> out of{" "}
          <span className="font-bold">{totalQuestions}</span>
        </p>
        <p className="text-lg text-green-800 dark:text-green-400 mb-6">{getMessage()}</p>

        {!submitted ? (
          <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-2 flex items-center justify-center dark:text-white">
              <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
              Join the Hall of Fame
            </h3>
            <div className="mb-4">
              <Label htmlFor="user-name" className="text-left block mb-1 dark:text-gray-300">
                Enter your name:
              </Label>
              <Input
                id="user-name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <Button
              onClick={handleSubmitScore}
              disabled={!userName.trim()}
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              Submit to Leaderboard
            </Button>
          </div>
        ) : (
          <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
            <p className="text-green-700 dark:text-green-400 mb-4">Your score has been added to the Hall of Fame!</p>
            <Link href="/leaderboard">
              <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                View Leaderboard
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Link href="/categories">
          <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Categories
          </Button>
        </Link>
        <Button
          className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          onClick={onTryAgain}
        >
          Try Again
        </Button>
      </CardFooter>
    </Card>
  )
}
