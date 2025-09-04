"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  BookOpen,
  Trophy,
  Users,
  Award,
  User,
  Info,
  LogIn,
  LogOut,
  RefreshCw,
  Globe,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { useEffect, useState } from "react"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [storageLanguage, setStorageLanguage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    setStorageLanguage(localStorage.getItem("language"))
  }, [])

  const refreshPage = () => {
    window.location.reload()
  }

  const navItems = [
    { key: "home", icon: Home },
    { key: "categories", icon: BookOpen },
    { key: "challenges", icon: Trophy },
    { key: "leaderboard", icon: Users },
    { key: "badges", icon: Award },
    { key: "profile", icon: User },
    { key: "about", icon: Info },
  ]

  const authItems = [
    { key: "signIn", icon: LogIn },
    { key: "signOut", icon: LogOut },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading i18n Demo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">🌐 i18n Translation Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Test the complete internationalization system for IQRA
          </p>

          {/* Language Switcher */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <LanguageSwitcher />
            <Button onClick={refreshPage} variant="outline" className="flex items-center gap-2 bg-transparent">
              <RefreshCw className="h-4 w-4" />
              Refresh Page
            </Button>
          </div>

          {/* Current Language Status */}
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Current: {i18n.language === "en" ? "English" : "தமிழ் (Tamil)"}
            </Badge>
            <Badge variant={storageLanguage ? "default" : "destructive"} className="flex items-center gap-2">
              {storageLanguage ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              Storage: {storageLanguage || "None"}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Navigation Translations
              </CardTitle>
              <CardDescription>All navigation items with their translations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Main Navigation
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {navItems.map(({ key, icon: Icon }) => (
                    <div key={key} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Icon className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{t(`nav.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Authentication
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {authItems.map(({ key, icon: Icon }) => (
                    <div key={key} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Icon className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{t(`nav.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home Page Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Home Page Content
              </CardTitle>
              <CardDescription>Complete home page translations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Main Title & Subtitle
                </h4>
                <div className="space-y-2">
                  <p className="font-bold text-lg">{t("home.title")}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t("home.subtitle")}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Learning Mode
                </h4>
                <div className="space-y-2">
                  <p className="font-semibold">{t("home.learningMode.title")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("home.learningMode.description")}</p>
                  <Button size="sm" className="mt-2">
                    {t("home.learningMode.button")}
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Challenge Mode
                </h4>
                <div className="space-y-2">
                  <p className="font-semibold">{t("home.challengeMode.title")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t("home.challengeMode.description")}</p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    {t("home.challengeMode.button")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Persistence Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Language Persistence Test
              </CardTitle>
              <CardDescription>Test if language persists across page refreshes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold mb-2">Test Steps:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Switch to Tamil using the language switcher</li>
                  <li>Click "Refresh Page" button above</li>
                  <li>Verify all content loads in Tamil</li>
                  <li>Switch back to English and refresh again</li>
                  <li>Verify all content loads in English</li>
                </ol>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold mb-2">Expected Behavior:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Language choice should persist after refresh</li>
                  <li>All navigation items should be translated</li>
                  <li>Home page content should be translated</li>
                  <li>Language switcher should show correct language</li>
                </ul>
              </div>

              <Button onClick={refreshPage} className="w-full flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Test Refresh Now
              </Button>
            </CardContent>
          </Card>

          {/* Debug Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Debug Information
              </CardTitle>
              <CardDescription>Technical details about i18n status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-mono text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Language:</span>
                  <Badge variant="outline">{i18n.language}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fallback Language:</span>
                  <Badge variant="outline">{i18n.options.fallbackLng}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Is Initialized:</span>
                  <Badge variant={i18n.isInitialized ? "default" : "destructive"}>
                    {i18n.isInitialized ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Storage Value:</span>
                  <Badge variant={storageLanguage ? "default" : "secondary"}>{storageLanguage || "None"}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Available Languages:</span>
                  <div className="flex gap-1">
                    <Badge variant="outline">en</Badge>
                    <Badge variant="outline">ta</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Sample Translations:</h4>
                <div className="space-y-1 text-sm">
                  <div>
                    <strong>nav.home:</strong> {t("nav.home")}
                  </div>
                  <div>
                    <strong>nav.categories:</strong> {t("nav.categories")}
                  </div>
                  <div>
                    <strong>home.title:</strong> {t("home.title")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">🌐 Complete i18n system with English and Tamil support</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Language preference is saved in localStorage and persists across sessions
          </p>
        </div>
      </div>
    </div>
  )
}
