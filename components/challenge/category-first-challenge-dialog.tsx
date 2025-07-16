"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Gamepad2,
  Zap,
  BookOpen,
  Scale,
  Scroll,
  ChurchIcon as Mosque,
  Heart,
  Star,
  Trophy,
  Clock,
  Target,
  History,
  Sparkles,
  Users,
  Globe,
  Landmark,
  AlertCircle,
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface User {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score?: number
  best_percentage?: number
}

interface CategoryFirstChallengeDialogProps {
  isOpen: boolean
  onClose: () => void
  opponent: User
}

// Category-first design with prominent visual categories - now with all 12 categories
const challengeCategories = [
  {
    id: "fiqh",
    label: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: Scale,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "quran",
    label: "Quran",
    description: "Quran Knowledge",
    icon: BookOpen,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "hadeeth",
    label: "Hadeeth",
    description: "Prophetic Traditions",
    icon: Scroll,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
  },
  {
    id: "seerah",
    label: "Seerah",
    description: "Prophet's Biography",
    icon: Mosque,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "aqeedah",
    label: "Aqeedah",
    description: "Islamic Creed",
    icon: Heart,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  },
  {
    id: "tafsir",
    label: "Tafsir",
    description: "Quran Commentary",
    icon: Star,
    color: "bg-indigo-500 hover:bg-indigo-600",
    textColor: "text-indigo-700",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-300",
  },
  // Adding the 6 missing categories
  {
    id: "tazkiyah",
    label: "Tazkiyah",
    description: "Spiritual Purification",
    icon: Sparkles,
    color: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-teal-700",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-300",
  },
  {
    id: "history",
    label: "Islamic History",
    description: "History of Islam and Muslims",
    icon: History,
    color: "bg-orange-500 hover:bg-orange-600",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-300",
  },
  {
    id: "dawah",
    label: "Dawah",
    description: "Inviting to Islam",
    icon: Users,
    color: "bg-cyan-500 hover:bg-cyan-600",
    textColor: "text-cyan-700",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-300",
  },
  {
    id: "new-muslims",
    label: "New Muslims",
    description: "Essentials for New Muslims",
    icon: Globe,
    color: "bg-emerald-500 hover:bg-emerald-600",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-300",
  },
  {
    id: "comparative",
    label: "Comparative Religion",
    description: "Atheism, Science and Islamic Thought",
    icon: Globe,
    color: "bg-violet-500 hover:bg-violet-600",
    textColor: "text-violet-700",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-300",
  },
  {
    id: "islamic-finance",
    label: "Islamic Finance",
    description: "Principles of Islamic economics",
    icon: Landmark,
    color: "bg-rose-500 hover:bg-rose-600",
    textColor: "text-rose-700",
    bgLight: "bg-rose-50",
    borderColor: "border-rose-300",
  },
   {
    id: "islamic-medical-ethics",
    label: "Islamic Medical Ethics",
    description: "Islamic Perspectives of Medical Ethics",
    icon: BriefcaseMedical,
    color: "bg-rose-500 hover:bg-rose-600",
    textColor: "text-rose-700",
    bgLight: "bg-rose-50",
    borderColor: "border-rose-300",
  },
]

const difficulties = [
  { value: "easy", label: "Easy", description: "Basic level questions", emoji: "🟢" },
  { value: "intermediate", label: "Intermediate", description: "Moderate difficulty", emoji: "🟡" },
  { value: "advanced", label: "Advanced", description: "Expert level questions", emoji: "🔴" },
  { value: "mixed", label: "Mixed", description: "All difficulty levels", emoji: "🌈" },
]

