import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact Us" },
]

export function Footer() {
  return (
    <footer className="bg-[color-mix(in_oklab,var(--primary)_88%,black)] text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-white">
              Beulah Walk Of Hope
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Empowering women through advocacy, skill development, and social impact initiatives across Nigeria and
              Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/beulahwalkofhope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-brand hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4 text-white/80 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:beulahwalkofhope@gmail.com"
                  className="inline-flex items-center px-2 py-1 rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  beulahwalkofhope@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+2348057981311" className="transition-colors hover:text-white">
                  +2348057981311
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Beulah Walk Of Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
