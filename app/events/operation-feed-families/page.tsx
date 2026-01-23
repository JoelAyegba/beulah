
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Operation Feed Families In Nigeria - Beulah Walk of Hope",
  description: "A look back at our Operation Feed Families In Nigeria event, where we provided food for 1000 families.",
}

export default function OperationFeedFamiliesPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Operation Feed Families In Nigeria</h1>

            <div className="text-sm text-muted-foreground mb-6 pl-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-12-20">December 20, 2025</time>
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                A heartfelt thank you to all our incredible partners and sponsors for making it possible! Your support is fueling a movement for women's health breaking barriers and driving change we couldn't do this without you!
              </p>

              <figure className="my-8">
                <video className="w-full rounded-lg shadow-lg" controls poster="/outreach-1.jpg">
                  <source src="/christmas event video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                  Highlights from the event
                </figcaption>
              </figure>

              <p>
                We look forward to continuing our mission and reaching even more families in our future outreach programs.
              </p>
            </article>

            <div className="text-center">
              <Link href="/events" className="inline-flex items-center text-primary font-medium hover:underline">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
