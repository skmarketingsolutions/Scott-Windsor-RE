"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-[#2C2C2C]">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-4 font-inter">
            Ready When You Are
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Your Move in Harrison?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-inter">
            Whether you&apos;re buying your first home or selling to start your next
            chapter, Scott is here and he knows this community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E8F840] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest hover:bg-[#F2FF60] transition-all font-inter"
            >
              Let&apos;s Talk
            </Link>
            <a
              href="tel:5133076449"
              className="btn-outline-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              513-307-6449
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

