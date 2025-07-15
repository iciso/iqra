```typescript
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL;
if (!connectionString) {
  console.error("❌ No Neon database connection string provided");
  return NextResponse.json({ error: "Database configuration error" }, { status: 500 });
}
const sql = neon(connectionString);

export async function POST(request: Request) {
  try {
    const { challengeId, challengerId, challengerScore, challengedId, challengedScore } = await request.json();
    if (!challengeId || !challengerId || !challengedId) {
      console.error("❌ Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await sql`
      UPDATE challenges
      SET
        challenger_score = ${challengerScore},
        challenged_score = ${challengedScore},
        status = 'completed',
        updated_at = ${new Date().toISOString()},
        challenger_completed_at = ${challengerScore != null ? new Date().toISOString() : null},
        challenged_completed_at = ${challengedScore != null ? new Date().toISOString() : null}
      WHERE id = ${challengeId}
      RETURNING *
    `;

    if (error) {
      console.error("❌ Score update error:", error);
      throw error;
    }

    console.log("✅ Scores updated successfully:", data[0]);
    return NextResponse.json({ message: "Scores updated", challenge: data[0] });
  } catch (error: any) {
    console.error("❌ Score update failed:", error);
    return NextResponse.json({ error: error.message || "Failed to update scores" }, { status: 500 });
  }
}
```
