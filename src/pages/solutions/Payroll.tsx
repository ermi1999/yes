import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"

const ercaFeatures = [
  {
    title: "Income Tax Withholding",
    description: "Progressive bracket computation per Proclamation 979/2016 (as amended). Rates from 0% to 35% applied automatically based on taxable income.",
  },
  {
    title: "Pension Fund Contributions",
    description: "Employer (11%) and employee (7%) contributions calculated, withheld, and remitted per the Private Organizations Employees Pension Proclamation.",
  },
  {
    title: "Withholding Tax on Payments",
    description: "2% WHT on service payments, royalties, and other taxable transactions. Filed and remitted within ERCA-mandated deadlines.",
  },
  {
    title: "Monthly & Annual Filing",
    description: "All tax declarations submitted electronically to ERCA by the 30th of each month, with annual reconciliation filings and complete audit documentation.",
  },
]

const complianceStack = [
  "Employment Income Tax",
  "Pension Contributions",
  "Withholding Tax",
  "Annual Reconciliation",
]

const processSteps = [
  {
    step: "01",
    title: "Data Collection",
    description: "We gather employee data, salary structures, and benefit configurations. One intake, no chasing.",
  },
  {
    step: "02",
    title: "Calculation & Review",
    description: "Gross-to-net calculations including income tax brackets, pension contributions, and any variable components. Reviewed before processing.",
  },
  {
    step: "03",
    title: "Tax Filing & Pension",
    description: "Tax declarations filed on time, every time. Pension contributions submitted to the relevant fund. Every deadline met.",
  },
  {
    step: "04",
    title: "Distribution & Reporting",
    description: "Employees paid on schedule. You receive detailed payroll reports, tax receipts, and compliance documentation monthly.",
  },
]

const faqs = [
  {
    q: "What taxes does YES handle for Ethiopian payroll?",
    a: "We manage all mandatory withholdings: employment income tax (progressive brackets per Proclamation 979/2016 as amended), pension fund contributions (employer 11% + employee 7% per Private Organizations Employees Pension Proclamation), and any additional levies as directed by ERCA. All filings are submitted directly to the Ethiopian Revenue and Customs Authority on schedule.",
  },
  {
    q: "Can YES run payroll for both local and expatriate employees?",
    a: "Yes. We process payroll for Ethiopian nationals and expatriate staff in parallel, accounting for the different tax treatment, work permit requirements, and foreign currency considerations that apply to international employees under Ethiopian labor law.",
  },
  {
    q: "What happens if there is a payroll error?",
    a: "Our accuracy guarantee means we absorb the financial liability for any miscalculation on our side. Our error rate has remained below 0.01% across every year of operations. Every payroll cycle goes through a triple-verification process before submission.",
  },
  {
    q: "How quickly can YES onboard our company for payroll services?",
    a: "Standard payroll onboarding takes 5-7 business days from signed agreement to first payroll cycle. This includes ERCA registration verification, bank account setup, employee data migration, and a parallel test run to ensure accuracy before going live.",
  },
]

const platformCapabilities = [
  "Multi-entity & expatriate payroll",
  "ERCA filing & pension remittance",
  "Structured payroll data & reports",
  "SLA-backed error liability",
]

