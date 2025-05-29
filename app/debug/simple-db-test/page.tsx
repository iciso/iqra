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

  const testWithTimeout = async (testName: string, testFunction: () => Promise<any>, timeoutMs = 5000) => {
    setLoading(true)
    setResult(`Testing ${testName}...`)

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs),
      )

      const result = await Promise.race([testFunction(), timeoutPromise])
      return result
    } catch (error: any) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const testBasicQuery = async () => {
    try {
      const result = await testWithTimeout("basic query", async () => {
        console.log("🧪 Testing basic query with timeout...")
        const { data, error, count } = await supabase
          .from("user_challenges")
          .select("count", { count: "exact", head: true })

        if (error) throw error
        return { count }
      })

      setResult(`Success: Found ${result.count} total challenges`)
    } catch (error: any) {
      console.error("❌ Basic query failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const testSimpleSelect = async () => {
    try {
      const result = await testWithTimeout("simple select", async () => {
        console.log("🧪 Testing simple select...")
        const { data, error } = await supabase.from("user_profiles").select("id").limit(1)

        if (error) throw error
        return data
      })

      setResult(`Success: Simple select returned ${result?.length || 0} rows`)
    } catch (error: any) {
      console.error("❌ Simple select failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const testCurrentUserProfile = async () => {
    if (!user) {
      setResult("No user authenticated")
      return
    }

    try {
      const result = await testWithTimeout("current user profile", async () => {
        console.log("🧪 Testing current user profile...")
        const { data, error } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

        if (error) throw error
        return data
      })

      setResult(`Success: Found user profile: ${JSON.stringify(result, null, 2)}`)
    } catch (error: any) {
      console.error("❌ User profile failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const testRLSBypass = async () => {
    try {
      const result = await testWithTimeout("RLS bypass test", async () => {
        console.log("🧪 Testing with service role (if available)...")

        // Try a simple query that should work regardless of RLS
        const { data, error } = await supabase.rpc("get_current_user_id")

        if (error && error.message.includes("function")) {
          // Function doesn't exist, try alternative
          const { data: authData, error: authError } = await supabase.auth.getUser()
          if (authError) throw authError
          return { user_id: authData.user?.id }
        }

        if (error) throw error
        return data
      })

      setResult(`Success: RPC call returned: ${JSON.stringify(result, null, 2)}`)
    } catch (error: any) {
      console.error("❌ RLS bypass failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const testDirectChallengeQuery = async () => {
    if (!user) {
      setResult("No user authenticated")
      return
    }

    try {
      const result = await testWithTimeout("direct challenge query", async () => {
        console.log("🧪 Testing direct challenge query...")

        // Try the simplest possible challenge query
        const { data, error } = await supabase
          .from("user_challenges")
          .select("id")
          .eq("challenged_id", user.id)
          .limit(1)

        if (error) throw error
        return data
      })

      setResult(`Success: Found ${result?.length || 0} challenges`)
    } catch (error: any) {
      console.error("❌ Direct challenge query failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const testTableExists = async () => {
    try {
      const result = await testWithTimeout("table existence", async () => {
        console.log("🧪 Testing if tables exist...")

        // Test if we can access table metadata
        const { data, error } = await supabase.from("user_challenges").select().limit(0)

        if (error) throw error
        return "Tables accessible"
      })

      setResult(`Success: ${result}`)
    } catch (error: any) {
      console.error("❌ Table test failed:", error)
      setResult(`Failed: ${error.message}`)
    }
  }

  const runAllTests = async () => {
    setResult("Running all tests...\n")
    const tests = [
      { name: "Table Existence", fn: testTableExists },
      { name: "Simple Select", fn: testSimpleSelect },
      { name: "Current User Profile", fn: testCurrentUserProfile },
      { name: "Direct Challenge Query", fn: testDirectChallengeQuery },
      { name: "Basic Query", fn: testBasicQuery },
    ]

    let results = "All Tests Results:\n\n"

    for (const test of tests) {
      try {
        setResult(results + `Testing ${test.name}...`)
        await test.fn()
        results += `✅ ${test.name}: PASSED\n`
      } catch (error: any) {
        results += `❌ ${test.name}: FAILED - ${error.message}\n`
      }
    }

    setResult(results)
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Database Connectivity Diagnosis</CardTitle>
          <p className="text-sm text-gray-600">
            Systematic testing to identify the exact cause of database query failures.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button onClick={testTableExists} disabled={loading} variant="outline" size="sm">
              Test Table Access
            </Button>
            <Button onClick={testSimpleSelect} disabled={loading} variant="outline" size="sm">
              Test Simple Select
            </Button>
            <Button onClick={testCurrentUserProfile} disabled={loading} variant="outline" size="sm">
              Test User Profile
            </Button>
            <Button onClick={testDirectChallengeQuery} disabled={loading} variant="outline" size="sm">
              Test Challenge Query
            </Button>
            <Button onClick={testBasicQuery} disabled={loading} variant="outline" size="sm">
              Test Basic Query
            </Button>
            <Button onClick={testRLSBypass} disabled={loading} variant="outline" size="sm">
              Test RLS Bypass
            </Button>
            <Button onClick={runAllTests} disabled={loading} variant="default" className="lg:col-span-3">
              Run All Tests
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h3 className="font-medium">Test Results:</h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded min-h-[200px] max-h-[400px] overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap">{result || "No test run yet"}</pre>
            </div>
          </div>

          {loading && (
            <div className="flex items-center gap-2 justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
              <span className="text-sm">Running test...</span>
            </div>
          )}

          {/* Analysis */}
          <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded">
            <h3 className="font-medium mb-2">Analysis:</h3>
            <div className="text-sm space-y-2">
              <p>
                <strong>Session Test Result:</strong> ✅ Session valid, but returned `null` profiles - suggests RLS
                policy issue
              </p>
              <p>
                <strong>Basic Query:</strong> ⏳ Hangs indefinitely - likely RLS or permissions blocking the query
              </p>
              <p>
                <strong>Next Steps:</strong> Test individual queries with timeout protection to identify the exact issue
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
