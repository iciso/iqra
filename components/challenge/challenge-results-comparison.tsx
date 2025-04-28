import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, UserCheck } from "lucide-react"
import OpponentProfile, { type Opponent } from "./opponent-profile"

interface ChallengeResultsComparisonProps {
  userName: string
  userScore: number
  opponent: Opponent
  totalQuestions: number
}

export default function ChallengeResultsComparison({
  userName,
  userScore,
  opponent,
  totalQuestions,
}: ChallengeResultsComparisonProps) {
  if (!opponent.score) {
    return null
  }

  const userWon = userScore > opponent.score
  const tie = userScore === opponent.score

  const userPercentage = Math.round((userScore / totalQuestions) * 100)
  const opponentPercentage = Math.round((opponent.score / totalQuestions) * 100)

  return (
    <Card className="border-gray-200 shadow-sm dark:border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-center border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium flex items-center justify-center gap-2">
              {userWon ? (
                <Trophy className="h-4 w-4 text-yellow-500" />
              ) : tie ? (
                <UserCheck className="h-4 w-4 text-blue-500" />
              ) : (
                <Medal className="h-4 w-4 text-gray-500" />
              )}
              <span>{userWon ? "You won!" : tie ? "It's a tie!" : "Better luck next time!"}</span>
            </h3>
          </div>

          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 text-center">
              <div className="flex flex-col items-center">
                <OpponentProfile
                  opponent={{
                    id: "user",
                    name: userName || "You",
                    type: "user",
                  }}
                  size="sm"
                />
                <div className="mt-3">
                  <div className="text-2xl font-bold">{userScore}</div>
                  <div className="text-xs text-gray-500">{userPercentage}%</div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <div className="font-medium text-xs uppercase text-gray-500 mb-2">Results</div>
              <div className="text-lg font-bold">
                {userScore} - {opponent.score}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {userWon
                  ? "You won by " + (userScore - opponent.score)
                  : tie
                    ? "Tied score"
                    : "Lost by " + (opponent.score - userScore)}
              </div>
            </div>

            <div className="p-4 text-center">
              <div className="flex flex-col items-center">
                <OpponentProfile opponent={opponent} size="sm" />
                <div className="mt-3">
                  <div className="text-2xl font-bold">{opponent.score}</div>
                  <div className="text-xs text-gray-500">{opponentPercentage}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
