"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, Zap } from "lucide-react"
import { toast } from "@/hooks/use-toast"

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
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challengedId: userId,
          category,
          difficulty,
          questionCount: 10,
          timeLimit: 300,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send challenge")
      }

      setChallengeSent(true)

      toast({
        title: "Challenge Sent!",
        description: `You've challenged ${userName} to a ${
          categoryOptions.find((c) => c.value === category)?.label
        } quiz!`,
      })

      // Reset after 2 seconds
      setTimeout(() => {
        setIsOpen(false)
        setChallengeSent(false)
      }, 2000)
    } catch (error: any) {
      console.error("Error sending challenge:", error)
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
      <Button onClick={() => setIsOpen(true)} className={`bg-green-600 hover:bg-green-700 ${className}`}>
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
                <h3 className="text-lg font-medium mb-2">Challenge Sent!</h3>
                <p className="text-gray-500 mb-4">{userName} will be notified of your challenge.</p>
                <p className="text-sm text-gray-500">
                  They can accept your challenge even when offline and you'll be notified when they complete it.
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
                        Sending...
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
