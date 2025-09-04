"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { BookOpen, Users, Trophy, Zap, Star, Globe, Heart, Target, Award, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const features = [
    {
      icon: BookOpen,
      title: t("categories"),
      description: t("selectCategory"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: t("challenges"),
      description: t("findChallengers"),
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Trophy,
      title: t("leaderboard"),
      description: "Compete with other players",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Award,
      title: t("badges"),
      description: t("achievements"),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const stats = [
    { label: t("categories"), value: "12+", icon: BookOpen },
    { label: t("totalQuestions"), value: "500+", icon: Target },
    { label: "Active Players", value: "1000+", icon: Users },
    { label: "Daily Challenges", value: "50+", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
              <Star className="w-4 h-4 mr-1" />
              {t("appTitle")} - Islamic Learning Platform
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-green-600 dark:text-green-400">{t("appTitle")}</span>
              <br />
              <span className="text-3xl sm:text-5xl">Islamic Quiz Platform</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{t("appDescription")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link href="/categories">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {t("quiz")} {t("categories")}
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  onClick={() => setShowAuthModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  {t("signIn")} & Start Learning
                </Button>
              )}

              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                  <Globe className="mr-2 h-5 w-5" />
                  {t("about")} {t("appTitle")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <stat.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("features")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover comprehensive Islamic knowledge through interactive quizzes, challenges, and community learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Islamic Knowledge {t("categories")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore various aspects of Islamic knowledge from Quran and Hadith to Islamic history and jurisprudence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: t("quran"), desc: t("quranDesc"), icon: BookOpen, color: "green" },
              { name: t("fiqh"), desc: t("fiqhDesc"), icon: Target, color: "blue" },
              { name: t("hadeeth"), desc: t("hadeethDesc"), icon: Heart, color: "purple" },
              { name: t("seerah"), desc: t("seerahDesc"), icon: Users, color: "orange" },
              { name: t("aqeedah"), desc: t("aqeedahDesc"), icon: Star, color: "red" },
              { name: t("history"), desc: t("historyDesc"), icon: Clock, color: "indigo" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg`}>
                      <category.icon className={`w-5 h-5 text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            {user ? (
              <Link href="/categories">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore All {t("categories")}
                </Button>
              </Link>
            ) : (
              <Button size="lg" onClick={() => setShowAuthModal(true)} className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="mr-2 h-5 w-5" />
                {t("signIn")} to Start Learning
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600 dark:bg-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Islamic Learning Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Muslims worldwide in expanding their knowledge of Islam through interactive learning
          </p>

          {user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start {t("quiz")}
                </Button>
              </Link>
              <Link href="/challenges">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Find {t("challenges")}
                </Button>
              </Link>
            </div>
          ) : (
            <Button size="lg" variant="secondary" onClick={() => setShowAuthModal(true)} className="px-8 py-3 text-lg">
              <Zap className="mr-2 h-5 w-5" />
              {t("signIn")} Now - It's Free!
            </Button>
          )}
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
