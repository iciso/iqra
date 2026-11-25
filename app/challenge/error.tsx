"use client"

import { useTranslation } from "react-i18next"

export default function ChallengeError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation("challenges")
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("error.challengeTitle")}</h1>
      <p className="mb-8 text-gray-600 max-w-md">{t("error.challengeText")}</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        {t("error.tryAgain")}
      </button>
    </div>
  )
}
