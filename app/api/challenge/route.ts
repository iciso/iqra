import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json()
    const { challengedId, category, difficulty, questionCount = 10, timeLimit = 300 } = body

    console.log("Challenge API called with:", { challengedId, category, difficulty, questionCount, timeLimit })

    // Create Supabase client with cookies for server-side auth
    const supabase = createRouteHandlerClient({ cookies })

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("Auth error:", authError)
      return NextResponse.json({ error: "Unauthorized - Please sign in again" }, { status: 401 })
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
