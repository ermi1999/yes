"use client"

import { useEffect, useRef, useState } from "react"

/* ═══════════════════════════════════════════════════════════
   Data Visualization Components for MDX Articles
   Pure CSS + minimal JS — no chart library dependencies
   ═══════════════════════════════════════════════════════════ */

// ── Stat Grid: Large headline numbers ──
export function StatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {children}
    </div>
  )
}

export function Stat({
  value,
  label,
  trend,
  trendLabel,
}: {
  value: string
  label: string
  trend?: "up" | "down" | "neutral"
  trendLabel?: string
}) {
  const trendColor =
    trend === "up" ? "text-positive-green" :
    trend === "down" ? "text-danger-red" :
    "text-gray"
  const trendArrow =
    trend === "up" ? "↑" :
    trend === "down" ? "↓" :
    "→"

  return (
    <div
      className="rounded-[var(--radius-card)] p-5 md:p-6"
      style={{
        background: "rgba(14, 15, 12, 0.02)",
        border: "1px solid rgba(14, 15, 12, 0.06)",
      }}
    >
      <div
        className="text-[32px] md:text-[40px] font-black leading-[0.85] text-near-black"
        style={{ fontFeatureSettings: '"calt"' }}
      >
        {value}
      </div>
      <div
        className="mt-2.5 text-[12px] text-gray font-semibold uppercase tracking-[0.04em]"
        style={{ fontFeatureSettings: '"calt"' }}
      >
        {label}
      </div>
      {trend && trendLabel && (
        <div className={`mt-2 text-[12px] font-bold ${trendColor}`} style={{ fontFeatureSettings: '"calt"' }}>
          {trendArrow} {trendLabel}
        </div>
      )}
    </div>
  )
}

