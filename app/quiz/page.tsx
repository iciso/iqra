"use client"; 

import { redirect } from "next/navigation";
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager";
import QuizContainer from "@/components/quiz/quiz-container";
import { useTranslation } from 'next-i18next';
import type { DifficultyLevel, QuizQuestion } from "@/types/quiz";

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
  params: { locale?: string };
}) {
  const locale = params?.locale || 'en';
  const { t } = useTranslation('common', { lng: locale });

  const categoryId = searchParams.category as string;
  const difficulty = (searchParams.difficulty as DifficultyLevel) || "easy";
  const challengeMode = searchParams.challenge as string | undefined;
  const questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined;
  const opponentId = searchParams.opponent as string | undefined;
  const opponentName = searchParams.opponentName as string | undefined;
  const challengerTurn = searchParams.challengerTurn === "true";

  if (!categoryId || !getCategory(categoryId)) {
    redirect("/categories");
  }

  let questions: QuizQuestion[] = [];
  if (difficulty === "mixed") {
    const easyQuestions = getQuizQuestions(categoryId, "easy");
    const mediumQuestions = getQuizQuestions(categoryId, "medium");
    const hardQuestions = getQuizQuestions(categoryId, "hard");
    questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  } else {
    questions = getQuizQuestions(categoryId, difficulty);
  }
  questions = shuffleArray(questions);
  if (questionCount && questions.length > questionCount) {
    questions = questions.slice(0, questionCount);
  }

  if (questions.length === 0) {
    const redirectPath = challengeMode ? "/challenges" : "/categories";
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('quiz.no_questions')}</h1>
        <p className="mb-6">
          {t('quiz.no_questions', { category: getCategory(categoryId).title, difficulty })}
        </p>
        <a href={redirectPath} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {t(challengeMode ? 'quiz.back_to_challenges' : 'quiz.back_to_categories')}
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={questions}
        category={getCategory(categoryId)}
        difficulty={difficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
      />
    </div>
  );
}
