import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Sparkles, Users, Briefcase, GraduationCap, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Programs - Beulah walk of hope foundation",
  description: "Explore Beulah walk of hope foundation's comprehensive programs for women empowerment, education, and entrepreneurship.",
  openGraph: {
    title: "Our Programs - Beulah walk of hope foundation",
    description: "Explore Beulah walk of hope foundation's comprehensive programs for women empowerment, education, and entrepreneurship.",
    image: "/african-women-in-classroom-learning-computer-ski.jpg",
  },
}

export default function ProgramsPage() {
  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/african-women-in-classroom-learning-computer-ski.jpg"
            alt="Women in Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-accent-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 mb-6">
              <span className="text-sm font-medium">What We Offer</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance leading-tight">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-accent-foreground/95 max-w-3xl mx-auto mb-10">
              {
                "Comprehensive initiatives designed to empower women at every stage of their journey toward independence and success."
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Education & Literacy</div>
              </div>
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <Sparkles className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Entrepreneurship</div>
              </div>
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Advocacy & Rights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Core Programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-secondary mb-2">2,500+</div>
                <p className="text-muted-foreground">Women Trained</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Literacy Program */}
          <div id="education" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Education & Literacy
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "Our education program provides women and girls with access to quality learning opportunities, from basic literacy to advanced skills training."
                  }
                </p>

                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Basic Literacy Classes</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "Foundational reading, writing, and numeracy skills for women who missed formal education opportunities. Classes are held in local communities with flexible schedules."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Digital Literacy Training</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "Computer skills, internet navigation, and digital communication tools to help women participate in the modern economy and access online opportunities."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Vocational Skills Training</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "Practical skills in tailoring, catering, hairdressing, and other trades that provide immediate income-generating opportunities."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/impact">See Success Stories</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/african-women-in-classroom-learning-computer-ski.jpg"
                  alt="Women in education program"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Entrepreneurship Program */}
          <div
            id="entrepreneurship"
            className="mb-20 scroll-mt-20 bg-muted -mx-4 px-4 py-16 lg:mx-0 lg:px-8 lg:rounded-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/african-women-entrepreneurs-in-business-meeting-.jpg"
                  alt="Women entrepreneurs"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Entrepreneurship Training
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "Transform your business ideas into reality with our comprehensive entrepreneurship program designed specifically for women."
                  }
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Skills Training</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Learn business planning, marketing, customer service, and operations management."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Financial Literacy</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Master budgeting, bookkeeping, pricing strategies, and financial planning for your business."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Microfinance Access</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Connect with microfinance opportunities and learn how to access capital for your business."}
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">
                    Join the Program <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Advocacy Program */}
          <div id="advocacy" className="scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Advocacy & Rights
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "We champion women's rights and create platforms for women to voice their concerns, access justice, and participate in decision-making processes."
                  }
                </p>

                <div className="space-y-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Legal Support & Awareness</h4>
                      <p className="text-sm text-muted-foreground">
                        {
                          "Free legal consultations and education on women's rights, property rights, and protection from violence."
                        }
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Community Leadership</h4>
                      <p className="text-sm text-muted-foreground">
                        {
                          "Training women to become community leaders and advocates for gender equality in their localities."
                        }
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Support Networks</h4>
                      <p className="text-sm text-muted-foreground">
                        {
                          "Safe spaces for women to share experiences, build solidarity, and access counseling and support services."
                        }
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Learn More removed per request */}
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/african-women-in-community-meeting-discussing-ri.jpg"
                  alt="Women advocacy meeting"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-primary-foreground/95">
            {
              "Join thousands of women who have transformed their lives through our programs. Your journey to empowerment starts here."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/donate">Support Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
