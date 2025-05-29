"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function DatabaseTestPage() {
  const { user, profile, loading: authLoading } = useAuth()
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [currentTest, setCurrentTest] = useState<string | null>(null)

  const addResult = (testName: string, status: "success" | "error", data: any, duration: number) => {
    setResults((prev) => [
      ...prev,
      {
        test: testName,
        status,
        result: status === "success" ? data : null,
        error: status === "error" ? data : null,
        duration,
        timestamp: new Date().toISOString(),
      },
    ])
  }

  const runTest = async (testName: string, testFunction: () => Promise<any>) => {
    setLoading(true)
    setCurrentTest(testName)
    const startTime = Date.now()

    try {
      console.log(`🧪 Starting test: ${testName}`)

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Test timeout after 10 seconds")), 10000)
      })

      const result = await Promise.race([testFunction(), timeoutPromise])
      const endTime = Date.now()

      console.log(`✅ Test ${testName} completed:`, result)
      addResult(testName, "success", result, endTime - startTime)
    } catch (error: any) {
      const endTime = Date.now()
      console.error(`❌ Test ${testName} failed:`, error)
      addResult(testName, "error", error.message || String(error), endTime - startTime)
    } finally {
      setLoading(false)
      setCurrentTest(null)
    }
  }

  const testDatabaseConnection = async () => {
    await runTest("Database Connection", async () => {
      console.log("🔌 Testing database connection...")
      const { data, error } = await supabase.from("user_profiles").select("count").limit(1)

      if (error) {
        console.error("Database connection error:", error)
        throw new Error(`Database error: ${error.message}`)
      }

      return "Database connection successful"
    })
  }

  const testUserProfiles = async () => {
    await runTest("User Profiles Query", async () => {
      console.log("👥 Testing user profiles query...")
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage")
        .limit(10)

      if (error) {
        console.error("User profiles query error:", error)
        throw new Error(`Query error: ${error.message}`)
      }

      return {
        message: `Found ${data?.length || 0} user profiles`,
        profiles: data?.map((p) => ({ id: p.id, username: p.username, score: p.total_score })) || [],
      }
    })
  }

  const testCurrentUser = async () => {
    await runTest("Current User Profile", async () => {
      console.log("👤 Testing current user profile...")

      // First check auth state
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession()

      if (sessionError) {
        throw new Error(`Session error: ${sessionError.message}`)
      }

      if (!session?.user) {
        throw new Error("No authenticated session found")
      }

      console.log("Session user:", session.user.id)

      // Then check profile
      const { data, error } = await supabase.from("user_profiles").select("*").eq("id", session.user.id).single()

      if (error) {
        console.error("Current user profile error:", error)
        throw new Error(`Profile query error: ${error.message}`)
      }

      return {
        session_user_id: session.user.id,
        profile_exists: !!data,
        profile: data,
      }
    })
  }

  const testChallenges = async () => {
    await runTest("User Challenges Query", async () => {
      console.log("🏆 Testing challenges query...")

      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session?.user) {
        throw new Error("No authenticated user for challenges test")
      }

      const { data, error } = await supabase
        .from("user_challenges")
        .select("*")
        .eq("challenged_id", session.user.id)
        .eq("status", "pending")

      if (error) {
        console.error("Challenges query error:", error)
        throw new Error(`Challenges query error: ${error.message}`)
      }

      return {
        message: `Found ${data?.length || 0} pending challenges`,
        challenges: data || [],
      }
    })
  }

  const testSearch = async () => {
    await runTest("User Search", async () => {
      console.log("🔍 Testing user search...")

      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name")
        .or("username.ilike.%test%,full_name.ilike.%test%")
        .limit(5)

      if (error) {
        console.error("Search query error:", error)
        throw new Error(`Search error: ${error.message}`)
      }

      return {
        message: `Search returned ${data?.length || 0} results`,
        results: data || [],
      }
    })
  }

  const testSupabaseConfig = async () => {
    await runTest("Supabase Configuration", async () => {
      console.log("⚙️ Testing Supabase configuration...")

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      return {
        url_configured: !!supabaseUrl,
        key_configured: !!supabaseKey,
        url_preview: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : "Not set",
        client_initialized: !!supabase,
      }
    })
  }

  const runAllTests = async () => {
    setResults([])
    await testSupabaseConfig()
    await testDatabaseConnection()
    await testUserProfiles()
    await testCurrentUser()
    await testChallenges()
    await testSearch()
  }

  const clearResults = () => {
    setResults([])
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Database Connectivity Test</CardTitle>
          <p className="text-sm text-gray-600">
            This page helps diagnose database connectivity and authentication issues.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button onClick={testSupabaseConfig} disabled={loading}>
              Test Config
            </Button>
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
            <Button onClick={clearResults} disabled={loading} variant="secondary">
              Clear Results
            </Button>
          </div>

          {loading && (
            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <p className="text-blue-800">
                Running test: <strong>{currentTest}</strong>
              </p>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse w-1/3"></div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-semibold">Authentication State:</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify(
                {
                  auth_loading: authLoading,
                  user_exists: !!user,
                  user_id: user?.id,
                  user_email: user?.email,
                  profile_exists: !!profile,
                  profile_username: profile?.username,
                },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Test Results ({results.length}):</h3>
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
                <pre className="text-xs mt-2 overflow-auto max-h-40">
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
