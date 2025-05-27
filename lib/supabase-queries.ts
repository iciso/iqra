import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export interface UserProfile {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  bio?: string
  total_score: number
  total_questions: number
  best_percentage: number
  badges_earned: string[]
  is_online: boolean
  last_seen: string
  created_at: string
  updated_at: string
}

export interface Challenge {
  id: string
  challenger_id: string
  challenged_id: string
  category: string
  difficulty: string
  question_count: number
  time_limit: number
  status: "pending" | "accepted" | "declined" | "completed" | "expired"
  challenger_score?: number
  challenged_score?: number
  challenger_completed_at?: string
  challenged_completed_at?: string
  expires_at: string
  created_at: string
  updated_at: string
  challenger?: UserProfile
  challenged?: UserProfile
}

export interface Friendship {
  id: string
  requester_id: string
  addressee_id: string
  status: "pending" | "accepted" | "declined" | "blocked"
  created_at: string
  updated_at: string
  requester?: UserProfile
  addressee?: UserProfile
}

// User Profile Functions
export async function createUserProfile(user: User) {
  const username = user.user_metadata?.username || user.email?.split("@")[0] || "user"

  const { data, error } = await supabase
    .from("user_profiles")
    .insert({
      id: user.id,
      username,
      full_name: user.user_metadata?.full_name || "",
      avatar_url: user.user_metadata?.avatar_url || "",
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }
  return data
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from("user_profiles")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function searchUsers(query: string): Promise<UserProfile[]> {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
    .limit(10)

  if (error) throw error
  return data || []
}

// Friendship Functions
export async function sendFriendRequest(addresseeId: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data, error } = await supabase
    .from("friendships")
    .insert({
      requester_id: user.id,
      addressee_id: addresseeId,
      status: "pending",
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function respondToFriendRequest(friendshipId: string, status: "accepted" | "declined") {
  const { data, error } = await supabase
    .from("friendships")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", friendshipId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getFriends(userId: string): Promise<UserProfile[]> {
  const { data, error } = await supabase
    .from("friendships")
    .select(`
      *,
      requester:user_profiles!friendships_requester_id_fkey(*),
      addressee:user_profiles!friendships_addressee_id_fkey(*)
    `)
    .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`)
    .eq("status", "accepted")

  if (error) throw error

  // Extract the friend profiles (not the current user)
  return (
    data
      ?.map((friendship) => {
        return friendship.requester_id === userId ? friendship.addressee : friendship.requester
      })
      .filter(Boolean) || []
  )
}

export async function getPendingFriendRequests(userId: string): Promise<Friendship[]> {
  const { data, error } = await supabase
    .from("friendships")
    .select(`
      *,
      requester:user_profiles!friendships_requester_id_fkey(*),
      addressee:user_profiles!friendships_addressee_id_fkey(*)
    `)
    .eq("addressee_id", userId)
    .eq("status", "pending")

  if (error) throw error
  return data || []
}

// Challenge Functions
export async function createChallenge(
  challengedId: string,
  category: string,
  difficulty: string,
  questionCount = 10,
  timeLimit = 300,
) {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const { data, error } = await supabase
    .from("user_challenges")
    .insert({
      challenger_id: user.id,
      challenged_id: challengedId,
      category,
      difficulty,
      question_count: questionCount,
      time_limit: timeLimit,
      status: "pending",
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function respondToChallenge(challengeId: string, status: "accepted" | "declined") {
  const { data, error } = await supabase
    .from("user_challenges")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", challengeId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserChallenges(userId: string): Promise<Challenge[]> {
  const { data, error } = await supabase
    .from("user_challenges")
    .select(`
      *,
      challenger:user_profiles!user_challenges_challenger_id_fkey(*),
      challenged:user_profiles!user_challenges_challenged_id_fkey(*)
    `)
    .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data || []
}

export async function submitQuizResult(
  score: number,
  totalQuestions: number,
  category: string,
  difficulty: string,
  timeTaken?: number,
  answers?: any,
  challengeId?: string,
) {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authenticated")

  const percentage = Math.round((score / totalQuestions) * 100)

  const { data, error } = await supabase
    .from("quiz_results")
    .insert({
      user_id: user.id,
      challenge_id: challengeId,
      category,
      difficulty,
      score,
      total_questions: totalQuestions,
      percentage,
      time_taken: timeTaken,
      answers,
    })
    .select()
    .single()

  if (error) throw error

  // Update user profile stats
  await updateUserStats(user.id, score, totalQuestions, percentage)

  // If this is a challenge, update the challenge with the score
  if (challengeId) {
    await updateChallengeScore(challengeId, user.id, score)
  }

  return data
}

async function updateUserStats(userId: string, score: number, totalQuestions: number, percentage: number) {
  const profile = await getUserProfile(userId)
  if (!profile) return

  const newTotalScore = profile.total_score + score
  const newTotalQuestions = profile.total_questions + totalQuestions
  const newBestPercentage = Math.max(profile.best_percentage, percentage)

  await updateUserProfile(userId, {
    total_score: newTotalScore,
    total_questions: newTotalQuestions,
    best_percentage: newBestPercentage,
  })
}

async function updateChallengeScore(challengeId: string, userId: string, score: number) {
  const { data: challenge } = await supabase.from("user_challenges").select("*").eq("id", challengeId).single()

  if (!challenge) return

  const isChallenger = challenge.challenger_id === userId
  const updateField = isChallenger ? "challenger_score" : "challenged_score"
  const completedField = isChallenger ? "challenger_completed_at" : "challenged_completed_at"

  const updates: any = {
    [updateField]: score,
    [completedField]: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  // Check if both players have completed
  const otherScore = isChallenger ? challenge.challenged_score : challenge.challenger_score
  if (otherScore !== null) {
    updates.status = "completed"
  }

  await supabase.from("user_challenges").update(updates).eq("id", challengeId)
}

export async function updateUserOnlineStatus(userId: string, isOnline: boolean) {
  const { error } = await supabase
    .from("user_profiles")
    .update({
      is_online: isOnline,
      last_seen: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)

  if (error) console.error("Error updating online status:", error)
}
