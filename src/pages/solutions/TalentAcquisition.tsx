import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"

const pipelineSteps = ["Source", "Screen", "Match", "Interview", "Offer", "Onboard"]

const outcomes = [
  {
    title: "Faster Time-to-Hire",
    description: "Qualified shortlists delivered in days, not weeks. Standard roles filled before month-end — executive searches within 30.",
  },
  {
    title: "Higher Retention",
    description: "Industry-leading twelve-month retention. Because matching on credentials alone isn't matching — matching on fit is.",
  },
  {
    title: "Full Pipeline Visibility",
    description: "Track candidate progress from sourcing through onboarding. No black boxes.",
  },
  {
    title: "One System, End to End",
    description: "Sourcing, vetting, matching, offer management, onboarding, and payroll — integrated. No handoff gaps where candidates fall through.",
  },
]

const methodology = [
  {
    phase: "01",
    title: "Brief & Calibrate",
    description: "Deep-dive into your role requirements, team culture, and success metrics. We calibrate our search parameters against a decade of Ethiopian market data.",
  },
  {
    phase: "02",
    title: "Source & Screen",
    description: "Multi-channel sourcing across our Executive Roster, university partnerships, and targeted headhunting. Every candidate undergoes a structured competency assessment before presentation.",
  },
  {
    phase: "03",
    title: "Verify & Present",
    description: "Background verification through our in-house integrity division. Only candidates who pass PSV methodology are presented — with full dossiers including verified credentials.",
  },
  {
    phase: "04",
    title: "Place & Onboard",
    description: "Offer negotiation, contract execution (EOR or direct), and a structured 30-day onboarding program with cultural alignment for international teams.",
  },
]

const specializations = [
  {
    title: "C-Suite & Executive",
    roles: ["Country Directors", "General Managers", "CFOs", "COOs"],
    description: "Board-ready leadership for Ethiopian and multinational operations. Confidential, thorough, relationship-driven.",
  },
  {
    title: "Engineering & Technical",
    roles: ["Software Engineers", "DevOps", "Data Scientists", "Civil Engineers"],
    description: "Software engineers, DevOps, data professionals. Technically assessed, not just CV-screened.",
  },
  {
    title: "Finance & Compliance",
    roles: ["Financial Controllers", "Auditors", "Tax Specialists", "Risk Managers"],
    description: "CISI-certified and CPA professionals for banking, insurance, and capital markets.",
  },
  {
    title: "Operations & Management",
    roles: ["Operations Managers", "HR Leads", "Office Managers", "Executive Assistants"],
    description: "Operational leaders who understand both international standards and Ethiopian business culture.",
  },
]

const faqs = [
  {
    q: "What makes YES different from other recruitment agencies in Ethiopia?",
    a: "Three things: infrastructure, verification, and retention. We are not a job board. Every candidate passes through our proprietary PSV (Pre-employment Screening & Verification) methodology before presentation. We calibrate for culture fit, not just skill match — which is why our placements last. And our tenure on the ground means we understand compensation benchmarks, notice period customs, and hiring dynamics that offshore recruiters simply cannot.",
  },
  {
    q: "How long does the recruitment process typically take?",
    a: "Our average time-to-hire is 14 business days from signed engagement to accepted offer. Executive and highly specialized roles may take 21-30 days. We provide weekly progress reports and maintain a shortlist pipeline so you are never waiting without visibility.",
  },
  {
    q: "Can YES handle high-volume recruitment?",
    a: "Yes. We have executed recruitment drives of 50+ positions for international organizations entering the Ethiopian market. Our sourcing infrastructure scales through university partnerships, regional sourcing networks, and our proprietary Executive Roster — a pre-vetted, continuously maintained candidate database.",
  },
  {
    q: "Do candidates come with background verification?",
    a: "Every candidate presented by YES undergoes our standard verification protocol: identity confirmation, academic credential verification, professional reference checks, and criminal record screening. Enhanced verification tiers are available for executive and fiduciary roles through our Integrity division.",
  },
  {
    q: "What if a placement does not work out?",
    a: "We offer a replacement guarantee for all placements within the first 90 days. If a hire does not meet performance expectations during this period, we will source and place a replacement at no additional recruitment fee. This guarantee is rarely invoked — our matching methodology is built to get it right the first time.",
  },
]

