"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Bed, Bath, Square } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Listing } from "@/types";

interface FeaturedListingsProps {
  listings: Listing[];
}

export default function FeaturedListings({ listings }: FeaturedListingsProps) {
  const activeListings = listings.filter(l => l.status === "Active");

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            label="Active Listings"
            title="Scott's Active Listings"
            subtitle="Homes currently listed by Scott Windsor at Align Right Realty Infinity."
          />
          <Link
            href="/listings"
            className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all font-inter whitespace-nowrap"
          >
            All Listings
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {activeListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeListings.map((listing, i) => {
              const photos = (() => { try { return JSON.parse(listing.photos || "[]"); } catch { return []; } })();
              const photo = photos[0] || null;
              return (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={`/listings/${listing.slug}`}
                    className="group block bg-white border border-gray-100 hover:border-[#2C2C2C] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={listing.address}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          priority={i < 2}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#F5F5F5]">
                          <span className="text-[#555555] text-sm">No photo</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-[#E8F840] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-inter">
                        Active
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="font-playfair font-bold text-[#1A1A1A] text-xl mb-1">
                        {formatPrice(listing.price)}
                      </p>
                      <p className="text-[#1A1A1A] font-semibold text-sm font-inter mb-1 leading-snug">
                        {listing.address}
                      </p>
                      <p className="text-[#555555] text-xs font-inter mb-3">
                        {listing.city}, {listing.state} {listing.zip}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-[#555555] font-inter border-t border-gray-100 pt-3 mb-3">
                        <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{listing.bedrooms} bd</span>
                        <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{listing.bathrooms} ba</span>
                        {listing.sqft && <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" />{listing.sqft.toLocaleString()} sqft</span>}
                      </div>
                      <p className="text-[#555555] text-xs font-inter border-t border-gray-100 pt-3">
                        Listed by Align Right Realty Infinity
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F5F5F5]">
            <p className="text-[#555555] font-inter mb-6">
              Check back soon for Scott's current listings.
            </p>
            <Link href="/contact" className="btn-navy inline-flex">
              Contact Scott
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

