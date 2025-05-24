"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Star } from "lucide-react"

export function AuthDemo() {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">IQRA</h1>
        </div>

        <div className="flex items-center space-x-4">
          {user ? <UserMenu /> : <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>}
        </div>
      </header>

      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to IQRA</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Test your Islamic knowledge with interactive quizzes, compete with friends, and earn badges as you learn.
        </p>
      </div>

      {/* User Status */}
      {user ? (
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">
              Welcome back, {user.user_metadata?.full_name || "Scholar"}!
            </CardTitle>
            <CardDescription className="text-green-600">You're signed in as {user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="font-semibold">Rank</p>
                <p className="text-sm text-gray-600">Beginner</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Points</p>
                <p className="text-sm text-gray-600">0</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <p className="font-semibold">Badges</p>
                <p className="text-sm text-gray-600">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Ready to Start Learning?</CardTitle>
            <CardDescription className="text-blue-600">
              Sign up to track your progress, compete with others, and unlock achievements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setShowAuthModal(true)} className="w-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <BookOpen className="h-12 w-12 text-green-600 mb-4" />
            <CardTitle>Interactive Quizzes</CardTitle>
            <CardDescription>
              Test your knowledge with carefully crafted questions about Islam, Quran, and Islamic history.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <CardTitle>Challenge Friends</CardTitle>
            <CardDescription>Compete with friends and other learners in real-time quiz challenges.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Trophy className="h-12 w-12 text-yellow-600 mb-4" />
            <CardTitle>Earn Badges</CardTitle>
            <CardDescription>
              Unlock achievements and climb the leaderboard as you progress in your learning journey.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
