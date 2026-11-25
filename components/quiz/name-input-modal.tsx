"use client"

import { useState } from "react"
import { Trans, useTranslation } from "react-i18next"
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
  const { t } = useTranslation("profile")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Load previously saved name from localStorage when modal opens
  const [wasOpen, setWasOpen] = useState(false)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError(t("nameModal.errEmpty"))
      return
    }

    if (name.trim().length < 2) {
      setError(t("nameModal.errShort"))
      return
    }

    setLoading(true)
    try {
      await onSubmit(name.trim())
    } catch (err) {
      setError(err instanceof Error ? err.message : t("nameModal.errSave"))
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
          <DialogTitle className="text-center text-xl">{t("nameModal.congrats")}</DialogTitle>
          <DialogDescription className="text-center">
            <div className="mt-2 mb-4">
              <p className="font-semibold text-foreground mb-1">
                {t("nameModal.scored", { score, total: totalQuestions })}
              </p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">{percentage}%</p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <Trans i18nKey="nameModal.leaderboardPrompt" ns="profile" components={{ b: <strong /> }} />
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder={t("nameModal.placeholder")}
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
                {loading ? t("nameModal.saving") : t("nameModal.add")}
              </Button>
              <Button type="button" variant="outline" onClick={onSkip} disabled={loading} className="flex-1">
                {t("nameModal.skip")}
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {t("nameModal.hint")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
