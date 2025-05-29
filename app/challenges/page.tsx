"use client"
import { Button } from "@/components/ui/button"
import ProfileChallengeNotifications from "@/components/challenge/profile-challenge-notifications"
import WorkingChallengeSender from "@/components/challenge/working-challenge-sender"
import SimpleDbTest from "@/components/debug/simple-db-test"
import { useAuth } from "@/contexts/auth-context"

export default function ChallengesPage() {
  const { user, loading: authLoading } = useAuth()

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
        {/* Add debug test component */}
        <SimpleDbTest />

        <ProfileChallengeNotifications />

        {/* Use the new working challenge sender */}
        <WorkingChallengeSender />
      </div>
    </div>
  )
}
