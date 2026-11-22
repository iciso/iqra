"use client"

import { useEffect } from "react"
import type { ReactNode } from "react"
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
import type { ChallengePlayersResult } from "@/lib/server/leaderboard-data"

function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  tags,
  href,
  buttonText,
  prominent = false,
}: {
  icon: ReactNode
  title: string
  subtitle: string
  description: React.ReactNode
  tags?: string[]
  href: string
  buttonText: string
  prominent?: boolean
}) {
  return (
    <Card
      data-reveal=""
      className={`w-full border-0 bg-white shadow-sm dark:bg-card ${
        prominent
          ? "ring-2 ring-green-500 shadow-md"
          : ""
      }`}
    >
      <CardHeader className="pb-2 text-center">
        <div
          className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16 dark:bg-green-900/40 ${
            prominent ? "bg-green-100" : "bg-green-50"
          }`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-green-800 sm:text-2xl dark:text-green-400">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 text-center sm:px-6">
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-muted-foreground sm:text-base">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap justify-center gap-1 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-green-50 px-2 py-1 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center pt-0">
        <Button
          asChild
          className={`px-6 py-2 text-sm sm:text-base ${
            prominent
              ? "bg-green-700 hover:bg-green-800"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

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

  const tagClass =
    "rounded bg-green-50 px-2 py-1 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300"

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Homepage hero: "The Night of Iqra" (docs/design/homepage-2026-11/c.html) in IQRA green and white. */}
      <IqraHero />

      <main className="container mx-auto flex w-full max-w-full flex-grow flex-col px-4 py-6 sm:py-12">
        {/* Existing Surah Quiz and Top Players cards are retained. */}
        <section
          aria-label="More IQRA features and players"
          className="mx-auto mt-8 w-full max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
            <Card data-reveal="" className="w-full border-0 bg-white shadow-sm dark:bg-card">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 sm:h-16 sm:w-16 dark:bg-green-900/40">
                  <BookOpen className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
                </div>
                <CardTitle className="text-xl text-green-800 sm:text-2xl dark:text-green-400">
                  Surah-Quiz
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Focus on vocabulary from a specific Surah
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-muted-foreground sm:text-base">
                  Learn vocabulary from specific Surahs. Browse through Surahs in KALAM
                  to study their context, meaning, and rulings. Self-test your
                  knowledge on the nearly 40 completed Surahs in KALAM, 
                  without entry into a Leaderboard.
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-1 sm:gap-2">
                  <span className={tagClass}>Surah Quiz</span>
                  <span className={tagClass}>Reason for Revelation</span>
                  <span className={tagClass}>Surah Tafsir</span>
                  <span className={tagClass}>Hadeeth</span>
                  <span className={tagClass}>Seerah &amp; Context</span>
                </div>
                 <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-muted-foreground sm:text-base">
                  <i>
                    Also Surah-Quizzes are available in Easy or Translation only Quizzes in KALAM app, and 
                    as an Expert version with Translation, Tafsir, and Vocab Quizzes in IQRA app.
                  </i>
                </p>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button
                  asChild
                  className="bg-green-600 px-6 py-2 text-sm hover:bg-green-700 sm:text-base"
                >
                  <Link
                    href="https://v0-kalam.vercel.app/quizzes/surah"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Easy Quiz: 40 Surahs 
                  </Link>
                </Button>
             </CardFooter>
             <CardFooter className="flex justify-center pt-0">
                

                 <Button
                  asChild
                  className="bg-green-600 px-6 py-2 text-sm hover:bg-green-700 sm:text-base"
                >
                  <Link
                    href="/subjects#quran-surah-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Expert Quiz: 5 Surahs
                  </Link>
                </Button>

              </CardFooter>
            </Card>

                                   {/* Keep the live player/challenge list, but limit height=other cards on the home page. */}
                        <Card data-reveal="" className="flex h-full w-full flex-col border-2 border-green-200 bg-white shadow-md dark:border-green-800 dark:bg-card">
                          <CardHeader className="pb-2 text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 sm:h-16 sm:w-16 dark:bg-green-900/40">
                              <Users className="h-6 w-6 text-green-700 sm:h-7 sm:w-7" />
                            </div>
                            <CardTitle className="text-xl text-green-800 sm:text-2xl dark:text-green-400">
                              IQRA Players
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                              Find a player and challenge them
                            </CardDescription>
                          </CardHeader>
                        
                          <CardContent className="flex min-h-0 flex-1 flex-col px-2 sm:px-6">
                            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-green-800 dark:text-green-400">
                              <Trophy className="h-4 w-4" />
                              Available players and top scores
                            </div>
                        
                            {/* Cap list height so this card matches Surah-Quiz; list scrolls inside */}
                            <div className="max-h-[280px] w-full overflow-y-auto overflow-x-auto sm:max-h-[320px]">
                              <SimpleTopPlayers initialPlayers={initialPlayers} />
                            </div>
                          </CardContent>
                        
                          <CardFooter className="mt-auto flex justify-center pt-0">
                            <Button
                              asChild
                              className="bg-green-700 px-6 py-2 text-sm hover:bg-green-800 sm:text-base"
                            >
                              <Link href="/challenges">View All Players</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                    </div>
        </section>
            
                {/* New Arabic vocabulary tracks. Both jump to the Vocabulary section. */}
        <section
          aria-labelledby="arabic-vocabulary-heading"
          className="mx-auto mt-8 w-full max-w-6xl"
        >
          <div data-reveal="" className="mb-4 text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
              New learning tracks
            </p>
            <h2
              id="arabic-vocabulary-heading"
              className="text-xl font-bold text-green-900 sm:text-2xl dark:text-green-300"
            >
              Arabic Vocabulary
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-muted-foreground sm:text-base">
              Choose the vocabulary that matches your learning goal. Each track
              opens the Vocabulary section on the Subjects page.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <FeatureCard
              icon={
                <ScrollText className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
              }
              title="Quranic Arabic Vocabulary"
              subtitle="Understand the words of the Qur’an"
              description="Practise words and expressions found in the Qur’an, with meanings and Quranic context as the vocabulary collection grows."
              tags={["Quranic words", "Meanings", "Quran references"]}
              href="/subjects#vocab"
              buttonText="Explore Quranic Vocabulary"
            />

            <FeatureCard
              icon={
                <Languages className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
              }
              title="Modern Arabic Vocabulary"
              subtitle="Build contemporary Arabic vocabulary"
              description="Practise Modern Standard Arabic words for reading, writing, and everyday communication, with practical examples as they are added."
              tags={["Modern Standard Arabic", "Everyday words", "Examples"]}
              href="/subjects#Vocab"
              buttonText="Explore Modern Vocabulary"
            />
          </div>
              <p data-reveal="" className="mt-3 text-center text-xs text-gray-500 dark:text-muted-foreground"> 
                  Both Arabic Vocabulary, and Surah Quiz buttons lead to self-learning tracks. 
                  For challenges go to the{' '} 
                  <a href="/challenges" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"> 
                    Challenges 
                  </a>{' '} 
                  page 
              </p>
        </section>
        

        {/* Existing no-donations statement retained. */}
        <section id="no-donations" className="mx-auto mb-12 mt-8 w-full max-w-6xl scroll-mt-20">
          <div data-reveal="" className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 sm:p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
            <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl dark:text-emerald-300">
              No Donations &amp; Charity
            </h2>
            <p className="mb-3 text-sm text-emerald-700 sm:text-base dark:text-emerald-200">
              IQRA and KALAM apps are built without charity, zakat, or
              donations – a practice aligned with the true Sunnah of the Noble
              Prophets, and the Righteous.
            </p>
            <p className="mb-4 font-arabic text-xl text-emerald-600 sm:text-3xl dark:text-emerald-300" dir="rtl">
              قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ وَمَا أَنَا مِنَ الْمُتَكَلِّفِينَ
            </p>
            <p className="mb-4 text-sm text-emerald-600 sm:text-base dark:text-emerald-300">
              Say, &quot;I do not ask you for this any payment, and I am not of the
              pretentious&quot; — Surah Sad 38:86.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
