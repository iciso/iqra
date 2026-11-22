import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Results",
  description: "Your score and answers from the quiz you just finished.",
  path: "/results",
  noindex: true,
})

const ResultsLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default ResultsLayout
