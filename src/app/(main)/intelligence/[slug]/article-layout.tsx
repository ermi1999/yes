"use client"

import Link from "next/link"
import type { ArticleMeta } from "@/lib/articles"

const categoryBadgeClass: Record<string, string> = {
  Legal: "bg-near-black/[0.06] text-near-black/60",
  "Market Entry": "bg-near-black/[0.06] text-near-black",
  "Talent Trends": "bg-wise-green/10 text-dark-green",
  "Capital Markets": "bg-[#7C3AED]/[0.06] text-[#7C3AED]",
  Compliance: "bg-near-black/[0.06] text-near-black/60",
}

export function ArticleLayout({ meta, children }: { meta: ArticleMeta; children: React.ReactNode }) {
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px]">
        <div className="container-yes section-spacing text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className={`inline-flex px-3 py-1 rounded-[var(--radius-pill)] text-[11px] font-bold uppercase tracking-[0.06em] ${categoryBadgeClass[meta.category] || "bg-near-black/[0.06] text-near-black/60"}`}
            >
              {meta.category}
            </span>
            <span className="text-[12px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
              {formattedDate}
            </span>
            <span className="text-[12px] text-gray/50 font-medium" style={{ fontFeatureSettings: '"calt"' }}>
              {meta.readingTime}
            </span>
          </div>

          <h1
            className="text-[32px] sm:text-[44px] md:text-[56px] font-black leading-[0.85] max-w-4xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            {meta.title}
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-gray leading-relaxed max-w-2xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            {meta.description}
          </p>

          {meta.author && (
            <p className="mt-4 text-[13px] text-warm-dark font-semibold" style={{ fontFeatureSettings: '"calt"' }}>
              By {meta.author}
            </p>
          )}
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-20 md:pb-28">
        <div className="container-yes">
          <article className="max-w-3xl mx-auto">
            {children}
          </article>
        </div>
      </section>

      {/* Back */}
      <section className="pb-16">
        <div className="container-yes text-center">
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-wise-green hover:underline"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Intelligence Hub
          </Link>
        </div>
      </section>
    </>
  )
}
