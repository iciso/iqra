"use client"

import Link from "next/link"
import { useState } from "react"
import { Bell, Check, Clock, X } from "lucide-react"
import EmptyState from "@/components/shared/empty-state"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { usePendingChallenges, useSavedPlayerName } from "@/hooks/use-pending-challenges"
import { Trans } from "react-i18next"
import { useChallengeLabels } from "@/components/challenge/use-challenge-labels"

/** Header bell: pending challenges for the saved name. Hidden until a name is saved. */
export default function ChallengeBell() {
  const name = useSavedPlayerName()
  const [open, setOpen] = useState(false)
  const { challenges, loading, failed, respond } = usePendingChallenges(name)
  const { t, categoryName, difficultyName, timeLeft } = useChallengeLabels()

  if (!name) return null

  const count = challenges.length
  const label = count === 0 ? t("bell.none") : t("bell.pending", { count })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={label} className="relative h-11 w-11 shrink-0">
          <Bell className="h-5 w-5" />
          {count > 0 && (
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-bold leading-none text-white"
            >
              {count > 9 ? "9+" : count}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" collisionPadding={16} className="w-[min(22rem,calc(100vw-2rem))] p-0">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <p className="min-w-0 truncate text-sm">
            <Trans t={t} i18nKey="bell.playingAs" values={{ name }} components={{ b: <strong /> }} />
          </p>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="shrink-0 text-xs font-medium text-green-700 underline underline-offset-2 dark:text-green-400"
          >
            {t("bell.changeName")}
          </Link>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {loading ? (
            <p className="px-2 py-4 text-center text-sm text-muted-foreground">{t("bell.checking")}</p>
          ) : count === 0 ? (
            <EmptyState
              compact
              title={failed ? t("bell.failed") : t("bell.empty")}
            />
          ) : (
            <ul className="space-y-2">
              {challenges.map((c) => (
                <li key={c.id} className="rounded-md border p-3">
                  <p className="truncate text-sm font-medium">
                    <Trans
                      t={t}
                      i18nKey="bell.challengedYou"
                      values={{ name: c.challenger_name }}
                      components={{ g: <span className="text-green-700 dark:text-green-400" /> }}
                    />
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1">
                    <Badge variant="secondary" className="text-xs">
                      {categoryName(c.category)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {difficultyName(c.difficulty)}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {timeLeft(c.expires_at)}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-end gap-2">
                    <Button size="sm" variant="outline" onClick={() => respond(c.id, "decline")} className="h-9">
                      <X className="mr-1 h-3 w-3" />
                      {t("bell.decline")}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => {
                        setOpen(false)
                        void respond(c.id, "accept")
                      }}
                      className="h-9 bg-green-600 hover:bg-green-700"
                    >
                      <Check className="mr-1 h-3 w-3" />
                      {t("bell.accept")}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
