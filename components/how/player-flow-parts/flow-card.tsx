import type { FlowStep } from "./flow-data"

type FlowCardProps = { step: FlowStep }

const FlowCard = ({ step }: FlowCardProps) => {
  const Icon = step.icon
  return (
    <div
      data-flow-card={step.id}
      className="h-full rounded-xl border border-green-200 bg-card p-4 text-card-foreground shadow-sm dark:border-green-800 md:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700 ring-1 ring-inset ring-green-200 dark:bg-green-900/40 dark:text-green-300 dark:ring-green-800">
          <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
            {step.eyebrow}
          </p>
          <h3 className="mt-0.5 text-[15px] tracking-normal font-semibold leading-snug text-gray-900 dark:text-gray-50">{step.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{step.body}</p>
    </div>
  )
}

export default FlowCard
