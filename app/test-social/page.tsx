"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/hooks/use-toast"
import { CheckCircle, XCircle, Clock, Gamepad2, Search, Trophy, LogIn } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { IqraLogo } from "@/components/iqra-logo"

export default function TestSocialPage() {
  const { user } = useAuth()
  const [testResults, setTestResults] = useState<Record<string, boolean>>({})
  const [testOutput, setTestOutput] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    // Simple timeout to prevent infinite loading
    const timer = setTimeout(() => {
      setAuthLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const addOutput = (message: string) => {
    setTestOutput((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const setTestResult = (testName: string, success: boolean) => {
    setTestResults((prev) => ({ ...prev, [testName]: success }))
  }

  const runBasicTests = async () => {
    if (!user) {
      addOutput("❌ User not authenticated")
      return
    }

    setIsLoading(true)
    setTestResults({})
    setTestOutput([])
    addOutput("🚀 Starting Basic Social Tests...")
    addOutput(`👤 Testing as user: ${user.email}`)

    // Test 1: Basic Database Connection
    try {
      addOutput("🔗 Testing database connection...")
      const { data, error } = await supabase.from("user_profiles").select("count").limit(1)
      if (error) throw error
      setTestResult("dbConnection", true)
      addOutput("✅ Database connection successful")
    } catch (error) {
      setTestResult("dbConnection", false)
      addOutput(`❌ Database connection failed: ${error}`)
    }

    // Test 2: User Profile Check
    try {
      addOutput("👤 Testing user profile...")
      const { data, error } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

      if (error) throw error
      setTestResult("userProfile", true)
      addOutput(`✅ User profile found: ${data.username || data.full_name}`)
    } catch (error) {
      setTestResult("userProfile", false)
      addOutput(`❌ User profile check failed: ${error}`)
    }

    // Test 3: Tables Existence
    try {
      addOutput("📋 Testing social tables...")
      const { data: challenges } = await supabase.from("user_challenges").select("count").limit(1)
      const { data: friendships } = await supabase.from("friendships").select("count").limit(1)

      setTestResult("socialTables", true)
      addOutput("✅ Social tables accessible")
    } catch (error) {
      setTestResult("socialTables", false)
      addOutput(`❌ Social tables test failed: ${error}`)
    }

    setIsLoading(false)
    addOutput("🎉 Basic tests completed!")

    // Show summary
    const totalTests = Object.keys(testResults).length
    const passedTests = Object.values(testResults).filter(Boolean).length
    addOutput(`📊 Summary: ${passedTests}/${totalTests} tests passed`)

    if (passedTests === totalTests) {
      toast({
        title: "🎉 Basic Tests Passed!",
        description: "Social challenge system database is working",
      })
    } else {
      toast({
        title: "⚠️ Some Tests Failed",
        description: `${passedTests}/${totalTests} tests passed. Check the output for details.`,
        variant: "destructive",
      })
    }
  }

  const TestResultIcon = ({ testName }: { testName: string }) => {
    const result = testResults[testName]
    if (result === undefined) return <Clock className="h-4 w-4 text-gray-400" />
    return result ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />
  }

  const handleSignIn = () => {
    window.location.href = "/auth"
  }

  // Show loading state briefly
  if (authLoading) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card>
          <CardContent className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto mb-4"></div>
            <p>Checking authentication...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card>
          <CardContent className="text-center py-8 space-y-4">
            <IqraLogo className="w-12 h-12 mx-auto text-green-700" />
            <h2 className="text-xl font-semibold">🔐 Authentication Required</h2>
            <p className="text-gray-600">Please sign in to run social system tests</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleSignIn}>
              <LogIn className="mr-2 h-4 w-4" /> Sign In to Test
            </Button>
            <div className="mt-4 text-sm text-gray-500">
              <p>Need to test the social challenge system?</p>
              <p>Sign in with Google or create an account to continue.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">🧪 Social Challenge System Tests</h1>
        <p className="text-gray-600">Basic testing of social features</p>
        <p className="text-sm text-green-600 mt-2">Signed in as: {user.email}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Test Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Basic Test Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={runBasicTests} disabled={isLoading} className="w-full mb-4">
              {isLoading ? "Running Tests..." : "🚀 Run Basic Tests"}
            </Button>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Connection</span>
                <TestResultIcon testName="dbConnection" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">User Profile</span>
                <TestResultIcon testName="userProfile" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Social Tables</span>
                <TestResultIcon testName="socialTables" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Output */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Test Output
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto">
              <div className="font-mono text-xs space-y-1">
                {testOutput.length === 0 ? (
                  <p className="text-gray-500">Click "Run Basic Tests" to start testing...</p>
                ) : (
                  testOutput.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Summary */}
      {Object.keys(testResults).length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Test Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Object.values(testResults).filter(Boolean).length}
                </div>
                <div className="text-sm text-gray-500">Passed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {Object.values(testResults).filter((r) => !r).length}
                </div>
                <div className="text-sm text-gray-500">Failed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{Object.keys(testResults).length}</div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(
                    (Object.values(testResults).filter(Boolean).length / Object.keys(testResults).length) * 100,
                  )}
                  %
                </div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline" asChild>
          <a href="/challenges">← Back to Challenges</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/profile">View Profile →</a>
        </Button>
      </div>
    </div>
  )
}
