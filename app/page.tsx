"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Quote, Calendar, MapPin, Clock } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useEffect, useState } from "react"
import { BlogPostCard } from "@/components/blog-post-card"

const sliderImages = [
  {
    src: "/african-women-smiling-together-in-community-empowe.jpg",
    alt: "Women empowerment",
    caption: "Empowering Women, Transforming Communities",
    subCaption:
      "Beulah walk of hope foundation is dedicated to creating opportunities for women across Africa through education, entrepreneurship, and advocacy.",
  },
  {
    src: "/african-woman-studying-with-books-smiling.jpg",
    alt: "Education for women",
    caption: "Unlocking Potential Through Education",
    subCaption: "We provide access to quality education and literacy programs, opening doors to brighter futures.",
  },
  {
    src: "/african-woman-entrepreneur-in-her-shop-smiling-con.jpg",
    alt: "Woman entrepreneur",
    caption: "Fostering Economic Independence",
    subCaption: "Our programs equip women with the skills and resources to become successful entrepreneurs.",
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

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
          className="w-full h-full absolute inset-0 z-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {sliderImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-background/70 mix-blend-multiply" />

        <div className="container mx-auto px-4 z-10 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-white"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
          >
            {sliderImages[0].caption}
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-white/90"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}
          >
            {sliderImages[0].subCaption}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">Our Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-primary">Our Vision</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"A World in which every woman is acknowledged, supported and restored to a state of wholeness"}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-primary">Our Mission</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"We are committed to walking beside women through life's silent struggles. We facilitate restoration, enhance confidence, and uphold the dignity of each woman throughout her personal journey "}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Core Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Education & Literacy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Providing access to quality education and literacy programs for women and girls who have been denied educational opportunities."
                    }
                  </p>
                  {/* Learn More removed per request */}
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Entrepreneurship Training</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"Equipping women with business skills, financial literacy, and resources to start and grow their own enterprises."}
                  </p>
                  {/* Learn More removed per request */}
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Advocacy & Rights</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"Championing women's rights, gender equality, and creating safe spaces for women to voice their concerns and needs."}
                  </p>
                  {/* Learn More removed per request */}
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-4">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Highlights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Event Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"A look back at our recent impactful moments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card className="overflow-hidden shadow-lg h-full">
                <CardContent className="p-0">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/outreach-1.jpg"
                  >
                    <source src="/christmas event video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <Badge className="bg-secondary mb-4 hover:bg-secondary/80">Recent Event</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">Operation Feed Families In Nigeria</h3>

                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>December 20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Beulah walk of hope foundation Training Center, Abuja</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {"A heartfelt thank you to all our incredible partners and sponsors for making it possible! Your support is fueling a movement for women's health breaking barriers and driving change we couldn't do this without you!"}
                  </p>

                  <Button size="lg" asChild>
                    <Link href="/events/operation-feed-families">
                      Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

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
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Users className="h-12 w-12 mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-primary-foreground">
            Become a Part of the Change
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-primary-foreground/90">
            {"Your support can make a world of difference. Join us in our mission to empower women and transform communities."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Stay updated with our latest news, stories, and insights.</p>
          </div>
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
