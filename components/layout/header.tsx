"use client"

import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { UserMenu } from "@/components/auth/user-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { IqraLogo } from "@/components/iqra-logo"

export function Header() {
  const { user, loading } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <IqraLogo size="sm" showText={false} isLink={false} />
            <span className="font-bold text-xl text-green-700 dark:text-green-400">IQRA</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {loading ? (
            <div className="h-8 w-8 animate-pulse bg-gray-200 rounded-full" />
          ) : user ? (
            <UserMenu />
          ) : (
            <Link href="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
