"use client"

import { useState } from "react"
import Link from "next/link"
import { submitForm } from "@/utils/form-submit"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"

const partnerFeatures = [
  {
    title: "Official CISI Curriculum",
    description:
      "Deliver the same syllabus used by financial professionals in London, Dubai, and Singapore. No diluted content.",
  },
  {
    title: "Local Exam Administration",
    description:
      "Candidates sit CISI exams in Addis Ababa. No travel abroad required. Proctored and verified to CISI standards.",
  },
  {
    title: "Global Recognition",
    description:
      "CISI qualifications are recognized in over 100 countries. Your team earns credentials that travel.",
  },
]

const methodology = [
  {
    step: "01",
    title: "Diagnostic Assessment",
    description:
      "Baseline evaluation of each candidate's knowledge gaps. We build the study plan around what you need, not a generic syllabus review.",
  },
  {
    step: "02",
    title: "Structured Curriculum",
    description:
      "Weekly modules following the official CISI syllabus, delivered by experienced instructors with real capital markets experience.",
  },
  {
    step: "03",
    title: "Mock Examinations",
    description:
      "Timed practice exams that mirror CISI exam conditions. Weekly mocks with detailed performance breakdowns and targeted remediation.",
  },
  {
    step: "04",
    title: "Exam Day Support",
    description:
      "Final review sessions, exam logistics coordination, and proctored exams administered locally in Addis Ababa through CISI.",
  },
]

const programs = [
  {
    level: "Foundation",
    title: "Introduction to Investment",
    duration: "81 hours total qualification time",
    format: "Hybrid (in-person + online) | MCQ Exam",
    description:
      "The flagship CISI foundation qualification — a comprehensive introduction to the financial services sector with a focus on investments. Covers financial principles, asset classes, markets, regulation, and ethics. Ideal for new entrants and support staff. No prior experience required.",
    topics: ["Financial Principles & Assets", "Equities, Bonds & Derivatives", "Investment Funds & Markets", "Economic Environment", "Financial Services Regulation & Ethics"],
    credential: "CISI Level 3 Award (RQF) — Ofqual Accredited",
    featured: true,
  },
  {
    level: "Level 1",
    title: "Fundamentals",
    duration: "6 weeks",
    format: "Hybrid (in-person + online)",
    description:
      "For traders, analysts, and finance professionals entering the market. Foundational certification in securities and investment principles.",
    topics: ["Financial Services Industry", "Regulation & Ethics", "Investment Principles", "Risk & Compliance Basics"],
    credential: "CISI Level 1 — Entry Qualification",
    featured: false,
  },
  {
    level: "Level 2",
    title: "Compliance & Risk",
    duration: "8 weeks",
    format: "Hybrid (in-person + online)",
    description:
      "For compliance officers, risk managers, and regulatory professionals. The certification banks and insurers will require.",
    topics: ["Regulatory Compliance", "Anti-Money Laundering (AML)", "Conduct & Ethics", "Governance Frameworks"],
    credential: "CISI Level 2 — Intermediate Qualification",
    featured: false,
  },
  {
    level: "Level 3",
    title: "Advanced",
    duration: "12 weeks",
    format: "Hybrid (in-person + online)",
    description:
      "For fund managers, senior financial advisors, and institutional investors. The credential that signals international-grade expertise.",
    topics: ["Portfolio Construction", "Asset Allocation", "Performance Measurement", "Fund Operations & Admin"],
    credential: "CISI Level 3 — Advanced Qualification",
    featured: false,
  },
]

const whyNow = [
  {
    title: "Ethiopian Securities Exchange",
    description:
      "The Ethiopian Securities Exchange has launched. Every bank, insurance company, and investment firm now needs certified professionals to operate in it.",
  },
  {
    title: "Regulatory Requirements",
    description:
      "The Ethiopian Capital Market Authority requires licensed professionals. CISI certification ensures your team meets regulatory mandates from day one.",
  },
  {
    title: "Talent Scarcity",
    description:
      "The market is live but certified talent is scarce. Institutions that certify now lead. The ones that wait are already hiring from behind.",
  },
  {
    title: "Foreign Investment Inflow",
    description:
      "International investors entering Ethiopian markets partner with firms that demonstrate global-standard competence. CISI is that standard.",
  },
]

