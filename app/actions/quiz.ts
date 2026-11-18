"use server"

import { quizResultSchema, saveQuizResult } from "@/lib/server/quiz-data"
import { errorMessage } from "@/lib/server/neon"
import type { QuizResultRow } from "@/lib/server/types"

export type SubmitQuizResultState =
  | { success: true; message: string; result: QuizResultRow }
  | { success: false; error: string; details?: string }

/**
 * Saves a finished quiz to the leaderboard. Replaces POST /api/quiz/submit-result.
 * No login exists in this app: the player is identified by the name they typed, as before.
 * No client-sent user id is accepted.
 */
export async function submitQuizResultAction(input: unknown): Promise<SubmitQuizResultState> {
  const parsed = quizResultSchema.safeParse(input)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    return { success: false, error: first?.path[0] === "name" ? "Name must be at least 2 characters" : "Missing quiz data" }
  }

  try {
    const saved = await saveQuizResult(parsed.data)
    return { success: true, message: saved.message, result: saved.result }
  } catch (error) {
    console.error("[quiz] Error submitting quiz result:", error)
    return { success: false, error: "Failed to save quiz result", details: errorMessage(error) }
  }
}
