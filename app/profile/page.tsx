"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Edit, Save, X, Trophy, Users, Gamepad2, Home, UserPlus, MessageSquare } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import {
  getUserProfile,
  updateUserProfile,
  getFriends,
  getUserChallenges,
  getPendingFriendRequests,
  type UserProfile,
  type Challenge,
  type Friendship,
} from "@/lib/supabase-queries"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import UserSearch from "@/components/profile/user-search"
import { toast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [friends, setFriends] = useState<UserProfile[]>([])
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [friendRequests, setFriendRequests] = useState<Friendship[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    full_name: "",
    bio: "",
    username: "",
  })

  useEffect(() => {
    if (user) {
      loadUserData()
    }
  }, [user])

  const loadUserData = async () => {
    if (!user) return

    try {
      setLoading(true)
      const [profileData, friendsData, challengesData, requestsData] = await Promise.all([
        getUserProfile(user.id),
        getFriends(user.id),
        getUserChallenges(user.id),
        getPendingFriendRequests(user.id),
      ])

      if (profileData) {
        setProfile(profileData)
        setEditForm({
          full_name: profileData.full_name || "",
          bio: profileData.bio || "",
          username: profileData.username,
        })
      }

      setFriends(friendsData)
      setChallenges(challengesData)
      setFriendRequests(requestsData)
    } catch (error) {
      console.error("Error loading user data:", error)
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    if (!user || !profile) return

    try {
      const updatedProfile = await updateUserProfile(user.id, editForm)
      setProfile(updatedProfile)
      setEditing(false)
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully!",
      })
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      })
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getChallengeStatus = (challenge: Challenge) => {
    if (!user) return "unknown"

    const isChallenger = challenge.challenger_id === user.id
    const userCompleted = isChallenger ? challenge.challenger_completed_at : challenge.challenged_completed_at
    const opponentCompleted = isChallenger ? challenge.challenged_completed_at : challenge.challenger_completed_at

    if (challenge.status === "completed") return "completed"
    if (challenge.status === "pending") return isChallenger ? "sent" : "received"
    if (challenge.status === "accepted" && !userCompleted) return "active"
    if (challenge.status === "accepted" && userCompleted && !opponentCompleted) return "waiting"

    return challenge.status
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <p>Please sign in to view your profile</p>
            <Link href="/">
              <Button className="mt-4">Go Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-full">
            <Home className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-16">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profile?.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700 text-xl">
                    {profile ? getUserInitials(profile) : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  {editing ? (
                    <div className="space-y-2">
                      <Input
                        value={editForm.full_name}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, full_name: e.target.value }))}
                        placeholder="Full name"
                      />
                      <Input
                        value={editForm.username}
                        onChange={(e) => setEditForm((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="Username"
                      />
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold">{profile?.full_name || profile?.username}</h1>
                      <p className="text-gray-600">@{profile?.username}</p>
                    </>
                  )}

                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="secondary">
                      <Trophy className="h-3 w-3 mr-1" />
                      Best: {profile?.best_percentage || 0}%
                    </Badge>
                    <Badge variant="outline">
                      <Users className="h-3 w-3 mr-1" />
                      {friends.length} friends
                    </Badge>
                    <Badge variant="outline">
                      <Gamepad2 className="h-3 w-3 mr-1" />
                      {challenges.length} challenges
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {editing ? (
                  <>
                    <Button size="sm" onClick={handleSaveProfile}>
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
              </div>
            </div>

            {editing ? (
              <div className="mt-4">
                <Textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell us about yourself..."
                  className="resize-none"
                />
              </div>
            ) : (
              profile?.bio && <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.bio}</p>
            )}
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="requests">
              Requests {friendRequests.length > 0 && `(${friendRequests.length})`}
            </TabsTrigger>
            <TabsTrigger value="search">Find Users</TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5" />
                  Your Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                {challenges.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Gamepad2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No challenges yet</p>
                    <p className="text-sm">Challenge your friends to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {challenges.map((challenge) => (
                      <div key={challenge.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={
                                challenge.challenger_id === user.id
                                  ? challenge.challenged?.avatar_url
                                  : challenge.challenger?.avatar_url
                              }
                            />
                            <AvatarFallback>
                              {challenge.challenger_id === user.id
                                ? challenge.challenged?.username.charAt(0).toUpperCase()
                                : challenge.challenger?.username.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">
                              {challenge.challenger_id === user.id ? "vs " : "from "}
                              {challenge.challenger_id === user.id
                                ? challenge.challenged?.full_name || challenge.challenged?.username
                                : challenge.challenger?.full_name || challenge.challenger?.username}
                            </p>
                            <p className="text-sm text-gray-500">
                              {challenge.category} • {challenge.difficulty} • {formatDate(challenge.created_at)}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            getChallengeStatus(challenge) === "completed"
                              ? "default"
                              : getChallengeStatus(challenge) === "active"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {getChallengeStatus(challenge)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="friends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Your Friends ({friends.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {friends.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No friends yet</p>
                    <p className="text-sm">Search for users to add as friends!</p>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {friends.map((friend) => (
                      <div key={friend.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={friend.avatar_url || "/placeholder.svg"} />
                              <AvatarFallback className="bg-green-100 text-green-700">
                                {getUserInitials(friend)}
                              </AvatarFallback>
                            </Avatar>
                            {friend.is_online && (
                              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{friend.full_name || friend.username}</p>
                            <p className="text-sm text-gray-500">
                              {friend.is_online ? "Online" : `Last seen ${formatDate(friend.last_seen)}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm">
                            <Gamepad2 className="h-4 w-4 mr-1" />
                            Challenge
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Friend Requests ({friendRequests.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {friendRequests.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <UserPlus className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No pending friend requests</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {friendRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={request.requester?.avatar_url || "/placeholder.svg"} />
                            <AvatarFallback className="bg-green-100 text-green-700">
                              {request.requester ? getUserInitials(request.requester) : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{request.requester?.full_name || request.requester?.username}</p>
                            <p className="text-sm text-gray-500">Sent {formatDate(request.created_at)}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                          <Button size="sm">Accept</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Find Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <UserSearch />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
