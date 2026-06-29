"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import type { Testimonial } from "@/types";

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Mike & Jenny Schroeder",
    city: "Harrison, OH",
    quote:
      "Scott sold our home in 11 days — $7,000 over asking. He knows this market better than anyone. We tried another agent first who gave us bad advice. Scott fixed everything and got results.",
    starRating: 5,
    listingAddress: "Parks of Whitewater",
    visible: true,
    order: 0,
    createdAt: new Date(),
  },
  {
    id: "2",
    clientName: "Tyler & Amanda Reeves",
    city: "Cleves, OH",
    quote:
      "As first-time buyers, we had no idea what we were doing. Scott was patient, honest, and never pushed us toward something we couldn't afford. We love our house.",
    starRating: 5,
    listingAddress: "Cleves, OH",
    visible: true,
    order: 1,
    createdAt: new Date(),
  },
  {
    id: "3",
    clientName: "Donna Hartman",
    city: "Harrison, OH",
    quote:
      "I wanted to sell quickly and quietly. Scott handled everything professionally. Closed in 3 weeks. I've referred him to three of my neighbors since.",
    starRating: 5,
    listingAddress: "Harrison, OH",
    visible: true,
    order: 2,
    createdAt: new Date(),
  },
  {
    id: "4",
    clientName: "Ryan & Kayla Bosworth",
    city: "North Bend, OH",
    quote:
      "Scott's background as a firefighter comes through in everything — calm under pressure, totally reliable, and he's genuinely invested in the community. Best realtor experience we've ever had.",
    starRating: 5,
    visible: true,
    order: 3,
    createdAt: new Date(),
  },
];

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const displayTestimonials =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="section-padding bg-offwhite overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Client Stories"
            title="What Cincinnati Families Say"
            subtitle="Real results from real clients across Greater Cincinnati."
            centered
            className="mb-12"
          />
        </motion.div>

        <TestimonialsCarousel testimonials={displayTestimonials} />
      </div>
    </section>
  );
}
