import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Condos for Sale Harrison OH 45030 | Scott Windsor",
  description:
    "Find condos and townhomes for sale in Harrison Ohio. Low maintenance living in zip code 45030. Contact Scott Windsor today.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What condos are for sale in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrison Ohio has condo communities primarily along the West Road corridor. Recent listings include 10502 West Rd Unit 50, a 2-bedroom, 2-bathroom condo with 1,236 square feet listed at $184,900. The inventory in Harrison's condo market is limited compared to the single-family home market, so working with a local agent who monitors new listings closely is important.",
      },
    },
    {
      "@type": "Question",
      name: "How much do condos cost in Harrison OH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Condos in Harrison Ohio typically range from $150,000 to $250,000 depending on size, location, condition, and HOA fees. Two-bedroom, two-bathroom units in the 1,200 to 1,400 square foot range have recently listed in the $180,000 to $210,000 range. HOA fees vary by community and cover exterior maintenance, lawn care, and snow removal.",
      },
    },
    {
      "@type": "Question",
      name: "Are condos a good investment in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrison condos can be a solid investment for the right buyer. The area has a growing population of 13,460 with steady rental demand. Condos appeal to first-time buyers, downsizers, and renters who want to own, which supports a broad pool of future buyers when you sell. As with any investment, pricing, HOA health, and location within the community all affect long-term performance.",
      },
    },
  ],
};

export default function HarrisonCondos() {
  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#2C2C2C] pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">
            Condos and Townhomes Harrison OH
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Condos for Sale in Harrison Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Affordable ownership with low maintenance responsibilities. A smart entry point
            into the Harrison market.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison Ohio&apos;s condo market offers something that is increasingly rare in the
            greater Cincinnati area: a genuine path to homeownership at an accessible price point
            with manageable ongoing costs. For buyers who want to own property without the full
            burden of exterior maintenance, a Harrison condo provides real value.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            What the Condo Market Looks Like
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Condos in Harrison primarily trade between $150,000 and $250,000. The most active condo
            corridor is the West Road area on the west side of Harrison, where well-maintained
            owner-occupied communities have established themselves over the past two decades. A
            recent listing at 10502 West Rd Unit 50 offered a 2-bedroom, 2-bathroom unit with
            1,236 square feet at $184,900. This is a proper home, not a cramped apartment. It
            has full kitchen facilities, in-unit laundry hookups, and dedicated parking.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            HOA communities in this area handle lawn care, snow removal, and exterior building
            maintenance. That means no mowing, no shoveling, and no calls to a roofing contractor.
            For buyers whose priority is ownership without the full property management burden, that
            trade-off is compelling.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Who Buys Condos in Harrison
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Four buyer types consistently make up the condo market in Harrison:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-[#555555] font-inter">
              First-time buyers who want to stop renting and start building equity, but are not
              ready for the full cost and responsibility of a standalone home. A condo at $185,000
              with a modest HOA fee often pencils out better monthly than comparable rent in the area.
            </li>
            <li className="text-[#555555] font-inter">
              Downsizers who are moving out of a 4-bedroom house and want something smaller,
              easier, and lower-cost to maintain. Many of these buyers want to own outright or
              with a small mortgage rather than renting in retirement.
            </li>
            <li className="text-[#555555] font-inter">
              Real estate investors looking for rental properties in a market with steady demand.
              Harrison&apos;s growing population and low cost of living create consistent rental
              activity, and condos at this price point can produce reasonable returns.
            </li>
            <li className="text-[#555555] font-inter">
              Buyers relocating from urban markets in Cincinnati or elsewhere who are accustomed
              to condo-style ownership and want to bring that lifestyle to a more suburban
              community with less expense.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Things to Review Before Buying a Condo
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Buying a condo involves a few extra due diligence steps that single-family home purchases
            do not require. Before making an offer, it is worth reviewing the HOA financial
            statements to confirm the association is well-funded, checking the rules around rentals
            if you plan to use the property as an investment, and understanding what the monthly HOA
            fee covers and what it does not.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor has helped buyers navigate condo purchases throughout the Harrison area
            and can walk you through the specific documents and questions to ask before you
            commit to a unit. Harrison&apos;s overall cost of living is 11.7% below the US average,
            so your living expenses beyond the mortgage or HOA tend to be lower here than in
            comparable communities closer to Cincinnati.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-wide max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What condos are for sale in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Harrison Ohio has condo communities primarily along the West Road corridor. Recent
                listings include 10502 West Rd Unit 50, a 2-bedroom, 2-bathroom condo with 1,236
                square feet listed at $184,900. The inventory in Harrison&apos;s condo market is
                limited compared to the single-family home market, so working with a local agent
                who monitors new listings closely is important.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How much do condos cost in Harrison OH?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Condos in Harrison Ohio typically range from $150,000 to $250,000 depending on
                size, location, condition, and HOA fees. Two-bedroom, two-bathroom units in the
                1,200 to 1,400 square foot range have recently listed in the $180,000 to $210,000
                range. HOA fees vary by community and cover exterior maintenance, lawn care, and
                snow removal.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                Are condos a good investment in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Harrison condos can be a solid investment for the right buyer. The area has a
                growing population of 13,460 with steady rental demand. Condos appeal to first-time
                buyers, downsizers, and renters who want to own, which supports a broad pool of
                future buyers when you sell. Pricing, HOA health, and location within the community
                all affect long-term performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Find a Condo in Harrison Ohio
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Condo inventory moves quickly at this price point. Let Scott Windsor know what you
            are looking for so he can alert you when the right unit comes available.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/harrison-ohio-condos"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
