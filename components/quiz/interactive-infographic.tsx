"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Maximize2, Minimize2 } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
  if (type === "comparison" && uniqueCategories.length > 0 && !currentCategory) {
    setCurrentCategory(uniqueCategories[0])
  }

  const renderInfographic = () => {
    switch (type) {
      case "timeline":
        return renderTimeline(data as TimelineEvent[])
      case "comparison":
        return renderComparison(data as ComparisonItem[])
      case "process":
        return renderProcess(data as ProcessStep[])
      case "map":
        return renderMap(data as MapLocation[])
      case "chart":
        return renderChart(data as ChartData)
      default:
        return <div>Infographic type not supported</div>
    }
  }

  const renderTimeline = (events: TimelineEvent[]) => {
    return (
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-300 dark:bg-green-700"></div>
        <div className="space-y-6 pl-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative transition-opacity duration-300 ${
                expanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="absolute -left-12 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
              <div className="font-bold text-green-700 dark:text-green-400">{event.year}</div>
              <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
        {!expanded && events.length > 1 && (
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

  const renderComparison = (items: ComparisonItem[]) => {
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
              expanded || category === currentCategory ? "opacity-100" : "opacity-0 hidden"
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
        {!expanded && uniqueCategories.length > 1 && !currentCategory && (
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

  const renderProcess = (steps: ProcessStep[]) => {
    return (
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex transition-opacity duration-300 ${
              expanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
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
        {!expanded && steps.length > 1 && (
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

  const renderMap = (locations: MapLocation[]) => {
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
                expanded || index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <h3 className="font-medium dark:text-white">{location.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{location.description}</p>
            </div>
          ))}
        </div>
        {!expanded && locations.length > 1 && (
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

  const renderChart = (chartData: ChartData) => {
    // Enhanced bar chart representation with better visibility
    const maxValue = Math.max(...chartData.values)

    return (
      <div className="space-y-6">
        <h3 className="text-center font-semibold dark:text-white">{chartData.title}</h3>
        <div className="h-60 flex items-end justify-around gap-2 px-4">
          {chartData.values.map((value, index) => {
            // Calculate if this is a long or short surah for color coding
            const isLongSurah = value > 100
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative">
                  <div
                    className={`w-12 ${isLongSurah ? "bg-green-600 dark:bg-green-700" : "bg-green-400 dark:bg-green-500"} rounded-t transition-all duration-300 hover:bg-green-500 dark:hover:bg-green-600`}
                    style={{ height: `${Math.max((value / maxValue) * 100, 10)}%` }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {value} verses
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs font-medium dark:text-gray-300">{chartData.labels[index]}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">{value}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          {chartData.title === "Longest and Shortest Surahs (by verses)" && (
            <p>
              Al-Baqarah (286 verses) is the longest surah, while Al-Kawthar, Al-Asr, and An-Nasr (3 verses each) are
              among the shortest.
            </p>
          )}
        </div>
      </div>
    )
  }

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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-green-300 dark:border-green-700 text-green-700 dark:text-green-400"
              >
                Full View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400">{title}</h2>
                <div className="overflow-y-auto max-h-[60vh]">{renderInfographic()}</div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="p-4">{renderInfographic()}</div>
    </Card>
  )
}
