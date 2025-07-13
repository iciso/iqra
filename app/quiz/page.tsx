import { redirect } from "next/navigation";
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager";
import QuizContainer from "@/components/quiz/quiz-container";
import type { DifficultyLevel } from "@/types/quiz";
import type { QuizQuestion } from "@/types/quiz";

// Helper function to shuffle an array using Fisher-Yates algorithm
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
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoryId = searchParams.category as string;
  const difficulty = (searchParams.difficulty as DifficultyLevel) || "easy";
  const challengeMode = searchParams.challenge as string | undefined;
  const opponentId = searchParams.opponent as string | undefined;
  const opponentName = searchParams.opponentName as string | undefined;
  const challengerTurn = searchParams.challengerTurn === "true";
  const index = Number(searchParams.index) || 0;
  const set = Number(searchParams.set) || 0;

  // Define valid categories
  const validCategories = [
    "quran",
    "fiqh",
    "tafsir",
    "hadeeth",
    "aqeedah",
    "seerah",
    "new-muslims",
    "tazkiyah",
    "comparative",
    "islamic-finance",
    "history",
    "dawah",
  ];

  // Validate category
  if (!categoryId || !validCategories.includes(categoryId)) {
    console.error(`Invalid category: ${categoryId}`);
    redirect("/categories");
  }

  const category = getCategory(categoryId);
  if (!category) {
    redirect("/categories");
  }

  let questions: QuizQuestion[] = [];
  try {
    if (difficulty === "mixed") {
      const easyQuestions = getQuizQuestions(categoryId, "easy") || [];
      const mediumQuestions = getQuizQuestions(categoryId, "medium") || [];
      const hardQuestions = getQuizQuestions(categoryId, "hard") || [];
      questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    } else {
      questions = getQuizQuestions(categoryId, difficulty) || [];
    }

    questions = shuffleArray(questions);
    const maxQuestionsPerSet = 10;
    const totalQuestions = questions.length;
    const startIdx = set * maxQuestionsPerSet;
    if (startIdx >= totalQuestions) {
      redirect(`/quiz/results?category=${categoryId}&difficulty=${difficulty}&challenge=${challengeMode}&opponent=${opponentId}&challengerTurn=${challengerTurn}`);
    }
    questions = questions.slice(startIdx, startIdx + maxQuestionsPerSet);

    if (questions.length === 0) {
      return (
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
          <p className="mb-6">
            Sorry, there are no questions available for {category.title} in {difficulty} mode at this time.
          </p>
          <a
            href={challengeMode ? "/challenges" : "/categories"}
            className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {challengeMode ? "Back to Challenges" : "Browse Categories"}
          </a>
        </div>
      );
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Something Went Wrong!</h1>
        <p className="mb-6">We apologize for the inconvenience. Please try again later.</p>
        <a href="/quiz" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Try Again
        </a>
      </div>
    );
  }

  if (index >= questions.length) {
    const nextSet = set + 1;
    const totalSets = Math.ceil((getQuizQuestions(categoryId, difficulty)?.length || 0) / maxQuestionsPerSet);
    if (nextSet < totalSets) {
      redirect(
        `/quiz?category=${categoryId}&difficulty=${difficulty}&set=${nextSet}&challenge=${challengeMode}&opponent=${opponentId}&opponentName=${opponentName}&challengerTurn=${challengerTurn}`
      );
    } else {
      redirect(
        `/quiz/results?category=${categoryId}&difficulty=${difficulty}&challenge=${challengeMode}&opponent=${opponentId}&challengerTurn=${challengerTurn}`
      );
    }
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
        currentQuestionIndex={index}
      />
    </div>
  );
}
