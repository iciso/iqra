"use client"

import { useState, useEffect } from "react"
import { AuthModal } from "@/components/auth/auth-modal"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export function AuthPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, loading, authInitialized } = useAuth()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // If user is already authenticated, redirect to categories or home
    if (!loading && authInitialized && user) {
      const redirect = searchParams.get("redirect") || "/categories"
      router.push(redirect)
    }
  }, [user, loading, authInitialized, router, searchParams])

  const handleClose = () => {
    setIsOpen(false)
    const redirect = searchParams.get("redirect") || "/"
    router.push(redirect)
  }

  if (loading || !authInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return null // Don't render anything if user is authenticated
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <AuthModal isOpen={isOpen} onClose={handleClose} />
    </div>
  )
}
