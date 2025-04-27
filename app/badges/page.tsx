"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BadgesCollection from "@/components/badges/badges-collection"
import { getEarnedBadges } from "@/utils/badges"

export default function BadgesPage() {
  const [earnedBadges, setEarnedBadges] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setEarnedBadges(getEarnedBadges())
  }, [])

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <div className="text-center">
          <p>Loading badges...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-16 p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-green-800 dark:text-green-400">IQRA Badge Collection</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
        Earn badges by completing challenges, achieving high scores, and maintaining learning streaks. Each badge
        represents a milestone in your Islamic knowledge journey.
      </p>

      <div className="w-full max-w-4xl">
        <BadgesCollection earnedBadges={earnedBadges} />
      </div>
    </main>
  )
}