export default function Payroll() {
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
              Payroll & Tax Compliance
            </span>
          </div>
          <h1
            ref={h1Ref}
            className="invisible text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Payroll That Runs on{" "}
            <span className="hook">Precision.</span>{" "}
            Not Promises.
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Ethiopian payroll is unforgiving. Late tax filings trigger penalties. Incorrect pension contributions create liabilities. We eliminate both.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to Payroll
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#process"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              See the Process
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-near-black/10">
        <div className="container-yes py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <StatCounter value={10} suffix="+" label="Years Processing Payroll" proofSource="YES Operations — Since 2015" />
            <StatCounter value={99.99} suffix="%" label="Accuracy Rate" proofSource="Internal Audit Records" />
            <StatCounter value={0} label="ERCA Penalties Incurred" proofSource="ERCA Filing History" />
            <StatCounter value={48} suffix="hr" label="Max Processing Time" proofSource="SLA Performance Data" />
          </div>
        </div>
      </section>

      {/* ERCA Integration */}
      <section className="section-spacing">
        <div className="container-yes">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="ERCA Integration"
                subtitle="Ethiopian tax law is intricate. We navigate it so you don't have to."
              >
                Full Compliance with Ethiopian Revenue & Customs
              </SectionHeading>
              <div className="mt-8 space-y-5">
                {ercaFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1 w-6 h-6 rounded-full bg-wise-green/10 flex items-center justify-center shrink-0">
                      <span
                        className="text-[10px] font-black text-dark-green"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <div>
                      <h4
                        className="text-[15px] font-bold text-near-black leading-snug"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {f.title}
                      </h4>
                      <p
                        className="mt-1 text-[13px] text-gray font-medium leading-relaxed"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Stack */}
            <div className="surface-card p-8 md:p-10">
              <h3
                className="text-lg font-black leading-[0.85] mb-6"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Your Compliance Stack
              </h3>
              <ul className="space-y-4">
                {complianceStack.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[14px] font-medium text-warm-dark"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-positive-green shrink-0">
                      <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Panel */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes max-w-3xl">
          <div
            className="p-8 md:p-12 rounded-[var(--radius-large)] bg-white text-center"
            style={{ border: "2px solid color-mix(in srgb, var(--color-wise-green) 60%, transparent)", boxShadow: "0 0 40px var(--color-light-mint)" }}
          >
            <div className="w-14 h-14 rounded-full bg-wise-green/10 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-dark-green">
                <path d="M14 2L4 7V13C4 19.63 8.28 25.79 14 27C19.72 25.79 24 19.63 24 13V7L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2
              className="text-[32px] md:text-[48px] font-black leading-[0.85]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              If We Make an Error, <span className="hook">We Pay.</span>
            </h2>
            <p
              className="mt-5 text-[15px] text-gray font-medium leading-relaxed max-w-lg mx-auto"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              YES absorbs 100% of the financial liability for any payroll miscalculation or late filing attributable to our processing. No caveats. No caps. Your risk is our responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow — zigzag timeline */}
      <section id="process" className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7f3 100%)" }}>
        <div className="container-yes">
          <SectionHeading label="The Process" align="center">
            From Data to <span className="hook">Disbursement</span>
          </SectionHeading>

          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Central vertical line — desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "rgba(14, 15, 12, 0.08)" }}
            />

            <div className="flex flex-col gap-12 md:gap-0">
              {processSteps.map((s, i) => {
                const isLeft = i % 2 === 0
                const isLast = i === processSteps.length - 1
                return (
                  <div key={s.step} className="relative md:flex md:items-start">
                    {/* Step number on center line */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: isLast ? "var(--color-wise-green)" : "#ffffff",
                          border: `2px solid ${isLast ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                        }}
                      >
                        <span
                          className="text-[14px] font-black"
                          style={{
                            fontFeatureSettings: '"calt"',
                            color: isLast ? "var(--color-dark-green)" : "var(--color-near-black)",
                          }}
                        >
                          {s.step}
                        </span>
                      </div>
                    </div>

                    {/* Content card — alternates */}
                    <div className={`relative md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      {/* Mobile step number */}
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: isLast ? "var(--color-wise-green)" : "#ffffff",
                            border: `2px solid ${isLast ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                          }}
                        >
                          <span
                            className="text-[13px] font-black"
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: isLast ? "var(--color-dark-green)" : "var(--color-near-black)",
                            }}
                          >
                            {s.step}
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
                          {s.title}
                        </h3>
                        <p
                          className={`text-[14px] text-warm-dark leading-[1.7] font-medium ${isLeft ? "" : "md:text-right"}`}
                          style={{ fontFeatureSettings: '"calt"' }}
                        >
                          {s.description}
                        </p>
                      </div>
                    </div>

                    {i < processSteps.length - 1 && <div className="hidden md:block h-12" />}
                  </div>
                )
              })}
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

      {/* Platform Partners */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Platform Partners" align="center">
            Payroll Infrastructure for Global Platforms.
          </SectionHeading>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <StatCounter value={48} suffix="hr" label="Max cycle time, intake to disbursement" proofSource="" />
              <StatCounter value={99.99} suffix="%" label="Accuracy rate. Errors are on us." proofSource="" />
              <StatCounter value={0} label="ERCA penalties. Ever." proofSource="" />
            </div>
            <div className="surface-card p-8 md:p-10">
              <h3
                className="text-base font-black leading-[0.85] mb-5"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Platform Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {platformCapabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center text-[14px] font-medium text-warm-dark"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                Eliminate Payroll <span className="hook">Risk</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Payroll headaches end with one call.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Talk to Payroll
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
