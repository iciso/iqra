"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Trophy, Star, Zap } from "lucide-react"
import Link from "next/link"
import { categories } from "@/data/categories"

export default function CategoriesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("mixed")

  const difficulties = [
    { value: "easy", label: "Easy", color: "bg-green-100 text-green-800" },
    { value: "intermediate", label: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
    { value: "advanced", label: "Advanced", color: "bg-red-100 text-red-800" },
    { value: "mixed", label: "Mixed", color: "bg-purple-100 text-purple-800" },
  ]

  const getDifficultyColor = (difficulty: string) => {
    const diff = difficulties.find((d) => d.value === difficulty)
    return diff?.color || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4 dark:text-green-400">Choose Your Quiz Category</h1>
        <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
          Test your Islamic knowledge across various topics and difficulty levels
        </p>

        {/* Difficulty Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.value}
              onClick={() => setSelectedDifficulty(difficulty.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDifficulty === difficulty.value
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {difficulty.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-300 dark:hover:border-green-600"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <category.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="text-lg dark:text-white">{category.title}</CardTitle>
                </div>
                <Badge className={getDifficultyColor(selectedDifficulty)}>{selectedDifficulty}</Badge>
              </div>
              <CardDescription className="text-sm dark:text-gray-300">{category.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span className="dark:text-gray-300">{category.questionCount} questions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="dark:text-gray-300">5 min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="dark:text-gray-300">{Math.floor(Math.random() * 500) + 100} taken</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="dark:text-gray-300">{(Math.random() * 2 + 3).toFixed(1)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link href={`/quiz?category=${category.id}&difficulty=${selectedDifficulty}`}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Quiz
                  </Button>
                </Link>

                <Link href={`/quiz?category=${category.id}&difficulty=${selectedDifficulty}&mode=challenge`}>
                  <Button
                    variant="outline"
                    className="w-full border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-950"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Challenge Mode
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
          <Trophy className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Ready for a Challenge?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Compete with other learners and climb the leaderboard!
          </p>
          <div className="space-x-4">
            <Link href="/challenges">
              <Button className="bg-green-600 hover:bg-green-700">
                <Zap className="h-4 w-4 mr-2" />
                Challenge Others
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-950"
              >
                <Trophy className="h-4 w-4 mr-2" />
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
