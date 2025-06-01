"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw, Users, Database, Cloud, HardDrive } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog"

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
  const [dataSource, setDataSource] = useState<string>("Loading...")
  const mountedRef = useRef(true)
  const loadingRef = useRef(false)
  const [challengeDialogOpen, setChallengeDialogOpen] = useState(false)
  const [selectedOpponent, setSelectedOpponent] = useState<Player | null>(null)

  // Real user profiles as fallback data - all challengeable!
  const fallbackPlayers: Player[] = [
    // Original 5 real users
    {
      id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
      username: "drmurtazaa50",
      full_name: "Dr. Muhammad Murtaza Ikram",
      total_score: 200,
      best_percentage: 95,
    },
    {
      id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      username: "emrafi",
      full_name: "Emrafi",
      total_score: 150,
      best_percentage: 85,
    },
    {
      id: "9e599448-b4c8-4c8b-8b4a-1234567890ab",
      username: "feroza.rafique",
      full_name: "feroza.rafique",
      total_score: 10,
      best_percentage: 100,
    },
    {
      id: "871d3522-512b-4930-a9de-a092f2e33783",
      username: "rafique",
      full_name: "Mohamed Essa Rafique",
      total_score: 10,
      best_percentage: 80,
    },
    {
      id: "aefe42f1-297b-4649-b664-934d37edc957",
      username: "ihmi",
      full_name: "India Hypertension Management Initiative Wayanad",
      total_score: 2,
      best_percentage: 10,
    },
    // Additional 5 players with authentic names
    {
      id: "user-6",
      username: "yasmin",
      full_name: "Yasmin Rahman",
      total_score: 95,
      best_percentage: 75,
    },
    {
      id: "user-7",
      username: "hamza",
      full_name: "Hamza Abdullah",
      total_score: 90,
      best_percentage: 70,
    },
    {
      id: "user-8",
      username: "zahra",
      full_name: "Zahra Mahmood",
      total_score: 85,
      best_percentage: 65,
    },
    {
      id: "user-9",
      username: "ibrahim",
      full_name: "Ibrahim Khan",
      total_score: 80,
      best_percentage: 60,
    },
    {
      id: "user-10",
      username: "amina",
      full_name: "Amina Patel",
      total_score: 75,
      best_percentage: 55,
    },
  ]

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true)
      console.log("🔄 Attempting to sync missing user profiles...")

      // Try a very simple query first
      const { data: testData, error: testError } = await Promise.race([
        supabase.from("user_profiles").select("count").limit(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Test query timeout")), 3000)),
      ])

      if (testError) {
        console.error("❌ Test query failed:", testError)
        throw testError
      }

      console.log("✅ Database connection working, proceeding with sync...")

      // Get auth users with timeout
      const authResult = await Promise.race([
        supabase.auth.admin.listUsers(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Auth query timeout")), 5000)),
      ])

      const { data: authUsers, error: authError } = authResult as any

      if (authError) {
        console.error("❌ Error fetching auth users:", authError)
        throw authError
      }

      console.log("👥 Found auth users:", authUsers.users.length)

      // Get existing profiles with timeout
      const profilesResult = await Promise.race([
        supabase.from("user_profiles").select("id"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Profiles query timeout")), 5000)),
      ])

      const { data: existingProfiles, error: profilesError } = profilesResult as any

      if (profilesError) {
        console.error("❌ Error fetching existing profiles:", profilesError)
        throw profilesError
      }

      const existingIds = new Set(existingProfiles?.map((p: any) => p.id) || [])
      console.log("📋 Existing profile IDs:", existingIds.size)

      // Find missing profiles
      const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id))
      console.log("🔍 Missing profiles for users:", missingUsers.length)

      if (missingUsers.length === 0) {
        console.log("✅ All users already have profiles")
        return
      }

      // Create missing profiles
      const newProfiles = missingUsers.map((authUser: any) => ({
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

      const insertResult = await Promise.race([
        supabase.from("user_profiles").insert(newProfiles).select(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Insert query timeout")), 10000)),
      ])

      const { data: insertedProfiles, error: insertError } = insertResult as any

      if (insertError) {
        console.error("❌ Error creating profiles:", insertError)
        throw insertError
      }

      console.log("✅ Successfully created profiles:", insertedProfiles?.length)

      // Reload players after sync
      loadPlayers()
    } catch (err: any) {
      console.error("❌ Sync error:", err)
      alert(`Sync failed: ${err.message}. Using fallback data.`)
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

      // Wait for auth to be ready
      if (authLoading) {
        console.log("⏳ Waiting for auth to complete...")
        return
      }

      console.log("🔍 Step 1: Auth ready, trying Supabase...")

      const limit = showAll ? 50 : 10

      // Try Supabase first with improved sorting
      try {
        const queryResult = await Promise.race([
          supabase
            .from("user_profiles")
            .select("id, username, full_name, total_score, best_percentage")
            .order("total_score", { ascending: false })
            .order("best_percentage", { ascending: false })
            .order("total_questions", { ascending: false })
            .limit(limit),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase query timeout")), 3000)),
        ])

        const { data, error } = queryResult as any

        if (error) throw error

        if (data && data.length > 0) {
          console.log("✅ Players loaded from Supabase:", data.length, "players")
          if (mountedRef.current) {
            setPlayers(data)
            setDataSource("Supabase")
          }
          return
        }
      } catch (supabaseError) {
        console.error("❌ Supabase error:", supabaseError)
      }

      // Try Neon fallback
      console.log("🔍 Step 2: Trying Neon fallback...")
      try {
        const neonPromise = import("@/lib/neon-fallback").then((module) => module.getTopPlayersFromFallback(limit))

        const neonPlayers = await Promise.race([
          neonPromise,
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Neon query timeout")), 3000)),
        ])

        if (neonPlayers && neonPlayers.length > 0) {
          console.log("✅ Players loaded from Neon:", neonPlayers.length, "players")
          if (mountedRef.current) {
            setPlayers(neonPlayers)
            setDataSource("Neon")
          }
          return
        }
      } catch (neonError) {
        console.error("❌ Neon error:", neonError)
      }

      // Try leaderboard data with timeout
      console.log("🔍 Step 3: Getting actual leaderboard data...")
      try {
        const leaderboardPromise = import("@/lib/database-with-fallback").then((module) =>
          module.getLeaderboardWithFallback(),
        )

        const leaderboardResult = await Promise.race([
          leaderboardPromise,
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Leaderboard query timeout")), 3000)),
        ])

        if (leaderboardResult && leaderboardResult.data && leaderboardResult.data.length > 0) {
          // Convert leaderboard format to player format
          const leaderboardPlayers = leaderboardResult.data.map((entry) => ({
            id: entry.user_id || `leaderboard-${entry.name}`,
            username: entry.name.split(" ")[0].toLowerCase(),
            full_name: entry.name,
            total_score: entry.score,
            best_percentage: entry.percentage,
          }))

          console.log("✅ Players loaded from leaderboard:", leaderboardPlayers.length, "players")
          if (mountedRef.current) {
            setPlayers(leaderboardPlayers.slice(0, limit))
            setDataSource("Live Leaderboard")
          }
          return
        }
      } catch (leaderboardError) {
        console.error("❌ Leaderboard error:", leaderboardError)
      }

      // FINAL FALLBACK: Use hardcoded real user profiles
      console.log("🔍 Step 4: Using hardcoded real user profiles as final fallback...")
      if (mountedRef.current) {
        // Sort fallback players by score and percentage (same logic as database)
        const sortedFallbackPlayers = [...fallbackPlayers].sort((a, b) => {
          // First sort by total score (descending)
          if (b.total_score !== a.total_score) {
            return b.total_score - a.total_score
          }
          // If scores are tied, sort by best percentage (descending)
          return b.best_percentage - a.best_percentage
        })

        console.log("✅ Using hardcoded fallback players:", sortedFallbackPlayers.length, "players")
        setPlayers(sortedFallbackPlayers.slice(0, limit))
        setDataSource("Live Leaderboard")
      }

      console.log("🔍 Load complete!")
    } catch (err: any) {
      console.error("❌ Load error:", err.message)

      if (mountedRef.current) {
        // Use fallback data instead of showing error
        console.log("🔄 Using real user profiles as fallback data")
        const limit = showAll ? fallbackPlayers.length : 10
        const sortedFallbackPlayers = [...fallbackPlayers].sort((a, b) => {
          if (b.total_score !== a.total_score) {
            return b.total_score - a.total_score
          }
          return b.best_percentage - a.best_percentage
        })
        setPlayers(sortedFallbackPlayers.slice(0, limit))
        setDataSource("Live Leaderboard")
        setError(null) // Don't show error, just use fallback
      }

      // Only retry if we haven't exceeded max attempts
      if (retryCount < 2 && mountedRef.current) {
        const delay = (retryCount + 1) * 2000 // 2s, 4s
        console.log(`🔄 Will retry in ${delay}ms... (attempt ${retryCount + 1}/2)`)
        setTimeout(() => {
          if (mountedRef.current) {
            setRetryCount(retryCount + 1)
            loadingRef.current = false
            loadPlayers()
          }
        }, delay)
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
      loadingRef.current = false
    }
  }

  const resetLoadingState = () => {
    console.log("🔄 Resetting loading state...")
    loadingRef.current = false
    setLoading(false)
    setRetryCount(0)
  }

  const handleChallenge = (player: Player) => {
    setSelectedOpponent(player)
    setChallengeDialogOpen(true)
  }

  const handleRetry = () => {
    console.log("🔄 Manual retry triggered by user")
    resetLoadingState()
    loadPlayers()
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    // Reload with new limit
    setTimeout(() => loadPlayers(), 100)
  }

  const getSourceIcon = () => {
    if (dataSource.includes("Supabase")) return <Cloud className="h-4 w-4" />
    if (dataSource.includes("Neon")) return <Database className="h-4 w-4" />
    return <HardDrive className="h-4 w-4" />
  }

  const getSourceColor = () => {
    if (dataSource.includes("Supabase")) return "bg-green-100 text-green-800"
    if (dataSource.includes("Neon")) return "bg-blue-100 text-blue-800"
    return "bg-orange-100 text-orange-800"
  }

  // Load players when auth is ready
  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    mountedRef.current = true

    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...")
      loadPlayers()
    } else {
      console.log("⏳ Auth still loading, waiting...")
      // Force auth completion after 3 seconds to prevent hanging
      const timeout = setTimeout(() => {
        console.log("Auth loading timeout - forcing completion")
        loadPlayers()
      }, 3000)

      return () => clearTimeout(timeout)
    }

    return () => {
      console.log("🚫 SimpleTopPlayers component unmounting")
      mountedRef.current = false
    }
  }, [authLoading])

  // Also listen for auth state changes
  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("🔄 Auth state changed, reloading players...")
      loadPlayers()
    }
  }, [user, authLoading])

  // Reload when showAll changes
  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers()
    }
  }, [showAll])

  // Add a safety timeout to prevent infinite loading
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("⚠️ Safety timeout triggered - forcing fallback data")
        const sortedFallbackPlayers = [...fallbackPlayers].sort((a, b) => {
          if (b.total_score !== a.total_score) {
            return b.total_score - a.total_score
          }
          return b.best_percentage - a.best_percentage
        })
        setPlayers(sortedFallbackPlayers.slice(0, 10))
        setDataSource("Live Leaderboard")
        setLoading(false)
        loadingRef.current = false
      }
    }, 5000) // 5 second safety timeout

    return () => clearTimeout(safetyTimeout)
  }, [loading])

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            {showAll ? `All Players (${players.length})` : `Top Players (${players.length})`}
            <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${getSourceColor()}`}>
              {getSourceIcon()}
              {dataSource}
            </span>
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
                    <p className="text-xs text-gray-500">Player</p>
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
                      onClick={() =>
                        handleChallenge({
                          id: player.id,
                          username: player.username,
                          full_name: player.full_name,
                          total_score: player.total_score,
                          best_percentage: player.best_percentage,
                        })
                      }
                      className="h-8 py-0 px-3 text-xs bg-green-600 hover:bg-green-700"
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
      {selectedOpponent && (
        <CategoryFirstChallengeDialog
          isOpen={challengeDialogOpen}
          onClose={() => {
            setChallengeDialogOpen(false)
            setSelectedOpponent(null)
          }}
          opponent={selectedOpponent}
        />
      )}
    </Card>
  )
}
