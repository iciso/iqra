"use client"

import { useTranslation } from "react-i18next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BadgeItem from "./badge-item"
import { Award } from "lucide-react"
import badgesData from "@/data/badges-data"
import EmptyState from "@/components/shared/empty-state"

interface BadgesCollectionProps {
  earnedBadges: string[]
}

export default function BadgesCollection({ earnedBadges }: BadgesCollectionProps) {
  const { t } = useTranslation("profile")
  const categories = {
    all: badgesData,
    earned: badgesData.filter((b) => earnedBadges.includes(b.id)),
    challenge: badgesData.filter((b) => b.criteria?.type === "challenge"),
    achievement: badgesData.filter((b) => b.criteria?.type !== "challenge"),
  }

  const labels: Record<string, string> = {
    all: t("badges.tabAll", { n: badgesData.length }),
    earned: t("badges.tabEarned", { n: categories.earned.length }),
    challenge: t("badges.tabChallenge", { n: categories.challenge.length }),
    achievement: t("badges.tabAchievement", { n: categories.achievement.length }),
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
              <EmptyState icon={<Award />} title={t("badges.noneInCategory")} />
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-2">
                {badges.map((badge) => (
                  <div key={badge.id} className="flex flex-col items-center text-center">
                    <BadgeItem badge={badge} earned={earnedBadges.includes(badge.id)} size="md" />
                    <span className="text-xs mt-1 font-medium truncate max-w-full">{t(`badges.items.${badge.id}.name`, { defaultValue: badge.name })}</span>
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
