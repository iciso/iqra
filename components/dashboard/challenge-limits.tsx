"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ChallengeLimitsProps {
  dailyChallenges: number
  maxDailyChallenges: number
  categoriesUsed: number
  maxDailyCategories: number
}

export function ChallengeLimits({
  dailyChallenges,
  maxDailyChallenges,
  categoriesUsed,
  maxDailyCategories,
}: ChallengeLimitsProps) {
  const challengeProgress = (dailyChallenges / maxDailyChallenges) * 100
  const categoryProgress = (categoriesUsed / maxDailyCategories) * 100

  return (
    <Card className="border-green-200 shadow-sm dark:border-green-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-green-800 dark:text-green-400 flex items-center">
          Daily Limits
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 ml-2 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Limits reset at midnight in your local time</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm dark:text-gray-300">Challenges</span>
              <span className="text-sm font-medium dark:text-white">
                {dailyChallenges}/{maxDailyChallenges}
              </span>
            </div>
            <Progress value={challengeProgress} className="h-2 bg-green-100 dark:bg-green-800" />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm dark:text-gray-300">Categories</span>
              <span className="text-sm font-medium dark:text-white">
                {categoriesUsed}/{maxDailyCategories}
              </span>
            </div>
            <Progress value={categoryProgress} className="h-2 bg-green-100 dark:bg-green-800" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
