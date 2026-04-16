import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
  label?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ children, subtitle, label, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      {label && (
        <div className={cn("flex items-center mb-4", align === "center" && "justify-center")}>
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-near-black/30" style={{ fontFeatureSettings: '"calt"' }}>
            {label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-[40px] md:text-[64px] font-black leading-[0.85]",
          align === "center" && "mx-auto max-w-[720px]"
        )}
        style={{ fontFeatureSettings: '"calt"' }}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-[15px] md:text-base leading-[1.7] text-gray max-w-[560px] font-medium",
            align === "center" && "mx-auto"
          )}
          style={{ fontFeatureSettings: '"calt"' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
