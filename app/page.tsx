"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Star, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { user } = useAuth()
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ta")) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  // Show loading state until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Loading...</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{t("home.title")}</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            {t("home.subtitle")}
          </p>

          {!user && (
            <div className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t("home.signInPrompt")}</p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                {t("home.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Learning Mode Card */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.learningMode.title")}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                {t("home.learningMode.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={user ? "/categories" : "/auth"}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="mr-2 h-4 w-4" />
                  {t("home.learningMode.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Challenge Mode Card */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.challengeMode.title")}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                {t("home.challengeMode.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={user ? "/challenges" : "/auth"}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Users className="mr-2 h-4 w-4" />
                  {t("home.challengeMode.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access for Signed-in Users */}
        {user && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Quick Access</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/categories">
                <Button variant="outline" size="lg" className="bg-white/80 dark:bg-gray-800/80">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {t("nav.categories")}
                </Button>
              </Link>
              <Link href="/challenges">
                <Button variant="outline" size="lg" className="bg-white/80 dark:bg-gray-800/80">
                  <Users className="mr-2 h-5 w-5" />
                  {t("nav.challenges")}
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button variant="outline" size="lg" className="bg-white/80 dark:bg-gray-800/80">
                  <Trophy className="mr-2 h-5 w-5" />
                  {t("nav.leaderboard")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
