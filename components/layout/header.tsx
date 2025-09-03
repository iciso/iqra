"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, HomeIcon, Menu } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTranslation } from "react-i18next"

export function Header() {
  const { t } = useTranslation("common")
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
            <HomeIcon className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">IQRA</span>
            <span className="sr-only">{t("nav.home")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {user && (
              <>
                <Link href="/categories">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.categories")}
                  </Button>
                </Link>
                <Link href="/challenges">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.challenges")}
                  </Button>
                </Link>
                <Link href="/leaderboard">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.leaderboard")}
                  </Button>
                </Link>
                <Link href="/badges">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.badges")}
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.profile")}
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" className="px-2 lg:px-3">
                    {t("nav.about")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="flex items-center space-x-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950 bg-transparent"
                  onClick={handleSignOut}
                  disabled={signOutLoading}
                >
                  <LogOut className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span>{t("auth.signOut")}</span>
                </Button>
              </>
            )}

            {!user && <Button onClick={() => signInWithProvider("google")}>{t("auth.signIn")}</Button>}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {user ? (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" aria-label={t("nav.menu")}>
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-2 mt-8">
                    <Link href="/" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.home")}
                      </Button>
                    </Link>
                    <Link href="/categories" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.categories")}
                      </Button>
                    </Link>
                    <Link href="/challenges" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.challenges")}
                      </Button>
                    </Link>
                    <Link href="/leaderboard" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.leaderboard")}
                      </Button>
                    </Link>
                    <Link href="/badges" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.badges")}
                      </Button>
                    </Link>
                    <Link href="/profile" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.profile")}
                      </Button>
                    </Link>
                    <Link href="/about" onClick={closeMobileMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        {t("nav.about")}
                      </Button>
                    </Link>
                    <div className="border-t pt-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950 bg-transparent"
                        onClick={handleSignOut}
                        disabled={signOutLoading}
                      >
                        <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                        <span>{t("auth.signOut")}</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button onClick={() => signInWithProvider("google")} size="sm">
                {t("auth.signIn")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
