"use client"

import { useEffect } from "react"
import Link from "next/link"
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
        <section aria-label="More IQRA features and players" className={sectionClass}>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <FeatureCard
              data-reveal=""
              icon={<BookOpen aria-hidden="true" />}
              title="Surah-Quiz"
              subtitle="Focus on vocabulary from a specific Surah"
              description={
                <>
                  Learn vocabulary from specific Surahs. Browse through Surahs in KALAM
                  to study their context, meaning, and rulings. Self-test your
                  knowledge on the nearly 40 completed Surahs in KALAM,
                  without entry into a Leaderboard.
                </>
              }
              tags={["Surah Quiz", "Reason for Revelation", "Surah Tafsir", "Hadeeth", "Seerah & Context"]}
              actions={
                <>
                  {/* KALAM is a separate site, so this one still opens in a new tab. */}
                  <Button asChild className={primaryButtonClass}>
                    <Link
                      href="https://v0-kalam.vercel.app/quizzes/surah"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Easy Quiz: 40 Surahs
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className={outlineButtonClass}>
                    <Link href="/subjects#quran-surah-studies">Start Expert Quiz: 5 Surahs</Link>
                  </Button>
                </>
              }
            >
              <p className={noteClass}>
                Also Surah-Quizzes are available in Easy or Translation only Quizzes in KALAM app, and
                as an Expert version with Translation, Tafsir, and Vocab Quizzes in IQRA app.
              </p>
            </FeatureCard>

            {/* Live players: the top 6 as one plain list (no inner scroll); every player is on /challenges. */}
            <Card data-reveal="" data-players-card="" className={`flex flex-col ${cardClass}`}>
              <CardHeader className="pb-2 text-center">
                <div className={iconSquareClass}>
                  <Users className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
                </div>
                <CardTitle className={titleClass}>IQRA Players</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Find a player and challenge them
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b pb-2">
                  <p className="flex items-center gap-2 text-sm font-medium text-green-800 dark:text-green-400">
                    <Trophy className="h-4 w-4" />
                    Available players and top scores
                  </p>
                  <p className="text-xs text-muted-foreground">Ranked by best score %, then points</p>
                </div>
                <SimpleTopPlayers initialPlayers={initialPlayers} compact limit={6} />
              </CardContent>

              <CardFooter className="flex justify-center">
                <Button asChild className={primaryButtonClass}>
                  <Link href="/challenges">View All Players</Link>
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
              eyebrow="New learning tracks"
              title="Arabic Vocabulary"
              lede="Choose the vocabulary that matches your learning goal. Each track opens the Vocabulary section on the Subjects page."
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureCard
              data-reveal=""
              icon={<ScrollText aria-hidden="true" />}
              title="Quranic Arabic Vocabulary"
              subtitle="Understand the words of the Qur’an"
              description="Practise words and expressions found in the Qur’an, with meanings and Quranic context as the vocabulary collection grows."
              tags={["Quranic words", "Meanings", "Quran references"]}
              actions={
                <Button asChild className={primaryButtonClass}>
                  <Link href="/subjects#vocab">Explore Quranic Vocabulary</Link>
                </Button>
              }
            />

            <FeatureCard
              data-reveal=""
              icon={<Languages aria-hidden="true" />}
              title="Modern Arabic Vocabulary"
              subtitle="Build contemporary Arabic vocabulary"
              description="Practise Modern Standard Arabic words for reading, writing, and everyday communication, with practical examples as they are added."
              tags={["Modern Standard Arabic", "Everyday words", "Examples"]}
              actions={
                <Button asChild className={primaryButtonClass}>
                  <Link href="/subjects#Vocab">Explore Modern Vocabulary</Link>
                </Button>
              }
            />
          </div>
          <p data-reveal="" className={`mt-6 text-center ${noteClass}`}>
            Both Arabic Vocabulary, and Surah Quiz buttons lead to self-learning tracks.
            For challenges go to the{" "}
            <Link
              href="/challenges"
              className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
            >
              Challenges
            </Link>{" "}
            page
          </p>
        </section>

        {/* Rafique's no-donations statement. */}
        <section id="no-donations" className={`scroll-mt-20 border-t ${sectionClass}`}>
          <div
            data-reveal=""
            className={`${cardClass} border-emerald-200 bg-emerald-50/60 p-6 dark:border-emerald-800 dark:bg-emerald-900/20`}
          >
            <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl dark:text-emerald-300">
              No Donations &amp; Charity
            </h2>
            <p className="mb-3 text-sm text-emerald-700 sm:text-base dark:text-emerald-200">
              IQRA and KALAM apps are built without charity, zakat, or
              donations – a practice aligned with the true Sunnah of the Noble
              Prophets, and the Righteous.
            </p>
            <p className="mb-4 font-arabic text-xl text-emerald-600 sm:text-3xl dark:text-emerald-300" dir="rtl" lang="ar">
              قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ وَمَا أَنَا مِنَ الْمُتَكَلِّفِينَ
            </p>
            <p className="text-sm text-emerald-600 sm:text-base dark:text-emerald-300">
              Say, &quot;I do not ask you for this any payment, and I am not of the
              pretentious&quot; — Surah Sad 38:86.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
