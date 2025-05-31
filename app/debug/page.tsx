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
  }

  const testCORS = async () => {
    setLoading(true)
    addResult("=== CORS and Headers Test ===")

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        addResult("❌ Missing environment variables")
        return
      }

      // Test with minimal headers first
      addResult("Testing with minimal headers...")
      const response1 = await fetch(`${url}/rest/v1/`, {
        method: "GET",
        mode: "cors",
        headers: {
          apikey: key,
        },
      })

      addResult(`Minimal headers response: ${response1.status}`)

      // Test with full headers
      addResult("Testing with full headers...")
      const response2 = await fetch(`${url}/rest/v1/`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
      })

      addResult(`Full headers response: ${response2.status}`)

      // Test auth endpoint specifically
      addResult("Testing auth endpoint...")
      const response3 = await fetch(`${url}/auth/v1/settings`, {
        method: "GET",
        mode: "cors",
        headers: {
          apikey: key,
        },
      })

      addResult(`Auth endpoint response: ${response3.status}`)

      if (response3.ok) {
        const settings = await response3.json()
        addResult(`Auth settings: ${JSON.stringify(settings, null, 2)}`)
      }
    } catch (error) {
      addResult(`❌ CORS test error: ${error}`)
      addResult(`Error type: ${error instanceof TypeError ? "TypeError" : typeof error}`)
      addResult(`Error message: ${error.message || "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  const testSupabaseSettings = async () => {
    setLoading(true)
    addResult("=== Supabase Settings Test ===")

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        addResult("❌ Missing environment variables")
        return
      }

      // Test if the project is accessible
      addResult(`Testing project accessibility: ${url}`)

      const response = await fetch(`${url}/rest/v1/`, {
        method: "OPTIONS",
        mode: "cors",
      })

      addResult(`OPTIONS request status: ${response.status}`)
      addResult(`CORS headers: ${JSON.stringify(Object.fromEntries(response.headers.entries()))}`)
    } catch (error) {
      addResult(`❌ Settings test error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const testAlternativeAuth = async () => {
    setLoading(true)
    addResult("=== Alternative Auth Test ===")

    try {
      // Test with a completely different approach
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!key || !url) {
        addResult("❌ No API key or URL available")
        return
      }

      // Try to access the auth settings endpoint
      const settingsResponse = await fetch(`${url}/auth/v1/settings`, {
        headers: {
          apikey: key,
          "Content-Type": "application/json",
        },
      })

      addResult(`Auth settings status: ${settingsResponse.status}`)

      if (settingsResponse.ok) {
        const settings = await settingsResponse.json()
        addResult(`✅ Auth is accessible`)
        addResult(`External URL: ${settings.external_url || "Not set"}`)
        addResult(`Site URL: ${settings.site_url || "Not set"}`)
        addResult(`Email enabled: ${settings.external_email_enabled || "Unknown"}`)
      } else {
        const errorText = await settingsResponse.text()
        addResult(`❌ Auth settings error: ${errorText}`)
      }
    } catch (error) {
      addResult(`❌ Alternative auth error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const clearResults = () => {
    setResults([])
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">IQRA Advanced Debug</h1>

      <div className="grid gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Debug Tests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button onClick={testEnvironmentVariables} className="w-full">
              1. Check Environment Variables
            </Button>
            <Button onClick={testCORS} disabled={loading} className="w-full">
              2. Test CORS and Headers
            </Button>
            <Button onClick={testSupabaseSettings} disabled={loading} className="w-full">
              3. Test Supabase Project Access
            </Button>
            <Button onClick={testAlternativeAuth} disabled={loading} className="w-full">
              4. Test Auth Settings
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
              <p className="text-gray-500">Run tests above to see detailed results...</p>
            ) : (
              <pre className="text-sm whitespace-pre-wrap">{results.join("\n")}</pre>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
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
              <strong>URL Match:</strong>{" "}
              {process.env.NEXT_PUBLIC_SUPABASE_URL === "https://chyplogbjlusldmztwqd.supabase.co" ? "✅ Yes" : "❌ No"}
            </p>
            <p>
              <strong>Key Present:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Yes" : "❌ No"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>🔍 What We're Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <strong>Test 1:</strong> Verify environment variables are correct
            </li>
            <li>
              <strong>Test 2:</strong> Check CORS policies and header requirements
            </li>
            <li>
              <strong>Test 3:</strong> Test if Supabase project is accessible
            </li>
            <li>
              <strong>Test 4:</strong> Check authentication configuration
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
