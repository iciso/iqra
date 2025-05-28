"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Trophy, Star, Clock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { searchUsers, getFriends, type UserProfile } from "@/lib/supabase-queries"
import DirectChallengeButton from "./direct-challenge-button"

interface FindChallengersDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectChallenger: (challenger: UserProfile) => void
}

export default function FindChallengersDialog({ open, onOpenChange, onSelectChallenger }: FindChallengersDialogProps) {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<UserProfile[]>([])
  const [friends, setFriends] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("friends")

  useEffect(() => {
    if (open && user) {
      loadFriends()
    }
  }, [open, user])

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchQuery.trim().length > 2) {
        setLoading(true)
        try {
          const users = await searchUsers(searchQuery)
          setSearchResults(users.filter((u) => u.id !== user?.id))
        } catch (error) {
          console.error("Search error:", error)
        } finally {
          setLoading(false)
        }
      } else {
        setSearchResults([])
      }
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchQuery, user?.id])

  const loadFriends = async () => {
    if (!user) return
    try {
      const friendsData = await getFriends(user.id)
      setFriends(friendsData)
    } catch (error) {
      console.error("Error loading friends:", error)
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
    const lastSeen = profile.last_seen ? new Date(profile.last_seen) : null
    if (!lastSeen) return "unknown"

    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - lastSeen.getTime()) / (1000 * 60))

    if (diffMinutes < 5) return "recently"
    if (diffMinutes < 60) return `${diffMinutes}m ago`
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`
    return `${Math.floor(diffMinutes / 1440)}d ago`
  }

  const UserCard = ({ profile }: { profile: UserProfile }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={profile.avatar_url || "/placeholder.svg"} />
                <AvatarFallback className="bg-green-100 text-green-700">{getUserInitials(profile)}</AvatarFallback>
              </Avatar>
              {profile.is_online && (
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{profile.full_name || profile.username}</h3>
                {profile.best_percentage > 80 && <Star className="h-4 w-4 text-yellow-500" />}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {getOnlineStatus(profile)}
                </span>
                {profile.best_percentage > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    Best: {profile.best_percentage}%
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <DirectChallengeButton userId={profile.id} userName={profile.full_name || profile.username} />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Find Your Next Challenger
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="friends">Friends ({friends.length})</TabsTrigger>
            <TabsTrigger value="search">Search Users</TabsTrigger>
            <TabsTrigger value="leaderboard">Top Players</TabsTrigger>
          </TabsList>

          <TabsContent value="friends" className="space-y-4">
            {friends.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No friends yet</p>
                <p className="text-sm">Search for users to add as friends!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {friends.map((friend) => (
                  <UserCard key={friend.id} profile={friend} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="search" className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for users to challenge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {loading && <div className="text-center py-4 text-gray-500">Searching...</div>}

            {searchResults.length > 0 && (
              <div className="space-y-3">
                {searchResults.map((user) => (
                  <UserCard key={user.id} profile={user} />
                ))}
              </div>
            )}

            {searchQuery.length > 2 && !loading && searchResults.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No users found matching "{searchQuery}"</p>
                <p className="text-sm">Try a different search term</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <Trophy className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Top Players Coming Soon</p>
              <p className="text-sm">Challenge the best IQRA players!</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
