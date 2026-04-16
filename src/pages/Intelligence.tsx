import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"

const RESOURCES = [
  {
    id: "legal",
    title: "Legal & Regulatory",
    description:
      "Stay current with Ethiopian labor law updates and compliance requirements that affect your workforce operations.",
    topics: [
      "Proclamation 1156/2019 compliance guide",
      "Employment contract requirements",
      "Work permit and visa regulations",
      "Tax obligation updates for employers",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "market-entry",
    title: "Market Entry",
    description:
      "Practical playbooks for companies entering the Ethiopian market, from entity setup to operational launch.",
    topics: [
      "Market entry playbooks",
      "Regulatory pathway mapping",
      "Entity structuring options",
      "Banking and forex considerations",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "talent",
    title: "Talent Trends",
    description:
      "Workforce analytics and compensation benchmarks drawn from our decade of hiring experience across Ethiopia.",
    topics: [
      "Compensation benchmarks by role",
      "Hiring pattern analytics",
      "Skills gap analysis",
      "Workforce retention strategies",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "capital",
    title: "Capital Markets",
    description:
      "Analysis of Ethiopia's evolving investment landscape, including the Ethiopian Securities Exchange and certification pathways.",
    topics: [
      "ESX launch and implications",
      "CISI certification pathways",
      "Foreign investment landscape",
      "Sectoral opportunity mapping",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
] as const

export default function Intelligence() {
  const [email, setEmail] = useState("")
  const [subStatus, setSubStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubStatus("submitting")

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    if (!endpoint) {
      console.error("VITE_FORM_ENDPOINT is not configured")
      setSubStatus("error")
      return
    }

    try {
      const res = await fetch(endpoint, {
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
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Market Intelligence
            </span>
          </div>

          <h1
            className="text-[40px] sm:text-[56px] md:text-[80px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Research & Analysis for Companies Operating in{" "}
            <span className="hook">Ethiopia</span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-gray leading-relaxed max-w-2xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"', letterSpacing: "-0.108px" }}
          >
            Deep market intelligence built from a decade on the ground. We track the regulations,
            workforce trends, and economic shifts so you can make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* ── Resource Cards ── */}
      <section>
        <div className="container-yes section-spacing pt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => (
              <div
                key={resource.id}
                className="surface-card p-8 md:p-10 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-wise-green/10 flex items-center justify-center text-dark-green mb-6">
                  {resource.icon}
                </div>

                {/* Title */}
                <h2
                  className="text-[24px] md:text-[28px] font-black leading-[0.85] mb-3"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {resource.title}
                </h2>

                {/* Description */}
                <p
                  className="text-[15px] text-gray font-medium leading-relaxed mb-6"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {resource.description}
                </p>

                {/* Topics */}
                <ul className="space-y-2.5 mt-auto">
                  {resource.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-[14px] font-semibold text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="hook"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="bg-near-black">
        <div className="container-yes section-spacing">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-[36px] md:text-[56px] font-black leading-[0.85] text-white mb-4"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Stay Ahead of the{" "}
              <span className="hook">Market</span>
            </h2>
            <p
              className="text-[15px] md:text-base text-white/50 font-medium leading-relaxed mb-8"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Get regulatory updates, talent market insights, and economic analysis delivered
              to your inbox. No spam -- just intelligence that matters.
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
                style={{ fontFeatureSettings: '"calt"' }}
              />
              <button
                type="submit"
                disabled={subStatus === "submitting"}
                className="wise-btn w-full sm:w-auto px-7 py-3.5 bg-wise-green text-dark-green text-[15px] font-semibold rounded-[var(--radius-pill)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                {subStatus === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {subStatus === "success" && (
              <p className="mt-4 text-[14px] font-semibold text-wise-green" style={{ fontFeatureSettings: '"calt"' }}>
                You're subscribed. Watch your inbox.
              </p>
            )}
            {subStatus === "error" && (
              <p className="mt-4 text-[14px] font-semibold text-danger-red" style={{ fontFeatureSettings: '"calt"' }}>
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="container-yes section-spacing text-center">
          <h2
            className="text-[36px] md:text-[56px] font-black leading-[0.85] max-w-3xl mx-auto mb-4"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Ready to Move?
          </h2>
          <p
            className="text-base md:text-lg text-gray font-medium max-w-xl mx-auto mb-8"
            style={{ fontFeatureSettings: '"calt"', letterSpacing: "-0.108px" }}
          >
            Let our team put together a tailored market entry strategy based on your specific
            industry, team size, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Start a Strategy Brief
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="mailto:info@yes.et"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
