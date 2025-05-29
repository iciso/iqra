"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function SimpleDbTestPage() {
  const { user, loading: authLoading } = useAuth()
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testBasicQuery = async () => {
    setLoading(true)
    setResult("Testing basic connectivity...")

    try {
      console.log("🧪 Testing basic query...")
      const { data, error, count } = await supabase
        .from("user_challenges")
        .select("count", { count: "exact", head: true })

      if (error) {
        console.error("❌ Basic query error:", error)
        setResult(`Error: ${error.message} (Code: ${error.code})`)
      } else {
        console.log("✅ Basic query success:", count)
        setResult(`Success: Found ${count} total challenges in database`)
      }
    } catch (e: any) {
      console.error("❌ Basic query exception:", e)
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testUserQuery = async () => {
    if (!user) {
      setResult("No user authenticated")
      return
    }

    setLoading(true)
    setResult("Testing user-specific query...")

    try {
      console.log("🧪 Testing user query for:", user.id)
      const { data, error } = await supabase
        .from("user_challenges")
        .select("id, challenger_id, status, created_at")
        .eq("challenged_id", user.id)

      if (error) {
        console.error("❌ User query error:", error)
        setResult(`Error: ${error.message} (Code: ${error.code})`)
      } else {
        console.log("✅ User query success:", data)
        setResult(`Success: Found ${data?.length || 0} challenges for user ${user.id}`)
      }
    } catch (e: any) {
      console.error("❌ User query exception:", e)
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testProfileQuery = async () => {
    setLoading(true)
    setResult("Testing profile query...")

    try {
      console.log("🧪 Testing profile query...")
      const { data, error } = await supabase.from("user_profiles").select("id, username").limit(5)

      if (error) {
        console.error("❌ Profile query error:", error)
        setResult(`Error: ${error.message} (Code: ${error.code})`)
      } else {
        console.log("✅ Profile query success:", data)
        setResult(`Success: Found ${data?.length || 0} profiles`)
      }
    } catch (e: any) {
      console.error("❌ Profile query exception:", e)
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testSessionAndAuth = async () => {
    setLoading(true)
    setResult("Testing session and authentication...")

    try {
      console.log("🧪 Testing session...")
      const { data: session, error: sessionError } = await supabase.auth.getSession()

      if (sessionError) {
        console.error("❌ Session error:", sessionError)
        setResult(`Session Error: ${sessionError.message}`)
        return
      }

      console.log("✅ Session check:", !!session.session)

      if (!session.session) {
        setResult("No active session found")
        return
      }

      // Test if we can query with the session
      const { data, error } = await supabase.from("user_profiles").select("count", { count: "exact", head: true })

      if (error) {
        console.error("❌ Authenticated query error:", error)
        setResult(`Authenticated Query Error: ${error.message} (Code: ${error.code})`)
      } else {
        console.log("✅ Authenticated query success:", data)
        setResult(`Success: Session valid, can query database. Found ${data} profiles.`)
      }
    } catch (e: any) {
      console.error("❌ Session test exception:", e)
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testSpecificChallengeQuery = async () => {
    if (!user) {
      setResult("No user authenticated")
      return
    }

    setLoading(true)
    setResult("Testing the exact challenge query that's failing...")

    try {
      console.log("🧪 Testing exact challenge query...")

      // This is the exact query that's failing in the component
      const { data, error } = await supabase
        .from("user_challenges")
        .select("id, challenger_id, category, difficulty, question_count, created_at, expires_at, status")
        .eq("challenged_id", user.id)
        .eq("status", "pending")

      if (error) {
        console.error("❌ Challenge query error:", error)
        setResult(`Error: ${error.message} (Code: ${error.code}, Details: ${error.details})`)
      } else {
        console.log("✅ Challenge query success:", data)
        const now = new Date()
        const validChallenges = data?.filter((c) => new Date(c.expires_at) > now) || []
        setResult(
          `Success: Found ${data?.length || 0} pending challenges, ${validChallenges.length} not expired. Data: ${JSON.stringify(data, null, 2)}`,
        )
      }
    } catch (e: any) {
      console.error("❌ Challenge query exception:", e)
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Simple Database Test</CardTitle>
          <p className="text-sm text-gray-600">
            Test database connectivity and queries to identify issues with the challenge system.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Auth Status */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
            <h3 className="font-medium mb-2">Authentication Status:</h3>
            <pre className="text-sm">
              {JSON.stringify(
                {
                  authLoading,
                  userExists: !!user,
                  userId: user?.id,
                  userEmail: user?.email,
                },
                null,
                2,
              )}
            </pre>
          </div>

          {/* Test Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={testSessionAndAuth} disabled={loading} variant="outline">
              Test Session & Auth
            </Button>
            <Button onClick={testBasicQuery} disabled={loading} variant="outline">
              Test Basic Query
            </Button>
            <Button onClick={testProfileQuery} disabled={loading} variant="outline">
              Test Profile Query
            </Button>
            <Button onClick={testUserQuery} disabled={loading} variant="outline">
              Test User Query
            </Button>
            <Button onClick={testSpecificChallengeQuery} disabled={loading} variant="default" className="md:col-span-2">
              Test Exact Challenge Query (The Failing One)
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h3 className="font-medium">Test Results:</h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded min-h-[100px]">
              <pre className="text-sm whitespace-pre-wrap">{result || "No test run yet"}</pre>
            </div>
          </div>

          {loading && (
            <div className="flex items-center gap-2 justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
              <span className="text-sm">Running test...</span>
            </div>
          )}

          {/* Instructions */}
          <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded">
            <h3 className="font-medium mb-2">Instructions:</h3>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Start with "Test Session & Auth" to verify authentication</li>
              <li>Try "Test Basic Query" to check database connectivity</li>
              <li>Try "Test Profile Query" to check if you can read user profiles</li>
              <li>Try "Test User Query" to check user-specific queries</li>
              <li>Finally, try "Test Exact Challenge Query" to test the failing query</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
