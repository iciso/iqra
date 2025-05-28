"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { getRandomOpponent } from "@/utils/opponents"
import OpponentProfile from "@/components/challenge/opponent-profile"
import { User, Users, BookOpen, BookText, History, Scale, Scroll, BookMarked, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IqraLogo } from "@/components/iqra-logo"

export default function ChallengesPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Define a consistent number of questions for all challenges
  const standardQuestionCount = 10

  // State for selected opponent
  const [selectedOpponent, setSelectedOpponent] = useState(() => getRandomOpponent())

  // Add a function to get a new random opponent
  const getNewOpponent = () => {
    setSelectedOpponent(getRandomOpponent())
  }

  useEffect(() => {
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

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        router.push("/")
      } else {
        setUser(session.user)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
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

      {/* Challenger Info Section */}
      <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Your Challenger</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <OpponentProfile opponent={selectedOpponent} size="lg" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {selectedOpponent.type === "bot"
                  ? "IQRA Bot challenges you to test your Islamic knowledge!"
                  : `${selectedOpponent.name} has challenged you to a quiz battle!`}
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  <Users className="mr-1 h-3 w-3" />
                  {Math.floor(Math.random() * 300) + 100} Challenges Won
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  <User className="mr-1 h-3 w-3" />
                  Level {selectedOpponent.level || "Advanced"}
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline" className="dark:border-green-700 dark:text-green-400" onClick={getNewOpponent}>
            Change Opponent
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Daily Quiz Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
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

          <a
            href={`/quiz?category=quran&difficulty=easy&challenge=daily&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Quran Knowledge Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
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

          <a
            href={`/quiz?category=quran&difficulty=advanced&challenge=quran&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Seerah Special Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <History className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Seerah Special Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Test your knowledge about the life of Prophet Muhammad (PBUH)
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
              <p className="font-medium dark:text-white">{standardQuestionCount}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
              <p className="font-medium dark:text-white">6 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
              <p className="font-medium dark:text-white">Advanced</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">132</p>
            </div>
          </div>

          <a
            href={`/quiz?category=seerah&difficulty=advanced&challenge=seerah&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Fiqh Fundamentals */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <Scale className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Fiqh Fundamentals</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Challenge yourself on the basics of Islamic jurisprudence
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
              <p className="font-medium dark:text-white">Beginner</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">201</p>
            </div>
          </div>

          <a
            href={`/quiz?category=fiqh&difficulty=easy&challenge=fiqh&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Hadeeth Knowledge Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <Scroll className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Hadeeth Knowledge Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Test your knowledge of the sayings and actions of Prophet Muhammad (PBUH)
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
              <p className="font-medium dark:text-white">{standardQuestionCount}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
              <p className="font-medium dark:text-white">6 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
              <p className="font-medium dark:text-white">Intermediate</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">157</p>
            </div>
          </div>

          <a
            href={`/quiz?category=hadeeth&difficulty=easy&challenge=hadeeth&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Tafsir Exploration Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
          {/* New badge ribbon */}
          <div className="absolute -right-12 top-7 bg-yellow-500 text-white px-10 py-1 transform rotate-45 shadow-md">
            NEW
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <BookMarked className="h-6 w-6 text-yellow-600 mr-2 dark:text-yellow-400" />
              <h2 className="text-xl font-bold dark:text-white">Tafsir Exploration Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Dive deep into the interpretation and explanation of the Holy Quran
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
              <p className="font-medium dark:text-white">Advanced</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">124</p>
            </div>
          </div>

          <a
            href={`/quiz?category=tafsir&difficulty=advanced&challenge=tafsir&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Aqeedah Fundamentals Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          {/* Pulsing new badge */}
          <div className="absolute -top-3 -right-3">
            <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 items-center justify-center text-white text-xs font-bold">
                NEW
              </span>
            </span>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <GraduationCap className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Aqeedah Fundamentals Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Test your knowledge of Islamic creed and core beliefs of the faith
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
              <p className="font-medium dark:text-white">{standardQuestionCount}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
              <p className="font-medium dark:text-white">6 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
              <p className="font-medium dark:text-white">Intermediate</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Participants</h3>
              <p className="font-medium dark:text-white">112</p>
            </div>
          </div>

          <a
            href={`/quiz?category=aqeedah&difficulty=easy&challenge=aqeedah&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
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
