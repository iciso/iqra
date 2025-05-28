import { supabase } from "./supabase"

// User profile functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    throw error
  }

  return data
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase.from("user_profiles").update(updates).eq("id", userId).select().single()

  if (error) {
    console.error("Error updating user profile:", error)
    throw error
  }

  return data
}

export async function updateUserOnlineStatus(isOnline: boolean) {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session?.user) {
    throw new Error("No authenticated user")
  }

  const { error } = await supabase.rpc("update_user_online_status", {
    user_id: session.user.id,
    is_online: isOnline,
  })

  if (error) {
    console.error("Error updating online status:", error)
    throw error
  }

  return true
}

// User search and discovery
export async function searchUsers(query: string, limit = 10) {
  console.log("🔍 SEARCH USERS FUNCTION: Called with query:", query)

  if (!query || query.length < 2) {
    console.log("🔍 SEARCH USERS FUNCTION: Query too short, returning empty array")
    return []
  }

  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("*")
      .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
      .limit(limit)

    if (error) {
      console.error("🔍 SEARCH USERS FUNCTION: Database error:", error)
      throw error
    }

    console.log("🔍 SEARCH USERS FUNCTION: Database returned:", data)
    return data || []
  } catch (error) {
    console.error("🔍 SEARCH USERS FUNCTION: Caught error:", error)
    throw error
  }
}

export async function getTopPlayers(limit = 10) {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .order("total_score", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching top players:", error)
    throw error
  }

  return data || []
}

// Friendship functions
export async function sendFriendRequest(addresseeId: string) {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session?.user) {
    throw new Error("No authenticated user")
  }

  const { data, error } = await supabase
    .from("friendships")
    .insert({
      requester_id: session.user.id,
      addressee_id: addresseeId,
      status: "pending",
    })
    .select()
    .single()

  if (error) {
    console.error("Error sending friend request:", error)
    throw error
  }

  return data
}

export async function acceptFriendRequest(requestId: string) {
  const { data, error } = await supabase.rpc("accept_friend_request", {
    request_id: requestId,
  })

  if (error) {
    console.error("Error accepting friend request:", error)
    throw error
  }

  return data
}

export async function declineFriendRequest(requestId: string) {
  const { data, error } = await supabase
    .from("friendships")
    .update({ status: "declined" })
    .eq("id", requestId)
    .select()
    .single()

  if (error) {
    console.error("Error declining friend request:", error)
    throw error
  }

  return data
}

export async function getFriends(userId: string) {
  const { data, error } = await supabase
    .from("user_friends")
    .select("*")
    .eq("requester_id", userId)
    .eq("status", "accepted")

  if (error) {
    console.error("Error fetching friends:", error)
    throw error
  }

  return data || []
}

