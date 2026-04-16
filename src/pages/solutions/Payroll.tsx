import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const ercaFeatures = [
  {
    title: "Automated Tax Calculation",
    description: "Income tax, withholding tax, and pension contributions calculated automatically against current ERCA schedules.",
  },
  {
    title: "Direct ERCA Filing",
    description: "Tax declarations filed electronically through our direct integration with the Ethiopian Revenue and Customs Authority.",
  },
  {
    title: "Pension Remittance",
    description: "Private Organization Social Security Agency (POSSA) contributions calculated and remitted on schedule.",
  },
  {
    title: "Audit-Ready Reports",
    description: "Complete payroll records, tax receipts, and compliance documentation maintained for regulatory review at any time.",
  },
]

const complianceStack = [
  "Income Tax Schedule (Proclamation 979/2016)",
  "Pension Contribution (Proclamation 715/2011)",
  "ERCA e-Filing Integration",
  "POSSA Remittance Compliance",
]

const processSteps = [
  {
    step: "01",
    title: "Data Collection",
    description: "Attendance, leave, overtime, and variable pay data collected through our platform or your existing systems via API.",
  },
  {
    step: "02",
    title: "Calculation & Review",
    description: "Gross-to-net calculation with all statutory deductions. Human review on every payroll run before processing.",
  },
  {
    step: "03",
    title: "Tax Filing & Pension",
    description: "Income tax declared to ERCA. Pension contributions calculated and submitted to POSSA. All receipts documented.",
  },
  {
    step: "04",
    title: "Distribution & Reporting",
    description: "Salary disbursement via bank transfer. Payslips delivered digitally. Monthly reports sent to your finance team.",
  },
]

const faqs = [
  {
    q: "What payroll taxes apply in Ethiopia?",
    a: "Ethiopian payroll involves income tax (progressive rates from 0% to 35%), employee pension contribution (7% of basic salary), employer pension contribution (11% of basic salary), and cost-sharing deductions where applicable. We handle all calculations and filings.",
  },
  {
    q: "How do you guarantee accuracy?",
    a: "Every payroll run goes through automated calculation, human review, and management approval before processing. Our 99.99% accuracy rate is maintained through triple-check methodology and direct ERCA integration that eliminates manual filing errors.",
  },
  {
    q: "What happens if there is a payroll error?",
    a: "If we make a calculation or filing error, we absorb the cost. Any penalties, interest, or correction fees resulting from our mistake are paid by YES — not by you. This is our guarantee, documented in our service agreement.",
  },
  {
    q: "Can you integrate with our existing HR system?",
    a: "Yes. We support API integration with major HR platforms and can accept data via secure file transfer for custom systems. Our team handles the integration setup and ongoing data validation.",
  },
]

const platformCapabilities = [
  "Multi-currency salary support",
  "Variable compensation processing",
  "Leave and absence management integration",
  "Custom reporting and analytics",
]

export default function Payroll() {
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
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
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
            ERCA-integrated payroll processing with zero-error filing, automated
            pension remittance, and a guarantee that backs every calculation.
          </p>
          <div className="mt-10">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to Our Team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-near-black/10">
        <div className="container-yes py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <StatCounter value={10} suffix="+" label="Years Processing Payroll" proofSource="Since 2015" />
            <StatCounter value={99.99} suffix="%" label="Calculation Accuracy" proofSource="Audited records" />
            <StatCounter value={0} label="ERCA Penalties Incurred" proofSource="Clean compliance record" />
            <StatCounter value={48} suffix="hr" label="Maximum Processing Time" proofSource="SLA guarantee" />
          </div>
        </div>
      </section>

      {/* ERCA Integration */}
      <section className="section-spacing">
        <div className="container-yes">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Integration"
                subtitle="Our direct integration with ERCA eliminates manual filing, reduces errors, and ensures your tax obligations are met on time, every time."
              >
                ERCA Integration
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
                Compliance Stack
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
              Any penalties, interest, or correction fees resulting from a YES
              payroll error are absorbed by us. This guarantee is documented in
              every service agreement. Zero risk to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Process" align="center">
            How Payroll Runs
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="surface-card p-8 text-center">
                <span
                  className="text-[40px] font-black text-wise-green/30 leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {s.step}
                </span>
                <h3
                  className="mt-3 text-base font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-[13px] text-gray font-medium leading-relaxed"
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

      {/* Platform Partners */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Platform" align="center">
            Payroll Platform
          </SectionHeading>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <StatCounter value={5000} suffix="+" label="Payslips Processed Monthly" proofSource="Live platform data" />
              <StatCounter value={48} suffix="hr" label="Max Processing Time" proofSource="SLA commitment" />
              <StatCounter value={100} suffix="%" label="On-Time Filing Rate" proofSource="ERCA filing records" />
            </div>
            <div className="surface-card p-8 md:p-10">
              <h3
                className="text-base font-black leading-[0.85] mb-5"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Platform Capabilities
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
                Payroll Without <span className="hook">Risk</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Get a detailed walkthrough of our payroll platform and compliance guarantees.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Talk to Our Team
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
