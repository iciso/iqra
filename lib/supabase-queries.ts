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
  .from('quiz_results')
  .select(`
    *,
    challenges!inner(id, challenger_id, challenged_id, status),
    profiles!inner(id, username)
  `)
  .eq('challenges.status', 'completed')
  .order('score', { ascending: false });

    if (error && error.code === '42P01') {
  console.warn('Challenges table not found, falling back to default leaderboard data');
  // Load leaderboard using only quiz_results or a fallback dataset
     throw error;
    }

    if (error) {
      console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
      throw error;
    }

    console.log("✅ SUBMIT QUIZ RESULT: Inserting:", data);
    return { success: true, data };
    console.log("✅ SUBMISSION OF QUIZ RESULT: SUCCESS:", data);
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

useEffect(() => {
  if (hasUser && hasProfile && hasScore && hasTotalQuestions && !submitted) {
    console.log('🚀 RESULTS AUTO-SAVE: Starting auto-save...');
    submitQuizResult({ score, totalQuestions, category, difficulty, timeTaken, challengeId });
  }
}, [hasUser, hasProfile, hasScore, hasTotalQuestions, submitted, challengeId]);

const submitQuizResult = async (result) => {
  const { data, error } = await supabase.from('quiz_results').insert(result);
  if (!error) {
    setSubmitted(true);
    console.log('✅ RESULTS AUTO-SAVE: Quiz result saved successfully!', { success: true, data });
  }
};

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
