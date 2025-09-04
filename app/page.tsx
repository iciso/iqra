"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, CheckCircle, Globe, Zap, Award } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { user, signInWithProvider } = useAuth()
  const { t } = useTranslation()

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">{t("home.title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("home.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Learning Mode Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">{t("home.learningMode.title")}</CardTitle>
                </div>
                <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/categories">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {t("home.learningMode.button")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Challenge Mode Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">{t("home.challengeMode.title")}</CardTitle>
                </div>
                <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/challenges">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Trophy className="mr-2 h-4 w-4" />
                    {t("home.challengeMode.button")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Badges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{t("home.signInPrompt")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learning Mode Preview */}
          <Card className="hover:shadow-lg transition-shadow opacity-90">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">{t("home.learningMode.title")}</CardTitle>
              </div>
              <CardDescription className="text-lg">{t("home.learningMode.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => signInWithProvider("google")}>
                <BookOpen className="mr-2 h-4 w-4" />
                {t("home.learningMode.button")}
              </Button>
            </CardContent>
          </Card>

          {/* Challenge Mode Preview */}
          <Card className="hover:shadow-lg transition-shadow opacity-90">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">{t("home.challengeMode.title")}</CardTitle>
              </div>
              <CardDescription className="text-lg">{t("home.challengeMode.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => signInWithProvider("google")}>
                <Trophy className="mr-2 h-4 w-4" />
                {t("home.challengeMode.button")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
