import { useState } from "react"
import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const partnerFeatures = [
  {
    title: "Official CISI Curriculum",
    description: "Authorized to deliver CISI UK syllabi and administer official examinations in Ethiopia.",
  },
  {
    title: "UK-Certified Instructors",
    description: "Our faculty are CISI-certified professionals with capital markets and financial services experience.",
  },
  {
    title: "Exam Center Partnership",
    description: "YES operates as a licensed CISI examination center in Addis Ababa — candidates sit exams locally.",
  },
]

const methodology = [
  {
    step: "01",
    title: "Diagnostic Assessment",
    description: "Every candidate takes a baseline assessment before training begins. We identify gaps and tailor the learning path accordingly.",
  },
  {
    step: "02",
    title: "Structured Curriculum",
    description: "CISI official materials delivered through instructor-led sessions, self-paced study, and guided practice. No shortcuts.",
  },
  {
    step: "03",
    title: "Mock Exams",
    description: "Timed mock examinations under real test conditions. Performance reviewed, weak areas targeted, confidence built.",
  },
  {
    step: "04",
    title: "Exam Day Support",
    description: "Logistics, scheduling, and exam center coordination handled by our team. Candidates focus only on performance.",
  },
]

const programs = [
  {
    level: "Foundation",
    title: "Introduction to Investment",
    duration: "81 hours",
    badge: "Flagship",
    description: "Comprehensive introduction to investment principles, financial markets, and securities. The foundational certification for capital market participants.",
  },
  {
    level: "Level 1",
    title: "Fundamentals of Financial Services",
    duration: "6 weeks",
    badge: null,
    description: "Core financial concepts, regulatory frameworks, and market operations. Required baseline for all capital market practitioners.",
  },
  {
    level: "Level 2",
    title: "Compliance & Risk",
    duration: "8 weeks",
    badge: null,
    description: "Risk management frameworks, compliance obligations, and regulatory reporting. Essential for compliance officers and risk managers.",
  },
  {
    level: "Level 3",
    title: "Advanced Certification",
    duration: "12 weeks",
    badge: null,
    description: "Advanced portfolio management, derivatives, and structured products. For senior professionals seeking the highest CISI qualification level.",
  },
]

const whyNow = [
  {
    title: "ESX Launch",
    description: "The Ethiopian Securities Exchange is operational. Certified professionals are required from day one.",
  },
  {
    title: "Regulatory Requirements",
    description: "The Ethiopian Capital Market Authority mandates certification for market participants and intermediaries.",
  },
  {
    title: "Talent Scarcity",
    description: "Fewer than 200 CISI-certified professionals exist in Ethiopia. Demand will outstrip supply for years.",
  },
  {
    title: "Foreign Investment",
    description: "International investors entering Ethiopia require locally certified counterparts who meet global standards.",
  },
]

const faqs = [
  {
    q: "What is CISI and why does it matter?",
    a: "The Chartered Institute for Securities & Investment (CISI) is the largest professional body for securities and investment practitioners globally. CISI qualifications are recognized in over 100 countries and are increasingly required by Ethiopian capital market regulations.",
  },
  {
    q: "Do I need prior finance experience?",
    a: "The Foundation level (Introduction to Investment) is designed for candidates with no prior capital market experience. It provides a comprehensive grounding in investment principles, financial markets, and securities.",
  },
  {
    q: "How are exams administered?",
    a: "Exams are administered at our licensed CISI examination center in Addis Ababa. Candidates take computer-based tests under official CISI conditions. Results are issued by CISI UK within 48 hours.",
  },
  {
    q: "Can my company enroll multiple employees?",
    a: "Yes. We offer corporate enrollment packages with volume pricing, dedicated cohorts, and progress tracking dashboards for your HR and L&D teams.",
  },
  {
    q: "What is the pass rate?",
    a: "Our candidates achieve a pass rate significantly above the global CISI average. This is the result of our diagnostic-led methodology, structured curriculum, and intensive mock exam preparation.",
  },
]

type EnrollmentType = "individual" | "corporate"

