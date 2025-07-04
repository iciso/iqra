"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, BookOpen, Clock, Users } from "lucide-react"
import Link from "next/link"
import { getQuizData } from "@/data/quiz-data-manager"
import { useState, useEffect } from "react"

interface CategoryStats {
  totalQuestions: number
  completedQuestions: number
  averageScore: number
  lastAttempt: string | null
}

export default function CategoriesPage() {
  const categories = getQuizData()
  const [categoryStats, setCategoryStats] = useState<Record<string, CategoryStats>>({})

  useEffect(() => {
    // Load category statistics from localStorage
    const loadCategoryStats = () => {
      const stats: Record<string, CategoryStats> = {}
      categories.forEach((category) => {
        const easyQuestions = category.levels.easy?.length || 0
        const advancedQuestions = category.levels.advanced?.length || 0
        const totalQuestions = easyQuestions + advancedQuestions

        // Get stats from localStorage (mock data for now)
        const completed = Math.floor(Math.random() * totalQuestions)
        const avgScore = Math.floor(Math.random() * 100)

        stats[category.id] = {
          totalQuestions,
          completedQuestions: completed,
          averageScore: avgScore,
          lastAttempt: Math.random() > 0.5 ? new Date().toISOString() : null,
        }
      })
      setCategoryStats(stats)
    }

    loadCategoryStats()
  }, [categories])

  const getProgressPercentage = (categoryId: string): number => {
    const stats = categoryStats[categoryId]
    if (!stats || stats.totalQuestions === 0) return 0
    return Math.round((stats.completedQuestions / stats.totalQuestions) * 100)
  }

  const getDifficultyColor = (categoryId: string): string => {
    const stats = categoryStats[categoryId]
    if (!stats) return "bg-gray-200"

    if (stats.averageScore >= 80) return "bg-green-500"
    if (stats.averageScore >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Quiz Categories</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Explore 15 comprehensive categories of Islamic knowledge. Test your understanding and deepen your faith
          through interactive quizzes.
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{categories.length}</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">
                {Object.values(categoryStats).reduce((sum, stats) => sum + stats.totalQuestions, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Questions</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">
                {Object.values(categoryStats).reduce((sum, stats) => sum + stats.completedQuestions, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">
                {Math.round(
                  Object.values(categoryStats).reduce((sum, stats) => sum + stats.averageScore, 0) /
                    Object.keys(categoryStats).length,
                ) || 0}
                %
              </p>
              <p className="text-sm text-muted-foreground">Avg Score</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const stats = categoryStats[category.id]
          const progress = getProgressPercentage(category.id)
          const easyCount = category.levels.easy?.length || 0
          const advancedCount = category.levels.advanced?.length || 0

          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription className="text-sm">{easyCount + advancedCount} questions</CardDescription>
                    </div>
                  </div>
                  {stats && stats.averageScore > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {stats.averageScore}% avg
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{category.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question Breakdown */}
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Easy: {easyCount}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                    Advanced: {advancedCount}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={`/quiz?category=${category.id}&level=easy`}>Start Easy</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/quiz?category=${category.id}&level=advanced`}>Advanced</Link>
                  </Button>
                </div>

                {/* Last Attempt */}
                {stats?.lastAttempt && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Last attempt: {new Date(stats.lastAttempt).toLocaleDateString()}
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Start with any category that interests you. Each quiz is designed to help you learn and grow in your
              Islamic knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quiz">Take Random Quiz</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/challenges">Challenge Friends</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
