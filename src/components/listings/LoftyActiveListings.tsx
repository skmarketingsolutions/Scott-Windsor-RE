/**
 * Server component — fetches Scott's active listings from Lofty CRM.
 * Falls back to DB listings if the API is unavailable.
 * Wrapped in Suspense on the listings page for a skeleton loading state.
 */

import { getLoftyListings } from "@/lib/lofty";
import { prisma } from "@/lib/prisma";
import ListingCard from "@/components/ui/ListingCard";

export default async function LoftyActiveListings() {
  // Fetch Lofty and DB listings in parallel
  const [loftyListings, dbListings] = await Promise.all([
    getLoftyListings(),
    prisma.listing.findMany({
      where: { status: { not: "Sold" } },
      orderBy: [{ featured: "desc" }, { featuredOrder: "asc" }, { createdAt: "desc" }],
    }),
  ]);

  // Prefer Lofty listings if available; fall back to DB
  const useLofty = loftyListings.length > 0;
  const listings = useLofty ? loftyListings : dbListings;

  if (listings.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="label-gold mb-2">Active Listings</p>
            <h2 className="font-playfair text-3xl font-bold text-navy">Scott&apos;s Active Listings</h2>
          </div>
          <a href="/listings" className="flex items-center gap-2 text-navy font-semibold text-sm uppercase tracking-wider font-inter whitespace-nowrap hover:gap-3 transition-all">
            All Listings →
          </a>
        </div>
        {useLofty && (
          <p className="text-xs text-gray-400 font-inter mb-6 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
            Live MLS data · Updated every 24 hours
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, i) => (
              <ListingCard
                key={listing.id}
                listing={listing as any}
                priority={i < 3}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
