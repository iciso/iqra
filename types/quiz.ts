export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
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

export type DifficultyLevel = "easy" | "advanced" | "intermediate"
