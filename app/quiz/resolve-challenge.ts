"use server"

import { createClient } from "@supabase/supabase-js"

// Minimal shape of what we need to render a challenge-based quiz
export type ResolvedChallenge = {
  category?: string
  difficulty?: string
  questionCount?: number
  opponentId?: string
  opponentName?: string
}

export async function resolveChallenge(challengeId: string): Promise<ResolvedChallenge | null> {
  // Use server-side credentials only
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceKey) {
    console.error("resolveChallenge: Missing Supabase env vars")
    return null
  }

  const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } })

  const { data: challenge, error } = await supabase
    .from("user_challenges")
    .select("id, category, difficulty, question_count, challenger_id")
    .eq("id", challengeId)
    .single()

  if (error || !challenge) {
    console.error("resolveChallenge: Failed to fetch challenge", error)
    return null
  }

  // Fetch challenger profile so the acceptor sees the real opponent
  const { data: challengerProfile } = await supabase
    .from("user_profiles")
    .select("id, full_name, username")
    .eq("id", challenge.challenger_id)
    .single()

  return {
    category: challenge.category || undefined,
    difficulty: challenge.difficulty || undefined,
    questionCount: typeof challenge.question_count === "number" ? challenge.question_count : 10,
    opponentId: challengerProfile?.id ?? challenge.challenger_id ?? undefined,
    opponentName: challengerProfile?.full_name || challengerProfile?.username || "Challenger",
  }
}
