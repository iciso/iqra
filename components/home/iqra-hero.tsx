"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { Reem_Kufi } from "next/font/google"

import { BookOpen, Footprints, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useOrbitPause } from "@/hooks/use-orbit-pause"

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

// The name spelled out, initials in brand green: the acronym is the introduction.
const acronym = [
  { initial: "I", rest: "slamic" },
  { initial: "Q", rest: "uiz" },
  { initial: "R", rest: "ivalry" },
  { initial: "A", rest: "pp" },
]

const learnTags = ["Easy", "Intermediate", "Advanced"]
const challengeTags = ["Friend Challenge", "Daily Challenge", "Player Rivalry"]

const round = (n: number) => Math.round(n * 100) / 100

// The orbit around the word. It turns once every 110 s (app/globals.css, one animated angle,
// --orbit-a); every label stays upright and sits just outside its dot, pushed further out at the
// sides where the word is wide, so it never covers the dot or leaves the orbit box.
// Phone shows 6 labels on a smaller ring (the box is 400 wide); 640px+ adds the two side labels.
// The SVG attributes below are the start position, so without CSS trig the old still orbit remains.
const CENTER = 200
const LABEL_GAP = 9 // dot radius + breathing room, user units
const LABEL_HALF_HEIGHT = 8
const orbitLabels = [
  { label: "SALAH", angle: -90, tabletOnly: false },
  { label: "QURAN", angle: -45, tabletOnly: false },
  { label: "HAJJ", angle: 0, tabletOnly: true },
  { label: "TAFSIR", angle: 45, tabletOnly: false },
  { label: "FIQH", angle: 90, tabletOnly: false },
  { label: "SEERAH", angle: 135, tabletOnly: false },
  { label: "RIBA", angle: 180, tabletOnly: true },
  { label: "DAWAH", angle: -135, tabletOnly: false },
]

// Measured 2026-11-22: 13px uppercase at 0.12em tracking is 35-62 units wide, about 10 per letter.
const halfWidth = (label: string) => label.length * 5 + 1.5

const orbitGeometry = (tablet: boolean) => {
  const radius = tablet ? 150 : 140
  const labels = orbitLabels
    .filter((item) => tablet || !item.tabletOnly)
    .map((item, i) => {
      const rad = (item.angle * Math.PI) / 180
      const cos = Math.cos(rad)
      const sin = Math.sin(rad)
      const hw = halfWidth(item.label)
      // Same distance formula as .iqra-orbit-text in globals.css, at the start angle.
      const d = radius + LABEL_GAP + hw * Math.abs(cos) + LABEL_HALF_HEIGHT * Math.abs(sin)
      const dx = round(radius * cos)
      const dy = round(radius * sin)
      const sx = round(d * cos)
      const sy = round(d * sin)
      return {
        ...item,
        dot: { x: CENTER + dx, y: CENTER + dy },
        text: { x: CENTER + sx, y: CENTER + sy },
        style: {
          "--a0": `${item.angle}deg`,
          "--hw": `${hw}px`,
          "--i": i,
          "--dx": `${dx}px`,
          "--dy": `${dy}px`,
          "--sx": `${sx}px`,
          "--sy": `${sy}px`,
        } as CSSProperties,
      }
    })
  const innerRadius = radius - 32
  const dots = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2
    return { x: round(CENTER + innerRadius * Math.cos(angle)), y: round(CENTER + innerRadius * Math.sin(angle)) }
  })
  return { radius, innerRadius, labels, dots }
}

const orbits = [
  { tablet: false, viewBox: "0 0 400 400", className: "sm:hidden", ...orbitGeometry(false) },
  { tablet: true, viewBox: "-60 0 520 400", className: "hidden sm:block", ...orbitGeometry(true) },
]

const ringStroke = "stroke-green-700/20 dark:stroke-green-300/20"
const labelText = "fill-green-900/60 tracking-[0.12em] dark:fill-green-100/70"
const keyDot = "fill-green-600 dark:fill-green-400"
const minorDot = "fill-green-700/35 dark:fill-green-200/45"
const chipClass =
  "rounded-full border border-green-200 px-3.5 py-1.5 text-[13px] text-green-950/70 dark:border-green-800 dark:text-green-100/75"

