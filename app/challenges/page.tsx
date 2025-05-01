"use client"

import { useState } from "react"
import { getRandomOpponent } from "@/utils/opponents"
import OpponentProfile from "@/components/challenge/opponent-profile"
import { User, Users, HandHeart, Heart, Landmark, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IqraLogo } from "@/components/iqra-logo"

export default function ChallengesPage() {
  // Define a consistent number of questions for all challenges
  const standardQuestionCount = 10

  // State for selected opponent
  const [selectedOpponent, setSelectedOpponent] = useState(() => getRandomOpponent())

  // Add a function to get a new random opponent
  const getNewOpponent = () => {
    setSelectedOpponent(getRandomOpponent())
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

      <h1 className="text-3xl font-bold text-center mb-2">IQRA Challenge Mode</h1>
      <p className="text-center mb-8 text-gray-600">
        Test your Islamic knowledge against time and compete with others on our leaderboards
      </p>

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
            <h2 className="text-xl font-bold dark:text-white">Daily Quiz Challenge</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Quran Knowledge Challenge</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Seerah Special Challenge</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Fiqh Fundamentals</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Hadeeth Knowledge Challenge</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Tafsir Exploration Challenge</h2>
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
            <h2 className="text-xl font-bold dark:text-white">Aqeedah Fundamentals Challenge</h2>
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

        {/* Comparative Religion Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          {/* Glowing border for new challenge */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient-x p-0.5 -z-10"></div>
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
            NEW
          </div>

          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold dark:text-white">Comparative Religion Challenge</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Explore the similarities and differences between Islam and other world religions
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
              <p className="font-medium dark:text-white">98</p>
            </div>
          </div>

          <a
            href={`/quiz?category=comparative&difficulty=easy&challenge=comparative&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Islamic Finance Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
          {/* Animated badge for newest challenge */}
          <div className="absolute top-0 right-0">
            <div className="relative h-16 w-16 overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-green-500 rotate-45 transform origin-bottom-left"></div>
              <span className="absolute top-0 right-0 mt-2 mr-2 text-white text-xs font-bold">NEW</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <HandHeart className="h-6 w-6 text-green-600 mr-2 dark:text-green-400" />
              <h2 className="text-xl font-bold dark:text-white">Islamic Finance Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Test your knowledge of Islamic financial principles, contracts, and ethical investing
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
              <p className="font-medium dark:text-white">87</p>
            </div>
          </div>

          <a
            href={`/quiz?category=islamic-finance&difficulty=easy&challenge=finance&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Tazkiyah (Spiritual Purification) Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          {/* Sparkling new badge */}
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-md shadow-lg">
              NEW
            </span>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pink-600 mr-2 dark:text-pink-400" />
              <h2 className="text-xl font-bold dark:text-white">Tazkiyah Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Explore the depths of spiritual purification and the journey of the soul in Islam
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
              <p className="font-medium dark:text-white">76</p>
            </div>
          </div>

          <a
            href={`/quiz?category=tazkiyah&difficulty=easy&challenge=tazkiyah&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Islamic History and Civilization Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          {/* Animated badge for newest challenge */}
          <div className="absolute -top-3 -left-3">
            <div className="relative inline-flex">
              <div className="w-24 h-24 absolute">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-20"></span>
              </div>
              <span className="relative inline-flex rounded-md bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                NEW
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <Landmark className="h-6 w-6 text-amber-600 mr-2 dark:text-amber-400" />
              <h2 className="text-xl font-bold dark:text-white">Islamic History & Civilization</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Explore the golden ages of Islamic civilization, scientific achievements, and cultural contributions
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
              <p className="font-medium dark:text-white">92</p>
            </div>
          </div>

          <a
            href={`/quiz?category=history&difficulty=easy&challenge=history&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>

        {/* Dawah (Islamic Outreach) Challenge - NEW */}
        <div className="border rounded-lg p-6 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          {/* Floating badge for newest challenge */}
          <div className="absolute top-2 right-2">
            <div className="animate-bounce">
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-teal-600 rounded-md shadow-lg">
                NEW
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 text-teal-600 mr-2 dark:text-teal-400" />
              <h2 className="text-xl font-bold dark:text-white">Dawah Challenge</h2>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            Master the art of Islamic outreach with wisdom, beautiful preaching, and respectful dialogue
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
              <p className="font-medium dark:text-white">68</p>
            </div>
          </div>

          <a
            href={`/quiz?category=dawah&difficulty=easy&challenge=dawah&questions=${standardQuestionCount}&opponent=${selectedOpponent.id}`}
            className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-md transition-colors dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </a>
        </div>
      </div>

      {/* Islamic Medical Ethics - Coming Soon */}
      <div className="border rounded-lg p-6 bg-white shadow-sm mb-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold dark:text-white">Islamic Medical Ethics</h2>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full dark:bg-purple-900 dark:text-purple-100">
            Advanced Study
          </span>
        </div>
        <p className="text-gray-600 mb-4 dark:text-gray-300">
          Explore complex ethical questions in medicine from an Islamic perspective, including bioethics, end-of-life
          care, and modern medical dilemmas
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Questions</h3>
            <p className="font-medium dark:text-white">{standardQuestionCount}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Time Limit</h3>
            <p className="font-medium dark:text-white">10 minutes</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Difficulty</h3>
            <p className="font-medium dark:text-white">Scholar</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Prerequisites</h3>
            <p className="font-medium dark:text-white">Fiqh, Aqeedah</p>
          </div>
        </div>

        <div className="block w-full py-2 px-4 bg-gray-300 text-gray-600 text-center rounded-md cursor-not-allowed dark:bg-gray-700 dark:text-gray-400">
          Coming Soon
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
