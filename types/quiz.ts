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
  // Every question has one: "<categoryId>-<level>-<n>" for most, older ones keep theirs. Unique within a category.
  id?: string | number
  question: string
  // Answer options as shown to the player.
  options: string[]
  // The correct option TEXT (not an index): quiz-container compares option === correctAnswer.
  correctAnswer: string
  // Index of correctAnswer in options. Set by quiz-data-manager when the data loads (not written in data files).
  correctIndex?: number
  // pinned[i]: options[i] stays at the end when options are shuffled ("All of the above").
  // Set on the server from the ENGLISH text (lib/i18n/content.server.ts), so it survives translation.
  pinned?: boolean[]
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

// Review state of a translated category file (locales/<lng>/<categoryId>.json, _meta.status).
export type ContentStatus = "review" | "approved" | "hidden"

export type DifficultyLevel = QuizLevel | "mixed"
