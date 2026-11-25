"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()

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

export default NotFound
