import { Suspense } from "react";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LoftyActiveListings from "@/components/listings/LoftyActiveListings";
import ListingsSkeleton from "@/components/listings/ListingsSkeleton";
import LoftyIDXWidget from "@/components/listings/LoftyIDXWidget";

export const metadata: Metadata = {
  title: "Homes for Sale in Harrison Ohio | Scott Windsor",
  description:
    "Browse homes for sale in Harrison Ohio and Southwest Ohio. Scott Windsor — local broker with 24 years in the community. Harrison OH 45030, Cleves, North Bend, New Baltimore.",
  keywords: [
    "homes for sale harrison ohio",
    "harrison ohio real estate listings",
    "houses for sale harrison oh 45030",
    "harrison ohio homes under 300000",
    "new homes harrison ohio",
  ],
};

export default function ListingsPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Real Estate Search</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Homes for Sale in Harrison, Ohio
          </h1>
          <p className="text-white/70 text-lg max-w-2xl font-inter">
            Scott&apos;s own listings below, plus the full MLS search.
            Every price range, every neighborhood.
          </p>
        </div>
      </div>

      {/* IDX Embed */}
      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <div className="mb-8">
            <p className="label-gold mb-2">Full MLS Search</p>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-4">
              Search All Harrison Ohio Homes
            </h2>
            <p className="text-gray-600 font-inter max-w-xl">
              Access the complete MLS database: every active listing in
              Harrison, Cleves, North Bend, New Baltimore, and all of Southwest Ohio.
            </p>
          </div>

          <div className="w-full min-h-[800px]">
            <LoftyIDXWidget />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
