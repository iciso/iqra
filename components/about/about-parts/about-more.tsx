"use client"

import Image from "next/image"
import Link from "next/link"
import { Album, Github, Trophy } from "lucide-react"
import { Trans, useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/shared/section-heading"
import { techKeys } from "@/components/about/about-data"
import AboutAcknowledgments from "@/components/about/about-parts/about-acknowledgments"
import { symComponent } from "@/components/about/about-parts/trans-parts"

// The "Open Source & Thanks" tab.
const AboutMore = () => {
  const { t } = useTranslation("about")

  return (
    <>
      {/* Open Source & AI  Contributions*/}
      <section className="mb-12">
        <SectionHeading align="left" className="mb-4" title={t("openSource.heading")} />
        <p className="mb-4 text-gray-600 dark:text-gray-300">{t("openSource.body")}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="https://github.com/iciso/iqra" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
              <Github className="mr-2 h-4 w-4" />
              {t("openSource.repo")}
            </Button>
          </Link>

          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a
              href="https://github.com/iciso/iqra/blob/main/contribute.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              {t("openSource.contribute")}
            </a>
          </Button>

          <Link href="https://docs.google.com/document/d/1CusV5xAsgXDFZGapQ-b9j1fw1YBGG5MKIlXRuCEhllY/edit?usp=sharing">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
              <Trophy className="mr-2 h-4 w-4" />
              {t("openSource.why")}
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading align="left" className="mb-4" title={t("technology.heading")} />
        <p className="mb-4 text-gray-600 dark:text-gray-300">{t("technology.intro")}</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          {techKeys.map((tech) => (
            <li key={tech.key}>
              {tech.name} - {t(`technology.items.${tech.key}`)}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <Image
            src="/images/design-mode/Icon_light_background.png"
            width={180}
            height={180}
            alt="Next.js Logo"
            className="h-10 w-auto hover:scale-105 transition-transform dark:invert"
          />
        </div>
      </section>

      <AboutAcknowledgments />

      <section className="mb-12">
        <SectionHeading align="left" className="mb-4" title={t("papers.heading")} />
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          <Trans t={t} i18nKey="papers.body" components={{ sym: symComponent }} />
        </p>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <Link href="https://tinyurl.com/mchf5tut" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
              <Album className="mr-2 h-4 w-4" />
              {t("papers.button")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutMore
