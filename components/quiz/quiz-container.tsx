"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle, Home, Clock, Info } from "lucide-react";
import Link from "next/link";
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz";
import { getRandomOpponent } from "@/utils/opponents";
import { LoadingAnimation } from "@/components/loading-animation";
import InteractiveInfographic from "@/components/quiz/interactive-infographic";
import { getUserProfile } from "@/lib/supabase-queries";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase-client";

interface QuizContainerProps {
  questions: QuizQuestion[];
  category: QuizCategory;
  difficulty: DifficultyLevel;
  challengeMode?: string;
  opponentId?: string;
  opponentName?: string;
  challengerTurn?: boolean;
  params: { lang: string };
}

export default function QuizContainer({
  questions,
  category,
  difficulty,
  challengeMode,
  opponentId,
  opponentName,
  challengerTurn,
  params,
}: QuizContainerProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [dict, setDict] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quizId, setQuizId] = useState("");
  const [opponent, setOpponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transitionType, setTransitionType] = useState<"next" | "submit" | "finish" | null>(null);

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${params.lang}/translations.json`);
        if (!response.ok) throw new Error("Failed to load translations");
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    }
    fetchDictionary();
  }, [params.lang]);

  useEffect(() => {
    setQuizId(`quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
    setAnswers(Array(questions.length).fill(""));
    if (challengeMode) {
      console.log("🎯 QUIZ CONTAINER: Challenge mode active");
      console.log("🎯 QUIZ CONTAINER: Opponent ID from URL:", opponentId);
      console.log("🎯 QUIZ CONTAINER: Opponent Name from URL:", opponentName);
      console.log("🎯 QUIZ CONTAINER: Challenger turn:", challengerTurn);
    }
  }, [challengeMode, opponentId, opponentName, challengerTurn, questions.length]);

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isTimerRunning) {
      handleSubmitAnswer();
    }
  }, [timeLeft, isTimerRunning]);

  const isFallbackChallenge = () => {
    return (
      challengeMode?.startsWith("demo-") || challengeMode?.startsWith("fallback-") || opponentId?.startsWith("demo-")
    );
  };

  const handleSubmitAnswer = async () => {
    if (!selectedAnswer) return;
    setIsLoading(true);
    setIsTimerRunning(false);
    const question = questions[currentQuestion];
    const correct = selectedAnswer === question.correct_answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowExplanation(true);
    setProgress(((currentQuestion + 1) / questions.length) * 100);
    setTransitionType("submit");
    setIsLoading(false);
  };

  const handleNext = async () => {
    setIsLoading(true);
    setTransitionType("next");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowExplanation(false);
      setIsCorrect(null);
      setTimeLeft(30);
      setIsTimerRunning(true);
      setIsLoading(false);
    } else {
      setTransitionType("finish");
      try {
        if (user && !isFallbackChallenge()) {
          const { error } = await supabase.from("quiz_results").insert({
            user_id: user.id,
            quiz_id: quizId,
            score,
            total_questions: questions.length,
            category_id: category.id,
            difficulty,
            challenge_mode: challengeMode || null,
            opponent_id: opponentId || null,
          });
          if (error) throw error;
        }
        if (challengeMode && challengerTurn && opponentId && !isFallbackChallenge()) {
          const { error } = await supabase.from("challenges").insert({
            challenger_id: user?.id,
            opponent_id: opponentId,
            quiz_id: quizId,
            category_id: category.id,
            difficulty,
            challenger_score: score,
            status: "pending",
          });
          if (error) throw error;
          toast({ title: dict.quiz.send_challenge, description: "Challenge sent to opponent!" });
          router.push(`/${params.lang}/challenges`);
        } else {
          router.push(`/${params.lang}/challenge-results?quizId=${quizId}`);
        }
      } catch (err) {
        console.error("Error saving quiz results:", err);
        toast({ title: "Error", description: "Failed to save quiz results" });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
      setShowExplanation(!!answers[currentQuestion - 1]);
      setIsCorrect(answers[currentQuestion - 1] ? answers[currentQuestion - 1] === questions[currentQuestion - 1].correct_answer : null);
      setIsTimerRunning(false);
      setTimeLeft(30);
    }
  };

  if (!dict) return <div>Loading...</div>;

  const question = questions[currentQuestion];

  if (!question) {
    const redirectPath = challengeMode ? `/${params.lang}/challenges` : `/${params.lang}/categories`;
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {dict.quiz.no_questions.replace("{{category}}", category?.title || "").replace("{{difficulty}}", difficulty)}
          </h1>
          <p className="mb-6">
            {dict.quiz.no_questions.replace("{{category}}", category?.title || "").replace("{{difficulty}}", difficulty)}
          </p>
          <a
            href={redirectPath}
            className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {dict[challengeMode ? "quiz.back_to_challenges" : "quiz.back_to_categories"]}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{dict.quiz.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col min-h-[400px]">
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <>
              <div className="mb-4">
                <Progress value={progress} className="w-full" />
                <div className="flex justify-between text-sm mt-2">
                  <span>
                    {currentQuestion + 1} / {questions.length}
                  </span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{timeLeft}s</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
                <div className="space-y-2">
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={showExplanation}>
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex items-center">
                          {option}
                          {showExplanation && option === question.correct_answer && (
                            <CheckCircle className="ml-2 h-4 w-4 text-green-600 dark:text-green-400" />
                          )}
                          {showExplanation && option === selectedAnswer && option !== question.correct_answer && (
                            <XCircle className="ml-2 h-4 w-4 text-red-600 dark:text-red-400" />
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
                              <strong className="block mb-1">{dict.quiz.explanation}:</strong>
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
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0 || isLoading}
            className="dark:border-green-700 dark:text-green-400"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> {dict.quiz.previous}
          </Button>
          {!showExplanation ? (
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer || isLoading}
            >
              {dict.quiz.submit_answer}
            </Button>
          ) : (
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={handleNext}
              disabled={isLoading}
            >
              {currentQuestion === questions.length - 1
                ? challengerTurn
                  ? dict.quiz.send_challenge
                  : dict.quiz.finish_quiz
                : dict.quiz.next}
              {currentQuestion !== questions.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
