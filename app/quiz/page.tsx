import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import QuizContainer from "@/components/quiz/quiz-container";
import type { DifficultyLevel, QuizQuestion, QuizCategory } from "@/types/quiz";

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Mock getCategory function (replace with actual implementation)
function getCategory(categoryId: string): QuizCategory | null {
  // This should query your categories table or use a static data source
  return { id: categoryId, title: categoryId }; // Placeholder
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoryId = searchParams.category as string;
  const difficulty = (searchParams.difficulty as DifficultyLevel) || "easy";
  const challengeMode = searchParams.challenge as string | undefined;
  const questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined;
  const opponentId = searchParams.opponent as string | undefined;
  const opponentName = searchParams.opponentName as string | undefined;
  const challengerTurn = searchParams.challengerTurn === "true";

  if (!categoryId) {
    redirect("/categories");
  }

  const category = getCategory(categoryId);
  if (!category) {
    redirect("/categories");
  }

  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Fetch questions from Supabase
  let questions: QuizQuestion[] = [];
  if (difficulty === "mixed") {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("category_id", categoryId);
    if (error) {
      console.error("Error fetching mixed questions:", error);
    } else {
      questions = data as QuizQuestion[];
    }
  } else {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("category_id", categoryId)
      .eq("difficulty", difficulty);
    if (error) {
      console.error(`Error fetching ${difficulty} questions:`, error);
    } else {
      questions = data as QuizQuestion[];
    }
  }

  // Shuffle questions
  questions = shuffleArray(questions);

  // Limit question count if specified
  if (questionCount && questions.length > questionCount) {
    questions = questions.slice(0, questionCount);
  }

  if (questions.length === 0) {
    const redirectPath = challengeMode ? "/challenges" : "/categories";
    const redirectText = challengeMode ? "Back to Challenges" : "Browse Categories";

    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        <p className="mb-6">
          Sorry, there are no questions available for {category.title} in {difficulty} mode at this time.
        </p>
        <a
          href={redirectPath}
          className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          {redirectText}
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">
        {challengeMode ? "Challenge Mode" : "Quiz Mode"}: {category.title} ({difficulty})
      </h1>
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
