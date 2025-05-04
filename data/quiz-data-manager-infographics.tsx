import type { QuizQuestion } from "@/types/quiz"
import { getQuranInfographic } from "./quran-infographics"

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

  // Log for debugging
  console.log(`Enhancing ${questionsWithIds.length} questions for category ${categoryId}`)

  // Then enhance with infographics
  const enhanced = questionsWithIds.map((question) => {
    if (categoryId === "quran") {
      // For Quran questions, check if they have an infographic
      const infographic = getQuranInfographic(question.id || "")

      if (infographic) {
        console.log(`Found infographic for question ${question.id}: ${infographic.type}`)
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

  // Log how many questions were enhanced
  const withInfographics = enhanced.filter((q) => q.hasInfographic).length
  console.log(`Enhanced ${withInfographics} questions with infographics`)

  return enhanced
}
