"use client"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

// This demo page is intentionally simple. It only mounts the LanguageSwitcher
// so the named export is exercised and build errors are avoided.
export default function I18nDemoPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">{"i18n Demo"}</h1>
      <p className="text-muted-foreground mb-4">
        {
          "Use the switcher below to toggle languages. This demo does not render translated text, it just verifies the component export."
        }
      </p>
      <LanguageSwitcher />
    </main>
  )
}
