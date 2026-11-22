import type { LucideIcon } from "lucide-react"
import { BookOpen, ChartColumn, CircleX, Timer, Trophy } from "lucide-react"

// The player flow as data: two tracks meet at one results page, then one leaderboard choice.
export type FlowStep = {
  id: string
  eyebrow: string
  title: string
  body: string
  icon: LucideIcon
}

export const FLOW_TITLE = "IQRA Player Flow: Quizzes vs Challenge Track"

export const TRACKS: FlowStep[] = [
  {
    id: "track-1",
    eyebrow: "Track 1 · Quiz",
    title: "Quizzes Track (Answer & Learn)",
    body: "Untimed gameplay focused on self-paced study across major Islamic subjects.",
    icon: BookOpen,
  },
  {
    id: "track-2",
    eyebrow: "Track 2 · Rivalry",
    title: "Challenge Track (Play Challenge)",
    body: "Timed competitive gameplay designed to test quick recall and subject mastery.",
    icon: Timer,
  },
]

export const RESULTS: FlowStep = {
  id: "results",
  eyebrow: "Both tracks meet here",
  title: "Common Results Page",
  body: "Convergence point displaying total score, accuracy breakdown, and performance statistics.",
  icon: ChartColumn,
}

export const DECISION = "Leaderboard Decision Point"

export const OUTCOMES: FlowStep[] = [
  {
    id: "submit",
    eyebrow: "Option 1",
    title: "Submit to Leaderboard",
    body: "Players choose to submit their score publicly.",
    icon: Trophy,
  },
  {
    id: "skip",
    eyebrow: "Option 2",
    title: "Skip Submission",
    body: "Players choose to skip submission.",
    icon: CircleX,
  },
]

// Desktop connector geometry: each row below is grid-cols-2 gap-6 (24px), so a column's
// centre sits at 25% minus a quarter of the gap (6px) from its outer edge.
export const LINE = "absolute bg-green-300 dark:bg-green-700"
export const COL_L = "left-[calc(25%-6px)]"
export const COL_R = "right-[calc(25%-6px)]"
