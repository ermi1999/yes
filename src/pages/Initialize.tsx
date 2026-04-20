import { useState, type FormEvent } from "react"
import { submitForm } from "@/utils/form-submit"
import { useTextReveal } from "@/hooks/useTextReveal"
import { SEOHead } from "@/components/seo/SEOHead"
import { JsonLd } from "@/components/seo/JsonLd"

const SERVICES = [
  { id: "eor", label: "Employer of Record", desc: "Legal entity & compliance" },
  { id: "talent", label: "Talent Acquisition", desc: "Sourcing & recruitment" },
  { id: "integrity", label: "Integrity & Vetting", desc: "Background verification" },
  { id: "payroll", label: "Payroll & Tax", desc: "ERCA-integrated payroll" },
  { id: "training", label: "Training Academy", desc: "CISI certification" },
  { id: "comprehensive", label: "Comprehensive Package", desc: "Multiple integrated services" },
] as const

const STEP_LABELS = ["Company", "Goals", "Services", "Details"] as const

type FormStep = 1 | 2 | 3 | 4

type FormData = {
  // Step 1
  fullName: string
  email: string
  phone: string
  company: string
  role: string
  // Step 2
  marketEntry: string
  teamSize: string
  timeline: string
  // Step 3
  services: string[]
  priority: string
  // Step 4
  message: string
  referral: string
}

