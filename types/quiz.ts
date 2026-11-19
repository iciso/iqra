export type InfographicType = "timeline" | "comparison" | "process" | "map" | "chart"

// One infographic attached to a question (see data/quran-infographics.ts).
// The shape of `data` depends on `type`; components/quiz/interactive-infographic.tsx reads it.
export interface QuestionInfographic {
  type: InfographicType
  data: object
  title?: string
}

export interface QuizQuestion {
  // Data files use both: numbers (bidah, charity, dating, imagery, madhab, ta-*) and strings.
  // quiz-data-manager fills a missing id with "<categoryId>-<n>".
  id?: string | number
  question: string
  // Answer options as shown to the player.
  options: string[]
  // The correct option TEXT (not an index): quiz-container compares option === correctAnswer.
  correctAnswer: string
  explanation?: string
  // Source citation, e.g. "Sahih Muslim: Hadith of Jibril". Not shown in the UI today.
  references?: string
  // Only used by data/tamil-quiz-questions.ts and data/quiz-data-expanded.tsx.
  difficulty?: "easy" | "medium" | "intermediate" | "advanced"
  hasInfographic?: boolean
  infographicType?: InfographicType
  infographicData?: object
}

// The question banks a category can have. `intermediate` is optional:
// quiz-data-manager falls back to `easy` when it is missing or empty.
export type QuizLevel = "easy" | "intermediate" | "advanced"

export interface QuizCategory {
  id: string
  title: string
  description: string
  icon: string
  levels: {
    easy: QuizQuestion[]
    intermediate?: QuizQuestion[]
    advanced: QuizQuestion[]
  }
}

export type DifficultyLevel = QuizLevel | "mixed"