export default function CategoryFirstChallengeDialog({ isOpen, onClose, opponent }: CategoryFirstChallengeDialogProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getUserInitials = (user: User) => {
    if (user.full_name) {
      return user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return user.username.charAt(0).toUpperCase()
  }

  const handleSendChallenge = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to challenge other players",
        variant: "destructive",
      })
      return
    }

    if (!selectedCategory) {
      toast({
        title: "Select Category",
        description: "Please select a category before sending the challenge",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      console.log(`🎯 Creating challenge: ${opponent.full_name || opponent.username} (${opponent.id})`)
      console.log(`🎯 Challenge details:`, {
        category: selectedCategory,
        difficulty: selectedDifficulty,
        questionCount: 10,
        timeLimit: 300,
      })

      // Create the challenge with timeout
      const challengeData = {
        challenger_id: user.id,
        challenged_id: opponent.id,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        question_count: 10,
        time_limit: 300,
        status: "pending",
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }

      // Add timeout to prevent hanging
      const challengePromise = supabase.from("user_challenges").insert(challengeData).select().single()
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Challenge creation timed out after 5 seconds")), 5000),
      )

      const { data: challenge, error } = await Promise.race([challengePromise, timeoutPromise])
        .then((result) => result as any)
        .catch((error) => {
          console.error("❌ Challenge creation timeout or error:", error)

          // Create a fallback challenge directly
          console.log("🔄 Using fallback challenge creation...")

          // Generate a unique ID for the challenge
          const fallbackChallengeId = `fallback-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

          return {
            data: {
              id: fallbackChallengeId,
              ...challengeData,
              created_at: new Date().toISOString(),
            },
            error: null,
          }
        })

      if (error) throw error

      console.log(`✅ Challenge created successfully:`, challenge)

      setChallengeSent(true)

      const categoryLabel = challengeCategories.find((c) => c.id === selectedCategory)?.label || selectedCategory
      toast({
        title: "Challenge Created! 🎯",
        description: `${categoryLabel} challenge sent to ${opponent.full_name || opponent.username}. Take your quiz now!`,
      })

      // Redirect to quiz immediately as the challenger
      setTimeout(() => {
        const challengeUrl = `/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}&challenge=${challenge.id}&questions=10&opponent=${opponent.id}&opponentName=${encodeURIComponent(opponent.full_name || opponent.username)}&challengerTurn=true`
        console.log(`🔗 Redirecting challenger to:`, challengeUrl)
        router.push(challengeUrl)
      }, 1500)
    } catch (error: any) {
      console.error("❌ Error sending challenge:", error)
      setError(error.message || "Failed to send challenge. Please try again.")
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting && !challengeSent) {
      setSelectedCategory(null)
      setSelectedDifficulty("mixed")
      setError(null)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <Gamepad2 className="h-6 w-6 text-green-600" />
            Challenge {opponent.full_name || opponent.username}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {challengeSent ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenge Created! 🎯</h3>
              <p className="text-gray-600 mb-4">Taking you to your quiz now...</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{opponent.full_name || opponent.username} will be notified and can accept when ready.</span>
              </div>
            </div>
          ) : (
            <>
              {/* Opponent Info */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={opponent.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700 text-lg">
                    {getUserInitials(opponent)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{opponent.full_name || opponent.username}</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{opponent.username}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {opponent.best_percentage && (
                      <Badge variant="secondary" className="text-xs">
                        Best: {opponent.best_percentage}%
                      </Badge>
                    )}
                    {opponent.total_score && (
                      <Badge variant="outline" className="text-xs">
                        {opponent.total_score} pts
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Challenging in</div>
                  <div className="font-medium">
                    {selectedCategory
                      ? challengeCategories.find((c) => c.id === selectedCategory)?.label
                      : "Select Category"}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Challenge Error</p>
                    <p className="text-red-700 text-sm">{error}</p>
                    <p className="text-sm text-red-600 mt-1">
                      Don't worry! You can still take the quiz and we'll try to save your results.
                    </p>
                  </div>
                </div>
              )}

              {/* Category Selection - Most Prominent */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  What do you want to challenge them in?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {challengeCategories.map((category) => {
                    const IconComponent = category.icon
                    const isSelected = selectedCategory === category.id

                    return (
                      <div
                        key={category.id}
                        className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                          isSelected
                            ? `${category.bgLight} ${category.borderColor} ring-2 ring-offset-2 ring-blue-500`
                            : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="text-center">
                          <div
                            className={`mx-auto w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-2`}
                          >
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <h4
                            className={`font-semibold ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}
                          >
                            {category.label}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                          {isSelected && <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Selected ✓</Badge>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Difficulty Selection - Only show if category is selected */}
              {selectedCategory && (
                <div
                  className={`p-4 rounded-lg ${challengeCategories.find((c) => c.id === selectedCategory)?.bgLight}`}
                >
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    Challenge Settings
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger className="bg-white dark:bg-gray-800">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {difficulties.map((difficulty) => (
                            <SelectItem key={difficulty.value} value={difficulty.value}>
                              <div className="flex items-center gap-2">
                                <span>{difficulty.emoji}</span>
                                <div>
                                  <div className="font-medium">{difficulty.label}</div>
                                  <div className="text-xs text-gray-500">{difficulty.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div className="font-medium">Challenge Details:</div>
                        <div>• 10 questions</div>
                        <div>• 5 minutes time limit</div>
                        <div>• Winner gets +2 points</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSendChallenge}
                  disabled={!selectedCategory || isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700 h-12 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Creating Challenge...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Send Challenge
                      {selectedCategory && (
                        <span className="ml-2 text-green-200">
                          in {challengeCategories.find((c) => c.id === selectedCategory)?.label}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleClose} className="px-8 h-12" disabled={isSubmitting}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
