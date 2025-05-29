"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function AuthTestPage() {
  const { user, profile, loading } = useAuth()
  const [sessionInfo, setSessionInfo] = useState<any>(null)
  const [directSession, setDirectSession] = useState<any>(null)

  useEffect(() => {
    // Test direct session access
    const checkDirectSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      setDirectSession({ data, error })
    }
    checkDirectSession()
  }, [])

  const refreshAuth = async () => {
    const { data, error } = await supabase.auth.getSession()
    setSessionInfo({ data, error, timestamp: new Date().toISOString() })
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Authentication Debug Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Auth Context</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    Loading: <Badge variant={loading ? "destructive" : "default"}>{loading.toString()}</Badge>
                  </div>
                  <div>
                    User: <Badge variant={user ? "default" : "destructive"}>{user ? "Present" : "Null"}</Badge>
                  </div>
                  <div>
                    Profile: <Badge variant={profile ? "default" : "destructive"}>{profile ? "Present" : "Null"}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">User Details</h3>
                {user ? (
                  <div className="space-y-1 text-sm">
                    <div>Email: {user.email}</div>
                    <div>ID: {user.id?.slice(0, 8)}...</div>
                    <div>Role: {user.role}</div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No user data</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Profile Details</h3>
                {profile ? (
                  <div className="space-y-1 text-sm">
                    <div>Username: {profile.username}</div>
                    <div>Full Name: {profile.full_name}</div>
                    <div>Score: {profile.total_score}</div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No profile data</p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button onClick={refreshAuth}>Refresh Session Info</Button>
            <Button variant="outline" onClick={() => (window.location.href = "/auth")}>
              Go to Auth Page
            </Button>
          </div>

          {sessionInfo && (
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm">Session Info (Refreshed)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs overflow-auto">{JSON.stringify(sessionInfo, null, 2)}</pre>
              </CardContent>
            </Card>
          )}

          {directSession && (
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-sm">Direct Session Check</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs overflow-auto">{JSON.stringify(directSession, null, 2)}</pre>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
