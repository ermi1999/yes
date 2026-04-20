import { Link } from "react-router-dom"
import { useTextReveal } from "@/hooks/useTextReveal"
import { SEOHead } from "@/components/seo/SEOHead"
import { JsonLd } from "@/components/seo/JsonLd"

const calt: React.CSSProperties = { fontFeatureSettings: '"calt"' }

export default function Privacy() {
  const h1Ref = useTextReveal()

  return (
    <article className="bg-white text-near-black">
      <SEOHead
        title="Privacy Policy | YES Employment Solutions"
        description="Privacy policy for YES Employment Solutions. Learn how we collect, use, store, and protect personal data in connection with our employment, recruitment, payroll, and training services."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.yes.et/privacy" },
        ],
      }} />
      {/* Hero */}
      <header className="bg-near-black text-white">
        <div className="container-yes py-24 md:py-32">
          <h1
            ref={h1Ref}
            className="invisible text-4xl leading-[0.85] font-black md:text-6xl"
            style={calt}
          >
            Privacy <span className="hook">Policy</span>
          </h1>
          <p
            className="mt-6 text-[15px] leading-[1.44] font-medium text-white/50"
            style={calt}
          >
            Effective Date: February 28, 2026 | Last Updated: February 28, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container-yes py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Intro */}
          <section className="mb-14">
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              YES | Your Employment Solutions ("YES," "we," "our," or "us") is
              committed to protecting the privacy and security of personal data
              entrusted to us by our clients, candidates, employees, and website
              visitors. This Privacy Policy explains how we collect, use, store,
              share, and protect personal data in connection with our services.
            </p>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              This policy is governed by the Ethiopian Personal Data Protection
              Proclamation No. 1321/2024 (PDPP), the Constitution of the Federal
              Democratic Republic of Ethiopia (Article 26), and applicable
              international data protection laws including the EU General Data
              Protection Regulation (GDPR) and UK GDPR where our services
              involve data subjects in those jurisdictions.
            </p>
          </section>

          {/* 1 — Data Controller */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              1. Data Controller
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <strong>YES | Your Employment Solutions</strong>
              <br />
              Suite 301E, Bethlehem Plaza, Kenenisa Avenue, Megenagna, Addis
              Ababa, Ethiopia
            </p>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Email:{" "}
              <a
                href="mailto:info@yes.et"
                className="text-wise-green hover:underline"
              >
                info@yes.et
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+251942070707"
                className="text-wise-green hover:underline"
              >
                +251 942 07 07 07
              </a>
            </p>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              For data protection inquiries, contact us at{" "}
              <a
                href="mailto:info@yes.et"
                className="text-wise-green hover:underline"
              >
                info@yes.et
              </a>
              . We will respond to verified requests within 30 days, or within
              the timeframe required by applicable law.
            </p>
          </section>

          {/* 2 — Personal Data We Collect */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              2. Personal Data We Collect
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We collect personal data necessary to deliver our employment,
              recruitment, payroll, training, and advisory services. The
              categories of data we collect depend on your relationship with
              YES:
            </p>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              2.1 Website Visitors
            </h3>
            <ul
              className="list-disc space-y-2 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                Device and browser information (type, operating system, screen
                resolution)
              </li>
              <li>IP address and approximate geographic location</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referral source (how you reached our website)</li>
              <li>
                Cookie identifiers and similar tracking technologies (see
                Section 8)
              </li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              2.2 Candidates and Talent Network Members
            </h3>
            <ul
              className="list-disc space-y-2 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                Full name, email address, phone number, and physical address
              </li>
              <li>Curriculum vitae / resume and cover letter</li>
              <li>
                Employment history, education, and professional qualifications
              </li>
              <li>
                Skills assessments, vetting results, and reference check
                outcomes
              </li>
              <li>Professional certifications (including CISI credentials)</li>
              <li>LinkedIn profile URL and professional portfolio links</li>
              <li>Language proficiency and work authorization status</li>
              <li>Salary expectations and availability</li>
              <li>
                Photograph (only if voluntarily provided in CV or application)
              </li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              2.3 Client Company Representatives
            </h3>
            <ul
              className="list-disc space-y-2 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>Contact person name, title, email, and phone number</li>
              <li>Company name, address, and registration details</li>
              <li>
                Hiring requirements, job descriptions, and organizational
                structure
              </li>
              <li>Contract and billing information</li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              2.4 Employees Managed Under EOR Services
            </h3>
            <ul
              className="list-disc space-y-2 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>Full legal name, date of birth, nationality, and gender</li>
              <li>
                Government-issued identification numbers (ID card, passport,
                TIN)
              </li>
              <li>Bank account details for salary payments</li>
              <li>Salary, compensation, and benefits information</li>
              <li>
                Tax withholding calculations and social security contributions
              </li>
              <li>Employment contract terms, start date, and role details</li>
              <li>Leave records, performance data, and disciplinary actions</li>
              <li>Emergency contact information</li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              2.5 Sensitive Personal Data
            </h3>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We may process the following categories of sensitive data only
              with your explicit consent or where required by law:
            </p>
            <ul
              className="list-disc space-y-2 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                Health information (where relevant to employment fitness
                assessments or leave entitlements)
              </li>
              <li>
                Criminal background check results (where legally required for
                specific roles)
              </li>
              <li>
                Biometric data (only if used for access control at client
                premises, with separate consent)
              </li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We do not collect data on political opinions, religious beliefs,
              trade union membership, sexual orientation, or genetic data unless
              explicitly required by law and with prior authorization from the
              Ethiopian Communications Authority (ECA) as required under PDPP
              2024.
            </p>
          </section>

          {/* 3 — How We Use Your Data */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              3. How We Use Your Data
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Purpose
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Data Categories
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Recruitment and talent matching
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Candidate profile, skills, experience, vetting results
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent; contract performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Employer of Record services
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Employee identity, salary, tax, benefits
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation (tax/labor law); contract performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Payroll processing and tax filing
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Salary, bank details, TIN, social security
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation (Proclamation 1156/2019; ERCA
                      regulations)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Client relationship management
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Contact details, hiring requirements, billing
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Contract performance; legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      CISI training administration
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Name, qualifications, exam results, certifications
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Contract performance; consent
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Website analytics and improvement
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Device info, browsing behavior, cookies
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent (analytics cookies); legitimate interest
                      (essential cookies)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal compliance and reporting
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      As required by applicable law
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Communication and marketing
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Name, email, preferences
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent (marketing); legitimate interest (service updates)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 — Who We Share Your Data With */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              4. Who We Share Your Data With
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We share personal data only where necessary to deliver our
              services, comply with legal obligations, or with your explicit
              consent. We never sell personal data.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Recipient
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Purpose
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Safeguards
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Client companies
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Presenting vetted candidate profiles for open positions
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Shared only with candidate consent; limited to
                      role-relevant data
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Ethiopian Revenue and Customs Authority (ERCA)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Tax withholding and filing obligations
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation under Ethiopian tax law
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Private Organisation Employees Social Security Agency
                      (PrivoES)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Social security registration and contributions
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation under social security law
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Ministry of Labor and Social Affairs
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Employee registration, work permit applications
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation under Proclamation 1156/2019
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Banks and financial institutions
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Salary payments to employee accounts
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Contract performance; encrypted transmission
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      CISI / Examready
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Training enrollment and exam administration
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Data Processing Agreement in place; consent obtained
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Background verification providers
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Reference checks and credential verification
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Candidate consent; limited data shared
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      IT service providers
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Hosting, security, CRM, and communication tools
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Data Processing Agreements; access controls
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5 — International Data Transfers */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              5. International Data Transfers
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Personal data collected in Ethiopia is stored on servers located
              in Ethiopia in compliance with PDPP 2024 data localization
              requirements.
            </p>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Where our services require transferring personal data outside
              Ethiopia (for example, when presenting candidate profiles to
              international clients or coordinating with overseas service
              providers), we ensure the following safeguards are in place:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                <strong>Explicit consent:</strong> We obtain your informed,
                specific consent before transferring your data internationally
              </li>
              <li>
                <strong>Contractual safeguards:</strong> We execute Data
                Processing Agreements and, for EU/UK transfers, Standard
                Contractual Clauses (SCCs) approved by the European Commission
              </li>
              <li>
                <strong>Adequacy assessment:</strong> We verify that the
                receiving jurisdiction provides adequate data protection, or
                implement supplementary measures where it does not
              </li>
              <li>
                <strong>Data minimization:</strong> We transfer only the minimum
                data necessary for the stated purpose
              </li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <strong>For EU/UK Data Subjects:</strong> Ethiopia does not
              currently hold an EU adequacy decision. All transfers of EU/UK
              personal data to Ethiopia are governed by Standard Contractual
              Clauses (SCCs) supplemented by Transfer Impact Assessments (TIAs)
              documenting the safeguards in place.
            </p>
          </section>

          {/* 6 — Data Retention */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              6. Data Retention
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Data Category
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Retention Period
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Website visitor cookies
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Session to 12 months (varies by cookie type)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Candidate profiles (active roster)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Duration of roster membership + 2 years
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent; legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Candidate profiles (not selected)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      12 months from last activity
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legitimate interest; consent withdrawal honored
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Employee payroll and tax records
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      5 fiscal years after the relevant fiscal year
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation (Ethiopian tax law)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Employment contracts and HR records
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Duration of employment + 5 years
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Legal obligation; legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Client company records
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Duration of contract + 3 years
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Contract performance; legitimate interest
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      CISI training and certification records
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Indefinite (professional credential)
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Consent; legitimate interest
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              When retention periods expire, personal data is securely deleted
              or anonymized. You may request earlier deletion subject to our
              legal obligations (see Section 7).
            </p>
          </section>

          {/* 7 — Your Rights */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              7. Your Rights
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Under PDPP 2024 and, where applicable, the GDPR and UK GDPR, you
              have the following rights:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Right
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to be informed
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Know what personal data we collect, why, and how it is
                      used
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right of access
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Request a copy of the personal data we hold about you
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to rectification
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Request correction of inaccurate or incomplete personal
                      data
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to erasure
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Request deletion of your data where no legal basis for
                      continued retention exists
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to restrict processing
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Request limitation of processing in certain circumstances
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to object
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Object to processing based on legitimate interest or for
                      direct marketing purposes
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right to data portability
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Receive your data in a structured, commonly used,
                      machine-readable format
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Right regarding automated decisions
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Not be subject to decisions based solely on automated
                      processing that significantly affect you
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:info@yes.et"
                className="text-wise-green hover:underline"
              >
                info@yes.et
              </a>
              . We will verify your identity before processing any request.
              Requests will be addressed within 30 days.
            </p>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              You also have the right to lodge a complaint with the Ethiopian
              Communications Authority (ECA) if you believe your data protection
              rights have been violated. For EU/UK data subjects, complaints may
              also be directed to your local supervisory authority.
            </p>
          </section>

          {/* 8 — Cookies and Tracking Technologies */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              8. Cookies and Tracking Technologies
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Category
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Purpose
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Consent Required
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Essential
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Site functionality, security, session management
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      No (strictly necessary)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Analytics
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Understanding visitor behavior, page performance, traffic
                      sources
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Functional
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Remembering preferences, language settings, form data
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 font-bold">
                      Marketing
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Delivering relevant content, measuring campaign
                      effectiveness
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5">
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              When you first visit yes.et, a cookie consent banner will allow
              you to accept or decline non-essential cookies. You may change
              your preferences at any time through the cookie settings link in
              the website footer.
            </p>
          </section>

          {/* 9 — Data Security */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              9. Data Security
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We implement appropriate technical and organizational measures to
              protect personal data against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>
                Role-based access controls limiting data access to authorized
                personnel
              </li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>
                Secure physical access controls at our offices and data storage
                facilities
              </li>
              <li>
                Staff training on data protection obligations and incident
                response procedures
              </li>
              <li>
                Data Processing Agreements with all third-party service
                providers
              </li>
              <li>
                Incident response plan with 72-hour breach notification to the
                ECA as required by PDPP 2024
              </li>
            </ul>
          </section>

          {/* 10 — Children's Data */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              10. Children's Data
            </h2>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Our services are not directed at individuals under the age of 18.
              We do not knowingly collect personal data from minors. If we
              become aware that we have collected data from a minor without
              appropriate parental or guardian consent, we will delete that data
              promptly.
            </p>
          </section>

          {/* 11 — Changes to This Policy */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              11. Changes to This Policy
            </h2>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We may update this Privacy Policy to reflect changes in our
              practices, legal requirements, or regulatory guidance. Material
              changes will be communicated via email to affected data subjects
              and posted on our website with an updated effective date.
            </p>
          </section>

          {/* 12 — Contact Us */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              12. Contact Us
            </h2>
            <div className="rounded-[var(--radius-card)] bg-light-surface p-6 md:p-8">
              <p
                className="text-[15px] leading-[1.44] font-medium text-near-black"
                style={calt}
              >
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@yes.et"
                  className="text-wise-green hover:underline"
                >
                  info@yes.et
                </a>
                <br />
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+251942070707"
                  className="text-wise-green hover:underline"
                >
                  +251 942 07 07 07
                </a>
                <br />
                <br />
                <strong>Mail:</strong>
                <br />
                Data Protection Inquiries
                <br />
                YES | Your Employment Solutions
                <br />
                Suite 301E, Bethlehem Plaza
                <br />
                Kenenisa Avenue, Megenagna
                <br />
                Addis Ababa, Ethiopia
                <br />
                <br />
                <strong>Supervisory Authority:</strong> Ethiopian Communications
                Authority (ECA)
              </p>
            </div>
          </section>

          {/* Back link */}
          <div className="border-t border-near-black/10 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-gray transition-colors hover:text-near-black"
              style={calt}
            >
              <span aria-hidden="true">&larr;</span> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
