"use client"

import { useEffect } from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  BookOpen,
  Languages,
  MessageSquare,
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
import { IqraLogo } from "@/components/iqra-logo"
import SimpleTopPlayers from "@/components/challenge/simple-top-players"
import ProfileChallengeNotifications from "@/components/challenge/profile-challenge-notifications"

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
      className={`w-full border-0 bg-white shadow-sm ${
        prominent
          ? "ring-2 ring-green-500 shadow-md"
          : ""
      }`}
    >
      <CardHeader className="pb-2 text-center">
        <div
          className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16 ${
            prominent ? "bg-green-100" : "bg-green-50"
          }`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-green-800 sm:text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 text-center sm:px-6">
        <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap justify-center gap-1 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-green-50 px-2 py-1 text-xs text-green-700"
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

export default function HomePage() {
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

  const tagClass =
    "rounded bg-green-50 px-2 py-1 text-xs text-green-700"

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#e6f7eb]">
      <main className="container mx-auto flex w-full max-w-full flex-grow flex-col px-4 py-6 sm:py-12">
        {/* Keep challenge notifications easy to find for returning players. */}
        <div className="mb-6 w-full sm:mb-8">
          <ProfileChallengeNotifications />
        </div>

        {/* IQRA welcome / hero */}
        <header className="mb-6 w-full text-center sm:mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e0f2e3] sm:h-24 sm:w-24">
            <IqraLogo className="h-8 w-8 text-green-700 sm:h-12 sm:w-12" />
          </div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-green-800 sm:text-4xl">
            IQRA
          </h1>
          <p className="text-lg text-green-700 sm:text-xl">
            Islamic Quiz Rivalry App
          </p>
          <p className="mt-2 px-2 text-sm text-gray-600 sm:mt-4 sm:text-base">
            ما شاء الله (Masha Allah!) Welcome to IQRA. Test your knowledge
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {" "}of Islam through learning or challenges.
            </span>
          </p>
        </header>

        {/* Main destinations. Keep Challenge prominent for returning players. */}
        <section
          aria-label="Main IQRA features"
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2"
        >
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />}
            title="IQRA Learn"
            subtitle="Learn at your own pace"
            description="Browse 25 Islamic categories with easy, intermediate, and advanced difficulty levels. Test your knowledge and learn at your own pace."
            tags={["Quran", "Fiqh", "Tafsir", "Hadeeth", "Aqeedah"]}
            href="/categories"
            buttonText="Start Learning"
          />

          <FeatureCard
            prominent
            icon={<Trophy className="h-6 w-6 text-green-700 sm:h-7 sm:w-7" />}
            title="IQRA Challenge"
            subtitle="Your next challenge is only a click away"
            description="Challenge your friends or compete with other IQRA players. Test your knowledge, climb the leaderboard, and earn badges."
            tags={["Friend Challenge", "Daily Challenge", "Player Rivalry"]}
            href="/challenges"
            buttonText="Start Challenges"
          />
        </section>

        {/* Existing Surah Quiz and Top Players cards are retained. */}
        <section
          aria-label="More IQRA features and players"
          className="mx-auto mt-8 w-full max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
            <Card className="w-full border-0 bg-white shadow-sm">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 sm:h-16 sm:w-16">
                  <BookOpen className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
                </div>
                <CardTitle className="text-xl text-green-800 sm:text-2xl">
                  Surah-Quiz
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Focus on vocabulary from a specific Surah
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  Learn vocabulary from specific Surahs. Browse through Surahs
                  to study their context, meaning, and rulings. Test your
                  knowledge on the nearly 40 completed Surahs in this section.
                  We are rapidly adding more and aim to complete all 114
                  Surahs. Insha Allah!
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-1 sm:gap-2">
                  <span className={tagClass}>Surah Quiz</span>
                  <span className={tagClass}>Reason for Revelation</span>
                  <span className={tagClass}>Surah Tafsir</span>
                  <span className={tagClass}>Hadeeth</span>
                  <span className={tagClass}>Seerah &amp; Context</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  <i>
                    As a part of the open-source KALAM web app, Surah-Quizzes
                    are completely free to use and require no sign-in.
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
                    Start Surah Quiz without Sign-in
                  </Link>
                </Button>
              </CardFooter>
            </Card>

                                   {/* Keep the live player/challenge list, but limit height=other cards on the home page. */}
                        <Card className="flex h-full w-full flex-col border-2 border-green-200 bg-white shadow-md">
                          <CardHeader className="pb-2 text-center">
                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 sm:h-16 sm:w-16">
                              <Users className="h-6 w-6 text-green-700 sm:h-7 sm:w-7" />
                            </div>
                            <CardTitle className="text-xl text-green-800 sm:text-2xl">
                              IQRA Players
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                              Find a player and challenge them
                            </CardDescription>
                          </CardHeader>
                        
                          <CardContent className="flex min-h-0 flex-1 flex-col px-2 sm:px-6">
                            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-green-800">
                              <Trophy className="h-4 w-4" />
                              Available players and top scores
                            </div>
                        
                            {/* Cap list height so this card matches Surah-Quiz; list scrolls inside */}
                            <div className="max-h-[280px] w-full overflow-y-auto overflow-x-auto sm:max-h-[320px]">
                              <SimpleTopPlayers />
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
            
                {/* New Arabic vocabulary tracks. Both jump to the Vocabulary section. */}
        <section
          aria-labelledby="arabic-vocabulary-heading"
          className="mx-auto mt-8 w-full max-w-6xl"
        >
          <div className="mb-4 text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700">
              New learning tracks
            </p>
            <h2
              id="arabic-vocabulary-heading"
              className="text-xl font-bold text-green-900 sm:text-2xl"
            >
              Arabic Vocabulary
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Choose the vocabulary that matches your learning goal. Each track
              opens the Vocabulary section on the Categories page.
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
              href="/categories#Vocab"
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
              href="/categories#Vocab"
              buttonText="Explore Modern Vocabulary"
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-500">
            Both buttons currently lead to the Vocabulary bookmark. The
            Categories page must contain an element with id="Vocab" for the
            browser to scroll directly to that section.
          </p>
        </section>
        

        {/* Existing no-donations statement retained. */}
        <section className="mx-auto mb-12 mt-8 w-full max-w-6xl">
          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 sm:p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
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
              Say, "I do not ask you for this any payment, and I am not of the
              pretentious" — Surah Sad 38:86.
            </p>
          </div>
        </section>
      </main>

      {/* Existing footer links retained. */}
      <footer className="mt-8 w-full border-t border-green-200 bg-green-50 p-4 text-center text-sm text-green-800 sm:p-6 dark:border-green-700/30 dark:bg-green-900/20 dark:text-green-300">
        <div className="mb-2 flex items-center justify-center sm:mb-3">
          <MessageSquare className="mr-1 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5 dark:text-green-400" />
          <span>
            For suggestions, WhatsApp{" "}
            <a
              href="https://cvemrafi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
            >
              Rafique
            </a>{" "}
            at +91 7558845528
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
          >
            License 4.0
          </a>
          <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
            About
          </Link>
          <Link
            href="https://github.com/iciso/iqra/blob/main/contribute.md"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Contribute
          </Link>
          <Link
            href="https://github.com/iciso/iqra"
            className="text-emerald-600 hover:text-emerald-700"
          >
            GitHub
          </Link>
          <a
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
          >
            • Iqra 💡 Team AI
          </a>
        </div>
      </footer>
    </div>
  )
}
