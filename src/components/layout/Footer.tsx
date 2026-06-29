import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  "Buy & Sell": [
    { label: "Homes for Sale", href: "/listings" },
    { label: "New Construction", href: "/new-construction" },
    { label: "Sell Your Home", href: "/sell" },
    { label: "Home Valuation", href: "/home-value" },
    { label: "Sold Homes", href: "/sold" },
    { label: "Open Houses", href: "/open-houses" },
  ],
  Communities: [
    { label: "Parks of Whitewater", href: "/neighborhoods/parks-of-whitewater" },
    { label: "Trailhead", href: "/neighborhoods/trailhead" },
    { label: "The District (DORA)", href: "/neighborhoods/the-district" },
    { label: "Cleves Ohio", href: "/neighborhoods/cleves" },
    { label: "North Bend Ohio", href: "/neighborhoods/north-bend" },
    { label: "Okeana Ohio", href: "/neighborhoods/okeana" },
  ],
  Resources: [
    { label: "Moving to Harrison", href: "/moving-to-harrison-ohio" },
    { label: "Market Report", href: "/harrison-ohio-real-estate-market" },
    { label: "New Construction", href: "/homes-for-sale/new-construction-harrison-ohio" },
    { label: "First Time Buyers", href: "/first-time-home-buyer-harrison-ohio" },
    { label: "Property Taxes", href: "/harrison-ohio-property-taxes" },
    { label: "Commute Guide", href: "/harrison-ohio-commute-to-cincinnati" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FF6B00]">
                <Image
                  src="/images/scott-windsor-headshot.jpg"
                  alt="Scott Windsor"
                  width={56}
                  height={56}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <div className="font-playfair font-bold text-xl text-white">
                  Scott Windsor
                </div>
                <div className="text-[#FF6B00] text-xs uppercase tracking-widest font-semibold mt-0.5">
                  Align Right Realty Infinity
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Retired Harrison firefighter. Multi-million dollar real estate agent.
              Based in Harrison, serving the full Greater Cincinnati metro and
              Southwest Ohio.
            </p>

            <div className="space-y-3">
              <a
                href="tel:5133076449"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                513-307-6449
              </a>
              <a
                href="mailto:windsorinfinity@gmail.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                windsorinfinity@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <span>Harrison, Ohio 45030<br />Hamilton County</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/ScottWindsorRealtor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/scottwindsor_realtor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-5 font-inter">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Scott Windsor | Align Right Realty Infinity.
            All rights reserved. Licensed in Ohio.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <span>Harrison, OH 45030</span>
            <span className="text-white/20">|</span>
            <span>Greater Cincinnati</span>
            <span className="text-white/20">|</span>
            <Link href="/admin" className="hover:text-white/70 transition-colors">
              Agent Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

