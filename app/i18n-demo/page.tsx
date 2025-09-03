import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function I18nDemoPage() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">i18n demo</h1>
      <p className="text-sm text-muted-foreground">
        Toggle language preference. This demo only persists your choice; wiring actual translations depends on your i18n
        library.
      </p>
      <LanguageSwitcher />
      <section className="rounded border p-4">
        <p className="mb-2">
          This is a placeholder area. Once your i18n is wired, this section should display translated strings based on
          your choice.
        </p>
        <ul className="list-disc pl-6 text-sm">
          <li>Persists language in cookie and localStorage</li>
          <li>No SSR params or experimental runtime flags</li>
          <li>Safe for stable Next.js 15.2 builds</li>
        </ul>
      </section>
    </main>
  )
}
