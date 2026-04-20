import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StatCounter } from "@/components/ui/StatCounter"
import { OfficeMap } from "@/components/ui/OfficeMap"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { useTextReveal } from "@/hooks/useTextReveal"

const milestones = [
  {
    year: "2015",
    title: "Founded",
    description:
      "YES | Your Employment Solutions opens in Addis Ababa with a dual mission: give companies a reliable way to build teams in Ethiopia — and give Ethiopian professionals a credible path to meaningful work.",
  },
  {
    year: "2017",
    title: "EOR Launch",
    description:
      "YES launches its Employer of Record service — becoming the legal employer so international companies can hire in Ethiopia without entity registration.",
  },
  {
    year: "2019",
    title: "Integrity & Vetting",
    description:
      "Background verification goes live: primary source checks across Ethiopian regions — academic credentials, criminal records, and professional references.",
  },
  {
    year: "2020",
    title: "Assessment & Advisory",
    description:
      "YES introduces competency assessments and organizational salary scale studies — giving employers the data to structure roles, benchmark compensation, and hire with confidence.",
  },
  {
    year: "2022",
    title: "The Executive Roster",
    description:
      "The Executive Roster reaches critical mass — rigorously assessed specialists across every professional discipline. The network becomes the market standard.",
  },
  {
    year: "2023",
    title: "CISI Partnership",
    description:
      "YES Academy launches in partnership with CISI UK and Exam Ready. Preparing Ethiopia's finance professionals for the capital market opening.",
  },
]

const values = [
  {
    title: "Excellence",
    description:
      "Good enough doesn't exist in compliance. We aim for zero errors because our clients can't afford one.",
  },
  {
    title: "Integrity",
    description:
      "We verify everything we claim. Our vetting process reflects the standard we hold ourselves to.",
  },
  {
    title: "Respect",
    description:
      "We deliver meaningful career opportunities to the future workforce, giving back to the community in which we work, live, and grow.",
  },
]

const team = [
  {
    initials: "MN",
    name: "Meheret N.",
    role: "Founder & Managing Director",
    description:
      "Architect of YES's vision and Ethiopia's employment infrastructure standard.",
  },
  {
    initials: "BD",
    name: "Beza D.",
    role: "Head of Talent Operations",
    description:
      "Ensures every service line runs with zero-error precision and compliance.",
  },
  {
    initials: "TN",
    name: "Ted N.",
    role: "Director of Compliance",
    description:
      "Leads the Executive Roster and talent acquisition across 40+ disciplines.",
  },
]

