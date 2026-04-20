"use client"

import Link from "next/link"

export function VelvetRope() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "rgba(14, 15, 12, 0.06)", background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 50%, var(--color-surface-tint-deep) 100%)" }}
      aria-labelledby="velvet-rope-heading"
    >
      <div className="container-yes py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="velvet-rope-heading"
            className="text-[40px] md:text-[64px] font-black leading-[0.85] text-near-black"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Where Ethiopia's Top Professionals Get <span className="hook">Matched</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[16px] text-gray leading-relaxed max-w-xl mx-auto font-medium" style={{ fontFeatureSettings: '"calt"' }}>
            YES works with leading companies across Ethiopia and beyond. We don't match
            resumes — we match vetted professionals to meaningful roles. If you have
            the credentials, we want to hear from you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/for-talent"
              className="wise-btn px-8 py-3.5 bg-wise-green text-dark-green text-[14px] font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Apply to Join
            </Link>
            <a
              href="https://palmjobs.et"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 flex-nowrap whitespace-nowrap"
            >
              <span className="text-[13px] text-gray group-hover:text-near-black transition-colors" style={{ fontFeatureSettings: '"calt"' }}>Looking for open roles?</span>
              <span className="text-[13px] font-semibold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>Browse PalmJobs.et</span>
              <span className="text-[10px] text-warm-dark font-medium">by YES</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-near-black/40 group-hover:text-near-black group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
