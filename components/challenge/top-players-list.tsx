"use client"

import { Users } from "lucide-react"
import { Trans, useTranslation } from "react-i18next"
import Link from "next/link"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import EmptyState from "@/components/shared/empty-state"

export interface TopPlayer {
  id: string
  username: string
  full_name?: string
  total_score: number
  best_percentage: number
}

interface TopPlayersListProps {
  players: TopPlayer[]
  loading: boolean
  onChallenge: (player: TopPlayer) => void
  // Rank, pts and % only make sense for real leaderboard data, not the registered-users fallback.
  showScores?: boolean
}

const SKELETON_ROWS = [0, 1, 2, 3, 4]

/** Home-page players list: one plain divided list, no inner scroll. The full list lives on /challenges. */
const TopPlayersList = ({ players, loading, onChallenge, showScores = true }: TopPlayersListProps) => {
  const { t } = useTranslation("challenges")
  if (loading) {
    return (
      <ul aria-busy="true" aria-label={t("players.loadingAria")} className="divide-y">
        {SKELETON_ROWS.map((row) => (
          <li key={row} className="flex items-center gap-3 py-3">
            <span className="h-4 w-5 animate-pulse rounded bg-muted" />
            <span className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-muted" />
            <span className="h-4 flex-1 animate-pulse rounded bg-muted" />
            <span className="h-8 w-20 animate-pulse rounded-md bg-muted" />
          </li>
        ))}
      </ul>
    )
  }

  if (players.length === 0) {
    return (
      <EmptyState
        icon={<Users />}
        title={t("players.emptyTitle")}
        text={
          <Trans
            t={t}
            i18nKey="players.emptyText"
            components={{
              l: <Link href="/subjects" className="font-medium text-green-700 underline-offset-4 dark:text-green-400 hover:underline" />,
            }}
          />
        }
      />
    )
  }

  return (
    <ul data-top-players-list="" className="divide-y">
      {players.map((player, index) => {
        const name = player.full_name || player.username
        return (
          <li key={player.id} className="flex items-center gap-3 py-3">
            {showScores && (
              <span className="w-5 shrink-0 text-right text-sm font-medium tabular-nums text-muted-foreground">
                {index + 1}
              </span>
            )}
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback className="bg-green-100 text-sm font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="min-w-0 flex-1 truncate text-sm font-medium">{name}</p>
            {showScores && (
              <p className="shrink-0 text-right text-xs leading-tight tabular-nums text-muted-foreground">
                <span className="block font-medium text-foreground">{t("pts", { value: player.total_score })}</span>
                {player.best_percentage}%
              </p>
            )}
            <Button size="sm" variant="outline" className="h-8 shrink-0 px-3 text-xs" onClick={() => onChallenge(player)}>
              {t("players.challenge")}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export default TopPlayersList
