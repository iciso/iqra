import type { Metadata } from "next"
import { ChallengeResultsNotFound } from "@/components/challenge/challenge-pages"

// Next marks every 404 noindex itself.
export const metadata: Metadata = { title: "Challenge not found" }

const ChallengeNotFound = () => <ChallengeResultsNotFound />

export default ChallengeNotFound
