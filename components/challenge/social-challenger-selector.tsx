"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
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
import { savePlayerName } from "@/lib/player-name"

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

export default function SocialChallengerSelector({ onChallengerSelect }: SocialChallengerSelectorProps) {
  const { t } = useTranslation("challenges")
  const [dialogOpen, setDialogOpen] = useState(false)
  const categoryLabel = (value: string) =>
    t(`selector.cat.${value}`, { defaultValue: categoryOptions.find((c) => c.value === value)?.label ?? value })
  const [yourName, setYourName] = useState("")
  const [opponentName, setOpponentName] = useState("")
  const [category, setCategory] = useState("quran")
  const [difficulty, setDifficulty] = useState("mixed")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)

  // Prefill the saved name whenever the dialog opens or closes (was an effect on dialogOpen).
  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open)
    const savedName = localStorage.getItem(NAME_STORAGE_KEY)
    if (savedName) setYourName(savedName)
  }

  const handleSendChallenge = async () => {
    const trimmedYourName = yourName.trim()
    const trimmedOpponentName = opponentName.trim()

    if (!trimmedYourName || trimmedYourName.length < 2) {
      toast({ title: t("selector.enterYourName"), description: t("selector.yourNameShort"), variant: "destructive" })
      return
    }
    if (!trimmedOpponentName || trimmedOpponentName.length < 2) {
      toast({ title: t("selector.enterOpponent"), description: t("selector.opponentShort"), variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    try {
      // Remember the challenger's name for next time, same key used by the leaderboard flow
      savePlayerName(trimmedYourName)

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
        throw new Error(result.error || t("selector.createFailed"))
      }

      setChallengeSent(true)
      toast({
        title: t("selector.sentTitle"),
        description: t("selector.sentText", { name: trimmedOpponentName, category: categoryLabel(category) }),
      })

      if (onChallengerSelect) {
        onChallengerSelect({ id: trimmedOpponentName, username: trimmedOpponentName, full_name: trimmedOpponentName })
      }

      setTimeout(() => {
        setDialogOpen(false)
        setChallengeSent(false)
        setOpponentName("")
      }, 2000)
    } catch (error) {
      toast({
        title: t("selector.errorTitle"),
        description: (error as { message?: string } | null)?.message || t("selector.sendFailed"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
          <Gamepad2 className="h-4 w-4 mr-2" />
          {t("selector.trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            {t("selector.title")}
          </DialogTitle>
          <DialogDescription>{t("selector.description")}</DialogDescription>
        </DialogHeader>

        {challengeSent ? (
          <div className="text-center py-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t("selector.sentHeading")}</h3>
            <p className="text-gray-500">{t("selector.sentNote", { name: opponentName })}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">{t("selector.yourName")}</label>
              <Input
                placeholder={t("selector.yourNamePlaceholder")}
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">{t("selector.opponentName")}</label>
              <Input
                placeholder={t("selector.opponentPlaceholder")}
                value={opponentName}
                onChange={(e) => setOpponentName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">{t("selector.category")}</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {categoryLabel(option.value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">{t("selector.difficulty")}</label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {difficultyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {t(`difficulty.${option.value}`, { ns: "common", defaultValue: option.label })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleSendChallenge} className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  {t("selector.sending")}
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  {t("selector.send")}
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
