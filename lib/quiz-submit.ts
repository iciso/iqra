import { submitQuizResultAction } from "@/app/actions/quiz";

// The only database writer for quiz scores: posts one result to the Neon server action.

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
