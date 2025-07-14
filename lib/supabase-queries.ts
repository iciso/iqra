import { createClient } from "@/utils/supabase/client"
import { SupabaseClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"

const supabase: SupabaseClient<Database> = createClient()

export const getTopPlayers = async () => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, username, total_score, best_percentage")
      .order("total_score", { ascending: false })
      .order("best_percentage", { ascending: false })
      .order("total_questions", { ascending: false })
      .limit(10)

    if (error) throw error
    return { data: data || [], error: null }
  } catch (error: any) {
    console.error("❌ Supabase error:", error)
    return { data: [], error }
  }
}

export const submitQuizResult = async (
  score: number,
  totalQuestions: number,
  category: string,
  difficulty: string,
  timeTaken: number | null,
  answers: string[] | null,
  challengeId: string | null
) => {
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser()
    if (authError || !authData.user) {
      return { success: false, error: authError || new Error("No user logged in") }
    }

    const percentage = Number(((score / totalQuestions) * 100).toFixed(2))
    const { error } = await supabase.from("quiz_results").insert({
      user_id: authData.user.id,
      challenge_id: challengeId,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      percentage,
      time_taken: timeTaken,
      answers,
    })

    if (error) throw error
    return { success: true, error: null }
  } catch (error: any) {
    console.error("❌ Error submitting quiz result:", error)
    return { success: false, error }
  }
}

export const getQuizResultByChallenge = async (challengeId: string, userId: string) => {
  try {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .eq("challenge_id", challengeId)
      .eq("user_id", userId)

    if (error) throw error
    return { data: data || [], error: null }
  } catch (error: any) {
    console.error("❌ Error fetching quiz result by challenge:", error)
    return { data: [], error }
  }
}

export const getChallenge = async (challengeId: string) => {
  try {
    const { data, error } = await supabase
      .from("challenges")
      .select("*")
      .eq("id", challengeId)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error: any) {
    console.error("❌ Error fetching challenge:", error)
    return { data: null, error }
  }
}

export const createChallenge = async (
  challengerId: string,
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount: number,
  timeLimit: number,
  challengeQuestions: any[]
) => {
  try {
    // Verify profiles exist
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("id, username")
      .in("id", [challengerId, challengedId])

    if (profileError || !profiles || profiles.length !== 2) {
      throw new Error("Challenger or challenged profile not found")
    }

    const { data, error } = await supabase
      .from("challenges")
      .insert({
        challenger_id: challengerId,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: "pending",
        challenge_questions: challengeQuestions,
      })
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error: any) {
    console.error("❌ Error creating challenge:", error)
    return { data: null, error }
  }
}

export const loadChallenges = async (userId: string) => {
  try {
    const { data, error, count } = await supabase
      .from("challenges")
      .select("*", { count: "exact" })
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
      .gte("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      .order("created_at", { ascending: false })

    if (error) throw error
    console.log("🔔 DEBUG: Challenges query result:", { error, count })
    console.log("🔔 DEBUG: Found", count, "raw challenges")

    const validChallenges = data?.filter((challenge) => {
      const createdAt = new Date(challenge.created_at)
      const expiry = new Date(createdAt.getTime() + 7 * 24 * 60 * 60 * 1000)
      return expiry > new Date()
    }) || []

    console.log("🔔 DEBUG: After expiry filter:", validChallenges.length, "valid challenges")
    return { data: validChallenges, count: validChallenges.length, error: null }
  } catch (error: any) {
    console.error("🔔 DEBUG: Error:", error.message || "Challenge loading timeout after 8 seconds")
    console.error("🔔 DEBUG: Error details:", error)
    return { data: [], count: 0, error }
  }
}