export default function TheStandard() {
  const h1Ref = useTextReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center pt-[72px]">
        <div className="container-yes relative z-10 py-20 text-center md:py-32">
          <div className="mb-6 flex items-center justify-center">
            <span
              className="text-[11px] font-bold tracking-[0.12em] text-near-black/30 uppercase"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              About YES
            </span>
          </div>

          <h1
            ref={h1Ref}
            className="invisible mx-auto max-w-5xl text-[48px] leading-[0.85] font-black sm:text-[64px] md:text-[96px] lg:text-[112px]"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            10+ Years. One <span className="hook">Standard.</span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed font-medium text-gray md:text-lg"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Since 2015, we've provided local and international clients with the
            right people to fill their most critical roles at the right time.
            Not a platform. Not a portal. A partner.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="section-spacing border-t"
        style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}
      >
        <div className="container-yes">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            {/* Mission */}
            <div>
              <SectionHeading label="Mission">
                What We <span className="hook">Do</span>
              </SectionHeading>
              <p
                className="max-w-lg text-[15px] leading-[1.7] font-medium text-gray md:text-base"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                To bridge the gap between organisations and the people who will
                shape our future communities — with excellence, integrity, and
                respect at its core. We professionally manage HR tasks so
                businesses can focus on what matters most: growth.
              </p>
            </div>

            {/* Vision */}
            <div>
              <SectionHeading label="Vision">
                Where We're <span className="hook">Going</span>
              </SectionHeading>
              <p
                className="max-w-lg text-[15px] leading-[1.7] font-medium text-gray md:text-base"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                To be the bridge between growing companies and growing minds —
                the top employment services company in Ethiopia, driven by
                expertise, excellence, and integrity for the future benefit of
                our local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-spacing"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 100%)",
        }}
      >
        <div className="container-yes">
          <SectionHeading
            label="Our Journey"
            subtitle="From a single office in Addis Ababa to Ethiopia's employment infrastructure — one milestone at a time."
            align="center"
          >
            The <span className="hook">Timeline</span>
          </SectionHeading>

          {/* Alternating stepper — clinique style */}
          <div className="mx-auto mt-16 flex w-full flex-col sm:w-[600px] lg:w-[760px]">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0
              const isLast = i === milestones.length - 1
              return (
                <div
                  key={m.year}
                  className={`flex flex-row ${isEven ? "sm:flex-row-reverse" : ""} ${isEven ? "sm:self-start" : "sm:self-end"} sm:w-[380px] lg:w-[450px]`}
                >
                  {/* Numbered circle + vertical line */}
                  <div className="flex shrink-0 flex-col items-center">
                    <div
                      className="hook flex h-[50px] w-[50px] items-center justify-center rounded-full text-[22px]"
                      style={{
                        background: "var(--color-wise-green)",
                        color: "var(--color-dark-green)",
                        fontWeight: 600,
                      }}
                    >
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div
                        className="w-px bg-wise-green/30"
                        style={{ height: "120px" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`mx-4 mb-5 flex flex-col sm:mx-7 ${isEven ? "sm:text-end" : ""}`}
                  >
                    <span
                      className="mb-1 text-[13px] font-bold text-wise-green"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {m.year}
                    </span>
                    <h3
                      className="hook mb-2 text-[22px] md:text-2xl"
                      style={{ fontWeight: 500 }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[14px] leading-[1.6] font-medium text-warm-dark"
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
      <section
        className="section-spacing border-t"
        style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}
      >
        <div className="container-yes">
          <SectionHeading label="Impact Metrics" align="center">
            The Numbers Behind <span className="hook">The Standard</span>
          </SectionHeading>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <StatCounter
              value={6}
              label="Core Service Lines"
              proofSource="EOR, Talent, Integrity, Payroll, Training, Advisory"
            />
            <StatCounter
              value={200}
              suffix="+"
              label="Enterprise Partners"
              proofSource="Active contracts across sectors"
            />
            <StatCounter
              value={40}
              suffix="+"
              label="Professional Disciplines"
              proofSource="Finance, Tech, Engineering, Legal & more"
            />
            <StatCounter
              value={0}
              label="Compliance Penalties"
              proofSource="Zero ERCA penalties since founding"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="section-spacing"
        style={{
          background: "linear-gradient(180deg, var(--color-surface-tint-mid) 0%, #ffffff 100%)",
        }}
      >
        <div className="container-yes">
          <SectionHeading
            label="Leadership"
            subtitle="The team setting the standard for Ethiopian employment."
            align="center"
          >
            The People Behind <span className="hook">YES</span>
          </SectionHeading>

          <div className="mx-auto mt-16 max-w-4xl">
            {/* Founder — hero placement */}
            <div
              className="relative mb-14 flex flex-col items-start gap-8 pb-14 md:flex-row md:gap-12"
              style={{
                borderBottom:
                  "1px solid var(--color-separator, rgba(14,15,12,0.06))",
              }}
            >
              <div className="relative shrink-0">
                <span
                  className="block text-[120px] leading-none font-black select-none md:text-[160px]"
                  style={{
                    fontFeatureSettings: '"calt"',
                    color: "var(--color-near-black)",
                    opacity: 0.04,
                  }}
                >
                  {team[0].initials}
                </span>
                <span
                  className="absolute bottom-4 left-0 text-[32px] leading-none font-black md:text-[40px]"
                  style={{
                    fontFeatureSettings: '"calt"',
                    color: "var(--color-near-black)",
                  }}
                >
                  {team[0].name}
                </span>
              </div>
              <div className="flex flex-col justify-end md:pb-4">
                <span className="hook mb-2 text-[20px] md:text-[24px]">
                  {team[0].role}
                </span>
                <p
                  className="max-w-md text-[15px] leading-[1.7] font-medium text-warm-dark md:text-base"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {team[0].description}
                </p>
              </div>
            </div>

            {/* Other members */}
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {team.slice(1).map((member) => (
                <div key={member.initials} className="relative">
                  <span
                    className="block text-[80px] leading-none font-black select-none md:text-[100px]"
                    style={{
                      fontFeatureSettings: '"calt"',
                      color: "var(--color-near-black)",
                      opacity: 0.04,
                    }}
                  >
                    {member.initials}
                  </span>
                  <div className="-mt-6">
                    <span
                      className="mb-2 block text-[22px] leading-none font-black md:text-[26px]"
                      style={{
                        fontFeatureSettings: '"calt"',
                        color: "var(--color-near-black)",
                      }}
                    >
                      {member.name}
                    </span>
                    <span className="hook text-[17px] md:text-[19px]">
                      {member.role}
                    </span>
                    <p
                      className="mt-3 text-[14px] leading-[1.7] font-medium text-warm-dark"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
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
      <section
        className="section-spacing border-t"
        style={{ borderColor: "rgba(14, 15, 12, 0.06)" }}
      >
        <div className="container-yes">
          <SectionHeading
            label="Our Values"
            subtitle="Three principles that govern every decision, every hire, every engagement."
            align="center"
          >
            What Defines <span className="hook">The Standard</span>
          </SectionHeading>

          <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group flex flex-col items-start gap-6 rounded-[var(--radius-large)] p-8 transition-all duration-300 hover:shadow-[0_0_0_1px_var(--color-wise-green)] md:flex-row md:gap-10 md:p-10"
                style={{ border: "1px solid rgba(14, 15, 12, 0.06)" }}
              >
                {/* Number */}
                <span
                  className="shrink-0 text-[48px] leading-none font-black text-near-black/[0.06] select-none md:text-[56px]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className="mb-3 text-[24px] leading-[0.85] font-black md:text-[28px]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="max-w-lg text-[14px] leading-[1.7] font-medium text-warm-dark md:text-[15px]"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ */}
      <section
        className="section-spacing"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, var(--color-surface-tint-mid) 100%)",
        }}
      >
        <div className="container-yes">
          <SectionHeading label="Headquarters" align="center">
            Bethlehem Plaza, <span className="hook">Addis Ababa</span>
          </SectionHeading>

          <p
            className="mx-auto mt-4 max-w-md text-center text-[15px] leading-[1.7] font-medium text-gray md:text-base"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Our headquarters sits in the heart of Ethiopia's capital.
            On-the-ground presence is the foundation of the standard we deliver.
          </p>

          {/* Map + Address Card */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div
              className="relative overflow-hidden rounded-[var(--radius-large)]"
              style={{ border: "1px solid rgba(14, 15, 12, 0.08)" }}
            >
              {/* Map */}
              <div className="h-[350px] md:h-[450px]">
                <OfficeMap />
              </div>

              {/* Address overlay card */}
              <div
                className="absolute bottom-4 left-4 max-w-[280px] rounded-[var(--radius-card)] px-5 py-4 md:bottom-6 md:left-6"
                style={{
                  background: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow:
                    "rgba(14, 15, 12, 0.06) 0px 0px 0px 1px, rgba(14, 15, 12, 0.04) 0px 4px 16px",
                }}
              >
                <h3
                  className="mb-2 text-[15px] leading-[0.85] font-black"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  YES | Your Employment Solutions
                </h3>
                <p
                  className="text-[12px] leading-[1.6] font-medium text-warm-dark"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Suite 301E, Bethlehem Plaza
                  <br />
                  Kenenisa Avenue, Megenagna
                  <br />
                  Addis Ababa, Ethiopia
                </p>
                <p
                  className="mt-2 text-[11px] font-medium text-gray"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  Mon – Fri, 8:30 AM – 5:30 PM EAT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VelvetRope />

      {/* CTA */}
      <section
        className="border-t"
        style={{
          borderColor: "rgba(14, 15, 12, 0.06)",
          background: "linear-gradient(180deg, var(--color-surface-tint-mid) 0%, var(--color-surface-tint-deep) 100%)",
        }}
      >
        <div className="container-yes py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-[40px] leading-[0.85] font-black text-near-black md:text-[64px]"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Ready to Work <span className="hook">With Us?</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed font-medium text-gray md:text-base"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Whether you're scaling a team in Ethiopia or seeking your next
              career move — the standard starts here.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/initialize"
                className="wise-btn rounded-[var(--radius-pill)] bg-wise-green px-8 py-3.5 text-[14px] font-semibold text-dark-green"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                Talk to Our Team
              </Link>
              <Link
                to="/for-talent"
                className="wise-btn rounded-[var(--radius-pill)] px-8 py-3.5 text-[14px] font-semibold text-near-black"
                style={{
                  fontFeatureSettings: '"calt"',
                  background: "var(--color-light-mint)",
                }}
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
