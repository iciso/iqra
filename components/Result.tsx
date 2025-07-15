"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface ResultProps {
  score: number
  totalQuestions: number
  percentage: number
  message: string
}

export default function Result({ score, totalQuestions, percentage, message }: ResultProps) {
  return (
    <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Quiz Results</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500 dark:border-green-600"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  percentage >= 25
                    ? "100% 0%"
                    : `${50 + 50 * Math.sin(((percentage / 100) * Math.PI) / 2)}% ${
                        50 - 50 * Math.cos(((percentage / 100) * Math.PI) / 2)
                      }%`
                }${percentage >= 50 ? ", 100% 100%" : ""}${percentage >= 75 ? ", 0% 100%" : ""}${
                  percentage >= 100 ? ", 0% 0%" : ""
                })`,
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold dark:text-white">{percentage}%</span>
            </div>
          </div>
        </div>
        <p className="text-xl mb-2 dark:text-white">
          You scored <span className="font-bold text-green-700 dark:text-green-400">{score}</span> out of{" "}
          <span className="font-bold">{totalQuestions}</span>
        </p>
        <p className="text-lg text-green-800 dark:text-green-400 mb-6">{message}</p>
      </CardContent>
    </Card>
  )
}
