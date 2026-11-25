"use client"

import { Globe } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LOCALES, nativeName } from "@/lib/i18n/config"
import useLanguageSwitch from "@/hooks/use-language-switch"

/** Header dropdown: pick English, বাংলা or தமிழ். */
const LanguageSwitcher = () => {
  const { t, current, change } = useLanguageSwitch()

  return (
    <Select value={current} onValueChange={change}>
      <SelectTrigger aria-label={t("language.label")} className="h-11 w-auto min-w-11 gap-2 rounded-full px-3">
        <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {LOCALES.map((locale) => (
          <SelectItem key={locale} value={locale} lang={locale} className="min-h-11">
            {nativeName[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher
