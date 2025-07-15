import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { challengedId, category, difficulty, questionCount, timeLimit } = await request.json()

    // Get the current user from the session
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return NextResponse.json({ error: "No authorization header" }, { status: 401 })
    }

    const token = authHeader.replace("Bearer ", "")
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token)

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Create challenge in user_challenges table
    const challengeId = crypto.randomUUID()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

    const { data, error } = await supabase
      .from("user_challenges")
      .insert({
        id: challengeId,
        challenger_id: user.id,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: "pending",
        expires_at: expiresAt.toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ challenge: data })
  } catch (error: any) {
    console.error("API error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
