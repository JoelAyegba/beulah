import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

export const metadata = {
  title: "Impact - Beulah walk of hope foundation",
  description: "Read inspiring stories of women empowered by Beulah walk of hope foundation. Discover the real impact of our programs.",
  openGraph: {
    title: "Impact - Beulah walk of hope foundation",
    description: "Read inspiring stories of women empowered by Beulah walk of hope foundation. Discover the real impact of our programs.",
    image: "/african-woman-entrepreneur-in-her-shop-smiling-con.jpg",
  },
}

const impactStories = [
  {
    id: 3,
    name: "Blessing Adeyemi",
    title: "Leading Change in Her Community",
    location: "Abuja, Nigeria",
    program: "Advocacy & Rights",
    image: "/african-woman-community-leader-speaking-confidentl.jpg",
    excerpt:
      "After participating in our advocacy training, Blessing became a community leader championing women's rights. She has successfully advocated for policy changes that protect women in her local government area.",
    quote: "I found my voice through Hope Horizon. Now I use it to speak for those who are still finding theirs.",
    impact: "Led 3 successful advocacy campaigns affecting 2,000+ women",
  },
  {
    id: 4,
    name: "Chioma Nwosu",
    title: "Building a Tech Future",
    location: "Abuja, Nigeria",
    program: "Skills Training",
    image: "/african-woman-working-on-computer-technology.jpg",
    excerpt:
      "Through our digital skills program, Chioma learned web development and graphic design. She now runs a successful freelance business and mentors other young women interested in technology.",
    quote: "Technology seemed like a man's world until Hope Horizon showed me I belonged there too.",
    impact: "Earning sustainable income and mentoring 10+ young women",
  },
]

export default function ImpactPage() {
  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/african-woman-entrepreneur-in-her-shop-smiling-con.jpg"
            alt="Impact Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <Quote className="h-4 w-4" />
              <span className="text-sm font-medium">Real Stories, Real Change</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance leading-tight">
              Stories of Transformation
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/95 max-w-3xl mx-auto">
              {
                "Every woman we empower creates a ripple effect of positive change. These are their stories of courage, determination, and success."
              }
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Impact Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {impactStories.map((story, index) => (
              <div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Badge className="mb-4">{story.program}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-3 text-balance">
                    {story.title}
                  </h2>
                  <div className="text-sm text-muted-foreground mb-6">
                    {story.name} • {story.location}
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">{story.excerpt}</p>
                  <div className="bg-muted p-6 rounded-lg mb-6 relative">
                    <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                    <blockquote className="italic text-foreground pl-8">{story.quote}</blockquote>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <div className="font-semibold text-sm text-secondary mb-1">IMPACT</div>
                      <p className="text-sm text-muted-foreground">{story.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
            Help Us Create More Success Stories
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-muted-foreground">
            {
              "Your support can help more women like Amina, Fatima, Blessing, and Chioma achieve their dreams and transform their communities."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donate">
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
