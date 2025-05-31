import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.NEON_DATABASE_URL!)

export async function initializeFallbackTables() {
  try {
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

    // Insert initial data
    await sql`
      INSERT INTO user_profiles_fallback (id, username, full_name, total_score, best_percentage, quiz_count) 
      VALUES 
        ('ddd8b850-1b56-4781-bd03-1be615f9e3ec', 'drmurtazaa50', 'Dr. Muhammad Murtaza Ikram', 200, 95, 5),
        ('fallback-1', 'emrafi', 'Emrafi', 150, 85, 3),
        ('fallback-2', 'aiesha', 'Aiesha', 120, 80, 2)
      ON CONFLICT (id) DO NOTHING
    `

    console.log("✅ Fallback tables initialized successfully")
  } catch (error) {
    console.error("❌ Error initializing fallback tables:", error)
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
  try {
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
  try {
    const results = await sql`
      SELECT 
        qr.*,
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
