"use client"

import { useTranslation } from "react-i18next"
import {
  grandTotal,
  quizDistribution,
  totalAdvanced,
  totalCategory,
  totalEasy,
  totalIntermediate,
} from "@/components/about/about-data"

const levels = [
  {
    level: "easy",
    letterKey: "quizzes.letterEasy",
    legendKey: "quizzes.forEasy",
    legendBadge: "bg-emerald-100 text-emerald-800",
    linkClass: "bg-emerald-100 text-emerald-800 hover:bg-emerald-700 hover:text-white",
  },
  {
    level: "intermediate",
    letterKey: "quizzes.letterIntermediate",
    legendKey: "quizzes.forIntermediate",
    legendBadge: "bg-sky-100 text-sky-800",
    linkClass: "bg-sky-100 text-sky-800 hover:bg-sky-700 hover:text-white",
  },
  {
    level: "advanced",
    letterKey: "quizzes.letterAdvanced",
    legendKey: "quizzes.forAdvanced",
    legendBadge: "bg-amber-100 text-amber-800",
    linkClass: "bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white",
  },
] as const

const AboutQuizzes = () => {
  const { t } = useTranslation("about")
  const { t: tc } = useTranslation("common")

  const totals = [totalEasy, totalIntermediate, totalAdvanced]

  return (
    <section className="my-10 rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg sm:p-6 dark:border-emerald-800 dark:bg-card">
      <div id="iqra-quizzes" className="mb-6 text-center">
        <h2 className="text-2xl font-extrabold text-emerald-800 sm:text-3xl dark:text-emerald-300">
          📊 {t("quizzes.heading")}
        </h2>

        <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-muted-foreground">
          {t("quizzes.subtitle")}
        </p>

        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-gray-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
          <p className="mb-3 leading-8">
            <strong>{t("quizzes.chooseTitle")}</strong> {t("quizzes.select")}{" "}
            {levels.map((item) => (
              <span key={item.level}>
                <span
                  className={`inline-flex h-6 min-w-6 items-center justify-center rounded px-1 font-bold ${item.legendBadge}`}
                >
                  {t(item.letterKey)}
                </span>{" "}
                {t(item.legendKey)}{" "}
              </span>
            ))}
            {t("quizzes.beside")}
          </p>

          <p>
            <strong>🏆 {t("quizzes.challengeQ")}</strong>{" "}
            <a
              href="/challenges"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-purple-500 px-3 py-1 font-bold text-white transition hover:bg-purple-600"
            >
              {t("quizzes.challengeBtn")}
            </a>
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100">
              <th className="border-b-2 border-emerald-200 dark:border-emerald-800 px-3 py-3 text-left font-bold">
                {t("quizzes.colCategory")}
              </th>
              {levels.map((item) => (
                <th
                  key={item.level}
                  className="border-b-2 border-emerald-200 dark:border-emerald-800 px-3 py-3 text-center font-bold"
                >
                  {tc(`difficulty.${item.level}`)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {quizDistribution.map((row, index) => {
              const category = t(`categories.${row.slug}`)
              return (
                <tr
                  key={row.slug}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-emerald-50 dark:bg-card dark:hover:bg-emerald-950/60"
                      : "bg-gray-50 hover:bg-emerald-50 dark:bg-muted/40 dark:hover:bg-emerald-950/60"
                  }
                >
                  <td className="border-b border-gray-100 px-3 py-2.5 font-medium text-gray-700 dark:border-border dark:text-foreground">
                    <div className="flex flex-wrap items-center gap-2">
                      <span>{category}</span>
                      {levels.map((item) => {
                        const title = t("quizzes.levelTitle", { level: tc(`difficulty.${item.level}`), category })
                        return (
                          <a
                            key={item.level}
                            href={`/quiz?category=${encodeURIComponent(row.slug)}&difficulty=${item.level}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-xs font-extrabold transition ${item.linkClass}`}
                            title={title}
                            aria-label={title}
                          >
                            {t(item.letterKey)}
                          </a>
                        )
                      })}
                    </div>
                  </td>
                  {levels.map((item) => (
                    <td
                      key={item.level}
                      className="border-b border-gray-100 px-3 py-2.5 text-center tabular-nums dark:border-border"
                    >
                      {row[item.level]}
                    </td>
                  ))}
                </tr>
              )
            })}

            {/* Total Row */}
            <tr className="bg-gradient-to-r from-emerald-100 to-amber-100 font-extrabold text-emerald-900 dark:from-emerald-900/70 dark:to-amber-900/50 dark:text-emerald-100">
              <td className="border-t-2 border-emerald-300 px-3 py-4">
                {t("quizzes.total", { count: totalCategory })}
              </td>
              {totals.map((total, index) => (
                <td key={levels[index].level} className="border-t-2 border-emerald-300 px-3 py-4 text-center">
                  {total.toLocaleString()}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 rounded-lg bg-gradient-to-r from-emerald-700 to-green-800 p-4 text-center text-white shadow">
        <p className="text-sm font-medium sm:text-base">{t("quizzes.platform")}</p>
        <p className="mt-1 text-xl font-extrabold sm:text-2xl">
          {t("quizzes.bank", { count: grandTotal.toLocaleString() })}
        </p>
      </div>
    </section>
  )
}

export default AboutQuizzes
