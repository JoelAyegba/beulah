
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SchoolFeesPaymentPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Supporting Education: A Scholarship Initiative
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beulah Walk of Hope believes in the power of education to transform lives. We are proud to have supported students by paying their school fees, ensuring they can continue their educational journey.
          </p>
        </div>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-96">
            <img
              src="/fees.jpg"
              alt="Beulah Walk of Hope paying school fees"
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6 lg:p-8">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] flex-1">
                  Investing in a Brighter Future
                </h3>
                <Badge variant="secondary" className="ml-4">
                  Completed
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>God's Grace Nursery and Primary School, Abuja, Nigeria</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Education is a fundamental right, yet many children from low-income families are forced to drop out of school due to financial constraints. Beulah Walk of Hope stepped in to bridge this gap by paying the school fees for several students in Abuja. This initiative not only eased the financial burden on their families but also empowered these young minds to pursue their dreams and build a better future.
              </p>
              <Link href="/events" passHref>
                <Button>
                  Back to Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
