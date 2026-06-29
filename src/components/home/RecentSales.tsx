"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Bed, Bath, Square } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Listing } from "@/types";

interface RecentSalesProps {
  listings: Listing[];
}

export default function RecentSales({ listings }: RecentSalesProps) {
  const soldListings = listings.filter(l => l.status === "Sold").slice(0, 3);

  return (
    <section className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            label="Proven Track Record"
            title="Recently Sold in Harrison"
            subtitle="Scott's recent closings. Proof of what's possible when you work with the right agent."
          />
          <Link
            href="/sold"
            className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all font-inter whitespace-nowrap"
          >
            All Sold Homes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {soldListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {soldListings.map((listing, i) => {
              const photos = (() => { try { return JSON.parse(listing.photos || "[]"); } catch { return []; } })();
              const photo = photos[0] || null;
              return (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-white border border-gray-100 overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={listing.address}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2C2C2C]" />
                    )}
                    <div
                      className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1.5 font-inter"
                      style={{ backgroundColor: "#0A1628", color: "#FF6B00" }}
                    >
                      SOLD
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-playfair font-bold text-[#1A1A1A] text-lg mb-1">
                      {formatPrice(listing.soldPrice || listing.price)}
                    </p>
                    <p className="text-[#1A1A1A] font-semibold text-sm font-inter mb-1">{listing.address}</p>
                    <p className="text-[#555555] text-xs font-inter mb-3">{listing.city}, {listing.state} {listing.zip}</p>
                    <div className="flex items-center gap-3 text-xs text-[#555555] font-inter border-t border-gray-100 pt-3">
                      <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{listing.bedrooms} bd</span>
                      <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{listing.bathrooms} ba</span>
                      {listing.sqft && <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" />{listing.sqft.toLocaleString()} sqft</span>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#2C2C2C] p-8 md:p-12 text-center"
        >
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">
            Free Market Analysis
          </p>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
            Scott has helped hundreds of Harrison Ohio families sell their homes.
          </h3>
          <p className="text-white/70 font-inter max-w-xl mx-auto mb-8">
            Contact him for a free market analysis of your property. No obligation, no pressure. Just honest data about what your home is worth right now.
          </p>
          <Link
            href="/home-value"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B00] text-[#1A1A1A] font-bold text-sm uppercase tracking-widest hover:bg-[#FF8C33] transition-all duration-300 font-inter"
          >
            Get a Free Home Valuation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
