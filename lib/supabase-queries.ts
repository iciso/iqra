import { supabase } from '@/lib/supabase-client';
import { saveQuizResultToFallback, initializeFallbackTables } from './neon-fallback';
import type { QuizQuestion, DifficultyLevel } from '@/types/quiz';

// Initialize fallback tables
let fallbackInitialized = false;
async function ensureFallbackInitialized() {
  if (!fallbackInitialized) {
    fallbackInitialized = await initializeFallbackTables();
  }
  return fallbackInitialized;
}

// Quiz questions function
export async function getQuizQuestions(category: string, difficulty: DifficultyLevel): Promise<QuizQuestion[]> {
  try {
    const { data, error } = await supabase
      .from("quiz_questions")
      .select("*")
      .eq("category_id", category)
      .eq("difficulty", difficulty)
      .limit(10);

    if (error) throw error;

    return data.map((item) => ({
      id: item.id,
      question: item.question,
      options: item.options,
      correct_answer: item.correct_answer,
      explanation: item.explanation,
      category_id: item.category_id,
      difficulty: item.difficulty,
      hasInfographic: item.has_infographic,
      infographicType: item.infographic_type,
      infographicData: item.infographic_data,
    }));
  } catch (err) {
    console.error("Error fetching quiz questions:", err);
    return [];
  }
}

// User profile functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase.from('user_profiles').select('*').eq('id', userId).single();

  if (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }

  return data;
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase.from('user_profiles').update(updates).eq('id', userId).select().single();

  if (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }

  return data;
}

// Update user's total score
export async function updateUserTotalScore(
  userId: string,
  newScore: number,
  totalQuestions: number,
  percentage: number,
): Promise<boolean> {
  console.log(`🏆 Updating total score for user ${userId}: +${newScore} points`);

  try {
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('total_score, total_questions, best_percentage')
      .eq('id', userId)
      .single();

    if (profileError) {
      console.error('❌ Error fetching user profile for score update:', profileError);
      return false;
    }

    const currentTotalScore = profile?.total_score || 0;
    const currentTotalQuestions = profile?.total_questions || 0;
    const currentBestPercentage = profile?.best_percentage || 0;

    const newTotalScore = currentTotalScore + newScore;
    const newTotalQuestions = currentTotalQuestions + totalQuestions;
    const newBestPercentage = Math.max(currentBestPercentage, percentage);

    console.log(
      `🏆 User stats: Current=${currentTotalScore}/${currentTotalQuestions} (${currentBestPercentage}%) → New=${newTotalScore}/${newTotalQuestions} (Best: ${newBestPercentage}%)`,
    );

    const { error: updateError } = await supabase
      .from('user_profiles')
      .update({
        total_score: newTotalScore,
        total_questions: newTotalQuestions,
        best_percentage: newBestPercentage,
      })
      .eq('id', userId);

    if (updateError) {
      console.error('❌ Error updating user total score:', updateError);
      return false;
    }

    console.log(`✅ Successfully updated total score for user ${userId}`);
    return true;
  } catch (error) {
    console.error('❌ Exception in updateUserTotalScore:', error);
    return false;
  }
}

export async function updateUserOnlineStatus(isOnline: boolean): Promise<boolean> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    console.error('❌ No user session found for updating online status');
    return false;
  }

  try {
    const { error } = await supabase
      .from('user_profiles')
      .update({ is_online: isOnline })
      .eq('id', session.user.id);

    if (error) {
      console.error('❌ Error updating user online status:', error);
      return false;
    }

    console.log(`✅ Successfully updated online status for user ${session.user.id} to ${isOnline}`);
    return true;
  } catch (error) {
    console.error('❌ Exception in updateUserOnlineStatus:', error);
    return false;
  }
}

