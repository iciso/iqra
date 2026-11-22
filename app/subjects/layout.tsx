import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Subjects",
  description: "Browse 50 Islamic quiz subjects and pick one to play at your own level.",
  path: "/subjects",
})

const SubjectsLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default SubjectsLayout
