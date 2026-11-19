import { supabase } from '@/lib/supabase-client';
import { submitQuizResultAction } from '@/app/actions/quiz';

export interface UserProfile {
  id: string;
  username: string;
  full_name?: string | null;
  avatar_url?: string | null;
  bio?: string | null;
  total_score?: number | null;
  total_questions?: number | null;
  best_percentage?: number | null;
  badges_earned?: string[] | null;
  is_online?: boolean | null;
  last_seen?: string | null;
  created_at?: string;
  updated_at?: string;
}

type ProfileSummary = Pick<UserProfile, 'id' | 'username' | 'full_name' | 'avatar_url'>;

export interface Friendship {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: string;
  created_at: string;
  user_profiles?: ProfileSummary | null;
}

export interface UserChallenge {
  id: string;
  challenger_id: string;
  challenged_id: string;
  category: string;
  difficulty: string;
  question_count: number;
  time_limit?: number;
  status: string;
  challenger_score?: number | null;
  challenged_score?: number | null;
  challenger_completed_at?: string | null;
  challenged_completed_at?: string | null;
  created_at: string;
  expires_at?: string;
  challenger?: ProfileSummary | null;
  challenged?: ProfileSummary | null;
}

// User profile functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase.from<UserProfile>('user_profiles').select('*').eq('id', userId).single();

  if (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }

  return data;
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase.from<UserProfile>('user_profiles').update(updates).eq('id', userId).select().single();

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
      .from<UserProfile>('user_profiles')
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
      .from<UserProfile>('user_profiles')
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
    throw new Error('No authenticated user');
  }

  const { error } = await supabase.rpc('update_user_online_status', {
    user_id: session.user.id,
    is_online: isOnline,
  });

  if (error) {
    console.error('Error updating online status:', error);
    throw error;
  }

  return true;
}

// User search and discovery
export async function searchUsers(query: string, limit = 30): Promise<UserProfile[]> {
  console.log('🔍 SEARCH USERS FUNCTION: Called with query:', query);

  if (!query || query.length < 2) {
    console.log('🔍 SEARCH USERS FUNCTION: Query too short, returning empty array');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from<UserProfile>('user_profiles')
      .select('*')
      .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
      .limit(limit);

    if (error) {
      console.error('🔍 SEARCH USERS FUNCTION: Database error:', error);
      throw error;
    }

    console.log('🔍 SEARCH USERS FUNCTION: Database returned:', data);
    return data || [];
  } catch (error) {
    console.error('🔍 SEARCH USERS FUNCTION: Caught error:', error);
    throw error;
  }
}

export async function getTopPlayers(limit = 30): Promise<UserProfile[]> {
  const { data, error } = await supabase
    .from<UserProfile>('user_profiles')
    .select('*')
    .order('total_score', { ascending: false })
    .order('best_percentage', { ascending: false })
    .order('total_questions', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching top players:', error);
    throw error;
  }

  return data || [];
}

// Friendship functions
export async function sendFriendRequest(addresseeId: string) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    throw new Error('No authenticated user');
  }

  const { data, error } = await supabase
    .from<Friendship>('friendships')
    .insert({
      requester_id: session.user.id,
      addressee_id: addresseeId,
      status: 'pending',
    })
    .select()
    .single();

  if (error) {
    console.error('Error sending friend request:', error);
    throw error;
  }

  return data;
}

export async function getFriends(userId: string): Promise<UserProfile[]> {
  const { data, error } = await supabase
    .from<Friendship>('friendships')
    .select('*')
    .eq('requester_id', userId)
    .eq('status', 'accepted');

  if (error) {
    console.error('Error fetching friends:', error);
    throw error;
  }

  // Rows are friendships; callers (find-challengers-dialog) treat them as profiles. Kept as is.
  return (data || []) as unknown as UserProfile[];
}

