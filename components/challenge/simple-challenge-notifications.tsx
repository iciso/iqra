"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, RefreshCw, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function SimpleChallengeNotifications() {
  const { user, loading: authLoading } = useAuth()
  const [challenges, setChallenges] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🔔 SIMPLE DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    if (!authLoading && user) {
      loadChallenges()
    }
  }, [user, authLoading])

  const loadChallenges = async () => {
    if (!user) {
      addDebug("No user - skipping")
      return
    }

    addDebug("Starting simple load...")
    setLoading(true)
    setError(null)

    try {
      // Step 1: Test basic connection
      addDebug("Step 1: Testing basic connection...")
      const { data: testData, error: testError } = await supabase
        .from("user_profiles")
        .select("count", { count: "exact", head: true })

      if (testError) {
        addDebug(`Step 1 failed: ${testError.message}`)
        throw testError
      }
      addDebug(`Step 1 success: ${testData} profiles exist`)

      // Step 2: Test user profile access
      addDebug("Step 2: Testing user profile access...")
      const { data: profileData, error: profileError } = await supabase
        .from("user_profiles")
        .select("id, username")
        .eq("id", user.id)
        .single()

      if (profileError) {
        addDebug(`Step 2 failed: ${profileError.message}`)
        throw profileError
      }
      addDebug(`Step 2 success: Found profile for ${profileData.username}`)

      // Step 3: Test challenge table access
      addDebug("Step 3: Testing challenge table access...")
      const { data: challengeCountData, error: challengeCountError } = await supabase
        .from("user_challenges")
        .select("count", { count: "exact", head: true })

      if (challengeCountError) {
        addDebug(`Step 3 failed: ${challengeCountError.message}`)
        throw challengeCountError
      }
      addDebug(`Step 3 success: ${challengeCountData} challenges exist`)

      // Step 4: Try to get challenges for this user
      addDebug("Step 4: Getting user challenges...")
      const { data: userChallenges, error: userChallengeError } = await supabase
        .from("user_challenges")
        .select("id, challenger_id, category, status")
        .eq("challenged_id", user.id)
        .limit(5)

      if (userChallengeError) {
        addDebug(`Step 4 failed: ${userChallengeError.message}`)
        throw userChallengeError
      }
      addDebug(`Step 4 success: Found ${userChallenges?.length || 0} challenges`)

      setChallenges(userChallenges || [])
      addDebug("All steps completed successfully")
    } catch (error: any) {
      addDebug(`Error: ${error.message}`)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Simple Challenge Test
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">Loading authentication...</div>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Simple Challenge Test
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">Please sign in</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Bell className="h-5 w-5" />
            Simple Challenge Test ({challenges.length})
          </div>
          <Button variant="outline" size="sm" onClick={loadChallenges} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Debug Info */}
        <div className="text-xs text-gray-600 p-3 bg-white dark:bg-gray-800 rounded mb-4 max-h-48 overflow-y-auto">
          <p className="font-medium mb-2">Debug Log:</p>
          {debugInfo.map((info, index) => (
            <p key={index} className="text-xs mb-1">
              {info}
            </p>
          ))}
        </div>

        {/* Status */}
        <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded">
          <p className="text-sm">
            <strong>User ID:</strong> {user.id}
          </p>
          <p className="text-sm">
            <strong>Loading:</strong> {loading.toString()}
          </p>
          <p className="text-sm">
            <strong>Challenges Found:</strong> {challenges.length}
          </p>
          <p className="text-sm">
            <strong>Error:</strong> {error || "None"}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Testing database connection...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium">Database Error</p>
              <p className="text-red-600 text-sm">{error}</p>
              <Button variant="outline" size="sm" onClick={loadChallenges} className="mt-2">
                Retry Test
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-medium">Raw Challenge Data:</p>
            {challenges.length === 0 ? (
              <p className="text-gray-500 text-sm">No challenges found</p>
            ) : (
              <div className="space-y-2">
                {challenges.map((challenge, index) => (
                  <div key={challenge.id || index} className="p-2 bg-white dark:bg-gray-800 rounded border text-xs">
                    <p>
                      <strong>ID:</strong> {challenge.id}
                    </p>
                    <p>
                      <strong>Challenger:</strong> {challenge.challenger_id}
                    </p>
                    <p>
                      <strong>Category:</strong> {challenge.category}
                    </p>
                    <p>
                      <strong>Status:</strong> {challenge.status}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
