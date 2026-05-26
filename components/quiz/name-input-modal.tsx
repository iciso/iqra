"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy } from "lucide-react"

interface NameInputModalProps {
  isOpen: boolean
  onSubmit: (name: string) => Promise<void>
  onSkip: () => void
  score: number
  totalQuestions: number
  percentage: number
}

export function NameInputModal({
  isOpen,
  onSubmit,
  onSkip,
  score,
  totalQuestions,
  percentage,
}: NameInputModalProps) {
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Load previously saved name from localStorage when modal opens
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      try {
        const savedName = localStorage.getItem("userNameForLeaderboard")
        if (savedName) {
          setName(savedName)
        }
      } catch (e) {
        console.warn("[v0] Could not load saved name from localStorage:", e)
      }
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Please enter your name")
      return
    }

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters")
      return
    }

    setLoading(true)
    try {
      await onSubmit(name.trim())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save your name")
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Trophy className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <DialogTitle className="text-center text-xl">Congratulations! 🎉</DialogTitle>
          <DialogDescription className="text-center">
            <div className="mt-2 mb-4">
              <p className="font-semibold text-foreground mb-1">
                You scored {score} out of {totalQuestions}
              </p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">{percentage}%</p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Want to appear on the Leaderboard?</strong> Enter your name to see your score ranked with other
              players.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="w-full"
                autoFocus
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                {loading ? "Saving..." : "Add to Leaderboard"}
              </Button>
              <Button type="button" variant="outline" onClick={onSkip} disabled={loading} className="flex-1">
                Skip
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            You can also navigate away using the Categories or Try Again buttons below.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
