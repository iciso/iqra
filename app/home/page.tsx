"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const learnPoints = ["p1", "p2", "p3", "p4", "p5"] as const
const challengePoints = ["p1", "p2", "p3", "p4"] as const

export default function HomePage() {
  const { t } = useTranslation("home")

  return (
    <div className="container mx-auto py-8 md:py-12 w-full">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          {t("legacy.title")}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("legacy.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("legacy.learn.title")}</CardTitle>
            <CardDescription>{t("legacy.learn.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("legacy.learn.body")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              {learnPoints.map((point) => (
                <li key={point}>{t(`legacy.learn.${point}`)}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <Link href="/subjects" className="w-full">
              <Button size="lg" className="w-full text-sm md:text-base">
                {t("legacy.learn.cta")}
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">{t("legacy.challenge.title")}</CardTitle>
            <CardDescription>{t("legacy.challenge.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow px-4 py-4 md:px-6">
            <p>{t("legacy.challenge.body")}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              {challengePoints.map((point) => (
                <li key={point}>{t(`legacy.challenge.${point}`)}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="px-4 pb-4 md:px-6">
            <a href="/challenges" className="w-full">
              <Button size="lg" variant="outline" className="w-full text-sm md:text-base">
                {t("legacy.challenge.cta")}
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
