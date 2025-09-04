"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">i18n Demo Page</h1>
          <p className="text-lg text-gray-600 mb-4">
            Current language: <strong>{i18n.language}</strong>
          </p>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-6">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Translations</CardTitle>
              <CardDescription>Testing all navigation link translations</CardDescription>
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
              <CardDescription>Testing home page content translations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <strong>Title:</strong> {t("home.title")}
                </div>
                <div>
                  <strong>Subtitle:</strong> {t("home.subtitle")}
                </div>
                <div>
                  <strong>Learning Mode Title:</strong> {t("home.learningMode.title")}
                </div>
                <div>
                  <strong>Learning Mode Description:</strong> {t("home.learningMode.description")}
                </div>
                <div>
                  <strong>Challenge Mode Title:</strong> {t("home.challengeMode.title")}
                </div>
                <div>
                  <strong>Challenge Mode Description:</strong> {t("home.challengeMode.description")}
                </div>
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
                <p>Current language: {i18n.language}</p>
                <p>Saved language: {typeof window !== "undefined" ? localStorage.getItem("language") : "N/A"}</p>
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
