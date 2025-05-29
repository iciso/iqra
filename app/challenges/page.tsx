"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Trophy, Users } from "lucide-react"
import ProfileChallengeNotifications from "@/components/challenge/profile-challenge-notifications"
import UserSearch from "@/components/profile/user-search"
import TopPlayers from "@/components/challenge/top-players"
import { useAuth } from "@/contexts/auth-context"

export default function ChallengesPage() {
  const { user, loading: authLoading } = useAuth()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (authLoading) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
          <span className="ml-2">Loading...</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
          <p className="mb-6">Please sign in to view and manage challenges.</p>
          <Button asChild>
            <a href="/auth">Sign In</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Challenge Center</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your Islamic knowledge against time and compete with others on our leaderboards
        </p>
      </div>

      <div className="grid gap-6">
        <ProfileChallengeNotifications />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Find Challengers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="search">
              <TabsList className="mb-4">
                <TabsTrigger value="search">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </TabsTrigger>
                <TabsTrigger value="top">
                  <Trophy className="h-4 w-4 mr-2" />
                  Top Players
                </TabsTrigger>
              </TabsList>

              <TabsContent value="search">
                <UserSearch
                  placeholder="Search for users to challenge..."
                  buttonText="Challenge"
                  onSelectUser={(user) => {
                    console.log("Selected user to challenge:", user)
                    // Open challenge dialog
                    setIsDialogOpen(true)
                  }}
                />
              </TabsContent>

              <TabsContent value="top">
                <TopPlayers />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
