import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata = {
  title: "Blog - Beulah walk of hope foundation",
  description: "Insights, stories, and updates on women's empowerment, education, and community development across Africa.",
  openGraph: {
    title: "Blog - Beulah walk of hope foundation",
    description: "Insights, stories, and updates on women's empowerment, education, and community development across Africa.",
    image: "/blog.jpg",
  },
}

const blogPosts = [
  {
    id: 13,
    slug: "still-carrying-light",
    title: "Still Carrying Light: A New Year Reflection",
    excerpt:
      "A reflection on pain, gratitude, and hope as we step into a new year. From pain, I carried gratitude. From confusion, I carried wisdom. From survival, I carried faith.",
    category: "Reflections",
    author: "Elfrida Egwuche",
    date: "January 20, 2026",
    readTime: "6 min read",
    image: "/new-year-reflection.jpg",
  },
  {
    id: 8,
    slug: "The-Quiet-Face-of-Hope",
    title: "The Quiet Face of Hope",
    excerpt:
      "At Beulah Walk of Hope, we’ve learned that hope isn’t always loud or perfect — sometimes, it’s messy, quiet, and deeply human. Read how everyday acts of love and courage are helping women rise, heal, and walk toward a world where hope never runs out.",
    category: "Reflections",
    author: "Beulah Walk of Hope Foundation",
    date: "November 4, 2025",
    readTime: "5 min read",
    image: "/face.jpg",
  },
  {
    id: 12,
    slug: "Silent-Battles",
    title: "Silent Battles",
    excerpt:
      "A story of resilience, community, and the quiet strength of women supporting each other through life's silent battles.",
    category: "Impact Stories",
    author: "Beulah Walk of Hope Foundation",
    date: "November 10, 2025",
    readTime: "5 min read",
    image: "/outreach-3.jpg",
  },
  {
    id: 11,
    slug: "the-power-of-one",
    title: "The Power of One",
    excerpt:
      "There’s something deeply sacred about one. One can make a whole difference; one decision, one word, one act of service.",
    category: "Reflections",
    author: "Beulah Walk of Hope Foundation",
    date: "November 14, 2025",
    readTime: "5 min read",
    image: "/power.jpg",
  },
  {
    id: 10,
    slug: "the-red-season",
    title: "The Red Season",
    excerpt:
      "A story of resilience, community, and the quiet strength of women supporting each other through life's silent battles.",
    category: "Impact Stories",
    author: "Beulah Walk of Hope Foundation",
    date: "November 12, 2025",
    readTime: "7 min read",
    image: "/outreach-2.jpg",
  },
  {
    id: 9,
    slug: "what-200-women-taught-us-about-strength",
    title: "What 200 Women Taught us About Strength",
    excerpt:
      "Strength isn't just about endurance. Discover the profound lessons on strength, grace, and hope learned from the stories of 200 widows at our recent outreach event.",
    category: "Impact Stories",
    author: "Beulah Walk of Hope Foundation",
    date: "November 5, 2025",
    readTime: "6 min read",
    image: "/african-women-smiling-together-in-community-empowe.jpg",
  },
  {
    id: 7,
    slug: "The-Story-of-Beulah-Walk-of-Hope",
    title: "The Story of Beulah Walk of Hope",
    excerpt:
      "A personal account of how Beulah Walk of Hope began — from small acts of love to a movement restoring women through safe spaces and support.",
    category: "About",
    author: "Beulah Walk of Hope Foundation",
    date: "April 11, 2025",
    readTime: "7 min read",
    image: "/story.jpg",
  },
]

const categories = [
  "All Posts",
  "Skills Training",
  "Entrepreneurship",
  "Advocacy",
  "Education",
  "Leadership",
  "Impact Stories",
]

export default function BlogPage() {

  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/african-women-leadership-training-workshop.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <span className="text-sm font-medium">Insights & Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance leading-tight">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/95 max-w-3xl mx-auto">
              {
                "Insights, stories, and updates on women's empowerment, education, and community development across Africa."
              }
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                    <Link href={`/blog/${post.slug || post.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>

            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>


    </main>
  )
}