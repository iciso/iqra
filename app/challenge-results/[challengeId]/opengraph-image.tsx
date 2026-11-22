import { renderChallengeShareImage, renderShareImage } from "@/lib/share-image"
import { describeChallenge, loadChallengeResult } from "@/lib/server/challenge-share"

export const alt = "An IQRA challenge: two players, one subject, and their scores."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The challenge's own card; the general IQRA card when the challenge cannot be read.
const Image = async ({ params }: { params: Promise<{ challengeId: string }> }) => {
  const { challengeId } = await params
  try {
    const challenge = await loadChallengeResult(challengeId)
    if (challenge) return await renderChallengeShareImage(describeChallenge(challenge).share)
  } catch (error) {
    console.error("[challenge-results] share image failed:", error)
  }
  return renderShareImage()
}

export default Image
