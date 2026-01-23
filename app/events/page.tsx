import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Events - Beulah walk of hope foundation",
  description: "Explore upcoming and past events by Beulah walk of hope foundation. Join us in empowering women across Africa.",
  openGraph: {
    title: "Events - Beulah walk of hope foundation",
    description: "Explore upcoming and past events by Beulah walk of hope foundation. Join us in empowering women across Africa.",
    image: "/chritmas.jpg",
  },
}

const upcomingEvents: any[] = [
  // {
  //   id: 7,
  //   title: "Operation Feed Families In Nigeria",
  //   date: "December 20, 2025",
  //   time: "9:00 AM - 3:00 PM",
  //   location: "Beulah walk of hope foundation Training Center, Abuja, Nigeria",
  //   type: "Outreach",
  //   capacity: "1000 Families",
  //   description:
  //     "Join us in our mission to feed 1000 families across Nigeria this festive season.",
  //   image: "/outreach-1.jpg",
  //   status: "Open",
  // },
];

const pastEvents = [
  {
    id: 7,
    title: "Operation Feed Families In Nigeria",
    date: "December 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Beulah walk of hope foundation Training Center, Abuja, Nigeria",
    type: "Outreach",
    capacity: "1000 Families",
    description:
      "A heartfelt thank you to all our incredible partners and sponsors for making it possible! Your support is fueling a movement for women's health breaking barriers and driving change we couldn't do this without you!",
    image: "/outreach-1.jpg",
    status: "Completed",
    link: "/events/operation-feed-families",
  },
  {
    id: 6,
    title: "Supporting Education: A Scholarship Initiative",
    date: "June 15, 2025",
    time: "All Day",
    location: "God's Grace Nursery and Primary School, Abuja, Nigeria",
    type: "Scholarship",
    capacity: "Multiple Students",
    description:
      "Beulah Walk of Hope provided scholarships to cover school fees for several students, ensuring they can continue their education.",
    image: "/fees.jpg",
    status: "Completed",
    link: "/events/school-fees-payment",
  },
  {
    id: 5,
    title: "A Visit of Hope: Supporting a Family in Need",
    date: "July 12, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Local Hospital, Abuja, Nigeria",
    type: "Visit",
    capacity: "1 Family",
    description:
      "A touching visit to a local hospital to support a family whose child was on oxygen.",
    image: "/hospital.jpg",
    status: "Completed",
    link: "/events/hospital-visit",
  },
  {
    id: 4,
    title: "Our Health, Our Voice: A Women's Health Talk Show",
    date: "August 10, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Online",
    type: "Webinar",
    capacity: "150+ Attendees",
    description:
      "An educational talk show dedicated to women's health, bringing together health professionals and community members for an open and honest conversation.",
    image: "/womens-health.jpg",
    status: "Completed",
    link: "/events/womens-health-talk-show",
  },
  {
    id: 3,
    title: "Digital Skills Workshop Series",
    date: "April 22-24, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Hope Horizon Training Center, Abuja, Nigeria",
    type: "Workshop",
    capacity: "30 participants",
    description:
      "Three-day intensive workshop covering social media marketing, basic web design, and digital content creation.",
    image: "/african-women-learning-computer-skills-in-classroo.jpg",
    status: "Completed",
    link: "#", // No individual page for this one yet
  },
  {
    id: 2,
    title: "Honoring Our Elders: A Day of Care for Senior Citizens",
    date: "September 20, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Grace Gardens, Abuja, Nigeria",
    type: "Outreach",
    capacity: "100+ Seniors",
    description:
      "A day dedicated to our senior citizens, providing health checks, care packages, and companionship.",
    image: "/senior-citizens.jpg",
    status: "Completed",
    link: "/events/honoring-our-elders",
  },
  {
    id: 1,
    title: "Humanitarian Outreach — Food Distribution",
    date: "October 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Community Hall, Abuja, Nigeria",
    type: "Outreach",
    capacity: "200+ Families",
    description:
      "In a heartfelt outreach, our volunteers distributed food packages to vulnerable women and families in the community.",
    image: "/outreach-1.jpg",
    status: "Completed",
    link: "/events/humanitarian-outreach",
  },
];

const eventTypes = ["All Events", "Conference", "Workshop", "Outreach", "Webinar", "Fundraiser", "Retreat"]

export default function EventsPage() {
  return (
    <main>
      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Discover opportunities to learn, connect, and grow with our community."}
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] flex-1">
                          {event.title}
                        </h3>
                        <Badge variant="secondary" className="ml-4">
                          {event.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{event.description}</p>

                      <div className="flex flex-col sm:flex-row gap-3">

                        {/* Learn More removed per request */}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Past Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"See what we've accomplished together in recent events."}
            </p>
          </div>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] flex-1">
                          {event.title}
                        </h3>
                        <Badge variant="secondary" className="ml-4">
                          {event.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{event.description}</p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={event.link} passHref>
                          <Button>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}