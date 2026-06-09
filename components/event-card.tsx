import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { EventMetadata } from "@/components/event-metadata"

export interface EventCardData {
  title: string
  date: string
  location: string
  image: string
  link: string
  type?: string
  description?: string
  time?: string
  capacity?: string
  status?: string
}

interface EventCardProps {
  event: EventCardData
  layout?: "vertical" | "horizontal"
}

export function EventCard({ event, layout = "vertical" }: EventCardProps) {
  if (layout === "horizontal") {
    return (
      <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="relative h-64 lg:h-full overflow-hidden">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardContent className="lg:col-span-2 p-6 lg:p-8">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4 gap-4">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] flex-1">{event.title}</h3>
                {event.status && <Badge variant="secondary">{event.status}</Badge>}
              </div>
              <EventMetadata
                grid
                date={event.date}
                time={event.time}
                location={event.location}
                capacity={event.capacity}
                className="mb-4"
              />
              {event.description && (
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{event.description}</p>
              )}
              <div className="mt-auto">
                <Button asChild>
                  <Link href={event.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {event.type && <Badge className="absolute top-3 left-3 bg-brand text-brand-foreground">{event.type}</Badge>}
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] mb-3 line-clamp-2">{event.title}</h3>
        <EventMetadata date={event.date} location={event.location} className="mb-4" />
        {event.description && (
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">{event.description}</p>
        )}
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link href={event.link}>
            Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
