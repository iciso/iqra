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

// Fetch category from Supabase
async function getCategory(categoryId: string): Promise<QuizCategory | null> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", categoryId)
    .single();
  if (error) {
    console.error(`Error fetching category ${categoryId}:`, error);
    return null;
  }
  if (!data) {
    console.error(`No category found for ID: ${categoryId}`);
    return null;
  }
  console.log("Fetched category:", data);
  return data as QuizCategory;
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoryId = searchParams.category as string;
  const difficulty = (searchParams.difficulty as DifficultyLevel) || "easy";
  const challengeMode = searchParams.challenge as string | undefined;
  const questionCount = searchParams.questions
    ? Number.parseInt(searchParams.questions as string, 10)
    : undefined;
  const opponentId = searchParams.opponent as string | undefined;
  const opponentName = searchParams.opponentName as string | undefined;
  const challengerTurn = searchParams.challengerTurn === "true";

  if (!categoryId) {
    console.log("No categoryId provided, redirecting to /categories");
    redirect("/categories");
  }

  const category = await getCategory(categoryId);
  if (!category) {
    console.log(`Category ${categoryId} not found, redirecting to /categories");
    redirect("/categories");
  }

  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Fetch questions from Supabase
  let rawQuestions: QuizQuestion[] = [];
  try {
    if (difficulty === "mixed") {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*")
        .eq("category_id", categoryId);
      if (error) throw error;
      if (!data) {
        console.log(`No questions found for category ${categoryId} (mixed)`);
      } else {
        rawQuestions = data as QuizQuestion[];
        console.log("Fetched questions (mixed):", JSON.stringify(rawQuestions, null, 2));
      }
    } else {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*")
        .eq("category_id", categoryId)
        .eq("difficulty", difficulty);
      if (error) throw error;
      if (!data) {
        console.log(`No questions found for category ${categoryId}, difficulty ${difficulty}`
        );
      } else {
        rawQuestions = data as QuizQuestion[];
        console.log("Fetched questions:", JSON.stringify(rawQuestions, null, 2));
      }
    }
  } catch (error) {
    console.log("Error fetching quiz questions:", error);
  }

  // Transform questions to include options
  const questions: QuizQuestion[] = rawQuestions.map((q) => ({
    ...q,
    options: shuffleArray([q.correct_answer, ...(q.incorrect_answers || [])]),
  }));

  // Shuffle questions
  if (questions.length > 0) {
    questions = shuffleArray(questions);
  }

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

  try {
    console.log("Passing to QuizContainer:", {
      questions: JSON.stringify(questions, null, 2),
      category,
      difficulty,
      challengeMode,
      opponentId,
      opponentName,
      challengerTurn,
    });
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
  } catch (error) {
    console.error("Error rendering QuizContainer:", error);
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="mb-6">We apologize for the inconvenience. Please try again later.</p>
        <a
          href="/categories"
          className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Back to Categories
        </a>
      </div>
    );
  }
}
