"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { LogOut, Home } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export function Header() {
  const { user, signInWithProvider, signOut } = useAuth()
  const { t } = useLanguage()
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
            <Home className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">{t("appTitle")}</span>
          </Link>

          <nav className="flex items-center space-x-4">
            {user && (
              <>
                <Link href="/categories">
                  <Button variant="ghost">{t("quiz")}</Button>
                </Link>
                <Link href="/challenges">
                  <Button variant="ghost">{t("challenges")}</Button>
                </Link>
                <Link href="/leaderboard">
                  <Button variant="ghost">{t("leaderboard")}</Button>
                </Link>
                <Link href="/profile">
                  <Button variant="ghost">{t("profile")}</Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost">{t("about")}</Button>
                </Link>
                <Button
                  variant="outline"
                  className="flex items-center space-x-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950 bg-transparent"
                  onClick={handleSignOut}
                  disabled={signOutLoading}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span>{t("signOut")}</span>
                </Button>
              </>
            )}

            {!user && <Button onClick={() => signInWithProvider("google")}>{t("signIn")}</Button>}

            <LanguageSelector />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
