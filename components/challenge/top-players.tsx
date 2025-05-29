"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, RefreshCw, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

interface Player {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score: number
  best_percentage: number
}

export default function TopPlayers() {
  const { user, loading: authLoading } = useAuth()
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🏆 DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    addDebug(`useEffect triggered - authLoading: ${authLoading}, user: ${!!user}`)

    if (authLoading) {
      addDebug("Auth still loading, waiting...")
      return
    }

    addDebug("Auth loaded, loading top players...")
    loadTopPlayers()
  }, [authLoading])

  const loadTopPlayers = async () => {
    addDebug("Starting loadTopPlayers...")
    setLoading(true)
    setError(null)

    // Create a timeout to prevent hanging
    const timeout = setTimeout(() => {
      addDebug("⚠️ Query timeout after 10 seconds")
      setLoading(false)
      setError("Query timeout after 10 seconds. Please try again.")
    }, 10000)

    try {
      addDebug("Querying top players...")

      // Use a simpler query with a timeout
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .order("total_score", { ascending: false })
        .limit(10)

      // Clear the timeout since the query completed
      clearTimeout(timeout)

      addDebug(`Query completed - error: ${!!error}, data: ${data ? data.length : "null"}`)

      if (error) {
        addDebug(`Database error: ${error.message}`)
        setError(error.message)
        return
      }

      if (!data || data.length === 0) {
        addDebug("No players found")
        setPlayers([])
        return
      }

      // Filter out current user if needed
      const filteredPlayers = user ? data.filter((player) => player.id !== user.id) : data

      addDebug(`Found ${filteredPlayers.length} players (filtered from ${data.length})`)
      setPlayers(filteredPlayers)
    } catch (error: any) {
      // Clear the timeout since we caught an error
      clearTimeout(timeout)

      addDebug(`Caught error: ${error.message}`)
      setError(error.message)
    } finally {
      // Clear the timeout in case it hasn't fired yet
      clearTimeout(timeout)

      addDebug("loadTopPlayers completed, setting loading to false")
      setLoading(false)
    }
  }

  const getUserInitials = (player: Player) => {
    if (player.full_name) {
      return player.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return player.username.charAt(0).toUpperCase()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </div>
          <Button variant="outline" size="sm" onClick={loadTopPlayers} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Debug Info */}
        <div className="text-xs text-gray-500 p-2 bg-gray-50 dark:bg-gray-800 rounded mb-4">
          <p>Auth Loading: {authLoading.toString()}</p>
          <p>Component Loading: {loading.toString()}</p>
          <p>Players: {players.length}</p>
          <div className="mt-2">
            <p className="font-medium">Debug Log:</p>
            {debugInfo.map((info, index) => (
              <p key={index} className="text-xs">
                {info}
              </p>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm text-gray-500">Loading top players...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium">Error loading players</p>
              <p className="text-red-600 text-sm">{error}</p>
              <Button variant="outline" size="sm" onClick={loadTopPlayers} className="mt-2">
                Try Again
              </Button>
            </div>
          </div>
        ) : players.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium mb-2">No players found</p>
            <p className="text-sm">Be the first to take a quiz!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {players.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 text-sm font-medium">
                    {index === 0 ? (
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    ) : index === 1 ? (
                      <Trophy className="h-5 w-5 text-gray-400" />
                    ) : index === 2 ? (
                      <Trophy className="h-5 w-5 text-amber-700" />
                    ) : (
                      <span className="text-gray-500">{index + 1}</span>
                    )}
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={player.avatar_url || "/placeholder.svg"} />
                    <AvatarFallback className="bg-blue-100 text-blue-700">{getUserInitials(player)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{player.full_name || player.username}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{player.total_score} pts</p>
                  <p className="text-xs text-gray-500">{player.best_percentage}% best</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
