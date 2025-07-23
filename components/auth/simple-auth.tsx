"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

export function SimpleAuth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleAuth = async (isSignUp: boolean) => {
    setLoading(true)
    setMessage("")

    try {
      let result
      if (isSignUp) {
        // Get the current origin for redirect URL
        const redirectTo =
          typeof window !== "undefined"
            ? `${window.location.origin}/auth/callback`
            : "https://v0-kalam.vercel.app/auth/callback"

        result = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: redirectTo,
          },
        })
      } else {
        result = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        })
      }

      if (result.error) {
        setMessage(`Error: ${result.error.message}`)
      } else {
        if (isSignUp) {
          setMessage(`Success! Check your email for a confirmation link. The link will redirect you to this site.`)
        } else {
          setMessage(`Success! You are signed in.`)
        }
      }
    } catch (error) {
      setMessage(`Exception: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Simple Auth Test</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="simple-email">Email:</Label>
          <Input
            id="simple-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="simple-password">Password:</Label>
          <Input
            id="simple-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="flex space-x-2">
          <Button onClick={() => handleAuth(false)} disabled={loading || !email || !password} className="flex-1">
            Sign In
          </Button>
          <Button
            onClick={() => handleAuth(true)}
            disabled={loading || !email || !password}
            className="flex-1"
            variant="outline"
          >
            Sign Up
          </Button>
        </div>

        {message && (
          <div
            className={`p-2 rounded text-sm ${
              message.includes("Success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
