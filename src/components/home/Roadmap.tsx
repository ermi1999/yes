import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeading } from "@/components/ui/SectionHeading"

gsap.registerPlugin(ScrollTrigger)


const steps = [
  { day: 1, label: "Consult", desc: "We learn your requirements, headcount targets, and compliance needs. You get a clear scope and timeline." },
  { day: 7, label: "Legal Setup", desc: "Employment contracts drafted, tax registration initiated, pension and benefits structured to Ethiopian law." },
  { day: 14, label: "First Hire", desc: "Your first employee is onboarded, contracted, and compliant. Payroll is live." },
  { day: 30, label: "Operational", desc: "Full team in place, ongoing compliance managed, monthly reporting established. You focus on the work." },
]

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Each step reveals
      stepsRef.current.forEach((step, i) => {
        if (!step) return

        const dayArea = step.querySelector("[data-day]") as HTMLElement
        const content = step.querySelector("[data-content]") as HTMLElement

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        })

        if (dayArea) {
          gsap.set(dayArea, { opacity: 0, y: 16 })
          tl.to(dayArea, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.06,
            ease: "power3.out",
          })
        }

        if (content) {
          gsap.set(content, { opacity: 0, y: 24 })
          tl.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          }, "-=0.3")
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-spacing overflow-hidden" style={{ background: "var(--color-section-tint)" }}>
      <div className="container-yes">
        <SectionHeading
          label="Speed to Market"
          subtitle="From first call to fully operational in 30 days. Not 60. Not 90."
          align="center"
        >
          From First Call to Fully Operational in <span className="hook">30 Days</span>
        </SectionHeading>

        {/* Steps grid with large numbers and connecting lines */}
        <div className="relative mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            {steps.map((step, i) => {
              return (
                <div
                  key={step.day}
                  ref={(el) => { stepsRef.current[i] = el }}
                  className="relative flex flex-col md:px-6 first:md:pl-0 last:md:pr-0"
                >
                  {/* Large muted day number */}
                  <div data-day className="relative mb-6">
                    <span
                      className="block text-[96px] md:text-[120px] font-black leading-none text-near-black/[0.04] select-none"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {String(step.day).padStart(2, "0")}
                    </span>
                    <span
                      className="absolute bottom-2 left-0 inline-flex items-center px-3 py-1 rounded-[var(--radius-pill)] text-[12px] font-bold tracking-[0.04em]"
                      style={{
                        fontFeatureSettings: '"calt"',
                        background: i === steps.length - 1 ? "var(--color-wise-green)" : "var(--color-light-mint)",
                        color: i === steps.length - 1 ? "var(--color-dark-green)" : "#0e0f0c",
                      }}
                    >
                      Day {step.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div data-content>
                    <h3
                      className="text-[22px] md:text-[26px] font-black leading-[0.85] mb-3"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {step.label}
                    </h3>
                    <p
                      className="text-[14px] text-warm-dark leading-[1.6] font-medium max-w-[280px]"
                      style={{ fontFeatureSettings: '"calt"' }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Mobile separator */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-near-black/[0.06] ml-[28px] mt-6" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
