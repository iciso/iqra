"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, RefreshCw, Users, Database, Cloud } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog"
import { createChallenge } from "@/lib/supabase-queries"
import { toast } from "@/components/ui/use-toast"

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
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const mountedRef = useRef(true)
  const loadingRef = useRef(false)
  const [challengeDialogOpen, setChallengeDialogOpen] = useState(false)
  const [selectedOpponent, setSelectedOpponent] = useState<Player | null>(null)

  // ONLY real users from the actual leaderboard - ALL 10 users, NO POINTS to avoid ranking issues
const fallbackPlayers: Player[] = [
  {
    id: "83813437-5d7e-4aef-b915-96b99ac96fa0",
    username: "afsarkam1962",
    full_name: "KAM Afsar",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "cc6504c4-8efd-442a-aadc-7b44e7da02f8",
    username: "ebahammed",
    full_name: "E Basheer Ahammed",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "aefe42f1-297b-4649-b664-934d37edc957",
    username: "ihmi",
    full_name: "IHMIW",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "9e599448-b4c8-4c8b-8b4a-1234567890ab",
    username: "feroza.rafique",
    full_name: "feroza.rafique",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
    username: "drmurtazaa50",
    full_name: "Dr.Muhammad Murtaza Ikram",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "e299ae2c-9581-47eb-bb0e-daabf686b469",
    username: "aiesha",
    full_name: "aiesha waseem",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "8d46dbdc-3104-4de9-9735-a00c3aec1619",
    username: "joy",
    full_name: "Joy Ahmed",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "7bdc8022-2a23-45db-a388-a2ea71a71b52",
    username: "hashim",
    full_name: "Hashim Mohammed",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "871d3522-512b-4930-a9de-a092f2e33783",
    username: "rafique",
    full_name: "Mohamed Essa Rafique",
    total_score: 0,
    best_percentage: 0,
  },
  {
    id: "94e7149b-ce48-4d9a-8ee4-730698bc1bc5",
    username: "essa",
    full_name: "essa nilu",
    total_score: 0,
    best_percentage: 0,
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));


