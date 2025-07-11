import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export async function submitQuizResult(
  score: number,
  totalQuestions: number,
  category: string,
  difficulty: string,
  timeTaken?: number,
  answers?: any,
  challengeId?: string
) {
  console.log("💾 SUBMIT QUIZ RESULT: Starting submission", {
    score,
    totalQuestions,
    category,
    difficulty,
    timeTaken,
    answers,
    challengeId,
  });

  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) throw new Error("User not authenticated");

    const percentage = Number(((score / totalQuestions) * 100).toFixed(2));
    const insertData = {
      user_id: user.data.user.id,
      challenge_id: challengeId || null,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      percentage,
      created_at: new Date().toISOString(),
      answers: answers || null,
      time_taken: timeTaken || null,
    };
    console.log("📊 SUBMIT QUIZ RESULT: Insert data:", insertData);

    const { data, error } = await supabase
      .from("quiz_results")
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
      throw error;
    }

    // Aggregate score into user_profiles with fallback
    const { error: profileError } = await supabase.rpc("aggregate_user_score", {
      p_user_id: user.data.user.id,
      p_score: score,
      p_total_questions: totalQuestions,
    });
    if (profileError) {
      console.warn("Warning: Failed to aggregate score, using fallback update:", profileError);
      const { error: fallbackError } = await supabase
        .from("user_profiles")
        .update({
          total_score: (row: any) => row.total_score + score,
          total_questions: (row: any) => row.total_questions + totalQuestions,
        })
        .eq("id", user.data.user.id);
      if (fallbackError) console.error("❌ Fallback aggregation failed:", fallbackError);
    }

    console.log("✅ SUBMIT QUIZ RESULT: Inserted:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
    toast({
      title: "Error Saving Quiz Result",
      description: error.message || "Failed to save quiz result.",
      variant: "destructive",
    });
    return { success: false, error };
  }
}

export async function getChallenge(challengeId: string) {
  console.log("🔍 Getting challenge:", challengeId);
  const { data, error } = await supabase
    .from("challenges")
    .select("*")
    .eq("id", challengeId)
    .single();
  if (error) throw error;
  return data;
}

export async function getTopPlayers(limit = 10) {
  console.log("🏆 Getting top players...");
  const { data, error } = await supabase
    .from("user_profiles")
    .select("id, username, full_name, total_score, total_questions")
    .order("total_score", { ascending: false })
    .limit(limit);
  if (error) throw error;

  return data.map((player) => ({
    id: player.id,
    username: player.username,
    full_name: player.full_name,
    total_score: player.total_score || 0,
    total_questions: player.total_questions || 1, // Avoid division by zero
  }));
}
