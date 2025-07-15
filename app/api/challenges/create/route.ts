import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { neon } from "@neondatabase/serverless";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!);
const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL || '');

export async function POST(request: NextRequest) {
  try {
    const { challengedId, category, difficulty, questionCount, timeLimit, challengeQuestions = [] } = await request.json();
    console.log("🎯 Creating challenge:", { challengedId, category, difficulty, questionCount, timeLimit });

    // Get the current user from the session
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      console.error("❌ No authorization header");
      return NextResponse.json({ error: "No authorization header" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      console.error("❌ Unauthorized:", authError?.message || "No user");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify profiles exist
    const { data: profiles, error: profileError } = await sql`
      SELECT id, username FROM profiles WHERE id IN (${user.id}, ${challengedId})
    `;
    if (profileError || !profiles || profiles.length !== 2) {
      const errorMsg = profileError ? profileError.message : "Challenger or challenged profile not found";
      console.error("❌ Profile check failed:", errorMsg);
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    // Create challenge
    const challengeId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    const { data, error } = await sql`
      INSERT INTO challenges (
        id, challenger_id, challenged_id, category, difficulty, question_count, time_limit, status, challenge_questions, expires_at, created_at, updated_at
      ) VALUES (
        ${challengeId},
        ${user.id},
        ${challengedId},
        ${category},
        ${difficulty},
        ${questionCount},
        ${timeLimit},
        'pending',
        ${JSON.stringify(challengeQuestions)},
        ${expiresAt.toISOString()},
        ${new Date().toISOString()},
        ${new Date().toISOString()}
      )
      RETURNING *
    `;

    if (error) {
      console.error("❌ Database error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Challenge created successfully:", data[0]);
    return NextResponse.json({ challenge: data[0] });
  } catch (error: any) {
    console.error("❌ API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
