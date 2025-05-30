"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface Player {
  id: string
  username: string
  full_name?: string
  total_score: number
  best_percentage: number
}

export default function SimpleTopPlayers() {
  const [user, setUser] = useState<any>(null)
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadPlayers = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log("🏆 Loading top players...")

      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage")
        .order("total_score", { ascending: false })
        .limit(5)

      if (error) {
        console.error("❌ Error loading players:", error)
        throw error
      }

      console.log("✅ Players loaded:", data)
      setPlayers(data || [])
    } catch (err: any) {
      console.error("❌ Caught error:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadUser = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log("👤 Current user session:", !!session)
      setUser(session?.user || null)
    } catch (err) {
      console.error("❌ Error loading user:", err)
    }
  }

  const handleChallenge = async (playerId: string, playerName: string) => {
    try {
      console.log(`🎯 Challenging ${playerName} (${playerId})`)

      if (!user) {
        alert("Please sign in to send challenges")
        return
      }

      // Calculate expiry date (24 hours from now)
      const expiresAt = new Date()
      expiresAt.setHours(expiresAt.getHours() + 24)

      const { data, error } = await supabase
        .from("user_challenges")
        .insert({
          challenger_id: user.id,
          challenged_id: playerId,
          category: "quran",
          difficulty: "mixed",
          question_count: 10,
          time_limit: 300,
          status: "pending",
          expires_at: expiresAt.toISOString(),
        })
        .select()
        .single()

      if (error) {
        console.error("❌ Error creating challenge:", error)
        alert(`Error creating challenge: ${error.message}`)
        return
      }

      console.log("✅ Challenge created:", data)

      // Redirect to quiz as challenger
      const challengeUrl = `/quiz?category=quran&difficulty=mixed&challenge=${data.id}&questions=10&opponent=${playerId}&opponentName=${encodeURIComponent(playerName)}&challengerTurn=true`
      console.log("🔗 Redirecting to:", challengeUrl)
      window.location.href = challengeUrl
    } catch (err: any) {
      console.error("❌ Challenge error:", err)
      alert(`Error: ${err.message}`)
    }
  }

  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    loadPlayers()
    loadUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("🔄 Auth state changed in SimpleTopPlayers:", event, !!session)
      setUser(session?.user || null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Loading top players...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <p className="text-red-600 text-sm mb-2">Error: {error}</p>
            <Button size="sm" onClick={loadPlayers}>
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </div>
          <Button variant="outline" size="sm" onClick={loadPlayers}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {players.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No players found</p>
        ) : (
          <div className="space-y-3">
            {players.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-6 text-sm font-medium text-gray-500">{index + 1}</span>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      {(player.full_name || player.username).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{player.full_name || player.username}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right mr-2">
                    <p className="font-medium text-sm">{player.total_score} pts</p>
                    <p className="text-xs text-gray-500">{player.best_percentage}%</p>
                  </div>

                  {user && user.id !== player.id && (
                    <Button
                      size="sm"
                      onClick={() => handleChallenge(player.id, player.full_name || player.username)}
                      className="h-8 py-0 px-2 text-xs bg-green-600 hover:bg-green-700"
                    >
                      Challenge
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
