"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { t } = useTranslation("common")

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">{t("home.hero.title")}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t("home.hero.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("home.learning.title")}</CardTitle>
            <CardDescription>{t("home.learning.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("home.learning.body")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t("home.learning.points.levels")}</li>
              <li>{t("home.learning.points.explanations")}</li>
              <li>{t("home.learning.points.progress")}</li>
              <li>{t("home.learning.points.coverage")}</li>
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <a href="/categories" className="w-full">
              <Button size="lg" className="w-full text-sm md:text-base">
                {t("home.learning.cta")}
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("home.challenge.title")}</CardTitle>
            <CardDescription>{t("home.challenge.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("home.challenge.body")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t("home.challenge.points.timed")}</li>
              <li>{t("home.challenge.points.leaderboards")}</li>
              <li>{t("home.challenge.points.badges")}</li>
              <li>{t("home.challenge.points.themed")}</li>
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <a href="/challenges" className="w-full">
              <Button size="lg" variant="outline" className="w-full text-sm md:text-base bg-transparent">
                {t("home.challenge.cta")}
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
