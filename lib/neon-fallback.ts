import { neon, neonConfig } from "@neondatabase/serverless"
import { isBuildTime, useNeonFallback } from "./env-config"

// Configure neon to work in edge and non-edge environments
neonConfig.fetchConnectionCache = true

// Safe SQL client factory that won't run during build
const getSqlClient = () => {
  // Skip during build time
  if (isBuildTime) {
    console.log("🏗️ Build time detected, skipping Neon initialization")
    return {
      // Return dummy functions that do nothing during build
      async query() {
        return []
      },
      async raw() {
        return []
      },
      // Add a tag method for template literals
      // @ts-ignore - this is intentional for build time
      [Symbol.asyncTag]: async () => [],
    }
  }

  // Only initialize if we have the connection string
  if (!process.env.NEON_NEON_DATABASE_URL) {
    throw new Error("NEON_DATABASE_URL environment variable is not set")
  }

  // Create the real client
  return neon(process.env.NEON_DATABASE_URL)
}

// Export a dummy function for build time
export async function initializeFallbackTables() {
  if (isBuildTime) {
    console.log("🏗️ Build time detected, skipping table initialization")
    return false
  }

  if (!useNeonFallback) {
    console.log("⚠️ Neon fallback not configured, skipping initialization")
    return false
  }

  try {
    console.log("🔄 Initializing Neon fallback tables...")
    const sql = getSqlClient()

    // Create quiz_results table
    await sql`
      CREATE TABLE IF NOT EXISTS quiz_results_fallback (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        percentage INTEGER NOT NULL,
        category TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        time_left INTEGER DEFAULT 0,
        answers TEXT,
        challenge_id TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `

    // Create user_profiles table
    await sql`
      CREATE TABLE IF NOT EXISTS user_profiles_fallback (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        full_name TEXT,
        email TEXT,
        total_score INTEGER DEFAULT 0,
        best_percentage INTEGER DEFAULT 0,
        quiz_count INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_quiz_results_fallback_percentage ON quiz_results_fallback(percentage DESC)`
    await sql`CREATE INDEX IF NOT EXISTS idx_quiz_results_fallback_created_at ON quiz_results_fallback(created_at DESC)`

    // Insert initial data for Dr. Muhammad Murtaza Ikram
    await sql`
      INSERT INTO user_profiles_fallback (id, username, full_name, total_score, best_percentage, quiz_count) 
      VALUES 
        ('ddd8b850-1b56-4781-bd03-1be615f9e3ec', 'drmurtazaa50', 'Dr. Muhammad Murtaza Ikram', 200, 95, 5)
      ON CONFLICT (id) DO NOTHING
    `

    console.log("✅ Fallback tables initialized successfully")
    return true
  } catch (error) {
    console.error("❌ Error initializing fallback tables:", error)
    return false
  }
}

export async function saveQuizResultToFallback(
  userId: string,
  score: number,
  totalQuestions: number,
  percentage: number,
  category: string,
  difficulty: string,
  timeLeft = 0,
  answers: any = null,
  challengeId: string | null = null,
) {
  if (isBuildTime) {
    console.log("🏗️ Build time detected, skipping save to fallback")
    return null
  }

  if (!useNeonFallback) {
    throw new Error("Neon fallback not configured")
  }

  try {
    console.log("💾 Saving quiz result to Neon fallback...")
    const sql = getSqlClient()

    // First, ensure the user exists in the fallback database
    await sql`
      INSERT INTO user_profiles_fallback (id, username, full_name)
      VALUES (${userId}, ${userId.substring(0, 8)}, 'IQRA User')
      ON CONFLICT (id) DO NOTHING
    `

    // Then save the quiz result
    const result = await sql`
      INSERT INTO quiz_results_fallback 
      (user_id, score, total_questions, percentage, category, difficulty, time_left, answers, challenge_id)
      VALUES (${userId}, ${score}, ${totalQuestions}, ${percentage}, ${category}, ${difficulty}, ${timeLeft}, ${JSON.stringify(answers)}, ${challengeId})
      RETURNING *
    `

    console.log("✅ Quiz result saved to Neon fallback:", result[0])
    return result[0]
  } catch (error) {
    console.error("❌ Error saving to Neon fallback:", error)
    throw error
  }
}

export async function getLeaderboardFromFallback(limit = 50) {
  if (isBuildTime) {
    console.log("🏗️ Build time detected, returning empty leaderboard")
    return []
  }

  if (!useNeonFallback) {
    throw new Error("Neon fallback not configured")
  }

  try {
    console.log("🔍 Getting leaderboard from Neon fallback...")
    const sql = getSqlClient()

    const results = await sql`
      SELECT 
        qr.id,
        qr.user_id,
        qr.score,
        qr.total_questions,
        qr.percentage,
        qr.category,
        qr.difficulty,
        qr.challenge_id,
        qr.created_at,
        up.username,
        up.full_name
      FROM quiz_results_fallback qr
      LEFT JOIN user_profiles_fallback up ON qr.user_id = up.id
      ORDER BY qr.percentage DESC, qr.created_at DESC
      LIMIT ${limit}
    `

    console.log("✅ Leaderboard loaded from Neon fallback:", results.length, "entries")
    return results
  } catch (error) {
    console.error("❌ Error loading from Neon fallback:", error)
    throw error
  }
}

// Helper function to check if Neon is available
export function isNeonAvailable(): boolean {
  return !isBuildTime && useNeonFallback
}
