"use client";

import { useEffect } from "react";
import { submitQuizResult } from "@/lib/supabase-queries";
import { useAuth } from "@/contexts/auth-context";
import { useSearchParams } from "next/navigation";

interface QuizResultsProps {
  score: number | undefined;
  totalQuestions: number | undefined;
  category: string | undefined;
  difficulty: string | undefined;
}

export default function QuizResults({ score, totalQuestions, category, difficulty }: QuizResultsProps) {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const challengeId = searchParams.get("challenge");
  const opponentId = searchParams.get("opponentId");
  const opponentName = searchParams.get("opponentName");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("quizScore", JSON.stringify(score));
      localStorage.setItem("totalQuestions", JSON.stringify(totalQuestions));
    }

    if (user && score !== undefined && totalQuestions !== undefined) {
      submitQuizResult(
        score,
        totalQuestions,
        category || "quran",
        difficulty || "easy",
        undefined, // time_taken
        undefined, // answers
        challengeId || undefined // challenge_id
      ).catch((error) => {
        console.error("Error saving quiz result to database:", error);
      });
    }
  }, [score, totalQuestions, category, difficulty, user, challengeId]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
      {score !== undefined && totalQuestions !== undefined ? (
        <>
          <p className="text-lg">
            Your Score: {score} / {totalQuestions}
          </p>
          <p className="text-lg">Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
          {opponentName && <p className="text-lg">Opponent: {opponentName}</p>}
          {challengeId && <p className="text-sm text-gray-500">Challenge ID: {challengeId}</p>}
        </>
      ) : (
        <p>Calculating results...</p>
      )}
    </div>
  );
}
