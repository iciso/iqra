import type { FlowStep } from "./flow-data"
import { DECISION, OUTCOMES, RESULTS, TRACKS } from "./flow-data"
import FlowCard from "./flow-card"
import OrDivider from "./or-divider"

// Phones: one vertical flow, a numbered marker per step on a thin rail.
const MOBILE_STEPS: { label: string; cards: FlowStep[] }[] = [
  { label: "Choose a track", cards: TRACKS },
  { label: "See your results", cards: [RESULTS] },
  { label: DECISION, cards: OUTCOMES },
]

const MobileFlow = () => (
  <ol data-flow-layout="mobile" className="md:hidden">
    {MOBILE_STEPS.map((step, i) => {
      const last = i === MOBILE_STEPS.length - 1
      return (
        <li key={step.label} className="flex gap-3">
          <div aria-hidden="true" className="flex flex-col items-center">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-green-300 bg-green-50 text-xs font-semibold text-green-800 dark:border-green-700 dark:bg-green-900/50 dark:text-green-100">
              {i + 1}
            </span>
            {!last && <span data-flow-line="rail" className="w-px flex-1 bg-green-300 dark:bg-green-700" />}
          </div>
          <div className={`min-w-0 flex-1 ${last ? "" : "pb-6"}`}>
            <p className="flex min-h-7 items-center text-sm font-semibold text-green-900 dark:text-green-100">
              {step.label}
            </p>
            <ul className="mt-2">
              {step.cards.map((card, j) => (
                <li key={card.id}>
                  {j > 0 && <OrDivider />}
                  <FlowCard step={card} />
                </li>
              ))}
            </ul>
          </div>
        </li>
      )
    })}
  </ol>
)

export default MobileFlow
