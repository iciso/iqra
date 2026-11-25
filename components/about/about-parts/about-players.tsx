"use client"

import { Trans, useTranslation } from "react-i18next"
import {
  contributors,
  totalContributions,
  totalRewards,
} from "@/components/about/about-data"
import { externalLink, symComponent } from "@/components/about/about-parts/trans-parts"

const AboutPlayers = () => {
  const { t } = useTranslation("about")

  return (
    <section
      id="player-contributions-dhanish-ali"
      className="mb-12 rounded-2xl border-2 border-amber-400
        bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50
        p-6 shadow-lg dark:from-gray-800 dark:via-gray-800
        dark:to-green-950 sm:p-8"
    >
      <div className="mb-5 text-center">
        <div className="mb-3 text-5xl" aria-hidden="true">
          🏆
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
          {t("players.eyebrow")}
        </p>

        <h2 className="mb-4 text-3xl font-extrabold text-green-800 dark:text-green-400">
          {t("players.heading")}
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{t("players.intro")}</p>
      </div>

      {/* Grand total of all rewards given by the IQRA team */}
      <div className="relative my-6 overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 p-6 text-center shadow-lg dark:border-amber-500 dark:from-amber-600 dark:via-yellow-500 dark:to-amber-600">
        <span className="absolute left-3 top-2 text-2xl" aria-hidden="true">✨</span>
        <span className="absolute right-3 top-2 text-2xl" aria-hidden="true">✨</span>
        <span className="absolute bottom-2 left-4 text-2xl" aria-hidden="true">🌟</span>
        <span className="absolute bottom-2 right-4 text-2xl" aria-hidden="true">🌟</span>

        <p className="text-4xl" aria-hidden="true">🏆</p>
        <p className="mt-1 text-sm font-bold uppercase tracking-widest text-amber-900 dark:text-gray-900">
          {t("players.totalLabel")}
        </p>
        <p className="my-1 text-5xl font-extrabold text-green-800 drop-shadow-sm sm:text-6xl dark:text-gray-900">
          ₹{totalRewards.toLocaleString("en-IN")}
        </p>
        <p className="text-sm font-medium text-amber-900 dark:text-gray-900">
          {t("players.totalSub", { players: contributors.length, count: totalContributions })} 🤝
        </p>
      </div>

      {contributors.map((c) => {
        const { name } = c
        return (
          <div
            key={c.id}
            id={c.id}
            className="my-6 scroll-mt-4 rounded-xl border border-amber-300 bg-white/80 p-5 text-center dark:border-amber-700 dark:bg-gray-900/60"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
              {t(`players.list.${c.id}.label`)}
            </p>
            <h3 className="mb-3 text-3xl font-extrabold text-green-700 dark:text-green-400">
              🌟 {name} 🌟
            </h3>
            <p className="mb-5 text-gray-700 dark:text-gray-200">{t(`players.list.${c.id}.intro`)}</p>

            <ol
              aria-label={t("players.contribsBy", { name })}
              className="mx-auto mb-5 max-w-md space-y-2.5 text-left"
            >
              {c.icons.map((icon, index) => (
                <li
                  key={`${c.id}-${index}`}
                  className="flex items-center gap-3 rounded-xl bg-[#F3FBF6] p-3 dark:bg-green-950/60"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B7A4B] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  <div className="min-w-0">
                    <p className="font-bold text-[#0C4E2D] dark:text-green-300">
                      {t(`players.list.${c.id}.items.${index}.title`)}
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t(`players.list.${c.id}.items.${index}.detail`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("players.accepted")}</p>
                <p className="text-3xl font-extrabold text-green-700 dark:text-green-400">{c.icons.length}</p>
              </div>
              <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
                <p className="text-sm text-gray-600 dark:text-gray-300">{t("players.earned")}</p>
                <p className="text-3xl font-extrabold text-amber-700 dark:text-amber-400">
                  ₹{c.reward.toLocaleString("en-IN")}
                </p>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                  {t(`players.list.${c.id}.rewardNote`)}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      <div className="rounded-xl bg-green-100 p-5 text-center dark:bg-green-900/50">
        <h3 className="mb-3 text-xl font-bold text-green-800 dark:text-green-300">
          🎉 {t("players.presentTitle")}
        </h3>
        <p className="mb-3 text-gray-700 dark:text-gray-200">{t("players.presentBody")}</p>
        <p className="font-bold text-green-800 dark:text-green-300">📅 {t("players.presentDate")}</p>
        <p className="font-semibold text-gray-700 dark:text-gray-200">📍 {t("players.presentPlace")}</p>
      </div>

      <p className="mt-6 text-center text-sm italic text-gray-600 dark:text-gray-300">
        <Trans
          t={t}
          i18nKey="players.feedback"
          components={{
            sym: symComponent,
            wa: externalLink("https://wa.me/917558845528?text=Hi%20Rafique%2C%0AMy%20suggestion%20for%20IQRA%20is"),
          }}
        />
      </p>
    </section>
  )
}

export default AboutPlayers
