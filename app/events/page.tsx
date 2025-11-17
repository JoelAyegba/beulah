import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    id: 7,
    title: "Feed 1000 Families in Nigeria",
    date: "December 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Beulah walk of hope foundation Training Center, Abuja, Nigeria",
    type: "Outreach",
    capacity: "1000 Families",
    description:
      "Join us in our mission to feed 1000 families across Nigeria this festive season.",
    image: "/outreach-1.jpg",
    status: "Open",
  },
];

const pastEvents = [
  {
    id: 2,
    title: "Digital Skills Workshop Series",
    date: "April 22-24, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Hope Horizon Training Center, Abuja, Nigeria",
    type: "Workshop",
    capacity: "30 participants",
    description:
      "Three-day intensive workshop covering social media marketing, basic web design, and digital content creation. Perfect for women looking to enhance their digital presence or start online businesses.",
    image: "/african-women-learning-computer-skills-in-classroo.jpg",
    status: "Registration Open",
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
              Past Events Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"See what we've accomplished together in recent events."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Women attended our 2024 Summit</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-2">25</div>
                <p className="text-sm text-muted-foreground">Workshops conducted last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-2">15</div>
                <p className="text-sm text-muted-foreground">Communities reached through outreach</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Humanitarian Outreach Report */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Humanitarian Outreach — Food Distribution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In a heartfelt outreach, our volunteers distributed food packages to vulnerable women and families in the community. Below is a brief report and photos from the event.
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-left space-y-8">
            <div className="grid grid-cols-1 gap-6 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Event Summary</h3>

                <div className="overflow-hidden rounded-lg mb-4 border border-gray-200">
                  <img src="/outreach-1.jpg" alt="Volunteers handing food parcels to community members" className="w-full h-64 object-cover rounded-sm" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our recent humanitarian outreach brought together volunteers and community partners to distribute essential food packages to households in need. The event aimed to provide immediate relief to vulnerable families while fostering community solidarity and raising awareness about ongoing needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Volunteers spoke with recipients, assessed immediate household needs, and connected many families to upcoming support programs. The coordination between volunteers and local leaders ensured distributions were orderly and reached those most in need.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="order-2 lg:order-1">
                <h4 className="text-lg font-medium mb-2">Activities</h4>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Organized and packed over 200 food parcels containing staple items.</li>
                  <li>Coordinated distribution points to reach residents across multiple neighborhoods.</li>
                  <li>Provided information on our programs and upcoming support services.</li>
                </ul>
                <p className="text-muted-foreground">
                  Our volunteers worked in teams to ensure efficient packing and respectful, dignified distribution, prioritizing the elderly, single-parent households, and those referred by local community leaders.
                </p>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden rounded-lg h-64 border border-gray-200">
                <img src="/outreach-2.jpg" alt="Community members receiving food packages" className="w-full h-full object-cover rounded-sm" />
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-lg mb-4 border border-gray-200">
                <img src="/outreach-3.jpg" alt="Group photo of volunteers in pink shirts" className="w-full h-72 object-cover rounded-sm" />
              </div>

              <h4 className="text-lg font-medium mb-2">Impact</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The distribution provided immediate nutritional support for dozens of families and strengthened connections between the organization and the communities we serve. Recipients expressed gratitude and relief, and many community members signed up for future programs and volunteer opportunities.
              </p>

              <p className="text-sm text-muted-foreground">
                We extend our sincere thanks to the volunteers, partners, and donors who made this outreach possible. Your continued support helps ensure we can respond quickly and compassionately to those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}