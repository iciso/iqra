"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { IqraLogo } from "@/components/iqra-logo"
import { LogOut } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { user, signInWithProvider, signOut } = useAuth()

  // Add loading state for the sign out button
  const [signOutLoading, setSignOutLoading] = useState(false)

  const handleSignOut = async () => {
    setSignOutLoading(true)
    await signOut()
    setSignOutLoading(false)
  }

  return (
    <header className="bg-white shadow-sm border-b dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <IqraLogo className="h-8 w-8" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">IQRA</span>
          </Link>

          <nav className="flex items-center space-x-4">
            {user && (
              <>
                <Link href="/categories">
                  <Button variant="ghost">Quiz</Button>
                </Link>
                <Link href="/challenges">
                  <Button variant="ghost">Challenges</Button>
                </Link>
                <Link href="/leaderboard">
                  <Button variant="ghost">Leaderboard</Button>
                </Link>
                <Link href="/profile">
                  <Button variant="ghost">Profile</Button>
                </Link>
                {/* Direct sign out button */}
                <Button
                  variant="outline"
                  className="flex items-center space-x-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={handleSignOut}
                  disabled={signOutLoading}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span>Sign Out</span>
                </Button>
              </>
            )}

            {!user && <Button onClick={() => signInWithProvider("google")}>Sign In</Button>}
          </nav>
        </div>
      </div>
    </header>
  )
}
