import { useState } from "react"
import { Link } from "react-router-dom"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { submitForm } from "@/utils/form-submit"
import { useTextReveal } from "@/hooks/useTextReveal"
import { SEOHead } from "@/components/seo/SEOHead"
import { JsonLd } from "@/components/seo/JsonLd"

const suiteNav = [
  { id: "work", label: "Work" },
  { id: "property", label: "Property" },
  { id: "pharma", label: "Pharma" },
  { id: "fund", label: "Fund" },
]

const suites = [
  {
    id: "work",
    name: "Syntropy Work",
    hookWord: "Work",
    status: "live" as const,
    subtitle:
      "The operating system for workforce management. Payroll, compliance, recruitment, and treasury — unified under one roof.",
    modules: ["Recruit", "Payroll", "People", "Comply", "Treasury"],
  },
  {
    id: "property",
    name: "Syntropy Property",
    hookWord: "Property",
    status: "live" as const,
    subtitle:
      "Your buildings run themselves. Rent collection, lease administration, reconciliation, and fiscal reporting — across every property in your portfolio.",
    modules: ["Units", "Tenants", "Leases", "Collect"],
  },
  {
    id: "pharma",
    name: "Syntropy Pharma",
    hookWord: "Pharma",
    status: "live" as const,
    subtitle:
      "End-to-end pharmaceutical distribution. From import to shelf to collection — with batch-level control at every step.",
    modules: ["Import", "Stock", "Distribute", "Collect", "Register"],
  },
  {
    id: "fund",
    name: "Syntropy Fund",
    hookWord: "Fund",
    status: "live" as const,
    subtitle:
      "Large-scale fundraising demands structure. Pledge tracking, payment collection, expense control, and campaign reporting — one system from commitment to close.",
    modules: ["Pledge", "Collect", "Track", "Report"],
  },
]

const securityFeatures = [
  {
    title: "Row-level security",
    description: "Enforced at the database, not the UI.",
  },
  {
    title: "Immutable audit trail",
    description: "User, timestamp, old and new values.",
  },
  {
    title: "Role-based access",
    description: "Granular permissions per module and step.",
  },
  {
    title: "Cloud-native",
    description: "10 to 10,000 users, no infrastructure changes.",
  },
  {
    title: "99.9% uptime",
    description: "Enterprise infrastructure, not shared hosting.",
  },
  {
    title: "Real-time sync",
    description: "Every device, every change, instantly.",
  },
]

