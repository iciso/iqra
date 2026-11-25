import en from "@/locales/en/common.json"
import bn from "@/locales/bn/common.json"
import ta from "@/locales/ta/common.json"
import en_home from "@/locales/en/pages/home.json"
import en_subjects from "@/locales/en/pages/subjects.json"
import en_about from "@/locales/en/pages/about.json"
import en_how from "@/locales/en/pages/how.json"
import en_challenges from "@/locales/en/pages/challenges.json"
import en_profile from "@/locales/en/pages/profile.json"
import bn_home from "@/locales/bn/pages/home.json"
import bn_subjects from "@/locales/bn/pages/subjects.json"
import bn_about from "@/locales/bn/pages/about.json"
import bn_how from "@/locales/bn/pages/how.json"
import bn_challenges from "@/locales/bn/pages/challenges.json"
import bn_profile from "@/locales/bn/pages/profile.json"
import ta_home from "@/locales/ta/pages/home.json"
import ta_subjects from "@/locales/ta/pages/subjects.json"
import ta_about from "@/locales/ta/pages/about.json"
import ta_how from "@/locales/ta/pages/how.json"
import ta_challenges from "@/locales/ta/pages/challenges.json"
import ta_profile from "@/locales/ta/pages/profile.json"
import type { Locale } from "@/lib/i18n/config"

// UI strings: common.json plus one file per page group under locales/<lng>/pages/.
// All are small, so they ship in the client bundle. That keeps every page static:
// no cookie or header is read on the server.
export const PAGE_NAMESPACES = ["home", "subjects", "about", "how", "challenges", "profile"] as const

export const resources: Record<Locale, Record<string, Record<string, unknown>>> = {
  en: { common: en, home: en_home, subjects: en_subjects, about: en_about, how: en_how, challenges: en_challenges, profile: en_profile },
  bn: { common: bn, home: bn_home, subjects: bn_subjects, about: bn_about, how: bn_how, challenges: bn_challenges, profile: bn_profile },
  ta: { common: ta, home: ta_home, subjects: ta_subjects, about: ta_about, how: ta_how, challenges: ta_challenges, profile: ta_profile },
}
