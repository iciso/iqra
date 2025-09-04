"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Star, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { user, signInWithProvider } = useAuth()
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

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">{t("home.title")}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("home.subtitle")}
            </p>
          </div>

          {user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Play className="mr-2 h-5 w-5" />
                  {t("home.learningMode.button")}
                </Button>
              </Link>
              <Link href="/challenges">
                <Button size="lg" variant="outline">
                  <Trophy className="mr-2 h-5 w-5" />
                  {t("home.challengeMode.button")}
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">{t("home.signInPrompt")}</p>
              <Button
                size="lg"
                onClick={() => signInWithProvider("google")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {t("home.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learning Mode Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">{t("home.learningMode.title")}</CardTitle>
              <CardDescription className="text-lg text-gray-600">{t("home.learningMode.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {user ? (
                <Link href="/categories" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    {t("home.learningMode.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => signInWithProvider("google")}
                >
                  {t("nav.signIn")} {t("home.learningMode.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Challenge Mode Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">{t("home.challengeMode.title")}</CardTitle>
              <CardDescription className="text-lg text-gray-600">{t("home.challengeMode.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {user ? (
                <Link href="/challenges" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {t("home.challengeMode.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => signInWithProvider("google")}
                >
                  {t("nav.signIn")} {t("home.challengeMode.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">21+</div>
              <div className="text-gray-600">{i18n.language === "en" ? "Categories" : "வகைகள்"}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">{i18n.language === "en" ? "Questions" : "கேள்விகள்"}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">{i18n.language === "en" ? "Badges" : "பதக்கங்கள்"}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-gray-600">{i18n.language === "en" ? "Learning" : "கற்றல்"}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