export default function TalentAcquisition() {
  const h1Ref = useTextReveal()

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
            ref={h1Ref}
            className="invisible text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The Right Talent.{" "}
            <span className="hook">Ready Now.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The top 3% of Ethiopian professional talent — over 20,000 specialists across 40+ disciplines. Average time-to-hire: 14 days. 12-month retention: 94%.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to Recruiting
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/solutions/eor"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              Employer of Record
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[12px] text-wise-green font-medium">Accepting new engagements</span>
            <span className="text-near-black/10">|</span>
            <span className="text-[12px] text-wise-green font-medium">14-Day Average Time-to-Hire</span>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-near-black/10">
        <div className="container-yes py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <StatCounter value={14} suffix=" days" label="Average Time-to-Hire" proofSource="YES Placement Records, 2022-2025" />
            <StatCounter value={94} suffix="%" label="12-Month Retention Rate" proofSource="YES Client Retention Data, 2023-2025" />
            <StatCounter value={20} suffix="K+" label="Verified Candidate Network" proofSource="YES Candidate Database, Feb 2025" />
          </div>
        </div>
      </section>

      {/* Precision Matching Pipeline */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="How We Find the Right Fit"
            subtitle="Most recruitment in Ethiopia still runs on spreadsheets, WhatsApp groups, and gut instinct. YES operates differently."
          >
            Precision Matching. Not Resume Roulette.
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

      {/* Outcome Cards — stacked numbered rows */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Outcomes" align="center">
            What You <span className="hook">Get</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row items-start gap-6 md:gap-10 p-8 md:p-10 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="text-[48px] md:text-[56px] font-black leading-none shrink-0 text-near-black/[0.06] select-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-[24px] md:text-[28px] font-black leading-[0.85] mb-3"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {o.title}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] text-warm-dark leading-[1.7] font-medium max-w-lg"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {o.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology — zigzag timeline */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 100%)" }}>
        <div className="container-yes">
          <SectionHeading label="Our Process" align="center">
            Sourcing <span className="hook">Methodology</span>
          </SectionHeading>

          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Central vertical line — desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "rgba(14, 15, 12, 0.08)" }}
            />

            <div className="flex flex-col gap-12 md:gap-0">
              {methodology.map((m, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={m.phase} className="relative md:flex md:items-start">
                    {/* Phase number on center line */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: i === methodology.length - 1 ? "var(--color-wise-green)" : "#ffffff",
                          border: `2px solid ${i === methodology.length - 1 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                        }}
                      >
                        <span
                          className="text-[14px] font-black"
                          style={{
                            fontFeatureSettings: '"calt"',
                            color: i === methodology.length - 1 ? "var(--color-dark-green)" : "var(--color-near-black)",
                          }}
                        >
                          {m.phase}
                        </span>
                      </div>
                    </div>

                    {/* Content card — alternates */}
                    <div className={`relative md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      {/* Mobile phase number */}
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: i === methodology.length - 1 ? "var(--color-wise-green)" : "#ffffff",
                            border: `2px solid ${i === methodology.length - 1 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                          }}
                        >
                          <span
                            className="text-[13px] font-black"
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: i === methodology.length - 1 ? "var(--color-dark-green)" : "var(--color-near-black)",
                            }}
                          >
                            {m.phase}
                          </span>
                        </div>
                      </div>

                      <div
                        className="p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                        style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
                      >
                        <h3
                          className={`text-[22px] md:text-[26px] font-black leading-[0.85] mb-3 ${isLeft ? "" : "md:text-right"}`}
                          style={{ fontFeatureSettings: '"calt"' }}
                        >
                          {m.title}
                        </h3>
                        <p
                          className={`text-[14px] text-warm-dark leading-[1.7] font-medium ${isLeft ? "" : "md:text-right"}`}
                          style={{ fontFeatureSettings: '"calt"' }}
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>

                    {i < methodology.length - 1 && <div className="hidden md:block h-12" />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations — italic title cards */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Specializations" align="center">
            Sector <span className="hook">Expertise</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {specializations.map((s, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="hook text-[26px] md:text-[30px] block mb-5"
                  style={{ fontWeight: 400 }}
                >
                  {s.title}
                </span>
                <ul className="space-y-2">
                  {s.roles.map((role, j) => (
                    <li
                      key={j}
                      className="text-[14px] text-warm-dark font-medium leading-[1.6]"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-[13px] text-warm-dark font-medium leading-[1.6] mt-4"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="container-yes max-w-3xl">
          <SectionHeading label="FAQ" align="center">
            Frequently Asked Questions
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
                Tell us who you're looking for. We'll tell you how fast we can find them.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Talk to Recruiting
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
