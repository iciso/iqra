"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { pageContainerClass } from "@/lib/page-layout"
import AboutTabs from "@/components/about/about-tabs"
import AboutHeader from "@/components/about/about-parts/about-header"
import AboutMission from "@/components/about/about-parts/about-mission"
import AboutQuizzes from "@/components/about/about-parts/about-quizzes"
import AboutPlayers from "@/components/about/about-parts/about-players"
import AboutMore from "@/components/about/about-parts/about-more"

// The whole About page. It is a client component so the text can follow the player's language;
// app/about/page.tsx stays a static server page and just renders this.
const AboutContent = () => {
  const { t } = useTranslation("about")

  return (
    <div className={pageContainerClass}>
      <div className="mx-auto max-w-3xl">
        <AboutHeader />
        <AboutTabs
          mission={<AboutMission />}
          quizzes={<AboutQuizzes />}
          players={<AboutPlayers />}
          more={<AboutMore />}
        />
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("back")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
