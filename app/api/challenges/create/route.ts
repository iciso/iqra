import { type NextRequest, NextResponse } from "next/server"
import { insertChallenge, newChallengeSchema } from "@/lib/server/challenge-data"
import { errorMessage } from "@/lib/server/neon"

// Kept for callers that still POST here: components/challenge/category-first-challenge-sender.tsx
// (in-progress file, not imported anywhere), social-challenger-selector.tsx and vercel-challenge-button.tsx
// (not imported anywhere). The live challenge dialog uses createChallengeAction in app/actions/challenges.ts.
// Both paths share the same validation and insert in lib/server/challenge-data.ts.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = newChallengeSchema.safeParse({
      challengerName: body.challengerName || body.challenger_name,
      challengedName: body.challengedName || body.challenged_name,
      category: body.category,
      difficulty: body.difficulty,
      questionCount: body.question_count || body.questionCount,
      timeLimit: body.time_limit || body.timeLimit,
      sectionNumber: body.section_number ?? body.sectionNumber ?? null,
    })

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Missing required fields: challengerName, challengedName, category" },
        { status: 400 },
      )
    }

    const challenge = await insertChallenge(parsed.data)
    return NextResponse.json({ success: true, message: "Challenge created", challenge }, { status: 200 })
  } catch (error) {
    console.error("[challenges] create error:", error)
    const details = errorMessage(error)
    const noDb = details === "No database connection configured"
    return NextResponse.json(
      noDb ? { error: details } : { error: "Failed to create challenge", details },
      { status: 500 },
    )
  }
}
