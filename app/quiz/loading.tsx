"use client"

import { useTranslation } from "react-i18next"
import { LoadingAnimation } from "@/components/loading-animation"

const QuizLoading = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text={t("quiz.loading.quiz")} />
    </div>
  )
}

export default QuizLoading
