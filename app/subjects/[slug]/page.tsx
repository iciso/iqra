import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SubjectDetail from "@/components/subjects/subject-detail"
import { pageMetadata } from "@/lib/seo"
import { getSubject, subjectPath, subjects, subjectSeoDescription } from "@/lib/subjects"

type SubjectPageProps = { params: Promise<{ slug: string }> }

// Every subject is a static page, built once from the question banks.
export const dynamicParams = false

export const generateStaticParams = () => subjects.map((subject) => ({ slug: subject.slug }))

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const subject = getSubject(slug)
  if (!subject) return { title: "Subject not found" }
  return pageMetadata({ title: `${subject.name} quiz`, description: subjectSeoDescription(subject), path: subjectPath(slug) })
}

// The page stays a static server component; the text lives in <SubjectDetail> (a client component) so it can be translated.
const SubjectPage = async ({ params }: SubjectPageProps) => {
  const { slug } = await params
  const subject = getSubject(slug)
  if (!subject) notFound()

  const related = subjects.filter((other) => other.section === subject.section && other.slug !== slug)

  return <SubjectDetail subject={subject} related={related.map(({ slug: id, name }) => ({ slug: id, name }))} />
}

export default SubjectPage
