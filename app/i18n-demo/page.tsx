"use client"

import { I18nProvider } from "@/components/i18n/i18n-provider"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  return (
    <I18nProvider>
      <I18nDemoInner />
    </I18nProvider>
  )
}

function I18nDemoInner() {
  const { t } = useTranslation()

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{t("app.title")}</h1>
        <LanguageSwitcher />
      </header>

      <section className="space-y-2">
        <p className="text-muted-foreground">{t("app.tagline")}</p>
        <div className="rounded border p-4">
          <p>
            {t("demo.greeting", {
              name: "Iqra",
            })}
          </p>
          <p className="mt-2">{t("demo.instructions")}</p>
        </div>
      </section>
    </main>
  )
}
