"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, X, Trophy, BriefcaseMedical, Clock, AlertCircle, RefreshCw } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"

interface Challenge {
  id: string
  challenger_id: string
  challenged_id: string
  category: string
  difficulty: string
  question_count: number
  created_at: string
  expires_at: string
  status: string
  challenger: {
    username: string
    full_name?: string
    avatar_url?: string
  }
}

export default function ChallengeNotification() {
  const { user } = useAuth()
  const [pendingChallenges, setPendingChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [processingAction, setProcessingAction] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🔔 CHALLENGE NOTIFICATION:", message)
    setDebugInfo((prev) => [...prev.slice(-3), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  // Category mapping for better descriptions
  const categoryDescriptions = {
    quran: "Quran Knowledge",
    seerah: "Seerah (Prophet's Biography)",
    fiqh: "Fiqh (Islamic Jurisprudence)",
    hadeeth: "Hadeeth",
    aqeedah: "Aqeedah (Islamic Creed)",
    tafsir: "Tafsir (Quran Commentary)",
    comparative: "Comparative Religion",
    "islamic-finance": "Islamic Finance",
    "new-muslims": "New Muslims",
    tazkiyah: "Tazkiyah (Spiritual Purification)",
    history: "Islamic History & Civilization",
    dawah: "Dawah (Islamic Outreach)",
    "islamic-medical-ethics": "Islamic Medical Ethics",
  }

  // Difficulty mapping
  const difficultyLabels = {
    easy: "Easy",
    intermediate: "Intermediate",
    advanced: "Advanced",
    mixed: "Mixed",
  }

  useEffect(() => {
    if (user) {
      loadPendingChallenges()

      // Set up real-time subscription for new challenges
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
          (payload) => {
            addDebug("New challenge received via real-time!")
            loadPendingChallenges()
          },
        )
        .subscribe()

      return () => {
        subscription.unsubscribe()
      }
    }
  }, [user])

  const loadPendingChallenges = async () => {
    if (!user) return

    addDebug("Loading pending challenges...")
    setLoading(true)

    try {
      // First, verify we have a valid session
      const { data: session } = await supabase.auth.getSession()
      if (!session.session) {
        addDebug("No valid session found")
        setLoading(false)
        return
      }

      addDebug(`Loading challenges for user: ${user.id}`)

      // Use a more robust query with proper error handling
      const { data: challengesData, error: challengesError } = await supabase
        .from("user_challenges")
        .select(`
          id,
          challenger_id,
          challenged_id,
          category,
          difficulty,
          question_count,
          status,
          created_at,
          expires_at
        `)
        .eq("challenged_id", user.id)
        .eq("status", "pending")
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })

      if (challengesError) {
        addDebug(`Challenges query error: ${challengesError.message}`)
        throw challengesError
      }

      addDebug(`Found ${challengesData?.length || 0} pending challenges`)

      if (!challengesData || challengesData.length === 0) {
        setPendingChallenges([])
        setLoading(false)
        return
      }

      // Get challenger profiles separately to avoid join issues
      const challengesWithProfiles: Challenge[] = []

      for (const challenge of challengesData) {
        addDebug(`Getting profile for challenger: ${challenge.challenger_id}`)

        const { data: profileData, error: profileError } = await supabase
          .from("user_profiles")
          .select("username, full_name, avatar_url")
          .eq("id", challenge.challenger_id)
          .single()

        if (profileError) {
          addDebug(`Profile error: ${profileError.message}`)
        }

        challengesWithProfiles.push({
          ...challenge,
          challenger: profileData || {
            username: "Unknown User",
            full_name: "Unknown User",
            avatar_url: null,
          },
        })
      }

      addDebug(`Successfully loaded ${challengesWithProfiles.length} challenges with profiles`)
      setPendingChallenges(challengesWithProfiles)
    } catch (error: any) {
      addDebug(`Error loading challenges: ${error.message}`)
      console.error("Error loading pending challenges:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptChallenge = async (challengeId: string) => {
    if (!selectedChallenge) return

    addDebug(`Accepting challenge: ${challengeId}`)
    setProcessingAction(true)

    try {
      const { error } = await supabase.from("user_challenges").update({ status: "accepted" }).eq("id", challengeId)

      if (error) throw error

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Accepted! 🎯",
        description: "Starting your quiz now...",
      })

      addDebug("Challenge accepted successfully, redirecting to quiz...")

      // Redirect to the challenge quiz with proper parameters
      const challengeUrl = `/quiz?category=${selectedChallenge.category}&difficulty=${selectedChallenge.difficulty}&challenge=${challengeId}&questions=${selectedChallenge.question_count}&opponent=${selectedChallenge.challenger_id}&opponentName=${encodeURIComponent(selectedChallenge.challenger.full_name || selectedChallenge.challenger.username)}&challengerTurn=false`

      addDebug(`Redirecting to: ${challengeUrl}`)
      window.location.href = challengeUrl
    } catch (error: any) {
      addDebug(`Error accepting challenge: ${error.message}`)
      toast({
        title: "Error",
        description: error.message || "Failed to accept challenge",
        variant: "destructive",
      })
    } finally {
      setProcessingAction(false)
    }
  }

  const handleDeclineChallenge = async (challengeId: string) => {
    addDebug(`Declining challenge: ${challengeId}`)
    setProcessingAction(true)

    try {
      const { error } = await supabase.from("user_challenges").update({ status: "declined" }).eq("id", challengeId)

      if (error) throw error

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Declined",
        description: "The challenge has been declined.",
      })

      setShowDialog(false)
      addDebug("Challenge declined successfully")
    } catch (error: any) {
      addDebug(`Error declining challenge: ${error.message}`)
      toast({
        title: "Error",
        description: error.message || "Failed to decline challenge",
        variant: "destructive",
      })
    } finally {
      setProcessingAction(false)
    }
  }

  const openChallengeDetails = (challenge: Challenge) => {
    addDebug(`Opening challenge details: ${challenge.id}`)
    setSelectedChallenge(challenge)
    setShowDialog(true)
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))

    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`

    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`
  }

  const formatExpiresIn = (dateString: string) => {
    const expiryDate = new Date(dateString)
    const now = new Date()
    const diffMs = expiryDate.getTime() - now.getTime()

    if (diffMs <= 0) return "Expired"

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""}`

    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`
  }

  // Don't show anything if no challenges and not loading
  if (!loading && pendingChallenges.length === 0) {
    return null
  }

  return (
    <>
      {/* Floating notification button */}
      {pendingChallenges.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={() => openChallengeDetails(pendingChallenges[0])}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2 animate-pulse"
          >
            <Trophy className="h-5 w-5" />
            <span>
              {pendingChallenges.length} Challenge{pendingChallenges.length !== 1 ? "s" : ""}
            </span>
          </Button>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button disabled className="bg-gray-400 text-white rounded-full p-4 shadow-lg flex items-center gap-2">
            <RefreshCw className="h-5 w-5 animate-spin" />
            <span>Loading...</span>
          </Button>
        </div>
      )}

      {/* Challenge details dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Challenge from {selectedChallenge?.challenger?.full_name || selectedChallenge?.challenger?.username}
            </DialogTitle>
          </DialogHeader>

          {selectedChallenge && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedChallenge.challenger?.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700">
                    {(selectedChallenge.challenger?.full_name || selectedChallenge.challenger?.username || "")
                      .charAt(0)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-lg">
                    {selectedChallenge.challenger?.full_name || selectedChallenge.challenger?.username}
                  </h3>
                  <p className="text-sm text-gray-500">Sent {formatTimeAgo(selectedChallenge.created_at)}</p>
                </div>
              </div>

              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">
                        {categoryDescriptions[selectedChallenge.category as keyof typeof categoryDescriptions] ||
                          selectedChallenge.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Difficulty</p>
                      <p className="font-medium">
                        {difficultyLabels[selectedChallenge.difficulty as keyof typeof difficultyLabels] ||
                          selectedChallenge.difficulty}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Questions</p>
                      <p className="font-medium">{selectedChallenge.question_count}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expires in</p>
                      <p className="font-medium flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatExpiresIn(selectedChallenge.expires_at)}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4 dark:bg-gray-800">
                  <div className="w-full text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <AlertCircle className="h-4 w-4 inline mr-1" />
                      Complete this challenge to compare scores and see who wins!
                    </p>
                  </div>
                </CardFooter>
              </Card>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleAcceptChallenge(selectedChallenge.id)}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={processingAction}
                >
                  {processingAction ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Accept & Start
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => handleDeclineChallenge(selectedChallenge.id)}
                  variant="outline"
                  className="flex-1"
                  disabled={processingAction}
                >
                  <X className="h-4 w-4 mr-2" />
                  Decline
                </Button>
              </div>

              {/* Debug info */}
              {debugInfo.length > 0 && (
                <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
                  <p className="font-medium">Debug Log:</p>
                  {debugInfo.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
