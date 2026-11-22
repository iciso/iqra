import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Badges",
  description: "The badges you can earn on IQRA and how to earn each one.",
  path: "/badges",
})

const BadgesLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default BadgesLayout
