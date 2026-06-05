import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { challengedId, category, difficulty, questionCount, timeLimit, challengerId } = await request.json()

    // Validate input
    if (!challengedId || !category || !challengerId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For now, we'll return a success response without storing in the database
    // This allows challenges to be created without auth while we work on the backend
    const challengeId = crypto.randomUUID()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

    const challenge = {
      id: challengeId,
      challenger_id: challengerId,
      challenged_id: challengedId,
      category,
      difficulty: difficulty || "mixed",
      question_count: questionCount || 10,
      time_limit: timeLimit || 300,
      status: "pending",
      expires_at: expiresAt.toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    console.log("[v0] Challenge created successfully:", challenge)

    return NextResponse.json({ 
      success: true,
      message: "Challenge created successfully",
      challenge 
    })
  } catch (error: any) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
