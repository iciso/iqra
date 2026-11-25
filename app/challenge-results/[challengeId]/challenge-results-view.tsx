"use client"

import { useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Crown, Medal, ArrowLeft, Zap, Clock } from "lucide-react"
import Link from "next/link"
import type { ChallengeResult } from "@/lib/server/types"
import { useChallengeLabels } from "@/components/challenge/use-challenge-labels"

const NAME_KEY = "userNameForLeaderboard"

// The visitor's saved name lives in localStorage; the server sees none (null),
// the same first paint the old mount effect gave.
const noSubscribe = () => () => {}
const readPlayerName = () => localStorage.getItem(NAME_KEY)
const serverPlayerName = () => null

export default function ChallengeResultsView({ challenge }: { challenge: ChallengeResult }) {
  const router = useRouter()
  const { t, categoryName, difficultyName } = useChallengeLabels()
  const currentPlayerName = useSyncExternalStore(noSubscribe, readPlayerName, serverPlayerName)

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)

  const getWinner = () => {
    const cs = challenge.challenger_score
    const ds = challenge.challenged_score
    if (cs === null || ds === null) return null
    if (cs > ds) return "challenger"
    if (ds > cs) return "challenged"
    return "tie"
  }

  const winner = getWinner()
  const bothPlayed = challenge.both_played
  const currentIsChallenger =
    currentPlayerName?.toLowerCase().trim() === challenge.challenger_name?.toLowerCase().trim()
  const currentIsChallenged =
    currentPlayerName?.toLowerCase().trim() === challenge.challenged_name?.toLowerCase().trim()

  // Determine if the current visitor won
  const currentPlayerWon =
    (currentIsChallenger && winner === "challenger") ||
    (currentIsChallenged && winner === "challenged")

  const headlineText = () => {
    if (!bothPlayed) return t("results.inProgress")
    if (winner === "tie") return t("results.tie")
    if (currentIsChallenger || currentIsChallenged) {
      return currentPlayerWon ? t("results.youWon") : t("results.betterLuck")
    }
    const winnerName =
      winner === "challenger" ? challenge.challenger_name : challenge.challenged_name
    return t("results.wins", { name: winnerName })
  }

  return (
    <div className="mx-auto w-full max-w-6xl sm:px-6 p-4">
      <div className="max-w-2xl mx-auto pt-8">

        {/* Back button */}
        <div className="mb-6">
          <Link href="/challenges">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("results.back")}
            </Button>
          </Link>
        </div>

        {/* Header card */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {!bothPlayed ? (
                <Clock className="h-16 w-16 text-blue-400" />
              ) : winner === "tie" ? (
                <Medal className="h-16 w-16 text-yellow-500" />
              ) : (
                <Trophy className="h-16 w-16 text-yellow-500" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold">{headlineText()}</CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {categoryName(challenge.category)}
              {" · "}
              {difficultyName(challenge.difficulty)}
              {" · "}
              {t("results.questionCount", { count: challenge.question_count })}
            </p>
            {!bothPlayed && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                {t("results.waitingFor", { name: challenge.challenged_name })}
              </p>
            )}
          </CardHeader>
        </Card>

        {/* Head-to-head cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Challenger */}
          <Card className={`${winner === "challenger" ? "ring-2 ring-yellow-400 shadow-lg" : ""}`}>
            <CardHeader className="text-center pb-2">
              {winner === "challenger" && (
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              )}
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarFallback className="bg-green-100 text-green-700 text-2xl font-bold">
                  {getInitials(challenge.challenger_name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenger_name}</h3>
              <div className="flex justify-center gap-2 mt-1">
                <Badge variant="outline">{t("results.challenger")}</Badge>
                {currentIsChallenger && (
                  <Badge className="bg-green-100 text-green-700 border-green-200">{t("results.you")}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="text-center pt-2">
              {challenge.challenger_score !== null ? (
                <>
                  <div className="text-5xl font-bold text-green-600 mb-1">
                    {challenge.challenger_score}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    {t("results.outOf", { total: challenge.challenger_total || challenge.question_count })}
                  </p>
                  <Badge
                    variant="secondary"
                    className={`text-base px-3 py-1 ${
                      (challenge.challenger_percentage ?? 0) >= 80
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {challenge.challenger_percentage ??
                      Math.round(
                        (challenge.challenger_score /
                          (challenge.challenger_total || challenge.question_count)) *
                          100,
                      )}
                    %
                  </Badge>
                </>
              ) : (
                <p className="text-gray-400 italic py-4">{t("results.notPlayed")}</p>
              )}
            </CardContent>
          </Card>

          {/* Challenged */}
          <Card className={`${winner === "challenged" ? "ring-2 ring-yellow-400 shadow-lg" : ""}`}>
            <CardHeader className="text-center pb-2">
              {winner === "challenged" && (
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              )}
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-2xl font-bold">
                  {getInitials(challenge.challenged_name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenged_name}</h3>
              <div className="flex justify-center gap-2 mt-1">
                <Badge variant="outline">{t("results.challenged")}</Badge>
                {currentIsChallenged && (
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">{t("results.you")}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="text-center pt-2">
              {challenge.challenged_score !== null ? (
                <>
                  <div className="text-5xl font-bold text-blue-600 mb-1">
                    {challenge.challenged_score}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    {t("results.outOf", { total: challenge.challenged_total || challenge.question_count })}
                  </p>
                  <Badge
                    variant="secondary"
                    className={`text-base px-3 py-1 ${
                      (challenge.challenged_percentage ?? 0) >= 80
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {challenge.challenged_percentage ??
                      Math.round(
                        (challenge.challenged_score /
                          (challenge.challenged_total || challenge.question_count)) *
                          100,
                      )}
                    %
                  </Badge>
                </>
              ) : (
                <p className="text-gray-400 italic py-4">{t("results.notPlayed")}</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Motivational footer */}
        {bothPlayed && winner !== "tie" && (
          <Card className="mt-6 bg-green-50 dark:bg-green-900/30 border-green-200">
            <CardContent className="text-center py-4">
              <p className="text-green-800 dark:text-green-200 font-medium">
                {winner === "challenger"
                  ? t("results.winsWith", {
                      winner: challenge.challenger_name,
                      ws: challenge.challenger_score,
                      wt: challenge.challenger_total || challenge.question_count,
                      loser: challenge.challenged_name,
                      ls: challenge.challenged_score,
                      lt: challenge.challenged_total || challenge.question_count,
                    })
                  : t("results.winsWith", {
                      winner: challenge.challenged_name,
                      ws: challenge.challenged_score,
                      wt: challenge.challenged_total || challenge.question_count,
                      loser: challenge.challenger_name,
                      ls: challenge.challenger_score,
                      lt: challenge.challenger_total || challenge.question_count,
                    })}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                {t("results.keepPlayingMsg")}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => router.push("/challenges")}
            className="bg-green-600 hover:bg-green-700"
          >
            <Zap className="h-4 w-4 mr-2" />
            {t("results.newChallenge")}
          </Button>
          <Link href="/leaderboard">
            <Button variant="outline">
              <Trophy className="h-4 w-4 mr-2" />
              {t("results.viewLeaderboard")}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
