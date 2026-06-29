"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Clock, Award } from "lucide-react";

export default function HomeValueCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-gold mb-4 text-[#FF6B00]">Free Home Valuation</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto mb-6">
            What&apos;s Your Cincinnati Home Worth?
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-10 font-inter">
            Online estimates are based on algorithms. Scott&apos;s are based on 24
            years of knowing the Greater Cincinnati market personally.
          </p>

          <Link href="/home-value" className="btn-gold text-base mb-12 inline-flex">
            Get My Free Home Value
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
            {[
              { icon: TrendingUp, text: "Local Market Data" },
              { icon: Clock, text: "24hr Response" },
              { icon: Award, text: "No Obligation" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#FF6B00]" />
                <span className="text-white/70 text-sm font-inter">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
