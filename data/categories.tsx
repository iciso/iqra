import type { QuizCategory } from "@/types/quiz"
import { getAllCategories as getAllQuizCategories } from "./quiz-data-manager"

// Add the missing named export 'categories'
export const categories = getAllQuizCategories()

export function getAllCategories(): QuizCategory[] {
  return getAllQuizCategories()
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return getAllQuizCategories().find((category) => category.id === categoryId)
}
