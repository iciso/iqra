"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Home, 
  HelpCircle, 
  BookOpen, 
  Trophy, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  RotateCw, 
  Smartphone, 
  Monitor 
} from "lucide-react"

export default function HowItWorksPage() {
  const [viewMode, setViewMode] = useState<"portrait" | "landscape">("portrait")
  const [isAutoDetected, setIsAutoDetected] = useState(false)

  // Auto-detect view orientation based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (!isAutoDetected) {
        if (window.innerWidth >= 1024) {
          setViewMode("landscape")
        } else {
          setViewMode("portrait")
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isAutoDetected])

  const handleModeChange = (mode: "portrait" | "landscape") => {
    setViewMode(mode)
    setIsAutoDetected(true) // User manually toggled
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6 pt-2">
        
        {/* Navigation Header */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-white/80 dark:bg-gray-800 backdrop-blur">
              <Home className="h-4 w-4 mr-1.5" />
              Home
            </Button>
          </Link>
          <Badge variant="secondary" className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100">
            <HelpCircle className="h-3.5 w-3.5 mr-1" />
            Guide & Overview
          </Badge>
        </div>

        {/* Hero Banner */}
        <div className="text-center space-y-3 py-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 dark:text-green-100 tracking-tight">
            How IQRA Works
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Whether you want to learn at your own pace or test your knowledge against time and friends, 
            IQRA provides two tailored tracks to suit your learning style.
          </p>
        </div>

        {/* Two Tracks Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Track 1: Quiz */}
          <Card className="border-emerald-200 dark:border-emerald-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-500" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 hover:bg-emerald-100">
                  Track 1
                </Badge>
                <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle className="text-xl text-emerald-950 dark:text-emerald-100 mt-2">
                Quizzes (Answer & Learn)
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Untimed practice designed for thoughtful learning and discovery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Timer:</strong> Read explanations carefully without any rush.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Optional Leaderboard:</strong> Choose whether to submit your score or keep your practice private.</span>
              </div>
              <div className="pt-2">
                <Link href="/categories">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5">
                    Start a Practice Quiz
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Track 2: Challenge */}
          <Card className="border-amber-200 dark:border-amber-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 hover:bg-amber-100">
                  Track 2
                </Badge>
                <Trophy className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle className="text-xl text-amber-950 dark:text-amber-100 mt-2">
                Challenges (Play & Compete)
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Timed quizzes to test your speed, unlock badges, and challenge peers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Countdown Timer:</strong> Speed & accuracy combine for bonus points.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Flexible Posting:</strong> Post scores to global ranks or play strictly for fun.</span>
              </div>
              <div className="pt-2">
                <Link href="/challenges">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white gap-1.5">
                    Enter Challenge Mode
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Schematic Flow Diagram Section */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-green-900 dark:text-green-100">
                  Process Flow Diagram
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  How both paths lead to your results and leaderboard placement options.
                </CardDescription>
              </div>

              {/* Landscape vs Portrait Manual Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium hidden sm:inline">Format:</span>
                <Tabs value={viewMode} onValueChange={(val) => handleModeChange(val as "portrait" | "landscape")}>
                  <TabsList className="bg-green-100/80 dark:bg-green-900/80">
                    <TabsTrigger value="portrait" className="text-xs gap-1.5">
                      <Smartphone className="h-3.5 w-3.5" />
                      Portrait
                    </TabsTrigger>
                    <TabsTrigger value="landscape" className="text-xs gap-1.5">
                      <Monitor className="h-3.5 w-3.5" />
                      Landscape
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2 md:p-4 overflow-hidden flex justify-center items-center min-h-[300px]">
              
              {viewMode === "portrait" ? (
                <div className="w-full max-w-md mx-auto">
                  <Image
                    src="https://iqrar.vercel.app/flow-portrait.png"
                    alt="IQRA Player Process Flow - Portrait Layout"
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full max-w-4xl mx-auto">
                  <Image
                    src="https://iqrar.vercel.app/flow-landscape.png"
                    alt="IQRA Player Process Flow - Landscape Layout"
                    width={1600}
                    height={900}
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                    priority
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
              <span>* Displaying auto-optimized diagram for your device view.</span>
              <button 
                onClick={() => handleModeChange(viewMode === "portrait" ? "landscape" : "portrait")}
                className="flex items-center gap-1 hover:text-green-700 dark:hover:text-green-300 transition"
              >
                <RotateCw className="h-3 w-3" />
                Switch Diagram View
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Action */}
        <div className="text-center pt-2 pb-6">
          <Link href="/categories">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-semibold shadow-md px-8">
              Explore All 50 Categories
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
