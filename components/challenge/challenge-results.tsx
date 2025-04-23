"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Clock, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { ChallengeResult, User } from "@/types/challenge"

interface ChallengeResultsProps {
  result: ChallengeResult
  currentUser: User
}

export function ChallengeResults({ result, currentUser }: ChallengeResultsProps) {
  const isWinner = result.winner?.id === currentUser.id
  const isDraw = result.winner === null

  // Calculate if current user is challenger or opponent
  const isChallenger = result.challenger.id === currentUser.id
  const userResult = isChallenger ? result.challengerResult : result.opponentResult
  const opponentResult = isChallenger ? result.opponentResult : result.challengerResult
  const opponent = isChallenger ? result.opponent : result.challenger

  return (
    <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Challenge Results</CardTitle>
        <p className="text-green-600 dark:text-green-500 mt-1">
          {result.category} - Level {result.level}
        </p>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          {isDraw ? (
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-6">
              <p className="text-xl font-bold text-blue-800 dark:text-blue-300">It's a Draw!</p>
              <p className="text-blue-700 dark:text-blue-400">Both players earned +15 KP</p>
            </div>
          ) : isWinner ? (
            <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4 mb-6">
              <p className="text-xl font-bold text-green-800 dark:text-green-300">You Won!</p>
              <p className="text-green-700 dark:text-green-400">You earned +{result.kpAwarded} KP</p>
            </div>
          ) : (
            <div className="bg-amber-100 dark:bg-amber-900 rounded-lg p-4 mb-6">
              <p className="text-xl font-bold text-amber-800 dark:text-amber-300">You Lost</p>
              <p className="text-amber-700 dark:text-amber-400">You still earned +10 KP</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="font-medium dark:text-white">{currentUser.name}</p>
            <div className="flex items-center mt-1">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
              <span className="text-sm dark:text-gray-300">{userResult.correctAnswers}/5 correct</span>
            </div>
            <div className="flex items-center mt-1">
              <Clock className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
              <span className="text-sm dark:text-gray-300">{userResult.timeBonus} sec bonus</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={opponent.avatar || "/placeholder.svg"} alt={opponent.name} />
              <AvatarFallback>{opponent.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="font-medium dark:text-white">{opponent.name}</p>
            <div className="flex items-center mt-1">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
              <span className="text-sm dark:text-gray-300">{opponentResult.correctAnswers}/5 correct</span>
            </div>
            <div className="flex items-center mt-1">
              <Clock className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
              <span className="text-sm dark:text-gray-300">{opponentResult.timeBonus} sec bonus</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="text-lg font-medium mb-2 dark:text-white">Score Breakdown</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-left dark:text-gray-300">Correct Answers:</div>
            <div className="text-right font-medium dark:text-white">+{userResult.correctAnswers * 10} KP</div>

            <div className="text-left dark:text-gray-300">Speed Bonus:</div>
            <div className="text-right font-medium dark:text-white">+{userResult.timeBonus} KP</div>

            {isWinner ? (
              <>
                <div className="text-left dark:text-gray-300">Win Bonus:</div>
                <div className="text-right font-medium dark:text-white">+30 KP</div>
              </>
            ) : isDraw ? (
              <>
                <div className="text-left dark:text-gray-300">Draw Bonus:</div>
                <div className="text-right font-medium dark:text-white">+15 KP</div>
              </>
            ) : (
              <>
                <div className="text-left dark:text-gray-300">Participation:</div>
                <div className="text-right font-medium dark:text-white">+10 KP</div>
              </>
            )}

            {userResult.streakBonus > 0 && (
              <>
                <div className="text-left dark:text-gray-300">Streak Bonus:</div>
                <div className="text-right font-medium dark:text-white">+{userResult.streakBonus} KP</div>
              </>
            )}

            <div className="text-left font-medium text-green-700 dark:text-green-400 pt-2">Total:</div>
            <div className="text-right font-bold text-green-700 dark:text-green-400 pt-2">+{userResult.totalKP} KP</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Link href="/dashboard">
          <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/challenges/new">
          <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
            New Challenge
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
