import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const pipelineSteps = ["Source", "Screen", "Match", "Interview", "Offer", "Onboard"]

const outcomes = [
  {
    title: "Faster Time-to-Hire",
    description: "14-day average from brief to signed offer. Our pre-vetted pipeline eliminates weeks of sourcing and screening.",
  },
  {
    title: "Higher Retention",
    description: "94% twelve-month retention rate. Precision matching means candidates stay because the fit is right from day one.",
  },
  {
    title: "Full Pipeline Visibility",
    description: "Track every candidate through every stage. Real-time updates, interview feedback, and decision tracking in one dashboard.",
  },
  {
    title: "One System",
    description: "From job brief to signed contract — everything lives in one place. No spreadsheets, no email chains, no lost candidates.",
  },
]

const methodology = [
  {
    phase: "01",
    title: "Brief & Calibrate",
    description: "We sit with your hiring manager to understand the role, the team, the culture, and the non-negotiables. Every search starts with calibration.",
  },
  {
    phase: "02",
    title: "Source & Screen",
    description: "Our team activates targeted sourcing across our 20K+ candidate pool, professional networks, and direct outreach. Every candidate is pre-screened before you see them.",
  },
  {
    phase: "03",
    title: "Verify & Present",
    description: "Background verification, reference checks, and skills assessment completed before shortlist presentation. You only see verified candidates.",
  },
  {
    phase: "04",
    title: "Place & Onboard",
    description: "Offer negotiation, contract execution, and Day 1 onboarding support. We stay involved through the first 90 days.",
  },
]

const specializations = [
  {
    title: "C-Suite & Executive",
    roles: ["CEO / Managing Director", "CFO / Finance Director", "COO / Operations Lead", "Country Manager"],
  },
  {
    title: "Engineering & Technical",
    roles: ["Software Engineers", "DevOps & Infrastructure", "Data Scientists", "Product Managers"],
  },
  {
    title: "Finance & Banking",
    roles: ["Financial Analysts", "Risk & Compliance", "Audit & Assurance", "Treasury & Payments"],
  },
  {
    title: "Operations & Logistics",
    roles: ["Supply Chain Managers", "Warehouse Operations", "Fleet & Distribution", "Procurement Leads"],
  },
]

const faqs = [
  {
    q: "How is this different from a traditional recruitment agency?",
    a: "Traditional agencies send CVs. We manage the entire hiring lifecycle — from calibrated brief to verified shortlist to onboarded employee. Every candidate is pre-screened, background-checked, and skills-assessed before you see them.",
  },
  {
    q: "What roles do you recruit for?",
    a: "We specialize in mid-to-senior roles across executive leadership, engineering, finance, and operations. If the role requires precision matching rather than volume hiring, we are the right partner.",
  },
  {
    q: "How large is your candidate pool?",
    a: "Over 20,000 pre-vetted professionals across Ethiopia. Our database is continuously updated through direct sourcing, referrals, and our talent community programs.",
  },
  {
    q: "What if the placement doesn't work out?",
    a: "Every placement comes with a guarantee period. If a candidate leaves or is terminated within the guarantee window, we replace them at no additional cost.",
  },
  {
    q: "Can you handle volume hiring?",
    a: "Yes. We have executed volume campaigns of 50+ hires within compressed timelines. Our methodology scales — the process remains the same, only the team size increases.",
  },
]

export default function TalentAcquisition() {
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
              Talent Acquisition
            </span>
          </div>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The Right Talent.{" "}
            <span className="hook">Ready Now.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Precision recruitment for companies building teams in Ethiopia.
            Pre-vetted candidates, verified credentials, and placements that last.
          </p>
          <div className="mt-10">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Build Your Team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-near-black/10">
        <div className="container-yes py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <StatCounter value={14} suffix=" days" label="Average Time-to-Hire" proofSource="2024 placement data" />
            <StatCounter value={94} suffix="%" label="12-Month Retention Rate" proofSource="Verified retention tracking" />
            <StatCounter value={20} suffix="K+" label="Candidate Pool" proofSource="Active database" />
          </div>
        </div>
      </section>

      {/* Precision Matching Pipeline */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Process"
            subtitle="Every hire follows the same disciplined pipeline. No shortcuts, no exceptions."
          >
            Precision Matching Pipeline
          </SectionHeading>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-0">
            {pipelineSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex items-center gap-3 px-5 py-3 rounded-[var(--radius-pill)] bg-near-black/[0.04]">
                  <span
                    className="text-[12px] font-black text-wise-green"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[14px] font-bold text-near-black"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {step}
                  </span>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-near-black/20 hidden md:block mx-1"
                  >
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Cards */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Outcomes" align="center">
            What You Get
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <div key={i} className="surface-card p-8">
                <h3
                  className="text-lg font-black leading-[0.85] mb-3"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {o.title}
                </h3>
                <p
                  className="text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Methodology">
            Four Phases. One Standard.
          </SectionHeading>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {methodology.map((m) => (
              <div key={m.phase} className="surface-card p-8 md:p-10">
                <span
                  className="text-[40px] font-black text-wise-green/30 leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.phase}
                </span>
                <h3
                  className="mt-3 text-xl font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.title}
                </h3>
                <p
                  className="mt-3 text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Verticals" align="center">
            Specializations
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {specializations.map((s, i) => (
              <div key={i} className="surface-card p-8">
                <h3
                  className="text-base font-black leading-[0.85] mb-4"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {s.title}
                </h3>
                <ul className="space-y-2.5">
                  {s.roles.map((role, j) => (
                    <li
                      key={j}
                      className="flex items-center text-[13px] text-gray font-medium"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
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
                Build Your <span className="hook">Team</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Tell us about the roles you need to fill. We will show you who is already in our pipeline.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Build Your Team
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
