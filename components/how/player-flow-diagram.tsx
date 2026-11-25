"use client"

import { useTranslation } from "react-i18next"
import DesktopFlow from "./player-flow-parts/desktop-flow"
import MobileFlow from "./player-flow-parts/mobile-flow"

// The player flow drawn in HTML/CSS (it replaced two 4.5 / 3.7 MB infographic PNGs).
const PlayerFlowDiagram = () => {
  const { t } = useTranslation("how")
  return (
  <figure className="rounded-xl border border-gray-200 bg-gray-50/60 p-3 dark:border-gray-800 dark:bg-gray-950/40 md:p-8">
    <figcaption className="mb-6 text-center">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
        {t("flow.label")}
      </span>
      <span className="font-heading mt-1 block text-lg font-bold text-gray-900 dark:text-gray-50 md:text-xl">{t("flow.title")}</span>
    </figcaption>
    <DesktopFlow />
    <MobileFlow />
  </figure>
  )
}

export default PlayerFlowDiagram
