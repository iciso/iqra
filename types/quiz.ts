export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
  category: string
  level: number
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

export type DifficultyLevel = "easy" | "advanced"
