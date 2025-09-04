"use client"

import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function I18nDemo() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t("demo.title", "i18n Demo")}</h1>
        <LanguageSwitcher />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("demo.welcome", "Welcome")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t("demo.description", "This is a demonstration of internationalization.")}</p>
        </CardContent>
      </Card>
    </div>
  )
}
