import Link from "next/link"
import { Reem_Kufi } from "next/font/google"

import { Button } from "@/components/ui/button"

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

const round = (n: number) => Math.round(n * 100) / 100

// Wide screens (1024px+): the full astrolabe behind the text, turning slowly.
const WIDE_CENTER = 540
const wideLabels = [
  "QURAN", "SEERAH", "FIQH", "HADEETH", "AQEEDAH", "TAFSIR",
  "HISTORY", "RIBA", "DAWAH", "SALAH", "HAJJ", "SAWM",
]

function ringPoints(radius: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    return {
      x: round(WIDE_CENTER + radius * Math.cos(angle)),
      y: round(WIDE_CENTER + radius * Math.sin(angle)),
    }
  })
}

const outerRing = ringPoints(410, 36).map((point, i) => ({
  ...point,
  label: i % 3 === 0 ? wideLabels[i / 3] : null,
}))
const middleRing = ringPoints(330, 14)
// Labels sit centred just outside the outer ring and turn back against it, so they stay
// upright and never swing inside the ring where the headline and buttons are.
const wideLabelPoints = ringPoints(462, 12).map((point, i) => ({ ...point, label: wideLabels[i] }))

// Narrow screens: a still orbit around the word only, so no label can drift
// off the screen edge or under the headline and buttons.
// Phone shows 6 labels; tablet (640px+) adds the two side labels.
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
      className={`absolute inset-0 h-full w-full lg:hidden ${tablet ? "hidden sm:block" : "sm:hidden"}`}
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

function WideOrbit() {
  return (
    <svg
      viewBox="0 0 1080 1080"
      aria-hidden="true"
      data-orbit="wide"
      className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[min(1000px,100vw)] w-[min(1000px,100vw)] -translate-x-1/2 -translate-y-1/2 lg:block"
    >
      <g fill="none" className={ringStroke}>
        <circle cx={WIDE_CENTER} cy={WIDE_CENTER} r={410} />
        <circle cx={WIDE_CENTER} cy={WIDE_CENTER} r={330} strokeDasharray="2 6" />
        <circle cx={WIDE_CENTER} cy={WIDE_CENTER} r={250} />
      </g>
      <g
        data-ring="outer"
        className="motion-safe:animate-[spin_240s_linear_infinite]"
        style={{ transformOrigin: `${WIDE_CENTER}px ${WIDE_CENTER}px` }}
      >
        {outerRing.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={point.label ? 3.2 : 1.6}
            className={point.label ? keyDot : minorDot}
          />
        ))}
        {wideLabelPoints.map((point) => (
          <g
            key={point.label}
            data-label
            className="motion-safe:animate-[spin_240s_linear_infinite_reverse]"
            style={{ transformOrigin: `${point.x}px ${point.y}px` }}
          >
            <text x={point.x} y={point.y + 5} textAnchor="middle" fontSize={14} className={labelText}>
              {point.label}
            </text>
          </g>
        ))}
      </g>
      <g
        className="motion-safe:animate-[spin_360s_linear_infinite_reverse]"
        style={{ transformOrigin: `${WIDE_CENTER}px ${WIDE_CENTER}px` }}
      >
        {middleRing.map((point, i) => (
          <circle key={i} cx={point.x} cy={point.y} r={1.6} className={minorDot} />
        ))}
      </g>
    </svg>
  )
}

export default function IqraHero() {
  return (
    <section
      aria-labelledby="iqra-hero-heading"
      className="relative w-full overflow-hidden bg-white dark:bg-green-950 lg:flex lg:min-h-[min(1000px,100vw)] lg:items-center"
    >
      {/* Soft green halo behind the word; it breathes only when motion is allowed. The Arabic text never moves. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(21,128,61,0.14),transparent_70%)] motion-safe:animate-[iqra-halo_6s_ease-in-out_infinite_alternate] dark:bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(34,197,94,0.24),transparent_70%)] lg:bg-[radial-gradient(ellipse_40%_36%_at_50%_34%,rgba(21,128,61,0.14),transparent_70%)] dark:lg:bg-[radial-gradient(ellipse_40%_36%_at_50%_34%,rgba(34,197,94,0.24),transparent_70%)]"
      />
      <WideOrbit />

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[640px] flex-col items-center px-4 pb-12 pt-6 text-center sm:pt-8 lg:py-0"
      >
        <div className="relative aspect-square w-full max-w-[400px] sm:aspect-[13/10] sm:max-w-[520px] lg:aspect-auto lg:max-w-none">
          <CompactOrbit tablet={false} />
          <CompactOrbit tablet />
          <div data-hero-mark className="absolute inset-0 flex flex-col items-center justify-center lg:static">
            <p
              lang="ar"
              dir="rtl"
              className={`${reemKufi.className} text-[100px] font-bold leading-none text-green-800 [text-shadow:0_0_36px_rgba(21,128,61,0.35),0_0_100px_rgba(21,128,61,0.18)] dark:text-green-50 dark:[text-shadow:0_0_40px_rgba(74,222,128,0.5),0_0_120px_rgba(74,222,128,0.22)] sm:text-[116px] lg:text-[170px]`}
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

        <h1
          id="iqra-hero-heading"
          className={`${reemKufi.className} mt-2 text-balance text-[34px] font-semibold leading-[1.08] text-green-900 dark:text-white sm:text-[44px] lg:mt-8 lg:text-[52px]`}
        >
          Fifty subjects around one first word.
        </h1>
        <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-green-950/70 dark:text-green-100/75 sm:text-lg">
          The first word revealed was <em>Read</em>. Start with a subject that calls you, then test what you
          learned against a friend.
        </p>

        <div data-hero-actions className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-12 rounded-full bg-green-700 px-8 text-base font-semibold text-white hover:bg-green-800 dark:bg-green-700 dark:text-white dark:hover:bg-green-600"
          >
            <Link href="/subjects">Choose a subject</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-green-700 bg-transparent px-8 text-base font-semibold text-green-800 hover:bg-green-50 hover:text-green-900 dark:border-green-400 dark:bg-transparent dark:text-green-50 dark:hover:bg-green-900 dark:hover:text-white"
          >
            <Link href="/challenges">Challenge a friend</Link>
          </Button>
        </div>

        <ul data-hero-chips className="mt-7 flex flex-wrap justify-center gap-2.5">
          {facts.map((fact) => (
            <li key={fact.label} className={chipClass}>
              <b className="font-semibold text-green-700 dark:text-green-300">{fact.value}</b> {fact.label}
            </li>
          ))}
          <li className={chipClass}>No ads &middot; no donations</li>
        </ul>
      </div>
    </section>
  )
}
