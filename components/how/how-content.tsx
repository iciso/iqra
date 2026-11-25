"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
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

const HowContent = () => {
  const { t } = useTranslation("how")
  return (
    <div className={pageContainerClass}>
      <div className="space-y-6">
        <PageHeader
          className="mb-2"
          title={t("title")}
          subtitle={t("subtitle")}
          actions={
            <>
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <Home className="mr-1.5 h-4 w-4" />
                  {t("home")}
                </Link>
              </Button>
              <Badge variant="secondary" className="bg-green-100 px-3 py-1 text-green-900 dark:bg-green-900/60 dark:text-green-100">
                <HelpCircle className="mr-1 h-3.5 w-3.5" />
                {t("badge")}
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
            eyebrow={t("track1.eyebrow")}
            icon={<BookOpen aria-hidden="true" />}
            title={t("track1.title")}
            subtitle={t("track1.subtitle")}
            actions={
              <Button asChild className="w-full gap-1.5 bg-green-700 text-white hover:bg-green-800">
                <Link href="/subjects">
                  {t("track1.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Sparkles aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span><strong>{t("track1.noTimerLabel")}</strong> {t("track1.noTimer")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span><strong>{t("track1.leaderboardLabel")}</strong> {t("track1.leaderboard")}</span>
              </li>
            </ul>
          </FeatureCard>

          {/* Track 2: Challenge, in the site green. */}
          <FeatureCard
            accent
            tone="green"
            align="left"
            eyebrow={t("track2.eyebrow")}
            icon={<Trophy aria-hidden="true" />}
            title={t("track2.title")}
            subtitle={t("track2.subtitle")}
            actions={
              <Button asChild className="w-full gap-1.5 bg-green-700 text-white hover:bg-green-800">
                <Link href="/challenges">
                  {t("track2.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                <span><strong>{t("track2.timerLabel")}</strong> {t("track2.timer")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" />
                <span><strong>{t("track2.postingLabel")}</strong> {t("track2.posting")}</span>
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
              title={t("flowSection.title")}
              lede={t("flowSection.lede")}
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
              {t("explore")}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HowContent
