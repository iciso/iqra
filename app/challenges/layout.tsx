import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Challenges",
  description: "Challenge a friend to the same Islamic quiz and see who scores higher.",
  path: "/challenges",
})

const ChallengesLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default ChallengesLayout
