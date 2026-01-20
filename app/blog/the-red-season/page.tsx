import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "The Red Season - Beulah walk of hope foundation",
  description:
    "A story of resilience, community, and the quiet strength of women supporting each other through life's silent battles.",
  openGraph: {
    title: "The Red Season - Beulah walk of hope foundation",
    description:
      "A story of resilience, community, and the quiet strength of women supporting each other through life's silent battles.",
    images: "/outreach-2.jpg",
    url: "https://www.beulahwalkofhopefoundation.org/blog/the-red-season",
  },
  alternates: {
    canonical: "https://www.beulahwalkofhopefoundation.org/blog/the-red-season",
  },
}

export default function RedSeasonPage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">The Red Season</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-11-12">November 12, 2025</time>
            </div>

            <Image
              src="/outreach-2.jpg"
              alt="Women in a support group"
              width={800}
              height={400}
              className="rounded-lg mb-8"
            />

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p style={{ textIndent: '1.5em' }}>
                They call it the season of red; red ribbons on gifts, red dresses in Christmas photos, red lights
                blinking from street corners. But somewhere, in quieter rooms and hidden moments, another red season
                unfolds. One that doesn’t come with carols or confetti, the season of womanhood. Menstrual life. A
                rhythm as ancient as creation itself, yet still spoken of in whispers.
              </p>

              <h2 className="pl-6 font-semibold">When the World Wears Red</h2>
              <p style={{ textIndent: '1.5em' }}>
                December has always fascinated me; it is a month where the world seems to bloom again in joy,
                generosity, and color. Everywhere you turn, there’s a celebration of life. And maybe that’s what
                menstruation is, too: a biological celebration of life’s potential.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                But while some hang ornaments, others hide sanitary pads in purses, praying no one notices the
                discomfort beneath the smiles. And that’s where the contrast hurts: One red is celebrated. The other is
                silenced.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                At Beulah Walk of Hope, we’ve met young girls who see their periods not as natural rhythms but as monthly
                battles of shame, of affordability, of misinformation. And we’ve met women who soldier through cramps
                while still cooking, serving, laughing, and leading through the Christmas rush.
              </p>

              <h2 className="pl-6 font-semibold">The Unseen Christmas Story</h2>
              <p style={{ textIndent: '1.5em' }}>
                Maybe if we look closely, the story of Christmas itself; of birth, of womanhood, of sacrifice, is deeply
                intertwined with menstruation. Because before Mary held the baby in a manger, she had a body that bled
                like every woman’s. Before the miracle, there was a woman’s biology quietly doing its work in divine
                cycles.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Menstruation is not a curse; it is the calendar of creation, the rhythm that shows that life is possible.
                So when we speak of joy to the world, perhaps we should also sing respect to the women whose bodies carry
                that miracle every month.
              </p>

              <h2 className="pl-6 font-semibold">Periods and Presents</h2>
              <p style={{ textIndent: '1.5em' }}>
                This festive season, as we wrap gifts for loved ones, we are also wrapping care packs, sanitary pads,
                wipes, pain relief, for girls who can’t afford the comfort many take for granted. Because Christmas
                should not just be about the gifts under the tree, but the dignity we extend to others. And no girl
                should have to choose between food and sanitary protection.
              </p>

              <h2 className="pl-6 font-semibold">A Red Reminder</h2>
              <p style={{ textIndent: '1.5em' }}>
                As women, we carry so many calendars within us. The calendar of work. The calendar of love. The calendar
                of cycles. And through it all, we keep showing up, hosting, nurturing, creating magic even when our
                bodies are crying for rest. So this season, may we give ourselves permission to pause. To sip water. To
                listen to our bodies. To remember that the same red that colors the streets this December flows through
                us as a symbol of resilience and renewal.
              </p>

              <h2 className="pl-6 font-semibold">The Real Festivity</h2>
              <p style={{ textIndent: '1.5em' }}>
                The real celebration is not in fireworks or feasts, it’s in the strength of women who keep giving life,
                in every sense of the word. So here’s to the girls and women who smile (or don’t smile) through cramps,
                host Christmas parties while in pain, and still show up with grace. You are the rhythm that keeps the
                world turning.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                This Christmas, join Beulah Walk of Hope in spreading period positivity and dignity. Sponsor a menstrual
                care kit. Start a conversation. Remind a girl that her body is not a burden but a blessing. Let us make
                this festive season one of comfort, compassion, and crimson courage.
              </p>
            </article>

            <div className="text-center">
              <Link href="/blog" className="inline-flex items-center text-primary font-medium">
                Back to Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
