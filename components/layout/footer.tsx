"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

const linkClass =
  "text-muted-foreground underline-offset-4 hover:text-foreground hover:underline dark:text-muted-foreground dark:hover:text-foreground"

const FOOTER_LINKS = [
  { href: "https://creativecommons.org/licenses/by/4.0/", key: "footer.license", external: true },
  { href: "/about", key: "footer.about", external: false },
  { href: "https://github.com/iciso/iqra/blob/main/contribute.md", key: "footer.contribute", external: true },
  { href: "https://github.com/iciso/iqra", key: "footer.github", external: true },
]

const WHATSAPP_HREF = "https://wa.me/917558845528?text=Hi%20Rafique%2C%0AMy%20suggestion%20for%20IQRA%20is"

const accentLink =
  "font-medium text-green-700 underline-offset-4 hover:text-green-900 hover:underline dark:text-green-400 dark:hover:text-green-300"

const WhatsAppIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.47 5.425 1.471 5.489 0 9.957-4.469 9.96-9.96.002-2.661-1.034-5.163-2.919-7.05C17.228 1.728 14.73 .689 12.01 .689 6.518.689 2.053 5.155 2.05 10.649c-.001 2.023.52 3.992 1.516 5.696l-1.02 3.722 3.811-1.005zm13.115-6.303c-.292-.146-1.729-.854-1.997-.951-.267-.099-.463-.146-.659.146-.195.292-.756.951-.926 1.146-.17.195-.341.219-.633.073-.292-.146-1.234-.454-2.35-1.449-.869-.775-1.456-1.732-1.627-2.024-.17-.292-.018-.45.129-.595.132-.131.292-.341.439-.512.146-.17.195-.292.292-.487.097-.195.048-.365-.024-.511-.073-.146-.659-1.586-.902-2.17-.236-.569-.477-.492-.659-.501-.17-.008-.365-.01-.56-.01-.195 0-.512.073-.78.365-.268.292-1.022.999-1.022 2.437 0 1.438 1.047 2.827 1.193 3.022.147.195 2.062 3.149 4.996 4.417.697.302 1.242.483 1.666.618.701.223 1.34.191 1.845.116.563-.083 1.729-.706 1.972-1.389.244-.682.244-1.267.17-1.389-.072-.122-.268-.195-.561-.341z" />
  </svg>
)

/** Site footer, shared by every page through app/layout.tsx. */
const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background text-sm text-muted-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:px-6">
        <p data-footer-row="" className="inline-flex flex-wrap items-center justify-center gap-1.5">
          <span>{t("footer.suggestions")}</span>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 ${accentLink}`}
          >
            <WhatsAppIcon />
            Rafique
          </a>
          <span>{t("footer.at")}</span>
          <a
            href="https://wa.me/917558845528"
            target="_blank"
            rel="noopener noreferrer"
            data-footer-number=""
            className={`whitespace-nowrap ${accentLink}`}
          >
            +91 75588 45528
          </a>
        </p>

        <nav
          aria-label={t("footer.navLabel")}
          data-footer-row=""
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {FOOTER_LINKS.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {t(link.key)}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={linkClass}>
                {t(link.key)}
              </Link>
            ),
          )}
        </nav>

        {/* Keeps the meaning of the old "Iqra 💡 Team AI" footer link: credits for the AI help, on /about. */}
        <p data-footer-row="" className="text-xs">
          {/* Plain <a>, not <Link>: a hash-only change must fire "hashchange" so About opens the right tab. */}
          <a href="/about#ai-credits" data-footer-ai-credits="" className={linkClass}>
            {t("footer.aiCredits")}
          </a>
        </p>

        <p data-footer-row="" className="text-xs">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  )
}

export default Footer
