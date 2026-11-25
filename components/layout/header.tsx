"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trophy, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import ChallengeBell from "@/components/challenge/challenge-bell"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/i18n/language-switcher"
import { useLocale } from "@/lib/i18n/locale-context"
import type { Locale } from "@/lib/i18n/config"

const NAV_ITEMS = [
  { href: "/subjects", key: "nav.subjects" },
  { href: "/challenges", key: "nav.challenges" },
  { href: "/leaderboard", key: "nav.leaderboard" },
  { href: "/profile", key: "nav.profile" },
  { href: "/how", key: "nav.how" },
  { href: "/about", key: "nav.about" },
]

// Where the desktop nav takes over from the menu button, per language. Tamil labels are the
// longest: one line needs ~1170px (logo 86 + nav 1082, measured), more than the lg row (976px at
// 1024) or the 6xl row (1104px), so Tamil keeps the menu button until xl and gets a wider row there.
// English and Bangla (nav 800px) fit at lg.
const NAV_LAYOUT: Record<Locale, { row: string; desktop: string; mobile: string }> = {
  en: { row: "max-w-6xl", desktop: "hidden lg:flex", mobile: "lg:hidden" },
  bn: { row: "max-w-6xl", desktop: "hidden lg:flex", mobile: "lg:hidden" },
  ta: { row: "max-w-7xl", desktop: "hidden xl:flex", mobile: "xl:hidden" },
}

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`)

const Header = () => {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const layout = NAV_LAYOUT[locale]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname() ?? "/"
  const scrolled = useScrolled(8)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navButton = (item: (typeof NAV_ITEMS)[number], mobile = false) => {
    const active = isActive(pathname, item.href)
    return (
      <Button
        key={item.href}
        asChild
        variant="ghost"
        className={cn(
          mobile && "w-full justify-start",
          active && "bg-accent font-semibold text-green-700 dark:text-green-400",
        )}
      >
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={mobile ? closeMobileMenu : undefined}
        >
          {t(item.key)}
        </Link>
      </Button>
    )
  }

  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur transition-shadow supports-[backdrop-filter]:bg-background/70",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <div className={cn("mx-auto w-full px-4 sm:px-6", layout.row)}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">IQRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label={t("nav.main")} className={cn("items-center gap-1", layout.desktop)}>
            {NAV_ITEMS.map((item) => navButton(item))}
            <ChallengeBell />
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className={cn("flex items-center gap-1", layout.mobile)}>
            <ChallengeBell />
            <LanguageSwitcher />
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label={t("nav.menu")}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav aria-label={t("nav.main")} className="flex flex-col space-y-4 mt-8">
                  {NAV_ITEMS.map((item) => navButton(item, true))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
