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

    const { error: profileError } = await supabase.rpc("aggregate_user_score", {
      p_user_id: user.data.user.id,
      p_score: score,
      p_total_questions: totalQuestions,
    });
    if (profileError) {
      console.warn("Warning: Failed to aggregate score, using fallback update:", profileError);
      const { error: fallbackError } = await supabase
        .from("profiles")
        .update({
          total_score: (row: any) => (row.total_score || 0) + score,
          total_questions: (row: any) => (row.total_questions || 0) + totalQuestions,
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

export async function getTopPlayers(category: string) {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('user_id, profiles!inner(username), sum(score), sum(total_questions)')
    .eq('category', category)
    .groupBy('user_id, profiles.username')
    .order('sum', { ascending: false })
    .limit(10)
    .eq('created_at', new Date().toISOString()); // Force fresh data
  if (error) throw error;
  return data.map((row) => ({
    user_id: row.user_id,
    username: row.profiles.username,
    score: row.sum?.score || 0,
    total_questions: row.sum?.total_questions || 1,
  }));
}

export async function getChallenge(challengeId: string) {
  console.log("🔍 Getting challenge:", challengeId);
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select("id, challenger_id, challenged_id, status, challenger_score, challenged_score, challenge_questions, category, difficulty, question_count, time_limit")
      .eq("id", challengeId)
      .single();
    if (error) {
      console.error("❌ GET CHALLENGE: Error:", error);
      throw error;
    }
    console.log("✅ GET CHALLENGE: Retrieved:", data);
    return data;
  } catch (error: any) {
    console.error("❌ GET CHALLENGE: Error:", error);
    toast({
      title: "Error Fetching Challenge",
      description: error.message || "Failed to fetch challenge.",
      variant: "destructive",
    });
    return null;
  }
}

export async function updateChallenge(challengeId: string, updates: {
  challenger_score?: number;
  challenged_score?: number;
  status?: string;
  challenger_completed_at?: string;
  challenged_completed_at?: string;
  challenge_questions?: any;
  category?: string;
  difficulty?: string;
  question_count?: number;
  time_limit?: number;
}) {
  console.log("🎯 UPDATE CHALLENGE: Updating challenge:", challengeId, updates);
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .update(updates)
      .eq("id", challengeId)
      .select()
      .single();
    if (error) {
      console.error("❌ UPDATE CHALLENGE: Error:", error);
      throw error;
    }
    console.log("✅ UPDATE CHALLENGE: Updated:", data);
    return data;
  } catch (error: any) {
    console.error("❌ UPDATE CHALLENGE: Error:", error);
    toast({
      title: "Error Updating Challenge",
      description: error.message || "Failed to update challenge.",
      variant: "destructive",
    });
    return null;
  }
}

export async function getUserProfile(userId: string) {
  console.log("🔍 Getting user profile:", userId);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, username, email")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("❌ GET USER PROFILE: Error:", error);
      throw error;
    }

    console.log("✅ GET USER PROFILE: Retrieved:", data);
    return data;
  } catch (error: any) {
    console.error("❌ GET USER PROFILE: Error:", error);
    toast({
      title: "Error Fetching Profile",
      description: error.message || "Failed to fetch user profile.",
      variant: "destructive",
    });
    return null;
  }
}

export async function updateUserProfile(userId: string, updates: { username?: string; email?: string }) {
  console.log("✏️ Updating user profile:", userId, updates);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();

    if (error) {
      console.error("❌ UPDATE USER PROFILE: Error:", error);
      throw error;
    }

    console.log("✅ UPDATE USER PROFILE: Updated:", data);
    return data;
  } catch (error: any) {
    console.error("❌ UPDATE USER PROFILE: Error:", error);
    toast({
      title: "Error Updating Profile",
      description: error.message || "Failed to update user profile.",
      variant: "destructive",
    });
    return null;
  }
}

