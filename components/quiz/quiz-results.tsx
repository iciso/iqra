"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { submitQuizResult } from "@/lib/supabase-queries";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
}

interface QuizContainerProps {
  questions: Question[];
  category: string;
  difficulty: string;
  challengeId?: string;
  opponentId?: string;
  opponentName?: string;
  challengerTurn: boolean;
}

export default function QuizContainer({
  questions,
  category,
  difficulty,
  challengeId,
  opponentId,
  opponentName,
  challengerTurn,
}: QuizContainerProps) {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => [
      ...prev,
      { question_id: currentQuestion.id, selected_answer: selectedAnswer },
    ]);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Finish quiz
      const timeTaken = Math.round((Date.now() - startTime) / 1000);
      const percentage = (score / questions.length) * 100;
      if (user) {
        submitQuizResult(
          score,
          questions.length,
          category,
          difficulty,
          timeTaken,
          answers,
          challengeId
        ).then(({ success }) => {
          if (success) {
            toast({
              title: "Quiz Completed!",
              description: `Your score: ${score}/${questions.length}`,
            });
          }
        });
      }
      router.push(
        `/results?score=${score}&total=${questions.length}&category=${encodeURIComponent(category)}&difficulty=${encodeURIComponent(difficulty)}${challengeId ? `&challenge=${challengeId}` : ""}${opponentId ? `&opponentId=${opponentId}` : ""}${opponentName ? `&opponentName=${encodeURIComponent(opponentName)}` : ""}`
      );
    }
  };

  console.log("🎯 QUIZ CONTAINER: Setup complete", {
    challengeId,
    opponentId,
    opponentName,
    challengerTurn,
    questionsCount: questions.length,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">
        {currentQuestion?.question || "Loading..."}
      </h2>
      <RadioGroup
        value={selectedAnswer ?? ""}
        onValueChange={setSelectedAnswer}
        className="space-y-2"
      >
        {currentQuestion?.options.map((option: string, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleAnswer}
        disabled={!selectedAnswer}
        className="mt-4 bg-green-600 hover:bg-green-700"
      >
        Submit Answer
      </Button>
    </div>
  );
}
