import { useState } from "react"
import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

const suiteNav = [
  { id: "work", label: "Work" },
  { id: "property", label: "Property" },
  { id: "pharma", label: "Pharma" },
  { id: "fund", label: "Fund" },
]

const suites = [
  {
    id: "work",
    name: "Syntropy Work",
    subtitle: "End-to-end workforce management for companies operating in Ethiopia.",
    modules: [
      {
        name: "Recruit",
        description: "Applicant tracking, candidate pipeline management, and offer automation.",
      },
      {
        name: "Payroll",
        description: "ERCA-integrated payroll processing with automated tax filing and pension remittance.",
      },
      {
        name: "People",
        description: "Employee records, leave management, performance tracking, and organizational hierarchy.",
      },
      {
        name: "Comply",
        description: "Labor law compliance monitoring, contract management, and regulatory alert system.",
      },
      {
        name: "Treasury",
        description: "Cash flow forecasting, expense management, and multi-currency transaction processing.",
      },
    ],
  },
  {
    id: "property",
    name: "Syntropy Property",
    subtitle: "Property management platform for commercial and residential portfolios.",
    modules: [
      {
        name: "Units",
        description: "Property unit registry, floor plans, amenity tracking, and vacancy management.",
      },
      {
        name: "Tenants",
        description: "Tenant profiles, document management, communication history, and screening integration.",
      },
      {
        name: "Leases",
        description: "Lease creation, renewal automation, term tracking, and digital signature support.",
      },
      {
        name: "Collect",
        description: "Rent collection, payment tracking, late fee automation, and financial reporting.",
      },
    ],
  },
  {
    id: "pharma",
    name: "Syntropy Pharma",
    subtitle: "Pharmaceutical supply chain and regulatory compliance platform.",
    modules: [
      {
        name: "Import",
        description: "Import permit management, customs documentation, and shipment tracking.",
      },
      {
        name: "Stock",
        description: "Inventory management, batch tracking, expiry monitoring, and warehouse optimization.",
      },
      {
        name: "Distribute",
        description: "Distribution planning, route optimization, cold chain monitoring, and delivery confirmation.",
      },
      {
        name: "Collect",
        description: "Accounts receivable, payment reconciliation, and credit management for pharmacy networks.",
      },
      {
        name: "Register",
        description: "Drug registration tracking, EFDA compliance documentation, and renewal management.",
      },
    ],
  },
  {
    id: "fund",
    name: "Syntropy Fund",
    subtitle: "Fundraising and donor management for NGOs and social enterprises.",
    modules: [
      {
        name: "Pledge",
        description: "Pledge management, donor commitments, and campaign tracking with conversion analytics.",
      },
      {
        name: "Collect",
        description: "Multi-channel donation collection, receipt generation, and payment gateway integration.",
      },
      {
        name: "Track",
        description: "Fund utilization tracking, budget vs. actuals, and project-level financial monitoring.",
      },
      {
        name: "Report",
        description: "Donor reports, compliance documentation, impact metrics, and audit-ready financial statements.",
      },
    ],
  },
]

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256). Zero plaintext storage.",
  },
  {
    title: "Role-Based Access",
    description: "Granular permission system with role inheritance, IP whitelisting, and session management.",
  },
  {
    title: "Audit Logging",
    description: "Complete activity trail for every user action. Immutable logs retained for 7 years.",
  },
  {
    title: "Multi-Tenant Architecture",
    description: "Logical data isolation between organizations. No shared schemas, no data leakage risk.",
  },
  {
    title: "API-First Design",
    description: "RESTful APIs with OAuth 2.0 authentication. Webhook support for real-time integrations.",
  },
  {
    title: "SLA-Backed Uptime",
    description: "99.9% uptime guarantee with financial penalties for non-compliance. Monitored 24/7.",
  },
]

const faqs = [
  {
    q: "Can I use just one module without the full suite?",
    a: "Yes. Every module is independently deployable. Start with what you need and add modules as your requirements grow. All modules share a unified data layer, so integration is seamless when you expand.",
  },
  {
    q: "How long does implementation take?",
    a: "Standard implementation takes 4-8 weeks depending on the number of modules, data migration complexity, and integration requirements. We provide a dedicated implementation team with a fixed timeline.",
  },
  {
    q: "Do you support custom integrations?",
    a: "Yes. Our API-first architecture supports integration with any system that can make HTTP requests. We also build custom integrations for enterprise clients with specific requirements.",
  },
  {
    q: "Where is data hosted?",
    a: "Data is hosted in enterprise-grade cloud infrastructure with primary servers in secure data centers. We support data residency requirements and can deploy on-premise for clients with specific compliance needs.",
  },
]

