"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

interface User {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
}

interface UserSearchProps {
  onSelectUser?: (user: User) => void
  placeholder?: string
  buttonText?: string
}

export default function UserSearch({
  onSelectUser,
  placeholder = "Search by username or name...",
  buttonText = "Select",
}: UserSearchProps) {
  const { user: currentUser } = useAuth()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const addDebug = (message: string) => {
    console.log("🔍 DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (query.length >= 2) {
      // Set a new timeout for the search
      timeoutRef.current = setTimeout(() => {
        searchUsers(query)
      }, 300)
    } else {
      setResults([])
      setError(null)
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [query])

  const searchUsers = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      addDebug("Search query too short")
      return
    }

    addDebug(`Searching for: ${searchQuery}`)
    setLoading(true)
    setError(null)

    // Set a timeout to prevent hanging
    const timeout = setTimeout(() => {
      addDebug("⚠️ Search timeout after 10 seconds")
      setLoading(false)
      setError("Search timed out after 10 seconds. Please try again.")
    }, 10000)

    try {
      addDebug("Checking session...")

      // Use the exact same approach as the working test
      const { data: session } = await supabase.auth.getSession()
      addDebug(`Session check: ${!!session.session}`)

      if (!session.session) {
        throw new Error("No active session")
      }

      addDebug("Executing search query...")

      const result = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url")
        .or(`username.ilike.%${searchQuery}%,full_name.ilike.%${searchQuery}%`)
        .limit(10)

      clearTimeout(timeout) // Clear the timeout since the query completed

      addDebug(`Search result: ${JSON.stringify({ error: result.error, count: result.data?.length })}`)

      if (result.error) {
        throw result.error
      }

      const data = result.data || []
      addDebug(`Found ${data.length} users`)

      // Filter out current user
      const filteredResults = currentUser ? data.filter((user) => user.id !== currentUser.id) : data

      addDebug(`Filtered to ${filteredResults.length} users`)
      setResults(filteredResults)
    } catch (error: any) {
      clearTimeout(timeout) // Clear the timeout if there's an error
      addDebug(`Error: ${error.message}`)
      setError(error.message)
    } finally {
      addDebug("Search completed")
      setLoading(false)
    }
  }

  const getUserInitials = (user: User) => {
    if (user.full_name) {
      return user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return user.username.charAt(0).toUpperCase()
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Debug Info */}
      <div className="text-xs text-gray-500 p-2 bg-gray-50 dark:bg-gray-800 rounded">
        <p>Query: "{query}"</p>
        <p>Loading: {loading.toString()}</p>
        <p>Results: {results.length}</p>
        <div className="mt-2">
          <p className="font-medium">Debug Log:</p>
          {debugInfo.map((info, index) => (
            <p key={index} className="text-xs">
              {info}
            </p>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          <span className="ml-2 text-sm text-gray-500">Searching...</span>
        </div>
      ) : error ? (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <div>
            <p className="text-red-800 font-medium">Error searching users</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
      ) : query.length >= 2 && results.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          <p>No users found matching "{query}"</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-2">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-blue-100 text-blue-700">{getUserInitials(user)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.full_name || user.username}</p>
                  {user.full_name && <p className="text-xs text-gray-500">@{user.username}</p>}
                </div>
              </div>
              {onSelectUser && (
                <Button size="sm" onClick={() => onSelectUser(user)}>
                  {buttonText}
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
