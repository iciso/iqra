"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import { LoadingAnimation } from "@/components/loading-animation"

export default function ChallengeFlowTestPage() {
  const router = useRouter()
  const { user, profile, loading } = useAuth()
  const [challenges, setChallenges] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [testResults, setTestResults] = useState<{
    toastShown: boolean
    redirectTriggered: boolean
    dbUpdateAttempted: boolean
    dbUpdateSuccess: boolean
    error: string | null
  }>({
    toastShown: false,
    redirectTriggered: false,
    dbUpdateAttempted: false,
    dbUpdateSuccess: false,
    error: null,
  })
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null)

  useEffect(() => {
    if (user && !loading) {
      fetchChallenges()
    } else if (!loading && !user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to test the challenge flow.",
        variant: "destructive",
      })
    }
  }, [user, loading])

  const fetchChallenges = async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from("user_challenges")
        .select(`
          id,
          challenger_id,
          challenged_id,
          category,
          difficulty,
          status,
          challenger:user_profiles!user_challenges_challenger_id_fkey (
            username,
            full_name,
            avatar_url
          )
        `)
        .eq("challenged_id", user?.id)
        .eq("status", "accepted")
        .order("created_at", { ascending: false })
        .limit(10)

      if (error) {
        console.error("Error fetching challenges:", error)
        toast({
          title: "Error",
          description: "Failed to fetch challenges",
          variant: "destructive",
        })
      } else {
        setChallenges(data || [])
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const simulateQuizCompletion = async (challengeId: string) => {
    setIsLoading(true)
    const challenge = challenges.find((c) => c.id === challengeId)
    setSelectedChallenge(challenge)

    // Reset test results
    setTestResults({
      toastShown: false,
      redirectTriggered: false,
      dbUpdateAttempted: false,
      dbUpdateSuccess: false,
      error: null,
    })

    try {
      // 1. Show toast notification
      toast({
        title: "Challenge Completed!",
        description: `Your score (8/10) has been recorded. View the leaderboard to see results.`,
        duration: 5000,
      })

      setTestResults((prev) => ({ ...prev, toastShown: true }))

      // 2. Update challenge status in database
      setTestResults((prev) => ({ ...prev, dbUpdateAttempted: true }))

      const { error } = await supabase
        .from("user_challenges")
        .update({
          status: "completed",
          challenged_score: 8, // Simulated score
          challenged_completed_at: new Date().toISOString(),
        })
        .eq("id", challengeId)

      if (error) {
        console.error("Error updating challenge status:", error)
        setTestResults((prev) => ({
          ...prev,
          dbUpdateSuccess: false,
          error: error.message,
        }))
      } else {
        setTestResults((prev) => ({ ...prev, dbUpdateSuccess: true }))

        // 3. Simulate redirect (but don't actually redirect in test mode)
        setTestResults((prev) => ({ ...prev, redirectTriggered: true }))

        // Refresh challenges list
        await fetchChallenges()
      }
    } catch (error: any) {
      console.error("Error in simulation:", error)
      setTestResults((prev) => ({
        ...prev,
        error: error.message || "Unknown error occurred",
      }))
    } finally {
      setIsLoading(false)
    }
  }

  const actualRedirect = () => {
    router.push("/leaderboard")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingAnimation size="lg" text="Loading authentication..." />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please sign in to test the challenge flow.</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/auth")}>Sign In</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Challenge Flow Test - Challenged User</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This page tests the flow for a challenged user completing a quiz:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Toast notification should appear</li>
            <li>Challenge status should update to "completed" in the database</li>
            <li>User should be redirected to the leaderboard</li>
          </ol>
        </CardContent>
      </Card>

      {isLoading ? (
        <div className="flex justify-center my-8">
          <LoadingAnimation size="md" text="Loading challenges..." />
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Your Active Challenges</h2>

          {challenges.length === 0 ? (
            <Card>
              <CardContent className="py-6">
                <p className="text-center text-gray-500">
                  No active challenges found. You need to accept a challenge first.
                </p>
                <div className="flex justify-center mt-4">
                  <Button onClick={() => router.push("/challenges")}>Go to Challenges</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {challenges.map((challenge) => (
                <Card key={challenge.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Challenge from {challenge.challenger?.full_name || challenge.challenger?.username || "Unknown"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Category:</strong> {challenge.category}
                    </p>
                    <p>
                      <strong>Difficulty:</strong> {challenge.difficulty}
                    </p>
                    <p>
                      <strong>Status:</strong> {challenge.status}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => simulateQuizCompletion(challenge.id)} disabled={isLoading}>
                      Test Completion Flow
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {selectedChallenge && (
            <Card className="mt-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Toast Notification:</span>{" "}
                    {testResults.toastShown ? (
                      <span className="text-green-600">✓ Shown</span>
                    ) : (
                      <span className="text-red-600">✗ Not shown</span>
                    )}
                  </p>
                  <p>
                    <span className="font-medium">Database Update:</span>{" "}
                    {testResults.dbUpdateAttempted ? (
                      testResults.dbUpdateSuccess ? (
                        <span className="text-green-600">✓ Successful</span>
                      ) : (
                        <span className="text-red-600">✗ Failed</span>
                      )
                    ) : (
                      <span className="text-yellow-600">⟳ Not attempted</span>
                    )}
                  </p>
                  <p>
                    <span className="font-medium">Redirect Triggered:</span>{" "}
                    {testResults.redirectTriggered ? (
                      <span className="text-green-600">✓ Ready</span>
                    ) : (
                      <span className="text-red-600">✗ Not triggered</span>
                    )}
                  </p>

                  {testResults.error && (
                    <p className="text-red-600">
                      <span className="font-medium">Error:</span> {testResults.error}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={fetchChallenges}>
                  Refresh Challenges
                </Button>
                {testResults.redirectTriggered && testResults.dbUpdateSuccess && (
                  <Button onClick={actualRedirect}>Go to Leaderboard</Button>
                )}
              </CardFooter>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
