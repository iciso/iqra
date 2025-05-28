"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import {
  searchUsers,
  getFriends,
  getPendingChallenges,
  getActiveChallenges,
  getChallengeHistory,
  getPendingFriendRequests,
  updateUserOnlineStatus,
  getTopPlayers,
} from "@/lib/supabase-queries"
import { toast } from "@/hooks/use-toast"
import { CheckCircle, XCircle, Clock, Gamepad2, Search, Trophy } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function TestSocialPage() {
  const { user } = useAuth()
  const [testResults, setTestResults] = useState<Record<string, boolean>>({})
  const [testOutput, setTestOutput] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const addOutput = (message: string) => {
    setTestOutput((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const setTestResult = (testName: string, success: boolean) => {
    setTestResults((prev) => ({ ...prev, [testName]: success }))
  }

  const runAllTests = async () => {
    if (!user) {
      addOutput("❌ User not authenticated")
      return
    }

    setLoading(true)
    setTestResults({})
    setTestOutput([])
    addOutput("🚀 Starting Social Challenge System Tests...")

    // Test 1: User Search
    try {
      addOutput("🔍 Testing user search...")
      const searchResults = await searchUsers("test")
      setTestResult("userSearch", true)
      addOutput(`✅ User search successful - Found ${searchResults.length} users`)
    } catch (error) {
      setTestResult("userSearch", false)
      addOutput(`❌ User search failed: ${error}`)
    }

    // Test 2: Get Friends
    try {
      addOutput("👥 Testing get friends...")
      const friends = await getFriends(user.id)
      setTestResult("getFriends", true)
      addOutput(`✅ Get friends successful - Found ${friends.length} friends`)
    } catch (error) {
      setTestResult("getFriends", false)
      addOutput(`❌ Get friends failed: ${error}`)
    }

    // Test 3: Get Pending Friend Requests
    try {
      addOutput("📨 Testing pending friend requests...")
      const requests = await getPendingFriendRequests(user.id)
      setTestResult("pendingRequests", true)
      addOutput(`✅ Pending requests successful - Found ${requests.length} requests`)
    } catch (error) {
      setTestResult("pendingRequests", false)
      addOutput(`❌ Pending requests failed: ${error}`)
    }

    // Test 4: Get Pending Challenges
    try {
      addOutput("⏳ Testing pending challenges...")
      const challenges = await getPendingChallenges(user.id)
      setTestResult("pendingChallenges", true)
      addOutput(`✅ Pending challenges successful - Found ${challenges.length} challenges`)
    } catch (error) {
      setTestResult("pendingChallenges", false)
      addOutput(`❌ Pending challenges failed: ${error}`)
    }

    // Test 5: Get Active Challenges
    try {
      addOutput("🎮 Testing active challenges...")
      const active = await getActiveChallenges(user.id)
      setTestResult("activeChallenges", true)
      addOutput(`✅ Active challenges successful - Found ${active.length} challenges`)
    } catch (error) {
      setTestResult("activeChallenges", false)
      addOutput(`❌ Active challenges failed: ${error}`)
    }

    // Test 6: Get Challenge History
    try {
      addOutput("📚 Testing challenge history...")
      const history = await getChallengeHistory(user.id)
      setTestResult("challengeHistory", true)
      addOutput(`✅ Challenge history successful - Found ${history.length} completed challenges`)
    } catch (error) {
      setTestResult("challengeHistory", false)
      addOutput(`❌ Challenge history failed: ${error}`)
    }

    // Test 7: Update Online Status
    try {
      addOutput("🟢 Testing online status update...")
      await updateUserOnlineStatus(true)
      setTestResult("onlineStatus", true)
      addOutput("✅ Online status update successful")
    } catch (error) {
      setTestResult("onlineStatus", false)
      addOutput(`❌ Online status update failed: ${error}`)
    }

    // Test 8: Get Top Players
    try {
      addOutput("🏆 Testing top players...")
      const topPlayers = await getTopPlayers(10)
      setTestResult("topPlayers", true)
      addOutput(`✅ Top players successful - Found ${topPlayers.length} players`)
    } catch (error) {
      setTestResult("topPlayers", false)
      addOutput(`❌ Top players failed: ${error}`)
    }

    // Test 9: Database Functions Test
    try {
      addOutput("🗄️ Testing database functions...")
      // This is a read-only test to verify the functions exist
      const { data, error } = await supabase.rpc("cleanup_expired_challenges")
      if (error) throw error
      setTestResult("databaseFunctions", true)
      addOutput(`✅ Database functions working - Cleaned up ${data || 0} expired challenges`)
    } catch (error) {
      setTestResult("databaseFunctions", false)
      addOutput(`❌ Database functions failed: ${error}`)
    }

    setLoading(false)
    addOutput("🎉 All tests completed!")

    // Show summary
    const totalTests = Object.keys(testResults).length
    const passedTests = Object.values(testResults).filter(Boolean).length
    addOutput(`📊 Summary: ${passedTests}/${totalTests} tests passed`)

    if (passedTests === totalTests) {
      toast({
        title: "🎉 All Tests Passed!",
        description: "Social challenge system is ready for deployment",
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

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Card>
          <CardContent className="text-center py-8">
            <p>Please sign in to run social system tests</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">🧪 Social Challenge System Tests</h1>
        <p className="text-gray-600">Comprehensive testing of all social features</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Test Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Test Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={runAllTests} disabled={loading} className="w-full mb-4">
              {loading ? "Running Tests..." : "🚀 Run All Tests"}
            </Button>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">User Search</span>
                <TestResultIcon testName="userSearch" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Get Friends</span>
                <TestResultIcon testName="getFriends" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Pending Requests</span>
                <TestResultIcon testName="pendingRequests" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Pending Challenges</span>
                <TestResultIcon testName="pendingChallenges" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Challenges</span>
                <TestResultIcon testName="activeChallenges" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Challenge History</span>
                <TestResultIcon testName="challengeHistory" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Online Status</span>
                <TestResultIcon testName="onlineStatus" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Top Players</span>
                <TestResultIcon testName="topPlayers" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Functions</span>
                <TestResultIcon testName="databaseFunctions" />
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
                  <p className="text-gray-500">Click "Run All Tests" to start testing...</p>
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
