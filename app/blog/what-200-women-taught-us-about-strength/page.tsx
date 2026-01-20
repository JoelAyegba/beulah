import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "What 200 Women Taught us About Strength - Beulah walk of hope foundation",
  description: "Strength isn't just about endurance. Discover the profound lessons on strength, grace, and hope learned from the stories of 200 widows at our recent outreach event.",
  openGraph: {
    title: "What 200 Women Taught us About Strength - Beulah walk of hope foundation",
    description: "Strength isn't just about endurance. Discover the profound lessons on strength, grace, and hope learned from the stories of 200 widows at our recent outreach event.",
    images: "/african-women-smiling-together-in-community-empowe.jpg",
    url: "https://www.beulahwalkofhopefoundation.org/blog/what-200-women-taught-us-about-strength",
  },
  alternates: {
    canonical: "https://www.beulahwalkofhopefoundation.org/blog/what-200-women-taught-us-about-strength",
  },
}

export default function StoryPage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">What 200 Women Taught us About Strength</h1>

            <div className="my-8">
              <Image
                src="/african-women-smiling-together-in-community-empowe.jpg"
                alt="A group of African women smiling together"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-11-05">November 05, 2025</time>
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                I really thought I understood strength, until the day I stood before two hundred women, wrapped in their
                Sunday best, some in lace, others in simple Ankara, and watched them laugh through pain that would have
                broken the earth itself if it were made of flesh.
              </p>

              <p>
                That day, we hosted our Widows’ Outreach. Two hundred seats filled, but somehow, it felt like two hundred
                worlds, each woman carrying her own country of memories, her own unspoken battles. And what I saw changed
                me.
              </p>

              <h2 className="pl-6 font-bold">Strength Revealed</h2>
              <p>
                The morning began with the hum of chatter and the rustle of wrappers. Some women arrived before sunrise,
                carrying their handbags and stories alongside them, balancing expectations on their heads like baskets.
                We had come prepared to give food packs, render support, and listening ear, but as the hours unfolded, I
                realized they were the ones giving us something far richer.
              </p>

              <p>
                Strength, I learned, does not always roar. Sometimes it hums softly in the background, wearing a faded
                wrapper and calling you my sister with a smile that hides decades of endurance.
              </p>

              <h2 className="pl-6 font-bold">When Grief Becomes Grace</h2>
              <p>
                One woman told me she lost her husband twenty-two years ago. Another said she buried hers last year and
                hadn’t laughed since. Yet, there they were, laughing, dancing, holding hands.
              </p>

              <p>
                You could feel an aura in the room, the force of held it all together. These women had learned to make
                peace with pain, to plant flowers on the graves of their sorrows and call it living.
              </p>

              <p>
                I watched one woman share her food with another who had arrived late. I watched another adjust the
                headscarf of a stranger as though she were her sister. Words may not express how much these actions
                impacted us.
              </p>

              <h2 className="pl-6 font-bold">The Power of Gathering</h2>
              <p>
                People may have the notion that women ‘have problem’; but be assured that when these women come together
                in unity for one purpose, it will be a force to reckon with. It almost feels ethereal. There is a kind
                of strength that forms from there.
              </p>

              <p>
                When one woman says, “This is what I’ve been through,” another whispers, “Me too.” And in that moment,
                shame loses its power. That is what Beulah Walk of Hope stands for: these spaces where stories meet,
                collide, and generate comfort. Because the truth is: women heal women. Always have. Always will.
              </p>

              <h2 className="pl-6 font-bold">Strength Redefined</h2>
              <p>
                Before that outreach, I used to define strength as endurance, the ability to keep standing no matter
                what. But these women redefined it for me.
              </p>

              <p>
                They showed me that strength is also in softness, in the way you still find joy when life gives you
                reasons not to. It’s in the laughter that escapes your mouth before you realize you’re laughing again.
                It’s in the hand you stretch to another woman, even when your own hand trembles. Strength is not just
                about surviving, it’s about still choosing to love, still choosing to hope.
              </p>

              <h2 className="pl-6 font-bold">Lessons from 200 Women</h2>
              <p>
                Here is what those 200 women taught me:
              </p>
              <ul>
                <li>That strength wears many faces; some tired, some smiling, but all beautiful.</li>
                <li>That survival is not weakness</li>
                <li>That sometimes, your miracle is not in what you receive, but in what you still have left to give.</li>
                <li>That hope shared is hope multiplied.</li>
              </ul>

              <p>
                And perhaps most beautifully, they taught me that even in widowhood, a word society sometimes treats like
                a scar, there is still grace, dignity, laughter, and life.
              </p>

              <h2 className="pl-6 font-bold">Still Walking, Still Learning</h2>
              <p>
                When we closed the event that day, the sun was already dipping, painting everything in gold. The women
                began to leave, one by one, carrying their packages and stories like sacred relics. I stood there
                watching, my heart full and happy.
              </p>

              <p>
                That day, I came to care for these women, but I left discipled. And so we keep walking, with them, for
                them, because of them. Join us; partner, volunteer, or support a widow. Together, let’s build a world
                where no woman walks alone, no matter how heavy her story feels.
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
