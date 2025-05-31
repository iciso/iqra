import { supabase } from "./supabase"
import { saveQuizResultToFallback, getLeaderboardFromFallback, initializeFallbackTables } from "./neon-fallback"

// Initialize fallback tables on first load
let initialized = false
async function ensureInitialized() {
  if (!initialized) {
    await initializeFallbackTables()
    initialized = true
  }
}

export async function submitQuizResultWithFallback(
  score: number,
  totalQuestions: number,
  category: string,
  difficulty: string,
  timeLeft?: number,
  answers?: any,
  challengeId?: string,
) {
  await ensureInitialized()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not authenticated")
  }

  const percentage = Math.round((score / totalQuestions) * 100)

  // Try Supabase first
  try {
    console.log("📊 Trying Supabase first...")
    const { data, error } = await supabase
      .from("quiz_results")
      .insert({
        user_id: user.id,
        score: score,
        total_questions: totalQuestions,
        percentage: percentage,
        category: category,
        difficulty: difficulty,
        time_left: timeLeft || 0,
        answers: answers ? JSON.stringify(answers) : null,
        challenge_id: challengeId || null,
      })
      .select()
      .single()

    if (error) throw error

    console.log("✅ Saved to Supabase successfully")
    return data
  } catch (error) {
    console.log("⚠️ Supabase failed, using Neon fallback...")

    // Fallback to Neon
    return await saveQuizResultToFallback(
      user.id,
      score,
      totalQuestions,
      percentage,
      category,
      difficulty,
      timeLeft || 0,
      answers,
      challengeId,
    )
  }
}

export async function getLeaderboardWithFallback() {
  await ensureInitialized()

  // Try Supabase first
  try {
    console.log("📊 Loading leaderboard from Supabase...")
    const { data, error } = await supabase
      .from("quiz_results")
      .select(`
        *,
        user_profiles!inner(username, full_name, avatar_url)
      `)
      .order("percentage", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(50)

    if (error) throw error

    if (data && data.length > 0) {
      console.log("✅ Loaded from Supabase:", data.length, "entries")
      return data.map((result) => ({
        name: result.user_profiles.full_name || result.user_profiles.username,
        score: result.score,
        totalQuestions: result.total_questions,
        percentage: result.percentage,
        date: new Date(result.created_at).toLocaleDateString(),
        category: result.category,
        difficulty: result.difficulty,
        challenge: result.challenge_id ? "challenge" : "quiz",
        user_id: result.user_id,
      }))
    }

    throw new Error("No data from Supabase")
  } catch (error) {
    console.log("⚠️ Supabase failed, using Neon fallback...")

    // Fallback to Neon
    const results = await getLeaderboardFromFallback()
    return results.map((result) => ({
      name: result.full_name || result.username || "Unknown User",
      score: result.score,
      totalQuestions: result.total_questions,
      percentage: result.percentage,
      date: new Date(result.created_at).toLocaleDateString(),
      category: result.category,
      difficulty: result.difficulty,
      challenge: result.challenge_id ? "challenge" : "quiz",
      user_id: result.user_id,
    }))
  }
}
