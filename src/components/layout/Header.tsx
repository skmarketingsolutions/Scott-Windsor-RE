"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Buy", href: "/listings" },
  { label: "Sell", href: "/sell" },
  {
    label: "Communities",
    href: "/neighborhoods",
    children: [
      { label: "All Neighborhoods", href: "/neighborhoods" },
      { label: "Parks of Whitewater", href: "/neighborhoods/parks-of-whitewater" },
      { label: "Trailhead", href: "/neighborhoods/trailhead" },
      { label: "The District (DORA)", href: "/neighborhoods/the-district" },
      { label: "Cleves", href: "/neighborhoods/cleves" },
      { label: "North Bend", href: "/neighborhoods/north-bend" },
      { label: "New Baltimore", href: "/neighborhoods/new-baltimore" },
    ],
  },
  { label: "New Construction", href: "/new-construction" },
  { label: "Sold Homes", href: "/sold" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C] shadow-lg">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/align-right-realty-logo.png"
              alt="Align Right Realty Infinity"
              width={140}
              height={47}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-0.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider font-inter transition-colors text-white/80 hover:text-[#E8F840]",
                    pathname === link.href && "text-[#E8F840]"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-2.5 h-2.5 opacity-60" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-xl border-t-2 border-[#E8F840] py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F5F5F5] font-inter transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:5133076449"
              className="flex items-center gap-1.5 text-xs font-semibold font-inter text-white/80 hover:text-[#E8F840] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              513-307-6449
            </a>
            <Link
              href="/home-value"
              className="px-4 py-2 bg-[#E8F840] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-[#F2FF60] transition-all font-inter"
            >
              Home Value
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#2C2C2C] border-t border-white/10">
          <div className="container-wide py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-sm font-semibold uppercase tracking-wider border-b border-white/10 text-white hover:text-[#E8F840] transition-colors font-inter"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-white/60 hover:text-[#E8F840] transition-colors font-inter"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:5133076449"
                className="flex items-center gap-2 text-[#E8F840] font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                513-307-6449
              </a>
              <Link
                href="/home-value"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#E8F840] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest hover:bg-[#F2FF60] transition-all font-inter"
              >
                What&apos;s My Home Worth?
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