export async function getPendingFriendRequests(userId: string): Promise<Friendship[]> {
  const { data, error } = await supabase
    .from<Friendship>('friendships')
    .select(`
      id,
      requester_id,
      addressee_id,
      status,
      created_at,
      user_profiles!friendships_requester_id_fkey (
        id,
        username,
        full_name,
        avatar_url
      )
    `)
    .eq('addressee_id', userId)
    .eq('status', 'pending');

  if (error) {
    console.error('Error fetching pending friend requests:', error);
    throw error;
  }

  return data || [];
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
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) {
      throw new Error('No authenticated user');
    }

    console.log('Creating challenge with params:', {
      challenger_id: session.user.id,
      challenged_id: challengedId,
      category,
      difficulty,
      question_count: questionCount,
      time_limit: timeLimit,
    });

    const expiresAt = new Date('9990-12-31T23:59:59Z'); 
    
    const { data, error } = await supabase
      .from<UserChallenge>('user_challenges')
      .insert({
        challenger_id: session.user.id,
        challenged_id: challengedId,
        category,
        difficulty,
        question_count: questionCount,
        time_limit: timeLimit,
        status: 'pending',
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating challenge:', error);
      throw new Error(`Failed to create challenge: ${error.message}`);
    }

    console.log('Challenge created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in createChallenge:', error);
    throw error;
  }
}

export async function declineChallenge(challengeId: string) {
  const { data, error } = await supabase
    .from<UserChallenge>('user_challenges')
    .update({ status: 'declined' })
    .eq('id', challengeId)
    .select()
    .single();

  if (error) {
    console.error('Error declining challenge:', error);
    throw error;
  }

  return data;
}

export async function getPendingChallenges(userId: string): Promise<UserChallenge[]> {
  const { data, error } = await supabase
    .from<UserChallenge>('user_challenges')
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
        id,
        username,
        full_name,
        avatar_url
      )
    `)
    .eq('challenged_id', userId)
    .eq('status', 'pending')
    .order("created_at", { ascending: false })
  if (error) {
    console.error('Error fetching pending challenges:', error);
    throw error;
  }

  return data || [];
}

export async function getActiveChallenges(userId: string): Promise<UserChallenge[]> {
  const { data, error } = await supabase
    .from<UserChallenge>('user_challenges')
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
        id,
        username,
        full_name,
        avatar_url
      ),
      challenged:user_profiles!user_challenges_challenged_id_fkey (
        id,
        username,
        full_name,
        avatar_url
      )
    `)
    .eq('status', 'accepted')
    .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`);

  if (error) {
    console.error('Error fetching active challenges:', error);
    throw error;
  }

  return data || [];
}

export async function getUserChallenges(userId: string): Promise<UserChallenge[]> {
  try {
    const { data, error } = await supabase
      .from<UserChallenge>('user_challenges')
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name)
      `)
      .or(`challenger_id.eq.${userId},challenged_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching user challenges:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getUserChallenges:', error);
    throw error;
  }
}

export async function acceptChallenge(challengeId: string) {
  console.log(`🏆 Accepting challenge: ${challengeId}`);

  const { data: { session } } = await supabase.auth.getSession();

  if (!session?.user) {
    console.error('❌ No authenticated user found');
    throw new Error('No authenticated user');
  }

  console.log(`👤 User ID: ${session.user.id}`);

  try {
    const { data: challenge, error: fetchError } = await supabase
      .from<UserChallenge>('user_challenges')
      .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey (
          id,
          username,
          full_name,
          avatar_url
        )
      `)
      .eq('id', challengeId)
      .single();

    if (fetchError) {
      console.error('❌ Error fetching challenge:', fetchError);
      throw fetchError;
    }

    if (!challenge) {
      throw new Error('Challenge not found');
    }

    console.log(`📋 Full challenge details:`, challenge);

    const { data, error } = await supabase
      .from<UserChallenge>('user_challenges')
      .update({ status: 'accepted' })
      .eq('id', challengeId)
      .select()
      .single();

    if (error) {
      console.error('❌ Error accepting challenge:', error);
      throw error;
    }

    console.log(`✅ Challenge accepted successfully`);

    const challenger = challenge.challenger;
    const challengerName = challenger?.full_name || challenger?.username || 'Challenger';

    console.log(`👤 Challenger info:`, {
      id: challenger?.id,
      name: challengerName,
    });

    const challengeUrl = `/quiz?category=${challenge.category}&difficulty=${challenge.difficulty}&challenge=${challengeId}&questions=${challenge.question_count}&opponent=${challenger?.id}&opponentName=${encodeURIComponent(challengerName)}&challengerTurn=false`;

    console.log(`🔗 Full challenge URL:`, challengeUrl);
    console.log(`🔗 Challenger ID being passed:`, challenger?.id);
    console.log(`🔗 Challenger name being passed:`, challengerName);
    // Full page load on purpose: the quiz page reads these params from the URL.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = challengeUrl;

    return {
      ...data,
      challenger,
    };
  } catch (error) {
    console.error('❌ General error in acceptChallenge:', error);
    throw error;
  }
}

