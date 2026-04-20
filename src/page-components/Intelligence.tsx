"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useTextReveal } from "@/hooks/useTextReveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { VelvetRope } from "@/components/layout/VelvetRope"

const calt = { fontFeatureSettings: '"calt"' as const }

const RESOURCES = [
  {
    id: "legal",
    category: "Legal",
    badgeClass: "bg-near-black/[0.06] text-near-black/60",
    title: "Navigating Ethiopian Labor Law: A Practical Guide to Proclamation 1156/2019",
    description:
      "Employment contracts, termination rules, severance, and employer obligations — explained for employers operating in Ethiopia.",
  },
  {
    id: "market-entry",
    category: "Market Entry",
    badgeClass: "bg-near-black/[0.06] text-near-black",
    title: "Market Entry Strategies for East Africa: The Ethiopia Playbook",
    description:
      "How to structure your Ethiopian expansion for maximum compliance and speed. Entity vs. EOR, timelines, and costs.",
  },
  {
    id: "talent",
    category: "Talent Trends",
    badgeClass: "bg-wise-green/10 text-dark-green",
    title: "Ethiopia's Emerging Tech Talent Pool: 2025 Data Brief",
    description:
      "Salary benchmarks, skill availability, and hiring timelines for engineering and fintech roles in Addis Ababa.",
  },
  {
    id: "capital",
    category: "Capital Markets",
    badgeClass: "bg-[#7C3AED]/[0.06] text-[#7C3AED]",
    title: "CISI Certification and Ethiopia's Capital Market: What You Need to Know",
    description:
      "Why the Ethiopian Securities Exchange launch changes everything for finance hiring — and how to prepare.",
  },
]

const coverageAreas = [
  {
    title: "Legal",
    description:
      "Employment law analysis, contract templates, and regulatory updates specific to Ethiopian labor legislation and international employer obligations.",
  },
  {
    title: "Market Entry",
    description:
      "Macroeconomic data, sector analyses, and strategic frameworks for companies evaluating or executing their Ethiopia market entry strategy.",
  },
  {
    title: "Talent Trends",
    description:
      "Salary benchmarks, skills availability indices, hiring velocity data, and workforce planning insights drawn from thousands of placements across Ethiopia.",
  },
  {
    title: "Compliance",
    description:
      "Tax compliance calendars, social security guides, audit preparation checklists, and regulatory change alerts to keep your Ethiopia operations compliant.",
  },
]

export default function Intelligence() {
  const h1Ref = useTextReveal()
  const [email, setEmail] = useState("")
  const [subStatus, setSubStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubStatus("submitting")

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (!endpoint) {
      console.error("NEXT_PUBLIC_FORM_ENDPOINT is not configured")
      setSubStatus("error")
      return
    }

    try {
      const res = await fetch(endpoint as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter" }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubStatus("success")
      setEmail("")
    } catch {
      setSubStatus("error")
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[72px]">
        <div className="container-yes section-spacing text-center">
          <div className="flex items-center justify-center mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={calt}
            >
              Research & Resources
            </span>
          </div>

          <h1
            ref={h1Ref}
            className="invisible text-[40px] sm:text-[56px] md:text-[80px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={calt}
          >
            Research & Analysis for Companies Operating in{" "}
            <span className="hook">Ethiopia</span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-gray leading-relaxed max-w-2xl mx-auto font-medium"
            style={{ ...calt, letterSpacing: "-0.108px" }}
          >
            Practical intelligence from a decade on the ground. Not theory — operational knowledge.
          </p>
        </div>
      </section>

      {/* ── Resource Library ── */}
      <section className="section-spacing pt-0">
        <div className="container-yes">
          <SectionHeading
            label="Resource Library"
            subtitle="Guides and reports built from real operational data — not aggregated from third-party sources."
            align="center"
          >
            The <span className="hook">Library</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {RESOURCES.map((resource) => (
              <div
                key={resource.id}
                className="group p-8 md:p-10 flex flex-col rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                {/* Category Badge */}
                <div className="mb-5">
                  <span
                    className={`inline-flex px-3 py-1 rounded-[var(--radius-pill)] text-[11px] font-bold uppercase tracking-[0.06em] ${resource.badgeClass}`}
                  >
                    {resource.category}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-[22px] md:text-[26px] font-black leading-[0.85] mb-3"
                  style={calt}
                >
                  {resource.title}
                </h2>

                {/* Description */}
                <p
                  className="text-[14px] text-warm-dark font-medium leading-[1.7] mb-6"
                  style={calt}
                >
                  {resource.description}
                </p>

                {/* Request Access */}
                <div className="mt-auto">
                  <Link
                    href="/initialize"
                    className="inline-flex items-center gap-1 px-5 py-2.5 text-[14px] font-semibold rounded-[var(--radius-pill)] border border-near-black/12 hover:border-near-black/30 transition-all duration-200"
                    style={calt}
                  >
                    Request Access
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage Areas ── */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Intelligence Areas"
            subtitle="Four domains of intelligence — each informed by a decade of operational data."
            align="center"
          >
            Coverage <span className="hook">Areas</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coverageAreas.map((area) => (
              <div
                key={area.title}
                className="group p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="hook text-[26px] md:text-[30px] block mb-4"
                  style={{ fontWeight: 400 }}
                >
                  {area.title}
                </span>
                <p
                  className="text-[13px] text-warm-dark font-medium leading-[1.6]"
                  style={calt}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="py-20 md:py-28">
        <div className="container-yes">
          <div className="bg-near-black rounded-[var(--radius-section)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "var(--color-light-mint)" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="text-[36px] md:text-[56px] font-black leading-[0.85] text-white mb-4"
                style={calt}
              >
                Stay Ahead of the{" "}
                <span className="hook">Market</span>
              </h2>
              <p
                className="text-[15px] md:text-base text-white/50 font-medium leading-relaxed mb-8"
                style={calt}
              >
                Quarterly intelligence briefs, regulatory updates, and market analysis delivered directly. No spam — just signal.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full sm:flex-1 px-5 py-3.5 text-[15px] font-semibold text-white bg-white/8 rounded-[var(--radius-pill)] border border-white/10 outline-none placeholder:text-white/30 focus:border-wise-green focus:ring-2 focus:ring-wise-green/20 transition-all duration-200"
                  style={calt}
                />
                <button
                  type="submit"
                  disabled={subStatus === "submitting"}
                  className="wise-btn w-full sm:w-auto px-7 py-3.5 bg-wise-green text-dark-green text-[15px] font-semibold rounded-[var(--radius-pill)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  style={calt}
                >
                  {subStatus === "submitting" ? "Submitting..." : "Request Intelligence Access"}
                </button>
              </form>

              {subStatus === "success" && (
                <p className="mt-4 text-[14px] font-semibold text-wise-green" style={calt}>
                  You're subscribed. Watch your inbox.
                </p>
              )}
              {subStatus === "error" && (
                <p className="mt-4 text-[14px] font-semibold text-danger-red" style={calt}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <VelvetRope />
    </>
  )
}