const faqs = [
  {
    q: "What is CISI and why does it matter for Ethiopia?",
    a: "The Chartered Institute for Securities & Investment (CISI) is the largest professional body for securities, investment, wealth, and financial planning professionals globally. With Ethiopia's capital market now live, CISI certification ensures professionals meet internationally recognized standards of competence and ethics — a critical requirement for attracting foreign investment and building market credibility.",
  },
  {
    q: "Is YES an authorized CISI training partner?",
    a: "Yes. YES | Your Employment Solutions is an authorized CISI UK training partner in Ethiopia, licensed to deliver the official CISI curriculum, administer exam preparation, and register candidates for CISI examinations. Our partnership gives Ethiopian professionals direct access to globally recognized certifications without leaving the country.",
  },
  {
    q: "Can my firm enroll multiple employees at once?",
    a: "Absolutely. We offer corporate cohort enrollment with dedicated scheduling, progress tracking, and group pricing. Most firms enroll teams of 5-30 professionals per cohort. We can also customize the delivery schedule to minimize disruption to your operations.",
  },
  {
    q: "What is the exam pass rate for YES-trained candidates?",
    a: "Our Exam Ready methodology has achieved a first-attempt pass rate significantly above the global CISI average. We attribute this to our structured preparation approach: diagnostic assessment, focused study plans, weekly mock exams, and one-on-one tutoring for candidates who need additional support.",
  },
  {
    q: "Do I need prior financial services experience?",
    a: "Not for the Introduction to Investment or Level 1 (Fundamentals). These programs are designed for new entrants to financial services — no prior experience needed. The Introduction to Investment is an Ofqual-accredited Level 3 Award that covers financial principles, asset classes, markets, regulation, and ethics from scratch. Levels 2 and 3 do assume foundational knowledge and are best suited for professionals already working in or transitioning into compliance, risk, or fund management roles.",
  },
]

const PROGRAMS = [
  { id: "intro-investment", label: "Introduction to Investment (Foundation)" },
  { id: "fundamentals", label: "Fundamentals of Financial Services" },
  { id: "compliance-risk", label: "Compliance & Risk" },
  { id: "fund-management", label: "Fund Management" },
  { id: "not-sure", label: "Not sure \u2014 advise me" },
]

type EnrollmentType = "individual" | "corporate"

