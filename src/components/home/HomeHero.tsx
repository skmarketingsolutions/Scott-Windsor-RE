"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Search } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay â€” #0A1628 at 75% so text is clearly readable */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10, 22, 40, 0.65)" }}
      />

      {/* Lime accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8F840]" />

      {/* Content â€” z-10 ensures it sits above the overlay */}
      <div className="relative z-10 container-wide pt-32 pb-20 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-6"
        >
          Harrison, Ohio &bull; Align Right Realty Infinity
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto mb-6"
        >
          Harrison&apos;s Most Trusted{" "}
          <span className="relative inline-block">
            Real Estate Broker
            <span
              className="absolute left-0 right-0 h-1 bg-[#E8F840]"
              style={{ bottom: "-6px" }}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-inter font-light"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          24 years protecting this community. Now helping families buy and sell in it.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/listings"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8F840] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest hover:bg-[#F2FF60] transition-all duration-300 font-inter"
          >
            <Search className="w-4 h-4" />
            Search Homes
          </Link>
          <Link
            href="/home-value"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 font-inter"
          >
            What&apos;s My Home Worth?
          </Link>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <a
            href="tel:5133076449"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            513-307-6449
          </a>
          <span className="hidden sm:block opacity-30">|</span>
          <span>windsorinfinity@gmail.com</span>
          <span className="hidden sm:block opacity-30">|</span>
          <span>Harrison, OH 45030</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

