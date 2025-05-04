import type { QuizQuestion } from "@/types/quiz"
import { getQuranInfographic } from "./quran-infographics"
import { ibnKathirFatihaDetailed } from "./ibn-kathir-fatiha-detailed"

// Function to assign IDs to questions if they don't have them
function assignQuestionIds(categoryId: string, questions: QuizQuestion[]): QuizQuestion[] {
  return questions.map((question, index) => {
    if (!question.id) {
      return {
        ...question,
        id: `${categoryId}-${index + 1}`,
      }
    }
    return question
  })
}

// Function to enhance questions with infographics
export function enhanceQuestionsWithInfographics(categoryId: string, questions: QuizQuestion[]): QuizQuestion[] {
  // First assign IDs to all questions
  const questionsWithIds = assignQuestionIds(categoryId, questions)

  // Then enhance with infographics
  return questionsWithIds.map((question) => {
    if (categoryId === "quran") {
      // Special case for question 1 (What is the first Surah)
      if (question.id === "quran-1") {
        return {
          ...question,
          hasInfographic: true,
          infographicType: "comparison",
          infographicData: ibnKathirFatihaDetailed.data,
          infographicTitle: ibnKathirFatihaDetailed.title,
        }
      }

      // For other questions, check if they have an infographic
      const infographic = getQuranInfographic(question.id || "")
      if (infographic) {
        return {
          ...question,
          hasInfographic: true,
          infographicType: infographic.type,
          infographicData: infographic.data,
          infographicTitle: infographic.title,
        }
      }
    }
    return question
  })
}
