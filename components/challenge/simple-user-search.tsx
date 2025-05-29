"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function SimpleUserSearch() {
  const { user: currentUser } = useAuth()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🔍 SIMPLE SEARCH DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const searchUsers = async () => {
    if (query.length < 2) {
      addDebug("Query too short")
      return
    }

    addDebug(`Starting search for: "${query}"`)
    setLoading(true)
    setError(null)

    try {
      // Step 1: Test basic table access
      addDebug("Step 1: Testing table access...")
      const { data: countData, error: countError } = await supabase
        .from("user_profiles")
        .select("count", { count: "exact", head: true })

      if (countError) {
        addDebug(`Step 1 failed: ${countError.message}`)
        throw countError
      }
      addDebug(`Step 1 success: ${countData} profiles exist`)

      // Step 2: Try simple select
      addDebug("Step 2: Testing simple select...")
      const { data: simpleData, error: simpleError } = await supabase
        .from("user_profiles")
        .select("id, username")
        .limit(3)

      if (simpleError) {
        addDebug(`Step 2 failed: ${simpleError.message}`)
        throw simpleError
      }
      addDebug(`Step 2 success: Got ${simpleData?.length || 0} profiles`)

      // Step 3: Try search query
      addDebug("Step 3: Testing search query...")
      const { data: searchData, error: searchError } = await supabase
        .from("user_profiles")
        .select("id, username, full_name")
        .ilike("username", `%${query}%`)
        .limit(5)

      if (searchError) {
        addDebug(`Step 3 failed: ${searchError.message}`)
        throw searchError
      }
      addDebug(`Step 3 success: Found ${searchData?.length || 0} matches`)

      setResults(searchData || [])
      addDebug("Search completed successfully")
    } catch (error: any) {
      addDebug(`Error: ${error.message}`)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
          <Search className="h-5 w-5" />
          Simple User Search Test
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Search Input */}
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Enter username to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button onClick={searchUsers} disabled={loading || query.length < 2}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>

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
            <strong>Query:</strong> "{query}"
          </p>
          <p className="text-sm">
            <strong>Loading:</strong> {loading.toString()}
          </p>
          <p className="text-sm">
            <strong>Results:</strong> {results.length}
          </p>
          <p className="text-sm">
            <strong>Error:</strong> {error || "None"}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Testing search...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium">Search Error</p>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-medium">Search Results:</p>
            {results.length === 0 ? (
              <p className="text-gray-500 text-sm">No results found</p>
            ) : (
              <div className="space-y-2">
                {results.map((user, index) => (
                  <div key={user.id || index} className="p-2 bg-white dark:bg-gray-800 rounded border text-xs">
                    <p>
                      <strong>ID:</strong> {user.id}
                    </p>
                    <p>
                      <strong>Username:</strong> {user.username}
                    </p>
                    <p>
                      <strong>Full Name:</strong> {user.full_name || "N/A"}
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