// ── Horizontal Bar Chart ──
export function BarChart({
  title,
  data,
  unit = "",
  maxValue,
  accentIndex,
}: {
  title?: string
  data: { label: string; value: number; sublabel?: string }[]
  unit?: string
  maxValue?: number
  accentIndex?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const max = maxValue || Math.max(...data.map((d) => d.value)) * 1.1

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="my-10">
      {title && (
        <h4
          className="text-[14px] font-bold text-near-black/40 uppercase tracking-[0.06em] mb-5"
          style={{ fontFeatureSettings: '"calt"' }}
        >
          {title}
        </h4>
      )}
      <div className="space-y-3">
        {data.map((item, i) => {
          const pct = (item.value / max) * 100
          const isAccent = accentIndex === i
          return (
            <div key={item.label} className="group">
              <div className="flex items-baseline justify-between mb-1.5">
                <span
                  className={`text-[13px] font-semibold ${isAccent ? "text-near-black" : "text-warm-dark"}`}
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {item.label}
                  {item.sublabel && (
                    <span className="ml-2 text-[11px] text-gray font-medium">{item.sublabel}</span>
                  )}
                </span>
                <span
                  className={`text-[14px] font-black tabular-nums ${isAccent ? "text-near-black" : "text-warm-dark"}`}
                  style={{ fontFeatureSettings: '"calt", "tnum"' }}
                >
                  {item.value.toLocaleString()}{unit}
                </span>
              </div>
              <div className="h-[28px] rounded-[6px] overflow-hidden" style={{ background: "rgba(14, 15, 12, 0.04)" }}>
                <div
                  className="h-full rounded-[6px] transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${pct}%` : "0%",
                    background: isAccent
                      ? "var(--color-wise-green)"
                      : "rgba(14, 15, 12, 0.10)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Comparison Row ──
export function CompareRow({
  label,
  valueA,
  valueB,
  unitA = "",
  unitB = "",
  highlight,
}: {
  label: string
  valueA: string
  valueB: string
  unitA?: string
  unitB?: string
  highlight?: "a" | "b"
}) {
  return (
    <div
      className="grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3.5 px-4"
      style={{ borderBottom: "1px solid rgba(14, 15, 12, 0.05)" }}
    >
      <span className="text-[13px] font-medium text-warm-dark" style={{ fontFeatureSettings: '"calt"' }}>
        {label}
      </span>
      <span
        className={`text-[14px] font-black text-right tabular-nums min-w-[80px] ${highlight === "a" ? "text-near-black" : "text-warm-dark/60"}`}
        style={{ fontFeatureSettings: '"calt", "tnum"' }}
      >
        {valueA}{unitA}
      </span>
      <span
        className={`text-[14px] font-black text-right tabular-nums min-w-[80px] ${highlight === "b" ? "text-near-black" : "text-warm-dark/60"}`}
        style={{ fontFeatureSettings: '"calt", "tnum"' }}
      >
        {valueB}{unitB}
      </span>
    </div>
  )
}

export function CompareTable({
  headerA,
  headerB,
  children,
}: {
  headerA: string
  headerB: string
  children: React.ReactNode
}) {
  return (
    <div className="my-10 rounded-[var(--radius-card)] overflow-hidden" style={{ border: "1px solid rgba(14, 15, 12, 0.08)" }}>
      <div
        className="grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3 px-4"
        style={{ background: "rgba(14, 15, 12, 0.03)" }}
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-near-black/30" style={{ fontFeatureSettings: '"calt"' }}>
          Role / Sector
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-near-black/30 text-right min-w-[80px]" style={{ fontFeatureSettings: '"calt"' }}>
          {headerA}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-near-black/30 text-right min-w-[80px]" style={{ fontFeatureSettings: '"calt"' }}>
          {headerB}
        </span>
      </div>
      {children}
    </div>
  )
}

// ── Callout / Insight Box ──
export function Callout({
  type = "insight",
  title,
  children,
}: {
  type?: "insight" | "warning" | "methodology"
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    insight: {
      bg: "var(--color-light-mint)",
      border: "var(--color-wise-green)",
      defaultTitle: "Key Insight",
    },
    warning: {
      bg: "rgba(208, 50, 56, 0.04)",
      border: "var(--color-danger-red)",
      defaultTitle: "Important Note",
    },
    methodology: {
      bg: "rgba(14, 15, 12, 0.02)",
      border: "rgba(14, 15, 12, 0.15)",
      defaultTitle: "Methodology",
    },
  }

  const s = styles[type]

  return (
    <div
      className="my-10 rounded-[var(--radius-card)] p-6 md:p-8"
      style={{
        background: s.bg,
        borderLeft: `3px solid ${s.border}`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[12px] font-bold uppercase tracking-[0.06em] text-near-black/50"
          style={{ fontFeatureSettings: '"calt"' }}
        >
          {title || s.defaultTitle}
        </span>
      </div>
      <div className="text-[14px] text-warm-dark font-medium leading-[1.7]" style={{ fontFeatureSettings: '"calt"' }}>
        {children}
      </div>
    </div>
  )
}

// ── Salary Band Visualizer ──
export function SalaryBand({
  role,
  min,
  median,
  max,
  currency = "ETB",
}: {
  role: string
  min: number
  median: number
  max: number
  currency?: string
}) {
  const range = max - min
  const medianPct = ((median - min) / range) * 100

  return (
    <div className="my-4">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[13px] font-semibold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
          {role}
        </span>
        <span className="text-[12px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
          Median: {currency} {median.toLocaleString()}
        </span>
      </div>
      <div className="relative h-[20px]">
        {/* Full range bar */}
        <div
          className="absolute inset-y-0 rounded-[4px]"
          style={{
            left: "0%",
            right: "0%",
            background: "rgba(14, 15, 12, 0.05)",
          }}
        />
        {/* Interquartile range (middle 50%) */}
        <div
          className="absolute inset-y-0 rounded-[4px]"
          style={{
            left: "25%",
            right: "25%",
            background: "rgba(14, 15, 12, 0.08)",
          }}
        />
        {/* Median marker */}
        <div
          className="absolute top-0 bottom-0 w-[3px] rounded-full"
          style={{
            left: `${medianPct}%`,
            background: "var(--color-wise-green)",
            transform: "translateX(-50%)",
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[11px] text-gray/60 tabular-nums" style={{ fontFeatureSettings: '"calt", "tnum"' }}>
          {currency} {min.toLocaleString()}
        </span>
        <span className="text-[11px] text-gray/60 tabular-nums" style={{ fontFeatureSettings: '"calt", "tnum"' }}>
          {currency} {max.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export function SalaryBandGroup({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="my-10">
      {title && (
        <h4
          className="text-[14px] font-bold text-near-black/40 uppercase tracking-[0.06em] mb-5"
          style={{ fontFeatureSettings: '"calt"' }}
        >
          {title}
        </h4>
      )}
      <div
        className="rounded-[var(--radius-card)] p-5 md:p-6 space-y-5"
        style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
      >
        {children}
      </div>
    </div>
  )
}

// ── Donut / Percentage Ring ──
export function DonutGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
      {children}
    </div>
  )
}

export function Donut({
  value,
  label,
  color,
}: {
  value: number
  label: string
  color?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const circumference = 2 * Math.PI * 36
  const offset = circumference - (value / 100) * circumference

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-[88px] h-[88px]">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="rgba(14, 15, 12, 0.05)"
            strokeWidth="6"
          />
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke={color || "var(--color-wise-green)"}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={visible ? offset : circumference}
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[18px] font-black text-near-black"
            style={{ fontFeatureSettings: '"calt", "tnum"' }}
          >
            {value}%
          </span>
        </div>
      </div>
      <span
        className="mt-2.5 text-[12px] text-gray font-semibold leading-tight"
        style={{ fontFeatureSettings: '"calt"' }}
      >
        {label}
      </span>
    </div>
  )
}

// ── Pull Quote (editorial style) ──
export function PullQuote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <div className="my-12 py-8 border-y border-near-black/[0.06]">
      <p
        className="text-[24px] md:text-[32px] font-black leading-[0.9] text-near-black text-center max-w-2xl mx-auto"
        style={{ fontFeatureSettings: '"calt"' }}
      >
        {children}
      </p>
      {source && (
        <p className="mt-4 text-[12px] text-gray font-semibold text-center uppercase tracking-[0.06em]" style={{ fontFeatureSettings: '"calt"' }}>
          — {source}
        </p>
      )}
    </div>
  )
}
