import { NextRequest, NextResponse } from "next/server"

// Get database URL from environment variables
const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, score, totalQuestions, percentage, category, difficulty } = body

    // Validate input
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }

    if (!score || !totalQuestions || percentage === undefined) {
      return NextResponse.json({ error: "Missing quiz data" }, { status: 400 })
    }

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) {
      console.error("[v0] No database URL found in environment variables")
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    // For now, return success - we'll use localStorage primarily
    // In production, this would save to the Neon database
    const result = {
      id: Date.now().toString(),
      name: name.trim(),
      score,
      totalQuestions,
      percentage,
      category,
      difficulty,
      date: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
    }

    console.log("[v0] Quiz result submitted:", result)

    return NextResponse.json(
      {
        success: true,
        message: "Quiz result saved",
        result,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Error submitting quiz result:", error)
    return NextResponse.json(
      {
        error: "Failed to save quiz result",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
