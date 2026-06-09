import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SectionHeadingProps {
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  title: string
  subtitle?: string
  align?: "center" | "left"
  className?: string
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 mb-4",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {EyebrowIcon && <EyebrowIcon className="h-4 w-4 text-brand" />}
          <span className="text-sm font-medium text-brand">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  )
}
