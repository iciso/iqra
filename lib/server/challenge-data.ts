import type { Pool } from "@neondatabase/serverless"
import { Pool as NeonPool } from "@neondatabase/serverless"
import { getDatabaseUrl, withClient, toPlain } from "./neon"
import type { ChallengeResult, ChallengeRow } from "./types"
import { z } from "zod"

// Challenge reads and writes that used to live in app/api/challenges/*.

const SECTION_SIZE = 10

// Level names are the ones the question data uses: easy / intermediate / advanced.
const LEVELS = ["easy", "intermediate", "advanced"] as const

type LevelKey = (typeof LEVELS)[number]
export type SectionInfo = { number: number; size: number }

export interface ChallengeSectionsResult {
  success: boolean
  error?: string
  sectionSize?: number
  levels?: Record<LevelKey, { count: number; sections: SectionInfo[] }>
  played?: Record<LevelKey, number[]>
}

function normalizeLevel(value: string | null | undefined): LevelKey | null {
  const v = (value || "").toLowerCase()
  if (v === "easy") return "easy"
  if (v === "intermediate" || v === "medium") return "intermediate"
  if (v === "advanced" || v === "hard") return "advanced"
  return null
}

// 34 questions -> sections of 10, 10, 10 and 4, in data-file order.
function buildSections(count: number): SectionInfo[] {
  const sections: SectionInfo[] = []
  for (let start = 0, n = 1; start < count; start += SECTION_SIZE, n++) {
    sections.push({ number: n, size: Math.min(SECTION_SIZE, count - start) })
  }
  return sections
}

export async function getChallengeSections(
  category: string,
  challenger?: string | null,
  challenged?: string | null,
): Promise<ChallengeSectionsResult> {
  if (!/^[a-z0-9-]+$/i.test(category)) {
    return { success: false, error: "Invalid category" }
  }

  // 1. How many questions each level has, and the resulting sections.
  const levels: Record<LevelKey, { count: number; sections: SectionInfo[] }> = {
    easy: { count: 0, sections: [] },
    intermediate: { count: 0, sections: [] },
    advanced: { count: 0, sections: [] },
  }

  try {
    const mod = await import("@/data/quiz-data-manager")
    // Read the category directly: getQuizQuestions would answer an empty intermediate level with easy questions.
    const levelData = mod.getCategory(category)?.levels as Partial<Record<LevelKey, unknown[]>> | undefined
    for (const key of LEVELS) {
      const list: unknown = levelData?.[key]
      const count = Array.isArray(list) ? list.length : 0
      levels[key] = { count, sections: buildSections(count) }
    }
  } catch (error) {
    console.error("[challenges/sections] could not read question data:", error)
    return { success: false, error: "Could not load questions" }
  }

  // 2. Sections these two players have already used in this category.
  //    Declined challenges still count: the challenger has already seen those questions.
  const played: Record<LevelKey, number[]> = { easy: [], intermediate: [], advanced: [] }
  const databaseUrl = getDatabaseUrl()

  if (databaseUrl && challenger && challenged) {
    try {
      const pool = new NeonPool({ connectionString: databaseUrl })
      try {
        const result = await pool.query(
          `SELECT difficulty, section_number
             FROM challenges
            WHERE category = $1
              AND section_number IS NOT NULL
              AND ((challenger_name = $2 AND challenged_name = $3)
                OR (challenger_name = $3 AND challenged_name = $2))`,
          [category, challenger, challenged],
        )
        for (const row of result.rows) {
          const level = normalizeLevel(row.difficulty)
          const n = Number(row.section_number)
          if (level && Number.isFinite(n) && !played[level].includes(n)) played[level].push(n)
        }
      } finally {
        await pool.end()
      }
    } catch (error) {
      // Most likely the section_number column has not been added yet.
      console.error("[challenges/sections] played-sections lookup failed:", error)
    }
  }

  return { success: true, sectionSize: SECTION_SIZE, levels, played }
}

/** Pending challenges sent TO this player. Returns [] on any failure (table may not exist yet). */
export async function getPendingChallenges(name: string): Promise<ChallengeRow[]> {
  const databaseUrl = getDatabaseUrl()
  if (!name || !databaseUrl) return []

  try {
    return await withClient(databaseUrl, async (client) => {
      const result = await client.query(
        `SELECT id, challenger_name, challenged_name, category, difficulty,
                question_count, section_number, status, created_at, expires_at
           FROM challenges
          WHERE challenged_name = $1
            AND status = 'pending'
          ORDER BY created_at DESC`,
        [name],
      )
      return toPlain(result.rows) as ChallengeRow[]
    })
  } catch (error) {
    console.error("[challenges] list error:", error)
    return []
  }
}

