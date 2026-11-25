"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Trans, useTranslation } from "react-i18next"
import {
  BookOpen,
  Languages,
  ScrollText,
  Trophy,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IqraHero from "@/components/home/iqra-hero"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"
import SimpleTopPlayers from "@/components/challenge/simple-top-players"
import SectionHeading from "@/components/shared/section-heading"
import FeatureCard from "@/components/shared/feature-card"
import type { ChallengePlayersResult } from "@/lib/server/leaderboard-data"

// One card family for every homepage card (Surah-Quiz, Players, Vocabulary, No Donations).
const cardClass = "w-full rounded-xl border bg-card shadow-sm"
// Same tinted square as components/shared/feature-card.tsx.
const iconSquareClass =
  "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 sm:h-14 sm:w-14 dark:bg-green-900/40"
const titleClass = "text-xl text-green-800 sm:text-2xl dark:text-green-400"
// Smaller muted note text (Rafique's notes under Surah-Quiz and Vocabulary).
const noteClass = "text-sm leading-relaxed text-muted-foreground"
// ONE solid button per card; any other button on the card is the outline one.
const primaryButtonClass = "bg-green-600 px-6 text-sm text-white hover:bg-green-700 sm:text-base"
const outlineButtonClass =
  "border-green-600 px-6 text-sm text-green-700 hover:bg-green-50 hover:text-green-800 sm:text-base dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/40"
const sectionClass = "py-12 lg:py-16"

export default function HomeClient({ initialPlayers }: { initialPlayers?: ChallengePlayersResult }) {
  const { t } = useTranslation("home")

  // Preserve the existing service-worker registration.
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) =>
            console.log(
              "IQRA Service Worker registered with scope:",
              registration.scope,
            ),
          )
          .catch((error) =>
            console.error(
              "IQRA Service Worker registration failed:",
              error,
            ),
          )
      }

      window.addEventListener("load", registerServiceWorker)
      return () => window.removeEventListener("load", registerServiceWorker)
    }
  }, [])

  // Sections below the hero rise in once as they scroll into view.
  useRevealOnScroll()

  return (
    <div className="flex w-full flex-col">
      {/* Homepage hero: "The Night of Iqra" (docs/design/homepage-2026-11/c.html) in IQRA green and white. */}
      <IqraHero />

      {/* One container for every section below the hero; sections are spaced evenly (py-12 lg:py-16). */}
      <div className="mx-auto flex w-full max-w-6xl flex-grow flex-col px-4 sm:px-6">
        {/* Rafique's Surah-Quiz and IQRA Players cards. */}
        <section aria-label={t("surah.sectionLabel")} className={sectionClass}>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <FeatureCard
              data-reveal=""
              icon={<BookOpen aria-hidden="true" />}
              title={t("surah.title")}
              subtitle={t("surah.subtitle")}
              description={t("surah.description")}
              tags={[
                t("surah.tags.quiz"),
                t("surah.tags.revelation"),
                t("surah.tags.tafsir"),
                t("surah.tags.hadeeth"),
                t("surah.tags.seerah"),
              ]}
              actions={
                <>
                  {/* KALAM is a separate site, so this one still opens in a new tab. */}
                  <Button asChild className={primaryButtonClass}>
                    <Link
                      href="https://v0-kalam.vercel.app/quizzes/surah"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("surah.easyCta")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className={outlineButtonClass}>
                    <Link href="/subjects#quran-surah-studies">{t("surah.expertCta")}</Link>
                  </Button>
                </>
              }
            >
              <p className={noteClass}>
                {t("surah.note")}
              </p>
            </FeatureCard>

            {/* Live players: the top 6 as one plain list (no inner scroll); every player is on /challenges. */}
            <Card data-reveal="" data-players-card="" className={`flex flex-col ${cardClass}`}>
              <CardHeader className="pb-2 text-center">
                <div className={iconSquareClass}>
                  <Users className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
                </div>
                <CardTitle className={titleClass}>{t("players.title")}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t("players.subtitle")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b pb-2">
                  <p className="flex items-center gap-2 text-sm font-medium text-green-800 dark:text-green-400">
                    <Trophy className="h-4 w-4" />
                    {t("players.available")}
                  </p>
                  <p className="text-xs text-muted-foreground">{t("players.ranking")}</p>
                </div>
                <SimpleTopPlayers initialPlayers={initialPlayers} compact limit={6} />
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button asChild className={primaryButtonClass}>
                  <Link href="/challenges">{t("players.viewAll")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* New Arabic vocabulary tracks. Both jump to the Vocabulary section. */}
        <section aria-labelledby="arabic-vocabulary-heading" className={`border-t ${sectionClass}`}>
          <div data-reveal="">
            <SectionHeading
              id="arabic-vocabulary-heading"
              eyebrow={t("vocab.eyebrow")}
              title={t("vocab.title")}
              lede={t("vocab.lede")}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureCard
              data-reveal=""
              icon={<ScrollText aria-hidden="true" />}
              title={t("vocab.quranic.title")}
              subtitle={t("vocab.quranic.subtitle")}
              description={t("vocab.quranic.description")}
              tags={[t("vocab.quranic.tags.words"), t("vocab.quranic.tags.meanings"), t("vocab.quranic.tags.references")]}
              actions={
                <Button asChild className={primaryButtonClass}>
                  <Link href="/subjects#vocab">{t("vocab.quranic.cta")}</Link>
                </Button>
              }
            />

            <FeatureCard
              data-reveal=""
              icon={<Languages aria-hidden="true" />}
              title={t("vocab.modern.title")}
              subtitle={t("vocab.modern.subtitle")}
              description={t("vocab.modern.description")}
              tags={[t("vocab.modern.tags.msa"), t("vocab.modern.tags.everyday"), t("vocab.modern.tags.examples")]}
              actions={
                <Button asChild className={primaryButtonClass}>
                  <Link href="/subjects#vocab">{t("vocab.modern.cta")}</Link>
                </Button>
              }
            />
          </div>
          <p data-reveal="" className={`mt-6 text-center ${noteClass}`}>
            <Trans
              t={t}
              i18nKey="vocab.note"
              components={{
                link: (
                  <Link
                    href="/challenges"
                    className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                  />
                ),
              }}
            />
          </p>
        </section>

        {/* Rafique's no-donations statement. */}
        <section id="no-donations" className={`scroll-mt-20 border-t ${sectionClass}`}>
          <div
            data-reveal=""
            className={`${cardClass} border-emerald-200 bg-emerald-50/60 p-6 dark:border-emerald-800 dark:bg-emerald-900/20`}
          >
            <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl dark:text-emerald-300">
              {t("noDonations.title")}
            </h2>
            <p className="mb-3 text-sm text-emerald-700 sm:text-base dark:text-emerald-200">
              {t("noDonations.body")}
            </p>
            <p className="mb-4 font-arabic text-xl text-emerald-600 sm:text-3xl dark:text-emerald-300" dir="rtl" lang="ar">
              {t("noDonations.verse")}
            </p>
            <p className="text-sm text-emerald-600 sm:text-base dark:text-emerald-300">
              {t("noDonations.translation")}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
