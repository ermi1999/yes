import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"
import { SEOHead } from "@/components/seo/SEOHead"
import { JsonLd } from "@/components/seo/JsonLd"

const pillars = [
  {
    number: "01",
    title: "Primary Source Contact",
    description:
      "Every verification goes directly to the issuing authority — the university registrar, the employer's HR department, the Federal Police Commission. We never rely on candidate-supplied documents alone.",
  },
  {
    number: "02",
    title: "Cross-Reference Analysis",
    description:
      "Claims are triangulated across multiple sources. Employment dates checked against pension records. Academic timelines matched against professional history. Inconsistencies surface through systematic comparison.",
  },
  {
    number: "03",
    title: "Risk Classification",
    description:
      "Every finding is classified — verified, unverifiable, discrepant, or critical. You receive a structured report with severity ratings, evidence documentation, and our professional risk assessment.",
  },
]

const verificationScopes = [
  {
    title: "Academic Verification",
    description: "Physical verification at source institutions across all Ethiopian universities and colleges. We confirm degrees, dates, and standing directly with registrars.",
    checks: [
      "Degree and diploma authentication",
      "Transcript verification with registrar offices",
      "Professional certification confirmation",
      "Foreign credential equivalency validation",
    ],
  },
  {
    title: "Criminal Record Screening",
    description: "Federal and regional police clearance verification. We navigate the process across jurisdictions so you don't have to.",
    checks: [
      "Federal Police Commission clearance",
      "Regional police bureau records",
      "Court records search (civil & criminal)",
      "Sanctions and watchlist screening",
    ],
  },
  {
    title: "Professional History",
    description: "Employment dates, role titles, and performance verified through direct contact with former employers. Not just reference letters — actual confirmation.",
    checks: [
      "Employment dates and title confirmation",
      "Supervisor and peer reference interviews",
      "Performance and conduct assessment",
      "Reason for departure verification",
    ],
  },
  {
    title: "Reference & Character",
    description: "Structured conversations with former managers and colleagues. We ask the questions that reveal character, reliability, and fit.",
    checks: [
      "Structured competency-based interviews",
      "Character and integrity assessment",
      "Leadership and collaboration evaluation",
      "Cultural compatibility indicators",
    ],
  },
]

const faqs = [
  {
    q: "What is PSV methodology and why does it matter?",
    a: "PSV stands for Pre-employment Screening & Verification. It is a forensic approach to candidate vetting that treats every credential claim as unverified until independently confirmed through primary sources. Unlike basic reference checks, PSV involves direct contact with issuing institutions, employer HR departments, police records offices, and regulatory bodies. In Ethiopia, where document fraud and credential misrepresentation are documented risks, PSV methodology is the only reliable standard.",
  },
  {
    q: "How long does a full background verification take?",
    a: "Standard verification (academic + criminal + employment history) takes 5-7 business days. Enhanced verification packages that include international checks, financial background, or deep reference interviews take 10-14 business days. We provide interim status reports every 48 hours so you are never waiting without visibility.",
  },
  {
    q: "Can YES verify credentials from outside of Ethiopia?",
    a: "Yes. For candidates with international education or work history, we leverage partner verification networks in 30+ countries. This is particularly relevant for diaspora candidates returning to Ethiopia and for verifying credentials from East African, European, and North American institutions.",
  },
  {
    q: "What happens if a discrepancy is found during verification?",
    a: "Every discrepancy is classified by severity: minor (date variations, title differences), moderate (unverifiable claims, partial credential), or critical (fabricated credentials, concealed criminal history). You receive a detailed discrepancy report with our risk assessment and recommendation. The final hiring decision always remains yours.",
  },
  {
    q: "Is background verification required for EOR employees?",
    a: "We strongly recommend it, but it is not mandatory for standard EOR engagements. However, for fiduciary roles (finance, legal, executive), roles involving vulnerable populations, or positions with access to sensitive data, background verification is included as a standard component of our service. Many of our clients opt for verification across all roles as a matter of risk policy.",
  },
]

export default function Integrity() {
  const h1Ref = useTextReveal()

  return (
    <>
      <SEOHead
        title="Background Checks Ethiopia | Employee Vetting & Verification | YES"
        description="Primary source verification across all Ethiopian regions. Academic, criminal, professional, and reference checks with physical on-site verification at source institutions."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Background Verification & Vetting in Ethiopia",
        description: "Forensic-grade background verification across all Ethiopian regions. Academic, criminal, professional, and reference checks using PSV methodology.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Background Verification",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Integrity & Vetting", item: "https://www.yes.et/solutions/integrity" },
        ],
      }} />
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
            ref={h1Ref}
            className="invisible text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Every Credential Verified.{" "}
            <span className="hook">Every Claim Confirmed.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            In a market where document fraud is a real risk, we verify in person. Academic records, criminal clearance, employment history — confirmed at the source institution, not through a database.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <Link
              to="/solutions/talent-acquisition"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 text-near-black text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
            >
              Talent Acquisition
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[12px] text-wise-green font-medium">Accepting verification requests</span>
            <span className="text-near-black/10">|</span>
            <span className="text-[12px] text-wise-green font-medium">All 13 Ethiopian Regions Covered</span>
          </div>
        </div>
      </section>

      {/* PSV Methodology — stacked numbered rows */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading
            label="Our Standard"
            subtitle="Pre-employment Screening & Verification: a forensic methodology that treats every credential as unverified until confirmed through primary sources."
            align="center"
          >
            The PSV <span className="hook">Methodology</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-6">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="group flex flex-col md:flex-row items-start gap-6 md:gap-10 p-8 md:p-10 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="text-[48px] md:text-[56px] font-black leading-none shrink-0 text-near-black/[0.06] select-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {p.number}
                </span>
                <div>
                  <h3
                    className="text-[24px] md:text-[28px] font-black leading-[0.85] mb-3"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] text-warm-dark leading-[1.7] font-medium max-w-lg"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Scope — italic title cards */}
      <section className="section-spacing">
        <div className="container-yes">
          <SectionHeading label="Verification Scope" align="center">
            What We <span className="hook">Verify</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {verificationScopes.map((scope, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                <span
                  className="hook text-[26px] md:text-[30px] block mb-5"
                  style={{ fontWeight: 400 }}
                >
                  {scope.title}
                </span>
                <p
                  className="text-[13px] text-warm-dark font-medium leading-[1.6] mb-4"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {scope.description}
                </p>
                <ul className="space-y-2">
                  {scope.checks.map((check, j) => (
                    <li
                      key={j}
                      className="text-[13px] text-warm-dark font-medium leading-[1.6]"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
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
                Request <span className="hook">Verification</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Need to verify a candidate? We'll walk you through our process.
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

      <VelvetRope />
    </>
  )
}
