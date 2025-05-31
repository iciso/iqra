"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw, AlertCircle, Users, Database } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

interface Player {
  id: string
  username: string
  full_name?: string
  total_score: number
  best_percentage: number
}

export default function SimpleTopPlayers() {
  const { user, loading: authLoading } = useAuth()
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const mountedRef = useRef(true)
  const loadingRef = useRef(false)

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true)
      console.log("🔄 Syncing missing user profiles...")

      // Get all auth users
      const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers()

      if (authError) {
        console.error("❌ Error fetching auth users:", authError)
        return
      }

      console.log("👥 Found auth users:", authUsers.users.length)

      // Get existing profiles
      const { data: existingProfiles, error: profilesError } = await supabase.from("user_profiles").select("id")

      if (profilesError) {
        console.error("❌ Error fetching existing profiles:", profilesError)
        return
      }

      const existingIds = new Set(existingProfiles?.map((p) => p.id) || [])
      console.log("📋 Existing profile IDs:", existingIds.size)

      // Find missing profiles
      const missingUsers = authUsers.users.filter((authUser) => !existingIds.has(authUser.id))
      console.log("🔍 Missing profiles for users:", missingUsers.length)

      if (missingUsers.length === 0) {
        console.log("✅ All users already have profiles")
        return
      }

      // Create missing profiles
      const newProfiles = missingUsers.map((authUser) => ({
        id: authUser.id,
        username: authUser.user_metadata?.username || authUser.email?.split("@")[0] || "user",
        full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || null,
        email: authUser.email,
        total_score: 0,
        best_percentage: 0,
        quiz_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }))

      console.log(
        "➕ Creating profiles for:",
        newProfiles.map((p) => p.full_name || p.username),
      )

      const { data: insertedProfiles, error: insertError } = await supabase
        .from("user_profiles")
        .insert(newProfiles)
        .select()

      if (insertError) {
        console.error("❌ Error creating profiles:", insertError)
        return
      }

      console.log("✅ Successfully created profiles:", insertedProfiles?.length)

      // Reload players after sync
      loadPlayers()
    } catch (err: any) {
      console.error("❌ Sync error:", err)
    } finally {
      setSyncing(false)
    }
  }

  const loadPlayers = async () => {
    // Prevent concurrent loading
    if (loadingRef.current) {
      console.log("🛑 Already loading players, skipping...")
      return
    }

    try {
      loadingRef.current = true
      setLoading(true)
      setError(null)
      console.log("🏆 Loading top players... (attempt", retryCount + 1, ")")
      console.log("🔐 Auth state:", { authLoading, hasUser: !!user })

      // Wait for auth to be ready
      if (authLoading) {
        console.log("⏳ Waiting for auth to complete...")
        return
      }

      console.log("🔍 Step 1: Using auth context user:", !!user)
      console.log("🔍 Step 2: Starting database query...")

      // Get all users or top users based on showAll state
      const limit = showAll ? 50 : 10

      // First, let's get ALL users to see who's in the database
      const { data: allUsers, error: allUsersError } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage")
        .order("total_score", { ascending: false })

      console.log("👥 ALL USERS in database:", allUsers)
      console.log("👥 Total users found:", allUsers?.length)

      if (allUsersError) {
        console.error("❌ Error fetching all users:", allUsersError)
      }

      // Now get limited users for display
      const queryPromise = supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage")
        .order("total_score", { ascending: false })
        .limit(limit)

      const queryTimeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database query timeout")), 10000),
      )

      const queryResult = await Promise.race([queryPromise, queryTimeoutPromise])
      console.log("🔍 Step 3: Database query completed")

      const { data, error } = queryResult as any

      console.log("📊 Query result:", {
        data: data,
        error: error,
        dataLength: data?.length,
      })

      // Log each player for debugging
      if (data) {
        console.log(`👥 TOP ${limit} PLAYERS:`)
        data.forEach((player: Player, index: number) => {
          console.log(
            `${index + 1}. ${player.full_name || player.username} - Score: ${player.total_score}, Best: ${player.best_percentage}%`,
          )
        })
      }

      if (error) {
        console.error("❌ Supabase query error:", error)
        throw new Error(`Database error: ${error.message}`)
      }

      if (!data) {
        console.warn("⚠️ No data returned from query")
        if (mountedRef.current) {
          setPlayers([])
        }
      } else {
        console.log("✅ Players loaded successfully:", data)
        if (mountedRef.current) {
          setPlayers(data)
        }
      }

      console.log("🔍 Step 4: Load complete!")
    } catch (err: any) {
      console.error("❌ Caught error in loadPlayers:", err)
      console.error("❌ Error stack:", err.stack)

      if (mountedRef.current) {
        setError(err.message || "Failed to load players")
      }

      // Auto-retry up to 3 times with exponential backoff
      if (retryCount < 3 && mountedRef.current) {
        const delay = Math.pow(2, retryCount) * 1000 // 1s, 2s, 4s
        console.log(`🔄 Retrying in ${delay}ms...`)
        setTimeout(() => {
          if (mountedRef.current) {
            setRetryCount(retryCount + 1)
            loadPlayers()
          }
        }, delay)
      }
    } finally {
      console.log("🔍 Step 5: Setting loading to false")
      if (mountedRef.current) {
        setLoading(false)
      }
      loadingRef.current = false
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

  const handleRetry = () => {
    console.log("🔄 Manual retry triggered by user")
    setRetryCount(0)
    loadPlayers()
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    // Reload with new limit
    setTimeout(() => loadPlayers(), 100)
  }

  // Load players when auth is ready
  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    console.log("🔐 Initial auth state:", { authLoading, hasUser: !!user })

    mountedRef.current = true

    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...")
      loadPlayers()
    } else {
      console.log("⏳ Auth still loading, waiting...")
    }

    return () => {
      console.log("🚫 SimpleTopPlayers component unmounting")
      mountedRef.current = false
    }
  }, [authLoading]) // Depend on authLoading

  // Also listen for auth state changes
  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("🔄 Auth state changed, reloading players...")
      loadPlayers()
    }
  }, [user, authLoading]) // Depend on user changes

  // Reload when showAll changes
  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers()
    }
  }, [showAll])

  // Show loading while auth is initializing
  if (authLoading) {
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
            <span className="ml-2 text-sm">Initializing...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading && retryCount === 0) {
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
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-red-600 text-sm mb-2">
              {error}
              {retryCount > 0 && ` (Attempt ${retryCount + 1}/4)`}
            </p>
            <div className="flex gap-2 justify-center">
              <Button size="sm" onClick={handleRetry} disabled={loading}>
                {loading ? "Retrying..." : "Try Again"}
              </Button>
              <Button size="sm" variant="outline" onClick={syncMissingProfiles} disabled={syncing}>
                {syncing ? "Syncing..." : "Sync Profiles"}
              </Button>
            </div>
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
            {showAll ? `All Players (${players.length})` : `Top Players (${players.length})`}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={syncMissingProfiles}
              disabled={syncing}
              title="Sync missing user profiles from auth"
            >
              <Database className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              title={showAll ? "Show top players only" : "Show all players"}
            >
              <Users className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleRetry} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {players.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500 mb-2">No players found</p>
            <Button size="sm" onClick={syncMissingProfiles} disabled={syncing}>
              {syncing ? "Syncing..." : "Sync User Profiles"}
            </Button>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
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
                    <p className="text-xs text-gray-500">ID: {player.id.slice(0, 8)}...</p>
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
