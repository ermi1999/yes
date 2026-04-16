import { Link } from "react-router-dom"

const calt: React.CSSProperties = { fontFeatureSettings: '"calt"' }

export default function Privacy() {
  return (
    <article className="bg-white text-near-black">
      {/* Hero */}
      <header className="bg-near-black text-white">
        <div className="container-yes py-24 md:py-32">
          <h1
            className="text-4xl md:text-6xl font-black leading-[0.85]"
            style={calt}
          >
            Privacy <span className="hook">Policy</span>
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

          {/* 1 — Introduction */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              1. Introduction
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              YES Employment Solutions PLC ("<strong>YES</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our websites, platforms, and services (collectively, the "<strong>Services</strong>").
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              YES Employment Solutions PLC acts as the data controller for the personal data processed under this policy. We are registered and operating under the laws of the Federal Democratic Republic of Ethiopia and comply with the Ethiopia Personal Data Protection Proclamation (PDPP No. 1321/2024). Where applicable, we also adhere to the European Union General Data Protection Regulation (EU GDPR) for the processing of personal data of individuals located in the European Economic Area.
            </p>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described herein, please discontinue use of our Services.
            </p>
          </section>

          {/* 2 — Information We Collect */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              2. Information We Collect
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We collect information that you provide directly, that is generated through your use of our Services, and that is obtained from third-party sources. The categories include:
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Personal Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Full name, email address, phone number, and postal address</li>
              <li>Date of birth, nationality, and government-issued identification numbers</li>
              <li>Profile photographs and digital signatures</li>
            </ul>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Professional Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Resumes, curricula vitae, and cover letters</li>
              <li>Educational qualifications, certifications, and professional licenses</li>
              <li>Employment history, references, and performance evaluations</li>
              <li>Skills, language proficiencies, and training records</li>
            </ul>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Financial Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>Bank account details and payment information</li>
              <li>Tax identification numbers and social security information</li>
              <li>Salary history and compensation expectations</li>
            </ul>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Usage Data
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>IP addresses, browser type, operating system, and device identifiers</li>
              <li>Pages visited, features used, and time spent on our platforms</li>
              <li>Referral URLs, search queries, and clickstream data</li>
              <li>Cookies and similar tracking technologies (see Section 9)</li>
            </ul>
          </section>

          {/* 3 — How We Use Your Information */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              3. How We Use Your Information
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We process your personal information for the following purposes:
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Service Delivery
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              To provide, operate, and maintain our employment, recruitment, employer-of-record, payroll, and advisory services, including processing applications, managing employment relationships, and facilitating payments.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Recruitment Matching
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              To match candidates with suitable employment opportunities, assess qualifications, conduct background and integrity checks, and facilitate the hiring process on behalf of our clients.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Compliance
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              To comply with applicable legal and regulatory obligations, including Ethiopian labor law, tax regulations, immigration requirements, and data protection legislation.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Communication
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              To send you service-related notifications, respond to inquiries, provide customer support, and, where you have opted in, deliver marketing communications about our services and industry insights.
            </p>

            <h3 className="text-lg font-black leading-[0.85] mb-3 mt-6" style={calt}>
              Analytics and Improvement
            </h3>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              To analyze usage patterns, measure the effectiveness of our Services, conduct research, and improve our platforms, products, and user experience.
            </p>
          </section>

          {/* 4 — Legal Basis for Processing */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              4. Legal Basis for Processing
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We process your personal data on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Contractual Necessity:</strong> Processing is necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering into a contract for our employment or recruitment services.</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with a legal obligation to which we are subject, including Ethiopian labor, tax, and immigration laws.</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests, including fraud prevention, network and information security, business development, and improving our Services, provided that such interests are not overridden by your rights and freedoms.</li>
              <li><strong>Consent:</strong> Where required by law, we will obtain your explicit consent before processing your personal data, particularly for marketing communications and the processing of sensitive personal data. You may withdraw consent at any time.</li>
            </ul>
          </section>

          {/* 5 — Information Sharing and Disclosure */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We do not sell your personal information. We may share your data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Service Partners:</strong> With clients, employers, and trusted third-party service providers who assist us in delivering our Services, including payroll processors, background check providers, and IT service providers, subject to appropriate data processing agreements.</li>
              <li><strong>Regulatory Bodies:</strong> With government authorities, regulators, and law enforcement agencies as required by applicable law, including tax authorities, labor inspectorates, and immigration offices.</li>
              <li><strong>With Your Consent:</strong> With third parties when you have provided explicit consent for such sharing, including when submitting your profile to prospective employers.</li>
              <li><strong>Legal Requirements:</strong> When disclosure is necessary to protect our rights, enforce our agreements, respond to legal process, or protect the safety and security of our users and the public.</li>
            </ul>
          </section>

          {/* 6 — International Data Transfers */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              6. International Data Transfers
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              As an international employment solutions provider, we may transfer your personal data to countries outside of Ethiopia and, where applicable, outside of the European Economic Area (EEA). When we do so, we ensure that appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>EEA Adequacy Decisions:</strong> We transfer data to countries that the European Commission has determined provide an adequate level of data protection.</li>
              <li><strong>Standard Contractual Clauses:</strong> Where no adequacy decision exists, we use EU-approved Standard Contractual Clauses (SCCs) to ensure your data receives equivalent protection during cross-border transfers.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              You may request a copy of the safeguards we have in place by contacting our Data Protection Officer using the details in Section 13.
            </p>
          </section>

          {/* 7 — Data Retention */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              7. Data Retention
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or regulatory requirements. The retention period is determined based on:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li>The duration of the service relationship and any subsequent obligations</li>
              <li>Applicable legal and regulatory retention requirements under Ethiopian and, where applicable, EU law</li>
              <li>The necessity to resolve disputes, enforce agreements, and establish legal claims</li>
              <li>Legitimate business purposes such as analytics and service improvement (using anonymized data where possible)</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              When personal data is no longer required, we securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          {/* 8 — Your Rights */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              8. Your Rights
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              Depending on your location and applicable law, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you and information about how it is processed.</li>
              <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure:</strong> You may request deletion of your personal data where it is no longer necessary for the purpose it was collected, or where you withdraw consent.</li>
              <li><strong>Right to Restriction:</strong> You may request that we restrict the processing of your personal data in certain circumstances, such as when you contest the accuracy of the data.</li>
              <li><strong>Right to Data Portability:</strong> You may request to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit it to another controller.</li>
              <li><strong>Right to Object:</strong> You may object to the processing of your personal data based on legitimate interests or for direct marketing purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              To exercise any of these rights, please contact our Data Protection Officer at{" "}
              <a href="mailto:info@yes.et" className="text-wise-green hover:underline">info@yes.et</a>.
              We will respond to your request within 30 days.
            </p>
          </section>

          {/* 9 — Cookies and Tracking Technologies */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              9. Cookies and Tracking Technologies
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We use cookies and similar tracking technologies to enhance your experience on our platforms. The types of cookies we use include:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Essential Cookies:</strong> Required for the operation of our platforms, including session management, authentication, and security features. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our platforms by collecting and reporting information anonymously. This data helps us improve our Services.</li>
              <li><strong>Preference Cookies:</strong> Enable our platforms to remember choices you make (such as language or region) and provide enhanced, personalized features.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services.
            </p>
          </section>

          {/* 10 — Security Measures */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              10. Security Measures
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              <li><strong>Encryption:</strong> Data is encrypted in transit using TLS/SSL protocols and at rest using industry-standard encryption algorithms.</li>
              <li><strong>Access Controls:</strong> Strict role-based access controls ensure that personal data is accessible only to authorized personnel who require it for their duties.</li>
              <li><strong>Regular Audits:</strong> We conduct periodic security assessments, penetration testing, and compliance audits to identify and address vulnerabilities.</li>
            </ul>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mt-4" style={calt}>
              While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 11 — Children's Privacy */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              11. Children's Privacy
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we will take steps to delete that information promptly. If you believe we may have collected information from a child under 16, please contact us immediately at{" "}
              <a href="mailto:info@yes.et" className="text-wise-green hover:underline">info@yes.et</a>.
            </p>
          </section>

          {/* 12 — Changes to This Policy */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              12. Changes to This Policy
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44]" style={calt}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy on our website with a revised effective date, and where required by law, we will provide notice via email or through our platforms. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
            </p>
          </section>

          {/* 13 — Contact Us */}
          <section className="mb-14">
            <h2
              className="text-2xl md:text-3xl font-black leading-[0.85] mb-6"
              style={calt}
            >
              13. Contact Us
            </h2>
            <p className="text-[15px] text-warm-dark font-medium leading-[1.44] mb-4" style={calt}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please contact our Data Protection Officer:
            </p>
            <div className="bg-light-surface rounded-[var(--radius-card)] p-6 md:p-8">
              <p className="text-[15px] text-near-black font-medium leading-[1.44]" style={calt}>
                <strong>YES Employment Solutions PLC</strong><br />
                Data Protection Officer<br />
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
