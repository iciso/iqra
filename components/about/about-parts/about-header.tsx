"use client"

import { useTranslation } from "react-i18next"
import { IqraLogo } from "@/components/iqra-logo"
import PageHeader from "@/components/shared/page-header"

const AboutHeader = () => {
  const { t } = useTranslation("about")

  return (
    <section className="mb-12">
      <PageHeader
        align="center"
        className="mb-0"
        icon={<IqraLogo size="lg" showText={false} />}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
      />
      {/* Rafique's original homepage welcome line (moved here from the old home header in cc12ec8). */}
      <p
        data-about-welcome=""
        className="mx-auto mt-6 max-w-2xl rounded-xl border bg-muted/50 px-5 py-4 text-center text-base leading-relaxed text-muted-foreground"
      >
        <span dir="rtl" lang="ar" className="font-arabic text-2xl text-foreground align-middle">
          ما شاء الله
        </span>{" "}
        {t("header.welcome")}
      </p>
    </section>
  )
}

export default AboutHeader
