import { supabase } from "./supabase"
import { isBuildTime, useNeonFallback } from "./env-config"

// Only import Neon functions if we're not in build time
let neonFunctions: any = {
  saveQuizResultToFallback: async () => null,
  getLeaderboardFromFallback: async () => [],
  initializeFallbackTables: async () => false,
  isNeonAvailable: () => false,
}

// Dynamic import to prevent build-time errors
if (!isBuildTime && useNeonFallback) {
  import("./neon-fallback")
    .then((module) => {
      neonFunctions = module
    })
    .catch((err) => {
      console.error("Failed to load Neon fallback:", err)
    })
}

// Initialize fallback tables on first load
let initialized = false
async function ensureInitialized() {
  if (!initialized && !isBuildTime && useNeonFallback) {
    try {
      await neonFunctions.initializeFallbackTables()
      initialized = true
    } catch (error) {
      console.warn("Could not initialize Neon fallback:", error)
    }
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
  // During build time, just return a mock result
  if (isBuildTime) {
    return { id: "build-time-mock", score }
  }

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
    console.log("⚠️ Supabase failed, trying Neon fallback...")

    // Try Neon fallback if available
    if (useNeonFallback) {
      try {
        await ensureInitialized()
        return await neonFunctions.saveQuizResultToFallback(
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
      } catch (neonError) {
        console.error("❌ Neon fallback also failed:", neonError)
        throw new Error("Both Supabase and Neon failed to save quiz result")
      }
    } else {
      console.warn("⚠️ Neon not available, quiz result not saved")
      throw new Error("Database unavailable - quiz result could not be saved")
    }
  }
}

export async function getLeaderboardWithFallback() {
  // During build time, return mock data
  if (isBuildTime) {
    return {
      source: "Build Time Mock",
      data: [
        {
          name: "Build Time User",
          score: 10,
          totalQuestions: 10,
          percentage: 100,
          date: new Date().toLocaleDateString(),
          category: "Quran",
          difficulty: "Easy",
          challenge: "quiz",
          user_id: "build-time-user",
        },
      ],
    }
  }

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
      return {
        source: "Supabase",
        data: data.map((result) => ({
          name: result.user_profiles.full_name || result.user_profiles.username,
          score: result.score,
          totalQuestions: result.total_questions,
          percentage: result.percentage,
          date: new Date(result.created_at).toLocaleDateString(),
          category: result.category,
          difficulty: result.difficulty,
          challenge: result.challenge_id ? "challenge" : "quiz",
          user_id: result.user_id,
        })),
      }
    }

    throw new Error("No data from Supabase")
  } catch (error) {
    console.log("⚠️ Supabase failed, trying Neon fallback...")

    // Try Neon fallback if available
    if (useNeonFallback) {
      try {
        await ensureInitialized()
        const results = await neonFunctions.getLeaderboardFromFallback()

        if (results && results.length > 0) {
          return {
            source: "Neon",
            data: results.map((result: any) => ({
              name: result.full_name || result.username || "Unknown User",
              score: result.score,
              totalQuestions: result.total_questions,
              percentage: result.percentage,
              date: new Date(result.created_at).toLocaleDateString(),
              category: result.category,
              difficulty: result.difficulty,
              challenge: result.challenge_id ? "challenge" : "quiz",
              user_id: result.user_id,
            })),
          }
        }
      } catch (neonError) {
        console.error("❌ Neon fallback also failed:", neonError)
      }
    }

    // Return demo data as final fallback
    console.log("⚠️ Using demo data as final fallback")
    return {
      source: "Demo",
      data: [
        {
          name: "Dr. Muhammad Murtaza Ikram",
          score: 19,
          totalQuestions: 20,
          percentage: 95,
          date: "12/30/2024",
          category: "Quran",
          difficulty: "Hard",
          challenge: "quiz",
          user_id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
        },
        {
          name: "Emrafi",
          score: 17,
          totalQuestions: 20,
          percentage: 85,
          date: "12/29/2024",
          category: "Islamic History",
          difficulty: "Medium",
          challenge: "challenge",
          user_id: "demo-user-2",
        },
        {
          name: "Francis Raj",
          score: 0,
          totalQuestions: 20,
          percentage: 0,
          date: "12/28/2024",
          category: "Quran",
          difficulty: "Easy",
          challenge: "quiz",
          user_id: "demo-user-3",
        },
      ],
    }
  }
}
