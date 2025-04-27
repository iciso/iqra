"use client"

import { useState } from "react"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import BadgeItem from "./badge-item"
import BadgesCollection from "./badges-collection"
import badgesData from "@/data/badges-data"
import { getEarnedBadges } from "@/utils/badges"

export default function BadgesProfile() {
  const [isOpen, setIsOpen] = useState(false)
  const earnedBadges = getEarnedBadges()

  // Get most recent 5 badges
  const recentBadges = earnedBadges
    .map((id) => badgesData.find((badge) => badge.id === id))
    .filter((badge) => badge !== undefined)
    .slice(0, 5) as typeof badgesData

  return (
    <div className="w-full max-w-md">
      <div className="border rounded-lg p-4 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium flex items-center dark:text-white">
            <Shield className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
            Your Badges
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {earnedBadges.length} of {badgesData.length}
          </span>
        </div>

        {earnedBadges.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {recentBadges.map((badge) => (
              <BadgeItem key={badge.id} badge={badge} earned={true} size="sm" />
            ))}
            {earnedBadges.length > 5 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-medium">
                +{earnedBadges.length - 5}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">
            <p className="mb-2">You haven't earned any badges yet.</p>
            <p className="text-sm">Complete challenges and quizzes to earn badges!</p>
          </div>
        )}

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-2 dark:border-green-700 dark:text-green-400">
              View All Badges
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Your Badge Collection</DialogTitle>
              <DialogDescription>Earn badges by completing challenges and achieving milestones</DialogDescription>
            </DialogHeader>
            <BadgesCollection earnedBadges={earnedBadges} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
