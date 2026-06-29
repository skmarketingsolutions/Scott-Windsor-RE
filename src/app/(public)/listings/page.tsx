import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import IDXClickGate from "@/components/listings/IDXClickGate";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Search Homes for Sale in Harrison, OH | Scott Windsor",
  description:
    "Browse homes for sale in Harrison OH & Southwest Ohio with Scott Windsor — local agent serving Harrison 45030, Cleves, North Bend & Okeana.",
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
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Active Listings</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Homes for Sale in Harrison &amp; Greater Cincinnati
          </h1>
          <p className="text-white/70 text-lg max-w-2xl font-inter">
            Scott&apos;s current listings below. Don&apos;t see what you&apos;re looking for?
            Tell him what you want — he has access to every active listing on the MLS.
          </p>
        </div>
      </div>

      {/* IDX with click gate */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <IDXClickGate />
        </div>
      </section>

      {/* MLS Search Form */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">Full MLS Access</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Don&apos;t See It? Scott Can Find It.
              </h2>
              <p className="text-white/70 font-inter leading-relaxed mb-6">
                Scott has access to every active listing across Greater Cincinnati and
                Southwest Ohio — not just the ones on this page. Tell him what you&apos;re
                looking for: price range, bedrooms, neighborhood, must-haves. He&apos;ll
                send you a curated list of matches within 24 hours.
              </p>
              <ul className="space-y-2 text-white/70 font-inter text-sm">
                {[
                  "Full MLS access — every active listing",
                  "Off-market and coming-soon properties",
                  "New construction floor plans and pricing",
                  "Response within 24 hours, no pressure",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8">
              <LeadForm
                formType="listing_search"
                sourcePage="/listings"
                title="Tell Scott What You're Looking For"
                showMessage
                ctaText="Send Me Matching Homes"
                dark={false}
              />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
