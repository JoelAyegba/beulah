import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Silent Battles - Beulah walk of hope foundation",
  description:
    "Not all battles are loud. At Beulah Walk of Hope, we walk with women fighting silent struggles — loss, grief, and healing — reminding them that softness is strength and no one heals alone.",
  openGraph: {
    title: "Silent Battles - Beulah walk of hope foundation",
    description:
      "Not all battles are loud. At Beulah Walk of Hope, we walk with women fighting silent struggles — loss, grief, and healing — reminding them that softness is strength and no one heals alone.",
    images: "/outreach-3.jpg",
    url: "https://www.beulahwalkofhopefoundation.org/blog/Silent-Battles",
  },
  alternates: {
    canonical: "https://www.beulahwalkofhopefoundation.org/blog/Silent-Battles",
  },
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
                Some wars are never announced. They dont even make the evening news, and no one waves flags when
                they end. They happen quietly, behind closed doors, under forced smiles, and in the long pauses between
                Im fine and Actually, Im not.
              </p>

              <p>
                That is where most women live, in the in-between. Between holding it together and falling apart. Between
                being the rock and quietly sinking beneath the waves.
              </p>

              <p>
                At Beulah Walk of Hope, weve seen these silent battles up close. The kind that does not draw blood but
                leaves scars. The kind that tests not just the body but the soul.
              </p>

              <p>
                Weve seen women fighting to sleep again after loss. Women battling the emptiness of infertility, where
                every month feels like another heartbreak disguised as hope. Weve seen young girls learning to love their
                changing bodies while society rushes to shame them. Weve sat with widows who smile in public but still
                set an extra plate at dinner, out of habit, not denial. And weve met women who have forgotten what
                laughter sounds like because survival took all the room joy once lived in.
              </p>

              <p>
                These are not dramatic stories. They are real human ones. But that is the thing about silent battles,
                they rarely ask for attention; they often times just need understanding.
              </p>

              <h2 className="pl-6 font-bold">The Weight We Dont Post About</h2>
              <p>
                In a world obsessed with noise, there are hashtags, movements, and statements; silence feels invisible.
                But sometimes the heaviest things a woman carries are the things no one can see: Hormones running wild,
                trauma playing old tapes, grief pretending to be strength. We are taught to wear resilience like a
                crown, way to go Queen. To pray about it, move on, stay strong. But nobody tells you that
                even queens need rest, and sometimes strength looks like asking for help.
              </p>

              <p>
                At Beulah, we have learned that breaking down isnt the opposite of being brave; it is a part of it.
                Because healing often starts in the whisper: Im tired. I need help. Im scared. And once those
                words are breathed out, hope begins to find footing.
              </p>

              <h2 className="pl-6 font-bold">The Quiet Revolution of Care</h2>
              <p>
                We may not call it that, but what we are doing is rebellion, the gentle kind. We are daring to listen in a
                world that rushes to advise. We are daring to pause when everyone else says, Keep pushing. We are
                daring to make space for softness.
              </p>

              <p>
                Each conversation we hold, every support visit, every shared tear is a small act of defiance, against
                shame, against silence, against the idea that a womans pain should be endured privately.
              </p>

              <p>
                Because truthfully? Healing isnt loud. It doesnt always come wrapped in confetti or breakthroughs.
                Sometimes its just about breathing a little easier than you did yesterday.
              </p>

              <h2 className="pl-6 font-bold">Still Standing, Still Soft</h2>
              <p>
                The world often confuses silence with weakness. But weve learned that some of the strongest women are the
                ones who fight silently, not because they lack words, but because theyve learned endurance in the
                language of grace.
              </p>

              <p>
                So if youre reading this and fighting your own silent battle, this is your reminder: Youre not alone.
                Youre not crazy. And you dont have to keep pretending youre fine.
              </p>

              <p>
                At Beulah, we walk with women through their silences, not to fill them, but to hold them gently. To
                remind them that being soft doesnt mean being small. That healing doesnt mean forgetting. That hope
                doesnt mean denial. It means believing that even this, the pain, the pause, the process, can become
                part of your becoming.
              </p>

              <h2 className="pl-6 font-bold">A Gentle Call to You</h2>
              <p>
                Maybe your battle is still silent. Maybe you havent found the words for it yet. Thats okay. At Beulah
                Walk of Hope, were not about fixing you; we are here to walk with you. Reach out. Whisper if you must.
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
