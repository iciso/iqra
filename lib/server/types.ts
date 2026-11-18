// Row shapes returned by lib/server/* and the Server Actions. Types only - safe to import from client code.
// Dates arrive as ISO strings, exactly as the old JSON API routes sent them.

export interface LeaderboardRow {
  id: number
  name: string
  score: number
  totalQuestions: number
  percentage: number
  category: string | null
  difficulty: string | null
  challenge: string | null
  date: string
  submittedAt: string
}

export interface ProfileEntryRow {
  id: number
  name: string
  score: number
  total_questions: number
  percentage: number
  category: string | null
  difficulty: string | null
  challenge: string | null
  date: string
}

export interface ProfileChallengeRow {
  id: string
  challenger_name: string
  challenged_name: string
  category: string
  difficulty: string
  question_count: number
  status: string
  created_at: string
  challenger_score: number | null
  challenger_total: number | null
  challenged_score: number | null
  challenged_total: number | null
}

export interface ChallengeRow {
  id: string
  challenger_name: string
  challenged_name: string
  category: string
  difficulty: string
  question_count: number
  time_limit?: number
  section_number: number | null
  status: string
  created_at: string
  expires_at: string
}

export interface QuizResultRow {
  id: number | string
  name: string
  score: number
  total_questions: number
  percentage: number
  category: string | null
  difficulty: string | null
  challenge: string | null
  date: string
  submitted_at: string
}