const Orbit = ({ orbit }: { orbit: (typeof orbits)[number] }) => (
  <svg
    viewBox={orbit.viewBox}
    aria-hidden="true"
    data-orbit={orbit.tablet ? "tablet" : "phone"}
    className={`iqra-orbit absolute inset-0 h-full w-full ${orbit.className}`}
    style={{ "--r": `${orbit.radius}px` } as CSSProperties}
  >
    <circle
      cx={CENTER}
      cy={CENTER}
      r={orbit.radius}
      pathLength={1}
      fill="none"
      className={`iqra-orbit-ring ${ringStroke}`}
    />
    <g className="iqra-orbit-inner">
      <circle cx={CENTER} cy={CENTER} r={orbit.innerRadius} fill="none" strokeDasharray="2 6" className={ringStroke} />
      {orbit.dots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={1.6} className={minorDot} />
      ))}
    </g>
    {orbit.labels.map((item) => (
      <g key={item.label} data-label={item.label} className="iqra-orbit-label" style={item.style}>
        <g className="iqra-orbit-dot">
          <circle cx={item.dot.x} cy={item.dot.y} r={8} opacity={0} className={`iqra-orbit-glint ${keyDot}`} />
          <circle cx={item.dot.x} cy={item.dot.y} r={3.2} className={keyDot} />
        </g>
        <text
          x={item.text.x}
          y={item.text.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          className={`iqra-orbit-text ${labelText}`}
        >
          {item.label}
        </text>
      </g>
    ))}
  </svg>
)

