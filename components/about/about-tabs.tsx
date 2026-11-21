"use client"

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react"

type AboutTabsProps = {
  mission: ReactNode
  quizzes: ReactNode
  players: ReactNode
  more: ReactNode
}

type TabId = keyof AboutTabsProps

// Every #id that lives inside a tab must be listed here, under that tab.
// The FIRST id in each list is the one shown in the address bar when the tab is clicked.
const tabs: { id: TabId; label: string; hashes: string[] }[] = [
  { id: "mission", label: "Mission", hashes: ["mission"] },
  { id: "quizzes", label: "Quizzes", hashes: ["iqra-quizzes"] },
  {
    id: "players",
    label: "Players",
    hashes: [
      "player-contributions-dhanish-ali",
      "dhanish-ali",
      "feroza-mi",
      "joy-ahmed",
      "riaz-ahamed",
      // add each new contributor's id here
    ],
  },
  { id: "more", label: "Open Source & Thanks", hashes: ["open-source"] },
]

const subscribeToHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange)
  return () => window.removeEventListener("hashchange", onChange)
}

// Old links such as /about#iqra-quizzes still open the tab that holds that section.
const tabFromHash = (hash: string): TabId | null => {
  const key = hash.replace(/^#/, "")
  return tabs.find((tab) => tab.hashes.includes(key))?.id ?? null
}

export default function AboutTabs(props: AboutTabsProps) {
  const hashTab = useSyncExternalStore(subscribeToHash, () => tabFromHash(window.location.hash), () => null)
  const [picked, setPicked] = useState<TabId | null>(null)

  // The URL hash wins, so a link to /about#iqra-quizzes works even when the page is already open.
  const active = hashTab ?? picked ?? "mission"

  // Only one tab is on the page at a time, so the browser cannot scroll to an id inside a
  // tab that was not open when the page loaded. Once the right tab is showing, scroll to the target.
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""))
      if (!id) return
      // short delay so React has finished showing the tab that holds the target
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }

    scrollToHash() // page opened with a #link
    window.addEventListener("hashchange", scrollToHash) // a #link clicked while the page is open
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [])

  const openTab = (tab: (typeof tabs)[number]) => {
    window.history.replaceState(null, "", `#${tab.hashes[0]}`)
    setPicked(tab.id)
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="About IQRA"
        className="sticky top-16 z-10 -mx-4 mb-8 flex gap-1 overflow-x-auto border-b border-green-200 bg-gray-50/95 px-4 backdrop-blur dark:border-green-900 dark:bg-background/95"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => openTab(tab)}
              className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "border-green-600 text-green-800 dark:border-green-400 dark:text-green-300"
                  : "border-transparent text-gray-500 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-300"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div role="tabpanel">{props[active]}</div>
    </div>
  )
}
