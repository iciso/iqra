"use client"
import { getCategory } from "@/data/quiz-data-manager"
import { getProfileDataAction } from "@/app/actions/profile"
import type { ProfileChallengeRow, ProfileEntryRow } from "@/lib/server/types"

import { useEffect, useEffectEvent, useState, useSyncExternalStore } from "react"
import { Trans, useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/shared/page-header"
import EmptyState from "@/components/shared/empty-state"
import { pageContainerClass } from "@/lib/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Gamepad2, Home, BarChart2, RefreshCw, Edit, Save, X, Shield } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { savePlayerName } from "@/lib/player-name"

const NAME_KEY = "userNameForLeaderboard"

const categoryLabels: Record<string, string> = {
  quran: "Quran", seerah: "Seerah", fiqh: "Fiqh", hadeeth: "Hadeeth",
  aqeedah: "Aqeedah", tafsir: "Tafsir", comparative: "Comparative Religion",
  "islamic-finance": "Islamic Finance", tazkiyah: "Tazkiyah",
  history: "Islamic History", dawah: "Dawah", salah: "Salah", sawm: "Sawm",
  "new-muslims": "New Muslims", "islamic-medical-ethics": "Islamic Medical Ethics",
  crypto: "Crypto & Islam", gender: "Gender in Islam", lgbtq: "LGBTQ & Islam",
  psych: "Islamic Psychology", parenting: "Islamic Parenting",
  peace: "Peace & Islam", christ: "Christianity & Islam", hindu: "Hinduism & Islam",
}

const prettify = (id: string) =>
  id.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

// Legacy label map first, then the category's real title, then a prettified id.
const baseLabelFor = (id?: string | null): string => {
  if (!id) return "Other"
  if (categoryLabels[id]) return categoryLabels[id]
  try {
    const cat = getCategory(id)
    if (cat?.title) return cat.title
  } catch {
    /* fall through */
  }
  return prettify(id)
}

interface CategoryStat {
  category: string
  score: number
  total: number
  count: number
  percentage: number
}

interface ProfileStats {
  totalScore: number
  totalQuestions: number
  overallPercentage: number
  totalQuizzes: number
  challengesPlayed: number
  bestCategory: string
  bestPercentage: number
  categoryBreakdown: CategoryStat[]
  recentQuizzes: ProfileEntryRow[]
}

const buildStats = (entries: ProfileEntryRow[]): ProfileStats | null => {
  if (entries.length === 0) return null

  const totalScore = entries.reduce((s, e) => s + e.score, 0)
  const totalQuestions = entries.reduce((s, e) => s + e.total_questions, 0)
  const overallPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0
  const challengeEntries = entries.filter((e) => e.challenge)

  const catMap = new Map<string, { score: number; total: number; count: number }>()
  entries.forEach((e) => {
    const key = e.category || "other"
    const ex = catMap.get(key) || { score: 0, total: 0, count: 0 }
    catMap.set(key, { score: ex.score + e.score, total: ex.total + e.total_questions, count: ex.count + 1 })
  })
  const categoryBreakdown = Array.from(catMap.entries())
    .map(([category, data]) => ({
      category, score: data.score, total: data.total, count: data.count,
      percentage: data.total > 0 ? Math.round((data.score / data.total) * 100) : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage)

  const best = categoryBreakdown[0]
  return {
    totalScore, totalQuestions, overallPercentage,
    totalQuizzes: entries.length,
    challengesPlayed: challengeEntries.length,
    bestCategory: best ? best.category : "",
    bestPercentage: best?.percentage || 0,
    categoryBreakdown,
    recentQuizzes: entries.slice(0, 10),
  }
}

// The saved name lives in localStorage, which the server cannot see. The server
// snapshot is `undefined` ("not checked yet"), so the page renders nothing until
// the browser has read it - the same first paint the old mount effect gave.
const noSubscribe = () => () => {}
const readSavedName = () => localStorage.getItem(NAME_KEY)
const serverSavedName = () => undefined

export default function ProfilePage() {
  const { t, i18n } = useTranslation("profile")
  const savedName = useSyncExternalStore(noSubscribe, readSavedName, serverSavedName)
  const [chosenName, setChosenName] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState("")
  const [editingName, setEditingName] = useState(false)
  const [newName, setNewName] = useState("")
  const [stats, setStats] = useState<ProfileStats | null>(null)
  const [challenges, setChallenges] = useState<ProfileChallengeRow[]>([])
  // Starts true: a saved name is fetched straight away. The spinner only shows
  // once a name is known; without one the name form renders instead.
  const [loading, setLoading] = useState(true)

  const checked = savedName !== undefined
  const playerName = chosenName ?? savedName ?? null

  // State is set only in the promise callbacks, after the server answers, so
  // this is safe to start from an effect. Callers that re-load set `loading` first.
  // The name lives only in this browser, so the server reads it through a Server Action.
  const fetchProfile = (name: string) =>
    getProfileDataAction(name)
      .then((data) => {
        setChallenges(data.challenges || [])
        setStats(buildStats(data.entries || []))
      })
      .catch((err: unknown) => {
        console.error("Profile load error:", err)
        toast({ title: t("profile.loadError"), variant: "destructive" })
      })
      .finally(() => setLoading(false))

  const loadProfile = (name: string) => {
    setLoading(true)
    fetchProfile(name)
  }

  // Load the saved player's profile once the browser has read the name.
  const fetchSavedProfile = useEffectEvent((name: string) => {
    fetchProfile(name)
  })
  useEffect(() => {
    if (savedName) fetchSavedProfile(savedName)
  }, [savedName])

  const handleSetName = () => {
    const trimmed = nameInput.trim()
    if (!trimmed || trimmed.length < 2) { toast({ title: t("profile.nameTooShort"), variant: "destructive" }); return }
    savePlayerName(trimmed)
    setChosenName(trimmed); loadProfile(trimmed)
  }

  const handleSaveName = () => {
    const trimmed = newName.trim()
    if (!trimmed || trimmed.length < 2) { toast({ title: t("profile.nameTooShort"), variant: "destructive" }); return }
    savePlayerName(trimmed)
    setChosenName(trimmed); setEditingName(false); loadProfile(trimmed)
    toast({ title: t("profile.nameUpdated") })
  }

  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
  // Latin digits in every language, as the rest of the app shows numbers.
  const dateLocale = ({ bn: "bn-BD", ta: "ta-IN" } as Record<string, string>)[i18n.language] ?? "en-US"
  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString(`${dateLocale}-u-nu-latn`, { year: "numeric", month: "short", day: "numeric" })
  const labelFor = (id?: string | null): string => {
    if (!id) return t("profile.other")
    return t(`categories.${id}`, { defaultValue: baseLabelFor(id) })
  }
  const diffLabel = (d: string | null) => !d ? "" : t(`difficulty.${d}`, { ns: "common", defaultValue: d })
  const statusLabel = (s: string) => t(`status.${s}`, { defaultValue: s })
  const pctColor = (p: number) => p >= 90 ? "text-green-600" : p >= 70 ? "text-blue-600" : p >= 50 ? "text-yellow-600" : "text-red-600"

  if (!checked) return null

  if (!playerName) {
    return (
      <div className={pageContainerClass}>
        <PageHeader
          title={t("profile.viewTitle")}
          subtitle={t("profile.viewSubtitle")}
          icon={
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/40">
              <Trophy className="h-6 w-6 text-green-600 dark:text-green-400" />
            </span>
          }
        />
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4 pt-6">
            <div className="flex gap-2">
              <Input placeholder={t("profile.namePlaceholder")} value={nameInput} onChange={(e) => setNameInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSetName()} />
              <Button onClick={handleSetName} className="bg-green-600 hover:bg-green-700">{t("profile.view")}</Button>
            </div>
            <div className="text-center"><Link href="/"><Button variant="outline" size="sm"><Home className="h-4 w-4 mr-1" />{t("profile.home")}</Button></Link></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={pageContainerClass}>
      <div>
        <PageHeader
          icon={
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
              <AvatarFallback className="bg-green-100 text-green-700 text-2xl font-bold">{initials(playerName)}</AvatarFallback>
            </Avatar>
          }
          title={
            editingName ? (
              <span className="flex items-center gap-2">
                <Input value={newName} onChange={(e) => setNewName(e.target.value)} className="max-w-xs text-base font-normal" autoFocus />
                <Button size="sm" onClick={handleSaveName} className="bg-green-600 hover:bg-green-700"><Save className="h-4 w-4" /></Button>
                <Button size="sm" variant="outline" onClick={() => setEditingName(false)}><X className="h-4 w-4" /></Button>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {playerName}
                <Button size="sm" variant="ghost" onClick={() => { setNewName(playerName); setEditingName(true) }}>
                  <Edit className="h-4 w-4" />
                </Button>
              </span>
            )
          }
          subtitle={
            <>
              <p>{t("profile.player")}</p>
              {stats && (
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <span>{t("profile.quizzesCount", { n: stats.totalQuizzes })}</span>
                  <span>{t("profile.challengesCount", { n: stats.challengesPlayed })}</span>
                  <span className={`font-medium ${pctColor(stats.overallPercentage)}`}>{t("profile.overallPct", { n: stats.overallPercentage })}</span>
                </div>
              )}
            </>
          }
          actions={
            <>
              <Button asChild variant="outline" size="sm"><Link href="/"><Home className="h-4 w-4 mr-1" />{t("profile.home")}</Link></Button>
              <Button variant="outline" size="sm" onClick={() => loadProfile(playerName)} disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />{t("profile.refresh")}
              </Button>
            </>
          }
        />

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />
          </div>
        ) : !stats ? (
          <Card>
            <CardContent className="py-6">
              <EmptyState
                icon={<Trophy />}
                title={<Trans i18nKey="profile.noHistory" ns="profile" values={{ name: playerName }} components={{ b: <strong /> }} />}
                text={t("profile.noHistoryText")}
                action={<Link href="/subjects"><Button className="bg-green-600 hover:bg-green-700">{t("profile.startQuiz")}</Button></Link>}
              />
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="stats">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="stats" className="flex-1"><BarChart2 className="h-4 w-4 mr-1" />{t("profile.tabStats")}</TabsTrigger>
              <TabsTrigger value="history" className="flex-1"><Trophy className="h-4 w-4 mr-1" />{t("profile.tabHistory")}</TabsTrigger>
              <TabsTrigger value="challenges" className="flex-1"><Gamepad2 className="h-4 w-4 mr-1" />{t("profile.tabChallenges")}</TabsTrigger>
              <Link 
                    href="/badges" 
                    className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:bg-white/50"
                  >
                    <Shield className="h-4 w-4 mr-1" />{t("profile.tabBadges")}
                  </Link>           
            </TabsList>

            <TabsContent value="stats" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: t("profile.totalScore"), value: `${stats.totalScore}/${stats.totalQuestions}` },
                  { label: t("profile.overallLabel"), value: `${stats.overallPercentage}%`, color: pctColor(stats.overallPercentage) },
                  { label: t("profile.quizzesPlayed"), value: stats.totalQuizzes },
                  { label: t("profile.bestCategory"), value: stats.bestCategory ? labelFor(stats.bestCategory) : "—", small: true },
                ].map(({ label, value, color, small }) => (
                  <Card key={label}>
                    <CardContent className="p-4 text-center">
                      <p className={`font-bold ${small ? "text-base" : "text-2xl"} ${color || "text-green-700"}`}>{value}</p>
                      <p className="text-xs text-gray-500 mt-1">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">{t("profile.byCategory")}</CardTitle></CardHeader>
                <CardContent className="p-4 space-y-3">
                  {stats.categoryBreakdown.map(({ category, score, total, percentage, count }) => (
                    <div key={category}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium truncate max-w-[55%]">{labelFor(category)}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{score}/{total}</span>
                          <span className={`text-sm font-bold ${pctColor(percentage)}`}>{percentage}%</span>
                          <Badge variant="outline" className="text-xs">{t("profile.timesPlayed", { n: count })}</Badge>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-blue-500" : "bg-orange-400"}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">{t("profile.recent")}</CardTitle></CardHeader>
                <CardContent className="p-4 space-y-2">
                  {stats.recentQuizzes.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">
                          {labelFor(entry.category)}
                          {entry.challenge && <Badge variant="outline" className="ml-2 text-xs">{t("profile.challengeTag")}</Badge>}
                        </p>
                        <p className="text-xs text-gray-500">{diffLabel(entry.difficulty)} · {fmtDate(entry.date)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{entry.score}/{entry.total_questions}</p>
                        <p className={`text-sm font-bold ${pctColor(entry.percentage)}`}>{entry.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">{t("profile.challengeHistory")}</CardTitle></CardHeader>
                <CardContent className="p-4">
                  {challenges.length === 0 ? (
                    <EmptyState icon={<Gamepad2 />} title={t("profile.noChallenges")} />
                  ) : (
                    <div className="space-y-2">
                      {challenges.map((c) => {
                        const isChallenger = c.challenger_name.toLowerCase() === playerName.toLowerCase()
                        const opponent = isChallenger ? c.challenged_name : c.challenger_name
                        const myScore = isChallenger ? c.challenger_score : c.challenged_score
                        const myTotal = isChallenger ? c.challenger_total : c.challenged_total
                        const oppScore = isChallenger ? c.challenged_score : c.challenger_score
                        const oppTotal = isChallenger ? c.challenged_total : c.challenger_total
                        const myPct = myTotal != null && myTotal > 0 ? Math.round(((myScore ?? 0) / myTotal) * 100) : null
                        const oppPct = oppTotal != null && oppTotal > 0 ? Math.round(((oppScore ?? 0) / oppTotal) * 100) : null
                        const bothPlayed = myScore !== null && oppScore !== null
                        const iWon = bothPlayed && myScore > oppScore
                        const iLost = bothPlayed && myScore < oppScore

                        return (
                          <div key={c.id} className="p-3 border rounded-lg space-y-2">
                            {/* Row 1: who challenged whom + category */}
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-sm font-medium">
                                  {isChallenger ? t("profile.youChallenged") : t("profile.challengeFrom")}
                                  <span className="text-green-700 dark:text-green-400">{opponent}</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {labelFor(c.category)} · {diffLabel(c.difficulty)} · {fmtDate(c.created_at)}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <Badge
                                  variant={c.status === "accepted" ? "default" : c.status === "pending" ? "secondary" : "outline"}
                                  className="text-xs"
                                >
                                  {statusLabel(c.status)}
                                </Badge>
                                {bothPlayed && (
                                  <Badge
                                    className={`text-xs ${iWon ? "bg-green-100 text-green-800" : iLost ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                                  >
                                    {iWon ? t("profile.won") : iLost ? t("profile.lost") : t("profile.tie")}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Row 2: scores */}
                            <div className="flex gap-3 text-xs">
                              {/* My score */}
                              <div className="flex-1 bg-green-50 dark:bg-green-900/30 rounded p-2 text-center">
                                <p className="text-gray-500 mb-1">{t("profile.you")}</p>
                                {myScore !== null ? (
                                  <>
                                    <p className="font-bold text-base text-green-700">{myScore}/{myTotal}</p>
                                    <p className={`font-medium ${pctColor(myPct ?? 0)}`}>{myPct}%</p>
                                  </>
                                ) : (
                                  <p className="text-gray-400 italic">{t("profile.notPlayed")}</p>
                                )}
                              </div>
                              {/* Opponent score */}
                              <div className="flex-1 bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-center">
                                <p className="text-gray-500 mb-1">{opponent}</p>
                                {oppScore !== null ? (
                                  <>
                                    <p className="font-bold text-base text-blue-700">{oppScore}/{oppTotal}</p>
                                    <p className={`font-medium ${pctColor(oppPct ?? 0)}`}>{oppPct}%</p>
                                  </>
                                ) : (
                                  <p className="text-gray-400 italic">
                                    {c.status === "pending" ? t("profile.awaiting") : t("profile.notPlayed")}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="text-center py-8">
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-600 mb-4">{t("profile.redirecting")}</p>
                  <Link href="/badges">
                    <Button className="bg-green-600 hover:bg-green-700">{t("profile.goBadges")}</Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
