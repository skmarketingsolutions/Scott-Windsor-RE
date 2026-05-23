"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import { pushGTMEvent } from "@/lib/gtm";

const neighborhoods = [
  {
    name: "Parks of Whitewater",
    slug: "parks-of-whitewater",
    tagline: "New construction near Miami Whitewater Forest",
    photo: "/images/neighborhoods/parks-of-whitewater.jpg",
    highlight: "Ryan Homes · From $319,990",
    inHarrison: true,
  },
  {
    name: "Trailhead",
    slug: "trailhead",
    tagline: "Drees Homes — premium builds near walking trails",
    photo: "/images/neighborhoods/trailhead.jpg",
    highlight: "Drees Homes · From $420,100",
    inHarrison: true,
  },
  {
    name: "The District (DORA)",
    slug: "the-district",
    tagline: "Walkable downtown Harrison with local dining and events",
    photo: "/images/neighborhoods/the-district.jpg",
    highlight: "Harrison Downtown",
    inHarrison: true,
  },
  {
    name: "Cleves",
    slug: "cleves",
    tagline: "Charming village 20 min from Cincinnati",
    photo: "/images/neighborhoods/cleves.jpg",
    highlight: "Hamilton County · Near Harrison",
    inHarrison: false,
  },
  {
    name: "North Bend",
    slug: "north-bend",
    tagline: "Historic Ohio River community, large lots",
    photo: "/images/neighborhoods/north-bend.jpg",
    highlight: "Ohio River Views · Near Harrison",
    inHarrison: false,
  },
  {
    name: "New Baltimore",
    slug: "new-baltimore",
    tagline: "Rural acreage and estate properties",
    photo: "/images/neighborhoods/new-baltimore.jpg",
    highlight: "Acreage · Near Harrison",
    inHarrison: false,
  },
];

export default function NeighborhoodGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            label="Explore Communities"
            title="Harrison & Southwest Ohio Communities"
            subtitle="Parks of Whitewater, Trailhead, and The District are within Harrison city limits. Cleves, North Bend, and New Baltimore are nearby communities Scott serves throughout Southwest Ohio."
          />
          <Link
            href="/neighborhoods"
            className="flex items-center gap-2 text-[#2C2C2C] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all font-inter whitespace-nowrap"
          >
            All Communities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((n, i) => (
            <motion.div
              key={n.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/neighborhoods/${n.slug}`}
                onClick={() => pushGTMEvent("neighborhood_clicked", { neighborhood: n.name })}
                className="group relative block overflow-hidden aspect-[4/3]"
              >
                {/* Photo background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${n.photo}')` }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-black/65 transition-all duration-300" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#E8F840] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-inter leading-tight max-w-[180px] text-right">
                  {n.highlight}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair font-bold text-white text-xl mb-1 group-hover:text-[#E8F840] transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-white/75 text-sm font-inter mb-3 leading-snug">
                    {n.tagline}
                  </p>
                  <span className="text-[#E8F840] text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all font-inter">
                    View Homes
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
