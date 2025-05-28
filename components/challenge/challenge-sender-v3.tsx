"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, Gamepad2, Trophy, Star, UserPlus, Zap, Target, Clock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { searchUsers, getFriends, sendFriendRequest, type UserProfile } from "@/lib/supabase-queries"
import { toast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

interface ChallengeSenderV3Props {
  onChallengerSelect: (challenger: UserProfile) => void
  currentChallenger?: UserProfile | null
}

export default function ChallengeSenderV3({ onChallengerSelect, currentChallenger }: ChallengeSenderV3Props) {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<UserProfile[]>([])
  const [friends, setFriends] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("friends")

  // Challenge creation state
  const [challengeDialog, setChallengeDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null)
  const [challengeCategory, setChallengeCategory] = useState("quran")
  const [challengeDifficulty, setChallengeDifficulty] = useState("mixed")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)

  // Category options
  const categoryOptions = [
    { value: "quran", label: "Quran Knowledge" },
    { value: "seerah", label: "Seerah (Prophet's Biography)" },
    { value: "fiqh", label: "Fiqh (Islamic Jurisprudence)" },
    { value: "hadeeth", label: "Hadeeth" },
    { value: "aqeedah", label: "Aqeedah (Islamic Creed)" },
    { value: "tafsir", label: "Tafsir (Quran Commentary)" },
    { value: "comparative", label: "Comparative Religion" },
    { value: "islamic-finance", label: "Islamic Finance" },
    { value: "tazkiyah", label: "Tazkiyah (Spiritual Purification)" },
    { value: "history", label: "Islamic History & Civilization" },
    { value: "dawah", label: "Dawah (Islamic Outreach)" },
  ]

  // Difficulty options
  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "mixed", label: "Mixed" },
  ]

  useEffect(() => {
    console.log("🆕🆕🆕 CHALLENGE SENDER V3 COMPONENT LOADED - COMPLETELY FRESH CODE!")
    if (isOpen && user) {
      loadFriends()
    }
  }, [isOpen, user])

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

  const handleSendFriendRequest = async (userId: string) => {
    try {
      await sendFriendRequest(userId)
      toast({
        title: "Friend Request Sent",
        description: "Your friend request has been sent successfully!",
      })
      // Remove user from search results
      setSearchResults((prev) => prev.filter((u) => u.id !== userId))
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send friend request",
        variant: "destructive",
      })
    }
  }

  const handleCreateChallenge = async () => {
    console.log("🚀🚀🚀 V3 COMPONENT - DIRECT SUPABASE CHALLENGE CREATION STARTING!")
    console.log("🔥🔥🔥 NO API ROUTES - PURE SUPABASE CLIENT!")

    if (!selectedUser || !user) {
      console.error("❌ V3: Missing selectedUser or user:", { selectedUser, user })
      toast({
        title: "Error",
        description: "Missing user information. Please try signing in again.",
        variant: "destructive",
      })
      return
    }

    console.log("✅ V3: Starting challenge creation:", {
      selectedUser: selectedUser.id,
      category: challengeCategory,
      difficulty: challengeDifficulty,
      user: user.id,
    })

    setIsSubmitting(true)

    try {
      // First, verify we have a valid session
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession()

      if (sessionError || !session?.user) {
        console.error("❌ V3: Session error:", sessionError)
        throw new Error("Please sign in again to send challenges")
      }

      console.log("✅ V3: Valid session found for user:", session.user.id)

      // Calculate expiry date (24 hours from now)
      const expiresAt = new Date()
      expiresAt.setHours(expiresAt.getHours() + 24)

      const challengeData = {
        challenger_id: session.user.id,
        challenged_id: selectedUser.id,
        category: challengeCategory,
        difficulty: challengeDifficulty,
        question_count: 10,
        time_limit: 300,
        status: "pending",
        expires_at: expiresAt.toISOString(),
      }

      console.log("📝 V3: Creating challenge with data:", challengeData)

      // Create the challenge directly with Supabase - ABSOLUTELY NO API CALLS
      const { data, error } = await supabase.from("user_challenges").insert(challengeData).select().single()

      if (error) {
        console.error("❌ V3: Database error creating challenge:", error)
        throw new Error(`Failed to create challenge: ${error.message}`)
      }

      console.log("🎉 V3: Challenge created successfully:", data)

      setChallengeSent(true)

      setTimeout(() => {
        setChallengeDialog(false)
        setSelectedUser(null)
        setChallengeSent(false)
      }, 2000)

      toast({
        title: "Challenge Sent! 🎯",
        description: `You've challenged ${selectedUser.full_name || selectedUser.username} to a ${
          categoryOptions.find((c) => c.value === challengeCategory)?.label
        } quiz!`,
      })
    } catch (error: any) {
      console.error("❌ V3: Challenge creation error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
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

  const UserCard = ({ profile, showAddFriend = false }: { profile: UserProfile; showAddFriend?: boolean }) => (
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
            {showAddFriend && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSendFriendRequest(profile.id)}
                className="h-8 w-8 p-0"
              >
                <UserPlus className="h-3 w-3" />
              </Button>
            )}
            <Button
              size="sm"
              onClick={() => {
                console.log("🎯 V3: Challenge button clicked for:", profile.username)
                setSelectedUser(profile)
                setChallengeDialog(true)
              }}
              className="h-8 px-3 bg-green-600 hover:bg-green-700"
            >
              <Gamepad2 className="h-3 w-3 mr-1" />
              Challenge
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                onChallengerSelect(profile)
                setIsOpen(false)
              }}
              className="h-8 px-3"
            >
              <Target className="h-3 w-3 mr-1" />
              Select
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
            <Users className="h-4 w-4 mr-2" />
            Find Challengers (V3)
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Find Your Next Challenger (V3)
            </DialogTitle>
            <DialogDescription>Search for users to challenge or select from your friends list.</DialogDescription>
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
                    <UserCard key={user.id} profile={user} showAddFriend={true} />
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

      {/* Challenge Creation Dialog */}
      <Dialog open={challengeDialog} onOpenChange={setChallengeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Challenge {selectedUser?.full_name || selectedUser?.username} (V3)
            </DialogTitle>
            <DialogDescription>Select the category and difficulty for your challenge.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {challengeSent ? (
              <div className="text-center py-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Challenge Sent! 🎯</h3>
                <p className="text-gray-500 mb-4">
                  {selectedUser?.full_name || selectedUser?.username} will be notified of your challenge.
                </p>
                <p className="text-sm text-gray-500">
                  They can accept your challenge even when offline and you'll be notified when they complete it.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select value={challengeCategory} onValueChange={setChallengeCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Difficulty</label>
                  <Select value={challengeDifficulty} onValueChange={setChallengeDifficulty}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {difficultyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleCreateChallenge}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending V3...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Send Challenge V3
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setChallengeDialog(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
