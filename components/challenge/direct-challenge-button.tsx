"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, Zap } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { createChallenge } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface DirectChallengeButtonProps {
  userId: string
  userName: string
  className?: string
}

export default function DirectChallengeButton({ userId, userName, className = "" }: DirectChallengeButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)
  const [category, setCategory] = useState("quran")
  const [difficulty, setDifficulty] = useState("easy")
  const { user } = useAuth()
  const router = useRouter()

  // Category options
  const categoryOptions = [
    { value: "quran", label: "Quran Knowledge" },
    { value: "seerah", label: "Seerah (Prophet's Biography)" },
    { value: "fiqh", label: "Fiqh (Islamic Jurisprudence)" },
    { value: "hadeeth", label: "Hadeeth" },
    { value: "aqeedah", label: "Aqeedah (Islamic Creed)" },
    { value: "tafsir", label: "Tafsir (Quran Commentary)" },
  ]

  // Difficulty options
  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "mixed", label: "Mixed" },
  ]

  const handleSendChallenge = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to challenge other players",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      console.log(`🎯 Creating challenge: ${userName} (${userId})`)
      console.log(`🎯 Challenge details:`, { category, difficulty, questionCount: 10, timeLimit: 300 })

      // Create the challenge using the existing function
      const challenge = await createChallenge(userId, category, difficulty, 10, 300)

      console.log(`✅ Challenge created successfully:`, challenge)

      setChallengeSent(true)

      toast({
        title: "Challenge Created!",
        description: `You've challenged ${userName}. Take your quiz now!`,
      })

      // Redirect to quiz immediately as the challenger
      setTimeout(() => {
        const challengeUrl = `/quiz?category=${category}&difficulty=${difficulty}&challenge=${challenge.id}&questions=10&opponent=${userId}&opponentName=${encodeURIComponent(userName)}&challengerTurn=true`
        console.log(`🔗 Redirecting challenger to:`, challengeUrl)
        router.push(challengeUrl)
      }, 1500)
    } catch (error: any) {
      console.error("❌ Error sending challenge:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={`bg-green-600 hover:bg-green-700 ${className}`} size="sm">
        <Gamepad2 className="h-4 w-4 mr-2" />
        Challenge
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Challenge {userName}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {challengeSent ? (
              <div className="text-center py-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Challenge Created!</h3>
                <p className="text-gray-500 mb-4">Taking you to your quiz now...</p>
                <p className="text-sm text-gray-500">
                  {userName} will be notified and can accept your challenge when ready.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Difficulty</label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {difficultyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleSendChallenge}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Creating...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Send Challenge
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
