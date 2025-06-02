"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, TrendingUp, Calendar, Clock, Award, BarChart3, Zap, Brain, Star } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { getUserStatistics, type UserStatistics } from "@/lib/supabase-queries"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  trend?: "up" | "down" | "neutral"
  color?: "green" | "blue" | "purple" | "orange"
}

function StatCard({ title, value, subtitle, icon, trend, color = "blue" }: StatCardProps) {
  const colorClasses = {
    green: "bg-green-50 border-green-200 text-green-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
  }

  return (
    <Card className={`${colorClasses[color]} border-2`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-white/50">{icon}</div>
            <div>
              <p className="text-sm font-medium opacity-80">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
              {subtitle && <p className="text-xs opacity-60">{subtitle}</p>}
            </div>
          </div>
          {trend && (
            <div
              className={`text-xs px-2 py-1 rounded-full ${
                trend === "up"
                  ? "bg-green-100 text-green-700"
                  : trend === "down"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
              }`}
            >
              {trend === "up" ? "↗" : trend === "down" ? "↘" : "→"}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface CategoryPerformanceProps {
  categories: Array<{
    name: string
    score: number
    total: number
    percentage: number
  }>
}

function CategoryPerformance({ categories }: CategoryPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Category Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{category.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {category.score}/{category.total}
                </span>
                <Badge
                  variant={category.percentage >= 80 ? "default" : category.percentage >= 60 ? "secondary" : "outline"}
                >
                  {category.percentage}%
                </Badge>
              </div>
            </div>
            <Progress value={category.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

interface RecentTrendsProps {
  trends: Array<{
    period: string
    score: number
    questions: number
    percentage: number
  }>
}

function RecentTrends({ trends }: RecentTrendsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Recent Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{trend.period}</p>
                <p className="text-sm text-gray-600">{trend.questions} questions</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{trend.score} pts</p>
                <Badge variant={trend.percentage >= 80 ? "default" : "secondary"}>{trend.percentage}%</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function StatisticsDashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState<UserStatistics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadStatistics()
    }
  }, [user])

  const loadStatistics = async () => {
    if (!user) return

    try {
      setLoading(true)
      const userStats = await getUserStatistics(user.id)
      setStats(userStats)
    } catch (error) {
      console.error("Error loading statistics:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="h-16 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <Brain className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600">No statistics available yet.</p>
          <p className="text-sm text-gray-500">Complete some quizzes to see your stats!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Score"
          value={stats.totalScore.toLocaleString()}
          subtitle={`${stats.totalQuestions} questions`}
          icon={<Trophy className="h-5 w-5" />}
          color="green"
          trend="up"
        />
        <StatCard
          title="Best Performance"
          value={`${stats.bestPercentage}%`}
          subtitle="Personal best"
          icon={<Star className="h-5 w-5" />}
          color="purple"
        />
        <StatCard
          title="Overall Accuracy"
          value={`${stats.overallAccuracy}%`}
          subtitle="All time average"
          icon={<Target className="h-5 w-5" />}
          color="blue"
        />
        <StatCard
          title="Current Streak"
          value={stats.currentStreak}
          subtitle="Days active"
          icon={<Zap className="h-5 w-5" />}
          color="orange"
          trend={stats.currentStreak > 0 ? "up" : "neutral"}
        />
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Challenges Won"
          value={stats.challengesWon}
          subtitle={`${stats.challengesTotal} total`}
          icon={<Award className="h-5 w-5" />}
          color="green"
        />
        <StatCard
          title="Perfect Scores"
          value={stats.perfectScores}
          subtitle="100% accuracy"
          icon={<Star className="h-5 w-5" />}
          color="purple"
        />
        <StatCard
          title="Study Time"
          value={`${Math.round(stats.totalTimeMinutes / 60)}h`}
          subtitle={`${stats.totalTimeMinutes % 60}m total`}
          icon={<Clock className="h-5 w-5" />}
          color="blue"
        />
        <StatCard
          title="Active Days"
          value={stats.activeDays}
          subtitle="Days with activity"
          icon={<Calendar className="h-5 w-5" />}
          color="orange"
        />
      </div>

      {/* Category Performance and Recent Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryPerformance categories={stats.categoryPerformance} />
        <RecentTrends trends={stats.recentTrends} />
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Difficulty Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.difficultyBreakdown.map((diff, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="capitalize">{diff.level}</span>
                <div className="flex items-center gap-2">
                  <Progress value={diff.percentage} className="w-20 h-2" />
                  <span className="text-sm font-medium">{diff.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Learning Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Strongest Category:</span>
              <span className="text-sm font-medium">{stats.strongestCategory}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Needs Improvement:</span>
              <span className="text-sm font-medium">{stats.weakestCategory}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Avg. Session:</span>
              <span className="text-sm font-medium">{stats.averageSessionLength}m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Best Time:</span>
              <span className="text-sm font-medium">{stats.bestTimeOfDay}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Badges Earned:</span>
              <span className="text-sm font-medium">{stats.badgesEarned}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Rank:</span>
              <span className="text-sm font-medium">#{stats.globalRank}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Longest Streak:</span>
              <span className="text-sm font-medium">{stats.longestStreak} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Next Milestone:</span>
              <span className="text-sm font-medium">{stats.nextMilestone}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
