import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "The Quiet Face of Hope - Beulah walk of hope foundation",
  description:
    "At Beulah Walk of Hope, we’ve learned that hope isn’t always loud or perfect — sometimes, it’s messy, quiet, and deeply human. Read how everyday acts of love and courage are helping women rise, heal, and walk toward a world where hope never runs out.",
  openGraph: {
    title: "The Quiet Face of Hope - Beulah walk of hope foundation",
    description:
      "At Beulah Walk of Hope, we’ve learned that hope isn’t always loud or perfect — sometimes, it’s messy, quiet, and deeply human. Read how everyday acts of love and courage are helping women rise, heal, and walk toward a world where hope never runs out.",
    images: "/face.jpg",
    url: "https://www.beulahwalkofhopefoundation.org/blog/The-Quiet-Face-of-Hope",
  },
  alternates: {
    canonical: "https://www.beulahwalkofhopefoundation.org/blog/The-Quiet-Face-of-Hope",
  },
}

export default function QuietFacePage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">The Quiet Face of Hope</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-11-04">November 4, 2025</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/face.jpg"
                alt="The Quiet Face of Hope"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p style={{ textIndent: '1.5em' }}>
                Hope doesn’t always walk in wearing a bright yellow dress. Sometimes, it crawls, barefoot, tired,
                clutching the last thread of belief it has left. We’ve seen her, hope, that is, in all her disguises.
                She doesn’t always look like what people imagine. She doesn’t come with trumpets or hashtags or dramatic
                transformations. Sometimes, hope looks like a quiet woman deciding to show up again after life has
                dragged her through the mud. Hope looks like trying, even when trying hurts.
              </p>

              <h2 className="pl-6 font-semibold">The Shape of Hope</h2>
              <p style={{ textIndent: '1.5em' }}>
                If you asked us what hope looks like, we’d tell you that it changes faces every day. Some mornings, she
                looks like a 14-year-old girl in a public school uniform, clutching her new pack of sanitary pads like a
                long-lost treasure. She grins shyly and says, “Now I can go to school this week.”
              </p>

              <p style={{ textIndent: '1.5em' }}>
                That is hope.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Other days, hope looks like a widow standing in front of the queue to get a food bag, hesitant at first,
                then breaking into a smile when she realizes no one is judging her. Just women, like her, sharing
                stories and seeing what no one else does. Hope also looks like the woman in a support group for
                infertility and finally says out loud, “I am tired, but I am not giving up.” Her voice would crack,
                everyone would cry with her, then someone would pass her a tissue.
              </p>

              <h2 className="pl-6 font-semibold">Hope Is Messy (And Beautiful)</h2>
              <p style={{ textIndent: '1.5em' }}>
                We like to think hope is neat, that it ties its shoelaces and wears matching socks. But no, hope is
                messy. She forgets where she kept her courage sometimes. She doubts herself. She prays, cries, and
                still goes again tomorrow.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                At Beulah Walk of Hope, we have learned to stop romanticizing hope. It’s not always pretty. It’s not
                always loud. Sometimes it’s just someone choosing to breathe; one more day, one more chance. And that’s
                okay. Because hope doesn’t need a spotlight; it just needs space. Space to wobble, space to rest, space
                to rise again.
              </p>

              <h2 className="pl-6 font-semibold">What Hope Feels Like</h2>
              <p style={{ textIndent: '1.5em' }}>
                Hope feels like a pulse; faint, but present. Like a song you can’t fully remember but still hum anyway.
                It feels like the soft hum of women gathered under a tree after an outreach, talking about everything
                from God to menopause to the best way to fry plantain. They’re laughing now; loudly, freely. For a
                moment, no one feels small. That is hope, too, the laughter that refuses to die, even when the world
                feels heavy.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                And sometimes, hope feels like letters. We have received a few handwritten notes from women we have met,
                saying things like,
              </p>

              <blockquote>
                “Thank you for reminding me that I’m worthy.”
                <br />
                “I didn’t think I’d ever feel peace again.”
                <br />
                “You saw me before I saw myself.”
              </blockquote>

              <h2 className="pl-6 font-semibold">Hope Is a Verb</h2>
              <p style={{ textIndent: '1.5em' }}>
                Hope, to us, isn’t a concept; it’s an action. It’s love walking, teaching, feeding, encouraging, and
                showing up again and again. Every sanitary pad distributed, every wellness talk hosted, every food pack
                delivered, every story heard, those are verbs. Actions of hope.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                That is why we call it Beulah Walk of Hope, because hope doesn’t sit still; it moves. She walks beside
                women through long nights, through the waiting, through it all.
              </p>

              <h2 className="pl-6 font-semibold">The World We’re Walking Toward</h2>
              <p style={{ textIndent: '1.5em' }}>
                We imagine a world where hope doesn’t have to fight so hard to exist. A world where women don’t whisper
                their pain like secrets. Where girls can dream without shame. Where motherhood, womanhood, and
                sisterhood are not battlefields but gardens, tended, nourished, and loved.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                That is the world Beulah is walking toward. Through our work in health and well-being, education, and
                gender equality, we are planting seeds in dry places, believing they will bloom.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Because that is what hope looks like: A seed saying to the earth, “Even if you bury me, I’ll rise
                again.”
              </p>

              <h2 className="pl-6 font-semibold">Join the Walk</h2>
              <p style={{ textIndent: '1.5em' }}>
                If this moved you, it is because hope is contagious; it finds light and shares it. You can be part of
                that light. Walk with us. Sponsor a project. Volunteer your hands. Lend your voice. Share our stories.
                Every act of kindness helps another woman stand taller, another girl dream wider. Join Beulah Walk of
                Hope.
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
