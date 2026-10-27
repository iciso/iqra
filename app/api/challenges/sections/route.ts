export const dynamic = "force-dynamic"

import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const SECTION_SIZE = 10

// `key` is what challenges store and show; `dataLevel` is what the data manager understands.
const LEVELS = [
  { key: "easy", dataLevel: "easy" },
  { key: "intermediate", dataLevel: "medium" },
  { key: "advanced", dataLevel: "hard" },
] as const

type LevelKey = (typeof LEVELS)[number]["key"]
type SectionInfo = { number: number; size: number }

const getDatabaseUrl = () =>
  process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL

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

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const category = params.get("category") || ""
  const challenger = params.get("challenger")
  const challenged = params.get("challenged")

  if (!/^[a-z0-9-]+$/i.test(category)) {
    return NextResponse.json({ success: false, error: "Invalid category" }, { status: 400 })
  }

  // 1. How many questions each level has, and the resulting sections.
  const levels: Record<LevelKey, { count: number; sections: SectionInfo[] }> = {
    easy: { count: 0, sections: [] },
    intermediate: { count: 0, sections: [] },
    advanced: { count: 0, sections: [] },
  }

  try {
    const mod: any = await import("@/data/quiz-data-manager")
    for (const { key, dataLevel } of LEVELS) {
      const list = mod.getQuizQuestions(category, dataLevel)
      const count = Array.isArray(list) ? list.length : 0
      levels[key] = { count, sections: buildSections(count) }
    }
  } catch (error) {
    console.error("[challenges/sections] could not read question data:", error)
    return NextResponse.json({ success: false, error: "Could not load questions" }, { status: 500 })
  }

  // 2. Sections these two players have already used in this category.
  //    Declined challenges still count: the challenger has already seen those questions.
  const played: Record<LevelKey, number[]> = { easy: [], intermediate: [], advanced: [] }
  const databaseUrl = getDatabaseUrl()

  if (databaseUrl && challenger && challenged) {
    try {
      const pool = new Pool({ connectionString: databaseUrl })
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

  return NextResponse.json({ success: true, sectionSize: SECTION_SIZE, levels, played })
}
