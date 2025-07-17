"use client"

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getQuizQuestions, getCategory, getAllCategories } from '@/data/quiz-data-manager';
import type { QuizCategory, DifficultyLevel } from '@/types/quiz';
import QuizContainer from '@/components/quiz/quiz-container';  

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category') || 'quran';
  const difficulty = searchParams.get('difficulty') as DifficultyLevel || 'easy';
  const set = searchParams.get('set') || '1';
  const challengeMode = searchParams.get('challengeMode');
  const opponentId = searchParams.get('opponentId');
  const opponentName = searchParams.get('opponentName');
  const challengerTurn = searchParams.get('challengerTurn') === 'true';

  const [category, setCategory] = useState<QuizCategory | null>(null);
  const [questions, setQuestions] = useState([]);
  const [setNumber, setSetNumber] = useState(Number(set) || 1);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategory = getCategory(categoryId);
      if (fetchedCategory) {
        setCategory(fetchedCategory);
        // Use setNumber for non-challenge quizzes; challenges always use Set 1
        const questions = getQuizQuestions(categoryId, difficulty, challengeMode ? 1 : setNumber, 10);
        setQuestions(questions);
      }
    };
    fetchData();
  }, [categoryId, difficulty, setNumber, challengeMode]);

  const handleSetChange = (newSet: number) => {
    setSetNumber(newSet);
    router.push(`/quiz?category=${categoryId}&difficulty=${difficulty}&set=${newSet}`);
  };

  if (!category) {
    return <div>Loading...</div>;
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
  )
}
