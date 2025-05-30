"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { createChallenge } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface SimpleChallengeButtonProps {
  userId: string
  userName: string
  className?: string
}

export default function SimpleChallengeButton({ userId, userName, className = "" }: SimpleChallengeButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleChallenge = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to challenge other players",
        variant: "destructive",
      })
      return
    }

    try {
      setIsLoading(true)
      console.log(`🎯 Creating challenge for: ${userName} (${userId})`)

      // Use the existing createChallenge function which uses user_challenges table
      const challenge = await createChallenge(userId, "quran", "mixed", 10, 300)

      console.log(`✅ Challenge created successfully:`, challenge)

      toast({
        title: "Challenge Created!",
        description: `You've challenged ${userName}. Take your quiz now!`,
      })

      // Redirect to quiz as challenger
      const challengeUrl = `/quiz?category=quran&difficulty=mixed&challenge=${challenge.id}&questions=10&opponent=${userId}&opponentName=${encodeURIComponent(userName)}&challengerTurn=true`

      console.log(`🔗 Redirecting to:`, challengeUrl)
      router.push(challengeUrl)
    } catch (error: any) {
      console.error("❌ Error creating challenge:", error)
      toast({
        title: "Challenge Failed",
        description: error.message || "Failed to create challenge",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleChallenge}
      disabled={isLoading || !user}
      className={`bg-green-600 hover:bg-green-700 ${className}`}
      size="sm"
    >
      {isLoading ? (
        <>
          <div className="mr-1 h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Challenging...
        </>
      ) : (
        <>
          <Gamepad2 className="h-3 w-3 mr-1" />
          Challenge
        </>
      )}
    </Button>
  )
}
