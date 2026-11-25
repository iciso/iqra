const linkClass =
  "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"

// The ﷻ mark: shown big, in the Arabic font, inside a translated sentence as <sym>ﷻ</sym>.
export const symComponent = <span className="font-arabic text-3xl font-normal align-middle" />

// An outside link inside a translated sentence, e.g. <vercel>Vercel</vercel>.
export const externalLink = (href: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass} />
)

export const mailLink = (address: string) => <a href={`mailto:${address}`} className={linkClass} />
