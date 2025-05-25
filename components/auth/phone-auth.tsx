"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { Phone, MessageSquare, AlertCircle } from "lucide-react"

interface PhoneAuthProps {
  onSuccess: () => void
}

export function PhoneAuth({ onSuccess }: PhoneAuthProps) {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const sendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Basic phone validation
    if (!phone || phone.length < 10) {
      setError("Please enter a valid phone number")
      setLoading(false)
      return
    }

    // Format phone number (add country code if not present)
    const formattedPhone = phone.startsWith("+") ? phone : `+1${phone.replace(/\D/g, "")}`

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess("OTP sent! Check your phone for the verification code.")
        setStep("otp")
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!otp || otp.length !== 6) {
      setError("Please enter the 6-digit verification code")
      setLoading(false)
      return
    }

    const formattedPhone = phone.startsWith("+") ? phone : `+1${phone.replace(/\D/g, "")}`

    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: formattedPhone,
        token: otp,
        type: "sms",
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess("Phone verified successfully!")
        onSuccess()
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setStep("phone")
    setPhone("")
    setOtp("")
    setError("")
    setSuccess("")
  }

  if (step === "phone") {
    return (
      <form onSubmit={sendOTP} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
          <p className="text-xs text-gray-500">Enter your phone number with country code (e.g., +1 for US)</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        {success && <div className="text-sm text-green-600 bg-green-50 p-3 rounded-md">{success}</div>}

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
          <Phone className="w-4 h-4 mr-2" />
          {loading ? "Sending..." : "Send Verification Code"}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={verifyOTP} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp">Verification Code</Label>
        <Input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="123456"
          maxLength={6}
          required
        />
        <p className="text-xs text-gray-500">Enter the 6-digit code sent to {phone}</p>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {success && <div className="text-sm text-green-600 bg-green-50 p-3 rounded-md">{success}</div>}

      <div className="space-y-2">
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
          <MessageSquare className="w-4 h-4 mr-2" />
          {loading ? "Verifying..." : "Verify Code"}
        </Button>

        <Button type="button" variant="outline" className="w-full" onClick={resetForm}>
          Use Different Number
        </Button>
      </div>
    </form>
  )
}
