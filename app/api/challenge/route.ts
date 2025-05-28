import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json()
    const { challengedId, category, difficulty, questionCount = 10, timeLimit = 300 } = body

    console.log("Challenge API called with:", { challengedId, category, difficulty, questionCount, timeLimit })

    // Get the current user from the request headers
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return NextResponse.json({ error: "No authorization header" }, { status: 401 })
    }

    // Extract the token from the Bearer header
    const token = authHeader.replace("Bearer ", "")

    // Set the session for this request
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token)

    if (authError || !user) {
      console.error("Auth error:", authError)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("Authenticated user:", user.id)

    // Calculate expiry date (24 hours from now)
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24)

    // Create the challenge
    const { data, error } = await supabase
      .from("user_challenges")
      .insert({
        challenger_id: user.id,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: "pending",
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating challenge:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("Challenge created successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Error in challenge API:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
