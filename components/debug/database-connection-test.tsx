"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, CheckCircle, XCircle, AlertCircle, RefreshCw, Shield } from "lucide-react"
import { testDatabaseConnections } from "@/app/actions/test-connections"
import { clientConfig } from "@/lib/env-config"

interface ConnectionResult {
  name: string
  status: "success" | "error" | "warning"
  message: string
  details?: any
}

export default function DatabaseConnectionTest() {
  const [results, setResults] = useState<ConnectionResult[]>([])
  const [testing, setTesting] = useState(false)

  const runTests = async () => {
    setTesting(true)
    try {
      const testResults = await testDatabaseConnections()
      setResults(testResults)
    } catch (error) {
      setResults([
        {
          name: "Test Error",
          status: "error",
          message: `Failed to run tests: ${error}`,
        },
      ])
    }
    setTesting(false)
  }

  const getStatusIcon = (status: ConnectionResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  const getStatusColor = (status: ConnectionResult["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-6 w-6" />
          Database & Auth Connection Test
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={runTests} disabled={testing} className="w-full">
          {testing ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Testing Connections...
            </>
          ) : (
            <>
              <Database className="h-4 w-4 mr-2" />
              Test All Connections
            </>
          )}
        </Button>

        {results.length > 0 && (
          <div className="space-y-3">
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(result.status)}
                    <span className="font-medium">{result.name}</span>
                    {result.name.includes("Auth") && <Shield className="h-4 w-4 text-gray-400" />}
                  </div>
                  <Badge className={getStatusColor(result.status)}>{result.status.toUpperCase()}</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{result.message}</p>
                {result.details && (
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(result.details, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Expected Behavior:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Supabase Database & Auth should connect (primary)</li>
            <li>• Neon Database should connect (fallback database)</li>
            <li>• Neon Auth should be configured (alternative auth)</li>
            <li>• Environment variables should be properly set</li>
            <li>• Fallback system should use Supabase → Neon → Demo</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Client-Side Status:</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>✅ Neon Auth Project ID: {clientConfig.projectId || "Not configured"}</li>
            <li>✅ Neon Auth Available: {clientConfig.hasNeonAuth ? "Yes" : "No"}</li>
            <li>🔒 Sensitive keys handled server-side only</li>
            <li>🔄 Ready for testing via server actions</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
