import { useState, type ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { submitForm } from "@/utils/form-submit"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { useTextReveal } from "@/hooks/useTextReveal"

/* ── Why Join Data ── */
const whyCards = [
  {
    label: "ACCESS",
    title: "Priority Matching",
    description: "Priority matching to roles with 200+ international and Ethiopian enterprise partners. Your profile is actively considered — not buried in a database.",
  },
  {
    label: "DEVELOPMENT",
    title: "Credentials That Matter",
    description: "Access CISI certification, professional development programs, and skill assessments through YES Academy. Build credentials the market actually values.",
  },
  {
    label: "VETTING ADVANTAGE",
    title: "Your Name Carries Weight",
    description: "Our clients trust our vetting process. That means when your name reaches their desk, it carries weight. You skip the noise.",
  },
]

/* ── How It Works Steps ── */
const steps = [
  { step: "01", title: "Apply", duration: "5\u201310 minutes", description: "Submit your profile and professional credentials through the application form below. This takes 5\u201310 minutes." },
  { step: "02", title: "Vetting", duration: "5\u20137 business days", description: "Our team reviews your experience, qualifications, and professional references. We conduct skills assessments relevant to your field. Timeline: 5\u20137 business days." },
  { step: "03", title: "Matching", duration: "Targeted opportunities", description: "Once vetted, your profile enters the YES Executive Roster. When a role matches your skill set, we reach out directly. No mass emails \u2014 targeted opportunities only." },
  { step: "04", title: "Placement & Support", duration: "Full-service onboarding", description: "We manage the employment logistics: contracts, onboarding, payroll, benefits. You focus on doing the work." },
]

/* ── FAQ Data ── */
const faqs = [
  {
    q: "Is there a cost to join?",
    a: "No. There is no fee for professionals. YES is retained by the companies that hire through us.",
  },
  {
    q: "What types of roles?",
    a: "Roles span finance, technology, operations, engineering, and management across international and Ethiopian enterprises.",
  },
  {
    q: "How long is vetting?",
    a: "Typically 5\u20137 business days from application to roster decision.",
  },
  {
    q: "Do I need English?",
    a: "English proficiency is required for most international roles. Some positions may require Amharic only.",
  },
  {
    q: "What happens after vetting?",
    a: "Your profile enters the active Executive Roster. When a role matches, we contact you directly.",
  },
  {
    q: "Can I browse open positions?",
    a: "Yes. For active job listings, visit PalmJobs.et \u2014 our job board built for the Ethiopian market. The Executive Roster is for proactive matching.",
  },
]

/* ── Data Constants (matching YES-3.0 TalentApplication exactly) ── */

const LOCATION_OPTIONS = [
  { value: "addis-ababa", label: "Addis Ababa" },
  { value: "dire-dawa", label: "Dire Dawa" },
  { value: "mekelle", label: "Mekelle" },
  { value: "adama", label: "Adama (Nazret)" },
  { value: "hawassa", label: "Hawassa" },
  { value: "bahir-dar", label: "Bahir Dar" },
  { value: "gondar", label: "Gondar" },
  { value: "jimma", label: "Jimma" },
  { value: "dessie", label: "Dessie" },
  { value: "jijiga", label: "Jijiga" },
  { value: "shashamane", label: "Shashamane" },
  { value: "bishoftu", label: "Bishoftu (Debre Zeit)" },
  { value: "harar", label: "Harar" },
  { value: "arba-minch", label: "Arba Minch" },
  { value: "hosaena", label: "Hosaena" },
  { value: "woldia", label: "Woldia" },
  { value: "debre-markos", label: "Debre Markos" },
  { value: "debre-berhan", label: "Debre Berhan" },
  { value: "nekemte", label: "Nekemte" },
  { value: "asella", label: "Asella" },
  { value: "dilla", label: "Dilla" },
  { value: "gambella", label: "Gambella" },
  { value: "assosa", label: "Assosa" },
  { value: "semera", label: "Semera" },
  { value: "axum", label: "Axum" },
  { value: "kombolcha", label: "Kombolcha" },
  { value: "remote-ethiopia", label: "Remote (within Ethiopia)" },
  { value: "remote-international", label: "Remote (international / diaspora)" },
  { value: "willing-to-relocate", label: "Willing to relocate to Ethiopia" },
]

const SECTOR_OPTIONS = [
  { value: "banking", label: "Banking & Microfinance" },
  { value: "insurance", label: "Insurance" },
  { value: "capital-markets", label: "Capital Markets & Investment" },
  { value: "fintech", label: "FinTech & Digital Payments" },
  { value: "accounting-audit", label: "Accounting & Audit" },
  { value: "software-dev", label: "Software Development & IT" },
  { value: "telecom", label: "Telecommunications" },
  { value: "data-ai", label: "Data Science & AI" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "textiles-garment", label: "Textiles & Garment" },
  { value: "fmcg", label: "FMCG & Consumer Goods" },
  { value: "agribusiness", label: "Agribusiness & Agro-processing" },
  { value: "horticulture", label: "Horticulture & Floriculture" },
  { value: "construction", label: "Construction & Engineering" },
  { value: "real-estate", label: "Real Estate & Property" },
  { value: "energy-power", label: "Energy & Power" },
  { value: "mining", label: "Mining & Extractives" },
  { value: "renewables", label: "Renewable Energy & CleanTech" },
  { value: "logistics", label: "Logistics & Supply Chain" },
  { value: "aviation", label: "Aviation & Airlines" },
  { value: "transport", label: "Transport & Freight" },
  { value: "legal", label: "Legal & Compliance" },
  { value: "consulting", label: "Management Consulting" },
  { value: "hr-recruitment", label: "Human Resources & Recruitment" },
  { value: "marketing-comms", label: "Marketing & Communications" },
  { value: "ngo-development", label: "NGO & International Development" },
  { value: "government", label: "Government & Public Sector" },
  { value: "healthcare", label: "Healthcare & Pharmaceuticals" },
  { value: "education", label: "Education & Training" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "media-entertainment", label: "Media & Entertainment" },
  { value: "e-commerce", label: "E-Commerce & Retail" },
  { value: "other", label: "Other" },
]

const ROLE_LEVEL_OPTIONS = [
  { value: "intern", label: "Intern / Trainee" },
  { value: "junior", label: "Junior / Entry Level (0\u20132 yrs)" },
  { value: "mid", label: "Mid-Level Professional (3\u20135 yrs)" },
  { value: "senior", label: "Senior Professional (6\u201310 yrs)" },
  { value: "lead", label: "Team Lead / Supervisor" },
  { value: "manager", label: "Manager / Department Head" },
  { value: "director", label: "Director / VP" },
  { value: "c-suite", label: "C-Suite / Executive" },
  { value: "board", label: "Board Member / Advisor" },
]

const EXPERIENCE_OPTIONS = [
  { value: "0-1", label: "Less than 1 year" },
  { value: "1-2", label: "1\u20132 years" },
  { value: "3-5", label: "3\u20135 years" },
  { value: "6-8", label: "6\u20138 years" },
  { value: "9-12", label: "9\u201312 years" },
  { value: "13-15", label: "13\u201315 years" },
  { value: "15-20", label: "15\u201320 years" },
  { value: "20+", label: "20+ years" },
]

const SALARY_OPTIONS = [
  { value: "below-15k", label: "Below 15,000 ETB" },
  { value: "15k-30k", label: "15,000 \u2013 30,000 ETB" },
  { value: "30k-50k", label: "30,000 \u2013 50,000 ETB" },
  { value: "50k-80k", label: "50,000 \u2013 80,000 ETB" },
  { value: "80k-120k", label: "80,000 \u2013 120,000 ETB" },
  { value: "120k-180k", label: "120,000 \u2013 180,000 ETB" },
  { value: "180k-250k", label: "180,000 \u2013 250,000 ETB" },
  { value: "250k+", label: "250,000+ ETB" },
  { value: "usd-1k-2k", label: "$1,000 \u2013 $2,000 USD" },
  { value: "usd-2k-4k", label: "$2,000 \u2013 $4,000 USD" },
  { value: "usd-4k+", label: "$4,000+ USD" },
  { value: "negotiable", label: "Negotiable / Prefer not to say" },
]

const SKILLS_TAXONOMY: Record<string, string[]> = {
  "Finance & Accounting": [
    "Financial Analysis", "Financial Modelling", "Corporate Finance",
    "Investment Banking", "Portfolio Management", "Risk Management",
    "Credit Analysis", "Treasury Management", "Tax Advisory",
    "Audit & Assurance", "IFRS Reporting", "Management Accounting",
    "Budgeting & Forecasting", "Anti-Money Laundering (AML)",
    "Regulatory Compliance", "Islamic Finance", "Microfinance",
    "Insurance Underwriting", "Actuarial Analysis",
  ],
  "Technology": [
    "JavaScript / TypeScript", "Python", "Java", "React / Angular / Vue",
    "Node.js", "Mobile Development", "Cloud (AWS / Azure / GCP)",
    "DevOps & CI/CD", "Database Administration", "System Administration",
    "Cybersecurity", "Data Engineering", "Machine Learning / AI",
    "Business Intelligence", "ERP Systems (SAP / Oracle)",
    "Network Engineering", "QA & Testing", "UI/UX Design",
    "Blockchain & DLT", "Telecom Engineering",
  ],
  "Management & Operations": [
    "Project Management", "Program Management", "Strategic Planning",
    "Operations Management", "Change Management", "Business Development",
    "Supply Chain Management", "Procurement", "Logistics Management",
    "Quality Assurance (ISO)", "Lean / Six Sigma", "Facility Management",
  ],
  "People & Legal": [
    "Human Resource Management", "Talent Acquisition", "Learning & Development",
    "Compensation & Benefits", "Labor Law", "Corporate Law",
    "Contract Negotiation", "Regulatory Affairs", "Dispute Resolution",
  ],
  "Sales & Marketing": [
    "Sales Strategy", "Key Account Management", "Digital Marketing",
    "Content Strategy", "Brand Management", "Market Research",
    "Public Relations", "Social Media Management", "SEO / SEM",
  ],
  "Engineering & Construction": [
    "Civil Engineering", "Structural Engineering", "Electrical Engineering",
    "Mechanical Engineering", "Chemical Engineering", "Environmental Engineering",
    "Construction Management", "Surveying", "AutoCAD / BIM", "HSE Management",
  ],
}

const CERTIFICATION_OPTIONS = [
  "CISI Level 1 \u2013 Fundamentals",
  "CISI Level 2 \u2013 Securities & Investment",
  "CISI Level 3 \u2013 Wealth & Investment Mgmt",
  "CISI Level 4 \u2013 Investment Operations",
  "CISI Level 6 \u2013 Masters in Wealth Mgmt",
  "CFA (Chartered Financial Analyst)",
  "CFA Level I Candidate",
  "CFA Level II Candidate",
  "ACCA",
  "ACCA Affiliate",
  "CPA (Certified Public Accountant)",
  "CIA (Certified Internal Auditor)",
  "CIMA",
  "FRM (Financial Risk Manager)",
  "CFP (Certified Financial Planner)",
  "AWS Certified",
  "Azure Certified",
  "Google Cloud Certified",
  "CISSP (Cybersecurity)",
  "CompTIA Security+",
  "PMP",
  "PRINCE2",
  "Scrum Master (CSM / PSM)",
  "ITIL Certified",
  "Cisco CCNA / CCNP",
  "Six Sigma Green Belt",
  "Six Sigma Black Belt",
  "ISO Lead Auditor",
  "SHRM-CP / SHRM-SCP",
  "CIPD",
  "Ethiopian Bar Licensed",
  "CAMS (Anti-Money Laundering)",
]

const LANGUAGE_OPTIONS = [
  "Amharic", "English", "Afaan Oromo", "Tigrinya", "Somali",
  "Sidamo", "Wolaytta", "Gurage", "Afar", "Hadiyya",
  "Arabic", "French", "Chinese (Mandarin)", "Swahili",
  "Italian", "German", "Spanish", "Portuguese", "Turkish",
]

const AVAILABILITY_OPTIONS = [
  { value: "immediate", label: "Immediately", desc: "Ready to start within 1\u20132 weeks" },
  { value: "30-days", label: "Within 30 days", desc: "Need to serve notice period" },
  { value: "60-days", label: "Within 60 days", desc: "Currently committed, available soon" },
  { value: "passive", label: "Just exploring", desc: "Open to the right opportunity" },
]

const REFERRAL_OPTIONS = [
  { value: "search", label: "Google / Search engine" },
  { value: "referral", label: "Referral from a colleague" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "event", label: "Industry event / conference" },
  { value: "media", label: "News / media" },
  { value: "palmjobs", label: "PalmJobs" },
  { value: "other", label: "Other" },
]

const STEP_LABELS = ["You", "Position", "Experience", "Skills", "Ready"] as const
const TOTAL_STEPS = 5

const STEP_HEADERS = [
  { title: "Let\u2019s start with you", subtitle: "Basic contact information so we can reach you about matching opportunities." },
  { title: "Where you stand professionally", subtitle: "Help us understand your career level and the market you operate in." },
  { title: "Experience & expectations", subtitle: "This helps us match you with roles at the right level and compensation." },
  { title: "What sets you apart", subtitle: "Select the skills, credentials, and languages that define your professional edge." },
  { title: "Almost there", subtitle: "Let us know when you could start and we\u2019ll take it from here." },
]

/* ── Form State Shape ── */
interface FormState {
  fullName: string
  email: string
  phone: string
  location: string
  sector: string
  roleLevel: string
  experience: string
  salaryRange: string
  linkedin: string
  skills: string[]
  certifications: string[]
  languages: string[]
  availability: string
  referral: string
  resume: File | null
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  sector: "",
  roleLevel: "",
  experience: "",
  salaryRange: "",
  linkedin: "",
  skills: [],
  certifications: [],
  languages: [],
  availability: "",
  referral: "",
  resume: null,
}

/* ── Reusable style constants ── */
const calt = { fontFeatureSettings: '"calt"' as const }
const inputClass =
  "w-full px-4 py-3 rounded-[var(--radius-standard)] border text-[14px] font-medium text-near-black placeholder:text-gray/50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green"
const inputBorderStyle = { borderColor: "rgba(14, 15, 12, 0.12)", fontFeatureSettings: '"calt"' as const }
const selectClass =
  "w-full px-4 py-3 rounded-[var(--radius-standard)] border text-[14px] font-medium text-near-black bg-white appearance-none cursor-pointer transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wise-green/40 focus:border-wise-green"
const labelClass = "block text-[13px] font-bold text-near-black mb-1.5"

/* ── Tag Pill Button (used in Step 4) ── */
function TagPill({ label, selected, disabled, onClick }: {
  label: string; selected: boolean; disabled: boolean; onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onClick()}
      className="px-3 py-1.5 rounded-[var(--radius-pill)] text-[12px] font-medium border transition-all duration-100"
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        borderColor: selected ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.1)",
        background: selected ? "rgba(0, 200, 83, 0.08)" : "transparent",
        color: selected ? "var(--color-near-black)" : "rgba(14, 15, 12, 0.55)",
        fontFeatureSettings: '"calt"',
      }}
    >
      {label}
    </button>
  )
}

