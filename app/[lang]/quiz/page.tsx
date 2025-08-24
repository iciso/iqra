// app/[lang]/quiz/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import QuizContainer from '@/components/quiz/quiz-container';
import type { DifficultyLevel, QuizQuestion } from '@/types/quiz';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizPage({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { lang: string };
}) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dict, setDict] = useState<any>(null);
  const router = useRouter();

  const categoryId = searchParams.category as string;
  const difficulty = (searchParams.difficulty as DifficultyLevel) || 'easy';
  const challengeMode = searchParams.challenge as string | undefined;
  const questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined;
  const opponentId = searchParams.opponent as string | undefined;
  const opponentName = searchParams.opponentName as string | undefined;
  const challengerTurn = searchParams.challengerTurn === 'true';

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/locales/${params.lang}/translation.json`);
        if (!response.ok) throw new Error('Failed to load translations');
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error('Error loading translations:', err);
      }
    }
    fetchDictionary();
  }, [params.lang]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(`/api/quiz-questions?category=${categoryId}&difficulty=${difficulty}`);
        const data = await response.json();
        if (data.error) {
          router.push(`/${params.lang}/categories`);
          return;
        }
        let fetchedQuestions = data.questions;
        fetchedQuestions = shuffleArray(fetchedQuestions);
        if (questionCount && fetchedQuestions.length > questionCount) {
          fetchedQuestions = fetchedQuestions.slice(0, questionCount);
        }
        setQuestions(fetchedQuestions);
        setCategory(data.category);
        setLoading(false);
      } catch (err) {
        router.push(`/${params.lang}/categories`);
      }
    }
    fetchQuestions();
  }, [categoryId, difficulty, questionCount, params.lang, router]);

  if (loading || !dict) {
    return <div>Loading...</div>;
  }

  if (questions.length === 0) {
    const redirectPath = challengeMode ? `/${params.lang}/challenges` : `/${params.lang}/categories`;
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">{dict.quiz.title}</h1>
        <p className="mb-6">
          {dict.quiz.no_questions.replace('{{category}}', category?.title || '').replace('{{difficulty}}', difficulty)}
        </p>
        <a href={redirectPath} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {dict[challengeMode ? 'quiz.back_to_challenges' : 'quiz.back_to_categories']}
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={questions}
        category={category}
        difficulty={difficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
      />
    </div>
  );
}