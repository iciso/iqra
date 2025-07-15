import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL || '');

export async function POST(request: Request) {
  try {
    const { challengeId, challengerId, challengerScore, challengedId, challengedScore } = await request.json();
    console.log("📊 Updating challenge scores:", { challengeId, challengerId, challengerScore, challengedId, challengedScore });

    // Update challenger score
    const { error: challengerError } = await sql`
      UPDATE profiles
      SET total_score = total_score + ${challengerScore},
          total_questions = total_questions + 1,
          best_percentage = GREATEST(best_percentage, ${challengerScore * 100}),
          updated_at = ${new Date().toISOString()}
      WHERE id = ${challengerId}
    `;
    if (challengerError) {
      console.error("❌ Error updating challenger score:", challengerError);
      throw challengerError;
    }

    // Update challenged score
    const { error: challengedError } = await sql`
      UPDATE profiles
      SET total_score = total_score + ${challengedScore},
          total_questions = total_questions + 1,
          best_percentage = GREATEST(best_percentage, ${challengedScore * 100}),
          updated_at = ${new Date().toISOString()}
      WHERE id = ${challengedId}
    `;
    if (challengedError) {
      console.error("❌ Error updating challenged score:", challengedError);
      throw challengedError;
    }

    console.log("✅ Scores updated successfully");
    return NextResponse.json({ message: "Scores updated" });
  } catch (error: any) {
    console.error("❌ Error updating scores:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
