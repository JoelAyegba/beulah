"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Copy,
  Check,
  BookOpen,
  Users,
  Sparkles,
  ArrowRight,
  Building2,
  CreditCard,
  User,
  ShieldCheck,
} from "lucide-react"

const impactItems = [
  {
    icon: BookOpen,
    stat: "500+",
    label: "Women Educated",
    description: "Access to quality education and literacy programs",
  },
  {
    icon: Users,
    stat: "1,000+",
    label: "Lives Impacted",
    description: "Women and families reached through our programs",
  },
  {
    icon: Sparkles,
    stat: "50+",
    label: "Communities Served",
    description: "Communities across Nigeria and beyond",
  },
]

export default function DonateContent() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2500)
    })
  }

  return (
    <main>
      {/* Hero Banner */}
      <section
        className="relative py-28 md:py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/african-women-volunteers-helping-community.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-black/70" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 bg-white/15 backdrop-blur-sm border border-white/25">
            <Heart className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">
              Make a Difference Today
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-white text-shadow-hero">
            Your Generosity
            <br />
            <span className="text-white/80">Changes Lives</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed text-shadow-hero">
            Every donation, no matter the size, helps us empower women, educate
            communities, and create lasting change across Nigeria and Africa.
          </p>
        </div>
      </section>

      {/* Donation Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Bank Transfer Details
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                You can support our mission by making a direct bank transfer to
                the account below.
              </p>
            </div>

            {/* Account Details Card */}
            <Card
              className="overflow-hidden shadow-xl border-0"
              style={{
                background:
                  "linear-gradient(135deg, #f8fdf8 0%, #f0f9f0 100%)",
              }}
            >
              {/* Card accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary to-brand" />

              <CardContent className="p-8 md:p-10">
                {/* Trust badge */}
                <div className="flex items-center gap-2 mb-8 justify-center">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(26,100,26,0.08)",
                      border: "1px solid rgba(26,100,26,0.15)",
                    }}
                  >
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Verified Account
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Account Number */}
                  <div
                    className="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md group"
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">
                          Account Number
                        </p>
                        <p className="text-xl md:text-2xl font-bold tracking-wider font-mono">
                          8104105939
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy("8104105939", "accountNumber")
                      }
                      className="flex-shrink-0 gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedField === "accountNumber" ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 text-sm">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span className="text-sm hidden sm:inline">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Bank Name */}
                  <div
                    className="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">
                          Bank
                        </p>
                        <p className="text-lg md:text-xl font-semibold">
                          Moniepoint
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy("Moniepoint", "bank")}
                      className="flex-shrink-0 gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedField === "bank" ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 text-sm">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span className="text-sm hidden sm:inline">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Account Name */}
                  <div
                    className="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">
                          Account Name
                        </p>
                        <p className="text-lg md:text-xl font-semibold">
                          Beulah Walk of Hope Foundation
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleCopy(
                          "Beulah Walk of Hope Foundation",
                          "accountName"
                        )
                      }
                      className="flex-shrink-0 gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedField === "accountName" ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 text-sm">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span className="text-sm hidden sm:inline">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Thank you message */}
                <div
                  className="mt-8 p-5 rounded-xl text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(26,100,26,0.06) 0%, rgba(233,30,144,0.04) 100%)",
                    border: "1px solid rgba(26,100,26,0.1)",
                  }}
                >
                  <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After making your transfer, kindly send a confirmation to{" "}
                    <a
                      href="mailto:beulahwalkofhope@gmail.com"
                      className="text-primary font-medium hover:underline"
                    >
                      beulahwalkofhope@gmail.com
                    </a>{" "}
                    or via WhatsApp at{" "}
                    <a
                      href="tel:+2348057981311"
                      className="text-primary font-medium hover:underline"
                    >
                      +234 805 798 1311
                    </a>{" "}
                    so we can acknowledge your generous gift.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Your Donation Makes an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every naira contributed goes directly towards empowering women and
              building stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactItems.map((item) => (
              <Card
                key={item.label}
                className="group text-center hover:shadow-lg transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-playfair)]">
                    {item.stat}
                  </p>
                  <p className="font-semibold mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Other Ways to Help */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/african-woman-entrepreneur-in-her-shop-smiling-con.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="h-10 w-10 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-white">
            Other Ways to Support
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-white/90">
            Beyond financial contributions, you can volunteer your time, partner
            with us, or help spread the word about our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/volunteer">
                Volunteer With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
