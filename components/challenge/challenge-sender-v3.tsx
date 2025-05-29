"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, Users, Search, Trophy, Zap, RefreshCw } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import ChallengeScoringInfo from "./challenge-scoring-info"
import { useAuth } from "@/contexts/auth-context"

interface User {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score?: number
  best_percentage?: number
}

export default function ChallengeSenderV3() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [topPlayers, setTopPlayers] = useState<User[]>([])
  const [selectedCategory, setSelectedCategory] = useState("quran")
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed")
  const [loading, setLoading] = useState(false)
  const [topPlayersLoading, setTopPlayersLoading] = useState(false)
  const [sendingChallenge, setSendingChallenge] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState("")

  console.log("🆕🆕🆕 CHALLENGE SENDER V3 COMPONENT LOADED - DEBUGGING VERSION!")

  useEffect(() => {
    if (user) {
      loadTopPlayers()
    }
  }, [user])

  const loadTopPlayers = async () => {
    console.log("🔥 Loading top players...")
    setTopPlayersLoading(true)
    setDebugInfo("Loading top players...")

    try {
      // First try to get all users to see what's available
      const { data: allUsers, error: allUsersError } = await supabase
        .from("user_profiles")
        .select("id, username, full_name")
        .limit(20)

      if (allUsersError) {
        console.error("❌ Error loading all users:", allUsersError)
        setDebugInfo(`Error loading all users: ${allUsersError.message}`)
      } else {
        console.log("✅ All users available:", allUsers)
        setDebugInfo(`Found ${allUsers?.length || 0} total users`)
      }

      // Now try to get top players
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .order("total_score", { ascending: false })
        .limit(8)

      if (error) {
        console.error("❌ Error loading top players:", error)
        setDebugInfo(`Error loading top players: ${error.message}`)
        return
      }

      console.log("✅ Top players loaded:", data)
      setTopPlayers(data || [])
      setDebugInfo(`Loaded ${data?.length || 0} top players`)
    } catch (error: any) {
      console.error("❌ Error in loadTopPlayers:", error)
      setDebugInfo(`Caught error: ${error.message}`)
    } finally {
      setTopPlayersLoading(false)
    }
  }

  const searchUsers = async (query: string) => {
    console.log("🔍 Searching for users with query:", query)
    setDebugInfo(`Searching for: ${query}`)

    if (!query || query.length < 2) {
      console.log("🔍 Query too short, clearing results")
      setSearchResults([])
      return
    }

    setLoading(true)
    try {
      console.log("🔍 Making database query...")
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
        .limit(10)

      if (error) {
        console.error("❌ Error searching users:", error)
        setDebugInfo(`Search error: ${error.message}`)
        toast({
          title: "Search Error",
          description: "Failed to search for users",
          variant: "destructive",
        })
        return
      }

      console.log("✅ Search results:", data)
      setSearchResults(data || [])
      setDebugInfo(`Found ${data?.length || 0} users matching "${query}"`)
    } catch (error: any) {
      console.error("❌ Error in searchUsers:", error)
      setDebugInfo(`Caught error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSearchChange = (value: string) => {
    console.log("🔍 Search input changed:", value)
    setSearchQuery(value)
    searchUsers(value)
  }

  const sendChallenge = async (challengedUser: User) => {
    console.log("🎯 V3: Challenge button clicked for:", challengedUser.username)
    console.log("🚀🚀🚀 V3 COMPONENT - DIRECT SUPABASE CHALLENGE CREATION STARTING!")

    setSendingChallenge(challengedUser.id)

    try {
      // Get current user from session
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session?.user) {
        throw new Error("No authenticated user found")
      }

      console.log("✅ V3: Got current user from session:", session.user.id)

      const challengeData = {
        challenger_id: session.user.id,
        challenged_id: challengedUser.id,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        question_count: 10,
        time_limit: 300,
        status: "pending",
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
      }

      console.log("✅ V3: Starting challenge creation:", challengeData)

      const { data, error } = await supabase.from("user_challenges").insert(challengeData).select().single()

      if (error) {
        console.error("❌ V3: Challenge creation failed:", error)
        throw error
      }

      console.log("🎉 V3: Challenge created successfully:", data)

      toast({
        title: "Challenge Sent! 🎯",
        description: `Challenge sent to ${challengedUser.full_name || challengedUser.username}`,
      })

      // Clear search after successful challenge
      setSearchQuery("")
      setSearchResults([])
    } catch (error: any) {
      console.error("❌ V3: Error in sendChallenge:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      })
    } finally {
      setSendingChallenge(null)
    }
  }

  const getUserInitials = (user: User) => {
    if (user.full_name) {
      return user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return user.username.charAt(0).toUpperCase()
  }

  const categories = [
    { value: "quran", label: "Quran Knowledge" },
    { value: "seerah", label: "Seerah" },
    { value: "fiqh", label: "Fiqh" },
    { value: "hadeeth", label: "Hadeeth" },
    { value: "aqeedah", label: "Aqeedah" },
    { value: "tafsir", label: "Tafsir" },
    { value: "comparative", label: "Comparative Religion" },
    { value: "islamic-finance", label: "Islamic Finance" },
    { value: "tazkiyah", label: "Tazkiyah" },
    { value: "history", label: "Islamic History" },
    { value: "dawah", label: "Dawah" },
  ]

  const difficulties = [
    { value: "easy", label: "Easy" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "mixed", label: "Mixed" },
  ]

  // Debug section
  const debugSection = (
    <div className="text-xs text-gray-500 p-2 bg-gray-50 dark:bg-gray-800 rounded mt-2">
      <p>Debug: User ID: {user?.id}</p>
      <p>Debug Info: {debugInfo}</p>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Challenge Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Challenge Settings
            </div>
            <ChallengeScoringInfo />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <Trophy className="h-4 w-4 inline mr-1" />
              <strong>Fair Scoring:</strong> You'll get points even if your challenge is declined! Click the info button
              above to learn more.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Find Challengers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by username or name..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              {loading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
                </div>
              )}
            </div>

            {searchQuery && searchQuery.length >= 2 && (
              <div className="text-sm text-gray-500">
                {loading ? "Searching..." : `Found ${searchResults.length} result(s) for "${searchQuery}"`}
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300">Search Results</h4>
                {searchResults.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                        <AvatarFallback className="bg-green-100 text-green-700">{getUserInitials(user)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium dark:text-white">{user.full_name || user.username}</p>
                        <p className="text-sm text-gray-500">@{user.username}</p>
                        {user.best_percentage && (
                          <Badge variant="secondary" className="text-xs">
                            Best: {user.best_percentage}%
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => sendChallenge(user)}
                      disabled={sendingChallenge === user.id}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {sendingChallenge === user.id ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      ) : (
                        <>
                          <Zap className="h-4 w-4 mr-1" />
                          Challenge
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {searchQuery && searchQuery.length >= 2 && searchResults.length === 0 && !loading && (
              <div className="text-center py-4 text-gray-500">No users found matching "{searchQuery}"</div>
            )}

            {debugSection}
          </div>
        </CardContent>
      </Card>

      {/* Top Players */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Top Players ({topPlayers.length})
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={loadTopPlayers}
              disabled={topPlayersLoading}
              className="h-8 w-8 p-0"
            >
              <RefreshCw className={`h-4 w-4 ${topPlayersLoading ? "animate-spin" : ""}`} />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {topPlayersLoading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            </div>
          ) : topPlayers.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              <p>No top players found</p>
              <Button onClick={loadTopPlayers} variant="outline" className="mt-2">
                Refresh
              </Button>
            </div>
          ) : (
            <div className="grid gap-3">
              {topPlayers.map((user, index) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                        <AvatarFallback className="bg-green-100 text-green-700">{getUserInitials(user)}</AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">{user.full_name || user.username}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {user.best_percentage || 0}%
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {user.total_score || 0} pts
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => sendChallenge(user)}
                    disabled={sendingChallenge === user.id}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {sendingChallenge === user.id ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-1" />
                        Challenge
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}

          {debugSection}
        </CardContent>
      </Card>
    </div>
  )
}
