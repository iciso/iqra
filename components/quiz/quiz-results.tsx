"use client"

import type React from "react"
import { useEffect } from "react"
import { submitQuizResult } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"

interface QuizResultsProps {
  score: number | undefined
  totalQuestions: number | undefined
  category: string | undefined
  difficulty: string | undefined
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, category, difficulty }) => {
  const { user } = useAuth()

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("quizScore", JSON.stringify(score))
      localStorage.setItem("totalQuestions", JSON.stringify(totalQuestions))
    }

    // Save to database if user is authenticated
    if (user && score !== undefined && totalQuestions !== undefined) {
      submitQuizResult(
        score,
        totalQuestions,
        category || "quran",
        difficulty || "easy",
        undefined, // time_taken - we can add this later
        undefined, // answers - we can add this later
        undefined, // challenge_id - for regular quizzes, no challenge
      ).catch((error) => {
        console.error("Error saving quiz result to database:", error)
      })
    }
  }, [score, totalQuestions, category, difficulty, user])

  return (
    <div>
      <h2>Quiz Results</h2>
      {score !== undefined && totalQuestions !== undefined ? (
        <>
          <p>
            Your Score: {score} / {totalQuestions}
          </p>
          <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
        </>
      ) : (
        <p>Calculating results...</p>
      )}
    </div>
  )
}

export default QuizResults
