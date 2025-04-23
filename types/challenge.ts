export interface User {
  id: string
  name: string
  email?: string
  avatar?: string
  kp: number // Knowledge Points
  streak?: number
  badges?: string[]
  recentQuestions?: string[] // Track recently seen questions
}

export type ChallengeStatus = "pending" | "accepted" | "declined" | "completed"

export interface Challenge {
  id: string
  challenger: User
  opponent: User
  category: string
  level: number
  description?: string
  status: ChallengeStatus
  createdAt: string
  reward: number
  questions?: string[] // IDs of questions
}

export interface PlayerResult {
  correctAnswers: number
  timeBonus: number
  streakBonus: number
  totalKP: number
}

export interface ChallengeResult {
  id: string
  challengeId: string
  challenger: User
  opponent: User
  category: string
  level: number
  challengerResult: PlayerResult
  opponentResult: PlayerResult
  winner: User | null // null means draw
  kpAwarded: number
  completedAt: string
}
