import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Trophy, Users, Sparkles, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">IQRA Challenge</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">Islamic Quiz Rivalry App</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Challenge your Islamic knowledge through competitive quizzes. Learn, compete, and grow your Knowledge Points
            (KP).
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <h3 className="font-medium dark:text-white">Challenge Friends</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Compete with study partners</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <Trophy className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <h3 className="font-medium dark:text-white">Earn KP</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Build your knowledge score</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <Book className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <h3 className="font-medium dark:text-white">11 Categories</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Diverse Islamic subjects</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <h3 className="font-medium dark:text-white">Daily Challenges</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Special events & rewards</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/auth/login" className="w-full">
            <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-green-600 dark:text-green-400 hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