export async function getPendingFriendRequests(userId: string) {
  const { data, error } = await supabase
    .from("friendships")
    .select(`
      id,
      requester_id,
      addressee_id,
      status,
      created_at,
      user_profiles!friendships_requester_id_fkey (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("addressee_id", userId)
    .eq("status", "pending")

  if (error) {
    console.error("Error fetching pending friend requests:", error)
    throw error
  }

  return data || []
}

// Challenge functions
export async function createChallenge(
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount = 10,
  timeLimit = 300,
) {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.user) {
      throw new Error("No authenticated user")
    }

    console.log("Creating challenge with params:", {
      challenger_id: session.user.id,
      challenged_id: challengedId,
      category,
      difficulty,
      question_count: questionCount,
      time_limit: timeLimit,
    })

    // Calculate expiry date (24 hours from now)
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24)

    const { data, error } = await supabase
      .from("user_challenges")
      .insert({
        challenger_id: session.user.id,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: "pending",
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating challenge:", error)
      throw new Error(`Failed to create challenge: ${error.message}`)
    }

    console.log("Challenge created successfully:", data)
    return data
  } catch (error) {
    console.error("Error in createChallenge:", error)
    throw error
  }
}

export async function acceptChallenge(challengeId: string) {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session?.user) {
    throw new Error("No authenticated user")
  }

  const { data, error } = await supabase.rpc("accept_challenge", {
    challenge_id: challengeId,
    user_id: session.user.id,
  })

  if (error) {
    console.error("Error accepting challenge:", error)
    throw error
  }

  return data
}

export async function declineChallenge(challengeId: string) {
  const { data, error } = await supabase
    .from("user_challenges")
    .update({ status: "declined" })
    .eq("id", challengeId)
    .select()
    .single()

  if (error) {
    console.error("Error declining challenge:", error)
    throw error
  }

  return data
}

export async function completeChallenge(challengeId: string, score: number) {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session?.user) {
    throw new Error("No authenticated user")
  }

  const { data, error } = await supabase.rpc("complete_challenge", {
    challenge_id: challengeId,
    user_id: session.user.id,
    score,
  })

  if (error) {
    console.error("Error completing challenge:", error)
    throw error
  }

  return data
}

export async function getPendingChallenges(userId: string) {
  const { data, error } = await supabase
    .from("user_challenges")
    .select(`
      id,
      challenger_id,
      challenged_id,
      category,
      difficulty,
      question_count,
      status,
      created_at,
      expires_at,
      challenger:user_profiles!user_challenges_challenger_id_fkey (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("challenged_id", userId)
    .eq("status", "pending")
    .gt("expires_at", new Date().toISOString())

  if (error) {
    console.error("Error fetching pending challenges:", error)
    throw error
  }

  return data || []
}

export async function getActiveChallenges(userId: string) {
  const { data, error } = await supabase
    .from("user_challenges")
    .select(`
      id,
      challenger_id,
      challenged_id,
      category,
      difficulty,
      question_count,
      status,
      challenger_score,
      challenged_score,
      challenger_completed_at,
      challenged_completed_at,
      created_at,
      challenger:user_profiles!user_challenges_challenger_id_fkey (
        username,
        full_name,
        avatar_url
      ),
      challenged:user_profiles!user_challenges_challenged_id_fkey (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("status", "accepted")
    .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)

  if (error) {
    console.error("Error fetching active challenges:", error)
    throw error
  }

  return data || []
}

export async function getChallengeHistory(userId: string, limit = 10) {
  const { data, error } = await supabase
    .from("user_challenges")
    .select(`
      id,
      challenger_id,
      challenged_id,
      category,
      difficulty,
      question_count,
      status,
      challenger_score,
      challenged_score,
      challenger_completed_at,
      challenged_completed_at,
      created_at,
      challenger:user_profiles!user_challenges_challenger_id_fkey (
        username,
        full_name,
        avatar_url
      ),
      challenged:user_profiles!user_challenges_challenged_id_fkey (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("status", "completed")
    .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
    .order("updated_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching challenge history:", error)
    throw error
  }

  return data || []
}

export async function getChallenge(challengeId: string) {
  const { data, error } = await supabase
    .from("user_challenges")
    .select(`
      id,
      challenger_id,
      challenged_id,
      category,
      difficulty,
      question_count,
      status,
      challenger_score,
      challenged_score,
      challenger_completed_at,
      challenged_completed_at,
      created_at,
      challenger:user_profiles!user_challenges_challenger_id_fkey (
        username,
        full_name,
        avatar_url
      ),
      challenged:user_profiles!user_challenges_challenged_id_fkey (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("id", challengeId)
    .single()

  if (error) {
    console.error("Error fetching challenge:", error)
    throw error
  }

  return data
}

// Missing exports - Quiz Results
export async function submitQuizResult(
  score: number,
  totalQuestions: number,
  category: string,
  difficulty: string,
  timeLeft?: number,
  answers?: any,
  challengeId?: string,
) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const percentage = Math.round((score / totalQuestions) * 100)

    // Insert quiz result
    const { error: resultError } = await supabase.from("quiz_results").insert({
      user_id: user.id,
      challenge_id: challengeId,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      percentage,
      time_taken: timeLeft ? 300 - timeLeft : null, // Convert time left to time taken
      answers,
    })

    if (resultError) {
      console.error("Error inserting quiz result:", resultError)
      throw resultError
    }

    // Update user profile stats
    const { error: updateError } = await supabase.rpc("update_user_stats", {
      user_id: user.id,
      new_score: score,
      new_total: totalQuestions,
      new_percentage: percentage,
    })

    if (updateError) {
      console.error("Error updating user stats:", updateError)
      // Don't throw here, as the quiz result was saved successfully
    }

    return { success: true }
  } catch (error) {
    console.error("Error in submitQuizResult:", error)
    throw error
  }
}

// Missing exports - User Challenges
export async function getUserChallenges(userId: string) {
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name)
      `)
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching user challenges:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getUserChallenges:", error)
    throw error
  }
}

// Additional missing exports that might be needed
export async function getLeaderboard(limit = 50) {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("username, full_name, total_score, total_questions, best_percentage, updated_at")
      .order("best_percentage", { ascending: false })
      .order("total_score", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching leaderboard:", error)
      throw error
    }

    return data
  } catch (error) {
    console.error("Error in getLeaderboard:", error)
    throw error
  }
}

export async function createFriendRequest(addresseeId: string) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { error } = await supabase.from("friendships").insert({
      requester_id: user.id,
      addressee_id: addresseeId,
      status: "pending",
    })

    if (error) {
      console.error("Error creating friend request:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in createFriendRequest:", error)
    throw error
  }
}
