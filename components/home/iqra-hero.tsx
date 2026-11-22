import Link from "next/link"
import { Reem_Kufi } from "next/font/google"

import { BookOpen, Footprints, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const reemKufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

// Counted from app/subjects/page.tsx (2026-11-22): 38 Islamic Studies + 5 Surah Studies
// + 5 Tamil + 2 Arabic Vocabulary = 50 subjects; Easy / Intermediate / Advanced = 3 levels;
// 5 Surah quizzes inside IQRA (the ~40 Surah quizzes live in the separate KALAM app).
const facts = [
  { value: "50", label: "subjects" },
  { value: "3", label: "levels" },
  { value: "5", label: "surah quizzes" },
]

const learnTags = ["Easy", "Intermediate", "Advanced"]
const challengeTags = ["Friend Challenge", "Daily Challenge", "Player Rivalry"]

const round = (n: number) => Math.round(n * 100) / 100

// A still orbit around the word only, so no label can drift off the screen edge or
// under the headline and track cards. Phone shows 6 labels; 640px+ adds the two side labels.
// (The wide turning astrolabe was removed when the two track cards arrived: they cannot fit inside its ring.)
const COMPACT_CENTER = 200
const COMPACT_RADIUS = 150
const compactLabels = [
  { label: "SALAH", angle: -90, tabletOnly: false },
  { label: "QURAN", angle: -45, tabletOnly: false },
  { label: "HAJJ", angle: 0, tabletOnly: true },
  { label: "TAFSIR", angle: 45, tabletOnly: false },
  { label: "FIQH", angle: 90, tabletOnly: false },
  { label: "SEERAH", angle: 135, tabletOnly: false },
  { label: "RIBA", angle: 180, tabletOnly: true },
  { label: "DAWAH", angle: -135, tabletOnly: false },
].map((item) => {
  const rad = (item.angle * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  const x = round(COMPACT_CENTER + COMPACT_RADIUS * cos)
  const y = round(COMPACT_CENTER + COMPACT_RADIUS * sin)
  const anchor: "start" | "middle" | "end" = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle"
  return {
    ...item,
    x,
    y,
    anchor,
    textX: anchor === "start" ? x + 10 : anchor === "end" ? x - 10 : x,
    textY: anchor === "middle" ? (sin < 0 ? y - 12 : y + 22) : y + 4,
  }
})

const compactDots = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2
  return {
    x: round(COMPACT_CENTER + 118 * Math.cos(angle)),
    y: round(COMPACT_CENTER + 118 * Math.sin(angle)),
  }
})

const ringStroke = "stroke-green-700/20 dark:stroke-green-300/20"
const labelText = "fill-green-900/60 tracking-[0.12em] dark:fill-green-100/70"
const keyDot = "fill-green-600 dark:fill-green-400"
const minorDot = "fill-green-700/35 dark:fill-green-200/45"
const chipClass =
  "rounded-full border border-green-200 px-3.5 py-1.5 text-[13px] text-green-950/70 dark:border-green-800 dark:text-green-100/75"

function CompactOrbit({ tablet }: { tablet: boolean }) {
  return (
    <svg
      viewBox={tablet ? "-60 0 520 400" : "0 0 400 400"}
      aria-hidden="true"
      data-orbit={tablet ? "tablet" : "phone"}
      className={`absolute inset-0 h-full w-full ${tablet ? "hidden sm:block" : "sm:hidden"}`}
    >
      <g fill="none" className={ringStroke}>
        <circle cx={COMPACT_CENTER} cy={COMPACT_CENTER} r={COMPACT_RADIUS} />
        <circle cx={COMPACT_CENTER} cy={COMPACT_CENTER} r={118} strokeDasharray="2 6" />
      </g>
      <g
        className="motion-safe:animate-[spin_240s_linear_infinite]"
        style={{ transformOrigin: `${COMPACT_CENTER}px ${COMPACT_CENTER}px` }}
      >
        {compactDots.map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r={1.6} className={minorDot} />
        ))}
      </g>
      {compactLabels
        .filter((item) => tablet || !item.tabletOnly)
        .map((item) => (
          <g key={item.label}>
            <circle cx={item.x} cy={item.y} r={3.2} className={keyDot} />
            <text x={item.textX} y={item.textY} textAnchor={item.anchor} fontSize={13} className={labelText}>
              {item.label}
            </text>
          </g>
        ))}
    </svg>
  )
}

