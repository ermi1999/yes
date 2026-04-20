"use client"

import { useEffect } from "react"
import Lenis from "lenis"

let lenis: Lenis | null = null

export function useLenis() {
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])
}

export function getLenis() {
  return lenis
}
