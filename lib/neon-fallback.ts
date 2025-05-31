import { neon, neonConfig } from "@neondatabase/serverless"

// Configure neon to work in edge and non-edge environments
neonConfig.fetchConnectionCache = true

// Simplified build time detection
const isBuildTime = process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV

// Safe SQL client factory that won't run during build
const getSqlClient = () => {
  // Skip during build time
  if (isBuildTime) {
    console.log("🏗️ Build time detected, skipping Neon initialization")
    return null
  }

  // Use the correct environment variable from Neon with iqra prefix
  const connectionString = process.env.iqra_DATABASE_URL || process.env.iqra_POSTGRES_URL || process.env.DATABASE_URL

  if (!connectionString) {
    console.warn("No database connection string found")
    return null
  }

  console.log("🔗 Connecting to Neon with URL:", connectionString.substring(0, 20) + "...")

  // Create the real client
  return neon(connectionString)
}

// Export a safe function for build time
export async function initializeFallbackTables() {
  if (isBuildTime) {
    console.log("🏗️ Build time detected, skipping table initialization")
    return false
  }

  const sql = getSqlClient()
  if (!sql) {
    console.log("⚠️ No SQL client available, skipping initialization")
    return false
  }

  try {
    console.log("🔄 Initializing Neon fallback tables...")

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

  const sql = getSqlClient()
  if (!sql) {
    throw new Error("No database connection available")
  }

  try {
    console.log("💾 Saving quiz result to Neon fallback...")

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

  const sql = getSqlClient()
  if (!sql) {
    throw new Error("No database connection available")
  }

  try {
    console.log("🔍 Getting leaderboard from Neon fallback...")

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

export async function getTopPlayersFromFallback(limit = 10) {
  if (isBuildTime) {
    console.log("🏗️ Build time detected, returning empty players")
    return []
  }

  const sql = getSqlClient()
  if (!sql) {
    throw new Error("No database connection available")
  }

  try {
    console.log("🔍 Getting top players from Neon fallback...")

    const results = await sql`
      SELECT 
        id,
        username,
        full_name,
        total_score,
        best_percentage,
        quiz_count
      FROM user_profiles_fallback
      ORDER BY total_score DESC, best_percentage DESC
      LIMIT ${limit}
    `

    console.log("✅ Top players loaded from Neon fallback:", results.length, "players")
    return results
  } catch (error) {
    console.error("❌ Error loading top players from Neon fallback:", error)
    throw error
  }
}

// Helper function to check if Neon is available
export function isNeonAvailable(): boolean {
  return !isBuildTime && !!process.env.iqra_DATABASE_URL
}
