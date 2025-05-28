"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, X, Trophy, Clock, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { getPendingChallenges, acceptChallenge, declineChallenge } from "@/lib/supabase-queries"
import { toast } from "@/hooks/use-toast"

export default function ChallengeNotification() {
  const { user } = useAuth()
  const [pendingChallenges, setPendingChallenges] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null)
  const [processingAction, setProcessingAction] = useState(false)

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
    tazkiyah: "Tazkiyah (Spiritual Purification)",
    history: "Islamic History & Civilization",
    dawah: "Dawah (Islamic Outreach)",
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
    }
  }, [user])

  const loadPendingChallenges = async () => {
    if (!user) return

    setLoading(true)
    try {
      const challenges = await getPendingChallenges(user.id)
      setPendingChallenges(challenges)
    } catch (error) {
      console.error("Error loading pending challenges:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptChallenge = async (challengeId: string) => {
    setProcessingAction(true)
    try {
      await acceptChallenge(challengeId)

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Accepted!",
        description: "You can now take the challenge quiz.",
      })

      // Redirect to the challenge quiz
      if (selectedChallenge) {
        const challengeUrl = `/quiz?category=${selectedChallenge.category}&difficulty=${selectedChallenge.difficulty}&challenge=${challengeId}&questions=${selectedChallenge.question_count}&opponent=${selectedChallenge.challenger_id}`
        window.location.href = challengeUrl
      } else {
        setShowDialog(false)
      }
    } catch (error: any) {
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
    setProcessingAction(true)
    try {
      await declineChallenge(challengeId)

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Declined",
        description: "The challenge has been declined.",
      })

      setShowDialog(false)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to decline challenge",
        variant: "destructive",
      })
    } finally {
      setProcessingAction(false)
    }
  }

  const openChallengeDetails = (challenge: any) => {
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

  if (loading || pendingChallenges.length === 0) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => openChallengeDetails(pendingChallenges[0])}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
        >
          <Trophy className="h-5 w-5" />
          <span>
            {pendingChallenges.length} Challenge{pendingChallenges.length !== 1 ? "s" : ""}
          </span>
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
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
                        {categoryDescriptions[selectedChallenge.category] || selectedChallenge.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Difficulty</p>
                      <p className="font-medium">
                        {difficultyLabels[selectedChallenge.difficulty] || selectedChallenge.difficulty}
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
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
