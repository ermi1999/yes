import { Link } from "react-router-dom"
import { useTextReveal } from "@/hooks/useTextReveal"

const calt: React.CSSProperties = { fontFeatureSettings: '"calt"' }

export default function Terms() {
  const h1Ref = useTextReveal()

  return (
    <article className="bg-white text-near-black">
      {/* Hero */}
      <header className="bg-near-black text-white">
        <div className="container-yes py-24 md:py-32">
          <h1
            ref={h1Ref}
            className="invisible text-4xl leading-[0.85] font-black md:text-6xl"
            style={calt}
          >
            Terms of <span className="hook">Service</span>
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
              These Terms of Service ("Terms") govern your access to and use of
              the website, services, and platforms operated by YES | Your
              Employment Solutions ("YES," "we," "our," or "us"), including but
              not limited to yes.et, palmjobs.et, and all related subdomains,
              applications, and services.
            </p>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              By accessing our website or engaging our services, you agree to be
              bound by these Terms. If you do not agree to these Terms, please
              do not use our website or services.
            </p>
          </section>

          {/* 1 — Definitions */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              1. Definitions
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-[13px]">
                <thead>
                  <tr>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Term
                    </th>
                    <th className="bg-near-black/[0.03] px-3 py-2 text-left text-[11px] font-bold tracking-[0.06em] text-near-black/50 uppercase">
                      Definition
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium text-warm-dark">
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Client"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      Any company, organization, or entity that engages YES for
                      employment solutions, recruitment, EOR, payroll, training,
                      or advisory services
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Candidate" or "Talent"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      Any individual who applies to join the YES Executive
                      Roster, submits a profile through our platforms, or is
                      presented for employment opportunities
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Employee"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      Any individual employed through YES under an Employer of
                      Record (EOR) arrangement on behalf of a Client
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Services"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      All services provided by YES including Employer of Record,
                      talent acquisition, integrity and vetting, payroll and tax
                      administration, training and certification, and market
                      advisory
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Platforms"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      yes.et, palmjobs.et, and any related subdomains, portals,
                      or applications operated by YES
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      <strong>"Content"</strong>
                    </td>
                    <td className="border-t border-near-black/10 px-3 py-2.5 align-top">
                      All text, data, graphics, documents, guides, reports, and
                      other materials published on our Platforms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 2 — Our Services */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              2. Our Services
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              YES provides employment infrastructure services in Ethiopia
              including:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                <strong>Employer of Record (EOR):</strong> Legal employment,
                contract administration, and compliance management on behalf of
                Client companies operating in Ethiopia
              </li>
              <li>
                <strong>Talent Acquisition:</strong> Recruitment, sourcing,
                screening, and placement services across sectors
              </li>
              <li>
                <strong>Integrity and Vetting:</strong> Background verification,
                reference checks, credential validation, and compliance
                screening
              </li>
              <li>
                <strong>Payroll and Tax Administration:</strong> Salary
                processing, PAYE withholding, social security contributions, and
                regulatory filings
              </li>
              <li>
                <strong>Training and Certification:</strong> CISI-accredited
                capital markets training and professional development programs
              </li>
              <li>
                <strong>Market Intelligence:</strong> Research, guides, and
                advisory content for companies operating in or expanding to
                Ethiopia
              </li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Specific service terms, scope, deliverables, and fees are governed
              by individual service agreements executed between YES and the
              Client. These Terms apply in addition to, and do not replace, any
              executed service agreement.
            </p>
          </section>

          {/* 3 — Eligibility and Account Responsibility */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              3. Eligibility and Account Responsibility
            </h2>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                You must be at least 18 years of age to use our Services or
                Platforms
              </li>
              <li>
                If you access our Services on behalf of a company or
                organization, you represent that you have the authority to bind
                that entity to these Terms
              </li>
              <li>
                You are responsible for maintaining the confidentiality of any
                account credentials and for all activities that occur under your
                account
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                when using our Platforms or submitting applications
              </li>
            </ul>
          </section>

          {/* 4 — Candidate and Talent Network Terms */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              4. Candidate and Talent Network Terms
            </h2>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              4.1 Application and Vetting
            </h3>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              By submitting an application to join the YES Executive Roster, you
              acknowledge and agree that:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                All information provided in your application is truthful,
                accurate, and complete
              </li>
              <li>
                YES will conduct vetting processes including skills assessments,
                reference checks, and credential verification
              </li>
              <li>
                Inclusion on the Executive Roster does not guarantee employment
                or placement
              </li>
              <li>
                YES may remove your profile from the Executive Roster at its
                discretion if information is found to be inaccurate or if you no
                longer meet our standards
              </li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              4.2 Data Usage and Consent
            </h3>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              By submitting your profile, you consent to YES storing,
              processing, and sharing your professional data with prospective
              employers for the purpose of matching you to suitable employment
              opportunities. You may withdraw this consent at any time by
              contacting{" "}
              <a
                href="mailto:info@yes.et"
                className="text-wise-green hover:underline"
              >
                info@yes.et
              </a>
              , which will result in removal from the Executive Roster.
            </p>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              4.3 No Fee to Candidates
            </h3>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              YES does not charge fees to Candidates for recruitment, vetting,
              or placement services. Our services are retained and compensated
              by Client companies. Any entity claiming to represent YES and
              requesting payment from Candidates is acting fraudulently and
              should be reported to{" "}
              <a
                href="mailto:info@yes.et"
                className="text-wise-green hover:underline"
              >
                info@yes.et
              </a>{" "}
              immediately.
            </p>
          </section>

          {/* 5 — Client Terms */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              5. Client Terms
            </h2>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              5.1 Service Agreements
            </h3>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Client engagement with YES is governed by individual service
              agreements that specify scope, fees, timelines, obligations, and
              termination provisions. These Terms of Service supplement but do
              not override the specific terms of any executed service agreement.
            </p>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              5.2 Client Obligations
            </h3>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                Provide accurate and timely information necessary for YES to
                deliver services
              </li>
              <li>
                Comply with applicable Ethiopian labor law and international
                employment standards in respect of workers placed through YES
              </li>
              <li>
                Not directly solicit or hire Candidates introduced by YES
                outside of the agreed engagement terms
              </li>
              <li>
                Pay fees as specified in the applicable service agreement within
                the agreed payment terms
              </li>
              <li>
                Maintain confidentiality of Candidate information shared during
                the recruitment process
              </li>
            </ul>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              5.3 Non-Circumvention
            </h3>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Clients agree not to bypass YES to directly engage, employ, or
              contract Candidates introduced by YES for a period of 12 months
              following the last introduction. If a Client directly engages a
              Candidate introduced by YES during this period, a placement fee as
              specified in the applicable service agreement will apply.
            </p>
          </section>

          {/* 6 — Intellectual Property */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              6. Intellectual Property
            </h2>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                All Content on our Platforms — including text, design, graphics,
                logos, guides, reports, data briefs, and software — is the
                property of YES | Your Employment Solutions or its licensors and
                is protected by Ethiopian and international intellectual
                property laws
              </li>
              <li>
                You may access and use our Content for your own informational
                purposes. You may not reproduce, distribute, modify, create
                derivative works from, or commercially exploit any Content
                without our prior written consent
              </li>
              <li>
                The YES name, logo, "The Standard for Employment in Ethiopia,"
                and all related marks are trademarks of YES | Your Employment
                Solutions. Use without written permission is prohibited
              </li>
              <li>
                Guides and reports downloaded from the Intelligence section of
                yes.et are licensed for the personal, non-commercial use of the
                registered downloader only. Redistribution requires written
                permission
              </li>
            </ul>
          </section>

          {/* 7 — Acceptable Use of Our Platforms */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              7. Acceptable Use of Our Platforms
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              When using our Platforms, you agree not to:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>Submit false, misleading, or fraudulent information</li>
              <li>
                Attempt to gain unauthorized access to any part of our
                Platforms, systems, or databases
              </li>
              <li>
                Use automated tools (bots, scrapers, crawlers) to extract data
                from our Platforms without written permission
              </li>
              <li>
                Upload or transmit malicious code, viruses, or any material that
                could damage or interfere with our systems
              </li>
              <li>
                Use our Platforms for any purpose that violates Ethiopian law or
                the laws of your jurisdiction
              </li>
              <li>
                Impersonate any person or entity, or misrepresent your
                affiliation with any person or entity
              </li>
              <li>
                Collect, harvest, or store personal data of other users of our
                Platforms
              </li>
            </ul>
          </section>

          {/* 8 — Disclaimers */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              8. Disclaimers
            </h2>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              8.1 Information Accuracy
            </h3>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Content published on our Platforms, including guides, reports, and
              market intelligence, is provided for general informational
              purposes only. While we strive for accuracy, Content does not
              constitute legal, tax, financial, or professional advice. Laws,
              regulations, and market conditions are subject to change. You
              should consult qualified professionals before making business
              decisions based on our Content.
            </p>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              8.2 Service Availability
            </h3>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              We aim to maintain uninterrupted access to our Platforms but do
              not guarantee that our Platforms will be available at all times.
              We reserve the right to modify, suspend, or discontinue any part
              of our Platforms without prior notice.
            </p>

            <h3
              className="mt-6 mb-3 text-lg leading-[0.85] font-black"
              style={calt}
            >
              8.3 Third-Party Links
            </h3>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Our Platforms may contain links to third-party websites (including
              palmjobs.et). We are not responsible for the content, privacy
              practices, or availability of third-party websites. Access to
              linked websites is at your own risk.
            </p>
          </section>

          {/* 9 — Limitation of Liability */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              9. Limitation of Liability
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              To the maximum extent permitted by Ethiopian law:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                YES shall not be liable for any indirect, incidental,
                consequential, special, or punitive damages arising from or
                related to the use of our Platforms or Services
              </li>
              <li>
                YES's total aggregate liability for any claim arising from or
                related to these Terms shall not exceed the fees paid by you (if
                any) to YES in the 12 months preceding the claim
              </li>
              <li>
                YES does not guarantee the outcome of any recruitment process,
                placement, or employment arrangement. Results depend on factors
                outside our control including market conditions, candidate
                availability, and client decisions
              </li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Nothing in these Terms excludes or limits liability for fraud,
              willful misconduct, or any liability that cannot be excluded or
              limited under applicable law.
            </p>
          </section>

          {/* 10 — Confidentiality */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              10. Confidentiality
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Both parties agree to maintain the confidentiality of information
              designated as confidential or that would reasonably be understood
              to be confidential given the nature of the information and
              circumstances of disclosure. This includes, without limitation:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                Client business information, hiring strategies, compensation
                structures, and organizational plans
              </li>
              <li>
                Candidate personal data, vetting results, and assessment
                outcomes
              </li>
              <li>YES proprietary processes, methodologies, and technology</li>
              <li>Financial terms and pricing of service agreements</li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Confidentiality obligations survive the termination of these Terms
              or any service agreement for a period of 3 years, except for
              personal data which is governed by our Privacy Policy and
              applicable data protection law.
            </p>
          </section>

          {/* 11 — Indemnification */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              11. Indemnification
            </h2>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              You agree to indemnify, defend, and hold harmless YES, its
              officers, directors, employees, and agents from and against any
              claims, damages, losses, liabilities, costs, and expenses
              (including reasonable legal fees) arising from or related to: (a)
              your breach of these Terms; (b) your violation of any applicable
              law or regulation; (c) your provision of inaccurate or misleading
              information; or (d) your infringement of any third-party rights.
            </p>
          </section>

          {/* 12 — Governing Law and Dispute Resolution */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              12. Governing Law and Dispute Resolution
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              These Terms are governed by and construed in accordance with the
              laws of the Federal Democratic Republic of Ethiopia.
            </p>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              Any dispute arising from or in connection with these Terms shall
              be resolved as follows:
            </p>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                <strong>Negotiation:</strong> The parties shall first attempt to
                resolve any dispute through good-faith negotiation within 30
                days of written notice
              </li>
              <li>
                <strong>Mediation:</strong> If negotiation fails, the dispute
                shall be submitted to mediation administered by the Addis Ababa
                Chamber of Commerce and Sectoral Associations, or another
                mutually agreed mediator
              </li>
              <li>
                <strong>Arbitration:</strong> If mediation fails, the dispute
                shall be referred to binding arbitration under the Ethiopian
                Arbitration and Conciliation Center rules. The seat of
                arbitration shall be Addis Ababa, Ethiopia. The language of
                arbitration shall be English
              </li>
            </ul>
            <p
              className="mt-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              For international Clients, YES may agree to alternative dispute
              resolution mechanisms as specified in the applicable service
              agreement, including international arbitration under LCIA or ICC
              rules where appropriate.
            </p>
          </section>

          {/* 13 — Termination */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              13. Termination
            </h2>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                We may suspend or terminate your access to our Platforms at any
                time for violation of these Terms, with or without notice
              </li>
              <li>
                Candidates may request removal from the Executive Roster at any
                time by contacting{" "}
                <a
                  href="mailto:info@yes.et"
                  className="text-wise-green hover:underline"
                >
                  info@yes.et
                </a>
              </li>
              <li>
                Clients may terminate service engagements as provided in the
                applicable service agreement
              </li>
              <li>
                Sections that by their nature should survive termination
                (including Intellectual Property, Limitation of Liability,
                Confidentiality, Indemnification, and Governing Law) shall
                survive termination of these Terms
              </li>
            </ul>
          </section>

          {/* 14 — Amendments */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              14. Amendments
            </h2>
            <p
              className="text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              YES reserves the right to modify these Terms at any time. Material
              changes will be posted on our website with an updated effective
              date and, where practicable, communicated to registered users via
              email. Your continued use of our Platforms or Services after the
              effective date of any modification constitutes your acceptance of
              the modified Terms.
            </p>
          </section>

          {/* 15 — General Provisions */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              15. General Provisions
            </h2>
            <ul
              className="list-disc space-y-3 pl-6 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              <li>
                <strong>Severability:</strong> If any provision of these Terms
                is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect
              </li>
              <li>
                <strong>Entire agreement:</strong> These Terms, together with
                our Privacy Policy and any executed service agreements,
                constitute the entire agreement between you and YES regarding
                the subject matter herein
              </li>
              <li>
                <strong>Waiver:</strong> Failure by YES to enforce any right or
                provision of these Terms shall not constitute a waiver of that
                right or provision
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign or transfer your
                rights under these Terms without our prior written consent. YES
                may assign its rights and obligations without restriction
              </li>
              <li>
                <strong>Force majeure:</strong> YES shall not be liable for any
                failure or delay in performance resulting from causes beyond our
                reasonable control, including natural disasters, war, government
                actions, telecommunications failures, or pandemic
              </li>
            </ul>
          </section>

          {/* 16 — Contact */}
          <section className="mb-14">
            <h2
              className="mb-6 text-2xl leading-[0.85] font-black md:text-3xl"
              style={calt}
            >
              16. Contact
            </h2>
            <p
              className="mb-4 text-[15px] leading-[1.44] font-medium text-warm-dark"
              style={calt}
            >
              For questions about these Terms of Service:
            </p>
            <div className="rounded-[var(--radius-card)] bg-light-surface p-6 md:p-8">
              <p
                className="text-[15px] leading-[1.44] font-medium text-near-black"
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
                <br />
                Mail: Legal Department, YES | Your Employment Solutions, Suite
                301E, Bethlehem Plaza, Kenenisa Avenue, Megenagna, Addis Ababa,
                Ethiopia
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
