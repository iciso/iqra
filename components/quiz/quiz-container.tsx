"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle, Home, Clock, Info } from "lucide-react"
import Link from "next/link"
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz"
import { getRandomOpponent } from "@/utils/opponents"
import { LoadingAnimation } from "@/components/loading-animation"
import InteractiveInfographic from "@/components/quiz/interactive-infographic"
import { getUserProfile, submitQuizResult, updateChallenge } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"

interface QuizContainerProps {
  questions: QuizQuestion[]
  category: QuizCategory
  difficulty: DifficultyLevel
  challengeMode?: string
  opponentId?: string
  opponentName?: string
  challengerTurn?: boolean
}

export default function QuizContainer({
  questions,
  category,
  difficulty,
  challengeMode,
  opponentId,
  opponentName,
  challengerTurn,
}: QuizContainerProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [progress, setProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [quizId, setQuizId] = useState("")
  const [opponent, setOpponent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [transitionType, setTransitionType] = useState<"next" | "submit" | "finish" | null>(null)

  const isFallbackChallenge = () =>
    challengeMode?.startsWith("demo-") || challengeMode?.startsWith("fallback-") || opponentId?.startsWith("demo-")

  useEffect(() => {
    setQuizId(`quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`)
  }, [])

  useEffect(() => {
    if (challengeMode) {
      console.log("🎯 QUIZ CONTAINER: Challenge mode active")
      console.log("🎯 QUIZ CONTAINER: Opponent ID from URL:", opponentId)
      console.log("🎯 QUIZ CONTAINER: Opponent Name from URL:", opponentName)
      console.log("🎯 QUIZ CONTAINER: Challenger turn:", challengerTurn)
      console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge())

      if (opponentId && opponentName) {
        console.log("🎯 QUIZ CONTAINER: Using opponent info from URL")
        const opponentInfo = {
          id: opponentId,
          name: opponentName,
          avatar_url: null,
          level: challengerTurn ? "Waiting for your quiz" : "Challenger",
        }
        setOpponent(opponentInfo)
        localStorage.setItem("quizOpponentId", opponentId)
        localStorage.setItem("quizOpponent", JSON.stringify(opponentInfo))
      } else if (opponentId && !isFallbackChallenge()) {
        console.log("🎯 QUIZ CONTAINER: Fetching opponent profile from database")
        const fetchOpponent = async () => {
          try {
            const opponentData = await getUserProfile(opponentId)
            console.log("🎯 QUIZ CONTAINER: Fetched opponent data:", opponentData)
            if (opponentData) {
              const opponentInfo = {
                id: opponentData.id,
                name: opponentData.username || "Challenger", // Use username from profiles table
                avatar_url: null, // No avatar_url in profiles table
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              }
              setOpponent(opponentInfo)
              localStorage.setItem("quizOpponentId", opponentData.id)
              localStorage.setItem("quizOpponent", JSON.stringify(opponentInfo))
            } else {
              console.log("🎯 QUIZ CONTAINER: No opponent data found, using fallback")
              const fallbackOpponent = {
                id: opponentId,
                name: opponentName || "Challenger",
                avatar_url: null,
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              }
              setOpponent
