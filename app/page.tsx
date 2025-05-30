"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IqraLogo } from "@/components/iqra-logo"
import { AuthModal } from "@/components/auth/auth-modal"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import SimpleTopPlayers from "@/components/challenge/simple-top-players"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    // Check for session
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (data?.session?.user) {
          console.log("User found:", data.session.user)
          setUser(data.session.user)
        } else {
          console.log("No user session found")
        }
      } catch (err) {
        console.error("Error checking session:", err)
      } finally {
        // Always stop loading after 3 seconds max
        setTimeout(() => setLoading(false), 3000)
      }
    }

    checkSession()

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, !!session)
      setUser(session?.user || null)
      setLoading(false)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e6f7eb] px-4">
        <div className="text-center">
          <IqraLogo className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-green-700" />
          <p className="text-green-700 text-sm sm:text-base">Loading IQRA...</p>
          <div className="mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#e6f7eb]">
      <div className="container mx-auto py-6 sm:py-12 px-4 flex-grow flex flex-col">
        <div className="text-center mb-6 sm:mb-8">
          <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-[#e0f2e3] rounded-full flex items-center justify-center mb-4">
            <IqraLogo className="w-8 h-8 sm:w-12 sm:h-12 text-green-700" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-green-800 mb-2">IQRA</h1>
          <p className="text-lg sm:text-xl text-green-700">Islamic Quiz Rivalry App</p>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 px-2">
            ما شاء الله (Masha Allah!) Welcome to IQRA. Test your knowledge
            <br className="hidden sm:block" />
            <span className="block sm:inline"> of Islam through learning or challenges.</span>
          </p>
          {user && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200 mx-2 sm:mx-0">
              <p className="text-green-800 font-medium text-sm sm:text-base">
                🎉 You're signed in as {user.email || user.user_metadata?.full_name || "a believer"}!
              </p>
              <p className="text-green-600 text-xs sm:text-sm">
                Your progress will be saved across IQRA and KALAM apps.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto w-full">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 sm:w-6 sm:h-6"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-green-800">IQRA Learn</CardTitle>
              <CardDescription className="text-sm sm:text-base">Learn at your own pace</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 sm:px-6">
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Browse through 12 Islamic categories with easy and advanced difficulty levels. Test your knowledge and
                learn at your own pace.
              </p>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Quran</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Fiqh</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Tafsir</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Hadeeth</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Aqeedah</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-center">
              {user ? (
                <Link href="/categories">
                  <Button className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 py-2">
                    Start Learning
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 py-2"
                >
                  Sign In to Start Learning
                </Button>
              )}
            </CardFooter>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 sm:w-6 sm:h-6"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-green-800">IQRA Challenge</CardTitle>
              <CardDescription className="text-sm sm:text-base">Compete with others</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 sm:px-6">
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Challenge your friends or join the daily challenge. Compete with others and test your Islamic knowledge
                in a fun and engaging way.
              </p>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 sm:w-3 sm:h-3"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Friend Challenge
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 sm:w-3 sm:h-3"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  Daily Challenge
                </span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-center">
              {user ? (
                <Link href="/challenges">
                  <Button className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 py-2">
                    Start Challenges
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 py-2"
                >
                  Sign In to Challenge
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 max-w-md mx-auto w-full">
          <SimpleTopPlayers />
        </div>

        <div className="mt-auto pt-8 sm:pt-12 text-center text-gray-600 text-xs sm:text-sm px-4"></div>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
