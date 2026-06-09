import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Mental Health Awareness Event",
  description:
    "A community gathering dedicated to women's mental health — breaking the silence around stress, grief, and burnout, and reminding women that asking for help is a sign of strength.",
}

export default function MentalHealthAwarenessPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 pl-6">Mental Health Awareness Event</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2026-05-23">May 23, 2026</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/mental-health-1.jpg"
                alt="A speaker addressing women at the Mental Health Awareness event"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                As part of our commitment to the whole woman, Beulah Walk of Hope Foundation held a Mental Health
                Awareness event built on one simple belief: that a woman's mind deserves the same care as her body. The
                gathering brought women together for honest conversation about the struggles they so often carry in
                silence.
              </p>
              <p>
                In many communities, mental health is still discussed in whispers, if at all. Women are told to pray
                harder, to be strong, to stop thinking too much. This event set out to break that silence and create a
                space where women could speak openly and be met with understanding rather than judgment.
              </p>

              <h2 className="pl-6 font-bold">Topics Covered</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>Recognising stress, burnout, anxiety, and depression</li>
                <li>Understanding grief and emotional well-being</li>
                <li>Why asking for help is a sign of strength, not weakness</li>
                <li>Practical, everyday tools for managing mental health</li>
                <li>Supporting one another and knowing when to seek professional help</li>
              </ul>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/mental-health-2.jpg"
                  alt="Women being attended to and registering at the event"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="pl-6 font-bold">Impact</h2>
              <p>
                As the speakers named what so many had been feeling — stress, burnout, postpartum depression, grief,
                anxiety — you could feel the room shift. Women turned to one another, shared what they had never said
                out loud, and discovered they were not alone. The silence many had carried into the room became a
                conversation, a quiet chorus of "me too."
              </p>
              <p>
                The event reinforced a message we return to again and again: healing is not loud. Sometimes it is simply
                breathing a little easier than you did yesterday. Beulah Walk of Hope Foundation remains committed to
                walking with women through the storms no one else can see, and to taking this conversation into one more
                community, one gathering at a time.
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
