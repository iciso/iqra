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
    // Rest of the function remains unchanged...
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
