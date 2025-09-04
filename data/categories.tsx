import type { QuizCategory } from "@/types/quiz"
import { getAllCategories as getAllQuizCategories } from "./quiz-data-manager"
import { getTamilQuestionsForCategory } from "./tamil-quiz-questions"

// Add the missing named export 'categories'
export const categories = getAllQuizCategories()

export function getAllCategories(): QuizCategory[] {
  // This will be called from components that have access to useLanguage
  return getAllQuizCategories()
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return getAllQuizCategories().find((category) => category.id === categoryId)
}

export function getCategoryWithTranslation(categoryId: string, language = "en"): QuizCategory | undefined {
  const category = getAllQuizCategories().find((cat) => cat.id === categoryId)
  if (!category) return undefined

  // If Tamil is selected and we have Tamil questions, merge them
  if (language === "ta") {
    const tamilQuestions = getTamilQuestionsForCategory(categoryId)
    if (tamilQuestions.length > 0) {
      return {
        ...category,
        levels: {
          easy: tamilQuestions.filter((q) => q.difficulty === "easy"),
          intermediate: tamilQuestions.filter((q) => q.difficulty === "intermediate"),
          advanced: tamilQuestions.filter((q) => q.difficulty === "advanced"),
        },
      }
    }
  }

  return category
}
