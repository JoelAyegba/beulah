import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "The Story of Beulah Walk of Hope - Beulah walk of hope foundation",
  description:
    "Discover the inspiring story behind Beulah Walk of Hope — a movement born from love, purpose, and the desire to create safe spaces where women can heal, grow, and be restored",
  openGraph: {
    title: "The Story of Beulah Walk of Hope - Beulah walk of hope foundation",
    description:
      "Discover the inspiring story behind Beulah Walk of Hope — a movement born from love, purpose, and the desire to create safe spaces where women can heal, grow, and be restored",
    images: "/story.jpg",
    url: "https://www.beulahwalkofhopefoundation.org/blog/The-Story-of-Beulah-Walk-of-Hope",
  },
  alternates: {
    canonical: "https://www.beulahwalkofhopefoundation.org/blog/The-Story-of-Beulah-Walk-of-Hope",
  },
}

export default function StoryPage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">The Story of Beulah Walk of Hope</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-04-11">April 11, 2025</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/story.jpg"
                alt="The Story of Beulah Walk of Hope"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                I did not plan this life. I did not wake up one morning and say, "You know what? I think I'll start an
                NGO." No, this began the way most love stories do — suddenly and unintentionally.
              </p>

              <p>
                It started with a restlessness I couldn't explain. The kind that taps your shoulder even when you try to
                ignore it. I was volunteering at a Women's Centre abroad, and for the first time, I saw what a real
                community for women could look like. Not the picture-perfect kind, but the raw, beautiful, teary kind.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Women sat across from me, telling their stories — stories of infertility, loss, abuse, loneliness — and
                there was no shame in their eyes, just relief. Relief that someone was listening. That’s when it hit me:
                every woman deserves a safe space to be seen and healed. And just like that, the seed was planted deep in
                my heart.
              </p>

              <h2 className="pl-6 font-bold">Bringing It Home</h2>
              <p style={{ textIndent: '1.5em' }}>
                When I moved to Colorado, I found another place that reechoed this purpose, a foundation called Resolve
                Walk of Hope. They supported women dealing with infertility, cancer, trauma, and all the quiet storms life
                sends our way. Every week I volunteered, I thought: If I ever move back to Nigeria, I’ll do something like
                this.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Fast forward a few years, and I did move back, and let’s just say reality didn’t look like I had imagined.
                There was no funding, no fancy launch, no customized t-shirts and huge buses — it was just me and my
                conviction that love could still make a difference. So I began small. Really small. A few school visits. Some
                sanitary pad outreaches. A handful of women struggling with infertility who needed someone to just sit,
                listen, and remind them they weren’t broken. And just like that, Beulah Walk of Hope was born.
              </p>

              <h2 className="pl-6 font-bold">Why Beulah?</h2>
              <p style={{ textIndent: '1.5em' }}>
                I wanted a name that captured what I felt in my spirit: restoration. “Beulah” means restored land. It’s not
                just a name; it’s a promise. Beulah Walk of Hope is for women who have lost something along the way: their
                voice, confidence, faith, or peace, and are learning to reclaim it, one step at a time.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                We walk beside women through infertility, menopause, widowhood, girlhood, and every silent struggle in
                between. We don’t show up as saviors; we show up as sisters. Sometimes as the nosy aunty who checks on
                you every day. Other times as the quiet friend who just sits with you when words aren’t enough.
              </p>

              <h2 className="pl-6 font-bold">Love Is the Strategy</h2>
              <p style={{ textIndent: '1.5em' }}>
                People often ask, “So what’s your model? What’s your approach?” And I laugh, because honestly, our
                strategy is simple: love. Stubborn, motherly, hands-dirty, sleeves-rolled-up love.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                The kind that fuels our advocacy for:
              </p>
              <ul>
                <li>Good health and well-being (SDG 3)</li>
                <li>Quality education (SDG 4)</li>
                <li>Gender equality (SDG 5)</li>
                <li>Reduced inequalities (SDG 10)</li>
              </ul>

              <h2 className="pl-6 font-bold">Still Walking</h2>
              <p style={{ textIndent: '1.5em' }}>
                Beulah Walk of Hope isn’t just an organization. It’s a living, breathing heartbeat, a reminder that love
                can still rebuild what life has broken. Every time I see a woman smile again, or a girl return to school, I’m
                reminded that this is what purpose feels like: quiet, stubborn joy.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                So no, I didn’t plan to start this. But if love ever taps you on the shoulder, don’t ignore it. Because
                somewhere, someone’s healing depends on your “yes.” That’s what Beulah is — a yes that turned into a
                walk. A walk of hope. And I’m definitely still walking with you.
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
