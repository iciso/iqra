"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Trophy, Users, Star, Play, Target } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { user, signInWithProvider } = useAuth()
  const { t } = useTranslation()

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t("home.welcomeBack")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("home.continueJourney")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Learning Mode Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">{t("home.learningMode.title")}</CardTitle>
                </div>
                <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Interactive quizzes on Islamic topics",
                    "Detailed explanations for each answer",
                    "Progress tracking and statistics",
                    "Multiple categories to choose from",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t(`home.learningMode.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/categories">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Play className="h-4 w-4 mr-2" />
                    {t("home.learningMode.startButton")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Challenge Mode Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">{t("home.challengeMode.title")}</CardTitle>
                </div>
                <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Real-time competitions with other users",
                    "Leaderboards and rankings",
                    "Achievement badges and rewards",
                    "Social features and community",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t(`home.challengeMode.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/challenges">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Target className="h-4 w-4 mr-2" />
                    {t("home.challengeMode.startButton")}
                  </Button>
                </Link>
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">{t("home.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">{t("home.subtitle")}</p>
          <Button
            onClick={() => signInWithProvider("google")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            {t("home.getStarted")}
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{t("home.signInToStart")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Learning Mode Preview */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">{t("home.learningMode.title")}</CardTitle>
              </div>
              <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Interactive quizzes on Islamic topics",
                  "Detailed explanations for each answer",
                  "Progress tracking and statistics",
                  "Multiple categories to choose from",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t(`home.learningMode.features.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenge Mode Preview */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Trophy className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">{t("home.challengeMode.title")}</CardTitle>
              </div>
              <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Real-time competitions with other users",
                  "Leaderboards and rankings",
                  "Achievement badges and rewards",
                  "Social features and community",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {t(`home.challengeMode.features.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
