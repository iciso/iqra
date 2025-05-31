import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Database, Cloud, HardDrive } from "lucide-react"
import { getLeaderboardWithFallback } from "@/lib/database-with-fallback"

export default async function LeaderboardPage() {
  const leaderboardResult = await getLeaderboardWithFallback()
  const { source, data: leaderboard } = leaderboardResult

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "Supabase":
        return <Cloud className="h-4 w-4" />
      case "Neon":
        return <Database className="h-4 w-4" />
      default:
        return <HardDrive className="h-4 w-4" />
    }
  }

  const getSourceColor = (source: string) => {
    switch (source) {
      case "Supabase":
        return "bg-green-100 text-green-800"
      case "Neon":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">🏆 IQRA Leaderboard</h1>
        <p className="text-gray-600 mb-4">Top performers in Islamic knowledge</p>

        <div className="flex justify-center">
          <Badge variant="outline" className={`flex items-center gap-2 ${getSourceColor(source)}`}>
            {getSourceIcon(source)}
            Data source: {source}
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        {leaderboard.map((entry, index) => {
          const isTopThree = index < 3
          const getRankIcon = () => {
            if (index === 0) return <Trophy className="h-6 w-6 text-yellow-500" />
            if (index === 1) return <Medal className="h-6 w-6 text-gray-400" />
            if (index === 2) return <Award className="h-6 w-6 text-amber-600" />
            return <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
          }

          return (
            <Card
              key={`${entry.user_id}-${index}`}
              className={`${isTopThree ? "border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                      {getRankIcon()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{entry.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{entry.category}</span>
                        <span>•</span>
                        <span className="capitalize">{entry.difficulty}</span>
                        <span>•</span>
                        <span>{entry.date}</span>
                        <span>•</span>
                        <Badge variant="outline" size="sm">
                          {entry.challenge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{entry.percentage}%</div>
                    <div className="text-sm text-gray-500">
                      {entry.score}/{entry.totalQuestions} correct
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {leaderboard.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Results Yet</h3>
            <p className="text-gray-600">Be the first to complete a quiz and claim the top spot!</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
