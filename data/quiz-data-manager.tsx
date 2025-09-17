import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz";
import quranCategory from "./quran";
import seerahCategory from "./quiz-data-manager-additions";
import { additionalCategories } from "./quiz-data-manager-additional-categories";
import comparativeReligionCategory from "./comparative-religion";
import islamicFinanceCategory from "./islamic-finance";
import cryptoCategory from "./crypto";
import islamicHistoryCategory from "./islamic-history";
import hadeethCategory from "./hadeeth";
import fiqhCategory from "./fiqh";
import christCategory from "./christ";
import hinduCategory from "./hindu";
import dawahCategory from "./dawah";
import tafsirCategory from "./tafsir";
import newMuslimsCategory from "./new-muslims";
import tazkiyahCategory from "./tazkiyah";
import genderCategory from "./gender";
import lgbtqCategory from "./lgbtq";
import psychCategory from "./psych";
import parentingCategory from "./parenting";
import peaceCategory from "./peace";
import salahCategory from "./salah";
import sawmCategory from "./salah";
import medicalEthicsCategory from "./islamic-medical-ethics";
import { enhanceQuestionsWithInfographics } from "./quiz-data-manager-infographics";

// Define all quiz categories as Quran removed on 23 Jul 25  
const quizData: QuizCategory[] = [
  quranCategory,
  seerahCategory,
  ...additionalCategories,
  newMuslimsCategory,
  tafsirCategory,
  tazkiyahCategory,
  comparativeReligionCategory,
  islamicFinanceCategory,
  cryptoCategory,
  islamicHistoryCategory,
  hadeethCategory,
  fiqhCategory,
  christCategory,
  hinduCategory,
  dawahCategory,
  genderCategory,
  lgbtqCategory,
  psychCategory,
  parentingCategory,
  peaceCategory,
  salahCategory,
  sawmCategory,
  medicalEthicsCategory,
];

// Debug logs
console.log(
  "Loading quiz data with ascended with categories:",
  quizData.map((cat) => cat.id),
);

console.log(
  "Loaded categories:",
  quizData.map((cat) => `${cat.id} (${cat.levels.easy.length} easy, ${cat.levels.advanced.length} advanced questions)`),
);

// Update the getQuizQuestions function to handle intermediate difficulty and assign IDs
export function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] {
  console.log(`Fetching questions for category: ${categoryId}, difficulty: ${difficulty}`);
  const category = quizData.find((cat) => cat.id === categoryId);
  if (!category) {
    console.log(`Category ${categoryId} not found`);
    return [];
  }

  // If intermediate difficulty is requested but not available, fall back to easy
  if (difficulty === "intermediate" && (!category.levels.intermediate || category.levels.intermediate.length === 0)) {
    console.log(`No intermediate questions found for ${categoryId}, falling back to easy`);
    difficulty = "easy";
  }

  // Get the questions for the specified category and difficulty
  let questions = category.levels[difficulty] || [];

  // Assign IDs to questions if they don't have them
  questions = questions.map((question, index) => {
    if (!question.id) {
      return {
        ...question,
        id: `${categoryId}-${index + 1}`,
      };
    }
    return question;
  });

  console.log(`Found ${questions.length} questions for ${categoryId}/${difficulty}`);

  // Before returning the questions, enhance them with infographics if available
  const enhancedQuestions = enhanceQuestionsWithInfographics(categoryId, questions);

  // Log which questions have infographics
  const withInfographics = enhancedQuestions.filter((q) => q.hasInfographic).length;
  console.log(`Enhanced ${withInfographics} questions with infographics`);

  return enhancedQuestions;
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return quizData.find((category) => category.id === categoryId);
}

export function getAllCategories(): QuizCategory[] {
  return quizData;
}

// Verify all categories have questions or not 
quizData.forEach((category) => {
  console.log(
    `Category ${category.id} has ${category.levels.easy.length} easy questions, ${category.levels.intermediate?.length || 0} intermediate questions, and ${category.levels.advanced.length} advanced questions`,
  );

  // Check for any empty question arrays
  if (category.levels.easy.length === 0) {
    console.warn(`Warning: Category ${category.id} has no easy questions`);
  }
  if (category.levels.intermediate && category.levels.intermediate.length === 0) {
    console.warn(`Warning: Category ${category.id} has no intermediate questions`);
  }
  if (category.levels.advanced.length === 0) {
    console.warn(`Warning: Category ${category.id} has no advanced questions`);
  }
});
