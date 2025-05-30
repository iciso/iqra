"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Gamepad2, Search, Zap, RefreshCw, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface User {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score?: number
  best_percentage?: number
}

export default function WorkingChallengeSender() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [selectedCategory, setSelectedCategory] = useState("quran")
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed")
  const [loading, setLoading] = useState(false)
  const [sendingChallenge, setSendingChallenge] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🎯 CHALLENGE SENDER:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    if (user) {
      addDebug(`User authenticated: ${user.email}`)
      loadAllUsers()
    } else {
      addDebug("No user found, waiting for authentication...")
    }
  }, [user])

  const loadAllUsers = async () => {
    if (!user) {
      addDebug("Cannot load users - no authenticated user")
      return
    }

    addDebug("Starting to load all users...")
    setLoading(true)

    try {
      // Use the exact same query that works in the database test
      addDebug("Executing user profiles query...")
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .neq("id", user.id)
        .order("total_score", { ascending: false })
        .limit(20)

      if (error) {
        addDebug(`Database error: ${error.message}`)
        console.error("🎯 Error loading users:", error)
        throw error
      }

      addDebug(`Query successful - received ${data?.length || 0} users`)
      console.log("🎯 Raw user data:", data)

      if (data && data.length > 0) {
        setAllUsers(data)
        addDebug(`Successfully loaded ${data.length} users`)

        // Log first few users for debugging
        data.slice(0, 3).forEach((user, index) => {
          addDebug(`User ${index + 1}: ${user.username} (${user.full_name || "No name"})`)
        })
      } else {
        addDebug("No users returned from query")
        setAllUsers([])
      }
    } catch (error: any) {
      addDebug(`Failed to load users: ${error.message}`)
      console.error("🎯 Failed to load users:", error)
      toast({
        title: "Error",
        description: "Failed to load users. Please try again.",
        variant: "destructive",
      })
      setAllUsers([])
    } finally {
      setLoading(false)
      addDebug("User loading completed")
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (!query || query.length < 2) {
      setSearchResults([])
      addDebug("Search query too short, clearing results")
      return
    }

    addDebug(`Searching for: "${query}" in ${allUsers.length} users`)

    // Filter from already loaded users
    const filtered = allUsers.filter(
      (user) =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        (user.full_name && user.full_name.toLowerCase().includes(query.toLowerCase())),
    )

    addDebug(`Found ${filtered.length} matches for "${query}"`)
    setSearchResults(filtered)
  }

  const sendChallenge = async (challengedUser: User) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be signed in to send challenges",
        variant: "destructive",
      })
      return
    }

    addDebug(`Sending challenge to: ${challengedUser.username}`)
    setSendingChallenge(challengedUser.id)

    try {
      const challengeData = {
        challenger_id: user.id,
        challenged_id: challengedUser.id,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        question_count: 10,
        time_limit: 300,
        status: "challenger_turn", // New status: challenger needs to take quiz first
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }

      addDebug(`Creating challenge with data: ${JSON.stringify(challengeData)}`)

      const { data, error } = await supabase.from("user_challenges").insert(challengeData).select().single()

      if (error) {
        addDebug(`Challenge creation failed: ${error.message}`)
        throw error
      }

      addDebug(`Challenge created successfully: ${data.id}`)

      // Store challenge info for the quiz
      localStorage.setItem("currentChallengeId", data.id)
      localStorage.setItem("challengedUserName", challengedUser.full_name || challengedUser.username)

      toast({
        title: "Challenge Created! 🎯",
        description: `Now take your quiz first, then ${challengedUser.full_name || challengedUser.username} will get the same questions`,
      })

      // Redirect challenger to take the quiz first
      const quizUrl = `/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}&challenge=${data.id}&questions=10&challengerTurn=true&opponent=${challengedUser.id}&opponentName=${encodeURIComponent(challengedUser.full_name || challengedUser.username)}`

      addDebug(`Redirecting to quiz: ${quizUrl}`)
      router.push(quizUrl)
    } catch (error: any) {
      addDebug(`Challenge error: ${error.message}`)
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

  if (authLoading) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            <span className="ml-2 text-sm text-gray-500">Loading authentication...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return (
      <Card>
        <CardContent className="py-8">
          <p className="text-center text-gray-500">Please sign in to send challenges</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <CardHeader>
          <CardTitle className="text-sm text-blue-800 dark:text-blue-200">Challenge Sender Debug</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-blue-600 dark:text-blue-300 space-y-1">
            <p>User: {user.email}</p>
            <p>Auth Loading: {authLoading.toString()}</p>
            <p>Users Loading: {loading.toString()}</p>
            <p>All Users Count: {allUsers.length}</p>
            <p>Search Results: {searchResults.length}</p>
            <div className="mt-2">
              <p className="font-medium">Debug Log:</p>
              {debugInfo.map((info, index) => (
                <p key={index} className="text-xs">
                  {info}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenge Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Challenge Settings
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

          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>How it works:</strong> When you challenge someone, you'll take the quiz first. After you complete
              it, they'll get the same questions to answer.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Players
            </div>
            <Button variant="outline" size="sm" onClick={loadAllUsers} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Reload
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Search by username or name..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
                <span className="ml-2 text-sm text-gray-500">Loading users...</span>
              </div>
            ) : allUsers.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                <p>No other users found</p>
                <p className="text-xs mt-1">Database shows users exist but none loaded here</p>
                <Button onClick={loadAllUsers} variant="outline" className="mt-2">
                  Try Again
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Search Results */}
                {searchQuery && searchQuery.length >= 2 && (
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Search Results ({searchResults.length})
                    </h4>
                    {searchResults.length === 0 ? (
                      <p className="text-gray-500 text-sm">No matches found for "{searchQuery}"</p>
                    ) : (
                      <div className="space-y-2">
                        {searchResults.map((searchUser) => (
                          <div
                            key={searchUser.id}
                            className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600"
                          >
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={searchUser.avatar_url || "/placeholder.svg"} />
                                <AvatarFallback className="bg-green-100 text-green-700">
                                  {getUserInitials(searchUser)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium dark:text-white">
                                  {searchUser.full_name || searchUser.username}
                                </p>
                                <p className="text-sm text-gray-500">@{searchUser.username}</p>
                                {searchUser.best_percentage && (
                                  <Badge variant="secondary" className="text-xs">
                                    Best: {searchUser.best_percentage}%
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <Button
                              onClick={() => sendChallenge(searchUser)}
                              disabled={sendingChallenge === searchUser.id}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {sendingChallenge === searchUser.id ? (
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
                  </div>
                )}

                {/* All Users (when not searching) */}
                {(!searchQuery || searchQuery.length < 2) && (
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
                      All Players ({allUsers.length})
                    </h4>
                    <div className="grid gap-3 max-h-96 overflow-y-auto">
                      {allUsers.map((player, index) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={player.avatar_url || "/placeholder.svg"} />
                                <AvatarFallback className="bg-green-100 text-green-700">
                                  {getUserInitials(player)}
                                </AvatarFallback>
                              </Avatar>
                              {index < 3 && (
                                <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                  {index + 1}
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium dark:text-white">{player.full_name || player.username}</p>
                              <p className="text-sm text-gray-500">@{player.username}</p>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {player.best_percentage || 0}%
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {player.total_score || 0} pts
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => sendChallenge(player)}
                            disabled={sendingChallenge === player.id}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {sendingChallenge === player.id ? (
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
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
