"use client"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">i18n Demo</h1>
      <p className="text-sm text-muted-foreground">
        Use the language switcher to persist your preferred language (en/ta). Replace this with your actual i18n usage.
      </p>

      <LanguageSwitcher className="inline-block" />

      <section className="space-y-2">
        <h2 className="text-lg font-medium">Demo strings</h2>
        <ul className="list-disc pl-6 text-sm">
          <li>Home</li>
          <li>Categories</li>
          <li>Challenges</li>
          <li>Profile</li>
        </ul>
        <p className="text-sm">
          Tamil label examples you might use: முகப்பு (Home), வகைகள் (Categories), சவால்கள் (Challenges), சுயவிவரம் (Profile)
        </p>
      </section>
    </main>
  )
}
