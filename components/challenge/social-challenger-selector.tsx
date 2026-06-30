"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, Zap } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Kept for compatibility with whatever still imports this type from elsewhere.
// Not used to look up real accounts any more - there are none.
export interface UserProfile {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
}

interface SocialChallengerSelectorProps {
  onChallengerSelect?: (challenger: UserProfile) => void
  currentChallenger?: UserProfile | null
}

const NAME_STORAGE_KEY = "userNameForLeaderboard"

const categoryOptions = [
  { value: "quran", label: "Quran Knowledge" },
  { value: "seerah", label: "Seerah (Prophet's Biography)" },
  { value: "fiqh", label: "Fiqh (Islamic Jurisprudence)" },
  { value: "hadeeth", label: "Hadeeth" },
  { value: "aqeedah", label: "Aqeedah (Islamic Creed)" },
  { value: "tafsir", label: "Tafsir (Quran Commentary)" },
  { value: "comparative", label: "Comparative Religion" },
  { value: "islamic-finance", label: "Islamic Finance" },
  { value: "tazkiyah", label: "Tazkiyah (Spiritual Purification)" },
  { value: "history", label: "Islamic History & Civilization" },
  { value: "new-muslims", label: "New Muslims" },
  { value: "islamic-medical-ethics", label: "Islamic Medical Ethics" },
  { value: "dawah", label: "Dawah (Islamic Outreach)" },
]

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "mixed", label: "Mixed" },
]

export default function SocialChallengerSelector({ onChallengerSelect, currentChallenger }: SocialChallengerSelectorProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [yourName, setYourName] = useState("")
  const [opponentName, setOpponentName] = useState("")
  const [category, setCategory] = useState("quran")
  const [difficulty, setDifficulty] = useState("mixed")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem(NAME_STORAGE_KEY)
      if (savedName) setYourName(savedName)
    }
  }, [dialogOpen])

  const handleSendChallenge = async () => {
    const trimmedYourName = yourName.trim()
    const trimmedOpponentName = opponentName.trim()

    if (!trimmedYourName || trimmedYourName.length < 2) {
      toast({ title: "Enter your name", description: "Your name must be at least 2 characters", variant: "destructive" })
      return
    }
    if (!trimmedOpponentName || trimmedOpponentName.length < 2) {
      toast({ title: "Enter opponent's name", description: "Opponent name must be at least 2 characters", variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    try {
      // Remember the challenger's name for next time, same key used by the leaderboard flow
      localStorage.setItem(NAME_STORAGE_KEY, trimmedYourName)
      localStorage.setItem("tempChallengerId", trimmedYourName)

      const response = await fetch("/api/challenges/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          challengerName: trimmedYourName,
          challengedName: trimmedOpponentName,
          category,
          difficulty,
          question_count: 10,
          time_limit: 300,
        }),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || "Failed to create challenge")
      }

      setChallengeSent(true)
      toast({
        title: "Challenge Sent! 🎯",
        description: `You've challenged ${trimmedOpponentName} to a ${categoryOptions.find((c) => c.value === category)?.label} quiz!`,
      })

      if (onChallengerSelect) {
        onChallengerSelect({ id: trimmedOpponentName, username: trimmedOpponentName, full_name: trimmedOpponentName })
      }

      setTimeout(() => {
        setDialogOpen(false)
        setChallengeSent(false)
        setOpponentName("")
      }, 2000)
    } catch (error: any) {
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
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
          <Gamepad2 className="h-4 w-4 mr-2" />
          Challenge Someone
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Send a Challenge
          </DialogTitle>
          <DialogDescription>No sign-in needed. Just enter names and pick a quiz.</DialogDescription>
        </DialogHeader>

        {challengeSent ? (
          <div className="text-center py-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Challenge Sent! 🎯</h3>
            <p className="text-gray-500">{opponentName} will see this on their homepage next time they visit.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <Input
                placeholder="Enter your name"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Opponent's Name</label>
              <Input
                placeholder="Who are you challenging?"
                value={opponentName}
                onChange={(e) => setOpponentName(e.target.value)}
              />
            </div>

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

            <Button onClick={handleSendChallenge} className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
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
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
