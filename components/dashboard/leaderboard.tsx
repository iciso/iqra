"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"
import type { User } from "@/types/challenge"

interface LeaderboardProps {
  users: User[]
  currentUserId: string
}

export function Leaderboard({ users, currentUserId }: LeaderboardProps) {
  // Sort users by KP (descending)
  const sortedUsers = [...users].sort((a, b) => b.kp - a.kp)

  // Find current user's rank
  const currentUserRank = sortedUsers.findIndex((user) => user.id === currentUserId) + 1

  // Get medal icon based on position
  const getMedalIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />
      case 3:
        return <Trophy className="h-5 w-5 text-amber-700" />
      default:
        return null
    }
  }

  return (
    <Card className="border-green-200 shadow-sm dark:border-green-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-green-800 dark:text-green-400">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedUsers.slice(0, 5).map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-2 rounded-lg ${
                user.id === currentUserId ? "bg-green-50 dark:bg-green-900/30" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="w-6 text-center mr-2 flex items-center justify-center">
                  {getMedalIcon(index + 1) || <span className="text-gray-500">{index + 1}</span>}
                </div>
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p
                    className={`font-medium ${user.id === currentUserId ? "text-green-700 dark:text-green-400" : "dark:text-white"}`}
                  >
                    {user.name}
                  </p>
                </div>
              </div>
              <div className="font-bold text-green-700 dark:text-green-400">{user.kp} KP</div>
            </div>
          ))}

          {currentUserRank > 5 && (
            <>
              <div className="text-center text-sm text-gray-500 py-1">•••</div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                <div className="flex items-center">
                  <div className="w-6 text-center mr-2">
                    <span className="text-gray-500">{currentUserRank}</span>
                  </div>
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src={sortedUsers[currentUserRank - 1].avatar || "/placeholder.svg"}
                      alt={sortedUsers[currentUserRank - 1].name}
                    />
                    <AvatarFallback>{sortedUsers[currentUserRank - 1].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-400">
                      {sortedUsers[currentUserRank - 1].name}
                    </p>
                  </div>
                </div>
                <div className="font-bold text-green-700 dark:text-green-400">
                  {sortedUsers[currentUserRank - 1].kp} KP
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
