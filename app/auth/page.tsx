"use client"

import { useState } from "react"
import { AuthModal } from "@/components/auth/auth-modal"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useEffect } from "react"

export default function AuthPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // If user is already authenticated, redirect to results or home
    if (user) {
      router.push("/results")
    }
  }, [user, router])

  const handleClose = () => {
    setIsOpen(false)
    router.back() // Go back to previous page
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
