"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, Users, Gamepad2 } from "lucide-react"
import { searchUsers, sendFriendRequest, createChallenge, type UserProfile } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/hooks/use-toast"

export default function UserSearch() {
  const { user } = useAuth()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(false)
  const [sendingRequest, setSendingRequest] = useState<string | null>(null)
  const [creatingChallenge, setCreatingChallenge] = useState<string | null>(null)

  useEffect(() => {
    console.log("🔍 USER SEARCH COMPONENT: Mounted with user:", user?.id)
  }, [user])

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.trim().length > 2) {
        console.log("🔍 USER SEARCH: Starting search for:", query)
        setLoading(true)
        try {
          const users = await searchUsers(query)
          console.log("🔍 USER SEARCH: Search results:", users)
          // Filter out current user
          const filteredUsers = users.filter((u) => u.id !== user?.id)
          console.log("🔍 USER SEARCH: Filtered results:", filteredUsers)
          setResults(filteredUsers)
        } catch (error) {
          console.error("🔍 USER SEARCH: Search error:", error)
          toast({
            title: "Search Error",
            description: "Failed to search users. Please try again.",
            variant: "destructive",
          })
        } finally {
          setLoading(false)
        }
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [query, user?.id])

  const handleSendFriendRequest = async (userId: string) => {
    if (!user) return

    setSendingRequest(userId)
    try {
      await sendFriendRequest(userId)
      toast({
        title: "Friend Request Sent",
        description: "Your friend request has been sent successfully!",
      })
      // Remove user from results or update their status
      setResults((prev) => prev.filter((u) => u.id !== userId))
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send friend request",
        variant: "destructive",
      })
    } finally {
      setSendingRequest(null)
    }
  }

  const handleCreateChallenge = async (userId: string) => {
    if (!user) return

    setCreatingChallenge(userId)
    try {
      await createChallenge(userId, "quran", "easy", 10, 300)
      toast({
        title: "Challenge Sent",
        description: "Your quiz challenge has been sent!",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create challenge",
        variant: "destructive",
      })
    } finally {
      setCreatingChallenge(null)
    }
  }

  const getUserInitials = (profile: UserProfile) => {
    if (profile.full_name) {
      return profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return profile.username.charAt(0).toUpperCase()
  }

  const getOnlineStatus = (profile: UserProfile) => {
    if (profile.is_online) return "online"

    const lastSeen = new Date(profile.last_seen)
    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - lastSeen.getTime()) / (1000 * 60))

    if (diffMinutes < 5) return "recently"
    if (diffMinutes < 60) return `${diffMinutes}m ago`
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`
    return `${Math.floor(diffMinutes / 1440)}d ago`
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search for users to challenge..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {loading && <div className="text-center py-4 text-gray-500">Searching...</div>}

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((profile) => (
            <Card key={profile.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={profile.avatar_url || "/placeholder.svg"} />
                        <AvatarFallback className="bg-green-100 text-green-700">
                          {getUserInitials(profile)}
                        </AvatarFallback>
                      </Avatar>
                      {profile.is_online && (
                        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{profile.full_name || profile.username}</h3>
                        {profile.username !== profile.full_name && (
                          <span className="text-sm text-gray-500">@{profile.username}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{getOnlineStatus(profile)}</span>
                        {profile.best_percentage > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            Best: {profile.best_percentage}%
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSendFriendRequest(profile.id)}
                      disabled={sendingRequest === profile.id}
                      className="h-8 w-8 p-0"
                    >
                      {sendingRequest === profile.id ? (
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                      ) : (
                        <UserPlus className="h-3 w-3" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleCreateChallenge(profile.id)}
                      disabled={creatingChallenge === profile.id}
                      className="h-8 w-8 p-0 bg-green-600 hover:bg-green-700"
                    >
                      {creatingChallenge === profile.id ? (
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      ) : (
                        <Gamepad2 className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {query.length > 2 && !loading && results.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No users found matching "{query}"</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      )}
    </div>
  )
}
