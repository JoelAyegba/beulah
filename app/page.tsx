"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Users, BookOpen, Sparkles } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useEffect, useState } from "react"
import { BlogPostCard } from "@/components/blog-post-card"
import { SectionHeading } from "@/components/section-heading"
import { EventCard } from "@/components/event-card"

const sliderImages = [
  {
    src: "/hero-volunteers-working.jpg",
    alt: "Beulah Walk of Hope Foundation volunteers working together",
    caption: "Empowering Women, Transforming Communities",
    subCaption:
      "Beulah Walk of Hope Foundation is dedicated to creating opportunities for women across Africa through education, entrepreneurship, and advocacy.",
  },
  {
    src: "/hero-wellness-outreach.jpg",
    alt: "Women Wellness and Medical Outreach event",
    caption: "Health, Wellness & Medical Outreach",
    subCaption: "Dedicated to the health, wellness and empowerment of women through community-driven medical outreach programs.",
  },
  {
    src: "/founder.jpg",
    alt: "Elfrida Egwuche - Founder, Beulah Walk of Hope Foundation",
    caption: "A Vision for Hope & Restoration",
    subCaption: "Founded by Elfrida Egwuche — empowering women to succeed through educational and inspirational wellness conversations.",
  },
]

const recentEvents = [
  {
    title: "Women Wellness & Medical Outreach: Fertility Support",
    date: "May 23, 2026",
    location: "Abuja, Nigeria",
    type: "Outreach",
    image: "/fertility-grant-1.jpg",
    description:
      "A one-day outreach where six women each received a ₦250,000 medical support grant towards their fertility journey.",
    link: "/events/women-wellness-medical-outreach",
  },
  {
    title: "Mental Health Awareness Event",
    date: "May 23, 2026",
    location: "Abuja, Nigeria",
    type: "Awareness",
    image: "/mental-health-1.jpg",
    description:
      "A community gathering breaking the silence around women's mental health — stress, grief, and burnout.",
    link: "/events/mental-health-awareness",
  },
  {
    title: "Operation Feed Families In Nigeria",
    date: "December 20, 2025",
    location: "Abuja, Nigeria",
    type: "Outreach",
    image: "/outreach-1.jpg",
    description:
      "Distributing food packages to vulnerable women and families across Nigeria this festive season.",
    link: "/events/operation-feed-families",
  },
  {
    title: "Honoring Our Elders: A Day of Care",
    date: "September 20, 2025",
    location: "Grace Gardens, Abuja",
    type: "Outreach",
    image: "/senior-citizens.jpg",
    description:
      "A day dedicated to senior citizens, providing health checks, care packages, and companionship.",
    link: "/events/honoring-our-elders",
  },
  {
    title: "Our Health, Our Voice: A Women's Health Talk Show",
    date: "August 10, 2025",
    location: "Online",
    type: "Webinar",
    image: "/womens-health.jpg",
    description:
      "An educational talk show bringing together health professionals and community members for honest conversation.",
    link: "/events/womens-health-talk-show",
  },
  {
    title: "A Visit of Hope: Supporting a Family in Need",
    date: "July 12, 2025",
    location: "Local Hospital, Abuja",
    type: "Visit",
    image: "/hospital.jpg",
    description:
      "A touching visit to a local hospital to support a family whose child was on oxygen.",
    link: "/events/hospital-visit",
  },
]

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  const eventsPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [activeSlide, setActiveSlide] = useState(0)
  const [api, setApi] = useState<any>(null)

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setActiveSlide(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    let isMounted = true
      ; (async () => {
        try {
          const res = await fetch("/api/blog")
          if (!res.ok) throw new Error(`Failed to load blog posts: ${res.status}`)
          const data = await res.json()
          if (isMounted) setBlogPosts(data as BlogPost[])
        } catch (err) {
          console.error("Error loading blog posts", err)
        }
      })()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          setApi={setApi}
          className="w-full h-full absolute inset-0 z-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent viewportClassName="h-full" className="h-full ml-0">
            {sliderImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full min-h-[600px] h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/55 to-background/75 mix-blend-multiply z-[2]" />

        <div className="container mx-auto px-4 z-10 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-white text-shadow-hero animate-in fade-in slide-in-from-bottom-2 duration-700"
            key={activeSlide}
          >
            {sliderImages[activeSlide]?.caption}
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-white/90 text-shadow-hero animate-in fade-in duration-1000"
            key={`sub-${activeSlide}`}
          >
            {sliderImages[activeSlide]?.subCaption}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Link href="/donate">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white reveal">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-primary transition-shadow hover:shadow-lg">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-primary">Our Vision</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"A World in which every woman is acknowledged, supported and restored to a state of wholeness"}
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-brand transition-shadow hover:shadow-lg">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-brand">Our Mission</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"We are committed to walking beside women through life's silent struggles. We facilitate restoration, enhance confidence, and uphold the dignity of each woman throughout her personal journey "}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-muted reveal">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Programs" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Education & Literacy",
                color: "primary",
                text: "Providing access to quality education and literacy programs for women and girls who have been denied educational opportunities.",
              },
              {
                icon: Sparkles,
                title: "Entrepreneurship Training",
                color: "brand",
                text: "Equipping women with business skills, financial literacy, and resources to start and grow their own enterprises.",
              },
              {
                icon: Users,
                title: "Advocacy & Rights",
                color: "primary",
                text: "Championing women's rights, gender equality, and creating safe spaces for women to voice their concerns and needs.",
              },
            ].map((program) => (
              <Card key={program.title} className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                      program.color === "brand" ? "bg-brand/10" : "bg-primary/10"
                    }`}
                  >
                    <program.icon
                      className={`h-6 w-6 ${program.color === "brand" ? "text-brand" : "text-primary"}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 reveal">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Highlights"
            eyebrowIcon={Sparkles}
            title="Event Highlights"
            subtitle="A look back at our recent impactful moments."
          />

          <Carousel
            plugins={[eventsPlugin.current]}
            opts={{ loop: true, align: "start" }}
            onMouseEnter={eventsPlugin.current.stop}
            onMouseLeave={eventsPlugin.current.reset}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {recentEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline">
              <Link href="/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('/african-women-volunteers-helping-community.jpg')" }}>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Users className="h-12 w-12 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-white text-shadow-hero">
            Become a Part of the Change
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-white/90">
            {"Your support can make a world of difference. Join us in our mission to empower women and transform communities."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Link href="/donate">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white relative overflow-hidden reveal">
        {/* Decorative stripe at top — brand gradient (primary → warm accent) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-brand" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-2 font-bold text-brand font-[family-name:var(--font-dancing-script)]">
              Sponsors
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We are grateful to our sponsors whose generous support powers our mission.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
            {[
              { src: "/sponsor-psl.png", alt: "PSL — Prime Sources Limited", name: "Prime Sources Limited" },
              { src: "/sponsor-lifecare.png", alt: "Life Care Centers of America", name: "Life Care Centers" },
              { src: "/sponsor-evergreen.png", alt: "Evergreen Nursing Home", name: "Evergreen Nursing Home" },
            ].map((sponsor) => (
              <div key={sponsor.name} className="group flex flex-col items-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white border border-black/5 shadow-md p-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    sizes="192px"
                    className="object-contain p-4 transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white reveal">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Blog Posts"
            subtitle="Stay updated with our latest news, stories, and insights."
          />
          {blogPosts.length > 3 ? (
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {blogPosts.map((post) => (
                  <CarouselItem key={post.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <BlogPostCard post={post} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline">
              <Link href="/blog">
                View All Blog Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
