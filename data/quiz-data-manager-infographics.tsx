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
      // Special case for question about the first Surah
      if (
        question.question.includes("first Surah") ||
        (question.correctAnswer.includes("Al-Fatiha") && question.question.includes("first"))
      ) {
        return {
          ...question,
          hasInfographic: true,
          infographicType: "comparison",
          infographicData: ibnKathirFatihaDetailed.data,
          infographicTitle: ibnKathirFatihaDetailed.title,
        }
      }

      // Special case for question about the meaning of the word 'Quran'
      if (question.question.includes("meaning") && question.question.includes("Quran")) {
        const infographic = getQuranInfographic("quran-meaning")
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

      // Special case for question about names of the Quran
      if (question.question.includes("names") && question.question.includes("Quran")) {
        const infographic = getQuranInfographic("quran-names")
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

      // Special case for question about Surah recited in every raka'ah
      if (
        question.question.includes("recited in every raka") ||
        (question.correctAnswer.includes("Al-Fatiha") && question.question.includes("prayer"))
      ) {
        const infographic = getQuranInfographic("quran-9")
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

      // Special case for question about Al-Fatiha verses
      if (question.question.includes("verses") && question.question.includes("Al-Fatiha")) {
        return {
          ...question,
          hasInfographic: true,
          infographicType: "process",
          infographicData: getQuranInfographic("quran-7")?.data,
          infographicTitle: getQuranInfographic("quran-7")?.title,
        }
      }

      // Special case for question about Surah Yasin
      if (question.question.includes("Yasin") || question.correctAnswer.includes("Yasin")) {
        const infographic = getQuranInfographic("quran-5")
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

      // For other questions, check if they have a matching infographic by ID
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
