"use client"

import { StatCounter } from "@/components/ui/StatCounter"

const countries = ["US", "China", "India", "South Africa", "Kenya", "Netherlands", "UK", "France"]

export function TrustedBy() {
  return (
    <section className="section-spacing" style={{ borderTop: "1px solid rgba(14, 15, 12, 0.06)", borderBottom: "1px solid rgba(14, 15, 12, 0.06)" }}>
      <div className="container-yes">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-warm-dark/40" style={{ fontFeatureSettings: '"calt"' }}>
            Trusted by enterprises across the globe
          </span>
        </div>

        {/* Global Client Countries */}
        <div className="flex items-center justify-center gap-x-3 gap-y-2 mb-16 flex-wrap max-w-2xl mx-auto">
          {countries.map((country) => (
            <span
              key={country}
              className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-pill)] text-[12px] font-semibold text-near-black/50"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              {country}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter value={20000} suffix="+" label="Vetted Specialists" proofSource="Rigorously assessed across 40+ disciplines" />
          <StatCounter value={200} suffix="+" label="Enterprise Partners" proofSource="Global companies across sectors" />
          <StatCounter value={10} suffix="+" label="Years in Market" proofSource="Since 2015, Addis Ababa" />
          <StatCounter value={14} label="Day Average Time-to-Hire" proofSource="2024 placement median" />
        </div>
      </div>
    </section>
  )
}
