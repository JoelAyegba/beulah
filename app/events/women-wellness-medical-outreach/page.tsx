import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Women Wellness & Medical Outreach (Fertility Support)",
  description:
    "A one-day outreach dedicated to the health, wellness, and empowerment of women, where six women received medical support grants of ₦250,000 each towards fertility care.",
}

export default function WomenWellnessMedicalOutreachPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 pl-6">
              Women Wellness &amp; Medical Outreach: Fertility Support
            </h1>

            <div className="text-sm text-muted-foreground mb-6">
              <span className="font-medium">Beulah Walk of Hope Foundation</span>
              <span className="mx-2">•</span>
              <time dateTime="2026-05-23">May 23, 2026</time>
            </div>

            <div className="relative w-full h-96 mb-8">
              <Image
                src="/fertility-grant-1.jpg"
                alt="A beneficiary holding her ₦250,000 medical support grant cheque"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover rounded-lg"
              />
            </div>

            <article className="prose prose-lg max-w-none mb-8 blog-font">
              <p>
                On May 23, 2026, Beulah Walk of Hope Foundation hosted a one-day Women Wellness &amp; Medical Outreach,
                dedicated to the health, wellness, and empowerment of women. The day combined free health screenings,
                wellness education, and a focused programme of support for women navigating the often-silent struggle of
                infertility.
              </p>
              <p>
                Throughout the day, our team and volunteers sat one-on-one with attendees, registering them, listening to
                their stories, and guiding them through the support process. For many of the women present, it was the
                first time they had been able to speak openly about a journey they had carried in private for years.
              </p>

              <h2 className="pl-6 font-bold">Fertility Support Grants</h2>
              <p>
                The highlight of the outreach was the presentation of medical support grants to women on their fertility
                journey. <strong>Six women each received a grant of ₦250,000</strong> to help offset the cost of
                consultations, screenings, and fertility care. Recipients came forward one by one to receive their
                cheques, in moments that were as emotional as they were hopeful.
              </p>

              <div className="relative w-full h-96 my-8">
                <Image
                  src="/fertility-grant-2.jpg"
                  alt="The founder presenting a fertility support grant to a beneficiary"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="pl-6 font-bold">What the Day Offered</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>One-on-one registration and needs assessment for each attendee</li>
                <li>Medical support grants of ₦250,000 to six women towards fertility care</li>
                <li>Wellness and health education sessions</li>
                <li>A safe, judgment-free space to discuss reproductive health</li>
              </ul>

              <h2 className="pl-6 font-bold">Impact</h2>
              <p>
                Beyond the financial support, the outreach reminded each woman that she is seen and that her story is not
                over. The grants help remove a real barrier between these women and the care they have often been
                rationing for years, turning "I cannot afford to find out" into "I am going to try."
              </p>
              <p>
                We extend our heartfelt gratitude to our sponsors and partners — Prime Sources Limited, Life Care Centers
                of America, and Evergreen Nursing Home — whose generosity made this outreach possible. Together, we
                continue to walk with women through their silent battles, one step of hope at a time.
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
