import Link from "next/link"
import { pageMetadata } from "@/lib/seo"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PlayerFlowDiagram from "@/components/how/player-flow-diagram"
import SectionHeading from "@/components/shared/section-heading"
import PageHeader from "@/components/shared/page-header"
import FeatureCard from "@/components/shared/feature-card"
import { pageContainerClass } from "@/lib/page-layout"
import {
  Home,
  HelpCircle,
  BookOpen,
  Trophy,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from "lucide-react"

export const metadata = pageMetadata({
  title: "How it works",
  description: "How to play IQRA: pick a subject and quiz, or send a friend a challenge and compare scores.",
  path: "/how",
})

export default function HowItWorksPage() {
  return (
    <div className={pageContainerClass}>
      <div className="space-y-6">
        <PageHeader
          className="mb-2"
          title="How IQRA Works"
          subtitle="Whether you want to learn at your own pace or test your knowledge against time and friends, IQRA provides two tailored tracks to suit your learning style."
          actions={
            <>
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <Home className="mr-1.5 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Badge variant="secondary" className="bg-green-100 px-3 py-1 text-green-900 dark:bg-green-900/60 dark:text-green-100">
                <HelpCircle className="mr-1 h-3.5 w-3.5" />
                Guide & Overview
              </Badge>
            </>
          }
        />

        {/* Two Tracks Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Track 1: Quiz */}
          <FeatureCard
            accent
            tone="emerald"
            align="left"
            eyebrow="Track 1"
            icon={<BookOpen aria-hidden="true" />}
            title="Quizzes (Answer & Learn)"
            subtitle="Untimed practice designed for thoughtful learning and discovering new knowledge."
            actions={
              <Button asChild className="w-full gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href="/subjects">
                  Start a Practice Quiz
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Sparkles aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span><strong>No Timer:</strong> Read explanations carefully without any rush. Become an Instant Quality Religious Authority (IQRA).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span><strong>Optional Leaderboard:</strong> Choose whether to submit your score or keep your practice private.</span>
              </li>
            </ul>
          </FeatureCard>

          {/* Track 2: Challenge, in the site green. */}
          <FeatureCard
            accent
            tone="green"
            align="left"
            eyebrow="Track 2"
            icon={<Trophy aria-hidden="true" />}
            title="Challenges (Play & Compete)"
            subtitle="Timed quizzes to test your speed, unlock badges, and challenge peers."
            actions={
              <Button asChild className="w-full gap-1.5 bg-green-700 text-white hover:bg-green-800">
                <Link href="/challenges">
                  Enter Challenge Mode
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                <span><strong>Countdown Timer:</strong> Speed & accuracy combine for bonus points.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                <span><strong>Flexible Posting:</strong> Post scores to global ranks or play strictly for fun.</span>
              </li>
            </ul>
          </FeatureCard>

        </div>

        {/* Schematic Flow Diagram Section */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="pb-4">
            <SectionHeading
              align="left"
              className="mb-0"
              title="Process Flow Diagram"
              lede="How both paths lead to your results and leaderboard placement options."
            />
          </CardHeader>

          <CardContent>
            <PlayerFlowDiagram />
          </CardContent>
        </Card>

        {/* Footer Action */}
        <div className="text-center pt-2 pb-6">
          <Link href="/subjects">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-semibold shadow-md px-8">
              Explore All 50 Subjects
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