export default function IqraHero() {
  return (
    <section
      aria-labelledby="iqra-hero-heading"
      className="relative w-full overflow-hidden bg-white dark:bg-green-950"
    >
      {/* Soft green halo behind the word; it breathes only when motion is allowed. The Arabic text never moves. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(21,128,61,0.14),transparent_70%)] motion-safe:animate-[iqra-halo_6s_ease-in-out_infinite_alternate] dark:bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(34,197,94,0.24),transparent_70%)] xl:bg-[radial-gradient(ellipse_30%_40%_at_28%_50%,rgba(21,128,61,0.14),transparent_70%)] dark:xl:bg-[radial-gradient(ellipse_30%_40%_at_28%_50%,rgba(34,197,94,0.24),transparent_70%)]"
      />
      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[640px] flex-col items-center px-4 pb-12 pt-6 text-center sm:pt-8 xl:grid xl:max-w-[1240px] xl:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] xl:gap-10 xl:px-8 xl:py-14 xl:text-left"
      >
        <div className="relative aspect-square w-full max-w-[400px] sm:aspect-[13/10] sm:max-w-[520px] xl:mx-auto">
          <CompactOrbit tablet={false} />
          <CompactOrbit tablet />
          <div data-hero-mark className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              lang="ar"
              dir="rtl"
              className={`${reemKufi.className} text-[100px] font-bold leading-none text-green-800 [text-shadow:0_0_36px_rgba(21,128,61,0.35),0_0_100px_rgba(21,128,61,0.18)] dark:text-green-50 dark:[text-shadow:0_0_40px_rgba(74,222,128,0.5),0_0_120px_rgba(74,222,128,0.22)] sm:text-[116px]`}
            >
              اقرأ
            </p>
            <p
              className={`${reemKufi.className} mt-2 pl-[0.5em] text-xs uppercase tracking-[0.5em] text-green-700 dark:text-green-300 sm:text-sm`}
            >
              Iqra &middot; Read
            </p>
          </div>
        </div>

        {/* Phones and tablets: these children join the column above. 1280px+: the right-hand column. */}
        <div data-hero-copy className="contents xl:block">
          <h1
            id="iqra-hero-heading"
            className={`${reemKufi.className} mt-2 text-balance text-[34px] font-semibold leading-[1.08] text-green-900 dark:text-white sm:text-[44px] xl:mt-0 xl:text-[48px]`}
          >
            Fifty subjects around one first word.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-base xl:mx-0 leading-relaxed text-green-950/70 dark:text-green-100/75 sm:text-lg">
            The first word revealed was <em>Read</em>. Start with a subject that calls you, then test what you
            learned against a friend.
          </p>

          {/* Two tracks, side by side from md up: a calm one for learning, an energetic one for racing a friend. */}
          <div data-hero-actions className="mt-7 grid w-full grid-cols-1 gap-4 text-left md:grid-cols-2">
            <Card
              data-hero-track="learn"
              className="flex flex-col rounded-2xl border border-green-200 bg-green-50/80 p-5 shadow-none dark:border-green-800 dark:bg-green-900/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-white text-green-700 dark:border-green-700 dark:bg-green-950 dark:text-green-300">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
                  Track 1 &middot; Learn
                </p>
              </div>
              <h2 className={`${reemKufi.className} mt-3 text-2xl font-semibold text-green-900 dark:text-white`}>
                Learn at leisure
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-green-950/75 dark:text-green-100/80">
                Pick any of 50 subjects at your own level. No clock, no rival &ndash; just you and the subject.
              </p>
              <ul aria-label="Levels" className="mt-3 flex flex-1 flex-wrap content-start items-start gap-1.5">
                {learnTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-green-200 bg-white px-2.5 py-1 text-xs text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="mt-5 h-11 w-full rounded-full border-green-700 bg-white text-base font-semibold text-green-800 hover:bg-green-100 hover:text-green-900 dark:border-green-400 dark:bg-transparent dark:text-green-50 dark:hover:bg-green-900 dark:hover:text-white"
              >
                <Link href="/subjects">Choose a subject</Link>
              </Button>
            </Card>

            <Card
              data-hero-track="challenge"
              className="flex flex-col rounded-2xl border border-green-800 bg-green-700 p-5 text-white shadow-lg shadow-green-900/20 dark:border-green-400/60 dark:bg-green-700 dark:shadow-green-400/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-green-700">
                  <Footprints aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-50">
                  Track 2 &middot; Challenge
                </p>
              </div>
              <h2 className={`${reemKufi.className} mt-3 text-2xl font-semibold text-white`}>Race to excel</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-green-50">
                Send the same quiz to a friend &ndash; the higher score wins. The Prophet (peace be upon him) raced Aisha (RA) and
                said &ldquo;This is for that&rdquo;: friendly competition is Sunnah.
              </p>
              <p className="mt-1.5 text-xs text-green-100">Sunan Abi Dawud 2578</p>
              <ul aria-label="Ways to compete" className="mt-3 flex flex-wrap gap-1.5">
                {challengeTags.map((tag) => (
                  <li key={tag} className="rounded-full bg-green-900/50 px-2.5 py-1 text-xs text-white">
                    {tag}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-5 h-11 w-full rounded-full bg-white text-base font-semibold text-green-800 hover:bg-green-50 hover:text-green-900 dark:bg-white dark:text-green-800 dark:hover:bg-green-50"
              >
                <Link href="/challenges">
                  <Trophy aria-hidden="true" className="h-4 w-4" />
                  Challenge a friend
                </Link>
              </Button>
            </Card>
          </div>

          <ul data-hero-chips className="mt-7 flex flex-wrap justify-center gap-2.5 xl:justify-start">
            {facts.map((fact) => (
              <li key={fact.label} className={chipClass}>
                <b className="font-semibold text-green-700 dark:text-green-300">{fact.value}</b> {fact.label}
              </li>
            ))}
            <li className={chipClass}>No ads &middot; no donations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