export default function Enterprise() {
  const [activeTab, setActiveTab] = useState("work")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    platform: "",
    description: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
  }

  const scrollToSuite = (id: string) => {
    setActiveTab(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
              Enterprise Solutions
            </span>
          </div>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            The <span className="hook">Syntropy</span> Suite
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Purpose-built enterprise platforms for workforce management, property
            operations, pharmaceutical supply chain, and fundraising — designed for
            organizations operating in Ethiopia.
          </p>
          <div className="mt-10">
            <Link
              to="/initialize"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              See It Live
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Suite Navigation */}
      <div className="sticky top-[72px] z-40 border-b border-near-black/10 bg-white/80 backdrop-blur-xl">
        <div className="container-yes">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {suiteNav.map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSuite(nav.id)}
                className={`wise-btn px-5 py-2.5 text-[14px] font-semibold rounded-[var(--radius-pill)] transition-colors whitespace-nowrap ${
                  activeTab === nav.id
                    ? "bg-wise-green text-dark-green"
                    : "text-near-black"
                }`}
                style={{
                  fontFeatureSettings: '"calt"',
                  ...(activeTab !== nav.id
                    ? { background: "var(--color-light-mint)" }
                    : {}),
                }}
              >
                Syntropy {nav.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Suite Sections */}
      {suites.map((suite) => (
        <section
          key={suite.id}
          id={suite.id}
          className="section-spacing scroll-mt-[140px]"
        >
          <div className="container-yes">
            <SectionHeading
              label={`Syntropy ${suite.id.charAt(0).toUpperCase() + suite.id.slice(1)}`}
              subtitle={suite.subtitle}
            >
              {suite.name}
            </SectionHeading>
            <div
              className={`mt-12 grid gap-6 ${
                suite.modules.length === 5
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2"
              }`}
            >
              {suite.modules.map((mod, i) => (
                <div key={i} className="surface-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-wise-green/10 flex items-center justify-center text-dark-green">
                      <span
                        className="text-[11px] font-black"
                        style={{ fontFeatureSettings: '"calt"' }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <h3
                      className="text-base font-black leading-[0.85]"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {mod.name}
                    </h3>
                  </div>
                  <p
                    className="text-[14px] text-gray font-medium leading-relaxed"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Enterprise Defaults */}
      <section className="section-spacing bg-near-black/[0.02]">
        <div className="container-yes">
          <SectionHeading label="Security" align="center">
            Enterprise Defaults
          </SectionHeading>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="surface-card p-8">
                <div className="w-10 h-10 rounded-full bg-near-black/[0.04] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-near-black">
                    <path d="M10 2L3 5.5V9.5C3 14.18 6.01 18.55 10 19.5C13.99 18.55 17 14.18 17 9.5V5.5L10 2Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
                    <path d="M7 10L9.5 12.5L13.5 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-base font-black leading-[0.85] mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[13px] text-gray font-medium leading-relaxed"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build Request Form */}
      <section className="section-spacing">
        <div className="container-yes max-w-2xl">
          <SectionHeading label="Custom Build" align="center">
            Request a Custom Configuration
          </SectionHeading>
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="ent-name"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="ent-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="ent-email"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="ent-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="ent-company"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="ent-company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors"
                  style={{ fontFeatureSettings: '"calt"' }}
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label
                  htmlFor="ent-platform"
                  className="block text-[13px] font-semibold text-near-black mb-2"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Platform Interest
                </label>
                <select
                  id="ent-platform"
                  name="platform"
                  required
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors appearance-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  <option value="">Select a platform</option>
                  <option value="work">Syntropy Work</option>
                  <option value="property">Syntropy Property</option>
                  <option value="pharma">Syntropy Pharma</option>
                  <option value="fund">Syntropy Fund</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="ent-description"
                className="block text-[13px] font-semibold text-near-black mb-2"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Describe Your Requirements
              </label>
              <textarea
                id="ent-description"
                name="description"
                rows={5}
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-[var(--radius-standard)] border border-near-black/12 bg-white text-[14px] font-medium text-near-black placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green transition-colors resize-none"
                style={{ fontFeatureSettings: '"calt"' }}
                placeholder="Tell us about your organization, the challenges you are solving, and which modules interest you..."
              />
            </div>
            <button
              type="submit"
              className="wise-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-base font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Submit Request
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-yes">
          <div className="bg-near-black rounded-[var(--radius-section)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "var(--color-light-mint)" }} />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(5, 77, 40, 0.06)" }} />
            <div className="relative z-10">
              <h2
                className="text-[40px] md:text-[64px] font-black leading-[0.85] text-white"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                See It <span className="hook">Live</span>
              </h2>
              <p
                className="mt-5 text-[15px] text-white/70 max-w-md mx-auto leading-relaxed font-medium"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Schedule a live walkthrough of the Syntropy suite tailored to your industry and requirements.
              </p>
              <div className="mt-8">
                <Link
                  to="/initialize"
                  className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  See It Live
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
