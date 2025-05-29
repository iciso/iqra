"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"

export default function ChallengeToastNotifications() {
  const { user } = useAuth()
  const [lastNotificationTime, setLastNotificationTime] = useState<string | null>(null)

  useEffect(() => {
    if (!user) return

    // Set initial timestamp to prevent showing old challenges as new
    setLastNotificationTime(new Date().toISOString())

    // Subscribe to new challenges
    const subscription = supabase
      .channel("challenge-notifications")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "user_challenges",
          filter: `challenged_id=eq.${user.id}`,
        },
        async (payload) => {
          console.log("🔔 New challenge received:", payload)

          // Get challenger details
          const { data: challenger } = await supabase
            .from("user_profiles")
            .select("username, full_name")
            .eq("id", payload.new.challenger_id)
            .single()

          const challengerName = challenger?.full_name || challenger?.username || "Someone"

          // Show toast notification
          toast({
            title: "🎯 New Challenge!",
            description: `${challengerName} challenged you to ${payload.new.category}!`,
            duration: 5000,
          })
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [user])

  return null // This component only handles notifications
}
