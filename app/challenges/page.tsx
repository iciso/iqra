"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { getRandomOpponent } from "@/utils/opponents"
import OpponentProfile from "@/components/challenge/opponent-profile"
import ChallengeSenderV3 from "@/components/challenge/challenge-sender-v3"
import ProfileChallengeNotifications from "@/components/challenge/profile-challenge-notifications"
import { User, Users, BookOpen, BookText, Bot, Shuffle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IqraLogo } from "@/components/iqra-logo"
import type { UserProfile } from "@/lib/supabase-queries"

export default function ChallengesPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Define a consistent number of questions for all challenges
  const standardQuestionCount = 10

  // State for selected opponent (can be bot or real user)
  const [selectedOpponent, setSelectedOpponent] = useState<any>(() => getRandomOpponent())
  const [isRealUser, setIsRealUser] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("quran")

  // Category mapping for better descriptions
  const categoryDescriptions = {
    quran: "Quran",
    seerah: "Seerah (Prophet's Biography)",
    fiqh: "Fiqh (Islamic Jurisprudence)",
    hadeeth: "Hadeeth",
    aqeedah: "Aqeedah (Islamic Creed)",
    tafsir: "Tafsir (Quran Commentary)",
    comparative: "Comparative Religion",
    "islamic-finance": "Islamic Finance",
    tazkiyah: "Tazkiyah (Spiritual Purification)",
    history: "Islamic History & Civilization",
    dawah: "Dawah (Islamic Outreach)",
  }

  // Add a function to get a new random bot opponent
  const getNewBotOpponent = () => {
    const newOpponent = getRandomOpponent()
    setSelectedOpponent(newOpponent)
    setIsRealUser(false)
  }

  // Handle real user selection
  const handleRealUserSelect = (challenger: UserProfile) => {
    console.log("🎯 CHALLENGES PAGE V3: Real user selected:", challenger.username)
    setSelectedOpponent({
      id: challenger.id,
      name: challenger.full_name || challenger.username,
      type: "user",
      avatar: challenger.avatar_url,
      level: challenger.best_percentage > 80 ? "Expert" : challenger.best_percentage > 60 ? "Advanced" : "Intermediate",
      score: challenger.total_score,
    })
    setIsRealUser(true)
  }

  // Handle direct challenge start
  const handleAcceptChallenge = () => {
    const challengeUrl = `/quiz?category=${selectedCategory}&difficulty=mixed&challenge=direct&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`
    window.location.href = challengeUrl
  }

  useEffect(() => {
    console.log("🏠 CHALLENGES PAGE V3: Component loaded - using V3 component")
    const checkAuth = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (data?.session?.user) {
          setUser(data.session.user)
        } else {
          // Redirect to home if not authenticated
          router.push("/")
          return
        }
      } catch (err) {
        console.error("Error checking auth:", err)
        router.push("/")
        return
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e6f7eb] px-4">
        <div className="text-center">
          <IqraLogo className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-green-700" />
          <p className="text-green-700 text-sm sm:text-base">Loading Challenges...</p>
          <div className="mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to home
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      {/* Add Back to Home link with logo */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
        >
          <IqraLogo size="sm" isLink={false} />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* User Welcome */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">IQRA Challenge Mode</h1>
        <p className="text-gray-600 mb-2">Welcome back, {user.email || user.user_metadata?.full_name || "believer"}!</p>
        <p className="text-gray-600">
          Test your Islamic knowledge against time and compete with others on our leaderboards
        </p>
      </div>

      {/* Pending Challenges Section - Show this instead of bot challenger */}
      <div className="mb-8">
        <ProfileChallengeNotifications />
      </div>

      {/* Challenge Sender - Always show this for finding and challenging users */}
      <div className="mb-8">
        <ChallengeSenderV3
          onChallengerSelect={handleRealUserSelect}
          currentChallenger={isRealUser ? selectedOpponent : null}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Daily Quiz Challenge */}
        <div
          className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedCategory("quran")}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <BookText className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Daily Quiz Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Test your knowledge with our daily quiz covering various Islamic topics
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
              <p className="font-medium dark:text-white">{standardQuestionCount}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
              <p className="font-medium dark:text-white">5 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
              <p className="font-medium dark:text-white">Mixed</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">245</p>
            </div>
          </div>

          <Button
            onClick={() => {
              setSelectedCategory("quran")
              handleAcceptChallenge()
            }}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </Button>
        </div>

        {/* Quran Knowledge Challenge */}
        <div
          className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedCategory("quran")}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Quran Knowledge Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            How well do you know the Quran? Take this challenge to find out!
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
              <p className="font-medium dark:text-white">{standardQuestionCount}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
              <p className="font-medium dark:text-white">7 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
              <p className="font-medium dark:text-white">Intermediate</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">189</p>
            </div>
          </div>

          <Button
            onClick={() => {
              setSelectedCategory("quran")
              handleAcceptChallenge()
            }}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="/leaderboard"
          className="inline-block py-2 px-6 border border-green-300 text-green-700 rounded-md hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/30"
        >
          View Global Leaderboard
        </a>
      </div>
    </div>
  )
}
