"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Home, Menu } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { user, signInWithProvider, signOut } = useAuth()
  const [signOutLoading, setSignOutLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    setSignOutLoading(true)
    await signOut()
    setSignOutLoading(false)
    setMobileMenuOpen(false)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">IQRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
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
                <Link href="/about">
                  <Button variant="ghost">About</Button>
                </Link>
                <Button
                  variant="outline"
                  className="flex items-center space-x-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
         

            {user ? (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/categories" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        Quiz
                      </Button>
                    </Link>
                    <Link href="/challenges" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        Challenges
                      </Button>
                    </Link>
                    <Link href="/leaderboard" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        Leaderboard
                      </Button>
                    </Link>
                    <Link href="/profile" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        Profile
                      </Button>
                    </Link>
                    <Link href="/about" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        About
                      </Button>
                    </Link>
                    <div className="border-t pt-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
                        onClick={handleSignOut}
                        disabled={signOutLoading}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Sign Out</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button onClick={() => signInWithProvider("google")} size="sm">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
