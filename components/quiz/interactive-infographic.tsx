"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Maximize2, Minimize2, X } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface ComparisonItem {
  concept: string
  description: string
  category: string
}

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface MapLocation {
  name: string
  description: string
  coordinates: [number, number]
}

interface ChartData {
  labels: string[]
  values: number[]
  title: string
}

interface InfographicProps {
  type: "timeline" | "comparison" | "process" | "map" | "chart"
  data: any
  title: string
}

export default function InteractiveInfographic({ type, data, title }: InfographicProps) {
  const [expanded, setExpanded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [fullViewMode, setFullViewMode] = useState(false)

  // For comparison type, get unique categories
  const getUniqueCategories = () => {
    if (type === "comparison") {
      const categories = (data as ComparisonItem[]).map((item) => item.category)
      return [...new Set(categories)]
    }
    return []
  }

  const uniqueCategories = getUniqueCategories()

  // Set initial category if comparison type
  useEffect(() => {
    if (type === "comparison" && uniqueCategories.length > 0 && !currentCategory) {
      setCurrentCategory(uniqueCategories[0])
    }
  }, [type, uniqueCategories, currentCategory])

  // Handle escape key to close full view
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullViewMode) {
        setFullViewMode(false)
      }
    }

    window.addEventListener("keydown", handleEscapeKey)
    return () => window.removeEventListener("keydown", handleEscapeKey)
  }, [fullViewMode])

  // Prevent body scrolling when full view is open
  useEffect(() => {
    if (fullViewMode) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [fullViewMode])

  const renderTimeline = (events: TimelineEvent[], forceExpanded = false) => {
    return (
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-300 dark:bg-green-700"></div>
        <div className="space-y-6 pl-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative transition-opacity duration-300 ${
                expanded || forceExpanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="absolute -left-12 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
              <div className="font-bold text-green-700 dark:text-green-400">{event.year}</div>
              <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
        {!expanded && !forceExpanded && events.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 py-1 text-sm dark:text-white">
              {currentIndex + 1} / {events.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.min(events.length - 1, prev + 1))}
              disabled={currentIndex === events.length - 1}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  const renderComparison = (items: ComparisonItem[], forceExpanded = false) => {
    // Group items by category
    const categories = items.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
      },
      {} as Record<string, ComparisonItem[]>,
    )

    return (
      <div className="space-y-6">
        {/* Category tabs for navigation */}
        {uniqueCategories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {uniqueCategories.map((category, idx) => (
              <Button
                key={idx}
                variant={currentCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentCategory(category)}
                className={
                  currentCategory === category
                    ? "bg-green-600 hover:bg-green-700"
                    : "border-green-300 dark:border-green-700 text-green-700 dark:text-green-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Display items for the selected category or all if expanded */}
        {Object.entries(categories).map(([category, items], idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-300 ${
              expanded || forceExpanded || category === currentCategory ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">{category}</h3>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, i) => (
                <div key={i} className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h4 className="font-medium dark:text-white">{item.concept}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation for non-expanded view */}
        {!expanded && !forceExpanded && uniqueCategories.length > 1 && !currentCategory && (
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 py-1 text-sm dark:text-white">
              {currentIndex + 1} / {Object.keys(categories).length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.min(Object.keys(categories).length - 1, prev + 1))}
              disabled={currentIndex === Object.keys(categories).length - 1}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  const renderProcess = (steps: ProcessStep[], forceExpanded = false) => {
    return (
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex transition-opacity duration-300 ${
              expanded || forceExpanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-green-700 dark:text-green-300 font-bold">
              {step.step}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
        {!expanded && !forceExpanded && steps.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 py-1 text-sm dark:text-white">
              {currentIndex + 1} / {steps.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentIndex === steps.length - 1}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  const renderMap = (locations: MapLocation[], forceExpanded = false) => {
    // For now, we'll just render a list of locations
    // In a real implementation, you would integrate with a mapping library
    return (
      <div className="space-y-4">
        <div className="bg-gray-200 dark:bg-gray-700 h-40 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Interactive map would render here</p>
        </div>
        <div className="space-y-3">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-3 bg-green-50 dark:bg-green-900/30 rounded-lg transition-opacity duration-300 ${
                expanded || forceExpanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <h3 className="font-medium dark:text-white">{location.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{location.description}</p>
            </div>
          ))}
        </div>
        {!expanded && !forceExpanded && locations.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 py-1 text-sm dark:text-white">
              {currentIndex + 1} / {locations.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex((prev) => Math.min(locations.length - 1, prev + 1))}
              disabled={currentIndex === locations.length - 1}
              className="dark:border-green-700 dark:text-green-400"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    )
  }

  const renderChart = (chartData: ChartData, forceExpanded = false) => {
    // For the Longest and Shortest Surahs chart, use a table representation instead
    if (chartData.title === "Longest and Shortest Surahs (by verses)") {
      return (
        <div className="space-y-6">
          <h3 className="text-center font-semibold text-lg dark:text-white">{chartData.title}</h3>

          {/* Longest Surahs Table */}
          <div>
            <h4 className="text-center font-medium mb-2 text-green-700 dark:text-green-400">Longest Surahs</h4>
            <div className="overflow-hidden rounded-lg border border-green-200 dark:border-green-800">
              <table className="w-full text-sm">
                <thead className="bg-green-50 dark:bg-green-900/30">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-green-700 dark:text-green-400">Surah Name</th>
                    <th className="px-4 py-2 text-right font-medium text-green-700 dark:text-green-400">
                      Number of Verses
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-100 dark:divide-green-800">
                  {chartData.labels.slice(0, 3).map((label, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 font-medium dark:text-white">{label}</td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {chartData.values[index]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Shortest Surahs Table */}
          <div>
            <h4 className="text-center font-medium mb-2 text-green-700 dark:text-green-400">Shortest Surahs</h4>
            <div className="overflow-hidden rounded-lg border border-green-200 dark:border-green-800">
              <table className="w-full text-sm">
                <thead className="bg-green-50 dark:bg-green-900/30">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-green-700 dark:text-green-400">Surah Name</th>
                    <th className="px-4 py-2 text-right font-medium text-green-700 dark:text-green-400">
                      Number of Verses
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-100 dark:divide-green-800">
                  {chartData.labels.slice(3).map((label, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 font-medium dark:text-white">{label}</td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {chartData.values[index + 3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            <p>
              Al-Baqarah (286 verses) is the longest surah in the Quran, followed by Al-Imran (200 verses) and An-Nisa
              (176 verses).
            </p>
            <p className="mt-1">Al-Kawthar, Al-Asr, and An-Nasr (3 verses each) are among the shortest surahs.</p>
            <p className="mt-1 italic">
              Note: This information is presented as a table until we resolve the chart visualization issues.
            </p>
          </div>
        </div>
      )
    }

    // For other charts, use a simple representation
    return (
      <div className="space-y-4">
        <h3 className="text-center font-semibold dark:text-white">{chartData.title}</h3>
        <div className="overflow-hidden rounded-lg border border-green-200 dark:border-green-800">
          <table className="w-full text-sm">
            <thead className="bg-green-50 dark:bg-green-900/30">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-green-700 dark:text-green-400">Label</th>
                <th className="px-4 py-2 text-right font-medium text-green-700 dark:text-green-400">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100 dark:divide-green-800">
              {chartData.labels.map((label, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                  <td className="px-4 py-3 font-medium dark:text-white">{label}</td>
                  <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{chartData.values[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderInfographic = (forceExpanded = false) => {
    switch (type) {
      case "timeline":
        return renderTimeline(data as TimelineEvent[], forceExpanded)
      case "comparison":
        return renderComparison(data as ComparisonItem[], forceExpanded)
      case "process":
        return renderProcess(data as ProcessStep[], forceExpanded)
      case "map":
        return renderMap(data as MapLocation[], forceExpanded)
      case "chart":
        return renderChart(data as ChartData, forceExpanded)
      default:
        return <div>Infographic type not supported</div>
    }
  }

  // If in full view mode, render the full screen version
  if (fullViewMode) {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-auto">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-green-800 dark:text-green-400">{title}</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullViewMode(false)}
            className="border-green-300 dark:border-green-700 text-green-700 dark:text-green-400"
          >
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>
        <div className="p-6">{renderInfographic(true)}</div>
      </div>
    )
  }

  // Regular view
  return (
    <Card className="overflow-hidden border-green-200 dark:border-green-800 mt-4">
      <div className="bg-green-50 dark:bg-green-900/30 p-3 flex justify-between items-center">
        <h3 className="font-medium text-green-800 dark:text-green-400">{title}</h3>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-green-700 dark:text-green-400 hover:text-green-800 hover:bg-green-100 dark:hover:bg-green-800"
          >
            {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            <span className="sr-only">{expanded ? "Collapse" : "Expand"}</span>
          </Button>

          {/* Simple button that activates full view mode */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullViewMode(true)}
            className="border-green-300 dark:border-green-700 text-green-700 dark:text-green-400"
          >
            Full View
          </Button>
        </div>
      </div>
      <div className="p-4">{renderInfographic(false)}</div>
    </Card>
  )
}
