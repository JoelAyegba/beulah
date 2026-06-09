import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  accent?: "primary" | "secondary" | "brand"
  className?: string
}

const ACCENT_CLASS: Record<NonNullable<StatCardProps["accent"]>, string> = {
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  brand: "text-brand",
}

export function StatCard({ value, label, accent = "primary", className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold mb-2 font-[family-name:var(--font-playfair)]",
          ACCENT_CLASS[accent],
        )}
      >
        {value}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}
