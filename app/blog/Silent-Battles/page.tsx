import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Silent Battles",
  description:
    "Not all battles are loud. At Beulah Walk of Hope, we walk with women fighting silent struggles — loss, grief, and healing — reminding them that softness is strength and no one heals alone.",
}

export default function SilentBattlesPage() {
  return (
    <main>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Silent Battles</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-11-04">November 4, 2025</time>
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                Some wars are never announced. They don't even make the evening news, and no one waves flags when
                they end. They happen quietly, behind closed doors, under forced smiles, and in the long pauses between
                "I'm fine" and "Actually, I'm not." That is where most women live, in the in-between. Between holding it
                together and falling apart. Between being the rock and quietly sinking beneath the waves.
              </p>

              <p>
                At Beulah Walk of Hope, we've seen these silent battles up close. The kind that does not draw blood but
                leaves scars. The kind that tests not just the body but the soul.
              </p>

              <p>
                We've seen women fighting to sleep again after loss. Women battling the emptiness of infertility, where
                every month feels like another heartbreak disguised as hope. We've seen young girls learning to love their
                changing bodies while society rushes to shame them. We've sat with widows who smile in public but still
                set an extra plate at dinner, out of habit, not denial.
              </p>

              <h2 className="pl-6 font-bold">The Weight We Don’t Post About</h2>
              <p style={{ textIndent: '1.5em' }}>
                In a world obsessed with noise, there are hashtags, movements, and statements; silence feels invisible.
                But sometimes the heaviest things a woman carries are the things no one can see: hormones running wild,
                trauma playing old tapes, grief pretending to be “strength.” We are taught to wear resilience like a
                crown, to say “way to go, Queen.” To “pray about it,” “move on,” “stay strong.” But nobody tells you that
                even queens need rest, and sometimes strength looks like asking for help.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                At Beulah, we have learned that breaking down isn’t the opposite of being brave; it is a part of it. Because
                healing often starts in the whisper: “I’m tired.” “I need help.” “I’m scared.” And once those words are
                breathed out, hope begins to find footing.
              </p>

              <h2 className="pl-6 font-bold">The Quiet Revolution of Care</h2>
              <p style={{ textIndent: '1.5em' }}>
                We may not call it that, but what we are doing is rebellion, the gentle kind. We are daring to listen in a
                world that rushes to advise. We are daring to pause when everyone else says, “Keep pushing.” We are
                daring to make space for softness.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                Each conversation we hold, every support visit, every shared tear is a small act of defiance, against
                shame, against silence, against the idea that a woman’s pain should be endured privately.
              </p>

              <h2 className="pl-6 font-bold">Still Standing, Still Soft</h2>
              <p style={{ textIndent: '1.5em' }}>
                The world often confuses silence with weakness. But we’ve learned that some of the strongest women are the
                ones who fight silently, not because they lack words, but because they’ve learned endurance in the
                language of grace.
              </p>

              <p style={{ textIndent: '1.5em' }}>
                So if you’re reading this and fighting your own silent battle, this is your reminder: You’re not alone. You’re
                not crazy. And you don’t have to keep pretending you’re fine.
              </p>

              <h2 className="pl-6 font-bold">A Gentle Call to You</h2>
              <p style={{ textIndent: '1.5em' }}>
                Maybe your battle is still silent. Maybe you haven’t found the words for it yet. That’s okay. At Beulah
                Walk of Hope, we’re not about “fixing you”; we are here to walk with you. Reach out. Whisper if you must.
                Cry if you need. Or just sit in the quiet with us.
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
