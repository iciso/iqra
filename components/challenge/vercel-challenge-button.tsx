"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

interface VercelChallengeButtonProps {
  userId: string
  userName: string
  className?: string
}

export default function VercelChallengeButton({ userId, userName, className = "" }: VercelChallengeButtonProps) {
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

      // Get the current session token
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        throw new Error("No active session")
      }

      // Call our API route to create the challenge
      const response = await fetch("/api/challenges/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          challengedId: userId,
          category: "quran",
          difficulty: "mixed",
          questionCount: 10,
          timeLimit: 300,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create challenge")
      }

      const { challenge } = await response.json()
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
