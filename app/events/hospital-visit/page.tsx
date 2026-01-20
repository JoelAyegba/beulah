import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "A Visit of Hope: Supporting a Family in Need",
  description: "A touching visit to a local hospital to support a family whose child was on oxygen.",
}

export default function HospitalVisitPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">A Visit of Hope: Supporting a Family in Need</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-07-12">July 12, 2025</time>
            </div>



            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                In one of our most touching visits, we went to a local hospital to support a family whose child was on oxygen. It was a powerful reminder of the silent battles many families fight every day.
              </p>
              
              <video className="w-full rounded-lg" controls>
                <source src="/hospital-visit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p>
                We provided financial and emotional support to the family, helping to ease their burden during a difficult time. But more than that, we offered a hand of friendship and a shoulder to lean on. We believe that no one should have to face such challenges alone.
              </p>

              <h2 className="pl-6 font-bold">The Power of Community</h2>
              <p>
                The visit was a testament to the power of community and the importance of showing up for one another. It was a privilege to be able to offer a small measure of comfort to this brave family. Our volunteers spent time with the family, listening to their story and offering words of encouragement.
              </p>
              <p>
                We are committed to supporting families in our community who are facing difficult times. We believe that by working together, we can make a difference in the lives of those who need it most.
              </p>
            </article>

            <div className="text-center">
              <Link href="/events" className="inline-flex items-center text-primary font-medium">
                Back to Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
