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
import { getUserProfile, submitQuizResult, updateChallenge, getChallenge } from "@/lib/supabase-queries"
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
                name: opponentData.username || "Challenger",
                avatar_url: null,
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
              setOpponent(fallbackOpponent)
              localStorage.setItem("quizOpponentId", opponentId)
              localStorage.setItem("quizOpponent", JSON.stringify(fallbackOpponent))
            }
          } catch (error) {
            console.error("🎯 QUIZ CONTAINER: Error fetching opponent:", error)
            const fallbackOpponent = {
              id: opponentId,
              name: opponentName || "Challenger",
              avatar_url: null,
              level: challengerTurn ? "Waiting for your quiz" : "Challenger",
            }
            setOpponent(fallbackOpponent)
            localStorage.setItem("quizOpponentId", opponentId)
            localStorage.setItem("quizOpponent", JSON.stringify(fallbackOpponent))
          }
        }
        fetchOpponent()
      } else {
        console.log("🎯 QUIZ CONTAINER: Using fallback opponent")
        const randomOpponent = getRandomOpponent()
        setOpponent(randomOpponent)
        localStorage.setItem("quizOpponentId", randomOpponent.id)
        localStorage.setItem("quizOpponent", JSON.stringify(randomOpponent))
      }
      
      let minutes = 5
      if (challengeMode === "daily") minutes = 5
      else if (challengeMode === "quran") minutes = 7
      else if (challengeMode === "seerah") minutes = 6
      else if (challengeMode === "fiqh") minutes = 5
      const totalTime = minutes * 60
      setTimeLeft(totalTime)
      localStorage.setItem("quizTimeTotal", totalTime.toString())
      setIsTimerRunning(true)
    }

    console.log("🎯 QUIZ CONTAINER: Setup complete")
    console.log("🎯 QUIZ CONTAINER: Questions loaded:", questions.length)
  }, [questions.length, challengeMode, category.id, difficulty, opponentId, opponentName, challengerTurn])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      handleFinishQuiz()
    }
    return () => clearInterval(timer)
  }, [isTimerRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleAnswerSelect = (value: string) => {
    if (showExplanation) return
    setSelectedAnswer(value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleSubmitAnswer = () => {
    if (!questions[currentQuestion]) return
    setTransitionType("submit")
    setIsLoading(true)
    setTimeout(() => {
      const correct = selectedAnswer === questions[currentQuestion].correctAnswer
      setIsCorrect(correct)
      if (correct) setScore(score + 1)
      setShowExplanation(true)
      setIsLoading(false)
      setTransitionType(null)
    }, 800)
  }

  const handleNext = () => {
    setTransitionType("next")
    setIsLoading(true)
    setTimeout(() => {
      setShowExplanation(false)
      setIsCorrect(null)
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setTransitionType("finish")
        handleFinishQuiz()
        return
      }
      setIsLoading(false)
      setTransitionType(null)
    }, 800)
  }

const handleFinishQuiz = async () => {
  console.log("🎯 QUIZ CONTAINER: Starting quiz finish process...");
  console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge());
  setIsTimerRunning(false);

  try {
    const localScore = score;
    const localTotalQuestions = questions.length;
    const localCategory = category.id; // Use category from props
    const localDifficulty = difficulty; // Use difficulty from props
    const localTimeLeft = timeLeft;
    const localAnswers = answers;
    const localChallengeId = challengeMode; // Use challengeMode as challenge_id

    localStorage.setItem("quizScore", localScore.toString());
    localStorage.setItem("totalQuestions", localTotalQuestions.toString());
    localStorage.setItem("quizCategory", localCategory);
    localStorage.setItem("quizDifficulty", localDifficulty);
    localStorage.setItem("quizChallenge", localChallengeId || "");
    localStorage.setItem("quizTimeLeft", localTimeLeft.toString());
    localStorage.setItem("quizId", quizId);
    if (challengerTurn) localStorage.setItem("challengerTurn", "true");
    else localStorage.setItem("challengerTurn", "false");
    if (opponent) {
      localStorage.setItem("quizOpponentId", opponent.id || "");
      localStorage.setItem("quizOpponent", JSON.stringify(opponent));
    }
    console.log("🎯 QUIZ CONTAINER: All localStorage data saved successfully");
  } catch (error) {
    console.error("🎯 QUIZ CONTAINER: Error saving to localStorage:", error);
  }

  if (isFallbackChallenge()) {
    console.log("🎯 QUIZ CONTAINER: Fallback challenge detected - skipping database operations");
    toast({
      title: "Challenge Sent!",
      description: `Your score (${score}/${questions.length}) has been recorded. Your opponent will be notified.`,
      duration: 5000,
    });
    router.push("/results");
    return;
  }

  toast({
    title: "Saving your score...",
    description: "Please wait while we update the leaderboard.",
    duration: 3000,
  });

  try {
    // Submit quiz result with challenge context
    const result = await submitQuizResult(
      score,
      questions.length,
      category.id, // Use category from props
      difficulty, // Use difficulty from props
      timeLeft,
      answers,
      challengeMode // Ensure challengeMode is passed
    );

    if (challengeMode) {
      console.log("🎯 QUIZ CONTAINER: Updating challenge status for:", challengeMode);
      const challengeData = await getChallenge(challengeMode);
      if (!challengeData) throw new Error("Challenge not found");

      const isChallenger = user?.id === challengeData.challenger_id;
      const updateData = isChallenger
        ? {
            challenger_score: score,
            challenger_completed_at: new Date().toISOString(),
            status: challengeData.challenged_score ? "completed" : "pending",
            challenge_questions: JSON.stringify(questions),
          }
        : {
            challenged_score: score,
            challenged_completed_at: new Date().toISOString(),
            status: "completed",
          };

      await updateChallenge(challengeMode, updateData);

      toast({
        title: isChallenger ? "Challenge Sent!" : "Challenge Completed!",
        description: isChallenger
          ? `Your score (${score}/${questions.length}) has been recorded. Your opponent will be notified.`
          : `Both scores updated in leaderboard. Check your ranking!`,
        duration: 5000,
      });
    } else {
      toast({
        title: "Quiz Completed!",
        description: `Your score (${score}/${questions.length}) has been saved to the leaderboard.`,
        duration: 5000,
      });
    }
    router.push("/results");
  } catch (error: any) {
    console.error("❌ QUIZ CONTAINER: Error in quiz completion:", error);
    toast({
      title: "Error",
      description: `Failed to save quiz: ${error.message || "Unknown error"}`,
      variant: "destructive",
      duration: 5000,
    });
    router.push("/results");
  }
};

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setTransitionType("next")
      setIsLoading(true)
      setTimeout(() => {
        setShowExplanation(false)
        setIsCorrect(null)
        setCurrentQuestion(currentQuestion - 1)
        setIsLoading(false)
        setTransitionType(null)
      }, 800)
    }
  }

  useEffect(() => {
    setProgress((currentQuestion / questions.length) * 100)
  }, [currentQuestion, questions.length])

  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">No questions available for this category and difficulty level.</p>
          <Link href="/categories">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              Return to Categories
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]
  const getLoadingText = () => {
    if (transitionType === "submit") return "Checking answer..."
    if (transitionType === "next") return "Loading next question..."
    if (transitionType === "finish") return "Saving results..."
    return "Loading..."
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="absolute top-4 right-4"></div>
      <div className="absolute top-4 left-4">
        <Link href={challengeMode ? "/challenges" : "/categories"}>
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">{challengeMode ? "Challenges" : "Categories"}</span>
          </Button>
        </Link>
      </div>

      <div className="w-full mb-4 mt-12">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-green-700 dark:text-green-400">
            {category.title} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            {challengeMode && challengerTurn && ` Challenge (Your Turn)`}
            {challengeMode && !challengerTurn && ` Challenge`}
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-green-100 dark:bg-green-800" />

        {challengeMode && (
          <div className="flex justify-end items-center mt-2">
            <Clock className="h-4 w-4 mr-1 text-green-700 dark:text-green-400" />
            <span
              className={`text-sm font-medium ${timeLeft < 60 ? "text-red-600 dark:text-red-400" : "text-green-700 dark:text-green-400"}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        )}
      </div>

      <Card className="border-green-200 shadow-lg dark:border-green-800 h-[600px] flex flex-col">
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <LoadingAnimation size="md" text={getLoadingText()} />
          </div>
        ) : (
          <>
            <CardHeader className="flex flex-col items-center">
              <Book className="w-10 h-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle className="text-xl text-green-800 dark:text-green-400">
                Question {currentQuestion + 1}
              </CardTitle>
              {challengeMode && opponent && (
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {challengerTurn ? "Challenging:" : "Opponent:"}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm">{opponentName || opponent.name || "Challenger"}</span>
                      {!opponentName && opponent.level && !opponent.name.includes("bot") && (
                        <span className="text-xs text-gray-500">({opponent.level})</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              <div className="h-full flex flex-col justify-between">
                <div className="mb-6 flex-1">
                  <h2 className="text-lg font-medium mb-4 dark:text-white min-h-[3rem]">{question.question}</h2>
                  <div className="min-h-[200px]">
                    <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 mb-2 p-2 rounded 
                          ${
                            showExplanation && option === question.correctAnswer
                              ? "bg-green-100 dark:bg-green-900"
                              : showExplanation && option === selectedAnswer && option !== question.correctAnswer
                                ? "bg-red-100 dark:bg-red-900"
                                : "hover:bg-green-50 dark:hover:bg-green-900/50"
                          }`}
                        >
                          <RadioGroupItem value={option} id={`option-${index}`} disabled={showExplanation} />
                          <Label htmlFor={`option-${index}`} className="cursor-pointer w-full dark:text-gray-200">
                            {option}
                            {showExplanation && option === question.correctAnswer && (
                              <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-600 dark:text-green-400" />
                            )}
                            {showExplanation && option === selectedAnswer && option !== question.correctAnswer && (
                              <XCircle className="inline-block ml-2 h-4 w-4 text-red-600 dark:text-red-400" />
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {showExplanation && (
                    <div className="mt-4 max-h-[150px] overflow-y-auto">
                      {question.explanation && (
                        <Alert className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                          <AlertDescription className="text-blue-800 dark:text-blue-300">
                            <div className="flex items-start">
                              <Info className="h-5 w-5 mr-2 flex-shrink-0 text-blue-700 dark:text-blue-400" />
                              <div>
                                <strong className="block mb-1">Explanation:</strong>
                                {question.explanation}
                              </div>
                            </div>
                          </AlertDescription>
                        </Alert>
                      )}
                      {!challengeMode && question.hasInfographic && question.infographicType && question.infographicData && (
                        <div className="mt-4">
                          <InteractiveInfographic
                            type={question.infographicType}
                            data={question.infographicData}
                            title={`${category.title} - Visual Explanation`}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0 || isLoading}
                className="dark:border-green-700 dark:text-green-400"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Previous
              </Button>

              {!showExplanation ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer || isLoading}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  {currentQuestion === questions.length - 1
                    ? challengerTurn
                      ? "Send Challenge"
                      : "Finish Quiz"
                    : "Next"}
                  {currentQuestion !== questions.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
