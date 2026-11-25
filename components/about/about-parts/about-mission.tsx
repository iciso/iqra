"use client"

import { Trans, useTranslation } from "react-i18next"
import SectionHeading from "@/components/shared/section-heading"
import { featureKeys } from "@/components/about/about-data"
import { symComponent } from "@/components/about/about-parts/trans-parts"

const AboutMission = () => {
  const { t } = useTranslation("about")

  return (
    <>
      <section className="mb-12">
        <SectionHeading align="left" className="mb-4" title={t("mission.heading")} />
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          بِرٌّ هَذِهِ صَدَقَةٌ جَارِيَةٌ لِوَجْهِ اللهِ تَعَالَى
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          <Trans t={t} i18nKey="mission.charity" components={{ sym: symComponent, br: <br /> }} />
        </p>
        <p className="text-gray-600 dark:text-gray-300">{t("mission.aim")}</p>
      </section>

      <section className="mb-12">
        <SectionHeading align="left" className="mb-4" title={t("features.heading")} />
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          {featureKeys.map((key) => (
            <li key={key}>
              <strong>{t(`features.items.${key}.title`)}</strong> - {t(`features.items.${key}.desc`)}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default AboutMission