export default function TrainingAcademy() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    program: "",
    enrollmentType: "individual" as EnrollmentType,
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="container-yes py-20 md:py-32 text-center">
          <div className="flex items-center justify-center mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              CISI Training Academy
            </span>
          </div>
          <h1
            className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Ethiopia's Capital Market Is Here.{" "}
            <span className="hook">Be Certified to Operate in It.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            YES is the authorized CISI UK training partner in Ethiopia. We deliver
            globally recognized capital market certifications to professionals and
            institutions.
          </p>
          <div className="mt-10">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Certify Your Team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Authorized Partner */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Partnership"
            subtitle="YES operates as the authorized CISI UK training and examination partner in Ethiopia."
          >
            Authorized CISI UK Training Partner
          </SectionHeading>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {partnerFeatures.map((f, i) => (
              <div key={i} className="surface-card p-8">
                <div className="w-10 h-10 rounded-full bg-wise-green/10 flex items-center justify-center text-dark-green mb-5">
                  <span
                    className="text-[13px] font-black"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-base font-black leading-[0.85] mb-3"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Ready Methodology */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Methodology" align="center">
            Exam Ready in Four Steps
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="surface-card p-8 text-center">
                <span
                  className="text-[40px] font-black text-wise-green/30 leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.step}
                </span>
                <h3
                  className="mt-3 text-base font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.title}
                </h3>
                <p
                  className="mt-3 text-[13px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Programs" align="center">
            CISI Certification Levels
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programs.map((p, i) => (
              <div
                key={i}
                className="surface-card p-8 relative"
                style={
                  p.badge
                    ? { borderColor: "color-mix(in srgb, var(--color-wise-green) 40%, transparent)" }
                    : undefined
                }
              >
                {p.badge && (
                  <span
                    className="absolute top-4 right-4 inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-wise-green text-dark-green rounded-[var(--radius-pill)]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.badge}
                  </span>
                )}
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.level}
                </span>
                <h3
                  className="mt-2 text-xl font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.title}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="inline-flex items-center px-2.5 py-1 text-[12px] font-semibold bg-near-black/[0.04] rounded-[var(--radius-pill)] text-warm-dark"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.duration}
                  </span>
                </div>
                <p
                  className="mt-4 text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Timing" align="center">
            Why Now
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyNow.map((item, i) => (
              <div key={i} className="surface-card p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-wise-green/10 flex items-center justify-center text-dark-green">
                    <span
                      className="text-[12px] font-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h3
                    className="text-base font-black leading-[0.85]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section-spacing">
        <div className="container-yes max-w-2xl">
          <SectionHeading label="Enroll" align="center">
            Start Your Certification
          </SectionHeading>
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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
                  htmlFor="phone"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="+251 9XX XXX XXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Company <span className="text-gray">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="Your organization"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="program"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Program of Interest
                </label>
                <select
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors appearance-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  <option value="">Select a program</option>
                  <option value="foundation">Foundation — Introduction to Investment</option>
                  <option value="level-1">Level 1 — Fundamentals</option>
                  <option value="level-2">Level 2 — Compliance & Risk</option>
                  <option value="level-3">Level 3 — Advanced Certification</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Enrollment Type
                </label>
                <div className="flex gap-3 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="enrollmentType"
                      value="individual"
                      checked={formData.enrollmentType === "individual"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[var(--color-wise-green)]"
                    />
                    <span
                      className="text-[14px] font-medium text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Individual
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="enrollmentType"
                      value="corporate"
                      checked={formData.enrollmentType === "corporate"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[var(--color-wise-green)]"
                    />
                    <span
                      className="text-[14px] font-medium text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Corporate
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[13px] font-semibold text-near-black mb-2"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors resize-none"
                style={{ fontFeatureSettings: '"calt"' }}
                placeholder="Tell us about your certification goals..."
              />
            </div>
            <button
              type="submit"
              className="wise-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-base font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Submit Enrollment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes max-w-3xl">
          <SectionHeading label="FAQ" align="center">
            Common Questions
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-yes">
          <div className="bg-near-black rounded-[var(--radius-section)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "var(--color-light-mint)" }} />
            <div className="relative z-10">
              <h2
                className="text-[40px] md:text-[64px] font-black leading-[0.85] text-white"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Certify Your <span className="hook">Team</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Talk to our training team about individual or corporate enrollment options.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Certify Your Team
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
