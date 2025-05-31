"use client"

import { useState, useEffect } from "react"
import { testDatabaseConnections } from "@/app/actions/test-connections"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DatabaseConnectionsPage() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const runTests = async () => {
    setLoading(true)
    setError(null)
    try {
      const testResults = await testDatabaseConnections()
      setResults(testResults)
    } catch (err) {
      console.error("Test failed:", err)
      setError(`Test failed: ${err.message || "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500 hover:bg-green-600"
      case "warning":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "error":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Database Connections Test</CardTitle>
          <CardDescription>Test the connections to various databases and services</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

          <div className="mb-4">
            <Button onClick={runTests} disabled={loading}>
              {loading ? "Testing..." : "Run Tests Again"}
            </Button>
          </div>

          {results.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {results.map((result, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span>{result.name}</span>
                      <Badge className={getBadgeColor(result.status)}>{result.status.toUpperCase()}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-gray-50 rounded">
                      <p className="mb-2">{result.message}</p>
                      {result.details && (
                        <pre className="p-2 bg-gray-100 rounded text-sm overflow-auto">
                          {JSON.stringify(result.details, null, 2)}
                        </pre>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : loading ? (
            <p>Loading test results...</p>
          ) : (
            <p>No test results available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
