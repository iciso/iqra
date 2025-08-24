"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QuizContainer from "@/components/quiz/quiz-container";
import { getQuizQuestions } from "@/lib/supabase-queries";
import type { QuizCategory, DifficultyLevel } from "@/types/quiz";

interface QuizPageProps {
  params: { lang: string };
}

export default function Quiz({ params }: QuizPageProps) {
  const [dict, setDict] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${params.lang}/translation.json`);
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
    async function fetchQuestions() {
      try {
        const category = searchParams.get("category") || "";
        const difficulty = (searchParams.get("difficulty") || "easy") as DifficultyLevel;
        const challengeMode = searchParams.get("challengeMode") || "";
        const opponentId = searchParams.get("opponentId") || "";
        const opponentName = searchParams.get("opponentName") || "";
        const challengerTurn = searchParams.get("challengerTurn") === "true";

        const fetchedQuestions = await getQuizQuestions(category, difficulty);
        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [searchParams]);

  if (loading || !dict) return <div>Loading...</div>;

  if (!questions.length) {
    const redirectPath = `/${params.lang}/challenges`;
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{dict.quiz.no_questions}</h1>
          <p className="mb-6">
            {dict.quiz.no_questions.replace("{{category}}", searchParams.get("category") || "").replace("{{difficulty}}", searchParams.get("difficulty") || "easy")}
          </p>
          <a
            href={redirectPath}
            className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {dict.quiz.back_to_challenges}
          </a>
        </div>
      </div>
    );
  }

  const category = { id: searchParams.get("category") || "", title: searchParams.get("category") || "" };
  const difficulty = (searchParams.get("difficulty") || "easy") as DifficultyLevel;
  const challengeMode = searchParams.get("challengeMode") || "";
  const opponentId = searchParams.get("opponentId") || "";
  const opponentName = searchParams.get("opponentName") || "";
  const challengerTurn = searchParams.get("challengerTurn") === "true";

  return (
    <QuizContainer
      questions={questions}
      category={category}
      difficulty={difficulty}
      challengeMode={challengeMode}
      opponentId={opponentId}
      opponentName={opponentName}
      challengerTurn={challengerTurn}
      params={params}
    />
  );
}
