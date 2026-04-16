import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const pillars = [
  {
    number: "01",
    title: "Primary Source Contact",
    description:
      "We go directly to the issuing institution. University registrars, former employers, licensing bodies, courts. No intermediaries, no databases of databases.",
  },
  {
    number: "02",
    title: "Cross-Reference Analysis",
    description:
      "Every document is cross-referenced against multiple sources. Dates, titles, registration numbers, and institutional records must align before a credential is cleared.",
  },
  {
    number: "03",
    title: "Risk Classification",
    description:
      "Every verification returns a clear status: Verified, Discrepancy Found, Unable to Verify, or Adverse Finding. No ambiguity in your hiring decision.",
  },
]

const verificationScopes = [
  {
    title: "Academic Verification",
    checks: [
      "Degree and diploma authenticity",
      "Institution accreditation status",
      "Dates of attendance confirmation",
      "Graduation status and honors",
    ],
  },
  {
    title: "Criminal Record Screening",
    checks: [
      "Federal police clearance verification",
      "Regional court record checks",
      "International watchlist screening",
      "Regulatory sanctions search",
    ],
  },
  {
    title: "Professional History",
    checks: [
      "Employment dates and title verification",
      "Reason for departure confirmation",
      "Performance and conduct inquiries",
      "Professional license validation",
    ],
  },
  {
    title: "Reference & Character",
    checks: [
      "Structured reference interviews",
      "Leadership and competency assessment",
      "Cultural fit evaluation",
      "Integrity and reliability indicators",
    ],
  },
]

const faqs = [
  {
    q: "What is Primary Source Verification (PSV)?",
    a: "PSV means contacting the original issuing authority directly to verify a credential. Instead of relying on copies or third-party databases, we confirm directly with universities, employers, licensing bodies, and government agencies.",
  },
  {
    q: "How long does a full verification take?",
    a: "Standard verification completes within 3-5 business days. Complex cases involving international institutions or multiple jurisdictions may take 7-10 business days. Rush processing is available for time-sensitive hires.",
  },
  {
    q: "Can you verify international credentials?",
    a: "Yes. We verify credentials from institutions across Africa, the Middle East, Europe, and North America. Our network of verification partners covers over 120 countries.",
  },
  {
    q: "What happens when a discrepancy is found?",
    a: "We document the discrepancy with full evidence and present it in your report. We do not make hiring decisions — we provide verified facts so you can make informed decisions. Our team can also advise on how to handle common discrepancy scenarios.",
  },
  {
    q: "Is background verification legally required in Ethiopia?",
    a: "While not universally mandated by law, background verification is considered best practice and is increasingly required by regulators in financial services, healthcare, and education sectors. Many international organizations require it as part of their global compliance standards.",
  },
]

export default function Integrity() {
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
              Background Verification
            </span>
          </div>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Every Credential Verified.{" "}
            <span className="hook">Every Claim Confirmed.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Primary Source Verification for every hire. We contact issuing
            institutions directly — no shortcuts, no third-party databases, no
            assumptions.
          </p>
          <div className="mt-10">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Request Verification
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PSV Methodology */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Methodology"
            subtitle="Our Primary Source Verification methodology ensures every credential is verified at the origin — not through intermediaries."
          >
            The PSV Standard
          </SectionHeading>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.number} className="surface-card p-8 md:p-10">
                <span
                  className="text-[48px] font-black text-wise-green/30 leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.number}
                </span>
                <h3
                  className="mt-4 text-xl font-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.title}
                </h3>
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

      {/* Verification Scope */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Scope" align="center">
            Verification Coverage
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {verificationScopes.map((scope, i) => (
              <div key={i} className="surface-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-full bg-wise-green/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark-green">
                      <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3
                    className="text-base font-black leading-[0.85]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {scope.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {scope.checks.map((check, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[13px] text-gray font-medium leading-relaxed"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-positive-green shrink-0" />
                      {check}
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
                Verify Before You <span className="hook">Hire</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Request a verification package tailored to your hiring volume and requirements.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Request Verification
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
