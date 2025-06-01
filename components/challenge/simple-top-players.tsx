import type React from "react"

interface Player {
  id: string
  name: string
  total_score: number
  best_percentage: number
  total_questions: number
}

interface SimpleTopPlayersProps {
  players: Player[]
  maxPlayers?: number
}

const SimpleTopPlayers: React.FC<SimpleTopPlayersProps> = ({ players, maxPlayers }) => {
  if (!players || players.length === 0) {
    return <div>No players available.</div>
  }

  // Sort by total score first, then by percentage if scores are tied
  const topPlayers = [...players]
    .sort((a, b) => {
      // First sort by total score (descending)
      if (b.total_score !== a.total_score) {
        return b.total_score - a.total_score
      }

      // If scores are tied, sort by best percentage (descending)
      const aPercentage = a.best_percentage || 0
      const bPercentage = b.best_percentage || 0
      if (bPercentage !== aPercentage) {
        return bPercentage - aPercentage
      }

      // If both score and percentage are tied, sort by total questions (more questions = higher rank)
      const aTotalQuestions = a.total_questions || 0
      const bTotalQuestions = b.total_questions || 0
      return bTotalQuestions - aTotalQuestions
    })
    .slice(0, maxPlayers || 5)

  return (
    <div>
      <h3>Top Players</h3>
      <ul>
        {topPlayers.map((player) => (
          <li key={player.id}>
            {player.name} - Score: {player.total_score}, Best %: {player.best_percentage || 0}, Questions:{" "}
            {player.total_questions || 0}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleTopPlayers
