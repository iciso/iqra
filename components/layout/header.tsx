"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">IQRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/categories">
              <Button variant="ghost">Quiz</Button>
            </Link>
            <Link href="/challenges">
              <Button variant="ghost">Challenges</Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost">Leaderboard</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
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
                  <Link href="/about" onClick={closeMobileMenu}>
                    <Button variant="ghost" className="w-full justify-start">
                      About
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
