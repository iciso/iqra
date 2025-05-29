"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { UserMenu } from "@/components/auth/user-menu"
import { IqraLogo } from "@/components/iqra-logo"

export function Header() {
  const { user, signInWithProvider } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <IqraLogo className="h-8 w-8" />
            <span className="text-2xl font-bold text-green-600">IQRA</span>
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
                <Link href="/badges">
                  <Button variant="ghost">Badges</Button>
                </Link>
              </>
            )}

            {user ? <UserMenu /> : <Button onClick={() => signInWithProvider("google")}>Sign In</Button>}
          </nav>
        </div>
      </div>
    </header>
  )
}
