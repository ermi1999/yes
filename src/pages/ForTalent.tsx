import { useState, type FormEvent, type ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

/* ── Why Join Data ── */
const whyCards = [
  {
    title: "Priority Matching",
    description: "Your profile is actively surfaced to clients with matching requirements. No cold applications — your credentials work for you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Credentials That Matter",
    description: "Access to CISI certification, upskilling, and globally recognized credentials that distinguish you in a competitive market.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 12V18M10 12L6 18M10 12L14 18M4 6H16M5 2H15L16 6H4L5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Your Name Carries Weight",
    description: "Backed by YES vetting, your application carries institutional credibility. Clients trust the standard we maintain.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2V18M10 2L4 8M10 2L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* ── How It Works Steps ── */
const steps = [
  { step: "01", title: "Apply", duration: "5-10 minutes", description: "Complete the application form below with your professional details and upload your resume." },
  { step: "02", title: "Vetting", duration: "5-7 business days", description: "Our integrity division verifies your credentials, references, and professional background." },
  { step: "03", title: "Matching", duration: "Targeted opportunities", description: "Your verified profile is actively matched against client requirements across our network." },
  { step: "04", title: "Placement & Support", duration: "Full-service onboarding", description: "From offer negotiation to onboarding, we support you through the entire placement process." },
]

/* ── FAQ Data ── */
const faqs = [
  {
    q: "What is the Executive Roster?",
    a: "The Executive Roster is YES's curated pool of pre-vetted professionals. Members receive priority matching with our enterprise clients, access to upskilling opportunities, and the institutional backing of YES's reputation.",
  },
  {
    q: "Is there a fee to join the Roster?",
    a: "No. There is no cost to apply or to be listed on the Executive Roster. YES is compensated by client companies when a placement is made.",
  },
  {
    q: "How long does the vetting process take?",
    a: "Typically 5-7 business days. Our integrity division conducts credential verification, reference checks, and background screening to maintain the quality standard our clients expect.",
  },
  {
    q: "What types of roles are available?",
    a: "We match professionals across 40+ disciplines including finance, technology, operations, legal, engineering, healthcare, and more. Roles range from mid-level to C-suite positions.",
  },
  {
    q: "Can I apply if I'm based outside Ethiopia?",
    a: "Yes. We work with professionals based in Addis Ababa, regional Ethiopia, and abroad. Many of our client companies seek diaspora talent for both local and remote positions.",
  },
  {
    q: "What happens after I'm placed?",
    a: "YES provides full-service onboarding support including contract facilitation, payroll setup through our EOR services if applicable, and ongoing career support throughout your engagement.",
  },
]

/* ── Select Options ── */
const locationOptions = [
  { label: "Addis Ababa", value: "addis-ababa" },
  { label: "Regional Ethiopia", value: "regional-ethiopia" },
  { label: "Abroad", value: "abroad" },
]

const roleLevelOptions = [
  { label: "Entry", value: "entry" },
  { label: "Mid", value: "mid" },
  { label: "Senior", value: "senior" },
  { label: "Executive / C-Suite", value: "executive" },
]

const sectorOptions = [
  { label: "Finance & Banking", value: "finance-banking" },
  { label: "Tech & IT", value: "tech-it" },
  { label: "Operations & Supply Chain", value: "operations-supply-chain" },
  { label: "Legal & Compliance", value: "legal-compliance" },
  { label: "Engineering", value: "engineering" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Marketing & Communications", value: "marketing-communications" },
  { label: "Other", value: "other" },
]

const experienceOptions = [
  { label: "0-2 years", value: "0-2" },
  { label: "3-5 years", value: "3-5" },
  { label: "6-10 years", value: "6-10" },
  { label: "11-15 years", value: "11-15" },
  { label: "15+ years", value: "15+" },
]

/* ── Form State Shape ── */
interface FormState {
  fullName: string
  email: string
  phone: string
  linkedIn: string
  location: string
  roleLevel: string
  sector: string
  experience: string
  resume: File | null
  message: string
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  linkedIn: "",
  location: "",
  roleLevel: "",
  sector: "",
  experience: "",
  resume: null,
  message: "",
}

/* ── Reusable input style ── */
const inputClass =
  "w-full px-4 py-3 rounded-[var(--radius-standard)] border text-[14px] font-medium text-near-black placeholder:text-gray/50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green"
const inputBorderStyle = { borderColor: "rgba(14, 15, 12, 0.12)", fontFeatureSettings: '"calt"' as const }
const selectClass =
  "w-full px-4 py-3 rounded-[var(--radius-standard)] border text-[14px] font-medium text-near-black bg-white appearance-none cursor-pointer transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green"
const labelClass = "block text-[13px] font-bold text-near-black mb-1.5"

export default function ForTalent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setForm((prev) => ({ ...prev, resume: file }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // In production this would POST to an API endpoint
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-[72px]">
        <div className="container-yes relative z-10 text-center py-20 md:py-32">
          <div className="flex items-center justify-center mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              The Executive Roster
            </span>
          </div>

          <h1
            className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Your Career Deserves an{" "}
            <span className="hook">Infrastructure</span>
          </h1>

          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The Executive Roster is YES's curated network of pre-vetted professionals.
            Get priority matching, institutional credibility, and access to Ethiopia's
            top employers.
          </p>

          <div className="mt-10">
            <a
              href="#apply"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Why Join"
            subtitle="What the Executive Roster gives you that a job board never will."
            align="center"
          >
            Built for <span className="hook">Professionals</span>
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {whyCards.map((card, i) => (
              <button
                key={card.title}
                className="surface-card p-6 md:p-8 text-left cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                aria-expanded={expandedCard === i}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-dark-green"
                  style={{ background: "var(--color-light-mint)" }}
                >
                  {card.icon}
                </div>
                <h3
                  className="text-lg font-black text-near-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {card.title}
                </h3>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: expandedCard === i ? "200px" : "0px",
                    opacity: expandedCard === i ? 1 : 0,
                  }}
                >
                  <p
                    className="mt-3 text-[13px] text-gray leading-[1.6] font-medium"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {card.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span
                    className="text-[12px] font-semibold text-wise-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {expandedCard === i ? "Less" : "Learn more"}
                  </span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="text-wise-green transition-transform duration-200"
                    style={{ transform: expandedCard === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7f3 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Process"
            subtitle="From application to placement — here's what to expect."
            align="center"
          >
            How It <span className="hook">Works</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="surface-card p-6 relative overflow-hidden">
                <span
                  className="text-[64px] font-black leading-none text-near-black/[0.03] absolute top-2 right-4 select-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                  aria-hidden="true"
                >
                  {s.step}
                </span>
                <div className="relative z-10">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.1em] text-wise-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Step {s.step}
                  </span>
                  <h3
                    className="mt-2 text-xl font-black text-near-black leading-[0.85]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-1 text-[12px] font-semibold text-positive-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {s.duration}
                  </p>
                  <p
                    className="mt-3 text-[13px] text-gray leading-[1.6] font-medium"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Apply"
            subtitle="Join the Executive Roster. It takes 5-10 minutes."
            align="center"
          >
            Your Application <span className="hook">Starts Here</span>
          </SectionHeading>

          <div className="max-w-2xl mx-auto mt-12">
            {submitted ? (
              <div className="surface-card p-10 md:p-14 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ background: "var(--color-light-mint)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M7 14L12 19L21 9" stroke="var(--color-wise-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-black text-near-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Application Received
                </h3>
                <p
                  className="mt-4 text-[15px] text-gray leading-[1.7] font-medium max-w-md mx-auto"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Thank you, {form.fullName || "there"}. Our team will review your application and
                  begin the vetting process. Expect to hear from us within 5-7 business days.
                </p>
                <Link
                  to="/"
                  className="wise-btn inline-block mt-8 px-8 py-3.5 bg-wise-green text-dark-green text-[14px] font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="surface-card p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className={labelClass} style={inputBorderStyle}>Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Abebe Kebede"
                      className={inputClass}
                      style={inputBorderStyle}
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass} style={inputBorderStyle}>Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                      style={inputBorderStyle}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass} style={inputBorderStyle}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+251 9XX XXX XXXX"
                      className={inputClass}
                      style={inputBorderStyle}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="sm:col-span-2">
                    <label htmlFor="linkedIn" className={labelClass} style={inputBorderStyle}>LinkedIn URL</label>
                    <input
                      id="linkedIn"
                      type="url"
                      placeholder="https://linkedin.com/in/your-profile"
                      className={inputClass}
                      style={inputBorderStyle}
                      value={form.linkedIn}
                      onChange={(e) => updateField("linkedIn", e.target.value)}
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className={labelClass} style={inputBorderStyle}>Current Location</label>
                    <div className="relative">
                      <select
                        id="location"
                        required
                        className={selectClass}
                        style={inputBorderStyle}
                        value={form.location}
                        onChange={(e) => updateField("location", e.target.value)}
                      >
                        <option value="" disabled>Select location</option>
                        {locationOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Role Level */}
                  <div>
                    <label htmlFor="roleLevel" className={labelClass} style={inputBorderStyle}>Desired Role Level</label>
                    <div className="relative">
                      <select
                        id="roleLevel"
                        required
                        className={selectClass}
                        style={inputBorderStyle}
                        value={form.roleLevel}
                        onChange={(e) => updateField("roleLevel", e.target.value)}
                      >
                        <option value="" disabled>Select level</option>
                        {roleLevelOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Sector */}
                  <div>
                    <label htmlFor="sector" className={labelClass} style={inputBorderStyle}>Primary Sector</label>
                    <div className="relative">
                      <select
                        id="sector"
                        required
                        className={selectClass}
                        style={inputBorderStyle}
                        value={form.sector}
                        onChange={(e) => updateField("sector", e.target.value)}
                      >
                        <option value="" disabled>Select sector</option>
                        {sectorOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label htmlFor="experience" className={labelClass} style={inputBorderStyle}>Years of Experience</label>
                    <div className="relative">
                      <select
                        id="experience"
                        required
                        className={selectClass}
                        style={inputBorderStyle}
                        value={form.experience}
                        onChange={(e) => updateField("experience", e.target.value)}
                      >
                        <option value="" disabled>Select range</option>
                        {experienceOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="sm:col-span-2">
                    <label htmlFor="resume" className={labelClass} style={inputBorderStyle}>Resume</label>
                    <div
                      className="relative rounded-[var(--radius-standard)] border border-dashed p-6 text-center cursor-pointer transition-colors duration-150 hover:border-wise-green/50"
                      style={{ borderColor: "rgba(14, 15, 12, 0.15)" }}
                    >
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                      />
                      <div className="flex flex-col items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray/40" aria-hidden="true">
                          <path d="M12 16V4M12 4L8 8M12 4L16 8M4 17V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {form.resume ? (
                          <span className="text-[13px] font-semibold text-positive-green" style={{ fontFeatureSettings: '"calt"' }}>
                            {form.resume.name}
                          </span>
                        ) : (
                          <span className="text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                            Drop your resume here or <span className="text-wise-green font-semibold">browse</span>
                          </span>
                        )}
                        <span className="text-[11px] text-gray/50" style={{ fontFeatureSettings: '"calt"' }}>
                          PDF, DOC, or DOCX up to 10MB
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass} style={inputBorderStyle}>Message / Cover Note</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Anything you'd like us to know..."
                      className={inputClass + " resize-none"}
                      style={inputBorderStyle}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="wise-btn px-10 py-3.5 bg-wise-green text-dark-green text-[14px] font-semibold rounded-[var(--radius-pill)]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Submit Application
                  </button>
                  <p
                    className="mt-4 text-[12px] text-gray/60 font-medium"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Your data is handled in accordance with our privacy policy.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7f3 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="FAQ"
            subtitle="Common questions about the Executive Roster."
            align="center"
          >
            Questions & <span className="hook">Answers</span>
          </SectionHeading>

          <Accordion type="single" collapsible className="max-w-2xl mx-auto mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Velvet Rope */}
      <VelvetRope />
    </>
  )
}
