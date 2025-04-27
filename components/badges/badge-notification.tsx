"use client"

import { useState, useEffect } from "react"
import type { Badge } from "@/data/badges-data"
import BadgeItem from "./badge-item"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

interface BadgeNotificationProps {
  badges: Badge[]
  onClose: () => void
}

export default function BadgeNotification({ badges, onClose }: BadgeNotificationProps) {
  const [open, setOpen] = useState(badges.length > 0)

  useEffect(() => {
    if (badges.length > 0 && open) {
      // Trigger confetti when badges are earned
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }, [badges, open])

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {badges.length > 1 ? "New Badges Earned!" : "New Badge Earned!"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center p-4">
          <div className="flex flex-wrap justify-center gap-4 my-6">
            {badges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center">
                <BadgeItem badge={badge} earned={true} size="lg" showTooltip={false} />
                <h3 className="mt-2 font-bold text-lg">{badge.name}</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-1">{badge.description}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={handleClose}
            className="mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Awesome!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
