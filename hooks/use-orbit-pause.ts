"use client"

import { useEffect, useRef } from "react"

// Pauses the hero's idle loops (the turning orbit, the breathing halo) while the hero is
// scrolled out of view: sets data-orbit-paused on the section, and globals.css stops them.
// Hidden tabs need nothing here, the browser already stops CSS animations there.
export const useOrbitPause = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-orbit-paused", !entry.isIntersecting)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
