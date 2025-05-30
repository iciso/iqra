"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

interface DirectChallengeButtonProps {
  userId: string
  userName: string
  className?: string
}

export default function DirectChallengeButton({ userId, userName, className = "" }: DirectChallengeButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const { user, profile } = useAuth()

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
      console.log(`Challenging user: ${userName} (${userId})`)

      // Create a challenge record
      const challengeId = crypto.randomUUID()
      const { error } = await supabase.from("challenges").insert({
        id: challengeId,
        challenger_id: user.id,
        opponent_id: userId,
        category: "quran",
        difficulty: "mixed",
        status: "pending",
        questions_count: 10,
      })

      if (error) throw error

      toast({
        title: "Challenge created!",
        description: `You've challenged ${userName}. Get ready for your quiz!`,
      })

      // Redirect to quiz with challenge parameters
      router.push(`/quiz?category=quran&difficulty=mixed&challenge=${challengeId}&challenger=true&questions=10`)
    } catch (error: any) {
      console.error("Error creating challenge:", error)
      toast({
        title: "Challenge failed",
        description: error.message || "Failed to create challenge",
        variant: "destructive",
      })
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
      {isLoading ? "Challenging..." : "Challenge"}
    </Button>
  )
}