const IqraHero = () => {
  const heroRef = useOrbitPause<HTMLElement>()

  return (
    <section
      ref={heroRef}
      aria-labelledby="iqra-hero-heading"
      className="relative w-full overflow-hidden bg-white dark:bg-green-950"
    >
      {/* Soft green halo behind the word: fades in with the mark, then breathes (motion allowed only). */}
      <div
        aria-hidden="true"
        className="iqra-halo pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(21,128,61,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_30%_at_50%_22%,rgba(34,197,94,0.24),transparent_70%)] xl:bg-[radial-gradient(ellipse_30%_40%_at_28%_50%,rgba(21,128,61,0.14),transparent_70%)] dark:xl:bg-[radial-gradient(ellipse_30%_40%_at_28%_50%,rgba(34,197,94,0.24),transparent_70%)]"
      />
      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[640px] flex-col items-center px-4 pb-12 pt-6 text-center sm:pt-8 xl:grid xl:max-w-[1240px] xl:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] xl:gap-10 xl:px-8 xl:py-14 xl:text-left"
      >
        <div className="relative aspect-square w-full max-w-[400px] sm:aspect-[13/10] sm:max-w-[520px] xl:mx-auto">
          {orbits.map((orbit) => (
            <Orbit key={orbit.viewBox} orbit={orbit} />
          ))}
          <div data-hero-mark className="iqra-mark-in absolute inset-0 flex flex-col items-center justify-center">
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
          <p
            data-hero-acronym
            className={`${reemKufi.className} mt-1 text-lg tracking-wide text-green-950/55 dark:text-green-100/60 sm:text-xl xl:mt-0`}
          >
            {acronym.map((word, i) => (
              <span key={word.initial}>
                {i > 0 && " "}
                <b className="text-[1.3em] font-bold text-green-700 dark:text-green-300">{word.initial}</b>
                {word.rest}
              </span>
            ))}
          </p>
          <h1
            id="iqra-hero-heading"
            className={`${reemKufi.className} mt-3 text-balance text-[34px] font-semibold leading-[1.08] text-green-900 dark:text-white sm:text-[44px] xl:text-[48px]`}
          >
            Quiz to learn. Rival to excel.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-base xl:mx-0 leading-relaxed text-green-950/70 dark:text-green-100/75 sm:text-lg">
            Two tracks, one name: <b className="font-semibold text-green-800 dark:text-green-200">Quiz</b> any of 50
            subjects at your own pace, or turn it into a{" "}
            <b className="font-semibold text-green-800 dark:text-green-200">Rivalry</b> and challenge a friend.
          </p>

          {/* Two tracks, side by side from md up: a calm one for learning, an energetic one for racing a friend. */}
          <div data-hero-actions className="mt-7 grid w-full grid-cols-1 gap-4 text-left md:grid-cols-2">
            <Card
              data-hero-track="learn"
              data-reveal=""
              style={{ "--rise-delay": "250ms" } as CSSProperties}
              className="iqra-rise flex flex-col rounded-2xl border border-green-200 bg-white p-5 shadow-none dark:border-green-800 dark:bg-green-900/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-white text-green-700 dark:border-green-700 dark:bg-green-950 dark:text-green-300">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
                  Track 1 &middot; Quiz
                </p>
              </div>
              <h2 className={`${reemKufi.className} mt-3 text-2xl font-semibold text-green-900 dark:text-white`}>
                <b className="font-bold text-green-700 dark:text-green-300">Quiz</b> &ndash; learn at leisure
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
              data-reveal=""
              style={{ "--rise-delay": "320ms" } as CSSProperties}
              className="iqra-rise flex flex-col rounded-2xl border-2 border-green-600 bg-green-100 p-5 text-green-900 shadow-none dark:border dark:border-green-400/60 dark:bg-green-700 dark:text-white dark:shadow-lg dark:shadow-green-400/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-green-700 dark:bg-white">
                  <Footprints aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700 dark:text-green-50">
                  Track 2 &middot; Rivalry
                </p>
              </div>
              <h2 className={`${reemKufi.className} mt-3 text-2xl font-semibold text-green-900 dark:text-white`}>
                <b className="font-bold text-green-700 underline decoration-green-600/60 decoration-2 underline-offset-[6px] dark:text-green-200 dark:decoration-green-300/70">
                  Rivalry
                </b>{" "}
                &ndash; race to excel
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-green-900/80 dark:text-green-50">
                Send the same quiz to a friend &ndash; the higher score wins. The Prophet (peace be upon him) raced Aisha (RA) and
                said &ldquo;This is for that&rdquo;: friendly competition is Sunnah.
              </p>
              <p className="mt-1.5 text-xs text-green-800/70 dark:text-green-100">Sunan Abi Dawud 2578 · Sahih (al-Albani)</p>
              <ul aria-label="Ways to compete" className="mt-3 flex flex-wrap gap-1.5">
                {challengeTags.map((tag) => (
                  <li key={tag} className="rounded-full border border-green-300 bg-white px-2.5 py-1 text-xs text-green-800 dark:border-transparent dark:bg-green-900/50 dark:text-white">
                    {tag}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-5 h-11 w-full rounded-full bg-green-700 text-base font-semibold text-white hover:bg-green-800 hover:text-white dark:bg-white dark:text-green-800 dark:hover:bg-green-50 dark:hover:text-green-900"
              >
                <Link href="/challenges">
                  <Trophy aria-hidden="true" className="h-4 w-4" />
                  Challenge a friend
                </Link>
              </Button>
            </Card>
          </div>

          <ul
            data-hero-chips
            data-reveal=""
            style={{ "--rise-delay": "400ms" } as CSSProperties}
            className="iqra-rise mt-7 flex flex-wrap justify-center gap-2.5 xl:justify-start">
            {facts.map((fact) => (
              <li key={fact.label} className={chipClass}>
                <b className="font-semibold text-green-700 dark:text-green-300">{fact.value}</b> {fact.label}
              </li>
            ))}
            <li className={chipClass}>
              <a
                href="#no-donations"
                title="Why no donations - Surah Sad 38:86"
                aria-label="Why no donations - Surah Sad 38:86"
                className="rounded-full underline-offset-4 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:hover:text-green-200 dark:focus-visible:ring-green-400">
                No ads &middot; no donations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IqraHero
