"use client"

import { useState } from "react"
import { Tab } from "@headlessui/react"
import BadgeItem from "./badge-item"
import badgesData from "@/data/badges-data"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

interface BadgesCollectionProps {
  earnedBadges: string[] // Array of earned badge IDs
}

export default function BadgesCollection({ earnedBadges }: BadgesCollectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Group badges by rarity
  const categories = {
    "All Badges": badgesData,
    Earned: badgesData.filter((badge) => earnedBadges.includes(badge.id)),
    Challenge: badgesData.filter((badge) => badge.criteria.type === "challenge"),
    Achievement: badgesData.filter((badge) => badge.criteria.type !== "challenge"),
  }

  return (
    <div className="w-full max-w-3xl px-2 py-4 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-green-100 p-1 dark:bg-green-900/30">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-green-700 shadow dark:bg-green-800 dark:text-white"
                    : "text-green-700 hover:bg-white/[0.12] hover:text-green-700 dark:text-green-400 dark:hover:text-white",
                )
              }
            >
              {category}{" "}
              {category !== "All Badges" && (
                <span className="ml-1">({categories[category as keyof typeof categories].length})</span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((badges, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3 dark:bg-gray-800",
                "ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2",
              )}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-2">
                {badges.map((badge) => (
                  <div key={badge.id} className="flex flex-col items-center text-center">
                    <BadgeItem badge={badge} earned={earnedBadges.includes(badge.id)} size="md" />
                    <span className="text-xs mt-1 font-medium truncate max-w-full">{badge.name}</span>
                  </div>
                ))}
              </div>
              {badges.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No badges in this category yet.</p>
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