const handleCreateChallenge = async (opponentId: string, opponentName: string) => {
    try {
      const challenge = {
        challengerId: user?.id,
        challengedId: opponentId,
        category: 'hadeeth',
        difficulty: 'mixed',
        questionCount: 10,
        timeLimit: 300,
      }
      console.log('🎯 Creating challenge:', opponentName, opponentId)
      console.log('🎯 Challenge details:', challenge)

      // Verify profiles exist
      const { data: challenger } = await supabase.from('profiles').select('id').eq('id', challenge.challengerId).single()
      const { data: challenged } = await supabase.from('profiles').select('id').eq('id', challenge.challengedId).single()
      if (!challenger || !challenged) {
        throw new Error('Challenger or challenged profile not found')
      }

      const { success, data } = await createChallenge(
        challenge.challengerId,
        challenge.challengedId,
        challenge.category,
        challenge.difficulty,
        challenge.questionCount,
        challenge.timeLimit
      )
      if (success) {
        console.log('✅ Challenge created successfully:', data)
        window.location.href = `/quiz?category=${challenge.category}&difficulty=${challenge.difficulty}&challenge=${data.id}&questions=${challenge.questionCount}&opponent=${opponentId}&opponentName=${opponentName}&challengerTurn=true`
      }
    } catch (error: any) {
      console.error('❌ Failed to create challenge:', error)
      toast({
        title: "Error Creating Challenge",
        description: error.message || "Failed to create challenge.",
        variant: "destructive",
      })
    }
  }


 const syncMissingProfiles = async () => {
    try {
      setSyncing(true)
      console.log("🔄 Attempting to sync missing user profiles...")

      const { data: testData, error: testError } = await Promise.race([
        supabase.from("user_profiles").select("count").limit(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Test query timeout")), 3000)),
      ])

      if (testError) {
        console.error("❌ Test query failed:", testError)
        throw testError
      }

      console.log("✅ Database connection working, proceeding with sync...")

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

      const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id))
      console.log("🔍 Missing profiles for users:", missingUsers.length)

      if (missingUsers.length === 0) {
        console.log("✅ All users already have profiles")
        return
      }

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

      loadPlayers()
    } catch (err: any) {
      console.error("❌ Sync error:", err)
      alert(`Sync failed: ${err.message}. Using fallback data.`)
    } finally {
      setSyncing(false)
    }
  }

  const loadPlayers = async () => {
    if (loadingRef.current) {
      console.log("🛑 Already loading players, skipping...")
      return
    }

    try {
      loadingRef.current = true
      setLoading(true)
      setError(null)
      setIsUsingFallback(false)
      console.log("🏆 Loading top players... (attempt", retryCount + 1, ")")

      if (authLoading) {
        console.log("⏳ Waiting for auth to complete...")
        return
      }

      console.log("🔍 Step 1: Auth ready, trying Supabase...")

      try {
        const queryResult = await Promise.race([
          supabase
            .from("user_profiles")
            .select("id, username, full_name, total_score, best_percentage")
            .order("total_score", { ascending: false })
            .order("best_percentage", { ascending: false })
            .order("total_questions", { ascending: false }),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase query timeout")), 8000)),
        ])

        const { data, error } = queryResult as any

        if (error) throw error

        if (data && data.length > 0) {
          const filteredData = data.filter((player: Player) => player.username !== "Test User")
          console.log("✅ Players loaded from Supabase:", filteredData.length, "players")
          if (mountedRef.current) {
            setPlayers(filteredData)
            setDataSource("Supabase")
            setIsUsingFallback(false)
          }
          return
        }
      } catch (supabaseError) {
        console.error("❌ Supabase error:", supabaseError)
      }

      console.log("🔍 Step 2: Trying Neon fallback...")
      try {
        const neonPromise = import("@/lib/neon-fallback").then((module) => module.getTopPlayersFromFallback())

        const neonPlayers = await Promise.race([
          neonPromise,
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Neon query timeout")), 5000)),
        ])

        if (neonPlayers && neonPlayers.length > 0) {
          const filteredNeonPlayers = neonPlayers.filter((player: Player) => player.username !== "Test User")
          console.log("✅ Players loaded from Neon:", filteredNeonPlayers.length, "players")
          if (mountedRef.current) {
            setPlayers(filteredNeonPlayers)
            setDataSource("Neon")
            setIsUsingFallback(false)
          }
          return
        }
      } catch (neonError) {
        console.error("❌ Neon error:", neonError)
      }

      console.log("🔍 Step 3: Getting actual leaderboard data...")
      try {
        const leaderboardPromise = import("@/lib/database-with-fallback").then((module) =>
          module.getLeaderboardWithFallback(),
        )

        const leaderboardResult = await Promise.race([
          leaderboardPromise,
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Leaderboard query timeout")), 5000)),
        ])

        if (leaderboardResult && leaderboardResult.data && leaderboardResult.data.length > 0) {
          const leaderboardPlayers = leaderboardResult.data
            .filter((entry) => entry.user_id && entry.name !== "Test User")
            .map((entry) => ({
              id: entry.user_id,
              username: entry.name.split(" ")[0].toLowerCase(),
              full_name: entry.name,
              total_score: entry.score,
              best_percentage: entry.percentage,
            }))

          console.log("✅ Players loaded from leaderboard:", leaderboardPlayers.length, "players")
          if (mountedRef.current) {
            setPlayers(leaderboardPlayers)
            setDataSource("Live Leaderboard")
            setIsUsingFallback(false)
          }
          return
        }
      } catch (leaderboardError) {
        console.error("❌ Leaderboard error:", leaderboardError)
      }

      console.log("🔍 Step 4: Using All users as final fallback...")
      if (mountedRef.current) {
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
        console.log("✅ Using All users as fallback:", filteredFallbackPlayers.length, "users")
        setPlayers(filteredFallbackPlayers)
        setDataSource("All Users")
        setIsUsingFallback(true)
      }

      console.log("🔍 Load complete!")
    } catch (err: any) {
      console.error("❌ Load error:", err.message)

      if (mountedRef.current) {
        console.log("🔄 Using All users as fallback data")
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
        setPlayers(filteredFallbackPlayers)
        setDataSource("All Users")
        setIsUsingFallback(true)
        setError(null)
      }

      if (retryCount < 2 && mountedRef.current) {
        const delay = (retryCount + 1) * 2000
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
    setTimeout(() => loadPlayers(), 100)
  }

  const getSourceIcon = () => {
    if (dataSource.includes("Supabase")) return <Cloud className="h-4 w-4" />
    if (dataSource.includes("Neon")) return <Database className="h-4 w-4" />
    return <Users className="h-4 w-4" />
  }

  const getSourceColor = () => {
    if (dataSource.includes("Supabase")) return "bg-green-100 text-green-800"
    if (dataSource.includes("Neon")) return "bg-blue-100 text-blue-800"
    return "bg-purple-100 text-purple-800"
  }

 useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted")
    mountedRef.current = true

    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...")
      loadPlayers()
    } else {
      console.log("⏳ Auth still loading, waiting...")
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

  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("🔄 Auth state changed, reloading players...")
      loadPlayers()
    }
  }, [user, authLoading])

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers()
    }
  }, [showAll])

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("⚠️ Safety timeout triggered - forcing fallback data")
        const filteredFallbackPlayers = fallbackPlayers.filter((player) => player.username !== "Test User")
        setPlayers(filteredFallbackPlayers)
        setDataSource("All Users")
        setIsUsingFallback(true)
        setLoading(false)
        setError(null)
        loadingRef.current = false
      }
    }, 10000)

    return () => clearTimeout(safetyTimeout)
  }, [loading])

  const cardTitle = isUsingFallback
    ? `All Users (${players.length})`
    : showAll
      ? `All Players (${players.length})`
      : `Top Players (${players.length})`

  return (
    <Card>
      <CardHeader className="px-3 md:px-6 py-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* ... (keep the existing CardTitle content as is) */}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-6 py-2 md:py-4">
        {players.length === 0 ? (
          // ... (keep the existing empty players content as is)
        ) : (
          <div className="space-y-2 md:space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
            {players.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                  {!isUsingFallback && (
                    <span className="w-5 md:w-6 text-xs md:text-sm font-medium text-gray-500">{index + 1}</span>
                  )}
                  <Avatar className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0">
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs md:text-sm">
                      {(player.full_name || player.username).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-xs md:text-sm truncate">{player.full_name || player.username}</p>
                    <p className="text-xs text-gray-500 hidden xs:block">
                      {isUsingFallback ? "All Users" : "Player"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  {!isUsingFallback && (
                    <div className="text-right mr-1 md:mr-2">
                      <p className="font-medium text-xs md:text-sm">{player.total_score} pts</p>
                      <p className="text-xs text-gray-500">{player.best_percentage}%</p>
                    </div>
                  )}
                  {user && user.id !== player.id && (
                    <Button
                      size="sm"
                      onClick={() => handleCreateChallenge(player.id, player.username)}
                      className="h-7 md:h-8 py-0 px-2 md:px-3 text-xs bg-green-600 hover:bg-green-700"
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

export default SimpleTopPlayers;