export async function getFriends(userId: string) {
  console.log("👥 Getting friends for user:", userId);
  try {
    const { data, error } = await supabase
      .from("friends")
      .select("friend_id, profiles(id, username, email)")
      .eq("user_id", userId);

    if (error) {
      console.error("❌ GET FRIENDS: Error:", error);
      throw error;
    }

    console.log("✅ GET FRIENDS: Retrieved:", data);
    return data.map((friend) => friend.profiles);
  } catch (error: any) {
    console.error("❌ GET FRIENDS: Error:", error);
    toast({
      title: "Error Fetching Friends",
      description: error.message || "Failed to fetch friends list.",
      variant: "destructive",
    });
    return [];
  }
}

export async function getUserChallenges(userId: string) {
  console.log("🏅 Getting challenges for user:", userId);
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select("id, challenger_id, challenged_id, status, challenger_score, challenged_score, challenge_questions, category, difficulty, question_count, time_limit")
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`);

    if (error) {
      console.error("❌ GET USER CHALLENGES: Error:", error);
      throw error;
    }

    console.log("✅ GET USER CHALLENGES: Retrieved:", data);
    return data;
  } catch (error: any) {
    console.error("❌ GET USER CHALLENGES: Error:", error);
    toast({
      title: "Error Fetching Challenges",
      description: error.message || "Failed to fetch user challenges.",
      variant: "destructive",
    });
    return [];
  }
}

export async function getPendingFriendRequests(userId: string) {
  console.log("📩 Getting pending friend requests for user:", userId);
  try {
    const { data, error } = await supabase
      .from("friend_requests")
      .select("from_id, profiles(id, username, email)")
      .eq("to_id", userId)
      .eq("status", "pending");

    if (error) {
      console.error("❌ GET PENDING FRIEND REQUESTS: Error:", error);
      throw error;
    }

    console.log("✅ GET PENDING FRIEND REQUESTS: Retrieved:", data);
    return data.map((request) => request.profiles);
  } catch (error: any) {
    console.error("❌ GET PENDING FRIEND REQUESTS: Error:", error);
    toast({
      title: "Error Fetching Friend Requests",
      description: error.message || "Failed to fetch pending friend requests.",
      variant: "destructive",
    });
    return [];
  }
}

export async function searchUsers(searchTerm: string) {
  console.log("🔍 Searching users:", searchTerm);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, username, email")
      .ilike("username", `%${searchTerm}%`)
      .limit(10);

    if (error) {
      console.error("❌ SEARCH USERS: Error:", error);
      throw error;
    }

    console.log("✅ SEARCH USERS: Retrieved:", data);
    return data;
  } catch (error: any) {
    console.error("❌ SEARCH USERS: Error:", error);
    toast({
      title: "Error Searching Users",
      description: error.message || "Failed to search users.",
      variant: "destructive",
    });
    return [];
  }
}

export async function createChallenge(
  challengerId: string,
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount: number,
  timeLimit: number
) {
  console.log("🎯 CREATE CHALLENGE: Creating challenge for:", { challengerId, challengedId, category, difficulty, questionCount, timeLimit });
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .insert({
        challenger_id: challengerId,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: "pending",
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("❌ CREATE CHALLENGE: Error:", error);
      throw error;
    }

    console.log("✅ CREATE CHALLENGE: Created:", data);
    return data;
  } catch (error: any) {
    console.error("❌ CREATE CHALLENGE: Error:", error);
    toast({
      title: "Error Creating Challenge",
      description: error.message || "Failed to create challenge.",
      variant: "destructive",
    });
    return null;
  }
}

export async function getPendingChallenges(userId: string) {
  console.log("🏅 Getting pending challenges for user:", userId);
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select("id, challenger_id, challenged_id, status, category, difficulty, question_count, time_limit")
      .eq("status", "pending")
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`);

    if (error) {
      console.error("❌ GET PENDING CHALLENGES: Error:", error);
      throw error;
    }

    console.log("✅ GET PENDING CHALLENGES: Retrieved:", data);
    return data;
  } catch (error: any) {
    console.error("❌ GET PENDING CHALLENGES: Error:", error);
    toast({
      title: "Error Fetching Pending Challenges",
      description: error.message || "Failed to fetch pending challenges.",
      variant: "destructive",
    });
    return [];
  }
}
