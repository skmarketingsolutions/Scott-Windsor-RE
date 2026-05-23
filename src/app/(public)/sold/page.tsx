export const dynamic = "force-dynamic";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import ListingCard from "@/components/ui/ListingCard";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Recently Sold Homes in Harrison Ohio | Scott Windsor",
  description:
    "View Scott Windsor's recently sold homes in Harrison, Cleves, North Bend, and Southwest Ohio. Multi-million dollar producing broker/owner with a proven track record.",
  keywords: [
    "recently sold homes harrison ohio",
    "sold homes harrison oh",
    "harrison ohio real estate sold",
    "how much did homes sell for harrison ohio",
  ],
};

async function getSoldListings() {
  return prisma.listing.findMany({
    where: { status: "Sold" },
    orderBy: { soldDate: "desc" },
  });
}

export default async function SoldPage() {
  const listings = await getSoldListings();

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Proven Track Record</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Recently Sold Homes in Harrison Ohio
          </h1>
          <p className="text-white/70 text-lg max-w-2xl font-inter">
            These are real results for real Harrison families. When you list with Scott,
            you&apos;re listing with someone who knows how to close.
          </p>
        </div>
      </div>

      {/* Intro Copy */}
      <section className="bg-white py-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-gray-600 leading-relaxed font-inter text-lg mb-6">
              Scott Windsor has helped hundreds of Southwest Ohio families navigate
              the home selling process, from pricing strategy to negotiation to
              closing day. His approach is direct, data-driven, and rooted in 24
              years of knowing this community personally.
            </p>
            <p className="text-gray-600 leading-relaxed font-inter">
              The homes below are recent closings. Ask Scott for a complete list
              of his sales history and what homes like yours are actually selling for.
            </p>
          </div>
        </div>
      </section>

      {/* Sold Listings Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing, i) => (
                <ListingCard key={listing.id} listing={listing as any} priority={i < 6} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 font-inter text-lg">
                Sold listings coming soon. Call Scott for his complete sales history.
              </p>
              <a href="tel:5133076449" className="btn-gold mt-6 inline-flex">
                Call 513-307-6449
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Seller CTA */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-4">Thinking About Selling?</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Talk About What Your Home Is Worth
              </h2>
              <p className="text-white/70 font-inter leading-relaxed mb-6">
                Scott will give you an honest, data-backed assessment of your
                home&apos;s market value. No pressure, no obligation. Just a real
                conversation with someone who actually knows Harrison.
              </p>
              <ul className="space-y-2 text-white/70 font-inter text-sm">
                {[
                  "Free, no-obligation home valuation",
                  "Based on actual sold data, not Zillow estimates",
                  "Marketing strategy tailored to your home",
                  "Response within 24 hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8">
              <LeadForm
                formType="home_valuation"
                sourcePage="/sold"
                title="Get a Free Home Valuation"
                showAddress
                showMessage
                ctaText="Request My Home Value"
                dark={false}
              />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
