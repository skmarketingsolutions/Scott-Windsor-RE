"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import type { OpenHouse } from "@/types";

interface OpenHouseWithListing extends OpenHouse {
  listing: {
    address: string;
    city: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    slug: string;
  };
}

interface OpenHouseWidgetProps {
  openHouses: OpenHouseWithListing[];
}

export default function OpenHouseWidget({ openHouses }: OpenHouseWidgetProps) {
  if (!openHouses.length) return null;

  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            label="Coming Up"
            title="Upcoming Open Houses"
            subtitle="Tour Scott's listings in person. No pressure, just great homes."
            dark
          />
          <Link
            href="/open-houses"
            className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors font-inter whitespace-nowrap"
          >
            All Open Houses →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openHouses.map((oh, i) => (
            <motion.div
              key={oh.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/listings/${oh.listing.slug}`}
                className="block bg-white/5 border border-white/10 p-6 hover:border-gold hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span className="text-[#FF6B00] text-xs font-semibold uppercase tracking-wider font-inter">
                        {oh.date} &bull; {oh.startTime} – {oh.endTime}
                      </span>
                    </div>
                    <h3 className="font-playfair font-bold text-white text-lg mb-1 truncate group-hover:text-gold transition-colors">
                      {oh.listing.address}
                    </h3>
                    <div className="flex items-center gap-1 text-white/60 text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{oh.listing.city}, OH</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <span>${oh.listing.price.toLocaleString()}</span>
                      <span className="text-white/30">|</span>
                      <span>{oh.listing.bedrooms} bd</span>
                      <span className="text-white/30">|</span>
                      <span>{oh.listing.bathrooms} ba</span>
                    </div>
                    {oh.notes && (
                      <p className="text-white/50 text-xs mt-2 font-inter">
                        {oh.notes}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
