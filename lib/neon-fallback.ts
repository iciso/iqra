import { neon } from "@neondatabase/serverless"
import { isBuildTime } from "./env-config"

// Initialize tables if they don't exist
export async function initializeFallbackTables() {
  console.log("🔄 Initializing fallback tables...")

  // Safety check - don't run during build
  if (typeof window !== "undefined") {
    console.log("🔄 Running in browser, skipping table initialization")
    return true
  }

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected in initializeFallbackTables, skipping")
    return false
  }

  try {
    // Check if we have a database URL
    const dbUrl = process.env.iqra_DATABASE_URL || process.env.DATABASE_URL
    if (!dbUrl) {
      console.error("❌ No database URL found for fallback")
      return false
    }

    console.log("🔌 Connecting to Neon database...")
    const sql = neon(dbUrl)

    // Create quiz_results table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS quiz_results (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        percentage INTEGER NOT NULL,
        category TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        time_left INTEGER,
        challenge_id TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create user_profiles table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS user_profiles (
        id TEXT PRIMARY KEY,
        username TEXT,
        full_name TEXT,
        email TEXT,
        avatar_url TEXT,
        total_score INTEGER DEFAULT 0,
        total_questions INTEGER DEFAULT 0,
        best_percentage INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log("✅ Fallback tables initialized successfully")
    return true
  } catch (error) {
    console.error("❌ Error initializing fallback tables:", error)
    return false
  }
}

// Save quiz result to fallback database
export async function saveQuizResultToFallback(
  userId: string,
  score: number,
  totalQuestions: number,
  percentage: number,
  category: string,
  difficulty: string,
  timeLeft: number,
  answers: any,
  challengeId: string | null,
) {
  console.log("💾 Saving quiz result to fallback database...")

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected in saveQuizResultToFallback, skipping")
    return null
  }

  try {
    // Check if we have a database URL
    const dbUrl = process.env.iqra_DATABASE_URL || process.env.DATABASE_URL
    if (!dbUrl) {
      console.error("❌ No database URL found for fallback")
      return null
    }

    const sql = neon(dbUrl)

    // Insert quiz result
    const result = await sql`
      INSERT INTO quiz_results (
        user_id, score, total_questions, percentage, category, difficulty, time_left, challenge_id
      ) VALUES (
        ${userId}, ${score}, ${totalQuestions}, ${percentage}, ${category}, ${difficulty}, ${timeLeft}, ${challengeId}
      )
      RETURNING *
    `

    // Update user profile total score
    await updateUserTotalScoreInFallback(userId, score, totalQuestions, percentage)

    console.log("✅ Quiz result saved to fallback database:", result[0])
    return result[0]
  } catch (error) {
    console.error("❌ Error saving quiz result to fallback:", error)
    return null
  }
}

// Update user's total score in fallback database
export async function updateUserTotalScoreInFallback(
  userId: string,
  newScore: number,
  totalQuestions: number,
  percentage: number,
) {
  console.log(`🏆 Updating total score for user ${userId} in fallback: +${newScore} points`)

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected in updateUserTotalScoreInFallback, skipping")
    return false
  }

  try {
    // Check if we have a database URL
    const dbUrl = process.env.iqra_DATABASE_URL || process.env.DATABASE_URL
    if (!dbUrl) {
      console.error("❌ No database URL found for fallback")
      return false
    }

    const sql = neon(dbUrl)

    // First check if user exists
    const existingUser = await sql`
      SELECT total_score, total_questions, best_percentage
      FROM user_profiles
      WHERE id = ${userId}
    `

    if (existingUser.length === 0) {
      // Create new user profile
      await sql`
        INSERT INTO user_profiles (
          id, total_score, total_questions, best_percentage
        ) VALUES (
          ${userId}, ${newScore}, ${totalQuestions}, ${percentage}
        )
      `
      console.log(`✅ Created new user profile for ${userId} with initial score ${newScore}`)
    } else {
      // Update existing user profile
      const currentTotalScore = existingUser[0].total_score || 0
      const currentTotalQuestions = existingUser[0].total_questions || 0
      const currentBestPercentage = existingUser[0].best_percentage || 0

      const newTotalScore = currentTotalScore + newScore
      const newTotalQuestions = currentTotalQuestions + totalQuestions
      const newBestPercentage = Math.max(currentBestPercentage, percentage)

      await sql`
        UPDATE user_profiles
        SET 
          total_score = ${newTotalScore},
          total_questions = ${newTotalQuestions},
          best_percentage = ${newBestPercentage},
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${userId}
      `
      console.log(`✅ Updated user ${userId} total score: ${currentTotalScore} → ${newTotalScore}`)
    }

    return true
  } catch (error) {
    console.error("❌ Error updating user total score in fallback:", error)
    return false
  }
}

// Get top players from fallback database
export async function getTopPlayersFromFallback(limit = 10) {
  console.log(`🏆 Getting top ${limit} players from fallback database...`)

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected, returning empty players")
    return []
  }

  try {
    // Check if we have a database URL
    const dbUrl = process.env.iqra_DATABASE_URL || process.env.DATABASE_URL
    if (!dbUrl) {
      console.error("❌ No database URL found for fallback")
      return []
    }

    const sql = neon(dbUrl)

    // Get top players by total score
    const players = await sql`
      SELECT id, username, full_name, total_score, best_percentage
      FROM user_profiles
      ORDER BY total_score DESC
      LIMIT ${limit}
    `

    console.log(`✅ Retrieved ${players.length} top players from fallback`)
    return players
  } catch (error) {
    console.error("❌ Error getting top players from fallback:", error)
    return []
  }
}

// Get leaderboard from fallback database
export async function getLeaderboardFromFallback() {
  console.log("📊 Getting leaderboard from fallback database...")

  // IMPORTANT: Force runtime detection - don't rely on env-config
  const forcedBuildTimeCheck =
    process.env.NODE_ENV === "production" &&
    !process.env.VERCEL_ENV &&
    !process.env.VERCEL_URL &&
    typeof window === "undefined" &&
    !process.env.iqra_DATABASE_URL

  if (forcedBuildTimeCheck) {
    console.log("🏗️ Build time detected, returning empty leaderboard")
    return { data: [], source: "Build Time Mock" }
  }

  try {
    // Check if we have a database URL
    const dbUrl = process.env.iqra_DATABASE_URL || process.env.DATABASE_URL
    if (!dbUrl) {
      console.error("❌ No database URL found for fallback")
      return { data: [], source: "No Database URL" }
    }

    const sql = neon(dbUrl)

    // Get top quiz results
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
      FROM quiz_results qr
      LEFT JOIN user_profiles up ON qr.user_id = up.id
      ORDER BY qr.percentage DESC, qr.created_at DESC
      LIMIT 20
    `

    // Format results for leaderboard
    const leaderboard = results.map((result) => ({
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

    console.log(`✅ Retrieved ${leaderboard.length} leaderboard entries from fallback`)
    return { data: leaderboard, source: "Neon Database" }
  } catch (error) {
    console.error("❌ Error getting leaderboard from fallback:", error)
    return { data: [], source: "Error" }
  }
}

// Helper function to check if Neon is available
export function isNeonAvailable(): boolean {
  return !isBuildTime && !!process.env.iqra_DATABASE_URL
}
