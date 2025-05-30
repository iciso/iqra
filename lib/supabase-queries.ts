import { supabase } from "./supabase"

// User profile functions (these are in Supabase)
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

// User search and discovery (these are in Supabase)
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

// Friendship functions (these would be in Supabase)
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

export async function getFriends(userId: string) {
  const { data, error } = await supabase
    .from("friendships")
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

// Challenge functions (these are in Supabase user_challenges table)
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

export async function acceptChallenge(challengeId: string) {
  console.log(`🏆 Accepting challenge: ${challengeId}`)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session?.user) {
    console.error("❌ No authenticated user found")
    throw new Error("No authenticated user")
  }

  console.log(`👤 User ID: ${session.user.id}`)

  try {
    // First get the full challenge details including challenger information
    const { data: challenge, error: fetchError } = await supabase
      .from("user_challenges")
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey (
          id,
          username,
          full_name,
          avatar_url
        )
      `)
      .eq("id", challengeId)
      .single()

    if (fetchError) {
      console.error("❌ Error fetching challenge:", fetchError)
      throw fetchError
    }

    console.log(`📋 Full challenge details:`, challenge)

    // Update challenge status to accepted
    const { data, error } = await supabase
      .from("user_challenges")
      .update({ status: "accepted" })
      .eq("id", challengeId)
      .select()
      .single()

    if (error) {
      console.error("❌ Error accepting challenge:", error)
      throw error
    }

    console.log(`✅ Challenge accepted successfully`)

    // Get challenger information
    const challenger = challenge.challenger
    const challengerName = challenger?.full_name || challenger?.username || "Challenger"

    console.log(`👤 Challenger info:`, {
      id: challenger?.id,
      name: challengerName,
    })

    // Redirect to quiz with proper challenger information
    const challengeUrl = `/quiz?category=${challenge.category}&difficulty=${challenge.difficulty}&challenge=${challengeId}&questions=${challenge.question_count}&opponent=${challenger?.id}&opponentName=${encodeURIComponent(challengerName)}&challengerTurn=false`

    console.log(`🔗 Full challenge URL:`, challengeUrl)
    console.log(`🔗 Challenger ID being passed:`, challenger?.id)
    console.log(`🔗 Challenger name being passed:`, challengerName)
    window.location.href = challengeUrl

    return {
      ...data,
      challenger: challenger,
    }
  } catch (error) {
    console.error("❌ General error in acceptChallenge:", error)
    throw error
  }
}

// Additional challenge functions
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

// Note: Quiz results will still be stored in Vercel PostgreSQL
// This function would need to be updated to work with Vercel's database
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

    // If this is a challenge, update the challenge completion status in Supabase
    if (challengeId) {
      const challenge = await getChallenge(challengeId)

      if (challenge) {
        const isChallenger = challenge.challenger_id === user.id
        const updateField = isChallenger ? "challenger_completed_at" : "challenged_completed_at"
        const scoreField = isChallenger ? "challenger_score" : "challenged_score"

        await supabase
          .from("user_challenges")
          .update({
            [updateField]: new Date().toISOString(),
            [scoreField]: score,
          })
          .eq("id", challengeId)
      }
    }

    // Note: Quiz results storage would need to be implemented for Vercel PostgreSQL
    // For now, we'll just handle the challenge completion

    return {
      success: true,
      finalScore: score,
      bonusPoints: 0,
      originalScore: score,
    }
  } catch (error) {
    console.error("Error in submitQuizResult:", error)
    throw error
  }
}
