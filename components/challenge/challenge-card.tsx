"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Users, BookOpen } from "lucide-react"
import type { Challenge, ChallengeStatus } from "@/types/challenge"

interface ChallengeCardProps {
  challenge: Challenge
  onAccept?: (challengeId: string) => void
  onDecline?: (challengeId: string) => void
  onStart?: (challengeId: string) => void
}

export function ChallengeCard({ challenge, onAccept, onDecline, onStart }: ChallengeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusBadge = (status: ChallengeStatus) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Pending
          </Badge>
        )
      case "accepted":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Accepted
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Completed
          </Badge>
        )
      case "declined":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Declined
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card
      className={`border-green-200 shadow-sm dark:border-green-800 transition-all duration-300 ${
        isHovered ? "shadow-md transform -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-green-800 dark:text-green-400 flex items-center">
            <BookOpen className="h-4 w-4 mr-2" />
            {challenge.category} (Level {challenge.level})
          </CardTitle>
          {getStatusBadge(challenge.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-2">
              <AvatarImage src={challenge.challenger.avatar || "/placeholder.svg"} alt={challenge.challenger.name} />
              <AvatarFallback>{challenge.challenger.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium dark:text-white">{challenge.challenger.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{challenge.challenger.kp} KP</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Users className="h-5 w-5 text-gray-400 mx-2" />
          </div>
          <div className="flex items-center">
            <div className="text-right mr-2">
              <p className="font-medium dark:text-white">{challenge.opponent.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{challenge.opponent.kp} KP</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src={challenge.opponent.avatar || "/placeholder.svg"} alt={challenge.opponent.name} />
              <AvatarFallback>{challenge.opponent.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <div className="flex items-center">
            <Trophy className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
            <span className="dark:text-gray-300">Reward: {challenge.reward} KP</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
            <span className="dark:text-gray-300">15s per question</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {challenge.description || `5 questions on ${challenge.category} (Level ${challenge.level})`}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        {challenge.status === "pending" && onAccept && onDecline && (
          <>
            <Button
              variant="outline"
              onClick={() => onDecline(challenge.id)}
              className="dark:border-green-700 dark:text-green-400"
            >
              Decline
            </Button>
            <Button
              onClick={() => onAccept(challenge.id)}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              Accept Challenge
            </Button>
          </>
        )}
        {challenge.status === "accepted" && onStart && (
          <Button
            onClick={() => onStart(challenge.id)}
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Challenge
          </Button>
        )}
        {challenge.status === "completed" && (
          <Button
            variant="outline"
            className="w-full dark:border-green-700 dark:text-green-400"
            onClick={() => (window.location.href = `/challenges/${challenge.id}/results`)}
          >
            View Results
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