const CHALLENGE_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * One challenge plus each player's score. Returns null for a bad id, an unknown id,
 * or a database problem (logged), so the page can show "challenge not found".
 */
export async function getChallengeResult(id: string): Promise<ChallengeResult | null> {
  // Challenge ids are UUIDs (insertChallenge). Anything else cannot exist; skip the database.
  if (!CHALLENGE_ID.test(id)) return null
  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) return null

  try {
    return await withClient(databaseUrl, async (client) => {
      const result = await client.query(
        `SELECT
           c.id, c.challenger_name, c.challenged_name, c.category, c.difficulty,
           c.question_count, c.status,
           ch.score AS challenger_score, ch.total_questions AS challenger_total, ch.percentage AS challenger_percentage,
           cd.score AS challenged_score, cd.total_questions AS challenged_total, cd.percentage AS challenged_percentage
         FROM challenges c
         LEFT JOIN LATERAL (
           SELECT score, total_questions, percentage FROM leaderboard_entries
            WHERE challenge = c.id::text AND LOWER(name) = LOWER(c.challenger_name)
            ORDER BY submitted_at DESC LIMIT 1
         ) ch ON true
         LEFT JOIN LATERAL (
           SELECT score, total_questions, percentage FROM leaderboard_entries
            WHERE challenge = c.id::text AND LOWER(name) = LOWER(c.challenged_name)
            ORDER BY submitted_at DESC LIMIT 1
         ) cd ON true
         WHERE c.id = $1`,
        [id],
      )
      const row = result.rows[0]
      if (!row) return null
      const plain = toPlain(row) as Omit<ChallengeResult, "both_played">
      return { ...plain, both_played: plain.challenger_score !== null && plain.challenged_score !== null }
    })
  } catch (error) {
    console.error("[challenges] result lookup failed:", error)
    return null
  }
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

export interface NewChallenge {
  challengerName: string
  challengedName: string
  category: string
  difficulty: string
  questionCount: number
  timeLimit: number
  sectionNumber: number | null
}

/** Inserts a pending challenge. Throws when there is no database or the insert fails. */
export async function insertChallenge(input: NewChallenge): Promise<ChallengeRow> {
  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) throw new Error("No database connection configured")

  const pool = new NeonPool({ connectionString: databaseUrl })
  try {
    await ensureChallengesTable(pool)

    const challengeId = crypto.randomUUID()
    const expiresAt = new Date("9990-12-31T23:59:59Z")

    const client = await pool.connect()
    try {
      const result = await client.query(
        `INSERT INTO challenges
          (id, challenger_name, challenged_name, category, difficulty, question_count, time_limit, status, expires_at, section_number)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending', $8, $9)
         RETURNING *`,
        [
          challengeId,
          input.challengerName,
          input.challengedName,
          input.category,
          input.difficulty,
          input.questionCount,
          input.timeLimit,
          expiresAt.toISOString(),
          input.sectionNumber,
        ],
      )
      const challenge = toPlain(result.rows[0]) as ChallengeRow
      console.log("[challenges] Created:", challenge)
      return challenge
    } finally {
      client.release()
    }
  } finally {
    await pool.end()
  }
}

const optionalPositiveInt = (fallback: number, max: number) =>
  z.preprocess(
    (v) => (v === undefined || v === null || v === "" ? fallback : Number(v)),
    z.number().int().min(1).max(max),
  )

/** Validates a new challenge. Section numbers that are not positive integers become null, as before. */
export const newChallengeSchema = z.object({
  challengerName: z.string().trim().min(1).max(255),
  challengedName: z.string().trim().min(1).max(255),
  category: z.string().trim().min(1).max(255).regex(/^[a-z0-9-]+$/i),
  difficulty: z.preprocess((v) => (v ? v : "mixed"), z.string().trim().min(1).max(50)),
  questionCount: optionalPositiveInt(10, 500),
  timeLimit: optionalPositiveInt(300, 86400),
  sectionNumber: z.preprocess((v) => {
    const n = Number(v ?? NaN)
    return Number.isInteger(n) && n > 0 ? n : null
  }, z.number().int().positive().nullable()),
})
