import type { LucideIcon } from "lucide-react"
import { BookOpen, ChartColumn, CircleX, Timer, Trophy } from "lucide-react"

// The player flow as data (text lives in locales/*/pages/how.json under flow.<id>): two tracks meet at one results page, then one leaderboard choice.
export type FlowStep = {
  id: string
  icon: LucideIcon
}

export const TRACKS: FlowStep[] = [
  {
    id: "track-1",
    icon: BookOpen,
  },
  {
    id: "track-2",
    icon: Timer,
  },
]

export const RESULTS: FlowStep = {
  id: "results",
  icon: ChartColumn,
}

export const OUTCOMES: FlowStep[] = [
  {
    id: "submit",
    icon: Trophy,
  },
  {
    id: "skip",
    icon: CircleX,
  },
]

// Desktop connector geometry: each row below is grid-cols-2 gap-6 (24px), so a column's
// centre sits at 25% minus a quarter of the gap (6px) from its outer edge.
export const LINE = "absolute bg-green-300 dark:bg-green-700"
export const COL_L = "left-[calc(25%-6px)]"
export const COL_R = "right-[calc(25%-6px)]"
