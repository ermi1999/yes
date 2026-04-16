import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  proofSource: string
  className?: string
}

export function StatCounter({ value, suffix = "", prefix = "", label, proofSource, className }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1500
          const startTime = performance.now()
          function animate(now: number) {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrent(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-black tracking-normal text-near-black leading-[0.85]" style={{ fontFeatureSettings: '"calt"' }}>
        {prefix}{current.toLocaleString()}{suffix}
      </div>
      <div className="mt-3 text-[13px] text-gray font-medium" style={{ fontFeatureSettings: '"calt"' }}>
        {label}
      </div>
      <div className="mt-1.5 flex justify-center">
        <span className="inline-flex items-center text-[11px] font-semibold text-positive-green" style={{ fontFeatureSettings: '"calt"' }}>
          {proofSource}
        </span>
      </div>
    </div>
  )
}
