import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Humanitarian Outreach — Food Distribution",
  description: "In a heartfelt outreach, our volunteers distributed food packages to vulnerable women and families in the community.",
}

export default function HumanitarianOutreachPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pl-6">Humanitarian Outreach — Food Distribution</h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-10-15">October 15, 2025</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/outreach-1.jpg"
                alt="Volunteers handing food parcels to community members"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                Our recent humanitarian outreach brought together volunteers and community partners to distribute essential food packages to households in need. The event aimed to provide immediate relief to vulnerable families while fostering community solidarity and raising awareness about ongoing needs.
              </p>
              <p>
                Volunteers spoke with recipients, assessed immediate household needs, and connected many families to upcoming support programs. The coordination between volunteers and local leaders ensured distributions were orderly and reached those most in need.
              </p>

              <h2 className="pl-6 font-bold">Activities</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>Organized and packed over 200 food parcels containing staple items.</li>
                <li>Coordinated distribution points to reach residents across multiple neighborhoods.</li>
                <li>Provided information on our programs and upcoming support services.</li>
              </ul>
              <p>
                Our volunteers worked in teams to ensure efficient packing and respectful, dignified distribution, prioritizing the elderly, single-parent households, and those referred by local community leaders.
              </p>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/outreach-2.jpg"
                  alt="Community members receiving food packages"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <h2 className="pl-6 font-bold">Impact</h2>
              <p>
                The distribution provided immediate nutritional support for dozens of families and strengthened connections between the organization and the communities we serve. Recipients expressed gratitude and relief, and many community members signed up for future programs and volunteer opportunities.
              </p>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/outreach-3.jpg"
                  alt="Group photo of volunteers in pink shirts"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <p>
                We extend our sincere thanks to the volunteers, partners, and donors who made this outreach possible. Your continued support helps ensure we can respond quickly and compassionately to those who need it most.
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
