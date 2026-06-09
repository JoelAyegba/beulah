import { Calendar } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { EventCard } from "@/components/event-card"

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
    id: 9,
    title: "Women Wellness & Medical Outreach: Fertility Support",
    date: "May 23, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Abuja, Nigeria",
    type: "Outreach",
    capacity: "6 Grant Recipients",
    description:
      "A one-day outreach dedicated to the health, wellness, and empowerment of women, where six women each received a medical support grant of ₦250,000 towards their fertility journey.",
    image: "/fertility-grant-1.jpg",
    status: "Completed",
    link: "/events/women-wellness-medical-outreach",
  },
  {
    id: 8,
    title: "Mental Health Awareness Event",
    date: "May 23, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Abuja, Nigeria",
    type: "Outreach",
    capacity: "Community Gathering",
    description:
      "A community gathering dedicated to women's mental health — breaking the silence around stress, grief, and burnout, and reminding women that asking for help is a sign of strength.",
    image: "/mental-health-1.jpg",
    status: "Completed",
    link: "/events/mental-health-awareness",
  },
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

export default function EventsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('/african-women-smiling-together-in-community-empowe.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-black/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Calendar className="h-12 w-12 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-white text-shadow-hero">
            Our Events
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/90">
            {"From medical outreaches to community gatherings, explore the moments where hope becomes action — and see how, together, we walk beside women across Africa."}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 reveal">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Discover opportunities to learn, connect, and grow with our community."
            />
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} layout="horizontal" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="py-20 bg-muted reveal">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Past Events"
            subtitle="See what we've accomplished together in recent events."
          />
          <div className="space-y-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} layout="horizontal" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}