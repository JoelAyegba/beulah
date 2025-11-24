import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Eye, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - Beulah walk of hope foundation",
  description: "Learn about Beulah walk of hope foundation's mission, vision, and the team dedicated to empowering women across Africa.",
  openGraph: {
    title: "About Us - Beulah walk of hope foundation",
    description: "Learn about Beulah walk of hope foundation's mission, vision, and the team dedicated to empowering women across Africa.",
    image: "/african-women-leadership-training-workshop.jpg",
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* Our Story */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
                <img
                  src="/african-women-leadership-training-workshop.jpg"
                  alt="Women in training workshop"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {"Beulah Walk of Hope Foundation began with a profound conviction: that love can make a difference. Our founder, Elfrida Egwuche, started this journey with small, heartfelt acts – a few school visits, sanitary pad outreaches, and sitting with women struggling with infertility. It was born from a deep understanding that every woman deserves a safe space to be seen, heard, and healed."}
                </p>
                <p>
                  {"Our vision is a world where every woman is acknowledged, supported, and restored to a state of wholeness. We are committed to walking beside women through life's silent struggles, facilitating restoration, enhancing confidence, and upholding the dignity of each woman throughout her personal journey. This mission is crucial because it empowers women to overcome adversity, reclaim their voices, and contribute meaningfully to their communities."}
                </p>
                <p>
                  {"What began as a community initiative has grown into a comprehensive empowerment organization. Our journey is fueled by the incredible resilience of the women we serve, and we continue to expand our programs, forge new partnerships, and innovate our approaches to ensure no woman is left behind in the journey toward equality and empowerment."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src="/founder.jpg"
                alt="Elfrida Egwuche, Founder of Beulah walk of hope foundation"
                className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl border-4 border-white"
              />
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                EMPOWERING WOMEN TO SUCCEED THROUGH EDUCATIONAL & INSPIRATIONAL WELLNESS CONVERSATIONS
              </h3>
              <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
                <p>
                  {
                    "I honour the hearts that beat for change, the hands that build the future, and the soul that carry kindness like a crown. Your legacy is not just in the barriers you break but in the light you leave behind for those who come after you."
                  }
                </p>
              </blockquote>
              <p className="text-right text-xl font-semibold text-primary mt-4 pr-6">
                - Elfrida Egwuche
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"We are committed to walking beside women through life's silent struggles. We facilitate restoration, enhance confidence, and uphold the dignity of each woman throughout her personal journey "}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"A World in which every woman is acknowledged, supported and restored to a state of wholeness"}
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Empowerment & Dignity</li>
                  <li>• Inclusivity & Equality</li>
                  <li>• Integrity & Transparency</li>
                  <li>• Community & Collaboration</li>
                  <li>• Innovation & Impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Our Founder
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/Founder1.jpg"
                alt="Elfrida Egwuche"
                className="rounded-lg shadow-lg w-full h-auto max-w-sm"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">Elfrida Egwuche</h3>
              <p className="text-muted-foreground">Founder & Executive Director</p>
              <p className="text-sm text-muted-foreground mt-4">
                {"Fast forward a few years, and I did move back, and let’s just say reality didn’t look like I had imagined. There was no funding, no fancy launch, no customized t-shirts and huge buses — it was just me and my conviction that love could still make a difference. So I began small. Really small. A few school visits. Some sanitary pad outreaches. A handful of women struggling with infertility who needed someone to just sit, listen, and remind them they weren’t broken. And just like that, Beulah Walk of Hope was born."}
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
