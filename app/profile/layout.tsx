import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Your profile",
  description: "Your IQRA scores, badges and challenge history in one place.",
  path: "/profile",
})

const ProfileLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default ProfileLayout
