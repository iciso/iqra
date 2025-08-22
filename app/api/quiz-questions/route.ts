// app/api/quiz-questions/route.ts
import { NextResponse } from 'next/server';
import { getQuizQuestions, getCategory } from '@/data/quiz-data-manager';
import type { DifficultyLevel } from '@/types/quiz';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('category') || '';
  const difficulty = (searchParams.get('difficulty') as DifficultyLevel) || 'easy';

  if (!categoryId || !getCategory(categoryId)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  let questions = [];
  if (difficulty === 'mixed') {
    const easyQuestions = getQuizQuestions(categoryId, 'easy');
    const mediumQuestions = getQuizQuestions(categoryId, 'medium');
    const hardQuestions = getQuizQuestions(categoryId, 'hard');
    questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  } else {
    questions = getQuizQuestions(categoryId, difficulty);
  }

  return NextResponse.json({ questions, category: getCategory(categoryId) });
}