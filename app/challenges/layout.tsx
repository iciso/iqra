import type React from "react"
export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">{children}</main>
}
