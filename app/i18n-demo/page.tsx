"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">i18n Demo Page</h1>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-6">
          {/* Navigation Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Translations</CardTitle>
              <CardDescription>Current language: {i18n.language}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              </div>
            </CardContent>
          </Card>

          {/* Home Page Translations */}
          <Card>
            <CardHeader>
              <CardTitle>Home Page Translations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <strong>Title:</strong>
                  <p className="text-lg">{t("home.title")}</p>
                </div>
                <div>
                  <strong>Subtitle:</strong>
                  <p>{t("home.subtitle")}</p>
                </div>
                <div>
                  <strong>Learning Mode Title:</strong> {t("home.learningMode.title")}
                </div>
                <div>
                  <strong>Challenge Mode Title:</strong> {t("home.challengeMode.title")}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Info */}
          <Card>
            <CardHeader>
              <CardTitle>Language Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Current Language:</strong> {i18n.language}
                </p>
                <p>
                  <strong>Available Languages:</strong> English (en), Tamil (ta)
                </p>
                <p>
                  <strong>Fallback Language:</strong> English (en)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
