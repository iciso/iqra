"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const { user, signInWithProvider, signOut } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-green-600">
            IQRA
          </Link>

          <nav className="flex items-center space-x-4">
            <Link href="/categories">
              <Button variant="ghost">Quiz</Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost">Leaderboard</Button>
            </Link>

            {user ? (
              <Button onClick={signOut} variant="outline">
                Sign Out
              </Button>
            ) : (
              <Button onClick={() => signInWithProvider("google")}>Sign In</Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
