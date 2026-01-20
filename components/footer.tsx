import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-4">Beulah Walk Of Hope</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Empowering women through advocacy, skill development, and social impact initiatives across Nigeria and
              Africa.
            </p>
            {/* Social media icons removed */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:beulahwalkofhope@gmail.com" className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 hover:bg-primary/20 text-slate-100 transition-colors">
                  beulahwalkofhope@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+2348057981311" className="hover:text-primary transition-colors">
                  +2348057981311
                </a>              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Beulah Walk Of Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
