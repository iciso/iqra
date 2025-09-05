"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Star, ArrowRight, Play, Target, Award } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { AuthModal } from "@/components/auth/auth-modal"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setLoading(false)
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Quizzes",
      description: "Test your knowledge across Quran, Hadith, Islamic History, and more",
    },
    {
      icon: Users,
      title: "Challenge Friends",
      description: "Compete with friends and family in Islamic knowledge challenges",
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "See how you rank among other learners in the community",
    },
    {
      icon: Award,
      title: "Earn Badges",
      description: "Unlock achievements as you progress in your Islamic learning journey",
    },
  ]

  const categories = [
    { name: "Quran", count: "500+ Questions", color: "bg-green-100 text-green-800" },
    { name: "Hadith", count: "300+ Questions", color: "bg-blue-100 text-blue-800" },
    { name: "Islamic History", count: "200+ Questions", color: "bg-purple-100 text-purple-800" },
    { name: "Aqeedah", count: "150+ Questions", color: "bg-orange-100 text-orange-800" },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Deepen Your <span className="text-green-600">Islamic Knowledge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of Muslims worldwide in an interactive learning journey through comprehensive quizzes
            covering Quran, Hadith, Islamic history, and more.
          </p>

          {user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/challenges">
                <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                  <Target className="w-5 h-5 mr-2" />
                  Challenge Friends
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              size="lg"
              onClick={() => setShowAuthModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose IQRA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience Islamic learning like never before with our comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into various aspects of Islamic knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className={category.color}>{category.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            {user ? (
              <Link href="/categories">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Browse All Categories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                onClick={() => setShowAuthModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Sign Up to Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join our community of learners and start strengthening your Islamic knowledge today
          </p>

          {user ? (
            <Link href="/categories">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Start Your First Quiz
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              onClick={() => setShowAuthModal(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </section>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
