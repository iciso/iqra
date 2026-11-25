"use client"

import Link from "next/link"
import { Trophy } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LoadingAnimation } from "@/components/loading-animation"
import PageHeader from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type LoadingKey = "leaderboard" | "challenges" | "challenge" | "quizChallenges"

// Small client islands so the challenge server pages stay static.
export const ChallengeLoading = ({ textKey }: { textKey: LoadingKey }) => {
  const { t } = useTranslation("challenges")
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text={t(`loading.${textKey}`)} />
    </div>
  )
}

export const ChallengesHeader = () => {
  const { t } = useTranslation("challenges")
  return <PageHeader title={t("page.title")} subtitle={t("page.subtitle")} />
}

export const ChallengeComingSoon = () => {
  const { t } = useTranslation("challenges")
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">{t("comingSoon.heading")}</h1>
      <p className="text-center mb-8">{t("comingSoon.intro")}</p>

      <div className="max-w-md mx-auto border border-gray-200 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">{t("comingSoon.title")}</h2>
        <p className="mb-6">{t("comingSoon.text")}</p>
        <Link href="/subjects" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {t("comingSoon.browse")}
        </Link>
      </div>
    </div>
  )
}

export const ChallengeNotFoundView = () => {
  const { t } = useTranslation("challenges")
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("notFound.title")}</h1>
      <p className="mb-8 text-gray-600 max-w-md">{t("notFound.text")}</p>
      <Link href="/" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        {t("notFound.home")}
      </Link>
    </div>
  )
}

export const ChallengeResultsNotFound = () => {
  const { t } = useTranslation("challenges")
  return (
    <div className="mx-auto w-full max-w-6xl sm:px-6 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="text-center py-8">
          <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-200 mb-2">{t("resultsNotFound.title")}</p>
          <p className="text-sm text-gray-400 mb-6">{t("resultsNotFound.text")}</p>
          <Link href="/challenges">
            <Button className="bg-green-600 hover:bg-green-700">{t("resultsNotFound.back")}</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
