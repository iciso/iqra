import type { QuizQuestion } from "@/types/quiz"
import { getQuranInfographic } from "./quran-infographics"

// Function to enhance existing Quran questions with infographic data
export function enhanceQuranQuestionsWithInfographics(questions: QuizQuestion[]): QuizQuestion[] {
  return questions.map((question) => {
    // Check if this question has an infographic
    const infographic = getQuranInfographic(question.id)

    if (infographic) {
      return {
        ...question,
        hasInfographic: true,
        infographicType: infographic.type,
        infographicData: infographic.data,
      }
    }

    return question
  })
}

// These are the Quran questions we've identified as good candidates for infographics
export const quranInfographicCandidates = [
  "quran-11", // Which surah is known as 'The Heart of the Quran'?
  "quran-13", // Which surah does not begin with 'Bismillah'?
  "quran-15", // Which is the longest surah in the Quran?
  "quran-16", // Which surah is known as 'The Mother of the Quran'?
  "quran-17", // Which surah mentions the story of the People of the Cave (Ashab al-Kahf)?
]
