export interface QuizQuestion {
  id?: string // Add ID field for identifying specific questions
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
  hasInfographic?: boolean
  infographicType?: "timeline" | "comparison" | "process" | "map" | "chart"
  infographicData?: any
}

export interface QuizCategory {
  id: string
  title: string
  description: string
  icon: string
  levels: {
    easy: QuizQuestion[]
    advanced: QuizQuestion[]
  }
}

export type DifficultyLevel = "easy" | "advanced" | "intermediate"  | "mixed"
