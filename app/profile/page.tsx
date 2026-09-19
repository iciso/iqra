"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Gamepad2, Home, BarChart2, RefreshCw, Edit, Save, X } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

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

export default function ProfilePage() {
  const [playerName, setPlayerName] = useState(null)
  const [nameInput, setNameInput] = useState("")
  const [editingName, setEditingName] = useState(false)
  const [newName, setNewName] = useState("")
  const [stats, setStats] = useState(null)
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(NAME_KEY)
    setPlayerName(saved)
    setChecked(true)
    if (saved) loadProfile(saved)
  }, [])

  const loadProfile = async (name) => {
    setLoading(true)
    try {
      const [entriesRes, challengesRes] = await Promise.all([
        fetch(`/api/profile/entries?name=${encodeURIComponent(name)}`),
        fetch(`/api/profile/challenges?name=${encodeURIComponent(name)}`),
      ])
      const entriesData = await entriesRes.json()
      const challengesData = await challengesRes.json()
      const entries = entriesData.entries || []
      setChallenges(challengesData.challenges || [])

      if (entries.length === 0) { setStats(null); return }

      const totalScore = entries.reduce((s, e) => s + e.score, 0)
      const totalQuestions = entries.reduce((s, e) => s + e.total_questions, 0)
      const overallPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0
      const challengeEntries = entries.filter((e) => e.challenge)

      const catMap = new Map()
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
      setStats({
        totalScore, totalQuestions, overallPercentage,
        totalQuizzes: entries.length,
        challengesPlayed: challengeEntries.length,
        bestCategory: categoryLabels[best?.category] || best?.category || "—",
        bestPercentage: best?.percentage || 0,
        categoryBreakdown,
        recentQuizzes: entries.slice(0, 10),
      })
    } catch (err) {
      console.error("Profile load error:", err)
      toast({ title: "Error loading profile", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleSetName = () => {
    const t = nameInput.trim()
    if (!t || t.length < 2) { toast({ title: "Name must be at least 2 characters", variant: "destructive" }); return }
    localStorage.setItem(NAME_KEY, t); localStorage.setItem("tempChallengerId", t)
    setPlayerName(t); loadProfile(t)
  }

  const handleSaveName = () => {
    const t = newName.trim()
    if (!t || t.length < 2) { toast({ title: "Name must be at least 2 characters", variant: "destructive" }); return }
    localStorage.setItem(NAME_KEY, t); localStorage.setItem("tempChallengerId", t)
    setPlayerName(t); setEditingName(false); loadProfile(t)
    toast({ title: "Name updated" })
  }

  const initials = (name) => name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
  const fmtDate = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  const pctColor = (p) => p >= 90 ? "text-green-600" : p >= 70 ? "text-blue-600" : p >= 50 ? "text-yellow-600" : "text-red-600"

  if (!checked) return null

  if (!playerName) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Trophy className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <CardTitle>View Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 text-center">Enter the name you use when playing quizzes to see your stats.</p>
            <div className="flex gap-2">
              <Input placeholder="Your name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSetName()} />
              <Button onClick={handleSetName} className="bg-green-600 hover:bg-green-700">View</Button>
            </div>
            <div className="text-center"><Link href="/"><Button variant="outline" size="sm"><Home className="h-4 w-4 mr-1" />Home</Button></Link></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="max-w-4xl mx-auto pt-4">
        <div className="flex items-center justify-between mb-6">
          <Link href="/"><Button variant="outline" size="sm"><Home className="h-4 w-4 mr-1" />Home</Button></Link>
          <Button variant="outline" size="sm" onClick={() => loadProfile(playerName)} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />Refresh
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-green-100 text-green-700 text-2xl font-bold">{initials(playerName)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                {editingName ? (
                  <div className="flex gap-2 items-center">
                    <Input value={newName} onChange={(e) => setNewName(e.target.value)} className="max-w-xs" autoFocus />
                    <Button size="sm" onClick={handleSaveName} className="bg-green-600 hover:bg-green-700"><Save className="h-4 w-4" /></Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingName(false)}><X className="h-4 w-4" /></Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-green-800 dark:text-green-200">{playerName}</h1>
                    <Button size="sm" variant="ghost" onClick={() => { setNewName(playerName); setEditingName(true) }}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <p className="text-gray-500 text-sm mt-1">IQRA Quiz Player</p>
                {stats && (
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-gray-600">{stats.totalQuizzes} quizzes</span>
                    <span className="text-gray-600">{stats.challengesPlayed} challenges</span>
                    <span className={`font-medium ${pctColor(stats.overallPercentage)}`}>{stats.overallPercentage}% overall</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />
          </div>
        ) : !stats ? (
          <Card>
            <CardContent className="text-center py-12">
              <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No quiz history found for <strong>{playerName}</strong></p>
              <p className="text-sm text-gray-400">Play a quiz to start building your profile!</p>
              <Link href="/categories"><Button className="bg-green-600 hover:bg-green-700 mt-4">Start a Quiz</Button></Link>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="stats">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="stats" className="flex-1"><BarChart2 className="h-4 w-4 mr-1" />Stats</TabsTrigger>
              <TabsTrigger value="history" className="flex-1"><Trophy className="h-4 w-4 mr-1" />History</TabsTrigger>
              <TabsTrigger value="challenges" className="flex-1"><Gamepad2 className="h-4 w-4 mr-1" />Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Score", value: `${stats.totalScore}/${stats.totalQuestions}` },
                  { label: "Overall %", value: `${stats.overallPercentage}%`, color: pctColor(stats.overallPercentage) },
                  { label: "Quizzes Played", value: stats.totalQuizzes },
                  { label: "Best Category", value: stats.bestCategory, small: true },
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
                <CardHeader className="pb-2"><CardTitle className="text-base">Performance by Category</CardTitle></CardHeader>
                <CardContent className="p-4 space-y-3">
                  {stats.categoryBreakdown.map(({ category, score, total, percentage, count }) => (
                    <div key={category}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium truncate max-w-[55%]">{categoryLabels[category] || category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{score}/{total}</span>
                          <span className={`text-sm font-bold ${pctColor(percentage)}`}>{percentage}%</span>
                          <Badge variant="outline" className="text-xs">{count}×</Badge>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
                <CardHeader className="pb-2"><CardTitle className="text-base">Recent Quizzes (last 10)</CardTitle></CardHeader>
                <CardContent className="p-4 space-y-2">
                  {stats.recentQuizzes.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">
                          {categoryLabels[entry.category] || entry.category}
                          {entry.challenge && <Badge variant="outline" className="ml-2 text-xs">Challenge</Badge>}
                        </p>
                        <p className="text-xs text-gray-500">{entry.difficulty} · {fmtDate(entry.date)}</p>
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
                <CardHeader className="pb-2"><CardTitle className="text-base">Challenge History</CardTitle></CardHeader>
                <CardContent className="p-4">
                  {challenges.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Gamepad2 className="h-12 w-12 mx-auto mb-2 opacity-30" />
                      <p className="text-sm">No challenges yet</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {challenges.map((c) => {
                        const isChallenger = c.challenger_name.toLowerCase() === playerName.toLowerCase()
                        const opponent = isChallenger ? c.challenged_name : c.challenger_name
                        return (
                          <div key={c.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="text-sm font-medium">
                                {isChallenger ? "You challenged " : "Challenge from "}
                                <span className="text-green-700 dark:text-green-400">{opponent}</span>
                              </p>
                              <p className="text-xs text-gray-500">{categoryLabels[c.category] || c.category} · {c.difficulty} · {fmtDate(c.created_at)}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge variant={c.status === "accepted" ? "default" : c.status === "pending" ? "secondary" : "outline"} className="text-xs">
                                {c.status}
                              </Badge>
                              <Link href={`/challenge-results/${c.id}`}>
                                <Button variant="ghost" size="sm" className="h-6 text-xs px-2">View →</Button>
                              </Link>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
