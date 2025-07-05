import { supabase } from "./supabase"
import { getLeaderboardFromFallback } from "./neon-fallback"

// Get leaderboard with fallback to Neon if Supabase fails
export async function getLeaderboardWithFallback() {
  console.log("📊 Getting leaderboard with fallback...")

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected in getLeaderboardWithFallback, using mock data")
    return {
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
        },
      ].filter((entry) => !["Test User", "Build Time User", "Demo User"].includes(entry.name)),
      source: "Build Time Mock",
    }
  }

  try {
    console.log("📊 Trying Supabase for leaderboard...")

    // Get all user profiles from Supabase (total scores)
    const { data: profiles, error: profilesError } = await supabase
      .from("user_profiles")
      .select("*")
      .not("username", "in", '("Test User","Build Time User","Demo User")') // Filter out test users
      .order("total_score", { ascending: false })

    if (profilesError) {
      throw profilesError
    }

    if (profiles && profiles.length > 0) {
      console.log(`✅ Retrieved ${profiles.length} user profiles from Supabase`)

      // Format profiles for leaderboard
      const leaderboard = profiles.map((profile) => ({
        name: profile.full_name || profile.username || "Unknown User",
        score: profile.total_score || 0,
        totalQuestions: profile.total_questions || 0,
        percentage: profile.total_questions > 0 ? Math.round((profile.total_score / profile.total_questions) * 100) : 0,
        date: new Date(profile.updated_at || profile.created_at).toLocaleDateString(),
        category: "All Categories",
        difficulty: "All",
        challenge: "all",
        user_id: profile.id,
      }))

      return { data: leaderboard, source: "Supabase User Profiles" }
    }

    throw new Error("No user profiles found in Supabase")
  } catch (supabaseError) {
    console.error("❌ Supabase error:", supabaseError)

    // Try Neon fallback
    try {
      console.log("📊 Trying Neon fallback for leaderboard...")
      return await getLeaderboardFromFallback()
    } catch (neonError) {
      console.error("❌ Neon fallback error:", neonError)

      // Final fallback to demo data
      return {
        data: [
          {
            name: "Demo User",
            score: 10,
            totalQuestions: 10,
            percentage: 100,
            date: new Date().toLocaleDateString(),
            category: "Quran",
            difficulty: "Easy",
            challenge: "quiz",
          },
        ].filter((entry) => !["Test User", "Build Time User", "Demo User"].includes(entry.name)),
        source: "Demo (Error)",
      }
    }
  }
}