export default function Enterprise() {
  const h1Ref = useTextReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const result = await submitForm("enterprise", formData)

    setIsSubmitting(false)

    if (result.ok) {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", platform: "", description: "" })
    } else {
      setSubmitError(result.message)
    }
  }

  const scrollToSuite = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <SEOHead
        title="Your Enterprise Solutions | Syntropy Work · Property · Pharma · Health | YES"
        description="The Syntropy platform suite by YES. Workforce management, commercial property, pharmaceutical distribution, and healthcare — enterprise software built for Ethiopian business realities."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Your Enterprise Solutions (YES) — Syntropy Platform Suite",
        description: "Enterprise software built by YES: Syntropy Work, Syntropy Property, Syntropy Pharma, Syntropy Health, and FundTracker.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Enterprise Software Solutions",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Enterprise Solutions", item: "https://www.yes.et/solutions/enterprise" },
        ],
      }} />
      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="container-yes py-20 md:py-32 text-center">
          <div className="flex items-center justify-center mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Your Enterprise Solutions
            </span>
          </div>
          <h1
            ref={h1Ref}
            className="invisible text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The <span className="hook">Syntropy</span> Suite
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The calm of knowing it's all managed.
          </p>

          {/* Suite Nav Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {suiteNav.map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSuite(nav.id)}
                className="px-4 py-2 text-[13px] font-semibold rounded-[var(--radius-pill)] transition-colors hover:bg-near-black/[0.08]"
                style={{
                  fontFeatureSettings: '"calt"',
                  background: "rgba(14,15,12,0.04)",
                  border: "1px solid rgba(14,15,12,0.08)",
                }}
              >
                {nav.label}
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#custom-request"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              Custom Build
            </a>
          </div>
        </div>
      </section>

      {/* Suite Sections */}
      {suites.map((suite) => (
        <section
          key={suite.id}
          id={suite.id}
          className="section-spacing"
        >
          <div className="container-yes max-w-4xl">
            {/* Live Status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-wise-green" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.1em] text-wise-green"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Live
              </span>
            </div>

            {/* Suite Name */}
            <h2
              className="text-[40px] md:text-[56px] lg:text-[64px] font-black leading-[0.85]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Syntropy <span className="hook">{suite.hookWord}</span>
            </h2>

            {/* Description */}
            <p
              className="mt-6 text-base md:text-lg text-gray leading-relaxed max-w-2xl font-medium"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              {suite.subtitle}
            </p>

            {/* Module Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {suite.modules.map((mod) => (
                <span
                  key={mod}
                  className="px-3.5 py-1.5 text-[12px] font-bold text-near-black/60 bg-white border border-near-black/[0.08] rounded-[8px]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {mod}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/initialize"
                className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-base font-semibold rounded-[var(--radius-pill)]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                See {suite.name} Live
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Enterprise Defaults */}
      <section className="section-spacing bg-near-black">
        <div className="container-yes">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Every Platform
            </span>
            <h2
              className="mt-4 text-[40px] md:text-[56px] lg:text-[64px] font-black leading-[0.85] text-white"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Enterprise <span className="hook">Defaults</span>
            </h2>
            <p
              className="mt-5 text-[15px] text-white/50 max-w-lg mx-auto leading-relaxed font-medium"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Security, compliance, and audit logging ship as defaults — not add-ons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {securityFeatures.map((feature, i) => (
              <div
                key={i}
                className="border border-white/[0.06] bg-white/[0.02] rounded-[var(--radius-standard)] p-5 flex items-start gap-3"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M4 9L7.5 12.5L14 5.5"
                    stroke="var(--color-wise-green)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3
                    className="text-[14px] font-bold text-white leading-snug"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[13px] text-white/70 font-medium leading-relaxed mt-1"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build Request Form */}
      <section id="custom-request" className="section-spacing scroll-mt-[72px]">
        <div className="container-yes max-w-2xl">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Custom Build
            </span>
            <h2
              className="mt-4 text-[32px] md:text-[40px] font-black leading-[0.9]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Need Something <span className="hook">Different</span>?
            </h2>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 rounded-full bg-wise-green/10 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M7 14L12 19L21 9" stroke="var(--color-wise-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="text-[24px] font-black leading-[0.9]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Request Received
              </h3>
              <p
                className="mt-4 text-[15px] text-gray font-medium leading-relaxed max-w-sm mx-auto"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                We'll review your requirements and get back to you within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {submitError && (
                <div
                  className="px-4 py-3 rounded-[var(--radius-standard)] bg-red-50 border border-red-200 text-[13px] text-red-700 font-medium"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {submitError}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="ent-name"
                    className="block text-[13px] font-semibold text-near-black mb-2"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="ent-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                    style={{ fontFeatureSettings: '"calt"' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ent-email"
                    className="block text-[13px] font-semibold text-near-black mb-2"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="ent-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                    style={{ fontFeatureSettings: '"calt"' }}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="ent-company"
                    className="block text-[13px] font-semibold text-near-black mb-2"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="ent-company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                    style={{ fontFeatureSettings: '"calt"' }}
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ent-platform"
                    className="block text-[13px] font-semibold text-near-black mb-2"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="ent-platform"
                    name="platform"
                    required
                    value={formData.platform}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                    style={{ fontFeatureSettings: '"calt"' }}
                    placeholder="e.g. Manufacturing, Logistics, Healthcare"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ent-description"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="ent-description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors resize-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="The operational challenge, workflows involved, and what you're currently using."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="wise-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-base font-semibold rounded-[var(--radius-pill)] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                {!isSubmitting && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-yes">
          <div className="bg-near-black rounded-[var(--radius-section)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "var(--color-light-mint)" }} />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(5, 77, 40, 0.06)" }} />
            <div className="relative z-10">
              <h2
                className="text-[40px] md:text-[64px] font-black leading-[0.85] text-white"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                See It <span className="hook">Live</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Pick a platform. We'll walk you through it.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Request a Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VelvetRope />
    </>
  )
}
