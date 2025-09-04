"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">{t("home.welcome")}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t("home.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("home.learningMode.title")}</CardTitle>
            <CardDescription>{t("home.learningMode.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("home.learningMode.content")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t("home.learningMode.feature1")}</li>
              <li>{t("home.learningMode.feature2")}</li>
              <li>{t("home.learningMode.feature3")}</li>
              <li>{t("home.learningMode.feature4")}</li>
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <a href="/categories" className="w-full">
              <Button size="lg" className="w-full text-sm md:text-base">
                {t("home.learningMode.button")}
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("home.challengeMode.title")}</CardTitle>
            <CardDescription>{t("home.challengeMode.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("home.challengeMode.content")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t("home.challengeMode.feature1")}</li>
              <li>{t("home.challengeMode.feature2")}</li>
              <li>{t("home.challengeMode.feature3")}</li>
              <li>{t("home.challengeMode.feature4")}</li>
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <a href="/challenges" className="w-full">
              <Button size="lg" variant="outline" className="w-full text-sm md:text-base bg-transparent">
                {t("home.challengeMode.button")}
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
