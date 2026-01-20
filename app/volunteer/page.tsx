import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, BookOpen, Briefcase, Users, Globe, Camera, Heart } from "lucide-react"

export const metadata = {
  title: "Volunteer - Beulah walk of hope foundation",
  description: "Join Beulah walk of hope foundation as a volunteer and make a difference in the lives of women across Africa. Explore our volunteer opportunities.",
  openGraph: {
    title: "Volunteer - Beulah walk of hope foundation",
    description: "Join Beulah walk of hope foundation as a volunteer and make a difference in the lives of women across Africa. Explore our volunteer opportunities.",
    image: "/african-women-volunteers-helping-community.jpg",
  },
}

const volunteerOpportunities = [
  {
    icon: BookOpen,
    title: "Education Mentor",
    commitment: "4-6 hours/week",
    description: "Tutor women in literacy programs or provide educational support and guidance.",
    skills: ["Teaching experience", "Patience", "Good communication"],
  },
  {
    icon: Briefcase,
    title: "Business Advisor",
    commitment: "2-4 hours/week",
    description: "Mentor women entrepreneurs and provide business development guidance.",
    skills: ["Business experience", "Financial literacy", "Mentoring skills"],
  },
  {
    icon: Users,
    title: "Community Organizer",
    commitment: "6-8 hours/week",
    description: "Help organize events, workshops, and community outreach programs.",
    skills: ["Event planning", "Community engagement", "Leadership"],
  },
  {
    icon: Globe,
    title: "Digital Skills Trainer",
    commitment: "3-5 hours/week",
    description: "Teach computer skills, social media, and digital literacy to program participants.",
    skills: ["Tech proficiency", "Teaching ability", "Patience"],
  },
  {
    icon: Camera,
    title: "Content Creator",
    commitment: "Flexible",
    description: "Document our programs through photography, videography, or writing.",
    skills: ["Photography/video", "Writing", "Social media"],
  },
  {
    icon: Heart,
    title: "Fundraising Support",
    commitment: "Flexible",
    description: "Help with fundraising campaigns, donor relations, and grant writing.",
    skills: ["Communication", "Writing", "Networking"],
  },
]

const benefits = [
  "Make a meaningful impact in women's lives",
  "Develop new skills and gain experience",
  "Join a passionate community of changemakers",
  "Receive volunteer certificates and references",
  "Access to training and development workshops",
  "Networking opportunities with like-minded individuals",
]

export default function VolunteerPage() {
  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/african-women-volunteers-helping-community.jpg"
            alt="Volunteer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Make a Difference</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance leading-tight">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/95 max-w-3xl mx-auto mb-10">
              {
                "Join our community of dedicated volunteers making a real difference in women's lives. Your time, skills, and passion can transform communities."
              }
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Users className="h-5 w-5" />
              <span className="font-semibold">6 Volunteer Opportunities Available</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Find the perfect role that matches your skills, interests, and availability."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <opportunity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">Time Commitment:</span> {opportunity.commitment}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{opportunity.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Skills Needed:</div>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Why Volunteer With Us
              </h2>
              <p className="text-lg text-muted-foreground">
                {"Volunteering with Hope Horizon is rewarding in many ways."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Apply to Volunteer
              </h2>
              <p className="text-lg text-muted-foreground">
                {"Fill out the form below and we'll get back to you within 48 hours."}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer email? Contact us at
                <a href="mailto:beulahwalkofhope@gmail.com" className="ml-1 font-medium hover:text-primary transition-colors">
                  beulahwalkofhope@gmail.com
                </a>
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" placeholder="City, State" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opportunity">Preferred Volunteer Role *</Label>
                    <select
                      id="opportunity"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select a role</option>
                      {volunteerOpportunities.map((opp) => (
                        <option key={opp.title} value={opp.title}>
                          {opp.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <select
                      id="availability"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both Weekdays and Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience & Skills</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your relevant experience, skills, and why you want to volunteer with us..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with Hope Horizon? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share your motivation and what you hope to contribute..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground font-normal">
                      {
                        "I agree to undergo a background check and commit to Hope Horizon's volunteer policies and code of conduct."
                      }
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Have Questions?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {
              "Our volunteer coordinator is here to help. Reach out if you have any questions about volunteering opportunities."
            }
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            Contact Volunteer Coordinator
          </Button>
        </div>
      </section>
    </main>
  )
}
