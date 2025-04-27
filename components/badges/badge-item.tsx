"use client"

import { useState } from "react"
import type { Badge } from "@/data/badges-data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface BadgeItemProps {
  badge: Badge
  earned: boolean
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
}

export default function BadgeItem({ badge, earned, size = "md", showTooltip = true }: BadgeItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const IconComponent = badge.icon

  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-3",
  }

  const rarityColors = {
    common: "bg-gray-100 dark:bg-gray-800",
    uncommon: "bg-green-100 dark:bg-green-900",
    rare: "bg-blue-100 dark:bg-blue-900",
    epic: "bg-purple-100 dark:bg-purple-900",
    legendary: "bg-amber-100 dark:bg-amber-900",
  }

  const borderColors = {
    common: "border-gray-300 dark:border-gray-600",
    uncommon: "border-green-400 dark:border-green-600",
    rare: "border-blue-400 dark:border-blue-600",
    epic: "border-purple-400 dark:border-purple-600",
    legendary: "border-amber-400 dark:border-amber-600",
  }

  const Badge = (
    <div
      className={`rounded-full ${sizeClasses[size]} ${earned ? rarityColors[badge.rarity] : "bg-gray-200 dark:bg-gray-700"} 
      flex items-center justify-center border-2 ${earned ? borderColors[badge.rarity] : "border-gray-300 dark:border-gray-600"} 
      ${earned ? "" : "opacity-40"} transition-all`}
    >
      <IconComponent className={`${earned ? badge.color : "text-gray-400 dark:text-gray-500"}`} />
    </div>
  )

  if (!showTooltip) return Badge

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <div className="cursor-help">{Badge}</div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <div className="text-center">
            <h4 className="font-bold">{badge.name}</h4>
            <p className="text-sm">{badge.description}</p>
            <div className="text-xs mt-1 opacity-70">
              {earned ? "Earned" : "Locked"} • {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
