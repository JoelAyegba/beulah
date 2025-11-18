import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Honoring Our Elders: A Day of Care for Senior Citizens",
  description: "In a heartfelt outreach, our volunteers provided care and support to the senior citizens in our community.",
}

export default function HonoringOurEldersPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Honoring Our Elders: A Day of Care for Senior Citizens</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-09-20">September 20, 2025</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/senior-citizens.jpg"
                alt="Volunteers assisting senior citizens"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                In a world that often rushes past, we took a day to pause and honor the pillars of our community: our senior citizens. The "Honoring Our Elders" event was a day filled with warmth, connection, and practical support for the respected elders in our community.
              </p>
              <p>
                Our volunteers provided essential health checks, distributed care packages, and most importantly, shared moments of joy and conversation. It was a day to give back to those who have given so much, a day to listen to their stories, and a day to remind them that they are cherished and not forgotten.
              </p>

              <h2 className="pl-6 font-bold">Activities</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>Provided basic health screenings and wellness checks.</li>
                <li>Distributed care packages with essential items.</li>
                <li>Engaged in one-on-one conversations and companionship.</li>
              </ul>
              <p>
                The event was a beautiful exchange of generations, where laughter and wisdom were shared in equal measure. We believe that a community is only as strong as its most vulnerable members, and by caring for our elders, we strengthen the very fabric of our society.
              </p>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/senior-citizens1.jpg"
                  alt="Senior citizens smiling"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <h2 className="pl-6 font-bold">Impact</h2>
              <p>
                The event provided much-needed support and companionship to the senior citizens, many of whom live in isolation. It also highlighted the importance of intergenerational connections and the value of honoring our elders.
              </p>
              <p>
                We are grateful to our volunteers and partners for making this day possible. Your support helps us continue to care for the most vulnerable members of our community.
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
