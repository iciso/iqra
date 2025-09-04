"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Globe, Home, Users, Trophy, BookOpen, Award, User, Info, LogIn } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { useEffect, useState } from "react"

export default function I18nDemoPage() {
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

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Loading i18n Demo...</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">i18n Translation Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Test all translations between English and Tamil
          </p>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="text-sm">
              Current Language: {i18n.language === "en" ? "English" : "தமிழ்"}
            </Badge>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Navigation Translations
              </CardTitle>
              <CardDescription>All navigation menu items in both languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Home className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{t("nav.home")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">{t("nav.categories")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">{t("nav.challenges")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium">{t("nav.leaderboard")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Award className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">{t("nav.badges")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <User className="h-4 w-4 text-indigo-600" />
                  <span className="font-medium">{t("nav.profile")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Info className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{t("nav.about")}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <LogIn className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{t("nav.signIn")}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home Page Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Home Page Content</CardTitle>
              <CardDescription>Main page titles, descriptions, and content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title and Subtitle */}
              <div className="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("home.title")}</h2>
                <p className="text-gray-600 dark:text-gray-300">{t("home.subtitle")}</p>
              </div>

              <Separator />

              {/* Learning Mode */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                    {t("home.learningMode.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("home.learningMode.description")}</p>
                  <div className="space-y-2">
                    {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">{t("home.learningMode.button")}</Button>
                </div>

                {/* Challenge Mode */}
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                    {t("home.challengeMode.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("home.challengeMode.description")}</p>
                  <div className="space-y-2">
                    {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    {t("home.challengeMode.button")}
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Call to Action */}
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mb-4">
                  {t("home.getStarted")}
                </Button>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("home.signInPrompt")}</p>
              </div>
            </CardContent>
          </Card>

          {/* Language Persistence Test */}
          <Card>
            <CardHeader>
              <CardTitle>Language Persistence Test</CardTitle>
              <CardDescription>Test that language choice persists across page reloads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Test Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                    <li>Switch to Tamil using the language switcher above</li>
                    <li>Refresh this page (F5 or Ctrl+R)</li>
                    <li>Verify that the page loads in Tamil</li>
                    <li>Switch back to English and refresh again</li>
                    <li>Verify that the page loads in English</li>
                  </ol>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200">Current Language:</div>
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">
                      {i18n.language === "en" ? "English" : "தமிழ் (Tamil)"}
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Stored in localStorage:</div>
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                      {typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "Loading..."}
                    </div>
                  </div>
                </div>

                <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
                  🔄 Refresh Page to Test Persistence
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Debug Information */}
          <Card>
            <CardHeader>
              <CardTitle>Debug Information</CardTitle>
              <CardDescription>Technical details about the i18n implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold">i18next Status:</div>
                  <div className="pl-4 space-y-1">
                    <div>Initialized: {i18n.isInitialized ? "✅ Yes" : "❌ No"}</div>
                    <div>Current Language: {i18n.language}</div>
                    <div>Fallback Language: {i18n.options.fallbackLng}</div>
                    <div>Available Languages: {i18n.languages.join(", ")}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold">Browser Storage:</div>
                  <div className="pl-4 space-y-1">
                    <div>
                      localStorage:{" "}
                      {typeof window !== "undefined" ? localStorage.getItem("language") || "Not set" : "Loading..."}
                    </div>
                    <div>Component Mounted: {mounted ? "✅ Yes" : "❌ No"}</div>
                    <div>Hydration Safe: ✅ Yes</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
