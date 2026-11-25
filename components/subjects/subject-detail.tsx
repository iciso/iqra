"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { ArrowRight, ChevronRight, Mountain, Sprout, Swords, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/shared/feature-card"
import PageHeader from "@/components/shared/page-header"
import SectionHeading from "@/components/shared/section-heading"
import StatChip from "@/components/shared/stat-chip"
import { pageContainerClass } from "@/lib/page-layout"
import { sectionKeys, subjectLevels, subjectPath, type Subject } from "@/lib/subjects"

type SubjectDetailProps = {
  subject: Subject
  related: { slug: string; name: string }[]
}

const levelIcons = { easy: <Sprout />, intermediate: <TrendingUp />, advanced: <Mountain /> }

// The text of /subjects/<slug>. English is kept in lib/subjects.ts; every string here is looked up in the
// "subjects" namespace with that English as the fallback.
const SubjectDetail = ({ subject, related }: SubjectDetailProps) => {
  const { t } = useTranslation("subjects")
  const slug = subject.slug

  const nameOf = (id: string, fallback: string) => t(`${id}.name`, { defaultValue: fallback })
  const name = nameOf(slug, subject.name)
  const description = t(`${slug}.description`, { defaultValue: subject.description })
  const section = t(`sections.${sectionKeys[subject.section]}`, { defaultValue: subject.section })
  const levelLabel = (level: string) => t(`difficulty.${level}`, { ns: "common" })

  const quizHref = (level: string) => `/quiz?category=${encodeURIComponent(slug)}&difficulty=${level}`

  return (
    <div className={pageContainerClass}>
      <nav aria-label={t("detail.breadcrumb")} className="mb-4 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/subjects" className="hover:text-green-800 hover:underline dark:hover:text-green-200">
              {t("list.title")}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>{section}</li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li aria-current="page" className="font-medium text-green-900 dark:text-green-100">
            {name}
          </li>
        </ol>
      </nav>

      <PageHeader
        title={t("detail.quizTitle", { name })}
        subtitle={
          <>
            <p>{description}</p>
            <ul aria-label={t("detail.questionsPerLevel")} className="mt-4 flex flex-wrap gap-2">
              <StatChip value={subject.total} label={t("detail.questionsLabel")} />
              {subjectLevels.map(({ level }) => (
                <StatChip key={level} value={subject.counts[level]} label={levelLabel(level)} />
              ))}
            </ul>
          </>
        }
        actions={
          <Button asChild variant="outline">
            <Link href="/challenges">
              <Swords className="mr-2 h-4 w-4" />
              {t("detail.challenge")}
            </Link>
          </Button>
        }
      />

      <section aria-labelledby="levels-heading">
        <SectionHeading id="levels-heading" title={t("detail.pickLevel.title")} lede={t("detail.pickLevel.lede")} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {subjectLevels.map(({ level, description: levelDescription }) => (
            <FeatureCard
              key={level}
              icon={levelIcons[level]}
              title={levelLabel(level)}
              subtitle={t("detail.questionsCount", { count: subject.counts[level] })}
              description={t(`detail.levels.${level}.description`, { defaultValue: levelDescription })}
              accent
              actions={
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                  <Link href={quizHref(level)} aria-label={t("detail.startAria", { level: levelLabel(level), name })}>
                    {t("detail.startQuiz")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              }
            />
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-12">
          <SectionHeading id="related-heading" title={t("detail.moreIn", { section })} />
          <ul className="flex flex-wrap justify-center gap-2">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={subjectPath(other.slug)}
                  className="inline-block rounded-full border border-green-200 px-3.5 py-1.5 text-sm text-green-900 hover:border-green-500 hover:bg-green-50 dark:border-green-800 dark:text-green-100 dark:hover:bg-green-900/40"
                >
                  {nameOf(other.slug, other.name)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default SubjectDetail
