import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
    title: "Still Carrying Light: A New Year Reflection - Beulah Walk of Hope",
    description: "A reflection on pain, gratitude, and hope as we step into a new year. From pain, I carried gratitude. From confusion, I carried wisdom. From survival, I carried faith.",
}

export default function StillCarryingLightPage() {
    return (
        <main>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Still Carrying Light: A New Year Reflection</h1>

                        <div className="text-sm text-muted-foreground mb-6 pl-6">
                            <span className="font-medium">Elfrida Egwuche, Convener, Beulah Walk of Hope</span>
                            <span className="mx-2">•</span>
                            <time dateTime="2026-01-20">January 20, 2026</time>
                        </div>

                        <article className="prose prose-lg max-w-none mb-8 blog-font">
                            <p>
                                The funny thing about pain is that when you're inside it, you're never sure when it will end. You just know you're tired. You just know you're holding on. You just know you're praying that somehow, something good comes out of it.
                            </p>

                            <p>
                                Looking back now, I can say this with honesty: for every dark passage I walked through, God tucked something precious into my hands before leading me forward. I didn't always see it in the moment. Sometimes all I felt was the ache. But here I am, standing at the edge of a new year, realizing that pain didn't leave me empty—it left me carrying something.
                            </p>

                            <p>
                                <strong>From pain, I carried gratitude.</strong><br />
                                <strong>From confusion, I carried wisdom.</strong><br />
                                <strong>From survival, I carried faith.</strong>
                            </p>

                            <p>
                                And for life itself, I am deeply grateful—grateful for God's faithfulness that held me steady even when I felt unsure.
                            </p>

                            <figure className="my-8">
                                <Image
                                    src="/new-year-reflection.jpg"
                                    alt="Community gathering at Beulah Walk of Hope"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-lg shadow-lg"
                                />
                                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                                    Walking into 2026 together with hope and faith
                                </figcaption>
                            </figure>

                            <h2>What Did This Year Give You?</h2>

                            <p>
                                Before we rush into a new year with resolutions and declarations, let me ask you something: <strong>What did this past year teach you?</strong>
                            </p>

                            <p>
                                Not what it took from you, but what did it leave with you?
                            </p>

                            <p>
                                Maybe you discovered a strength you didn't know you had. Maybe you learned how to rest. Maybe you learned how to ask for help. Maybe you learned that you are far more resilient than you ever imagined.
                            </p>

                            <p>
                                Sometimes the beauty a year gives us isn't glamorous—it is confidence, it is boundaries, it is deeper discernment.
                            </p>

                            <p>
                                So pause for a moment and ask yourself: <strong>What am I carrying into the new year?</strong>
                            </p>

                            <h2>Choosing What to Carry Forward</h2>

                            <p>
                                Not everything deserves to cross over with us. Some things did their work and must be released.
                            </p>

                            <p>
                                <strong>Leave behind the grudges</strong>—they only poison the one who holds them.<br />
                                <strong>Leave behind the heavy self-criticism</strong>—you truly did the best you could with what you knew then.<br />
                                <strong>Leave behind the shame</strong> that whispers you should have been "better" or "further."
                            </p>

                            <p>
                                Instead, carry the moments that remind you of humanity:
                            </p>

                            <ul>
                                <li>Carry every time someone showed you kindness.</li>
                                <li>Carry the days you survived when you thought you wouldn't.</li>
                                <li>Carry the lessons that shaped you without hardening you.</li>
                            </ul>

                            <p>
                                Let those memories teach you how to be kinder—to yourself and to others.
                            </p>

                            <h2>The New Year Is Not a Blank Page</h2>

                            <p>
                                There's this idea that a new year is a clean slate, a blank page waiting to be written. But I don't believe that.
                            </p>

                            <p>
                                <strong>A new year is not a blank page—it is the next chapter of a story already in motion.</strong> A story with history, with scars, with growth, with faith that has been tested and proven.
                            </p>

                            <p>
                                You don't erase the past to move forward. You build on it. You take what shaped you, refine it, and choose how the story continues.
                            </p>

                            <p>
                                And that choice in itself is powerful.
                            </p>

                            <h2>Walking Into 2026 Together</h2>

                            <p>
                                At Beulah Walk of Hope, we step into this new year with hearts full—not because everything was perfect, but because love carried us through. Because women showed up for women. Because hope kept walking, even when the road felt long.
                            </p>

                            <p>
                                We enter 2026 carrying:
                            </p>

                            <ul>
                                <li><strong>Compassion</strong></li>
                                <li><strong>Wisdom</strong></li>
                                <li><strong>Faith</strong></li>
                                <li><strong>The strength of women</strong> who refuse to give up on healing, dignity, and community.</li>
                            </ul>

                            <p>
                                And we invite you to walk with us.
                            </p>

                            <p>
                                To choose hope again.<br />
                                To choose kindness again.<br />
                                To choose growth again.
                            </p>

                            <p>
                                Welcome to a year where healing continues.<br />
                                Where love remains the strategy.<br />
                                Where purpose still leads the way.
                            </p>

                            <p className="text-xl font-semibold text-primary">
                                Welcome to 2026.
                            </p>
                        </article>

                        <div className="text-center">
                            <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:underline">
                                <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
