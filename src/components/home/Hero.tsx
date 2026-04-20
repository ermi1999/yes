"use client"

import Link from "next/link"
import { WorldMap } from "./WorldMap"
import { useTextReveal } from "@/hooks/useTextReveal"

export function Hero() {
  const h1Ref = useTextReveal(0.3)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* World map — tilted globe, fully contained on all devices */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ top: "100px", opacity: 0.85 }}
        >
          <WorldMap />
        </div>
      </div>

      <div className="container-yes relative z-10 text-center py-20 md:py-32">
        {/* Overline */}
        <div className="flex items-center justify-center mb-6 opacity-0 animate-[fadeSlideUp_0.7s_ease_0.3s_forwards]">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
            Employment Infrastructure for Ethiopia
          </span>
        </div>

        {/* H1 — Character-by-character reveal, starts hidden */}
        <h1
          ref={h1Ref}
          className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[126px] font-black leading-[0.85] max-w-5xl mx-auto invisible"
          style={{ fontFeatureSettings: '"calt"' }}
        >
          Hire in Ethiopia. We Know the <span className="hook">Terrain.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-base md:text-lg text-near-black leading-relaxed max-w-xl mx-auto font-medium animate-[fadeSlideUp_0.7s_ease_0.1s_forwards] opacity-0"
          style={{ fontFeatureSettings: '"calt"', letterSpacing: "-0.108px" }}
        >
          Full legal employment, compliant payroll, and vetted talent — managed by a team that's been doing this in Addis Ababa since 2015.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 animate-[fadeSlideUp_0.7s_ease_0.2s_forwards] opacity-0">
          <Link
            href="/initialize"
            className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Talk to Our Team
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/for-talent"
            className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
            style={{
              fontFeatureSettings: '"calt"',
              background: "#e8ebe6",
            }}
          >
            Find a Job
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="mt-16 flex items-center justify-center gap-6 text-[12px] text-warm-dark/50 animate-[fadeSlideUp_0.7s_ease_0.3s_forwards] opacity-0" style={{ fontFeatureSettings: '"calt"' }}>
          <span>Addis Ababa, Ethiopia</span>
          <span className="text-near-black/10">|</span>
          <span>Est. 2015</span>
        </div>
      </div>
    </section>
  )
}
