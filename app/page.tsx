"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Trophy, Users, ArrowRight, Star, Target, Award } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { t, i18n } = useTranslation()
  const { user, signInWithProvider } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ta")) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{t("home.title")}</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t("home.subtitle")}
          </p>

          {!user && (
            <div className="mb-12">
              <Button
                onClick={() => signInWithProvider("google")}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                {t("home.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{t("home.signInPrompt")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learning Mode Card */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.learningMode.title")}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                {t("home.learningMode.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {user ? (
                <Link href="/categories">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {t("home.learningMode.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => signInWithProvider("google")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {t("home.learningMode.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Challenge Mode Card */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-orange-100 dark:bg-orange-900 rounded-full w-fit">
                <Trophy className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.challengeMode.title")}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                {t("home.challengeMode.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {user ? (
                <Link href="/challenges">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    {t("home.challengeMode.button")}
                    <Users className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => signInWithProvider("google")}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  {t("home.challengeMode.button")}
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      {user && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/leaderboard">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="text-center p-6">
                    <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("nav.leaderboard")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">See top performers</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/badges">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="text-center p-6">
                    <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("nav.badges")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Your achievements</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/profile">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="text-center p-6">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("nav.profile")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Your progress</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
