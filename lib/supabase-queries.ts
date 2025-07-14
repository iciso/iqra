import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

// added on 14 July 25
export async function createChallenge(
  challengerId: string,
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount: number,
  timeLimit: number
) {
  console.log("🎯 CREATING CHALLENGE:", { challengerId, challengedId, category, difficulty, questionCount, timeLimit });
  try {
    const { data, error } = await supabase
      .from('challenges')
      .insert({
        id: crypto.randomUUID(),
        challenger_id: challengerId,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("❌ CREATE CHALLENGE: Error:", error);
      throw error;
    }

    console.log("✅ CREATE CHALLENGE: Inserted successfully:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ CREATE CHALLENGE: Error:", error);
    toast({
      title: "Error Creating Challenge",
      description: error.message || "Failed to create challenge.",
      variant: "destructive",
    });
    return { success: false, error };
  }
}

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

    // Insert quiz result into quiz_results table
    const { data, error } = await supabase
      .from('quiz_results')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      if (error.code === '42P01') {
        console.warn('Table not found, likely quiz_results table missing');
      }
      console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
      throw error;
    }

    console.log("✅ SUBMIT QUIZ RESULT: Inserted successfully:", data);

    // Optionally update challenge status if challengeId exists
    if (challengeId) {
      const { error: updateError } = await supabase
        .from('challenges')
        .update({ status: 'completed', updated_at: new Date().toISOString() })
        .eq('id', challengeId)
        .eq('challenger_id', user.data.user.id);

      if (updateError) {
        console.error("❌ SUBMIT QUIZ RESULT: Error updating challenge:", updateError);
        throw updateError;
      }
      console.log("✅ SUBMIT QUIZ RESULT: Challenge status updated to completed");
    }

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
  if (error) {
    console.error("❌ GET CHALLENGE: Error:", error);
    throw error;
  }
  return data;
}

// Example leaderboard query (optional, for reference)
export async function getLeaderboard() {
  console.log("🏆 Getting leaderboard data...");
  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .select(`
        user_id,
        score,
        total_questions,
        percentage,
        category,
        difficulty,
        profiles!inner(username)
      `)
      .order('percentage', { ascending: false })
      .limit(50);

    if (error) {
      console.error("❌ GET LEADERBOARD: Error:", error);
      throw error;
    }

    console.log("✅ GET LEADERBOARD: Retrieved:", data);
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ GET LEADERBOARD: Error:", error);
    return { success: false, error };
  }
}
