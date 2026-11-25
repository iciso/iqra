"use client"

import type { ReactElement } from "react"
import Image from "next/image"
import { Trans, useTranslation } from "react-i18next"
import SectionHeading from "@/components/shared/section-heading"
import { externalLink, mailLink, symComponent } from "@/components/about/about-parts/trans-parts"

const logoClass = "h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert"

const xaiLogo = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300"
  >
    <path
      d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z"
      fill="currentColor"
    ></path>
  </svg>
)

type AckItem = {
  key: string
  id?: string
  /** Links used inside the translated sentence, by tag name. */
  links: Record<string, ReactElement>
  logos?: ReactElement[]
}

// One entry per thank-you. The sentence is ack.<key> in locales/<lng>/pages/about.json.
// #ai-credits (the footer's "Built with AI assistance" link) is the first AI-tool item, so it does not land on a person.
const items: AckItem[] = [
  {
    key: "concept",
    links: {
      rafique: externalLink("https://cvemrafi.vercel.app/"),
      joy: externalLink("https://joy.zettabyteincorp.com"),
      mail1: mailLink("joy_ahmed_007@yahoo.com"),
      mail2: mailLink("joy@zettabyteincorp.com"),
      gh: externalLink("https://github.com/joyahmed"),
    },
  },
  {
    key: "vercel",
    links: { vercel: externalLink("https://vercel.com") },
    logos: [
      <Image
        key="next"
        src="/images/design-mode/Icon_light_background.png"
        width={180}
        height={180}
        alt="Next.js Logo"
        className={logoClass}
      />,
    ],
  },
  { key: "xai", id: "ai-credits", links: { xai: externalLink("https://x.ai") }, logos: [<span key="xai">{xaiLogo}</span>] },
  {
    key: "deepseek",
    links: { deepseek: externalLink("https://www.deepseek.com") },
    logos: [<Image key="ds" src="/deepseek.svg" width={30} height={30} alt="DeepSeek Logo" className={logoClass} />],
  },
  {
    key: "claude",
    links: { claude: externalLink("https://claude.ai") },
    logos: [
      <Image
        key="cl"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg"
        width={100}
        height={100}
        alt="Claude AI Logo"
        className={logoClass}
      />,
    ],
  },
  {
    key: "gemini",
    links: { gemini: externalLink("https://gemini.google.com") },
    logos: [<Image key="gm" src="/gemini.svg" width={192} height={192} alt="Gemini Logo" className={logoClass} />],
  },
  {
    key: "meta",
    links: { meta: externalLink("https://www.meta.ai/") },
    logos: [
      <Image key="m1" src="/meta.png" width={150} height={150} alt="Meta WhatsApp Logo" className={logoClass} />,
      <Image key="m2" src="/instagram.png" width={1397} height={1403} alt="Meta WhatsApp Logo" className={logoClass} />,
      <Image key="m3" src="/meta.svg" width={288} height={191} alt="Meta Fb Logo" className={logoClass} />,
    ],
  },
]

// #acknowledgments: the people and services IQRA thanks.
const AboutAcknowledgments = () => {
  const { t } = useTranslation("about")

  return (
    <section id="acknowledgments" className="mb-12 scroll-mt-32">
      <SectionHeading align="left" className="mb-4" title={t("ack.heading")} />
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        <Trans t={t} i18nKey="ack.intro" components={{ sym: symComponent }} />
      </p>
      <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
        {items.map((item) => (
          <li key={item.key} id={item.id} className={item.id ? "scroll-mt-32" : undefined}>
            <Trans
              t={t}
              i18nKey={`ack.${item.key}`}
              components={{ b: <strong />, sym: symComponent, ...item.links }}
            />
            {item.logos && (
              <div className={item.key === "meta" ? "flex flex-wrap gap-4 mt-4 justify-center items-center" : "mt-2"}>
                {item.logos}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutAcknowledgments
