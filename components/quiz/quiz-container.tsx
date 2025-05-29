"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface Opponent {
  id: string
  name: string
  type: "user" | "bot"
  level: string
}

interface QuizContainerProps {
  challengeMode?: boolean
}

const QuizContainer: React.FC<QuizContainerProps> = ({ challengeMode }) => {
  const [opponent, setOpponent] = useState<Opponent | null>(null)

  const getRandomOpponent = (): Opponent => {
    const opponents: Opponent[] = [
      { id: "bot1", name: "QuizBot", type: "bot", level: "Beginner" },
      { id: "bot2", name: "TriviaMaster", type: "bot", level: "Intermediate" },
      { id: "bot3", name: "KnowledgeKing", type: "bot", level: "Advanced" },
    ]
    return opponents[Math.floor(Math.random() * opponents.length)]
  }

  useEffect(() => {
    // Set opponent based on challenge mode
    if (challengeMode) {
      // For challenges, we need to determine who the opponent is
      // The opponent should be the other person in the challenge (not the current user)

      // For now, we'll use a placeholder until we can get the actual challenger info
      // This should be passed from the challenge acceptance or fetched from the database
      const challengeOpponent = {
        id: "challenger",
        name: "Challenger", // This should be the actual challenger's name
        type: "user" as const,
        level: "Intermediate",
      }
      setOpponent(challengeOpponent)
    } else {
      // For non-challenge mode, use random opponent as before
      setOpponent(getRandomOpponent())
    }
  }, [challengeMode])

  return (
    <div>
      {opponent && (
        <p>
          Opponent: {opponent.name} ({opponent.type}, Level: {opponent.level})
        </p>
      )}
      {/* Quiz questions and logic will go here */}
    </div>
  )
}

export default QuizContainer
