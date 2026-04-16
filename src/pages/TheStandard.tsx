import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"

const milestones = [
  { year: "2015", title: "Founded in Addis Ababa", description: "YES Employment Solutions established to address Ethiopia's growing need for professional employment infrastructure." },
  { year: "2017", title: "EOR Service Launch", description: "Launched Employer of Record services, enabling international companies to hire legally in Ethiopia without a local entity." },
  { year: "2019", title: "Integrity & Vetting Division", description: "Introduced forensic-grade background verification and credential authentication for the Ethiopian market." },
  { year: "2020", title: "Assessment & Advisory Services", description: "Expanded into psychometric assessment, organizational consulting, and workforce advisory." },
  { year: "2022", title: "The Executive Roster", description: "Launched a curated talent pool of pre-vetted senior professionals for priority client matching." },
  { year: "2023", title: "CISI UK Partnership", description: "Became the first Ethiopian firm to partner with the Chartered Institute for Securities & Investment for professional certification." },
]

const values = [
  {
    title: "Excellence",
    description: "We don't meet standards — we set them. Every process, every placement, every payroll run reflects our obsession with getting it right.",
  },
  {
    title: "Integrity",
    description: "Trust is the foundation of everything we do. We verify, we validate, and we stand behind every professional we place.",
  },
  {
    title: "Respect",
    description: "For our clients, our talent, and the Ethiopian market. We believe dignified employment is a right, not a privilege.",
  },
]

const team = [
  { initials: "MN", name: "Meheret N.", role: "Founder & Managing Director", description: "Architect of YES's vision and Ethiopia's employment infrastructure standard." },
  { initials: "BD", name: "Beza D.", role: "Head of Talent Operations", description: "Ensures every service line runs with zero-error precision and compliance." },
  { initials: "TN", name: "Ted N.", role: "Director of Compliance", description: "Leads the Executive Roster and talent acquisition across 40+ disciplines." },
]

