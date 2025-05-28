"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Trophy, Clock, X, CheckCircle } from "lucide-react"

export default function ChallengeScoringInfo() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full">
          <Info className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Challenge Scoring System
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Scoring Flow Diagram */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">How Challenge Scoring Works</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-950 rounded">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">Challenge Completed by Both</p>
                    <p className="text-gray-600">100% of your score + 50% bonus + time bonus</p>
                  </div>
                  <Badge className="bg-green-600">Best Reward</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">Waiting for Opponent</p>
                    <p className="text-gray-600">100% of your score + 25% bonus</p>
                  </div>
                  <Badge variant="secondary">Good Reward</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-orange-50 dark:bg-orange-950 rounded">
                  <X className="h-5 w-5 text-orange-600" />
                  <div className="flex-1">
                    <p className="font-medium">Challenge Declined</p>
                    <p className="text-gray-600">50% of your score + 5 bonus points</p>
                  </div>
                  <Badge variant="outline">Fair Reward</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium">Challenge Expired</p>
                    <p className="text-gray-600">30% of your score + 3 bonus points</p>
                  </div>
                  <Badge variant="outline">Small Reward</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badge System */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Challenge Badges You Can Earn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">👑</span>
                  <div>
                    <p className="font-medium">Challenge Master</p>
                    <p className="text-gray-600">Score 80%+ in completed challenge</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="font-medium">Challenge Winner</p>
                    <p className="text-gray-600">Successfully complete any challenge</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="font-medium">Solo Challenger</p>
                    <p className="text-gray-600">Complete while waiting for opponent</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">💪</span>
                  <div>
                    <p className="font-medium">Persistent Challenger</p>
                    <p className="text-gray-600">Score 70%+ on declined challenge</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="font-medium">Challenge Initiator</p>
                    <p className="text-gray-600">Send challenges (even if declined)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">⏰</span>
                  <div>
                    <p className="font-medium">Patient Challenger</p>
                    <p className="text-gray-600">Wait patiently for responses</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Why This System is Fair</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p>
                    <strong>Your effort is always rewarded</strong> - Even if someone declines, you get points for
                    trying
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p>
                    <strong>Encourages more challenges</strong> - Less risk means more fun social interaction
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p>
                    <strong>Rewards good performance</strong> - Higher scores get better bonuses
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p>
                    <strong>Time bonuses</strong> - Faster completion earns extra points
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p>
                    <strong>Special badges</strong> - Collect achievements for different challenge activities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={() => setOpen(false)} className="bg-green-600 hover:bg-green-700">
              Got it! Let's Challenge!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
