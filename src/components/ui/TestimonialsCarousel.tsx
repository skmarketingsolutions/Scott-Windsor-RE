"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!testimonials.length) return null;

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center px-8 md:px-16"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.starRating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#1A1A1A] fill-[#E8F840]"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-playfair text-xl md:text-2xl text-navy leading-relaxed mb-6 italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div>
            <p className="font-inter font-bold text-navy text-sm uppercase tracking-wider">
              {t.clientName}
            </p>
            {t.city && (
              <p className="text-gray-500 text-sm mt-1">{t.city}</p>
            )}
            {t.listingAddress && (
              <p className="text-[#1A1A1A] text-xs mt-1 uppercase tracking-wider">
                {t.listingAddress}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border border-navy hover:bg-navy hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-gold w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border border-navy hover:bg-navy hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