export default function TrainingAcademy() {
  const h1Ref = useTextReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    program: "",
    enrollmentType: "individual" as EnrollmentType,
    teamSize: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "enrollmentType" && value !== "corporate" ? { teamSize: "" } : {}),
    }))
  }

  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await submitForm('training', formData)
      if (result.ok) {
        setIsSubmitted(true)
      } else {
        setSubmitError(result.message)
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[72px]">
        <div className="container-yes py-20 text-center md:py-32">
          <div className="mb-6 flex items-center justify-center">
            <span
              className="text-[11px] font-bold tracking-[0.12em] text-near-black/30 uppercase"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              CISI Training Academy
            </span>
          </div>
          <h1
            ref={h1Ref}
            className="invisible mx-auto max-w-5xl text-[44px] leading-[0.85] font-black sm:text-[56px] md:text-[72px] lg:text-[88px]"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Ethiopia's Capital Market Is Here.{" "}
            <span className="hook">Be Certified to Operate in It.</span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed font-medium text-gray md:text-lg"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            CISI UK certification delivered in Addis Ababa through YES Academy.
            In partnership with the Chartered Institute for Securities &
            Investment and Exam Ready.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/initialize"
              className="wise-btn inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-wise-green px-8 py-4 text-lg font-semibold text-dark-green"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to YES Academy
              <svg
                width="16"
                height="16"
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
            </Link>
            <a
              href="#programs"
              className="wise-btn inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-8 py-4 text-lg font-semibold text-near-black"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      {/* Authorized Partner — 2-column layout */}
      <section className="section-spacing">
        <div className="container-yes">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT: Heading + checkmark list */}
            <div>
              <SectionHeading
                label="Official Partnership"
                subtitle="Direct access to globally recognized financial services qualifications, delivered in Ethiopia."
              >
                Authorized CISI UK Training Partner
              </SectionHeading>
              <div className="mt-2 space-y-4">
                {partnerFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-positive-green/10">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5L6.5 12L13 4" stroke="var(--color-positive-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <span
                        className="text-[15px] font-semibold text-near-black"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {f.title}
                      </span>
                      <p
                        className="mt-0.5 text-[13px] leading-relaxed font-medium text-gray"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span
                  className="inline-flex items-center text-[11px] font-semibold text-positive-green"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  CISI UK — Authorized Training Partner Agreement
                </span>
              </div>
            </div>

            {/* RIGHT: Partner logos panel */}
            <div className="surface-card p-8 text-center md:p-10" style={{ transform: "none" }}>
              <div
                className="mb-8 text-[11px] font-bold tracking-[0.1em] text-near-black/30 uppercase"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Training Partnership
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {/* YES */}
                <div className="flex min-w-[140px] flex-col items-center rounded-[var(--radius-standard)] border border-near-black/8 px-6 py-5">
                  <img src="/images/yes-logo.webp" alt="YES Employment Solutions" className="h-14 w-auto object-contain" loading="lazy" />
                  <div
                    className="mt-2 text-[11px] font-semibold tracking-[0.08em] text-gray uppercase"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Training Delivery
                  </div>
                </div>
                {/* Connector */}
                <div className="select-none text-2xl font-light text-near-black/20">&times;</div>
                {/* CISI */}
                <div className="flex min-w-[140px] flex-col items-center rounded-[var(--radius-standard)] border border-near-black/8 px-6 py-5">
                  <img src="/images/partners/cisi-badge.jpg" alt="CISI — Chartered Institute for Securities & Investment" className="h-14 w-auto object-contain" loading="lazy" />
                </div>
                {/* Connector */}
                <div className="select-none text-2xl font-light text-near-black/20">&times;</div>
                {/* Exam Ready */}
                <div className="flex min-w-[140px] flex-col items-center rounded-[var(--radius-standard)] border border-near-black/8 px-6 py-5">
                  <img src="/images/partners/examready-logo.gif" alt="Exam Ready — Accredited CISI Training Provider" className="h-10 w-auto object-contain" loading="lazy" />
                </div>
              </div>
              <p
                className="mx-auto mt-8 max-w-sm text-[13px] leading-relaxed font-medium text-gray"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                A complete pipeline from enrollment to certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Ready Methodology — stacked numbered rows */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading
            label="Methodology"
            subtitle="Our structured approach gets candidates from enrollment to certification with confidence."
            align="center"
          >
            The Exam Ready Method
          </SectionHeading>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="group flex items-start gap-6 rounded-[var(--radius-standard)] border border-near-black/8 p-6 transition-colors duration-200 hover:border-wise-green/40 md:gap-8 md:p-8"
              >
                <span
                  className="select-none text-[48px] leading-[0.85] font-black text-near-black/[0.06] transition-colors duration-200 group-hover:text-wise-green/20 md:text-[56px]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.step}
                </span>
                <div>
                  <h3
                    className="text-base font-black leading-tight text-near-black md:text-lg"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-relaxed font-medium text-gray"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Programs"
            subtitle="From the foundational Introduction to Investment through advanced Fund Management. Start where your team needs to."
            align="center"
          >
            CISI Certification Programs
          </SectionHeading>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {programs.map((p, i) => (
              <div
                key={i}
                className="surface-card relative flex flex-col"
                style={
                  p.featured
                    ? {
                        borderColor:
                          "color-mix(in srgb, var(--color-wise-green) 40%, transparent)",
                      }
                    : { transform: "none" }
                }
              >
                {p.featured && (
                  <span
                    className="absolute top-4 right-4 inline-flex items-center rounded-[var(--radius-pill)] bg-wise-green px-3 py-1 text-[11px] font-bold tracking-wider text-dark-green uppercase"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Flagship
                  </span>
                )}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Level badge */}
                  <span
                    className="text-[11px] font-bold tracking-[0.1em] text-gray uppercase"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.level}
                  </span>

                  {/* Title in hook italic */}
                  <h3 className="hook mt-2 text-xl leading-tight font-black">
                    {p.title}
                  </h3>

                  {/* Duration pill + Format */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center rounded-[var(--radius-pill)] bg-near-black/[0.04] px-2.5 py-1 text-[12px] font-semibold text-warm-dark"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {p.duration}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-[13px] text-gray">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-near-black/30" aria-hidden="true">
                      <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 1.5V4.5M11 1.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontFeatureSettings: '"calt"' }}>{p.format}</span>
                  </div>

                  {/* Description */}
                  <p
                    className="mt-4 text-[14px] leading-relaxed font-medium text-gray"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.description}
                  </p>

                  {/* Topics */}
                  <div className="mt-5 flex flex-1 flex-col gap-1.5">
                    {p.topics.map((topic, ti) => (
                      <div
                        key={ti}
                        className="flex items-center gap-2 text-[12px] text-gray"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-wise-green/40" />
                        {topic}
                      </div>
                    ))}
                  </div>

                  {/* Credential */}
                  <p
                    className="mt-5 text-[13px] font-semibold"
                    style={{ fontFeatureSettings: '"calt"', color: "var(--color-wise-green)" }}
                  >
                    {p.credential}
                  </p>
                </div>

                {/* Card footer */}
                <div className="border-t border-near-black/8 px-6 py-4 md:px-8">
                  <a
                    href="#enroll"
                    className="inline-flex w-full items-center justify-center gap-1.5 text-[14px] font-semibold text-near-black transition-colors hover:text-dark-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Register Interest
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now — 2-column layout */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT: text items */}
            <div>
              <SectionHeading
                label="Why Now"
                subtitle="Ethiopia's financial services sector has entered a new era. The institutions with certified professionals are leading it."
              >
                Ethiopia's Capital Market Is Here
              </SectionHeading>
              <div className="mt-2 space-y-4">
                {whyNow.map((item, i) => (
                  <div key={i}>
                    <h3
                      className="text-[15px] font-semibold text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-0.5 text-[13px] leading-relaxed font-medium text-gray"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: 2x2 StatCounter grid */}
            <div className="grid grid-cols-2 gap-6">
              <StatCounter value={120} suffix="M+" label="Population — Africa's 2nd Largest Market" proofSource="World Bank Data" />
              <StatCounter value={100} prefix="<" label="CISI-Certified Professionals in Ethiopia" proofSource="CISI Registry" />
              <StatCounter value={1} suffix="st" label="Securities Exchange Launch" proofSource="Ethiopian Capital Market Authority" />
              <StatCounter value={5000} suffix="+" label="Projected Certified Roles Needed" proofSource="ESX Capacity Estimates" />
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form — 2-column layout */}
      <section id="enroll" className="section-spacing">
        <div className="container-yes">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: heading + benefits */}
            <div>
              <SectionHeading
                label="Get Started"
                subtitle="Register your interest in CISI certification. We'll reach out with program details, scheduling, and pricing."
              >
                Register for Training
              </SectionHeading>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-positive-green/10">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4" stroke="var(--color-positive-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[15px] font-semibold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
                      Individual & Corporate Enrollment
                    </span>
                    <p className="mt-0.5 text-[13px] leading-relaxed font-medium text-gray" style={{ fontFeatureSettings: '"calt"' }}>
                      Whether you're an individual professional or enrolling your team, we accommodate both.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-positive-green/10">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4" stroke="var(--color-positive-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[15px] font-semibold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
                      Flexible Scheduling
                    </span>
                    <p className="mt-0.5 text-[13px] leading-relaxed font-medium text-gray" style={{ fontFeatureSettings: '"calt"' }}>
                      Cohorts run on regular cycles. Corporate clients can request custom scheduling to minimize disruption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-positive-green/10">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4" stroke="var(--color-positive-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[15px] font-semibold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
                      No Commitment Required
                    </span>
                    <p className="mt-0.5 text-[13px] leading-relaxed font-medium text-gray" style={{ fontFeatureSettings: '"calt"' }}>
                      This form registers your interest. We'll contact you with full details before any commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: form */}
            <div>
              {isSubmitted ? (
                <div
                  className="surface-card p-10 text-center"
                  style={{ transform: "none" }}
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-wise-green/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-wise-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-black text-near-black"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Enrollment Interest Received
                  </h3>
                  <p
                    className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed font-medium text-gray"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Our training coordinator will contact you within 2 business days
                    to discuss program details, scheduling, and pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="wise-btn mt-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-wise-green px-8 py-3 text-[15px] font-semibold text-dark-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Back to Training
                  </button>
                </div>
              ) : (
              <form
                onSubmit={handleSubmit}
                className="surface-card space-y-5 p-8 md:p-10"
                style={{ transform: "none" }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[13px] font-semibold text-near-black"
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
                      className="w-full rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[13px] font-semibold text-near-black"
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
                      className="w-full rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[13px] font-semibold text-near-black"
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
                      className="w-full rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                      placeholder="+251 9XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-[13px] font-semibold text-near-black"
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
                      className="w-full rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label
                    htmlFor="program"
                    className="mb-2 block text-[13px] font-semibold text-near-black"
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
                    className="w-full appearance-none rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <option value="">Select a program...</option>
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Enrollment Type */}
                <div>
                  <label
                    className="mb-2 block text-[13px] font-semibold text-near-black"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    Enrollment Type
                  </label>
                  <div className="mt-1 flex gap-3">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="enrollmentType"
                        value="individual"
                        checked={formData.enrollmentType === "individual"}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[var(--color-wise-green)]"
                      />
                      <span
                        className="text-[14px] font-medium text-near-black"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        Individual
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="enrollmentType"
                        value="corporate"
                        checked={formData.enrollmentType === "corporate"}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[var(--color-wise-green)]"
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

                {/* Conditional Team Size (corporate only) */}
                {formData.enrollmentType === "corporate" && (
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ animation: "fadeSlideIn 0.3s ease-out" }}
                  >
                    <label
                      htmlFor="teamSize"
                      className="mb-2 block text-[13px] font-semibold text-near-black"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      Estimated Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      <option value="">Select team size...</option>
                      <option value="2-5">2-5 participants</option>
                      <option value="6-15">6-15 participants</option>
                      <option value="16-30">16-30 participants</option>
                      <option value="30+">30+ participants</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-semibold text-near-black"
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
                    className="w-full resize-none rounded-[var(--radius-standard)] border border-near-black/12 bg-white px-4 py-3 text-[14px] font-medium text-near-black transition-colors placeholder:text-gray/50 focus:border-wise-green focus:ring-2 focus:ring-wise-green/40 focus:outline-none"
                    style={{ fontFeatureSettings: '"calt"' }}
                    placeholder="Tell us about your certification goals..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="wise-btn inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wise-green px-8 py-4 text-base font-semibold text-dark-green sm:w-auto"
                  style={{
                    fontFeatureSettings: '"calt"',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-dark-green/30 border-t-dark-green" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Register Interest
                      <svg
                        width="16"
                        height="16"
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

                {/* Error banner */}
                {submitError && (
                  <div
                    className="rounded-xl px-4 py-3 text-[13px] font-medium"
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

                {/* Privacy note */}
                <p
                  className="text-[11px] leading-relaxed text-gray/50"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  This registers your interest. Our training coordinator will contact
                  you to discuss program details, scheduling, and corporate enrollment
                  options.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes max-w-3xl">
          <SectionHeading label="FAQ" align="center">
            Frequently Asked
          </SectionHeading>
          <Accordion
            type="single"
            collapsible
            className="mx-auto mt-12 max-w-2xl"
          >
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
          <div className="relative overflow-hidden rounded-[var(--radius-section)] bg-near-black px-8 py-16 text-center md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full blur-[100px]"
              style={{ background: "var(--color-light-mint)" }}
            />
            <div className="relative z-10">
              <h2
                className="text-[40px] leading-[0.85] font-black text-white md:text-[64px]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Certify Your <span className="hook">Team</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed font-medium text-white/70"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Enroll your team before the market opens.
              </p>
              <div className="mt-8">
                <Link
                  href="/initialize"
                  className="wise-btn inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-wise-green px-8 py-4 text-lg font-semibold text-dark-green"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Talk to YES Academy
                  <svg
                    width="16"
                    height="16"
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
