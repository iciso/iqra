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

    const percentage = (score / totalQuestions) * 100;
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

    // Update user score
    console.log(`🏆 Updating total score for user ${user.data.user.id}: +${score} points`);
    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("total_score, total_questions, best_percentage")
      .eq("id", user.data.user.id)
      .single();

    if (profileError) throw profileError;

    const newTotalScore = (profile.total_score || 0) + score;
    const newTotalQuestions = (profile.total_questions || 0) + totalQuestions;
    const newBestPercentage = Math.max(profile.best_percentage || 0, percentage);

    console.log(`🏆 User stats: Current=${profile.total_score}/${profile.total_questions} (${profile.best_percentage}%) → New=${newTotalScore}/${newTotalQuestions} (Best: ${newBestPercentage}%)`);

    const { error: updateError } = await supabase
      .from("user_profiles")
      .update({
        total_score: newTotalScore,
        total_questions: newTotalQuestions,
        best_percentage: newBestPercentage,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.data.user.id);

    if (updateError) throw updateError;

    console.log(`✅ Successfully updated total score for user ${user.data.user.id}`);

    // Update challenge status
    if (challengeId) {
      console.log("🏆 SUBMIT QUIZ RESULT: Processing challenge completion");
      const { data: challenge, error: challengeError } = await supabase
        .from("user_challenges")
        .select("challenger_id, challenged_id, challenger_score, challenged_score")
        .eq("id", challengeId)
        .single();

      if (challengeError) throw challengeError;

      console.log("📋 SUBMIT QUIZ RESULT: Fresh challenge data:", challenge);

      const updateData = {
        [user.data.user.id === challenge.challenger_id ? "challenger_score" : "challenged_score"]: score,
        status: challenge.challenger_score !== null && challenge.challenged_score !== null ? "completed" : "accepted",
      };

      console.log("📝 SUBMIT QUIZ RESULT: Update data:", updateData);

      const { data: updatedChallenge, error: updateChallengeError } = await supabase
        .from("user_challenges")
        .update(updateData)
        .eq("id", challengeId)
        .select()
        .single();

      if (updateChallengeError) throw updateChallengeError;

      console.log("✅ SUBMIT QUIZ RESULT: Challenge updated successfully:", updatedChallenge);
    }

    console.log("✅ SUBMIT QUIZ RESULT: Submission completed successfully");
    return { success: true, data };
  } catch (error: any) {
    console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
    toast({
      title: "Error Saving Quiz Result",
      description: error.message || "Failed to save quiz result. Your score has been recorded locally.",
      variant: "destructive",
    });
    return { success: false, error };
  }
}
