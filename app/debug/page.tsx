import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, TestTube, Users, Zap, Shield, Activity } from "lucide-react"

export default function DebugPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">IQRA Debug Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Database Connections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database Connections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Test Supabase, Neon database connections and auth services</p>
            <Link href="/debug/database-connections">
              <Button className="w-full">
                <Database className="h-4 w-4 mr-2" />
                Test Connections
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Auth Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Authentication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Test user authentication and profile management</p>
            <Link href="/debug/auth-test">
              <Button className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Test Auth
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Challenge Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Challenge System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Test challenge creation and notifications</p>
            <Link href="/debug/challenge-test">
              <Button className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Test Challenges
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Simple Components */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Test user search and top players components</p>
            <Link href="/debug/simple-components-test">
              <Button className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Test Components
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Quiz Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Quiz Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Test quiz result submission and leaderboard</p>
            <Link href="/debug/quiz-results-test">
              <Button className="w-full">
                <Activity className="h-4 w-4 mr-2" />
                Test Results
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Simple Database Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              Simple DB Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Basic database connectivity test</p>
            <Link href="/debug/simple-db-test">
              <Button className="w-full">
                <TestTube className="h-4 w-4 mr-2" />
                Simple Test
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Environment Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium text-blue-800 mb-2">Supabase</h3>
            <ul className="text-blue-700 space-y-1">
              <li>✅ Database configured</li>
              <li>✅ Auth configured</li>
              <li>✅ Primary system</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-2">Neon</h3>
            <ul className="text-blue-700 space-y-1">
              <li>✅ Database configured</li>
              <li>✅ Auth configured</li>
              <li>✅ Fallback system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
