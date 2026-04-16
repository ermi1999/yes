import { Link } from "react-router-dom"

const calt: React.CSSProperties = { fontFeatureSettings: '"calt"' }

export default function Terms() {
  return (
    <article className="bg-white text-near-black">
      {/* Hero */}
      <header className="bg-near-black text-white">
        <div className="container-yes py-24 md:py-32">
          <h1
            className="text-4xl md:text-6xl font-black leading-[0.85]"
            style={calt}
          >
            Terms of <span className="hook">Service</span>
          </h1>
          <p
            className="mt-6 text-[15px] text-white/50 font-medium leading-[1.44]"
            style={calt}
          >
            Effective Date: January 1, 2025
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container-yes py-16 md:py-24">
        <div className="max-w-3xl">

          {/* 1 — Definitions */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              1. Definitions
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              In these Terms of Service ("<strong>Terms</strong>"), the following terms shall have the meanings set forth below:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>"Client"</strong> means any company, organization, or individual that engages YES for employment, recruitment, or advisory services.</li>
              <li><strong>"Candidate"</strong> means any individual who submits a profile, application, or resume through our Services for the purpose of seeking employment opportunities.</li>
              <li><strong>"Employee"</strong> means any individual employed by YES under an employer-of-record arrangement on behalf of a Client.</li>
              <li><strong>"Services"</strong> means all employment solutions, recruitment, payroll, advisory, training, and related services provided by YES, whether delivered through our platforms, in person, or through other channels.</li>
              <li><strong>"Platforms"</strong> means the websites, web applications, mobile applications, and digital tools operated by YES, including yes.et, palmjobs.et, and any related subdomains or services.</li>
              <li><strong>"Content"</strong> means all text, data, graphics, images, audio, video, software, and other materials available on or through our Platforms.</li>
            </ul>
          </section>

          {/* 2 — Services */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              2. Services
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              YES Employment Solutions PLC ("<strong>YES</strong>") provides a comprehensive suite of employment and workforce solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Employer of Record (EOR):</strong> Full employment lifecycle management including hiring, contracts, compliance, and termination on behalf of Clients operating in Ethiopia and the broader East African region.</li>
              <li><strong>Talent Acquisition:</strong> Executive search, recruitment process outsourcing, volume hiring, and candidate sourcing across industries and seniority levels.</li>
              <li><strong>Integrity and Vetting:</strong> Background checks, reference verification, credential validation, and compliance screening for Candidates and Employees.</li>
              <li><strong>Payroll and Tax Administration:</strong> Payroll processing, tax computation and filing, benefits administration, and statutory compliance for Employees and Client workforces.</li>
              <li><strong>Training Academy:</strong> Professional development programs, skills training, leadership development, and workforce upskilling initiatives.</li>
              <li><strong>Advisory Services:</strong> HR consulting, labor law advisory, market entry strategy, organizational design, and workforce planning.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              Specific service terms, pricing, and deliverables are defined in individual service agreements between YES and the Client or Candidate.
            </p>
          </section>

          {/* 3 — Eligibility and Account Responsibility */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              3. Eligibility and Account Responsibility
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              By using our Services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>You are at least 18 years of age or the legal age of majority in your jurisdiction.</li>
              <li>You have the legal capacity and authority to enter into these Terms.</li>
              <li>If acting on behalf of a company or organization, you are authorized to bind that entity to these Terms.</li>
              <li>All information you provide is accurate, complete, and current.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
          </section>

          {/* 4 — Candidate and Talent Network Terms */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              4. Candidate and Talent Network Terms
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              By registering as a Candidate or joining our talent network, you agree to the following:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>You grant YES permission to retain your profile, resume, and related information in our talent database for the purpose of matching you with suitable employment opportunities.</li>
              <li>You consent to YES sharing your profile and application materials with prospective employers (Clients) as part of the recruitment process.</li>
              <li>You acknowledge that submission of your profile does not guarantee employment or placement.</li>
              <li>You agree to provide accurate and truthful information and to update your profile promptly when your circumstances change.</li>
              <li>You understand that YES may conduct background checks, reference checks, and credential verification as part of the recruitment and vetting process, subject to applicable law and your consent.</li>
            </ul>
          </section>

          {/* 5 — Client Terms */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              5. Client Terms
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              Clients engaging YES for services agree to the following terms in addition to any individual service agreement:
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Service Agreements
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              All engagements are governed by a written service agreement that specifies scope, deliverables, timelines, fees, and payment terms. These Terms apply in addition to, and in the event of conflict shall be superseded by, the specific terms of the service agreement.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Client Obligations
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              Clients shall provide timely, accurate, and complete information as required for the provision of Services. Clients shall comply with all applicable laws and regulations related to employment, including but not limited to non-discrimination, workplace safety, and labor standards.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Non-Circumvention
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              Clients agree not to directly engage, hire, or solicit any Candidate introduced by YES for a period of 12 months from the date of introduction, unless the placement is made through YES or written consent is obtained. Breach of this clause entitles YES to a placement fee equivalent to the applicable service fee for the engagement.
            </p>
          </section>

          {/* 6 — Intellectual Property */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              6. Intellectual Property
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              All Content, trademarks, logos, service marks, trade names, and other intellectual property displayed on or through our Platforms are the property of YES Employment Solutions PLC or its licensors and are protected by Ethiopian and international intellectual property laws.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our Platforms for their intended purposes. You may not copy, reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any Content without our prior written consent.
            </p>
          </section>

          {/* 7 — Acceptable Use */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              7. Acceptable Use
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              You agree not to use our Services or Platforms to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Submit false, misleading, or fraudulent information.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation.</li>
              <li>Interfere with, disrupt, or compromise the integrity or security of our Platforms.</li>
              <li>Harvest, collect, or mine personal data of other users without authorization.</li>
              <li>Use automated systems, bots, or scripts to access our Platforms without prior written consent.</li>
              <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.</li>
              <li>Engage in any activity that could damage, disable, overburden, or impair our Platforms.</li>
            </ul>
          </section>

          {/* 8 — Disclaimers */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              8. Disclaimers
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              OUR SERVICES AND PLATFORMS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR AVAILABILITY.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              YES does not warrant that: (a) the Services will meet your specific requirements; (b) the Services will be uninterrupted, timely, secure, or error-free; (c) the results obtained from the use of the Services will be accurate or reliable; or (d) any errors in the Platforms will be corrected.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              YES does not guarantee employment placement for any Candidate, nor does it guarantee the suitability, performance, or conduct of any Candidate or Employee presented to a Client.
            </p>
          </section>

          {/* 9 — Limitation of Liability */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              9. Limitation of Liability
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YES EMPLOYMENT SOLUTIONS PLC, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE OUR SERVICES.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              Our total aggregate liability for all claims arising under or related to these Terms shall not exceed the total fees paid by you to YES during the twelve (12) months preceding the event giving rise to the liability.
            </p>
          </section>

          {/* 10 — Confidentiality */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              10. Confidentiality
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              Both parties acknowledge that in the course of the service relationship, they may receive confidential and proprietary information of the other party. Each party agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Hold all confidential information in strict confidence and not disclose it to any third party without prior written consent.</li>
              <li>Use confidential information solely for the purpose of performing obligations under these Terms or a related service agreement.</li>
              <li>Take reasonable measures to protect confidential information from unauthorized access, use, or disclosure.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              This obligation of confidentiality shall survive termination of these Terms for a period of three (3) years.
            </p>
          </section>

          {/* 11 — Indemnification */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              11. Indemnification
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              You agree to indemnify, defend, and hold harmless YES Employment Solutions PLC, its directors, officers, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of our Services or Platforms; (b) your breach of these Terms; (c) your violation of any applicable law or the rights of any third party; or (d) any information or content you submit through our Services.
            </p>
          </section>

          {/* 12 — Governing Law and Dispute Resolution */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia, without regard to its conflict of law provisions.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              Any dispute arising out of or in connection with these Terms shall be resolved through the following process:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Mediation:</strong> The parties shall first attempt to resolve the dispute through good-faith mediation within 30 days of written notice of the dispute.</li>
              <li><strong>Arbitration:</strong> If mediation is unsuccessful, the dispute shall be referred to and finally resolved by arbitration administered in Addis Ababa, Ethiopia, in accordance with Ethiopian arbitration law. The language of the arbitration shall be English. The decision of the arbitrator shall be final and binding on both parties.</li>
            </ol>
          </section>

          {/* 13 — Termination */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              13. Termination
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We may suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Grounds for termination include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Breach of these Terms or any applicable service agreement.</li>
              <li>Provision of false or misleading information.</li>
              <li>Conduct that we determine, in our sole discretion, is harmful to other users, third parties, or the business interests of YES.</li>
              <li>Request by law enforcement or government agencies.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              Upon termination, your right to use our Services will cease immediately. Provisions that by their nature should survive termination (including, without limitation, intellectual property, disclaimers, limitation of liability, confidentiality, and indemnification) shall continue in full force and effect.
            </p>
          </section>

          {/* 14 — Amendments */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              14. Amendments
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              YES reserves the right to modify or update these Terms at any time. When we make material changes, we will post the updated Terms on our website and update the effective date at the top of this page. Your continued use of our Services after any changes to these Terms constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          {/* 15 — General Provisions */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              15. General Provisions
            </h2>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Severability
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Waiver
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              The failure of YES to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of YES.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Entire Agreement
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              These Terms, together with any applicable service agreements and our Privacy Policy, constitute the entire agreement between you and YES with respect to your use of our Services and supersede all prior or contemporaneous communications, whether oral or written.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Assignment
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              You may not assign or transfer your rights or obligations under these Terms without the prior written consent of YES. YES may assign its rights and obligations without restriction.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Force Majeure
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              YES shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay results from circumstances beyond its reasonable control, including but not limited to natural disasters, acts of government, war, terrorism, pandemics, labor disputes, power failures, or internet disruptions.
            </p>
          </section>

          {/* 16 — Contact */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              16. Contact
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              If you have any questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="bg-light-surface rounded-[var(--radius-card)] p-6 md:p-8">
              <p className="text-[15px] text-near-black font-medium leading-[1.44]" style={calt}>
                <strong>YES Employment Solutions PLC</strong><br />
                Suite 301E, Bethlehem Plaza<br />
                Kenenisa Avenue, Megenagna<br />
                Addis Ababa, Ethiopia<br /><br />
                Email:{" "}
                <a href="mailto:info@yes.et" className="text-wise-green hover:underline">info@yes.et</a><br />
                Phone: +251 942 07 07 07
              </p>
            </div>
          </section>

          {/* Back link */}
          <div className="pt-8 border-t border-near-black/10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-gray hover:text-near-black transition-colors"
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
