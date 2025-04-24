"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Trophy, Users, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2">IQRA</h1>
        <p className="text-xl text-green-600 dark:text-green-500">Islamic Quiz Rivalry App</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-md mx-auto">
          ما شاء الله (Masha Allah!) Welcome to IQRA. Test your knowledge of Islam through learning or challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow dark:border-green-800">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
              <Book className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">IQRA Learn</CardTitle>
            <CardDescription className="text-green-600 dark:text-green-500">Learn at your own pace</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Browse through 11 Islamic categories with easy and advanced difficulty levels. Test your knowledge and
              learn at your own pace.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                Quran
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                Fiqh
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                Tafsir
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                Hadeeth
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                Aqeedah
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/categories">
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                Start Learning
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow dark:border-green-800">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
              <Trophy className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">ICHAL Challenge</CardTitle>
            <CardDescription className="text-green-600 dark:text-green-500">Compete with others</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Challenge your friends or join the daily challenge. Compete with others and test your Islamic knowledge in
              a fun and engaging way.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                <Users className="h-3 w-3" /> Friend Challenge
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-xs rounded-full">
                <Sparkles className="h-3 w-3" /> Daily Challenge
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/challenges">
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                Start Challenges
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Do send your suggestions to Rafique by WhatsApp on +91 7558845528
        </p>
      </div>
    </main>
  )
}