export default function TheStandard() {
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
              About YES Employment Solutions
            </span>
          </div>

          <h1
            className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px] font-black leading-[0.85] max-w-5xl mx-auto"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            10+ Years. One{" "}
            <span className="hook">Standard.</span>
          </h1>

          <p
            className="mt-8 text-base md:text-lg text-gray leading-relaxed max-w-xl mx-auto font-medium"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Ethiopia's employment infrastructure since 2015. We set the benchmark for how
            companies hire, manage, and pay employees — so you don't have to figure it out alone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Mission */}
            <div>
              <SectionHeading label="Our Mission">
                What We <span className="hook">Do</span>
              </SectionHeading>
              <p
                className="text-[15px] md:text-base leading-[1.7] text-gray font-medium max-w-lg"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                To set and maintain the standard for how companies hire, manage, and pay
                employees in Ethiopia.
              </p>
            </div>

            {/* Vision */}
            <div>
              <SectionHeading label="Our Vision">
                Where We're <span className="hook">Going</span>
              </SectionHeading>
              <p
                className="text-[15px] md:text-base leading-[1.7] text-gray font-medium max-w-lg"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                An Ethiopia where every professional has access to opportunity, and every
                company has access to verified talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7f3 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Our Journey"
            subtitle="From a single office in Addis Ababa to Ethiopia's most comprehensive employment solutions provider."
            align="center"
          >
            A Decade of <span className="hook">Building</span>
          </SectionHeading>

          {/* Alternating stepper — clinique style */}
          <div className="flex flex-col w-full sm:w-[600px] lg:w-[760px] mx-auto mt-16">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0
              const isLast = i === milestones.length - 1
              return (
                <div
                  key={m.year}
                  className={`flex flex-row ${isEven ? "sm:flex-row-reverse" : ""} ${isEven ? "sm:self-start" : "sm:self-end"} sm:w-[380px] lg:w-[450px]`}
                >
                  {/* Numbered circle + vertical line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="rounded-full w-[50px] h-[50px] flex items-center justify-center hook text-[22px]"
                      style={{ background: "var(--color-wise-green)", color: "var(--color-dark-green)", fontWeight: 600 }}
                    >
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div className="w-px bg-wise-green/30" style={{ height: "120px" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col mx-4 sm:mx-7 mb-5 ${isEven ? "sm:text-end" : ""}`}>
                    <span
                      className="text-[13px] font-bold text-wise-green mb-1"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {m.year}
                    </span>
                    <h3
                      className="hook text-[22px] md:text-2xl mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[14px] text-warm-dark leading-[1.6] font-medium"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Impact"
            subtitle="The numbers behind a decade of employment infrastructure."
            align="center"
          >
            Measured <span className="hook">Results</span>
          </SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            <StatCounter value={6} label="Core Services" proofSource="Full-spectrum coverage" />
            <StatCounter value={200} suffix="+" label="Enterprise Partners" proofSource="Active client base" />
            <StatCounter value={40} suffix="+" label="Disciplines Covered" proofSource="Cross-industry reach" />
            <StatCounter value={0} label="Compliance Penalties" proofSource="Zero-error track record" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #f5f7f3 0%, #ffffff 100%)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Leadership"
            subtitle="The team setting the standard for Ethiopian employment."
            align="center"
          >
            The People Behind <span className="hook">YES</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-16">
            {/* Founder — hero placement */}
            <div
              className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12 pb-14 mb-14"
              style={{ borderBottom: "1px solid var(--color-separator, rgba(14,15,12,0.06))" }}
            >
              <div className="relative shrink-0">
                <span
                  className="block text-[120px] md:text-[160px] font-black leading-none select-none"
                  style={{ fontFeatureSettings: '"calt"', color: "var(--color-near-black)", opacity: 0.04 }}
                >
                  {team[0].initials}
                </span>
                <span
                  className="absolute bottom-4 left-0 text-[32px] md:text-[40px] font-black leading-none"
                  style={{ fontFeatureSettings: '"calt"', color: "var(--color-near-black)" }}
                >
                  {team[0].name}
                </span>
              </div>
              <div className="flex flex-col justify-end md:pb-4">
                <span className="hook text-[20px] md:text-[24px] mb-2">{team[0].role}</span>
                <p className="text-[15px] md:text-base text-warm-dark leading-[1.7] font-medium max-w-md" style={{ fontFeatureSettings: '"calt"' }}>
                  {team[0].description}
                </p>
              </div>
            </div>

            {/* Other members */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {team.slice(1).map((member) => (
                <div key={member.initials} className="relative">
                  <span
                    className="block text-[80px] md:text-[100px] font-black leading-none select-none"
                    style={{ fontFeatureSettings: '"calt"', color: "var(--color-near-black)", opacity: 0.04 }}
                  >
                    {member.initials}
                  </span>
                  <div className="-mt-6">
                    <span className="text-[22px] md:text-[26px] font-black leading-none block mb-2" style={{ fontFeatureSettings: '"calt"', color: "var(--color-near-black)" }}>
                      {member.name}
                    </span>
                    <span className="hook text-[17px] md:text-[19px]">{member.role}</span>
                    <p className="mt-3 text-[14px] text-warm-dark leading-[1.7] font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing border-t" style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}>
        <div className="container-yes">
          <SectionHeading
            label="Our Values"
            subtitle="Three principles that guide every decision we make."
            align="center"
          >
            What We Stand <span className="hook">For</span>
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="surface-card p-6 md:p-8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "var(--color-light-mint)" }}
                >
                </div>
                <h3
                  className="text-xl font-black text-near-black leading-[0.85]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {value.title}
                </h3>
                <p
                  className="mt-3 text-[13px] text-gray leading-[1.6] font-medium"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ */}
      <section className="section-spacing" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7f3 100%)" }}>
        <div className="container-yes">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              label="Headquarters"
              subtitle="Visit us at our office in the heart of Addis Ababa."
              align="center"
            >
              Find <span className="hook">Us</span>
            </SectionHeading>

            <div className="surface-card p-8 md:p-10 mt-8 inline-block mx-auto text-center">
              <p
                className="text-lg font-black text-near-black leading-tight"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Bethlehem Plaza
              </p>
              <p
                className="mt-2 text-[14px] text-gray font-medium leading-[1.7]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Addis Ababa, Ethiopia
              </p>
              <div className="mt-4 flex items-center justify-center">
                <span
                  className="text-[12px] font-semibold text-positive-green"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Operational since 2015
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(14, 15, 12, 0.06)", background: "linear-gradient(180deg, #f5f7f3 0%, #eef1ea 100%)" }}
      >
        <div className="container-yes py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-[40px] md:text-[64px] font-black leading-[0.85] text-near-black"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Ready to Work{" "}
              <span className="hook">With Us?</span>
            </h2>
            <p
              className="mt-6 text-[15px] md:text-base text-gray leading-relaxed max-w-xl mx-auto font-medium"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Whether you're a company looking to hire in Ethiopia or a professional
              seeking your next opportunity — we're here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/initialize"
                className="wise-btn px-8 py-3.5 bg-wise-green text-dark-green text-[14px] font-semibold rounded-[var(--radius-pill)]"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Talk to Our Team
              </Link>
              <Link
                to="/for-talent"
                className="wise-btn px-8 py-3.5 text-near-black text-[14px] font-semibold rounded-[var(--radius-pill)]"
                style={{ fontFeatureSettings: '"calt"', background: "var(--color-light-mint)" }}
              >
                Join the Roster
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
