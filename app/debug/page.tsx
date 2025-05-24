"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const [results, setResults] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const addResult = (message: string) => {
    setResults((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const testEnvironmentVariables = () => {
    addResult("=== Environment Variables Test ===")
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    addResult(`NEXT_PUBLIC_SUPABASE_URL: ${url ? "✅ Set" : "❌ Missing"}`)
    addResult(`URL Value: ${url || "undefined"}`)
    addResult(`Expected: https://chyplogbjlusldmztwqd.supabase.co`)
    addResult(`Match: ${url === "https://chyplogbjlusldmztwqd.supabase.co" ? "✅ Yes" : "❌ No"}`)

    addResult(`NEXT_PUBLIC_SUPABASE_ANON_KEY: ${key ? "✅ Set" : "❌ Missing"}`)
    addResult(`Key Length: ${key ? key.length : 0} characters`)
    addResult(`Key Preview: ${key ? key.substring(0, 20) + "..." : "undefined"}`)

    if (!url || !key) {
      addResult("❌ CRITICAL: Environment variables are missing!")
      addResult("💡 Solution: Check your Vercel environment variables")
    }
  }

  const testBasicFetch = async () => {
    setLoading(true)
    addResult("=== Basic Network Test ===")

    try {
      // Test a simple external API first
      const testResponse = await fetch("https://httpbin.org/get")
      addResult(`External API test: ${testResponse.ok ? "✅ Working" : "❌ Failed"}`)

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!url) {
        addResult("❌ Cannot test - No Supabase URL")
        return
      }

      addResult(`Testing connection to: ${url}`)

      const response = await fetch(`${url}/rest/v1/`, {
        method: "GET",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""}`,
        },
      })

      addResult(`Supabase Response Status: ${response.status}`)
      addResult(`Response OK: ${response.ok}`)

      if (response.ok) {
        addResult("✅ Basic connection to Supabase successful")
      } else {
        const errorText = await response.text()
        addResult(`❌ Connection failed: ${response.statusText}`)
        addResult(`Error details: ${errorText.substring(0, 200)}`)
      }
    } catch (error) {
      addResult(`❌ Network error: ${error}`)
      addResult("💡 This suggests environment variables are missing or incorrect")
    } finally {
      setLoading(false)
    }
  }

  const testSupabaseDirectly = async () => {
    setLoading(true)
    addResult("=== Direct Supabase Test ===")

    try {
      // Test the exact URL we expect
      const expectedUrl = "https://chyplogbjlusldmztwqd.supabase.co"
      const expectedKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoeXBsb2diamx1c2xkbXp0d3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTEzNTksImV4cCI6MjA2MjcyNzM1OX0.OaovgK1HsO0qvl0XhyZYAJhmp4ja9MWW97r84hRcJFc"

      addResult(`Testing with hardcoded values...`)

      const response = await fetch(`${expectedUrl}/rest/v1/profiles?select=count`, {
        method: "GET",
        headers: {
          apikey: expectedKey,
          Authorization: `Bearer ${expectedKey}`,
        },
      })

      addResult(`Direct test status: ${response.status}`)

      if (response.ok) {
        addResult("✅ Direct connection works - Environment variable issue!")
      } else {
        const errorText = await response.text()
        addResult(`❌ Direct connection failed: ${errorText.substring(0, 200)}`)
      }
    } catch (error) {
      addResult(`❌ Direct test error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const testAuthSignup = async () => {
    setLoading(true)
    addResult("=== Auth Signup Test ===")

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        addResult("❌ Missing environment variables for auth test")
        return
      }

      const response = await fetch(`${url}/auth/v1/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          email: "test@example.com",
          password: "testpassword123",
        }),
      })

      addResult(`Auth signup status: ${response.status}`)
      const responseText = await response.text()
      addResult(`Auth response: ${responseText.substring(0, 300)}`)
    } catch (error) {
      addResult(`❌ Auth signup error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const clearResults = () => {
    setResults([])
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">IQRA Debug Dashboard</h1>

      <div className="grid gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Debug Tests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button onClick={testEnvironmentVariables} className="w-full">
              1. Check Environment Variables
            </Button>
            <Button onClick={testBasicFetch} disabled={loading} className="w-full">
              2. Test Network Connection
            </Button>
            <Button onClick={testSupabaseDirectly} disabled={loading} className="w-full">
              3. Test with Hardcoded Values
            </Button>
            <Button onClick={testAuthSignup} disabled={loading} className="w-full">
              4. Test Auth Signup
            </Button>
            <Button onClick={clearResults} variant="outline" className="w-full">
              Clear Results
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Debug Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-gray-500">Run tests above to see results...</p>
            ) : (
              <pre className="text-sm whitespace-pre-wrap">{results.join("\n")}</pre>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Environment Check</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Expected URL:</strong> https://chyplogbjlusldmztwqd.supabase.co
            </p>
            <p>
              <strong>Current URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || "❌ NOT SET"}
            </p>
            <p>
              <strong>Key Present:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Yes" : "❌ No"}
            </p>
            <p>
              <strong>URL Match:</strong>{" "}
              {process.env.NEXT_PUBLIC_SUPABASE_URL === "https://chyplogbjlusldmztwqd.supabase.co" ? "✅ Yes" : "❌ No"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>💡 Troubleshooting Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Run test 1 to check if environment variables are set</li>
            <li>If variables are missing, check your Vercel project settings</li>
            <li>Go to Vercel Dashboard → Your Project → Settings → Environment Variables</li>
            <li>Make sure both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set</li>
            <li>Redeploy your project after adding environment variables</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
