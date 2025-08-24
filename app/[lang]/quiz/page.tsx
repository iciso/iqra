"use client";

import { useState, useEffect } from "react";
import QuizContainer from "@/components/quiz/quiz-container";
import { getQuizQuestions } from "@/lib/supabase-queries";
import type { NextPage } from "next";
import type { QuizQuestion, DifficultyLevel, QuizCategory } from "@/types/quiz";

interface QuizPageProps {
  params: Promise<{ lang: string }>;
  searchParams: { category?: string; difficulty?: DifficultyLevel; challengeMode?: string; opponentId?: string; opponentName?: string; challengerTurn?: string };
}

const Quiz: NextPage<QuizPageProps> = async ({ params, searchParams }) => {
  const { lang } = await params;
  const { category, difficulty, challengeMode, opponentId, opponentName, challengerTurn } = searchParams;
  const [dict, setDict] = useState<any>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [categoryData, setCategoryData] = useState<QuizCategory | null>(null);

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${lang}/translations.json`);
        if (!response.ok) throw new Error("Failed to load translations");
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    }
    fetchDictionary();
  }, [lang]);

  useEffect(() => {
    async function fetchQuestions() {
      if (category && difficulty) {
        const fetchedQuestions = await getQuizQuestions(category, difficulty);
        setQuestions(fetchedQuestions);
        setCategoryData({ id: category, title: category }); // Adjust based on actual category data
      }
    }
    fetchQuestions();
  }, [category, difficulty]);

  if (!dict || !category || !difficulty) return <div>Loading...</div>;

  return (
    <QuizContainer
      questions={questions}
      category={categoryData || { id: category, title: category }}
      difficulty={difficulty}
      challengeMode={challengeMode}
      opponentId={opponentId}
      opponentName={opponentName}
      challengerTurn={challengerTurn === "true"}
      params={{ lang }}
    />
  );
};

export default Quiz;
