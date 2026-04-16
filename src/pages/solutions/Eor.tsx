import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const lawRequirements = [
  "Entity registration with the Ministry of Trade",
  "70/30 local-to-foreign staffing ratio compliance",
  "Monthly pension contributions to PSSSA",
  "Income tax withholding and ERCA filing",
  "Labor dispute resolution under Proclamation 1156/2019",
]

const yesProtections = [
  "Licensed Ethiopian entity — your legal employer of record",
  "Real-time ratio monitoring with automated alerts",
  "Automated pension calculation and remittance",
  "ERCA-integrated payroll with zero-error filing",
  "In-house labor counsel for dispute prevention and resolution",
]

const benefits = [
  {
    title: "Risk Mitigation",
    description:
      "Full legal liability sits with YES. You operate in Ethiopia without entity exposure, personal director risk, or regulatory surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 7V13C4 19.63 8.28 25.79 14 27C19.72 25.79 24 19.63 24 13V7L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Speed to Market",
    description:
      "Hire your first employee in Ethiopia within 5 business days. No entity registration, no six-month incorporation timeline.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cost Clarity",
    description:
      "One transparent monthly fee per employee. No hidden charges for tax filings, pension remittance, or compliance updates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12H24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "A team that has managed employment in Ethiopia since 2015. We know the regulators, the processes, and the precedents.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17.09 9.26L24 10.27L19 15.14L20.18 22.02L14 18.77L7.82 22.02L9 15.14L4 10.27L10.91 9.26L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: "What exactly is an Employer of Record?",
    a: "An EOR is a licensed local entity that legally employs workers on your behalf. YES becomes the legal employer in Ethiopia, handling contracts, payroll, tax, and compliance — while you manage the day-to-day work and relationship with your team.",
  },
  {
    q: "How does Proclamation 1156/2019 affect foreign employers?",
    a: "Proclamation 1156/2019 governs all employment relationships in Ethiopia. It requires compliant employment contracts, proper termination procedures, pension contributions, and adherence to working hour limits. Non-compliance carries significant penalties including fines and operational suspension.",
  },
  {
    q: "When should I use an EOR vs. setting up a local entity?",
    a: "An EOR is ideal when you need to hire quickly (under 20 employees), test the market before committing to a full entity, or want to avoid the cost and complexity of Ethiopian company registration. A local entity makes sense once you have 20+ employees and long-term operational plans.",
  },
  {
    q: "How quickly can I hire my first employee?",
    a: "From signed agreement to first employee onboarded: 5 business days. We handle the employment contract, benefits enrollment, payroll setup, and compliance registration in parallel.",
  },
  {
    q: "What does EOR service cost?",
    a: "We charge a flat monthly fee per employee that covers legal employment, payroll processing, tax filing, pension management, and ongoing compliance. No setup fees, no hidden charges. Contact us for a detailed quote based on your team size.",
  },
]

const platformPartners = [
  {
    title: "Dedicated Account Manager",
    description: "A single point of contact who knows your team, your industry, and your operational requirements.",
  },
  {
    title: "Real-Time Compliance Dashboard",
    description: "Track employment status, contract renewals, tax filings, and pension contributions in one view.",
  },
  {
    title: "Flexible Contract Structures",
    description: "Fixed-term, indefinite, or project-based — we structure contracts to match your operational needs.",
  },
  {
    title: "Seamless Offboarding",
    description: "When contracts end, we handle termination compliance, final pay calculation, severance, and documentation.",
  },
]

export default function Eor() {
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
              Employer of Record
            </span>
          </div>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Employ in Ethiopia.{" "}
            <span className="hook">We Handle the Complexity.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Legally employ workers in Ethiopia without registering an entity. YES
            acts as your licensed employer of record — handling contracts, payroll,
            tax, pension, and full regulatory compliance.
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

      {/* Proclamation 1156/2019 Compliance */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Compliance"
            subtitle="Ethiopian employment law is specific and enforcement is increasing. Here is how the law maps to our protection layer."
          >
            Proclamation 1156/2019 Compliance
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Law Requirements */}
            <div className="surface-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-8 h-8 rounded-full bg-near-black/5 flex items-center justify-center text-near-black"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2V16M2 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <h3
                  className="text-lg font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Law Requirements
                </h3>
              </div>
              <ul className="space-y-4">
                {lawRequirements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-warm-dark font-medium leading-relaxed"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-danger-red shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* YES Protection */}
            <div className="surface-card p-8 md:p-10" style={{ borderColor: "color-mix(in srgb, var(--color-wise-green) 40%, transparent)" }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-wise-green/20 flex items-center justify-center text-dark-green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9L8 13L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3
                  className="text-lg font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  YES Protection
                </h3>
              </div>
              <ul className="space-y-4">
                {yesProtections.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-warm-dark font-medium leading-relaxed"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-positive-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Benefits" align="center">
            Why Companies Choose EOR
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b, i) => (
              <div key={i} className="surface-card p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-wise-green/10 flex items-center justify-center mx-auto text-dark-green mb-5">
                  {b.icon}
                </div>
                <h3
                  className="text-lg font-black leading-[0.85] mb-3"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {b.description}
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
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Partnership" align="center">
            What You Get as a Partner
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            {platformPartners.map((p, i) => (
              <div key={i} className="surface-card p-8">
                <div className="w-8 h-8 rounded-full bg-wise-green/10 flex items-center justify-center text-dark-green mb-4">
                  <span
                    className="text-[14px] font-black"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-base font-black leading-[0.85] mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.description}
                </p>
              </div>
            ))}
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
                Start Hiring in <span className="hook">Ethiopia</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                One conversation to map your requirements. No commitment required.
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