export default function Initialize() {
  const h1Ref = useTextReveal()
  const [step, setStep] = useState<FormStep>(1)
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    marketEntry: "",
    teamSize: "",
    timeline: "",
    services: [],
    priority: "",
    message: "",
    referral: "",
  })
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [submitError, setSubmitError] = useState<string | null>(null)

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleServiceToggle(serviceId: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  function nextStep() {
    if (step < 4) setStep((step + 1) as FormStep)
  }

  function prevStep() {
    if (step > 1) setStep((step - 1) as FormStep)
  }

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return !!(
          form.fullName.trim() &&
          form.email.trim() &&
          isValidEmail(form.email) &&
          form.company.trim()
        )
      case 2:
        return !!form.marketEntry
      case 3:
        return form.services.length > 0
      case 4:
        return true
      default:
        return false
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    setSubmitError(null)

    try {
      const result = await submitForm('diagnostic', { ...form, services: form.services.join(', ') })
      if (result.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setSubmitError(result.message)
      }
    } catch {
      setStatus("error")
      setSubmitError(
        "Network error. Please check your connection and try again."
      )
    }
  }

  const progress = (step / 4) * 100

  const inputBase =
    "w-full px-4 py-3 text-[15px] font-semibold text-near-black bg-white rounded-[var(--radius-standard)] border border-near-black/12 outline-none transition-all duration-200 placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/20"

  const labelBase =
    "mb-1.5 block text-[13px] font-bold tracking-[0.05em] text-near-black/60 uppercase"

  return (
    <>
      <SEOHead
        title="Start Your Ethiopia Expansion | Strategy Briefing | YES"
        description="Begin your Ethiopian expansion with a strategy briefing. Tell us your requirements — headcount, timeline, services needed — and we'll map a clear plan. No commitment."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Start Your Ethiopia Expansion | Strategy Briefing | YES",
        description: "Begin your Ethiopian expansion with a strategy briefing. Tell us your requirements — headcount, timeline, services needed — and we'll map a clear plan. No commitment.",
        url: "https://www.yes.et/initialize",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "YES Employment Solutions",
        description: "On-the-ground employment infrastructure in Ethiopia since 2015. Employer of Record, talent acquisition, background verification, payroll processing, and CISI training services for international companies.",
        url: "https://www.yes.et",
        logo: "https://www.yes.et/favicon.svg",
        image: "https://www.yes.et/favicon.svg",
        telephone: "+251942070707",
        email: "info@yes.et",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite 301E, Bethlehem Plaza, Kenenisa Avenue, Megenagna",
          addressLocality: "Addis Ababa",
          addressRegion: "Addis Ababa",
          addressCountry: "ET",
        },
        openingHours: "Mo-Fr 08:30-17:30",
        priceRange: "$$",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Talk to Us", item: "https://www.yes.et/initialize" },
        ],
      }} />
      {/* ── Hero ── */}
      <section className="pt-[72px]">
        <div className="container-yes section-spacing text-center">
          <div className="mb-6 flex items-center justify-center">
            <span
              className="text-[11px] font-bold tracking-[0.12em] text-near-black/30 uppercase"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Get Started
            </span>
          </div>

          <h1
            ref={h1Ref}
            className="invisible mx-auto max-w-4xl text-[40px] leading-[0.85] font-black sm:text-[56px] md:text-[80px]"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Let's Map Your Ethiopia <span className="hook">Expansion</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed font-medium text-gray md:text-lg"
            style={{ fontFeatureSettings: '"calt"', letterSpacing: "-0.108px" }}
          >
            Tell us what you need. We'll tell you exactly how to get there --
            timeline, costs, compliance requirements, and next steps.
          </p>
        </div>
      </section>

      {/* ── Direct Contact ── */}
      <section>
        <div className="container-yes pb-12">
          <h2
            className="mb-6 text-center text-2xl font-black tracking-tight"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Prefer to talk? So do we.
          </h2>
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] font-semibold text-warm-dark"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            <a
              href="mailto:info@yes.et"
              className="inline-flex items-center gap-2 transition-colors hover:text-near-black"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              info@yes.et
            </a>
            <a
              href="https://wa.me/251912607246"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-near-black"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              WhatsApp
            </a>
            <span className="inline-flex items-center gap-2 text-gray">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon - Fri, 8:30 AM - 5:30 PM EAT
            </span>
          </div>
        </div>
      </section>

      {/* ── Form + Office Card ── */}
      <section className="pb-0">
        <div className="container-yes section-spacing pt-0">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="surface-card p-8 md:p-10"
              style={{ transform: "none" }}
            >
              {status === "success" ? (
                /* ── Success State ── */
                <div className="py-12 text-center">
                  <div
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(34,197,94,0.1)" }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-black tracking-tight"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Briefing Request Received
                  </h3>
                  <p
                    className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed font-medium text-gray"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Our team will review your requirements and respond within one
                    business day with a tailored strategy briefing.
                  </p>
                  <div
                    className="mt-6 flex items-center justify-center gap-2 text-[12px] text-near-black/35"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <span className="inline-block h-[5px] w-[5px] animate-pulse rounded-full bg-[#22C55E]" />
                    Typical response: under 24 hours
                  </div>
                </div>
              ) : (
                <>
                  {/* ── Form Header ── */}
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "var(--color-wise-green)",
                      }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.1em] text-near-black/30"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Strategy Briefing Request
                    </span>
                  </div>

                  {/* ── Progress Bar ── */}
                  <div
                    className="mb-6 h-1 w-full rounded-full"
                    style={{ background: "rgba(14,15,12,0.06)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                        background: "var(--color-near-black)",
                      }}
                    />
                  </div>

                  {/* ── Step Indicator ── */}
                  <div className="mb-8 flex items-center gap-2">
                    {STEP_LABELS.map((label, i) => {
                      const stepNum = (i + 1) as FormStep
                      const isActive = stepNum === step
                      const isDone = stepNum < step
                      return (
                        <div
                          key={label}
                          className="flex flex-1 items-center gap-2"
                        >
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-200"
                            style={{
                              background: isActive
                                ? "var(--color-near-black)"
                                : isDone
                                  ? "#22C55E"
                                  : "rgba(14,15,12,0.06)",
                              color:
                                isActive || isDone
                                  ? "#fff"
                                  : "rgba(14,15,12,0.35)",
                              fontFeatureSettings: '"calt"',
                            }}
                          >
                            {isDone ? "\u2713" : stepNum}
                          </div>
                          <span
                            className="hidden text-[11px] font-semibold uppercase tracking-[0.06em] sm:block"
                            style={{
                              color: isActive
                                ? "var(--color-near-black)"
                                : "rgba(14,15,12,0.3)",
                              fontFeatureSettings: '"calt"',
                            }}
                          >
                            {label}
                          </span>
                          {i < 3 && (
                            <div
                              className="hidden h-px flex-1 sm:block"
                              style={{
                                background: isDone
                                  ? "#22C55E"
                                  : "rgba(14,15,12,0.08)",
                              }}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* ── Step Content ── */}
                  <div style={{ minHeight: "280px" }}>
                    {/* Step 1: Company */}
                    {step === 1 && (
                      <div className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="fullName"
                              className={labelBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            >
                              Full Name{" "}
                              <span className="text-wise-green">*</span>
                            </label>
                            <input
                              id="fullName"
                              type="text"
                              required
                              value={form.fullName}
                              onChange={(e) =>
                                updateField("fullName", e.target.value)
                              }
                              placeholder="Your full name"
                              className={inputBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className={labelBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            >
                              Work Email{" "}
                              <span className="text-wise-green">*</span>
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                updateField("email", e.target.value)
                              }
                              placeholder="you@company.com"
                              className={inputBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="phone"
                              className={labelBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            >
                              Phone
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              value={form.phone}
                              onChange={(e) =>
                                updateField("phone", e.target.value)
                              }
                              placeholder="+251 9XX XXX XXXX"
                              className={inputBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="company"
                              className={labelBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            >
                              Company{" "}
                              <span className="text-wise-green">*</span>
                            </label>
                            <input
                              id="company"
                              type="text"
                              required
                              value={form.company}
                              onChange={(e) =>
                                updateField("company", e.target.value)
                              }
                              placeholder="Your company name"
                              className={inputBase}
                              style={{ fontFeatureSettings: '"calt"' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="role"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Your Role
                          </label>
                          <select
                            id="role"
                            value={form.role}
                            onChange={(e) =>
                              updateField("role", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.role
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="c-suite">C-Suite / Executive</option>
                            <option value="hr">HR / People Operations</option>
                            <option value="legal">Legal / Compliance</option>
                            <option value="operations">Operations</option>
                            <option value="finance">Finance</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Goals */}
                    {step === 2 && (
                      <div className="flex flex-col gap-5">
                        <div>
                          <label
                            htmlFor="marketEntry"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Market Entry Status{" "}
                            <span className="text-wise-green">*</span>
                          </label>
                          <select
                            id="marketEntry"
                            required
                            value={form.marketEntry}
                            onChange={(e) =>
                              updateField("marketEntry", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.marketEntry
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="exploring">
                              Exploring -- researching the Ethiopian market
                            </option>
                            <option value="committed">
                              Committed -- ready to hire within 3 months
                            </option>
                            <option value="active">
                              Active -- already operating, need support
                            </option>
                            <option value="expanding">
                              Expanding -- scaling existing operations
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="teamSize"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Expected Team Size (12 months)
                          </label>
                          <select
                            id="teamSize"
                            value={form.teamSize}
                            onChange={(e) =>
                              updateField("teamSize", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.teamSize
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="1-5">1-5 employees</option>
                            <option value="6-20">6-20 employees</option>
                            <option value="21-50">21-50 employees</option>
                            <option value="50+">50+ employees</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="timeline"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Target Timeline
                          </label>
                          <select
                            id="timeline"
                            value={form.timeline}
                            onChange={(e) =>
                              updateField("timeline", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.timeline
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="immediate">
                              Immediate -- within 30 days
                            </option>
                            <option value="1-3months">1-3 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="6+months">
                              6+ months / exploratory
                            </option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Services */}
                    {step === 3 && (
                      <div className="flex flex-col gap-5">
                        <div>
                          <span
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Select Services{" "}
                            <span className="text-wise-green">*</span>
                          </span>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {SERVICES.map((service) => {
                              const isActive = form.services.includes(
                                service.id
                              )
                              return (
                                <button
                                  key={service.id}
                                  type="button"
                                  onClick={() =>
                                    handleServiceToggle(service.id)
                                  }
                                  className={`cursor-pointer rounded-[var(--radius-pill)] border px-4 py-2.5 text-left transition-all duration-200 ${
                                    isActive
                                      ? "border-wise-green bg-wise-green text-dark-green"
                                      : "border-near-black/12 bg-transparent text-near-black hover:border-near-black/30"
                                  }`}
                                  style={{ fontFeatureSettings: '"calt"' }}
                                >
                                  <span className="block text-[13px] font-semibold">
                                    {service.label}
                                  </span>
                                  <span
                                    className={`block text-[11px] ${isActive ? "text-dark-green/70" : "text-near-black/40"}`}
                                  >
                                    {service.desc}
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="priority"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Highest Priority
                          </label>
                          <select
                            id="priority"
                            value={form.priority}
                            onChange={(e) =>
                              updateField("priority", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.priority
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="compliance">
                              Compliance & risk reduction
                            </option>
                            <option value="speed">Speed to hire</option>
                            <option value="cost">Cost optimization</option>
                            <option value="quality">Talent quality</option>
                            <option value="scale">Scale & capacity</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Details */}
                    {step === 4 && (
                      <div className="flex flex-col gap-5">
                        <div>
                          <label
                            htmlFor="message"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            Additional Details
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={form.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                            placeholder="Tell us about your expansion plans, specific requirements, questions, or anything else that would help us prepare your strategy briefing..."
                            className={`${inputBase} min-h-[140px] resize-y`}
                            style={{ fontFeatureSettings: '"calt"' }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="referral"
                            className={labelBase}
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            How did you hear about YES?
                          </label>
                          <select
                            id="referral"
                            value={form.referral}
                            onChange={(e) =>
                              updateField("referral", e.target.value)
                            }
                            className={`${inputBase} cursor-pointer appearance-none`}
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: form.referral
                                ? undefined
                                : "rgba(14,15,12,0.35)",
                            }}
                          >
                            <option value="" disabled>
                              Select...
                            </option>
                            <option value="search">
                              Google / Search engine
                            </option>
                            <option value="referral">
                              Referral from a colleague
                            </option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="event">
                              Industry event or conference
                            </option>
                            <option value="media">
                              News / media coverage
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Navigation ── */}
                  <div
                    className="mt-8 flex items-center justify-between pt-6"
                    style={{
                      borderTop: "1px solid rgba(14,15,12,0.06)",
                    }}
                  >
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-[13px] font-semibold transition-all"
                        style={{
                          color: "rgba(14,15,12,0.55)",
                          background: "rgba(14,15,12,0.04)",
                          fontFeatureSettings: '"calt"',
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M13 8H3M3 8L7 4M3 8L7 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceed()}
                        className="wise-btn inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-pill)] px-7 py-3 text-[15px] font-semibold transition-all disabled:cursor-not-allowed"
                        style={{
                          background: canProceed()
                            ? "var(--color-wise-green)"
                            : "rgba(14,15,12,0.1)",
                          color: canProceed()
                            ? "var(--color-dark-green)"
                            : "rgba(14,15,12,0.3)",
                          fontFeatureSettings: '"calt"',
                        }}
                      >
                        Continue
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8H13M13 8L9 4M13 8L9 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="wise-btn inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-pill)] px-7 py-3 text-[15px] font-semibold transition-all disabled:cursor-not-allowed"
                        style={{
                          background: "var(--color-wise-green)",
                          color: "var(--color-dark-green)",
                          opacity: status === "submitting" ? 0.7 : 1,
                          fontFeatureSettings: '"calt"',
                        }}
                      >
                        {status === "submitting" ? (
                          <>
                            <svg
                              className="h-4 w-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                className="opacity-25"
                              />
                              <path
                                d="M4 12a8 8 0 018-8"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="opacity-75"
                              />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Send Briefing Request
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 8H13M13 8L9 4M13 8L9 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* ── Error Banner ── */}
                  {submitError && (
                    <div
                      className="mt-4 rounded-xl px-4 py-3 text-[13px] font-medium"
                      style={{
                        background: "rgba(239,68,68,0.08)",
                        color: "#DC2626",
                        fontFeatureSettings: '"calt"',
                      }}
                    >
                      {submitError}{" "}
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="cursor-pointer underline"
                      >
                        Dismiss
                      </button>
                    </div>
                  )}

                  {/* ── Privacy Note ── */}
                  <p
                    className="mt-4 text-[11px] leading-relaxed text-near-black/30"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="underline">
                      privacy policy
                    </a>
                    . We will never share your information with third parties.
                  </p>
                </>
              )}
            </form>

            {/* Office Card */}
            <div className="surface-card p-8 lg:sticky lg:top-[96px]">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="text-[11px] font-bold tracking-[0.1em] text-near-black/30 uppercase"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Headquarters
                </span>
              </div>
              <h3
                className="mb-6 text-[20px] leading-[0.85] font-black"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                YES | Your Employment Solutions
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wise-green/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-dark-green"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-bold text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Suite 301E, Bethlehem Plaza
                    </p>
                    <p
                      className="text-[13px] font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Kenenisa Avenue, Megenagna
                    </p>
                    <p
                      className="text-[13px] font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wise-green/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-dark-green"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:info@yes.et"
                      className="text-[14px] font-bold text-near-black transition-colors hover:text-wise-green"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      info@yes.et
                    </a>
                    <p
                      className="text-[13px] font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      General enquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wise-green/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-dark-green"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/251912607246"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-bold text-near-black transition-colors hover:text-wise-green"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      +251 912 607 246
                    </a>
                    <p
                      className="text-[13px] font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      WhatsApp available
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wise-green/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-dark-green"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-bold text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Mon - Fri: 8:30 AM - 5:30 PM EAT
                    </p>
                    <p
                      className="text-[13px] font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      East Africa Time (UTC+3)
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-near-black/8" />

              <p
                className="text-[13px] leading-relaxed font-medium text-gray"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Expect a response within one business day. For urgent matters,
                reach us directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
