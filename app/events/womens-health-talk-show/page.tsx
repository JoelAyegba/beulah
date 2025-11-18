import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Our Health, Our Voice: A Women's Health Talk Show",
  description: "An educational talk show dedicated to women's health, bringing together health professionals and community members for an open and honest conversation.",
}

export default function WomensHealthTalkShowPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Our Health, Our Voice: A Women's Health Talk Show</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-08-10">August 10, 2025</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/womens-health.jpg"
                alt="Women's health talk show"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                Knowledge is empowerment. With this belief, we hosted "Our Health, Our Voice," an educational talk show dedicated to women's health. The event brought together health professionals and community members for an open and honest conversation about the health issues that affect women the most.
              </p>
              <p>
                From reproductive health to mental well-being, our expert panel addressed a wide range of topics, answering questions and dispelling myths. The event created a safe space for women to share their experiences, learn from each other, and take control of their health journey.
              </p>

              <h2 className="pl-6 font-bold">Key Topics</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>Reproductive and Maternal Health</li>
                <li>Mental Health and Well-being</li>
                <li>Preventive Care and Health Screenings</li>
                <li>Nutrition and Fitness</li>
              </ul>
              <p>
                We believe that every woman has the right to accurate health information and compassionate care. "Our Health, Our Voice" was a powerful step towards building a community where women are informed, supported, and empowered to prioritize their well-being.
              </p>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/womens-health1.jpg"
                  alt="Audience at the women's health talk show"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <h2 className="pl-6 font-bold">Impact</h2>
              <p>
                The talk show was attended by over 150 women from the community. The feedback was overwhelmingly positive, with many attendees expressing their gratitude for the open and informative discussion. The event has sparked a much-needed conversation about women's health in the community and has connected many women with valuable health resources.
              </p>
              <p>
                We are committed to continuing this conversation and providing ongoing support for women's health. We are grateful to our expert panel, our partners, and everyone who attended and contributed to this important event.
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