export async function getChallenge(challengeId: string): Promise<UserChallenge | null> {
  const { data, error } = await supabase
    .from<UserChallenge>('user_challenges')
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
        id,
        username,
        full_name,
        avatar_url
      ),
      challenged:user_profiles!user_challenges_challenged_id_fkey (
        id,
        username,
        full_name,
        avatar_url
      )
    `)
    .eq('id', challengeId)
    .single();

  if (error) {
    console.error('Error fetching challenge:', error);
    throw error;
  }

  return data;
}

// Guards against the same result being posted twice (strict mode, remounts, double clicks).
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 15_000;

export async function submitQuizResult(
  score: number,
  totalQuestions: number,
  category: string, // always pass the category ID (e.g. "surah-78"), never the title
  difficulty: string,
  timeLeft: number = 0,
  answers?: unknown,
  challengeId?: string,
  userName?: string,
) {
  void timeLeft; // kept so existing positional callers still line up
  void answers;
  if (!totalQuestions || totalQuestions <= 0) {
    throw new Error('totalQuestions must be greater than 0');
  }

  // For free access without authentication, use the provided name or a temp ID
  const tempId =
    typeof window !== 'undefined' ? localStorage.getItem('tempChallengerId') : null;
  const identity = userName || tempId;
  const userId = identity || `user-${Date.now()}`;

  // Ignore an identical result submitted moments ago
  const key = [identity ?? 'anon', category, difficulty, score, totalQuestions, challengeId ?? ''].join('|');
  const now = Date.now();
  const last = recentSubmissions.get(key);
  if (last && now - last < DUPLICATE_WINDOW_MS) {
    console.warn('⚠️ SUBMIT QUIZ RESULT: duplicate submission ignored', key);
    return { success: true, finalScore: score, bonusPoints: 0, originalScore: score, saved: false };
  }
  recentSubmissions.set(key, now);

  const percentage = Math.round((score / totalQuestions) * 100);

  console.log('💾 SUBMIT QUIZ RESULT: Submitting', {
    userId,
    userName,
    score,
    totalQuestions,
    percentage,
    category,
    difficulty,
    challengeId,
  });

  try {
    // Server Action (app/actions/quiz.ts). The player is identified by name; no user id is sent.
    const saved = await submitQuizResultAction({
      name: userName,
      score,
      totalQuestions,
      percentage,
      category,
      difficulty,
      challenge: challengeId || null,
    });

    if (!saved.success) {
      throw new Error(`API error: ${saved.error}`);
    }

    console.log('✅ SUBMIT QUIZ RESULT: saved');

    return { success: true, finalScore: score, bonusPoints: 0, originalScore: score, saved: true };
  } catch (error) {
    // Allow a genuine retry after a failure
    recentSubmissions.delete(key);
    console.error('❌ SUBMIT QUIZ RESULT: failed', error);
    throw error;
  }
}
