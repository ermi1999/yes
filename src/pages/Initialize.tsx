import { useState, type FormEvent } from "react"
// react-router-dom not needed - this page uses native form submission

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"] as const

const SERVICES = [
  "EOR",
  "Talent Acquisition",
  "Integrity & Vetting",
  "Payroll & Tax",
  "Training Academy",
  "Enterprise Solutions",
] as const

type FormData = {
  fullName: string
  email: string
  companyName: string
  companySize: string
  services: string[]
  message: string
}

export default function Initialize() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
    services: [],
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function handleServiceToggle(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("submitting")

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    if (!endpoint) {
      console.error("VITE_FORM_ENDPOINT is not configured")
      setStatus("error")
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus("success")
      setForm({ fullName: "", email: "", companyName: "", companySize: "", services: [], message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputBase =
    "w-full px-4 py-3 text-[15px] font-semibold text-near-black bg-white rounded-[var(--radius-standard)] border border-near-black/12 outline-none transition-all duration-200 placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/20"

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
              Strategy Briefing
            </span>
          </div>

          <h1
            className="text-[40px] sm:text-[56px] md:text-[80px] font-black leading-[0.85] max-w-4xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Let's Map Your Ethiopia{" "}
            <span className="hook">Expansion</span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"', letterSpacing: "-0.108px" }}
          >
            Tell us about your goals and we'll build a compliant entry strategy tailored to your team,
            timeline, and budget.
          </p>
        </div>
      </section>

      {/* ── Direct Contact ── */}
      <section>
        <div className="container-yes pb-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] font-semibold text-warm-dark" style={{ fontFeatureSettings: '"calt"' }}>
            <a href="mailto:info@yes.et" className="inline-flex items-center gap-2 hover:text-near-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              info@yes.et
            </a>
            <a href="https://wa.me/251912607246" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-near-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +251 912 607 246
            </a>
            <span className="inline-flex items-center gap-2 text-gray">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon-Fri 8:30 - 5:30 EAT
            </span>
          </div>
        </div>
      </section>

      {/* ── Form + Office Card ── */}
      <section className="pb-0">
        <div className="container-yes section-spacing pt-0">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="surface-card p-8 md:p-10">
              <h2
                className="text-[28px] md:text-[36px] font-black leading-[0.85] mb-8"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Start the Conversation
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[13px] font-bold text-near-black/60 mb-1.5 uppercase tracking-[0.05em]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="Jane Doe"
                    className={inputBase}
                    style={{ fontFeatureSettings: '"calt"' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-bold text-near-black/60 mb-1.5 uppercase tracking-[0.05em]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={inputBase}
                    style={{ fontFeatureSettings: '"calt"' }}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[13px] font-bold text-near-black/60 mb-1.5 uppercase tracking-[0.05em]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Acme Inc."
                    className={inputBase}
                    style={{ fontFeatureSettings: '"calt"' }}
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-[13px] font-bold text-near-black/60 mb-1.5 uppercase tracking-[0.05em]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    required
                    value={form.companySize}
                    onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                    className={`${inputBase} appearance-none cursor-pointer`}
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    {COMPANY_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size} employees
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services */}
              <div className="mt-6">
                <span
                  className="block text-[13px] font-bold text-near-black/60 mb-3 uppercase tracking-[0.05em]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Services of Interest
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((service) => {
                    const isActive = form.services.includes(service)
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-2 text-[13px] font-semibold rounded-[var(--radius-pill)] border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-wise-green text-dark-green border-wise-green"
                            : "bg-transparent text-near-black border-near-black/12 hover:border-near-black/30"
                        }`}
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {service}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-[13px] font-bold text-near-black/60 mb-1.5 uppercase tracking-[0.05em]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your goals in Ethiopia..."
                  className={`${inputBase} resize-none`}
                  style={{ fontFeatureSettings: '"calt"' }}
                />
              </div>

              {/* Submit */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-[15px] font-semibold rounded-[var(--radius-pill)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Brief
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                {status === "success" && (
                  <span className="text-[14px] font-semibold text-positive-green" style={{ fontFeatureSettings: '"calt"' }}>
                    Brief sent successfully. We'll be in touch within 24 hours.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[14px] font-semibold text-danger-red" style={{ fontFeatureSettings: '"calt"' }}>
                    Something went wrong. Please email us directly at info@yes.et.
                  </span>
                )}
              </div>
            </form>

            {/* Office Card */}
            <div className="surface-card p-8 lg:sticky lg:top-[96px]">
              <h3
                className="text-[20px] font-black leading-[0.85] mb-6"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Our Office
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-wise-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-green" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
                      Suite 301E, Bethlehem Plaza
                    </p>
                    <p className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      Kenenisa Avenue, Megenagna
                    </p>
                    <p className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-wise-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-green" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:info@yes.et" className="text-[14px] font-bold text-near-black hover:text-wise-green transition-colors" style={{ fontFeatureSettings: '"calt"' }}>
                      info@yes.et
                    </a>
                    <p className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      General enquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-wise-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-green" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <a href="https://wa.me/251912607246" target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold text-near-black hover:text-wise-green transition-colors" style={{ fontFeatureSettings: '"calt"' }}>
                      +251 912 607 246
                    </a>
                    <p className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      WhatsApp available
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-wise-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-green" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
                      Mon - Fri, 8:30 - 5:30 EAT
                    </p>
                    <p className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      East Africa Time (UTC+3)
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-near-black/8 my-6" />

              <p className="text-[13px] text-gray font-medium leading-relaxed" style={{ fontFeatureSettings: '"calt"' }}>
                Expect a response within one business day. For urgent matters, reach us directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
