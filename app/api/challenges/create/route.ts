```typescript
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL;
if (!connectionString) {
  console.error("❌ No Neon database connection string provided");
  return NextResponse.json({ error: "Database configuration error" }, { status: 500 });
}
const sql = neon(connectionString);

export async function POST(request: Request) {
  try {
    const supabase = createClient(cookies());
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      console.error("❌ No authenticated user");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { challengedId, category, difficulty, questionCount, timeLimit } = await request.json();
    if (!challengedId || !category || !difficulty || !questionCount || !timeLimit) {
      console.error("❌ Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await sql`
      INSERT INTO challenges (
        challenger_id,
        challenged_id,
        category,
        difficulty,
        question_count,
        time_limit,
        status,
        created_at,
        expires_at
      )
      VALUES (
        ${user.id},
        ${challengedId},
        ${category},
        ${difficulty},
        ${questionCount},
        ${timeLimit},
        'pending',
        ${new Date().toISOString()},
        ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()}
      )
      RETURNING *
    `;

    if (error) {
      console.error("❌ Challenge creation error:", error);
      throw error;
    }

    console.log("✅ Challenge created successfully:", data[0]);
    return NextResponse.json({ challenge: data[0] });
  } catch (error: any) {
    console.error("❌ Challenge creation failed:", error);
    return NextResponse.json({ error: error.message || "Failed to create challenge" }, { status: 500 });
  }
}
```
