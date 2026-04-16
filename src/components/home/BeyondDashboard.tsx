import { SectionHeading } from "@/components/ui/SectionHeading"

const eorItems = [
  "Ticket-based support, 8,000 miles away",
  "Template compliance — not built for Proclamation 1156/2019",
  "Automated onboarding with no local context",
  "30\u201360 day setup while you wait",
  "No office, no team, no presence in Ethiopia",
]

const yesItems = [
  "Dedicated account manager in Addis Ababa",
  "Built around Proc. 1156/2019 from day one",
  "Hands-on onboarding with cultural and legal briefing",
  "First hire operational within weeks, not months",
  "On the ground since 2015. Bethlehem Plaza, Addis.",
]

export function BeyondDashboard() {
  return (
    <section className="section-spacing">
      <div className="container-yes">
        <SectionHeading
          label="The Audit"
          subtitle="Global EOR platforms sell convenience. We deliver certainty."
          align="center"
        >
          The Local <span className="hook">Advantage</span>
        </SectionHeading>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8 rounded-[var(--radius-section)] overflow-hidden"
          style={{ border: "1px solid rgba(14, 15, 12, 0.12)" }}
        >
          {/* Global EOR Column */}
          <div className="p-6 md:p-8 transition-all duration-200 hover:opacity-55" style={{ background: "rgba(14, 15, 12, 0.02)" }}>
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-near-black/30 pb-4 mb-4 border-b border-near-black/6" style={{ fontFeatureSettings: '"calt"' }}>
              Global EOR Platform
            </div>
            <div className="flex flex-col gap-3">
              {eorItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-near-black/[0.04] flex items-center justify-center flex-shrink-0 text-[9px] text-near-black/20">
                    &mdash;
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* YES Column */}
          <div className="p-6 md:p-8 bg-white transition-all duration-200 hover:bg-light-mint/30" style={{ borderLeft: "1px solid rgba(14, 15, 12, 0.12)" }}>
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-near-black/50 pb-4 mb-4 border-b border-wise-green/10" style={{ fontFeatureSettings: '"calt"' }}>
              YES Employment
            </div>
            <div className="flex flex-col gap-3">
              {yesItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[13px] text-near-black/70 font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-wise-green/10 flex items-center justify-center flex-shrink-0 text-[9px] text-positive-green font-bold">
                    &#10003;
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
