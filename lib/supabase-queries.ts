import { createServerClient } from '@/lib/supabase';
import { toast } from "@/hooks/use-toast";
import { neon } from "@neondatabase/serverless";

const supabase = createServerClient();
const sql = neon(process.env.iqra_DATABASE_URL || process.env.DATABASE_URL);

console.log('Supabase client initialized with URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase anon key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');
console.log('Neon DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Missing');
console.log('Neon iqra_DATABASE_URL:', process.env.iqra_DATABASE_URL ? 'Set' : 'Missing');

// Neon query helper
const queryNeon = async (query: string, params: any[] = []) => {
  try {
    await sql`SELECT 1`; // Wake Neon
    const result = await sql(query, params);
    console.log("✅ Neon query executed successfully");
    return { data: result, error: null };
  } catch (error: any) {
    console.error("❌ Neon query error:", error);
    return { data: [], error };
  }
};

// Utility function to validate UUID
function isValidUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

export async function createChallenge(
  challengerId: string,
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount: number,
  timeLimit: number,
  challengeQuestions: any[] = []
) {
  console.log("🎯 CREATING CHALLENGE:", { challengerId, challengedId, category, difficulty, questionCount, timeLimit, challengeQuestions });
  try {
    // Verify profiles exist
    const { data: profiles, error: profileError } = await queryNeon(
      `SELECT id, username FROM profiles WHERE id IN ($1, $2)`,
      [challengerId, challengedId]
    );

    if (profileError || !profiles || profiles.length !== 2) {
      throw new Error("Challenger or challenged profile not found");
    }

    const { data, error } = await queryNeon(
      `INSERT INTO challenges (
         id, challenger_id, challenged_id, category, difficulty, question_count, time_limit, status, created_at, updated_at, challenge_questions
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $8)
       RETURNING *`,
      [
        crypto.randomUUID(),
        challengerId,
        challengedId,
        category,
        difficulty,
        questionCount,
        timeLimit,
        JSON.stringify(challengeQuestions)
      ]
    );

    if (error) {
      console.error("❌ CREATE CHALLENGE: Error:", error);
      throw error;
    }

    console.log("✅ CREATE CHALLENGE: Inserted successfully:", data);
    return { success: true, data: data[0] };
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

    // Validate challengeId if provided
    if (challengeId && !isValidUUID(challengeId)) {
      console.warn("Invalid challengeId, setting to null:", challengeId);
      challengeId = null;
    }

    const percentage = Number(((score / totalQuestions) * 100).toFixed(2));
    const insertData = {
      id: crypto.randomUUID(),
      user_id: user.data.user.id,
      challenge_id: challengeId || null,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      percentage,
      time_taken: timeTaken || null,
      answers: answers ? JSON.stringify(answers) : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    console.log("📊 SUBMIT QUIZ RESULT: Insert data:", insertData);

    const { data, error } = await queryNeon(
      `INSERT INTO quiz_results (
         id, user_id, challenge_id, category, difficulty, score, total_questions, percentage, time_taken, answers, created_at, updated_at
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [
        insertData.id,
        insertData.user_id,
        insertData.challenge_id,
        insertData.category,
        insertData.difficulty,
        insertData.score,
        insertData.total_questions,
        insertData.percentage,
        insertData.time_taken,
        insertData.answers,
        insertData.created_at,
        insertData.updated_at
      ]
    );

    if (error) {
      console.error("❌ SUBMIT QUIZ RESULT: Error:", error);
      throw error;
    }

    console.log("✅ SUBMIT QUIZ RESULT: Inserted successfully:", data);

    // Update profiles
    const { error: profileError } = await queryNeon(
      `UPDATE profiles
       SET total_score = total_score + $1,
           total_questions = total_questions + $2,
           best_percentage = GREATEST(best_percentage, $3),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $4`,
      [score, totalQuestions, percentage, user.data.user.id]
    );

    if (profileError) {
      console.error("❌ SUBMIT QUIZ RESULT: Error updating profile:", profileError);
      throw profileError;
    }

    // Update challenge status and scores if applicable
    if (challengeId) {
      const { data: challenge, error: challengeError } = await queryNeon(
        `SELECT challenger_id, challenged_id, challenger_score, challenged_score
         FROM challenges
         WHERE id = $1`,
        [challengeId]
      );

      if (challengeError || !challenge[0]) throw challengeError || new Error("Challenge not found");

      const isChallenger = challenge[0].challenger_id === user.data.user.id;
      const updateData: any = {
        status: challenge[0].challenger_score !== null && challenge[0].challenged_score !== null ? "completed" : "pending",
        updated_at: new Date().toISOString(),
      };

      if (isChallenger) {
        updateData.challenger_score = score;
        updateData.challenger_completed_at = new Date().toISOString();
      } else {
        updateData.challenged_score = score;
        updateData.challenged_completed_at = new Date().toISOString();
      }

      const { error: updateError } = await queryNeon(
        `UPDATE challenges
         SET status = $1, updated_at = $2, challenger_score = $3, challenged_score = $4, 
             challenger_completed_at = $5, challenged_completed_at = $6
         WHERE id = $7`,
        [
          updateData.status,
          updateData.updated_at,
          isChallenger ? score : challenge[0].challenger_score,
          isChallenger ? challenge[0].challenged_score : score,
          isChallenger ? updateData.challenger_completed_at : challenge[0].challenger_completed_at,
          isChallenger ? challenge[0].challenged_completed_at : updateData.challenged_completed_at,
          challengeId
        ]
      );

      if (updateError) {
        console.error("❌ SUBMIT QUIZ RESULT: Error updating challenge:", updateError);
        throw updateError;
      }
      console.log("✅ SUBMIT QUIZ RESULT: Challenge updated successfully");
    }

    return { success: true, data: data[0] };
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

export async function getQuizResultByChallenge(challengeId: string, userId: string) {
  console.log("🔍 GET QUIZ RESULT BY CHALLENGE:", { challengeId, userId });
  try {
    const { data, error } = await queryNeon(
      `SELECT * FROM quiz_results WHERE challenge_id = $1 AND user_id = $2`,
      [challengeId, userId]
    );

    if (error) {
      console.error("❌ GET QUIZ RESULT BY CHALLENGE: Error:", error);
      throw error;
    }
    return { data: data || [], error: null };
  } catch (error: any) {
    console.error("❌ GET QUIZ RESULT BY CHALLENGE: Error:", error);
    return { data: [], error };
  }
}

export async function getChallenge(challengeId: string) {
  console.log("🔍 GETTING CHALLENGE:", challengeId);
  try {
    const { data, error } = await queryNeon(
      `SELECT c.*, p1.username AS challenger_username, p2.username AS challenged_username
       FROM challenges c
       LEFT JOIN profiles p1 ON c.challenger_id = p1.id
       LEFT JOIN profiles p2 ON c.challenged_id = p2.id
       WHERE c.id = $1`,
      [challengeId]
    );

    if (error || !data[0]) {
      console.error("❌ GET CHALLENGE: Error:", error || "Challenge not found");
      throw error || new Error("Challenge not found");
    }
    console.log("✅ GET CHALLENGE: Retrieved:", data[0]);
    return { data: data[0], error: null };
  } catch (error: any) {
    console.error("❌ GET CHALLENGE: Error:", error);
    return { data: null, error };
  }
}

export async function getLeaderboard() {
  console.log("🏆 GETTING LEADERBOARD DATA...");
  try {
    const { data, error } = await queryNeon(
      `SELECT q.user_id, q.score, q.total_questions, q.percentage, q.category, q.difficulty, p.username
       FROM quiz_results q
       INNER JOIN profiles p ON q.user_id = p.id
       ORDER BY q.percentage DESC
       LIMIT 50`
    );

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
