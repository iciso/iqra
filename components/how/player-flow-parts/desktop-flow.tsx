"use client"

import { useTranslation } from "react-i18next"
import DecisionPill from "./decision-pill"
import FlowCard from "./flow-card"
import { COL_L, COL_R, LINE, OUTCOMES, RESULTS, TRACKS } from "./flow-data"

// md and up: tracks on top, lines converge on Results, then split to the two outcomes.
const DesktopFlow = () => {
  const { t } = useTranslation("how")
  return (
  <ol data-flow-layout="desktop" className="hidden md:block">
    <li>
      <span className="sr-only">{t("flow.step1")}</span>
      <ul className="grid grid-cols-2 gap-6">
        {TRACKS.map((step) => (
          <li key={step.id}>
            <FlowCard step={step} />
          </li>
        ))}
      </ul>
    </li>

    <li>
      <div aria-hidden="true" className="relative h-12">
        <span data-flow-line="t1-drop" className={`${LINE} ${COL_L} top-0 h-6 w-px`} />
        <span data-flow-line="t2-drop" className={`${LINE} ${COL_R} top-0 h-6 w-px`} />
        <span data-flow-line="merge-bar" className={`${LINE} ${COL_L} ${COL_R} top-6 h-px`} />
        <span data-flow-line="merge-stem" className={`${LINE} bottom-0 left-1/2 top-6 w-px`} />
      </div>
      <span className="sr-only">{t("flow.step2")}</span>
      <div className="mx-auto max-w-md">
        <FlowCard step={RESULTS} />
      </div>
    </li>

    <li>
      <div aria-hidden="true" className="relative h-6">
        <span data-flow-line="res-stem" className={`${LINE} bottom-0 left-1/2 top-0 w-px`} />
      </div>
      <span className="sr-only">{t("flow.step3")}</span>
      <DecisionPill />
      <div className="mx-auto max-w-2xl">
        <div aria-hidden="true" className="relative h-12">
          <span data-flow-line="split-stem" className={`${LINE} left-1/2 top-0 h-6 w-px`} />
          <span data-flow-line="split-bar" className={`${LINE} ${COL_L} ${COL_R} top-6 h-px`} />
          <span data-flow-line="o1-drop" className={`${LINE} ${COL_L} bottom-0 top-6 w-px`} />
          <span data-flow-line="o2-drop" className={`${LINE} ${COL_R} bottom-0 top-6 w-px`} />
        </div>
        <ul className="grid grid-cols-2 gap-6">
          {OUTCOMES.map((step) => (
            <li key={step.id}>
              <FlowCard step={step} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  </ol>
  )
}

export default DesktopFlow
