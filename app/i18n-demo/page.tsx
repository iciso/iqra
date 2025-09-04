"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { useEffect, useState } from "react"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">i18n Demo Page</h1>
          <p className="text-gray-600 mb-4">Current language: {i18n.language}</p>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-6">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Translations</CardTitle>
              <CardDescription>All navigation menu items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <strong>Home:</strong> {t("nav.home")}
                </div>
                <div>
                  <strong>Categories:</strong> {t("nav.categories")}
                </div>
                <div>
                  <strong>Challenges:</strong> {t("nav.challenges")}
                </div>
                <div>
                  <strong>Leaderboard:</strong> {t("nav.leaderboard")}
                </div>
                <div>
                  <strong>Badges:</strong> {t("nav.badges")}
                </div>
                <div>
                  <strong>Profile:</strong> {t("nav.profile")}
                </div>
                <div>
                  <strong>About:</strong> {t("nav.about")}
                </div>
                <div>
                  <strong>Sign In:</strong> {t("nav.signIn")}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home Page Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Home Page Translations</CardTitle>
              <CardDescription>Main content translations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong>Title:</strong>
                <p className="text-lg">{t("home.title")}</p>
              </div>
              <div>
                <strong>Subtitle:</strong>
                <p>{t("home.subtitle")}</p>
              </div>
              <div>
                <strong>Learning Mode Title:</strong>
                <p>{t("home.learningMode.title")}</p>
              </div>
              <div>
                <strong>Challenge Mode Title:</strong>
                <p>{t("home.challengeMode.title")}</p>
              </div>
            </CardContent>
          </Card>

          {/* Language Test */}
          <Card>
            <CardHeader>
              <CardTitle>Language Test</CardTitle>
              <CardDescription>Test language switching functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Current Language:</strong> {i18n.language === "en" ? "English" : "Tamil (தமிழ்)"}
                </p>
                <p>
                  <strong>Sample Text:</strong> {t("home.signInPrompt")}
                </p>
                <Button
                  onClick={() => {
                    const newLang = i18n.language === "en" ? "ta" : "en"
                    i18n.changeLanguage(newLang)
                    localStorage.setItem("language", newLang)
                  }}
                >
                  Switch to {i18n.language === "en" ? "Tamil" : "English"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
