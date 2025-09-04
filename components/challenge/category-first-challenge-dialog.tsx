"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Clock, Target, Users, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { getAllCategories } from "@/data/categories"
import { useLanguage } from "@/contexts/language-context"

interface CategoryFirstChallengeDialogProps {
  isOpen: boolean
  onClose: () => void
  opponent: {
    id: string
    username: string
    full_name?: string
    total_score: number
    best_percentage: number
  }
}

export default function CategoryFirstChallengeDialog({ isOpen, onClose, opponent }: CategoryFirstChallengeDialogProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const categories = getAllCategories()
  const difficulties = [
    { id: "easy", name: t("easy"), description: "Perfect for beginners", color: "bg-green-100 text-green-800" },
    {
      id: "intermediate",
      name: t("intermediate"),
      description: "For those with some knowledge",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "advanced",
      name: t("advanced"),
      description: "For advanced learners",
      color: "bg-red-100 text-red-800",
    },
  ]

  const handleStartChallenge = () => {
    if (!selectedCategory || !selectedDifficulty) return

    // Create a fallback challenge ID for demo purposes
    const challengeId = `fallback-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

    // Navigate to quiz with challenge parameters
    const queryParams = new URLSearchParams({
      category: selectedCategory,
      difficulty: selectedDifficulty,
      challenge: challengeId,
      opponentId: opponent.id,
      opponentName: opponent.full_name || opponent.username,
      challengerTurn: "true", // This user is starting the challenge
    })

    router.push(`/quiz?${queryParams.toString()}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="h-6 w-6 text-yellow-500" />
            {t("challenge")} {opponent.full_name || opponent.username}
          </DialogTitle>
          <DialogDescription>
            Choose a category and difficulty level for your challenge. You'll go first, then your opponent will take the
            same quiz.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Opponent Info */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-lg font-semibold">
                    {(opponent.full_name || opponent.username).charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{opponent.full_name || opponent.username}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      {opponent.total_score} {t("points")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      {opponent.best_percentage}% best
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Category Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Select {t("categories")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.slice(0, 6).map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedCategory === category.id ? "ring-2 ring-green-500 bg-green-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs">{category.description}</CardDescription>
                    <div className="mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {category.levels.easy.length +
                          category.levels.intermediate.length +
                          category.levels.advanced.length}{" "}
                        questions
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Select Difficulty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {difficulties.map((difficulty) => (
                <Card
                  key={difficulty.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedDifficulty === difficulty.id ? "ring-2 ring-green-500 bg-green-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center justify-between">
                      {difficulty.name}
                      <Badge className={difficulty.color}>{difficulty.name}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs">{difficulty.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenge Info */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t("challenge")} Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• You'll take the quiz first (5-7 minutes)</li>
                <li>• Your opponent will be notified and take the same quiz</li>
                <li>• Higher score wins! In case of tie, faster time wins</li>
                <li>• Both scores will be added to the leaderboard</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              {t("cancel")}
            </Button>
            <Button
              onClick={handleStartChallenge}
              disabled={!selectedCategory || !selectedDifficulty}
              className="bg-green-600 hover:bg-green-700"
            >
              <Trophy className="mr-2 h-4 w-4" />
              Start {t("challenge")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
