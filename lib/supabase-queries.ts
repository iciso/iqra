import { supabase } from "./supabase"
import { saveQuizResultToFallback, initializeFallbackTables } from "./neon-fallback"

// Initialize fallback tables
let fallbackInitialized = false
async function ensureFallbackInitialized() {
  if (!fallbackInitialized) {
    fallbackInitialized = await initializeFallbackTables()
  }
  return fallbackInitialized
}

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

// New function to update user's total score
export async function updateUserTotalScore(
  userId: string,
  newScore: number,
  totalQuestions: number,
  percentage: number,
) {
  console.log(`🏆 Updating total score for user ${userId}: +${newScore} points`)

  try {
    // First get current user profile
    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("total_score, total_questions, best_percentage")
      .eq("id", userId)
      .single()

    if (profileError) {
      console.error("❌ Error fetching user profile for score update:", profileError)
      return false
    }

    // Calculate new totals
    const currentTotalScore = profile?.total_score || 0
    const currentTotalQuestions = profile?.total_questions || 0
    const currentBestPercentage = profile?.best_percentage || 0

    const newTotalScore = currentTotalScore + newScore
    const newTotalQuestions = currentTotalQuestions + totalQuestions
    const newBestPercentage = Math.max(currentBestPercentage, percentage)

    console.log(
      `🏆 User stats: Current=${currentTotalScore}/${currentTotalQuestions} (${currentBestPercentage}%) → New=${newTotalScore}/${newTotalQuestions} (Best: ${newBestPercentage}%)`,
    )

    // Update user profile with new totals
    const { error: updateError } = await supabase
      .from("user_profiles")
      .update({
        total_score: newTotalScore,
        total_questions: newTotalQuestions,
        best_percentage: newBestPercentage,
      })
      .eq("id", userId)

    if (updateError) {
      console.error("❌ Error updating user total score:", updateError)
      return false
    }

    console.log(`✅ Successfully updated total score for user ${userId}`)
    return true
  } catch (error) {
    console.error("❌ Exception in updateUserTotalScore:", error)
    return false
  }
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

// Enhanced quiz result submission with proper challenge completion AND leaderboard storage
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

    console.log("💾 SUBMIT QUIZ RESULT: Starting submission", {
      userId: user.id,
      score,
      totalQuestions,
      challengeId,
      category,
      difficulty,
    })

    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100)

    // 1. Save quiz result to Supabase quiz_results table for leaderboard
    console.log("📊 SUBMIT QUIZ RESULT: Saving to quiz_results table")
    let quizResultSaved = false

    try {
      const insertData = {
        user_id: user.id,
        score: score,
        total_questions: totalQuestions,
        percentage: percentage,
        category: category,
        difficulty: difficulty,
        time_left: timeLeft || 0,
        answers: answers ? JSON.stringify(answers) : null,
        challenge_id: challengeId || null,
      }

      console.log("📊 SUBMIT QUIZ RESULT: Insert data:", insertData)

      const { data: quizResult, error: quizError } = await supabase
        .from("quiz_results")
        .insert(insertData)
        .select()
        .single()

      if (quizError) {
        console.error("❌ SUBMIT QUIZ RESULT: Detailed quiz result error:", {
          message: quizError.message,
          details: quizError.details,
          hint: quizError.hint,
          code: quizError.code,
        })
        // Try fallback
      } else {
        console.log("✅ SUBMIT QUIZ RESULT: Quiz result saved to leaderboard:", quizResult)
        quizResultSaved = true
      }
    } catch (error) {
      console.error("❌ SUBMIT QUIZ RESULT: Exception saving quiz result:", error)
      // Try fallback
    }

    // If Supabase failed, try Neon fallback
    if (!quizResultSaved) {
      try {
        console.log("🔄 SUBMIT QUIZ RESULT: Trying Neon fallback...")
        await ensureFallbackInitialized()
        await saveQuizResultToFallback(
          user.id,
          score,
          totalQuestions,
          percentage,
          category,
          difficulty,
          timeLeft || 0,
          answers,
          challengeId || null,
        )
        console.log("✅ SUBMIT QUIZ RESULT: Saved to Neon fallback successfully")
        quizResultSaved = true
      } catch (fallbackError) {
        console.error("❌ SUBMIT QUIZ RESULT: Fallback also failed:", fallbackError)
        // Continue with challenge updates even if this fails
      }
    }

    // 2. Update user's total score in user_profiles
    console.log("🏆 SUBMIT QUIZ RESULT: Updating user's total score")
    await updateUserTotalScore(user.id, score, totalQuestions, percentage)

    // 3. If this is a challenge, update the challenge completion status
    if (challengeId) {
      console.log("🏆 SUBMIT QUIZ RESULT: Processing challenge completion")

      // Get fresh challenge data
      const { data: challenge, error: fetchError } = await supabase
        .from("user_challenges")
        .select("*")
        .eq("id", challengeId)
        .single()

      if (fetchError) {
        console.error("❌ SUBMIT QUIZ RESULT: Error fetching challenge:", fetchError)
        throw fetchError
      }

      console.log("📋 SUBMIT QUIZ RESULT: Fresh challenge data:", challenge)

      if (challenge) {
        const isChallenger = challenge.challenger_id === user.id
        const isChallenged = challenge.challenged_id === user.id

        console.log("👤 SUBMIT QUIZ RESULT: User role analysis:", {
          isChallenger,
          isChallenged,
          challengerId: challenge.challenger_id,
          challengedId: challenge.challenged_id,
          currentUserId: user.id,
        })

        let updateData: any = {}
        let statusUpdate = challenge.status

        if (isChallenger) {
          // Challenger completing their quiz
          console.log("🎯 SUBMIT QUIZ RESULT: User is the challenger")
          updateData = {
            challenger_score: score,
            challenger_completed_at: new Date().toISOString(),
          }
        } else if (isChallenged) {
          // Challenged user completing their quiz
          console.log("🎯 SUBMIT QUIZ RESULT: User is the challenged")
          updateData = {
            challenged_score: score,
            challenged_completed_at: new Date().toISOString(),
          }
          // If challenger has already completed, mark as completed
          if (challenge.challenger_completed_at) {
            statusUpdate = "completed"
            updateData.status = "completed"
          }
        }

        console.log("📝 SUBMIT QUIZ RESULT: Update data:", updateData)

        const { data: updatedChallenge, error: updateError } = await supabase
          .from("user_challenges")
          .update(updateData)
          .eq("id", challengeId)
          .select()
          .single()

        if (updateError) {
          console.error("❌ SUBMIT QUIZ RESULT: Error updating challenge:", updateError)
          throw updateError
        }

        console.log("✅ SUBMIT QUIZ RESULT: Challenge updated successfully:", updatedChallenge)

        // If this completes the challenge, update the opponent's score too
        if (statusUpdate === "completed" && !isChallenger) {
          // This is the challenged user completing the challenge
          // Update the challenger's total score too
          const opponentId = challenge.challenger_id
          const opponentScore = challenge.challenger_score

          if (opponentScore !== null && opponentId) {
            console.log(
              `🏆 SUBMIT QUIZ RESULT: Updating challenger's total score: ${opponentId} +${opponentScore} points`,
            )
            await updateUserTotalScore(
              opponentId,
              opponentScore,
              totalQuestions,
              Math.round((opponentScore / totalQuestions) * 100),
            )
          }
        }
      }
    }

    console.log("✅ SUBMIT QUIZ RESULT: Submission completed successfully")
    return {
      success: true,
      finalScore: score,
      bonusPoints: 0,
      originalScore: score,
      saved: quizResultSaved,
    }
  } catch (error) {
    console.error("❌ SUBMIT QUIZ RESULT: Error in submission:", error)
    throw error
  }
}
