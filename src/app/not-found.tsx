"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-[72px]">
      <div className="container-yes text-center py-20">
        <div className="text-[120px] md:text-[200px] font-black leading-[0.85] text-near-black/10" style={{ fontFeatureSettings: '"calt"' }}>
          404
        </div>
        <h1 className="text-[40px] md:text-[64px] font-black leading-[0.85] mt-4" style={{ fontFeatureSettings: '"calt"' }}>
          Page Not Found
        </h1>
        <p className="mt-4 text-gray text-[15px] font-medium max-w-md mx-auto" style={{ fontFeatureSettings: '"calt"' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="wise-btn px-7 py-3 bg-wise-green text-dark-green text-[15px] font-semibold rounded-[var(--radius-pill)]" style={{ fontFeatureSettings: '"calt"' }}>
            Back to Home
          </Link>
          <Link href="/initialize" className="wise-btn px-7 py-3 text-near-black text-[15px] font-semibold rounded-[var(--radius-pill)]" style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
