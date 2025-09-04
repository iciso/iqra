"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { useTranslation } from "react-i18next"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>i18n Demo Page</CardTitle>
          <CardDescription>Test the internationalization functionality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Language Switcher</h3>
            <LanguageSwitcher />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Current Language</h3>
            <p className="text-gray-600">
              Current language: <strong>{i18n.language}</strong>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation Translations</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                Home: <strong>{t("nav.home")}</strong>
              </div>
              <div>
                Categories: <strong>{t("nav.categories")}</strong>
              </div>
              <div>
                Challenges: <strong>{t("nav.challenges")}</strong>
              </div>
              <div>
                Leaderboard: <strong>{t("nav.leaderboard")}</strong>
              </div>
              <div>
                Badges: <strong>{t("nav.badges")}</strong>
              </div>
              <div>
                Profile: <strong>{t("nav.profile")}</strong>
              </div>
              <div>
                About: <strong>{t("nav.about")}</strong>
              </div>
              <div>
                Sign In: <strong>{t("nav.signIn")}</strong>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Home Page Translations</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Title:</strong> {t("home.title")}
              </div>
              <div>
                <strong>Subtitle:</strong> {t("home.subtitle")}
              </div>
              <div>
                <strong>Learning Mode:</strong> {t("home.learningMode.title")}
              </div>
              <div>
                <strong>Challenge Mode:</strong> {t("home.challengeMode.title")}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
