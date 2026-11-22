import { cache } from "react"
import { challengeCategoryLabel } from "@/lib/challenge-labels"
import type { ChallengeShareData } from "@/lib/share-image"
import { getChallengeResult } from "./challenge-data"
import type { ChallengeResult } from "./types"

// One database read per request, shared by the page, its metadata and its share images.
export const loadChallengeResult = cache(getChallengeResult)

const levelLabel = (difficulty: string) =>
  difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "Mixed"

const scoreText = (score: number | null, total: number | null, fallbackTotal: number) =>
  score === null || score === undefined ? null : `${score}/${total ?? fallbackTotal}`

// Title, description and share-card data for a challenge link, e.g. when it is pasted into WhatsApp.
export const describeChallenge = (challenge: ChallengeResult) => {
  const subject = challengeCategoryLabel(challenge.category)
  const level = levelLabel(challenge.difficulty)
  const challenger = challenge.challenger_name
  const challenged = challenge.challenged_name
  const challengerScore = scoreText(challenge.challenger_score, challenge.challenger_total, challenge.question_count)
  const challengedScore = scoreText(challenge.challenged_score, challenge.challenged_total, challenge.question_count)

  const scores =
    challengerScore && challengedScore
      ? `Score: ${challengerScore} vs ${challengedScore}.`
      : challengerScore
        ? `${challenger} scored ${challengerScore}; waiting for ${challenged} to play.`
        : challengedScore
          ? `${challenged} scored ${challengedScore}; waiting for ${challenger} to play.`
          : `Waiting for ${challenger} and ${challenged} to play.`

  const bothPlayed = challengerScore !== null && challengedScore !== null
  const challengerPoints = Number(challenge.challenger_percentage ?? challenge.challenger_score)
  const challengedPoints = Number(challenge.challenged_percentage ?? challenge.challenged_score)

  const share: ChallengeShareData = {
    subject,
    level,
    players: [
      { name: challenger, score: challengerScore, winner: bothPlayed && challengerPoints > challengedPoints },
      { name: challenged, score: challengedScore, winner: bothPlayed && challengedPoints > challengerPoints },
    ],
  }

  return {
    title: `${challenger} vs ${challenged} – ${subject}`,
    description: `${challenger} challenged ${challenged} in ${subject} (${level}). ${scores} Play IQRA – Islamic Quiz Rivalry App.`,
    share,
  }
}
