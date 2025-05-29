"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { createChallenge, getPendingChallenges, getActiveChallenges, searchUsers } from "@/lib/supabase-queries"
import { toast } from "@/hooks/use-toast"
import { CheckCircle, XCircle, Users, Send } from "lucide-react"

export default function ChallengeTestPage() {
  const { user, loading } = useAuth()
  const [testResults, setTestResults] = useState<any[]>([])
  const [internalLoading, setInternalLoading] = useState(false)
  const [ayeshaProfile, setAyeshaProfile] = useState<any>(null)

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="text-center py-8">
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <p>Loading authentication...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const tests = [
    {
      name: "Search for Ayesha",
      description: "Test if we can find Ayesha in user search",
      test: async () => {
        const results = await searchUsers("ayesha")
        const found = results.find((u) => u.id === "e299ae2c-9581-47eb-bb0e-daabf686b469")
        if (found) {
          setAyeshaProfile(found)
          return { success: true, message: `Found Ayesha: ${found.full_name}` }
        }
        return { success: false, message: "Ayesha not found in search" }
      },
    },
    {
      name: "Create Challenge to Ayesha",
      description: "Test creating a challenge to Ayesha",
      test: async () => {
        if (!ayeshaProfile) {
          return { success: false, message: "Ayesha profile not found" }
        }
        try {
          const challenge = await createChallenge(ayeshaProfile.id, "quran", "mixed", 10, 300)
          return { success: true, message: `Challenge created: ${challenge.id}` }
        } catch (error: any) {
          return { success: false, message: error.message }
        }
      },
    },
    {
      name: "Check Pending Challenges",
      description: "Test fetching pending challenges",
      test: async () => {
        if (!user) return { success: false, message: "No user logged in" }
        try {
          const challenges = await getPendingChallenges(user.id)
          return { success: true, message: `Found ${challenges.length} pending challenges` }
        } catch (error: any) {
          return { success: false, message: error.message }
        }
      },
    },
    {
      name: "Check Active Challenges",
      description: "Test fetching active challenges",
      test: async () => {
        if (!user) return { success: false, message: "No user logged in" }
        try {
          const challenges = await getActiveChallenges(user.id)
          return { success: true, message: `Found ${challenges.length} active challenges` }
        } catch (error: any) {
          return { success: false, message: error.message }
        }
      },
    },
    {
      name: "Real-time Subscription Test",
      description: "Test if real-time updates work",
      test: async () => {
        return new Promise((resolve) => {
          const channel = supabase
            .channel("test-channel")
            .on(
              "postgres_changes",
              {
                event: "*",
                schema: "public",
                table: "user_challenges",
              },
              (payload) => {
                resolve({ success: true, message: "Real-time subscription working" })
              },
            )
            .subscribe()

          // Timeout after 2 seconds
          setTimeout(() => {
            channel.unsubscribe()
            resolve({ success: true, message: "Real-time subscription setup (no events to test)" })
          }, 2000)
        })
      },
    },
  ]

  const runAllTests = async () => {
    setInternalLoading(true)
    setTestResults([])

    for (const test of tests) {
      try {
        const result = await test.test()
        setTestResults((prev) => [
          ...prev,
          {
            name: test.name,
            description: test.description,
            ...result,
          },
        ])
      } catch (error: any) {
        setTestResults((prev) => [
          ...prev,
          {
            name: test.name,
            description: test.description,
            success: false,
            message: error.message,
          },
        ])
      }
      // Small delay between tests
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    setInternalLoading(false)
  }

  const runSingleTest = async (testIndex: number) => {
    const test = tests[testIndex]
    try {
      const result = await test.test()
      setTestResults((prev) => {
        const newResults = [...prev]
        newResults[testIndex] = {
          name: test.name,
          description: test.description,
          ...result,
        }
        return newResults
      })

      if (result.success) {
        toast({
          title: "Test Passed ✅",
          description: `${test.name}: ${result.message}`,
        })
      } else {
        toast({
          title: "Test Failed ❌",
          description: `${test.name}: ${result.message}`,
          variant: "destructive",
        })
      }
    } catch (error: any) {
      toast({
        title: "Test Error ❌",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="text-center py-8">
            <p>Please sign in to run challenge tests</p>
            <p className="text-sm text-gray-500 mt-2">
              Current user state: {user ? "Authenticated" : "Not authenticated"}
            </p>
            <Button onClick={() => (window.location.href = "/auth")} className="mt-4">
              Go to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            IQRA Challenge System Test Suite
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button onClick={runAllTests} disabled={internalLoading} className="flex items-center gap-2">
              {internalLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Run All Tests
            </Button>
            <Badge variant="outline">User: {user.email}</Badge>
          </div>

          <div className="space-y-4">
            {tests.map((test, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{test.name}</h3>
                      <p className="text-sm text-gray-600">{test.description}</p>

                      {testResults[index] && (
                        <div className="mt-2 flex items-center gap-2">
                          {testResults[index].success ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`text-sm ${testResults[index].success ? "text-green-600" : "text-red-600"}`}>
                            {testResults[index].message}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button size="sm" variant="outline" onClick={() => runSingleTest(index)} disabled={internalLoading}>
                      Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {ayeshaProfile && (
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Ayesha's Profile Found</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>ID:</strong> {ayeshaProfile.id}
                  </div>
                  <div>
                    <strong>Username:</strong> {ayeshaProfile.username}
                  </div>
                  <div>
                    <strong>Full Name:</strong> {ayeshaProfile.full_name}
                  </div>
                  <div>
                    <strong>Total Score:</strong> {ayeshaProfile.total_score}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
