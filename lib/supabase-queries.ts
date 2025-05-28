import { supabase } from "./supabase"

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

export async function getUserProfile(userId: string) {
  try {
    const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId).single()

    if (error) {
      console.error("Error fetching user profile:", error)
      throw error
    }

    return data
  } catch (error) {
    console.error("Error in getUserProfile:", error)
    throw error
  }
}

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

export async function createChallenge(challengedId: string, category: string, difficulty: string, questionCount = 10) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { error } = await supabase.from("user_challenges").insert({
      challenger_id: user.id,
      challenged_id: challengedId,
      category,
      difficulty,
      question_count: questionCount,
      status: "pending",
    })

    if (error) {
      console.error("Error creating challenge:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in createChallenge:", error)
    throw error
  }
}

export async function updateUserProfile(userId: string, updates: any) {
  try {
    const { error } = await supabase.from("user_profiles").update(updates).eq("id", userId)

    if (error) {
      console.error("Error updating user profile:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in updateUserProfile:", error)
    throw error
  }
}

export async function getFriends(userId: string) {
  try {
    const { data, error } = await supabase
      .from("friendships")
      .select(`
        *,
        requester:user_profiles!friendships_requester_id_fkey(id, username, full_name),
        addressee:user_profiles!friendships_addressee_id_fkey(id, username, full_name)
      `)
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`)
      .eq("status", "accepted")

    if (error) {
      console.error("Error fetching friends:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getFriends:", error)
    throw error
  }
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

export async function getPendingFriendRequests(userId: string) {
  try {
    const { data, error } = await supabase
      .from("friendships")
      .select(`
        *,
        requester:user_profiles!friendships_requester_id_fkey(id, username, full_name)
      `)
      .eq("addressee_id", userId)
      .eq("status", "pending")

    if (error) {
      console.error("Error fetching pending friend requests:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getPendingFriendRequests:", error)
    throw error
  }
}

export async function searchUsers(query: string) {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("id, username, full_name, total_score, best_percentage")
      .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
      .limit(10)

    if (error) {
      console.error("Error searching users:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in searchUsers:", error)
    throw error
  }
}

export async function sendFriendRequest(addresseeId: string) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    // Check if friendship already exists
    const { data: existing } = await supabase
      .from("friendships")
      .select("*")
      .or(
        `and(requester_id.eq.${user.id},addressee_id.eq.${addresseeId}),and(requester_id.eq.${addresseeId},addressee_id.eq.${user.id})`,
      )
      .single()

    if (existing) {
      throw new Error("Friendship request already exists")
    }

    const { error } = await supabase.from("friendships").insert({
      requester_id: user.id,
      addressee_id: addresseeId,
      status: "pending",
    })

    if (error) {
      console.error("Error sending friend request:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in sendFriendRequest:", error)
    throw error
  }
}

// Enhanced user profile type
export interface UserProfile {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score: number
  total_questions: number
  best_percentage: number
  is_online?: boolean
  last_seen?: string
  created_at: string
  updated_at: string
}

// Challenge management functions
export async function acceptChallenge(challengeId: string) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase.rpc("accept_challenge", {
      challenge_id: challengeId,
      user_id: user.id,
    })

    if (error) {
      console.error("Error accepting challenge:", error)
      throw error
    }

    return { success: data }
  } catch (error) {
    console.error("Error in acceptChallenge:", error)
    throw error
  }
}

export async function completeChallenge(challengeId: string, score: number) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase.rpc("complete_challenge", {
      challenge_id: challengeId,
      user_id: user.id,
      score: score,
    })

    if (error) {
      console.error("Error completing challenge:", error)
      throw error
    }

    return { success: data }
  } catch (error) {
    console.error("Error in completeChallenge:", error)
    throw error
  }
}

export async function getPendingChallenges(userId: string) {
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name, avatar_url, is_online, last_seen),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name, avatar_url, is_online, last_seen)
      `)
      .eq("challenged_id", userId)
      .eq("status", "pending")
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching pending challenges:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getPendingChallenges:", error)
    throw error
  }
}

export async function getActiveChallenges(userId: string) {
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name, avatar_url, is_online, last_seen),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name, avatar_url, is_online, last_seen)
      `)
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
      .eq("status", "accepted")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching active challenges:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getActiveChallenges:", error)
    throw error
  }
}

export async function getChallengeHistory(userId: string, limit = 20) {
  try {
    const { data, error } = await supabase
      .from("user_challenges")
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name, avatar_url),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name, avatar_url)
      `)
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
      .eq("status", "completed")
      .order("updated_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching challenge history:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getChallengeHistory:", error)
    throw error
  }
}

// Friend management functions
export async function acceptFriendRequest(requestId: string) {
  try {
    const { data, error } = await supabase.rpc("accept_friend_request", {
      request_id: requestId,
    })

    if (error) {
      console.error("Error accepting friend request:", error)
      throw error
    }

    return { success: data }
  } catch (error) {
    console.error("Error in acceptFriendRequest:", error)
    throw error
  }
}

export async function declineFriendRequest(requestId: string) {
  try {
    const { error } = await supabase.from("friendships").update({ status: "declined" }).eq("id", requestId)

    if (error) {
      console.error("Error declining friend request:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in declineFriendRequest:", error)
    throw error
  }
}

export async function updateUserOnlineStatus(isOnline: boolean) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { error } = await supabase.rpc("update_user_online_status", {
      user_id: user.id,
      is_online: isOnline,
    })

    if (error) {
      console.error("Error updating online status:", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error in updateUserOnlineStatus:", error)
    throw error
  }
}

export async function getTopPlayers(limit = 50) {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("id, username, full_name, avatar_url, total_score, best_percentage, is_online, last_seen")
      .order("best_percentage", { ascending: false })
      .order("total_score", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching top players:", error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error in getTopPlayers:", error)
    throw error
  }
}

// Enhanced createChallenge function with time limit
// export async function createChallenge(
//   challengedId: string,
//   category: string,
//   difficulty: string,
//   questionCount = 10,
//   timeLimit = 300
// ) {
//   try {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser()

//     if (!user) {
//       throw new Error("User not authenticated")
//     }

//     const { error } = await supabase.from("user_challenges").insert({
//       challenger_id: user.id,
//       challenged_id: challengedId,
//       category,
//       difficulty,
//       question_count: questionCount,
//       time_limit: timeLimit,
//       status: "pending",
//     })

//     if (error) {
//       console.error("Error creating challenge:", error)
//       throw error
//     }

//     return { success: true }
//   } catch (error) {
//     console.error("Error in createChallenge:", error)
//     throw error
//   }
// }
