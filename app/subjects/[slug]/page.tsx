import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight, Mountain, Sprout, Swords, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/shared/feature-card"
import PageHeader from "@/components/shared/page-header"
import SectionHeading from "@/components/shared/section-heading"
import StatChip from "@/components/shared/stat-chip"
import { pageContainerClass } from "@/lib/page-layout"
import { pageMetadata } from "@/lib/seo"
import { getSubject, subjectLevels, subjectPath, subjects, subjectSeoDescription } from "@/lib/subjects"

type SubjectPageProps = { params: Promise<{ slug: string }> }

const levelIcons = { easy: <Sprout />, intermediate: <TrendingUp />, advanced: <Mountain /> }

// Every subject is a static page, built once from the question banks.
export const dynamicParams = false

export const generateStaticParams = () => subjects.map((subject) => ({ slug: subject.slug }))

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const subject = getSubject(slug)
  if (!subject) return { title: "Subject not found" }
  return pageMetadata({ title: `${subject.name} quiz`, description: subjectSeoDescription(subject), path: subjectPath(slug) })
}

const SubjectPage = async ({ params }: SubjectPageProps) => {
  const { slug } = await params
  const subject = getSubject(slug)
  if (!subject) notFound()

  const quizHref = (level: string) => `/quiz?category=${encodeURIComponent(slug)}&difficulty=${level}`
  const related = subjects.filter((other) => other.section === subject.section && other.slug !== slug)

  return (
    <div className={pageContainerClass}>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/subjects" className="hover:text-green-800 hover:underline dark:hover:text-green-200">
              Subjects
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>{subject.section}</li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li aria-current="page" className="font-medium text-green-900 dark:text-green-100">
            {subject.name}
          </li>
        </ol>
      </nav>

      <PageHeader
        title={`${subject.name} quiz`}
        subtitle={
          <>
            <p>{subject.description}</p>
            <ul aria-label="Questions per level" className="mt-4 flex flex-wrap gap-2">
              <StatChip value={subject.total} label="questions" />
              {subjectLevels.map(({ level, label }) => (
                <StatChip key={level} value={subject.counts[level]} label={label} />
              ))}
            </ul>
          </>
        }
        actions={
          <Button asChild variant="outline">
            <Link href="/challenges">
              <Swords className="mr-2 h-4 w-4" />
              Challenge a friend
            </Link>
          </Button>
        }
      />

      <section aria-labelledby="levels-heading">
        <SectionHeading id="levels-heading" title="Pick a level" lede="Each level is its own set of questions. Start wherever you like." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {subjectLevels.map(({ level, label, description }) => (
            <FeatureCard
              key={level}
              icon={levelIcons[level]}
              title={label}
              subtitle={`${subject.counts[level]} questions`}
              description={description}
              accent
              actions={
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                  <Link href={quizHref(level)} aria-label={`Start ${label} ${subject.name} quiz`}>
                    Start quiz
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
          <SectionHeading id="related-heading" title={`More in ${subject.section}`} />
          <ul className="flex flex-wrap justify-center gap-2">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={subjectPath(other.slug)}
                  className="inline-block rounded-full border border-green-200 px-3.5 py-1.5 text-sm text-green-900 hover:border-green-500 hover:bg-green-50 dark:border-green-800 dark:text-green-100 dark:hover:bg-green-900/40"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default SubjectPage
