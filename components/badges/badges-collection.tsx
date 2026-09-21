"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BadgeItem from "./badge-item"
import badgesData from "@/data/badges-data"

interface BadgesCollectionProps {
  earnedBadges: string[]
}

export default function BadgesCollection({ earnedBadges }: BadgesCollectionProps) {
  const categories = {
    all: badgesData,
    earned: badgesData.filter((b) => earnedBadges.includes(b.id)),
    challenge: badgesData.filter((b) => b.criteria?.type === "challenge"),
    achievement: badgesData.filter((b) => b.criteria?.type !== "challenge"),
  }

  const labels: Record<string, string> = {
    all: `All (${badgesData.length})`,
    earned: `Earned (${categories.earned.length})`,
    challenge: `Challenge (${categories.challenge.length})`,
    achievement: `Achievement (${categories.achievement.length})`,
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          {Object.keys(categories).map((key) => (
            <TabsTrigger key={key} value={key} className="flex-1 text-xs sm:text-sm">
              {labels[key]}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(categories).map(([key, badges]) => (
          <TabsContent key={key} value={key}>
            {badges.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">No badges in this category yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-2">
                {badges.map((badge) => (
                  <div key={badge.id} className="flex flex-col items-center text-center">
                    <BadgeItem badge={badge} earned={earnedBadges.includes(badge.id)} size="md" />
                    <span className="text-xs mt-1 font-medium truncate max-w-full">{badge.name}</span>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