export async function submitQuizResult(
  userId: string,
  score: number,
  totalQuestions: number,
  categoryId: string,
  difficulty: DifficultyLevel,
  challengeId?: string,
) {
  try {
    console.log('📋 SUBMIT QUIZ RESULT: Starting submission for user:', userId);
    console.log('📋 SUBMIT QUIZ RESULT: Input data:', { score, totalQuestions, categoryId, difficulty, challengeId });

    const percentage = Math.round((score / totalQuestions) * 100);
    let quizResultSaved = false;

    await ensureFallbackInitialized();

    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError || !user.user) {
      console.error('❌ SUBMIT QUIZ RESULT: Error fetching user:', userError);
      throw userError;
    }

    console.log('👤 SUBMIT QUIZ RESULT: User data retrieved:', user.user.id);

    const { error: resultError } = await supabase.from('quiz_results').insert({
      user_id: userId,
      score,
      total_questions: totalQuestions,
      percentage,
      category_id: categoryId,
      difficulty,
      challenge_id: challengeId,
      created_at: new Date().toISOString(),
    });

    if (resultError) {
      console.error('❌ SUBMIT QUIZ RESULT: Error saving to Supabase:', resultError);
      console.log('📋 SUBMIT QUIZ RESULT: Falling back to Neon');
      await saveQuizResultToFallback(userId, score, totalQuestions, percentage, categoryId, difficulty, challengeId);
    } else {
      quizResultSaved = true;
      console.log('✅ SUBMIT QUIZ RESULT: Successfully saved to Supabase');
    }

    const updated = await updateUserTotalScore(userId, score, totalQuestions, percentage);
    if (!updated) {
      console.error('❌ SUBMIT QUIZ RESULT: Failed to update user total score');
    } else {
      console.log('✅ SUBMIT QUIZ RESULT: User total score updated');
    }

    if (challengeId) {
      const { data: challenge, error: fetchError } = await supabase
        .from('user_challenges')
        .select('*')
        .eq('id', challengeId)
        .single();

      if (fetchError) {
        console.error('❌ SUBMIT QUIZ RESULT: Error fetching challenge:', fetchError);
        throw fetchError;
      }

      console.log('📋 SUBMIT QUIZ RESULT: Fresh challenge data:', challenge);

      if (challenge) {
        const isChallenger = challenge.challenger_id === user.user.id;
        const isChallenged = challenge.challenged_id === user.user.id;

        console.log('👤 SUBMIT QUIZ RESULT: User role analysis:', {
          isChallenger,
          isChallenged,
          challengerId: challenge.challenger_id,
          challengedId: challenge.challenged_id,
          currentUserId: user.user.id,
        });

        let updateData: any = {};
        let statusUpdate = challenge.status;

        if (isChallenger) {
          console.log('🎯 SUBMIT QUIZ RESULT: User is the challenger');
          updateData = {
            challenger_score: score,
            challenger_completed_at: new Date().toISOString(),
          };
        } else if (isChallenged) {
          console.log('🎯 SUBMIT QUIZ RESULT: User is the challenged');
          updateData = {
            challenged_score: score,
            challenged_completed_at: new Date().toISOString(),
          };
          if (challenge.challenger_completed_at) {
            statusUpdate = 'completed';
            updateData.status = 'completed';
          }
        }

        console.log('📝 SUBMIT QUIZ RESULT: Update data:', updateData);

        const { data: updatedChallenge, error: updateError } = await supabase
          .from('user_challenges')
          .update(updateData)
          .eq('id', challengeId)
          .select()
          .single();

        if (updateError) {
          console.error('❌ SUBMIT QUIZ RESULT: Error updating challenge:', updateError);
          throw updateError;
        }

        console.log('✅ SUBMIT QUIZ RESULT: Challenge updated successfully:', updatedChallenge);

        if (statusUpdate === 'completed' && !isChallenger) {
          const opponentId = challenge.challenger_id;
          const opponentScore = challenge.challenger_score;

          if (opponentScore !== null && opponentId) {
            console.log(
              `🏆 SUBMIT QUIZ RESULT: Updating challenger's total score: ${opponentId} +${opponentScore} points`,
            );
            await updateUserTotalScore(
              opponentId,
              opponentScore,
              totalQuestions,
              Math.round((opponentScore / totalQuestions) * 100),
            );
          }
        }
      }
    }

    console.log('✅ SUBMIT QUIZ RESULT: Submission completed successfully');
    return {
      success: true,
      finalScore: score,
      bonusPoints: 0,
      originalScore: score,
      saved: quizResultSaved,
    };
  } catch (error) {
    console.error('❌ SUBMIT QUIZ RESULT: Error in submission:', error);
    throw error;
  }
}