/* ── Step 4: Skills / Certifications / Languages ── */
function Step4Skills({ skills, certifications, languages, onToggleSkill, onToggleCert, onToggleLang }: {
  skills: string[]
  certifications: string[]
  languages: string[]
  onToggleSkill: (item: string) => void
  onToggleCert: (item: string) => void
  onToggleLang: (item: string) => void
}) {
  const atMax = skills.length >= 10

  return (
    <div className="flex flex-col gap-6">
      {/* Skills */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[13px] font-bold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
            Key Skills
          </label>
          <span
            className="text-[11px] font-semibold"
            style={{ color: skills.length > 0 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.35)", fontFeatureSettings: '"calt"' }}
          >
            {skills.length}/10 selected
          </span>
        </div>
        <p className="text-[12px] text-gray/40 mb-3" style={{ fontFeatureSettings: '"calt"' }}>
          Select up to 10 skills that best describe your expertise
        </p>

        {/* Selected chips */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {skills.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onToggleSkill(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[var(--radius-pill)] text-[12px] font-medium transition-all cursor-pointer border"
                style={{ background: "rgba(0, 200, 83, 0.06)", color: "var(--color-near-black)", borderColor: "rgba(0, 200, 83, 0.15)", fontFeatureSettings: '"calt"' }}
              >
                <span className="max-w-[180px] truncate">{item}</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="flex-shrink-0">
                  <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            ))}
          </div>
        )}

        <div className="max-h-[280px] overflow-y-auto rounded-[var(--radius-standard)] border" style={{ borderColor: "rgba(14, 15, 12, 0.06)", scrollbarWidth: "thin" }}>
          <div className="p-3 flex flex-col gap-4">
            {Object.entries(SKILLS_TAXONOMY).map(([category, categorySkills]) => (
              <div key={category}>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2 text-near-black/25" style={{ fontFeatureSettings: '"calt"' }}>
                  {category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {categorySkills.map((skill) => (
                    <TagPill
                      key={skill}
                      label={skill}
                      selected={skills.includes(skill)}
                      disabled={atMax && !skills.includes(skill)}
                      onClick={() => onToggleSkill(skill)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ borderTop: "1px solid rgba(14, 15, 12, 0.06)" }} className="pt-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[13px] font-bold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
            Certifications
          </label>
          <span className="text-[11px] font-semibold" style={{ color: certifications.length > 0 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.35)", fontFeatureSettings: '"calt"' }}>
            {certifications.length} selected
          </span>
        </div>
        <p className="text-[12px] text-gray/40 mb-3" style={{ fontFeatureSettings: '"calt"' }}>
          Select any professional certifications you hold
        </p>
        <div className="flex flex-wrap gap-1.5">
          {CERTIFICATION_OPTIONS.map((cert) => (
            <TagPill
              key={cert}
              label={cert}
              selected={certifications.includes(cert)}
              disabled={false}
              onClick={() => onToggleCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Languages */}
      <div style={{ borderTop: "1px solid rgba(14, 15, 12, 0.06)" }} className="pt-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[13px] font-bold text-near-black" style={{ fontFeatureSettings: '"calt"' }}>
            Languages
          </label>
          <span className="text-[11px] font-semibold" style={{ color: languages.length > 0 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.35)", fontFeatureSettings: '"calt"' }}>
            {languages.length} selected
          </span>
        </div>
        <p className="text-[12px] text-gray/40 mb-3" style={{ fontFeatureSettings: '"calt"' }}>
          Select languages you are proficient in
        </p>
        <div className="flex flex-wrap gap-1.5">
          {LANGUAGE_OPTIONS.map((lang) => (
            <TagPill
              key={lang}
              label={lang}
              selected={languages.includes(lang)}
              disabled={false}
              onClick={() => onToggleLang(lang)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ForTalent() {
  const h1Ref = useTextReveal()

  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function updateField(field: keyof FormState, value: string | string[] | File | null) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function toggleArrayItem(field: "skills" | "certifications" | "languages", item: string) {
    setForm((prev) => {
      const arr = prev[field]
      const updated = arr.includes(item) ? arr.filter((s) => s !== item) : [...arr, item]
      return { ...prev, [field]: updated }
    })
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setForm((prev) => ({ ...prev, resume: file }))
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return Boolean(form.fullName.trim()) && isValidEmail(form.email) && form.phone.replace(/\D/g, "").length >= 9
      case 2: return Boolean(form.location && form.sector && form.roleLevel)
      case 3: return Boolean(form.experience && form.salaryRange)
      case 4: return true
      case 5: return Boolean(form.availability)
      default: return false
    }
  }

  const progress = (step / TOTAL_STEPS) * 100

  function handleNext() {
    if (step < TOTAL_STEPS && canProceed()) setStep((s) => s + 1)
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1)
  }

  async function handleSubmit() {
    if (!canProceed()) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await submitForm('talent', {
        ...form,
        skills: form.skills.join(', '),
        certifications: form.certifications.join(', '),
        languages: form.languages.join(', '),
        resume: form.resume?.name || '',
      })
      if (result.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(result.message)
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-[72px]">
        <div className="container-yes relative z-10 text-center py-20 md:py-32">
          <div className="flex items-center justify-center mb-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-near-black/30"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              For Talent
            </span>
          </div>

          <h1
            ref={h1Ref}
            className="invisible text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-black leading-[0.85] mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Your Career Deserves an{" "}
            <span className="hook">Infrastructure</span>
          </h1>

          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            YES connects vetted professionals with companies that value what you bring.
            Not a job board. A career infrastructure &mdash; vetting, matching, development,
            and placement with leading employers across Ethiopia and beyond.
          </p>

          {/* Proof chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <span
              className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-pill)] text-[12px] font-semibold text-near-black/50"
              style={{ background: "rgba(14, 15, 12, 0.04)" }}
            >
              <strong className="text-near-black">Vetted</strong>&nbsp;professionals only
            </span>
            <span
              className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-pill)] text-[12px] font-semibold text-near-black/50"
              style={{ background: "rgba(14, 15, 12, 0.04)" }}
            >
              <strong className="text-near-black">200+</strong>&nbsp;hiring partners
            </span>
            <span
              className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-pill)] text-[12px] font-semibold text-near-black/50"
              style={{ background: "rgba(14, 15, 12, 0.04)" }}
            >
              <strong className="text-near-black">Active</strong>&nbsp;matching &mdash; not a database
            </span>
          </div>

          {/* Accepting applications status */}
          <div className="mt-4 text-[11px] text-wise-green font-medium text-center">
            Accepting applications
          </div>

          <div className="mt-10">
            <a
              href="#apply"
              className="wise-btn inline-flex items-center gap-2 px-8 py-4 bg-wise-green text-dark-green text-lg font-semibold rounded-[var(--radius-pill)]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Apply to Join
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="The Executive Roster"
            subtitle="More than a database. A vetted professional network with real advantages."
            align="center"
          >
            Why the YES Executive <span className="hook">Roster</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-6">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                className="group flex flex-col md:flex-row items-start gap-6 md:gap-10 p-8 md:p-10 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                {/* Number */}
                <span
                  className="text-[48px] md:text-[56px] font-black leading-none shrink-0 text-near-black/[0.06] select-none"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-wise-green mb-2">
                    {card.label}
                  </div>
                  <h3
                    className="text-[24px] md:text-[28px] font-black leading-[0.85] mb-3"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] text-warm-dark leading-[1.7] font-medium max-w-lg"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="How It Works"
            subtitle="From application to placement — a transparent, human-led process."
            align="center"
          >
            Your Path to <span className="hook">Placement</span>
          </SectionHeading>

          {/* Zigzag timeline */}
          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Central vertical line — desktop only */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "rgba(14, 15, 12, 0.08)" }}
            />

            <div className="flex flex-col gap-12 md:gap-0">
              {steps.map((s, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={s.step} className="relative md:flex md:items-start">
                    {/* Step number — sits on the center line (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: i === steps.length - 1 ? "var(--color-wise-green)" : "#ffffff",
                          border: `2px solid ${i === steps.length - 1 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                        }}
                      >
                        <span
                          className="text-[14px] font-black"
                          style={{
                            fontFeatureSettings: '"calt"',
                            color: i === steps.length - 1 ? "var(--color-dark-green)" : "var(--color-near-black)",
                          }}
                        >
                          {s.step}
                        </span>
                      </div>
                    </div>

                    {/* Content card — alternates left/right */}
                    <div
                      className={`relative md:w-[calc(50%-40px)] ${
                        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      {/* Mobile step number */}
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: i === steps.length - 1 ? "var(--color-wise-green)" : "#ffffff",
                            border: `2px solid ${i === steps.length - 1 ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.12)"}`,
                          }}
                        >
                          <span
                            className="text-[13px] font-black"
                            style={{
                              fontFeatureSettings: '"calt"',
                              color: i === steps.length - 1 ? "var(--color-dark-green)" : "var(--color-near-black)",
                            }}
                          >
                            {s.step}
                          </span>
                        </div>
                        <span
                          className="text-[12px] font-semibold text-wise-green"
                          style={{ fontFeatureSettings: '"calt"' }}
                        >
                          {s.duration}
                        </span>
                      </div>

                      <div
                        className="p-6 md:p-8 rounded-[var(--radius-large)] transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)]"
                        style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
                      >
                        <div className={`flex items-baseline gap-3 mb-2 ${isLeft ? "" : "md:flex-row-reverse md:text-right"}`}>
                          <h3
                            className="text-[22px] md:text-[26px] font-black leading-[0.85]"
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            {s.title}
                          </h3>
                          <span
                            className="hidden md:inline text-[12px] font-semibold text-wise-green shrink-0"
                            style={{ fontFeatureSettings: '"calt"' }}
                          >
                            {s.duration}
                          </span>
                        </div>
                        <p
                          className={`text-[14px] text-warm-dark leading-[1.7] font-medium ${isLeft ? "" : "md:text-right"}`}
                          style={{ fontFeatureSettings: '"calt"' }}
                        >
                          {s.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for vertical rhythm on desktop */}
                    {i < steps.length - 1 && <div className="hidden md:block h-12" />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form — 5-Step Wizard */}
      <section id="apply" className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Application"
            subtitle="Submit your profile to be considered for the YES Executive Roster."
            align="center"
          >
            Join the <span className="hook">Roster</span>
          </SectionHeading>

          <div className="max-w-2xl mx-auto mt-12">
            {submitted ? (
              /* ── Success State ── */
              <div className="surface-card p-10 md:p-14 text-center" style={{ transform: "none" }}>
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ background: "var(--color-light-mint)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M7 14L12 19L21 9" stroke="var(--color-wise-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-black text-near-black leading-[0.85]"
                  style={calt}
                >
                  Profile Submitted
                </h3>
                <p
                  className="mt-4 text-[15px] text-gray leading-[1.7] font-medium max-w-md mx-auto"
                  style={calt}
                >
                  Your application is in. Our talent team will review your profile and reach out when there's a match. To speed things up, send your resume directly to{" "}
                  <a href="mailto:apply@yes.et" className="font-semibold underline underline-offset-2 text-near-black">apply@yes.et</a>.
                </p>
                <div className="mt-5 flex items-center justify-center gap-2 text-[12px] text-gray/50">
                  <span className="w-[5px] h-[5px] rounded-full bg-wise-green animate-pulse inline-block" />
                  We'll be in touch
                </div>
                <div className="mt-8 pt-5" style={{ borderTop: "1px solid rgba(14, 15, 12, 0.06)" }}>
                  <p className="text-[13px] text-gray/60" style={calt}>
                    Looking for open roles right now?{" "}
                    <a href="https://palmjobs.et" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 text-near-black">
                      Browse opportunities on PalmJobs.et &rarr;
                    </a>
                  </p>
                </div>
                <Link
                  to="/"
                  className="wise-btn inline-block mt-8 px-8 py-3.5 bg-wise-green text-dark-green text-[14px] font-semibold rounded-[var(--radius-pill)]"
                  style={calt}
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              /* ── Wizard Form ── */
              <div className="surface-card p-8 md:p-10" style={{ transform: "none" }}>
                {/* Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-wise-green" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-near-black/30" style={calt}>
                    Executive Roster Application
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 rounded-full mb-6" style={{ background: "rgba(14, 15, 12, 0.06)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, background: "var(--color-wise-green)" }}
                  />
                </div>

                {/* Step Indicator */}
                <div className="flex items-center gap-1 sm:gap-2 mb-8">
                  {STEP_LABELS.map((label, i) => {
                    const stepNum = i + 1
                    const isActive = stepNum === step
                    const isDone = stepNum < step
                    return (
                      <div key={label} className="flex items-center gap-1 sm:gap-2 flex-1">
                        <div
                          className="flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold transition-all duration-200 flex-shrink-0"
                          style={{
                            background: isActive ? "var(--color-near-black)" : isDone ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.06)",
                            color: isActive || isDone ? "#fff" : "rgba(14, 15, 12, 0.35)",
                          }}
                        >
                          {isDone ? "\u2713" : stepNum}
                        </div>
                        <span
                          className="text-[11px] font-semibold uppercase tracking-[0.06em] hidden sm:block"
                          style={{ color: isActive ? "var(--color-near-black)" : "rgba(14, 15, 12, 0.3)", ...calt }}
                        >
                          {label}
                        </span>
                        {i < TOTAL_STEPS - 1 && (
                          <div className="flex-1 h-px hidden sm:block" style={{ background: isDone ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.08)" }} />
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Step Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-black tracking-tight text-near-black" style={calt}>
                    {STEP_HEADERS[step - 1].title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-gray/60" style={calt}>
                    {STEP_HEADERS[step - 1].subtitle}
                  </p>
                </div>

                {/* Step Content */}
                <div style={{ minHeight: "320px" }}>

                  {/* ── Step 1: You ── */}
                  {step === 1 && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <label htmlFor="fullName" className={labelClass} style={calt}>
                          Full Name <span className="text-wise-green">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="e.g. Abebe Kebede"
                          className={inputClass}
                          style={inputBorderStyle}
                          value={form.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className={labelClass} style={calt}>
                            Email <span className="text-wise-green">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className={inputClass}
                            style={inputBorderStyle}
                            value={form.email}
                            onChange={(e) => updateField("email", e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass} style={calt}>
                            Phone <span className="text-wise-green">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="+251 9XX XXX XXXX"
                            className={inputClass}
                            style={inputBorderStyle}
                            value={form.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Position ── */}
                  {step === 2 && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <label htmlFor="location" className={labelClass} style={calt}>
                          Location <span className="text-wise-green">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="location"
                            required
                            className={selectClass}
                            style={inputBorderStyle}
                            value={form.location}
                            onChange={(e) => updateField("location", e.target.value)}
                          >
                            <option value="" disabled>Select your city...</option>
                            {LOCATION_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="sector" className={labelClass} style={calt}>
                          Sector / Industry <span className="text-wise-green">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="sector"
                            required
                            className={selectClass}
                            style={inputBorderStyle}
                            value={form.sector}
                            onChange={(e) => updateField("sector", e.target.value)}
                          >
                            <option value="" disabled>Select your sector...</option>
                            {SECTOR_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="roleLevel" className={labelClass} style={calt}>
                          Role Level <span className="text-wise-green">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="roleLevel"
                            required
                            className={selectClass}
                            style={inputBorderStyle}
                            value={form.roleLevel}
                            onChange={(e) => updateField("roleLevel", e.target.value)}
                          >
                            <option value="" disabled>Select your level...</option>
                            {ROLE_LEVEL_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Experience ── */}
                  {step === 3 && (
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="experience" className={labelClass} style={calt}>
                            Years of Experience <span className="text-wise-green">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="experience"
                              required
                              className={selectClass}
                              style={inputBorderStyle}
                              value={form.experience}
                              onChange={(e) => updateField("experience", e.target.value)}
                            >
                              <option value="" disabled>Select range...</option>
                              {EXPERIENCE_OPTIONS.map((o) => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                              ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="salaryRange" className={labelClass} style={calt}>
                            Salary Expectation (Monthly) <span className="text-wise-green">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="salaryRange"
                              required
                              className={selectClass}
                              style={inputBorderStyle}
                              value={form.salaryRange}
                              onChange={(e) => updateField("salaryRange", e.target.value)}
                            >
                              <option value="" disabled>Select range...</option>
                              {SALARY_OPTIONS.map((o) => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                              ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="linkedin" className={labelClass} style={calt}>LinkedIn Profile</label>
                        <input
                          id="linkedin"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          className={inputClass}
                          style={inputBorderStyle}
                          value={form.linkedin}
                          onChange={(e) => updateField("linkedin", e.target.value)}
                        />
                        <p className="mt-1.5 text-[11px] text-gray/40" style={calt}>
                          LinkedIn is optional but recommended -- it helps our team assess your profile faster.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Skills ── */}
                  {step === 4 && (
                    <Step4Skills
                      skills={form.skills}
                      certifications={form.certifications}
                      languages={form.languages}
                      onToggleSkill={(item) => toggleArrayItem("skills", item)}
                      onToggleCert={(item) => toggleArrayItem("certifications", item)}
                      onToggleLang={(item) => toggleArrayItem("languages", item)}
                    />
                  )}

                  {/* ── Step 5: Ready ── */}
                  {step === 5 && (
                    <div className="flex flex-col gap-6">
                      {/* Availability — Radio Cards */}
                      <div>
                        <label className={labelClass} style={calt}>
                          Availability <span className="text-wise-green">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                          {AVAILABILITY_OPTIONS.map((opt) => {
                            const isSelected = form.availability === opt.value
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("availability", opt.value)}
                                className="text-left px-4 py-3.5 rounded-[var(--radius-standard)] border transition-all duration-150 cursor-pointer"
                                style={{
                                  borderColor: isSelected ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.08)",
                                  background: isSelected ? "rgba(0, 200, 83, 0.04)" : "transparent",
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all border-2"
                                    style={{
                                      borderColor: isSelected ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.15)",
                                      background: isSelected ? "var(--color-wise-green)" : "transparent",
                                    }}
                                  >
                                    {isSelected && (
                                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <circle cx="6" cy="6" r="3" fill="#fff" />
                                      </svg>
                                    )}
                                  </div>
                                  <div>
                                    <div className="text-[14px] font-semibold text-near-black" style={calt}>{opt.label}</div>
                                    <div className="text-[12px] mt-0.5 text-gray/50" style={calt}>{opt.desc}</div>
                                  </div>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label htmlFor="resume" className={labelClass} style={calt}>Resume</label>
                        <div
                          className="relative rounded-[var(--radius-standard)] border border-dashed p-6 text-center cursor-pointer transition-colors duration-150 hover:border-wise-green/50"
                          style={{ borderColor: "rgba(14, 15, 12, 0.1)" }}
                        >
                          <input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                          />
                          <div className="flex flex-col items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray/40" aria-hidden="true">
                              <path d="M12 16V4M12 4L8 8M12 4L16 8M4 17V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {form.resume ? (
                              <span className="text-[13px] font-semibold text-positive-green" style={calt}>
                                {form.resume.name}
                              </span>
                            ) : (
                              <span className="text-[13px] text-gray font-medium" style={calt}>
                                Drop your resume here or <span className="text-wise-green font-semibold">browse</span>
                              </span>
                            )}
                            <span className="text-[11px] text-gray/50" style={calt}>
                              PDF, DOC, or DOCX up to 10MB
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Referral */}
                      <div>
                        <label htmlFor="referral" className={labelClass} style={calt}>How did you hear about YES?</label>
                        <div className="relative">
                          <select
                            id="referral"
                            className={selectClass}
                            style={inputBorderStyle}
                            value={form.referral}
                            onChange={(e) => updateField("referral", e.target.value)}
                          >
                            <option value="" disabled>Select...</option>
                            {REFERRAL_OPTIONS.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray/50" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M4 6L7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(14, 15, 12, 0.06)" }}>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-[var(--radius-pill)] transition-all cursor-pointer text-near-black/50 hover:text-near-black"
                      style={{ background: "rgba(14, 15, 12, 0.04)", ...calt }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Back
                    </button>
                  ) : <div />}

                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="wise-btn inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-[var(--radius-pill)] transition-all cursor-pointer"
                      style={{
                        background: canProceed() ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.08)",
                        color: canProceed() ? "var(--color-dark-green)" : "rgba(14, 15, 12, 0.3)",
                        opacity: canProceed() ? 1 : 0.7,
                        ...calt,
                      }}
                    >
                      Continue
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canProceed() || isSubmitting}
                      className="wise-btn inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-[var(--radius-pill)] transition-all cursor-pointer"
                      style={{
                        background: canProceed() ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.08)",
                        color: canProceed() ? "var(--color-dark-green)" : "rgba(14, 15, 12, 0.3)",
                        opacity: isSubmitting ? 0.7 : canProceed() ? 1 : 0.7,
                        ...calt,
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Profile
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Error banner */}
                {submitError && (
                  <div className="mt-4 px-4 py-3 rounded-[var(--radius-standard)] text-[13px] font-medium" style={{ background: "rgba(239,68,68,0.08)", color: "#DC2626" }}>
                    {submitError}{" "}
                    <button type="button" onClick={() => setSubmitError(null)} className="underline cursor-pointer">Dismiss</button>
                  </div>
                )}

                {/* Privacy */}
                <p className="mt-4 text-[11px] leading-relaxed text-gray/40" style={calt}>
                  By submitting, you agree to our <Link to="/privacy" className="underline">privacy policy</Link>. Your information is reviewed by our talent operations team and is never shared with third parties.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="FAQ"
            subtitle="Common questions about joining the YES Executive Roster."
            align="center"
          >
            Quick <span className="hook">Answers</span>
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

      {/* SEO: Hidden skills taxonomy for crawlers */}
      <section className="sr-only" aria-label="Skills and sectors covered by YES talent network">
        <h2>Sectors We Recruit For</h2>
        <ul>
          <li>Banking &amp; Microfinance</li><li>Insurance</li><li>Capital Markets &amp; Investment</li>
          <li>FinTech &amp; Digital Payments</li><li>Accounting &amp; Audit</li><li>Software Development &amp; IT</li>
          <li>Telecommunications</li><li>Data Science &amp; AI</li><li>Cybersecurity</li>
          <li>Manufacturing &amp; Industrial</li><li>Textiles &amp; Garment</li><li>FMCG &amp; Consumer Goods</li>
          <li>Agribusiness &amp; Agro-processing</li><li>Horticulture &amp; Floriculture</li>
          <li>Construction &amp; Engineering</li><li>Real Estate &amp; Property</li><li>Energy &amp; Power</li>
          <li>Mining &amp; Extractives</li><li>Renewable Energy &amp; CleanTech</li><li>Logistics &amp; Supply Chain</li>
          <li>Aviation &amp; Airlines</li><li>Transport &amp; Freight</li><li>Legal &amp; Compliance</li>
          <li>Management Consulting</li><li>Human Resources &amp; Recruitment</li>
          <li>Marketing &amp; Communications</li><li>NGO &amp; International Development</li>
          <li>Government &amp; Public Sector</li><li>Healthcare &amp; Pharmaceuticals</li>
          <li>Education &amp; Training</li><li>Hospitality &amp; Tourism</li><li>Media &amp; Entertainment</li>
          <li>E-Commerce &amp; Retail</li>
        </ul>
        <h2>Professional Skills</h2>
        <h3>Finance &amp; Accounting</h3>
        <ul>
          <li>Financial Analysis</li><li>Financial Modelling</li><li>Corporate Finance</li>
          <li>Investment Banking</li><li>Portfolio Management</li><li>Risk Management</li>
          <li>Credit Analysis</li><li>Treasury Management</li><li>Tax Advisory</li>
          <li>Audit &amp; Assurance</li><li>IFRS Reporting</li><li>Management Accounting</li>
          <li>Anti-Money Laundering (AML)</li><li>Regulatory Compliance</li><li>Microfinance</li>
        </ul>
        <h3>Technology</h3>
        <ul>
          <li>JavaScript / TypeScript</li><li>Python</li><li>Java</li><li>React / Angular / Vue</li>
          <li>Node.js</li><li>Mobile Development</li><li>Cloud (AWS / Azure / GCP)</li>
          <li>DevOps &amp; CI/CD</li><li>Database Administration</li><li>Machine Learning / AI</li>
          <li>ERP Systems (SAP / Oracle)</li><li>QA &amp; Testing</li><li>UI/UX Design</li>
        </ul>
        <h3>Management &amp; Operations</h3>
        <ul>
          <li>Project Management</li><li>Strategic Planning</li><li>Operations Management</li>
          <li>Supply Chain Management</li><li>Procurement</li><li>Lean / Six Sigma</li>
        </ul>
        <h3>Engineering &amp; Construction</h3>
        <ul>
          <li>Civil Engineering</li><li>Structural Engineering</li><li>Electrical Engineering</li>
          <li>Mechanical Engineering</li><li>Construction Management</li><li>HSE Management</li>
        </ul>
        <h2>Certifications Recognized</h2>
        <ul>
          <li>CISI (Levels 1-6)</li><li>CFA (Chartered Financial Analyst)</li><li>ACCA</li>
          <li>CPA</li><li>CIA</li><li>FRM</li><li>PMP</li><li>PRINCE2</li><li>Scrum Master</li>
          <li>AWS / Azure / GCP Certified</li><li>CISSP</li><li>Six Sigma</li><li>SHRM</li><li>CIPD</li>
        </ul>
        <h2>Locations</h2>
        <ul>
          <li>Addis Ababa</li><li>Dire Dawa</li><li>Mekelle</li><li>Hawassa</li><li>Bahir Dar</li>
          <li>Gondar</li><li>Jimma</li><li>Harar</li><li>Adama</li><li>Remote (Ethiopia &amp; International)</li>
        </ul>
      </section>

      {/* Velvet Rope */}
      <VelvetRope />
    </>
  )
}
