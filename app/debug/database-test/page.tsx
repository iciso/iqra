"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function DatabaseTestPage() {
  const { user } = useAuth()
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const runTest = async (testName: string, testFunction: () => Promise<any>) => {
    setLoading(true)
    const startTime = Date.now()

    try {
      const result = await testFunction()
      const endTime = Date.now()

      setResults((prev) => [
        ...prev,
        {
          test: testName,
          status: "success",
          result,
          duration: endTime - startTime,
          timestamp: new Date().toISOString(),
        },
      ])
    } catch (error: any) {
      const endTime = Date.now()

      setResults((prev) => [
        ...prev,
        {
          test: testName,
          status: "error",
          error: error.message,
          duration: endTime - startTime,
          timestamp: new Date().toISOString(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const testDatabaseConnection = async () => {
    await runTest("Database Connection", async () => {
      const { data, error } = await supabase.from("user_profiles").select("count").limit(1)
      if (error) throw error
      return `Connection successful`
    })
  }

  const testUserProfiles = async () => {
    await runTest("User Profiles Query", async () => {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage")
        .limit(10)

      if (error) throw error
      return `Found ${data?.length || 0} user profiles`
    })
  }

  const testCurrentUser = async () => {
    await runTest("Current User Profile", async () => {
      if (!user) throw new Error("No authenticated user")

      const { data, error } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

      if (error) throw error
      return data
    })
  }

  const testChallenges = async () => {
    await runTest("User Challenges Query", async () => {
      if (!user) throw new Error("No authenticated user")

      const { data, error } = await supabase
        .from("user_challenges")
        .select("*")
        .eq("challenged_id", user.id)
        .eq("status", "pending")

      if (error) throw error
      return `Found ${data?.length || 0} pending challenges`
    })
  }

  const testSearch = async () => {
    await runTest("User Search", async () => {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name")
        .or("username.ilike.%test%,full_name.ilike.%test%")
        .limit(5)

      if (error) throw error
      return `Search returned ${data?.length || 0} results`
    })
  }

  const runAllTests = async () => {
    setResults([])
    await testDatabaseConnection()
    await testUserProfiles()
    await testCurrentUser()
    await testChallenges()
    await testSearch()
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Database Connectivity Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button onClick={testDatabaseConnection} disabled={loading}>
              Test Connection
            </Button>
            <Button onClick={testUserProfiles} disabled={loading}>
              Test User Profiles
            </Button>
            <Button onClick={testCurrentUser} disabled={loading}>
              Test Current User
            </Button>
            <Button onClick={testChallenges} disabled={loading}>
              Test Challenges
            </Button>
            <Button onClick={testSearch} disabled={loading}>
              Test Search
            </Button>
            <Button onClick={runAllTests} disabled={loading} variant="outline">
              Run All Tests
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Current User Info:</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify(
                {
                  id: user?.id,
                  email: user?.email,
                  authenticated: !!user,
                },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Test Results:</h3>
            {results.length === 0 && <p className="text-gray-500">No tests run yet</p>}
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded border ${
                  result.status === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">{result.test}</h4>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      result.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {result.status} ({result.duration}ms)
                  </span>
                </div>
                <pre className="text-xs mt-2 overflow-auto">
                  {result.status === "success" ? JSON.stringify(result.result, null, 2) : result.error}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
