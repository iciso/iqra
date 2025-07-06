"use client"

import SimpleChallengeNotifications from "@/components/challenge/simple-challenge-notifications"
import SimpleUserSearch from "@/components/challenge/simple-user-search"
import { AuthProvider } from "@/contexts/auth-context"

export default function SimpleComponentsTestPage() {
  return (
    <AuthProvider>
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Simple Components Test</h1>
          <p className="text-gray-600">
            Testing simplified versions of the components to isolate the database connectivity issue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SimpleChallengeNotifications />
          <SimpleUserSearch />
        </div>
      </div>
    </AuthProvider>
  )
}
