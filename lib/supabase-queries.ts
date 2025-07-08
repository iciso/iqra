import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

// Added for search o 08 07 25

export async function getTopPlayers(limit = 10) {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("id, username, full_name, total_score, best_percentage")
    .order("total_score", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data || [];
}

export async function searchUsers(searchTerm: string, limit = 30) {
  if (!searchTerm) return getTopPlayers(limit); // Fallback to top players if no search term
  const { data, error } = await supabase
    .from("user_profiles")
    .select("id, username, full_name, total_score, best_percentage")
    .ilike("username", `%${searchTerm.toLowerCase()}%`)
    .or(`full_name.ilike.%${searchTerm.toLowerCase()}%`)
    .order("total_score", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data || [];
}

// End of Added search on 08 07 25 If required add other missing exports if needed (e.g., for profile page)

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

    const percentage = Number(((score / totalQuestions) * 100).toFixed(2)); // Ensure 2 decimal places
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
