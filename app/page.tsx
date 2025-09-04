"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Trophy, Users, Award, Play, Zap } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { user, signInWithProvider } = useAuth()
  const { t } = useTranslation()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("home.title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{t("home.subtitle")}</p>
            <Button
              onClick={() => signInWithProvider("google")}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              {t("nav.signIn")}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Learning Mode Card */}
            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-700">{t("home.learningMode.title")}</CardTitle>
                <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{t("home.learningMode.content")}</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("home.learningMode.features.categories")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("home.learningMode.features.questions")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("home.learningMode.features.difficulty")}</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                  <Play className="h-4 w-4 mr-2" />
                  {t("home.learningMode.button")}
                </Button>
              </CardContent>
            </Card>

            {/* Challenge Mode Card */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-700">{t("home.challengeMode.title")}</CardTitle>
                <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{t("home.challengeMode.content")}</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{t("home.challengeMode.features.realTime")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{t("home.challengeMode.features.leaderboard")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{t("home.challengeMode.features.badges")}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled>
                  <Trophy className="h-4 w-4 mr-2" />
                  {t("home.challengeMode.button")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("home.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{t("home.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learning Mode Card */}
          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">{t("home.learningMode.title")}</CardTitle>
              <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">{t("home.learningMode.content")}</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{t("home.learningMode.features.categories")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{t("home.learningMode.features.questions")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{t("home.learningMode.features.difficulty")}</span>
                </div>
              </div>
              <Link href="/categories">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Play className="h-4 w-4 mr-2" />
                  {t("home.learningMode.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Challenge Mode Card */}
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-700">{t("home.challengeMode.title")}</CardTitle>
              <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">{t("home.challengeMode.content")}</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{t("home.challengeMode.features.realTime")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{t("home.challengeMode.features.leaderboard")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{t("home.challengeMode.features.badges")}</span>
                </div>
              </div>
              <Link href="/challenges">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Trophy className="h-4 w-4 mr-2" />
                  {t("home.challengeMode.button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
