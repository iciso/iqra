"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">i18n Translation Demo</h1>
          <p className="text-gray-600 mb-4">Current language: {i18n.language}</p>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-6">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Translations</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <strong>Home:</strong> {t("nav.home")}
              </div>
              <div>
                <strong>Quiz:</strong> {t("nav.categories")}
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
            </CardContent>
          </Card>

          {/* Home Page Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Home Page Translations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong>Title:</strong> {t("home.title")}
              </div>
              <div>
                <strong>Subtitle:</strong> {t("home.subtitle")}
              </div>
              <div>
                <strong>Get Started:</strong> {t("home.getStarted")}
              </div>
              <div>
                <strong>Welcome Back:</strong> {t("home.welcomeBack")}
              </div>
            </CardContent>
          </Card>

          {/* Learning Mode Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Mode Translations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong>Title:</strong> {t("home.learningMode.title")}
              </div>
              <div>
                <strong>Description:</strong> {t("home.learningMode.description")}
              </div>
              <div>
                <strong>Start Button:</strong> {t("home.learningMode.startButton")}
              </div>
              <div>
                <strong>Features:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("home.learningMode.features.0")}</li>
                  <li>{t("home.learningMode.features.1")}</li>
                  <li>{t("home.learningMode.features.2")}</li>
                  <li>{t("home.learningMode.features.3")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Challenge Mode Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge Mode Translations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong>Title:</strong> {t("home.challengeMode.title")}
              </div>
              <div>
                <strong>Description:</strong> {t("home.challengeMode.description")}
              </div>
              <div>
                <strong>Start Button:</strong> {t("home.challengeMode.startButton")}
              </div>
              <div>
                <strong>Features:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("home.challengeMode.features.0")}</li>
                  <li>{t("home.challengeMode.features.1")}</li>
                  <li>{t("home.challengeMode.features.2")}</li>
                  <li>{t("home.challengeMode.features.3")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
