import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

async function ensureChallengesTable(pool: Pool) {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS challenges (
        id TEXT PRIMARY KEY,
        challenger_name VARCHAR(255) NOT NULL,
        challenged_name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        difficulty VARCHAR(50) NOT NULL DEFAULT 'mixed',
        question_count INTEGER NOT NULL DEFAULT 10,
        time_limit INTEGER NOT NULL DEFAULT 300,
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        challenger_score INTEGER,
        challenged_score INTEGER,
        section_number INTEGER,
        challenger_completed_at TIMESTAMP,
        challenged_completed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_challenges_challenged_name ON challenges(challenged_name);
      CREATE INDEX IF NOT EXISTS idx_challenges_status ON challenges(status);
    `)
  } finally {
    client.release()
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const challengerName = body.challengerName || body.challenger_name
    const challengedName = body.challengedName || body.challenged_name
    const category = body.category
    const difficulty = body.difficulty || "mixed"
    const questionCount = body.question_count || body.questionCount || 10
    const timeLimit = body.time_limit || body.timeLimit || 300

    if (!challengerName || !challengedName || !category) {
      return NextResponse.json(
        { error: "Missing required fields: challengerName, challengedName, category" },
        { status: 400 },
      )
    }

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) {
      return NextResponse.json({ error: "No database connection configured" }, { status: 500 })
    }

    const pool = new Pool({ connectionString: databaseUrl })
    try {
      await ensureChallengesTable(pool)

      const challengeId = crypto.randomUUID()
      const expiresAt = new Date("9990-12-31T23:59:59Z");
      
      const sectionRaw = body.section_number ?? body.sectionNumber ?? null
      const sectionNumber = Number.isInteger(Number(sectionRaw)) && Number(sectionRaw) > 0 ? Number(sectionRaw) : null
      
      const client = await pool.connect()
      try {
        const result = await client.query(
          `INSERT INTO challenges
            (id, challenger_name, challenged_name, category, difficulty, question_count, time_limit, status, expires_at, section_number)
           VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending', $8, $9)
           RETURNING *`,
          [
            challengeId,
            challengerName,
            challengedName,
            category,
            difficulty,
            questionCount,
            timeLimit,
            expiresAt.toISOString(),
            sectionNumber,
          ],
        )

        const challenge = result.rows[0]
        console.log("[challenges] Created:", challenge)

        return NextResponse.json({ success: true, message: "Challenge created", challenge }, { status: 200 })
      } finally {
        client.release()
      }
    } finally {
      await pool.end()
    }
  } catch (error) {
    console.error("[challenges] create error:", error)
    return NextResponse.json(
      { error: "Failed to create challenge", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
