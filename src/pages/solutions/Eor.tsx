import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"

const compliancePairs = [
  {
    requirement: "Fully compliant employment contracts per statutory requirements",
    protection: "YES holds all employment contracts as the legal employer",
  },
  {
    requirement: "Mandatory pension contributions to POESSA at prescribed rates",
    protection: "We manage pension enrollment and monthly contributions",
  },
  {
    requirement: "Strict termination protocols with mandatory severance calculations",
    protection: "Lawful termination processing with full severance calculation",
  },
  {
    requirement: "Income tax withholding per the revised tax brackets",
    protection: "Accurate payroll tax withholding and filing every month",
  },
  {
    requirement: "Annual leave, maternity leave, and overtime provisions per statutory minimums",
    protection: "Quarterly compliance audits and proactive regulation monitoring",
  },
]

const benefits = [
  {
    title: "Risk Mitigation",
    description:
      "YES assumes employer-of-record obligations under Ethiopian law — contracts, tax, pension, and statutory compliance — so your team stays focused on operations.",
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
      "First employee onboarded in weeks, not months. No entity registration, no prolonged legal setup.",
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
      "No entity setup costs. No hidden admin overhead. One transparent fee that covers everything.",
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
      "A decade navigating Ethiopian regulatory changes, tax audits, and labor disputes. We've seen it all.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17.09 9.26L24 10.27L19 15.14L20.18 22.02L14 18.77L7.82 22.02L9 15.14L4 10.27L10.91 9.26L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: "What is an EOR?",
    a: "An Employer of Record (EOR) is a local legal entity that employs workers on your behalf. YES becomes the legal employer under Ethiopian law, handling contracts, payroll, tax, and compliance — while you direct the day-to-day work.",
  },
  {
    q: "How does YES handle Proclamation 1156/2019?",
    a: "We draft all employment contracts to the specifications of Ethiopia's Labour Proclamation 1156/2019, manage mandatory pension and social security contributions, handle all tax filings, and ensure termination procedures follow statutory requirements.",
  },
  {
    q: "EOR vs local entity?",
    a: "A local entity requires investment commission approval, capital deposit, company registration, and ongoing corporate governance — typically 3\u20136 months and significant cost. With YES as your EOR, you're operational in weeks.",
  },
  {
    q: "How quickly can we hire?",
    a: "Typically under three weeks from signed agreement. That includes contract drafting, tax registration, pension enrollment, and employee onboarding.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on headcount, role complexity, and service scope. We provide a transparent, all-inclusive monthly fee per employee. Contact us for a quote.",
  },
]

const platformPartners = [
  {
    title: "Licensed Local Entity",
    description: "Established Ethiopian legal entity. No shell corps.",
  },
  {
    title: "Proc. 1156/2019 Native",
    description: "Contracts, termination, severance — built-in, not bolted on.",
  },
  {
    title: "End-to-End Payroll",
    description: "ERCA tax filing, pension, net pay — white-glove or API-ready.",
  },
  {
    title: "SLA-Backed Delivery",
    description: "Defined turnarounds. Error liability on us. Your SLA is our SLA.",
  },
]

export default function Eor() {
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
              Employer of Record
            </span>
          </div>
          <h1
            ref={h1Ref}
            className="invisible text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Employ in Ethiopia.{" "}
            <span className="hook">We Handle the Complexity.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Contracts, compliance, tax, pensions — every obligation under Proclamation 1156/2019, handled by a team that's done it thousands of times.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/solutions/talent-acquisition"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              Talent Acquisition
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[12px] text-wise-green font-medium">Accepting new clients</span>
            <span className="text-near-black/10">|</span>
            <span className="text-[12px] text-wise-green font-medium">Full Proclamation 1156/2019 Compliance</span>
          </div>
        </div>
      </section>

      {/* Proclamation 1156/2019 Compliance */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Ethiopian Labor Law"
            subtitle="Proclamation 1156/2019 restructured the entire employment landscape in Ethiopia. Non-compliance carries severe penalties including entity closure and personal criminal liability for directors."
            align="center"
          >
            Proclamation 1156/2019 Compliance
          </SectionHeading>

          {/* Column headers */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] gap-0 mb-6 px-8">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                What the Law Requires
              </span>
              <span />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.08em] text-wise-green"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                How YES Protects You
              </span>
            </div>

            {/* Paired rows */}
            <div className="flex flex-col gap-4">
              {compliancePairs.map((pair, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_40px_1fr] gap-4 md:gap-0 p-6 md:p-8 rounded-[var(--radius-large)] items-center transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                  style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
                >
                  {/* Requirement */}
                  <p
                    className="text-[14px] md:text-[15px] text-warm-dark font-medium leading-[1.6]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {pair.requirement}
                  </p>

                  {/* Arrow connector */}
                  <div className="hidden md:flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="var(--color-wise-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Mobile label */}
                  <div className="md:hidden flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="var(--color-wise-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-wise-green" style={{ fontFeatureSettings: '"calt"' }}>
                      YES Protection
                    </span>
                  </div>

                  {/* Protection */}
                  <p
                    className="text-[14px] md:text-[15px] text-near-black font-semibold leading-[1.6]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {pair.protection}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Emphasis */}
      <section className="section-spacing">
        <div className="container-yes">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading label="Our Position" align="center">
              Compliance Is Not a Feature. It's the <span className="hook">Foundation.</span>
            </SectionHeading>
            <p
              className="mt-4 text-[15px] text-warm-dark leading-relaxed max-w-xl mx-auto font-medium"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Every contract, every payroll cycle, every termination — structured around Proclamation 1156/2019 from day one. Not retrofitted. Not approximated. Built for Ethiopian law by a team that operates inside it every day.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Why EOR" align="center">
            The EOR <span className="hook">Advantage</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-6">
            {benefits.map((b, i) => (
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
                    {b.title}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] text-warm-dark leading-[1.7] font-medium max-w-lg"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {b.description}
                  </p>
                </div>
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

      {/* Platform Partners */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Platform Partners" align="center">
            Global EOR Platforms: We Deliver <span className="hook">Ethiopia.</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {platformPartners.map((p, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="hook text-[28px] md:text-[32px] block mb-4"
                  style={{ fontWeight: 400 }}
                >
                  {p.title}
                </span>
                <p
                  className="text-[14px] text-warm-dark font-medium leading-[1.6]"
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
                Talk to Our <span className="hook">Team</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Not sure if your Ethiopian operations are fully compliant?
                Start with a conversation.
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

      <VelvetRope />
    </>
  )
}

