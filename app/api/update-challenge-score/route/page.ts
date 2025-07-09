import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const { challengeId, challengerId, challengerScore, challengedId, challengedScore } = await request.json();

  try {
    // Update challenger score
    const { error: challengerError } = await supabase
      .from("user_profiles")
      .upsert(
        {
          id: challengerId,
          total_score: challengerScore, // Adjust based on your scoring logic
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );
    if (challengerError) throw challengerError;

    // Update challenged score
    const { error: challengedError } = await supabase
      .from("user_profiles")
      .upsert(
        {
          id: challengedId,
          total_score: challengedScore, // Adjust based on your scoring logic
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );
    if (challengedError) throw challengedError;

    return NextResponse.json({ message: "Scores updated" });
  } catch (error: any) {
    console.error("Error updating scores:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
