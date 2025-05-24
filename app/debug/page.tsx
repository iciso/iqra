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
    addResult(`NEXT_PUBLIC_SUPABASE_ANON_KEY: ${key ? "✅ Set" : "❌ Missing"}`)
    addResult(`Key Length: ${key ? key.length : 0} characters`)
  }

  const testBasicFetch = async () => {
    setLoading(true)
    addResult("=== Basic Fetch Test ===")

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!url) {
        addResult("❌ No Supabase URL found")
        return
      }

      const response = await fetch(`${url}/rest/v1/`, {
        method: "GET",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""}`,
        },
      })

      addResult(`Response Status: ${response.status}`)
      addResult(`Response OK: ${response.ok}`)

      if (response.ok) {
        addResult("✅ Basic connection to Supabase successful")
      } else {
        addResult(`❌ Connection failed: ${response.statusText}`)
      }
    } catch (error) {
      addResult(`❌ Network error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const testSupabaseAuth = async () => {
    setLoading(true)
    addResult("=== Supabase Auth Test ===")

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        addResult("❌ Missing environment variables")
        return
      }

      // Test auth endpoint directly
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

      addResult(`Auth Response Status: ${response.status}`)
      const responseText = await response.text()
      addResult(`Auth Response: ${responseText.substring(0, 200)}...`)

      if (response.status === 200 || response.status === 400) {
        addResult("✅ Auth endpoint is reachable")
      } else {
        addResult(`❌ Auth endpoint error: ${response.status}`)
      }
    } catch (error) {
      addResult(`❌ Auth test error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const testSupabaseClient = async () => {
    setLoading(true)
    addResult("=== Supabase Client Test ===")

    try {
      // Dynamic import to avoid SSR issues
      const { createClient } = await import("@supabase/supabase-js")

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

      const supabase = createClient(url, key)

      addResult("✅ Supabase client created successfully")

      // Test a simple query
      const { data, error } = await supabase.from("profiles").select("count").limit(1)

      if (error) {
        addResult(`Database query error: ${error.message}`)
      } else {
        addResult("✅ Database connection successful")
      }

      // Test auth signup
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: "debug-test@example.com",
        password: "debugtest123",
      })

      if (authError) {
        addResult(`Auth signup error: ${authError.message}`)
      } else {
        addResult("✅ Auth signup endpoint working")
      }
    } catch (error) {
      addResult(`❌ Supabase client error: ${error}`)
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
              1. Test Environment Variables
            </Button>
            <Button onClick={testBasicFetch} disabled={loading} className="w-full">
              2. Test Basic Network Connection
            </Button>
            <Button onClick={testSupabaseAuth} disabled={loading} className="w-full">
              3. Test Auth Endpoint Directly
            </Button>
            <Button onClick={testSupabaseClient} disabled={loading} className="w-full">
              4. Test Supabase Client
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
          <CardTitle>Quick Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Expected Supabase URL:</strong> https://chyplogbjlusldmztwqd.supabase.co
            </p>
            <p>
              <strong>Current URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || "Not set"}
            </p>
            <p>
              <strong>Key Present:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Yes" : "No"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
