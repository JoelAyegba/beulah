import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventMetadataProps {
  date?: string
  time?: string
  location?: string
  capacity?: string
  /** Render as a 2-column grid (listing cards) instead of a stacked list. */
  grid?: boolean
  className?: string
}

const Row = ({ icon: Icon, text }: { icon: typeof Calendar; text: string }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-4 w-4 text-primary shrink-0" />
    <span>{text}</span>
  </div>
)

export function EventMetadata({ date, time, location, capacity, grid, className }: EventMetadataProps) {
  return (
    <div
      className={cn(
        "text-sm text-muted-foreground",
        grid ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "space-y-1.5",
        className,
      )}
    >
      {date && <Row icon={Calendar} text={date} />}
      {time && <Row icon={Clock} text={time} />}
      {location && <Row icon={MapPin} text={location} />}
      {capacity && <Row icon={Users} text={capacity} />}
    </div>
  )
}
