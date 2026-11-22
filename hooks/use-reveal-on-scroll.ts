"use client"

import { useEffect } from "react"

const STAGGER_MS = 70
const MAX_STAGGER_STEPS = 4
const REVEAL_MS = 480

// Reveals every [data-reveal] element once, as it scrolls into view (fade + 14px rise,
// styled in app/globals.css). The server HTML is fully visible: only after hydration, and
// only for elements still below the fold, is anything hidden, so nothing on screen flashes
// and nothing moves in the layout (opacity and transform only). Reduced motion: no-op.
export const useRevealOnScroll = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const fold = window.innerHeight * 0.95
    const pending = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
      (el) => el.getBoundingClientRect().top > fold,
    )
    if (pending.length === 0) return

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        // Elements that arrive together reveal in document order, a short step apart.
        const arrived = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)
        arrived.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
        arrived.forEach((el, i) => {
          observer.unobserve(el)
          const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS
          el.style.transitionDelay = `${delay}ms`
          el.dataset.reveal = "in"
          timers.push(
            window.setTimeout(() => {
              el.style.transitionDelay = ""
              el.dataset.reveal = "done"
            }, delay + REVEAL_MS + 50),
          )
        })
      },
      { rootMargin: "0px 0px -8% 0px" },
    )

    pending.forEach((el) => {
      el.dataset.reveal = "pending"
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timers.forEach((t) => window.clearTimeout(t))
      // Never leave anything hidden behind.
      pending.forEach((el) => {
        el.style.transitionDelay = ""
        el.dataset.reveal = "done"
      })
    }
  }, [])
}
