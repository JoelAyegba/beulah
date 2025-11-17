import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "The Red Season",
  description:
    "A story of resilience, community, and the quiet strength of women supporting each other through life's silent battles.",
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
              <p>
                It was a Wednesday afternoon when the phone rang. I was at my desk, trying to figure out how to stretch our tiny budget to cover the cost of sanitary pads for 200 girls. On the other end of the line was a woman I’ll call Sarah. Her voice was a whisper, the kind you use when you’re trying not to let the person next to you know you’re crying.
              </p>

              <p>
                “I’m sorry to bother you,” she started, “but I saw your number on a flyer. It said you help women.”
              </p>

              <p>
                I told her that’s what we were here for. She took a deep breath and then the story tumbled out. She was a teacher, a mother of two, and for the past year, she had been bleeding. Non-stop. Some days it was a light spotting, other days it was a heavy flow that left her weak and dizzy. She had been to doctors who gave her pills that didn’t work, and finally, one told her she needed a hysterectomy. She was 38.
              </p>

              <p>
                “He said it so casually,” she whispered, her voice cracking. “Like he was telling me I needed to have a tooth pulled. He didn’t understand. I feel like less of a woman.”
              </p>

              <p>
                I listened. I didn’t offer advice or medical opinions. I just listened. I told her about other women I knew who had walked through similar fire. I told her she wasn’t alone. I told her that her worth was not tied to her womb.
              </p>

              <p>
                We call it “The Red Season.” It’s a term we coined for the silent battles women fight with their bodies. It’s the agony of infertility, the confusion of menopause, the pain of endometriosis, the shame of a miscarriage. It’s the seasons of life that are often shrouded in silence, the ones you’re not supposed to talk about at dinner parties.
              </p>

              <p>
                At Beulah Walk of Hope, we are breaking the silence. We are creating spaces where women can talk about their red seasons without shame or judgment. We are providing access to accurate health information, connecting women with compassionate healthcare providers, and most importantly, we are reminding them that they are not broken.
              </p>

              <p>
                Sarah’s story is not unique. There are millions of women like her, suffering in silence, feeling isolated and alone. Our work is to find them, to sit with them, to walk with them. It’s not glamorous. It’s not about big events or fancy campaigns. It’s about the quiet, steady work of holding space for another human being.
              </p>

              <p>
                It’s about being the voice on the other end of the phone that says, “I hear you. I see you. You are not alone.”
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
