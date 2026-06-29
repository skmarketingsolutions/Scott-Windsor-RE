import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Harrison Ohio New Construction Homes | Ryan & Drees Homes",
  description:
    "Explore new construction in Harrison OH with Scott Windsor. Ryan Homes & Drees Homes available. A buyer's agent costs nothing — call Scott today.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is new construction in Harrison Ohio a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrison Ohio new construction has performed well. The area is growing, with the population increasing by 3,000 residents from 2010 to 2020. Southwest Local Schools rank in the top 30% of Ohio with a 94% graduation rate, which supports resale value. New construction in Harrison is priced meaningfully below comparable new builds on the east and north sides of Cincinnati, which provides a margin of value at purchase.",
      },
    },
    {
      "@type": "Question",
      name: "What new home builders are in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three major builders are actively building in the Harrison area: Ryan Homes, building in Whitewater Trails, Sedona Reserve, and Parks of Whitewater; Drees Homes, building in the Trailhead community with plans ranging from $420,100 to over $605,900; and M/I Homes, which is active in the broader Cincinnati area including communities accessible from Harrison.",
      },
    },
    {
      "@type": "Question",
      name: "How much do new homes cost in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New homes in Harrison Ohio start at $319,990 for Ryan Homes entry-level plans in Sedona Reserve. Ryan Homes Whitewater Trails ranges from approximately $350,990 to $379,990 depending on the plan. Drees Homes at Trailhead starts at $420,100 for the Arches KENAI patio home and reaches $605,900 for the Denali BENNETT plan with 4 bedrooms, 4 baths, and 3,282 square feet.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a realtor for new construction in Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do not need one, but you should strongly consider using one. The builder's sales agent represents the builder's interests, not yours. A buyer's agent costs you nothing on new construction because the builder pays the commission. Scott Windsor negotiates on your behalf for upgrades, closing cost contributions, and contract terms that the builder's agent has no incentive to offer you.",
      },
    },
  ],
};

export default function NewConstructionHarrisonOhio() {
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
            New Homes Harrison OH 2026
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            New Construction Homes for Sale in Harrison Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Three major builders are actively building in Harrison right now. Here is what each
            offers and why having a buyer&apos;s agent costs you nothing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison Ohio is one of the most active new construction markets in the greater
            Cincinnati area in 2026. Three builders are putting up homes here right now, offering
            a range from entry-level townhomes to custom-spec single-family homes over $600,000.
            The combination of affordable land, I-74 access, and strong school district makes
            Harrison a logical choice for builders who want buyers with good fundamentals.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Ryan Homes: Three Active Communities
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Ryan Homes is the most active builder in Harrison with three communities currently
            selling. Whitewater Trails is their flagship Harrison community, with plans including
            the Aviano at $350,990, the Columbia with Finished Basement at $371,990, and the
            Powell at $379,990. These are single-family homes with modern floor plans built for
            the way families actually live.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Sedona Reserve offers Ryan&apos;s entry point at $319,990, making it one of the most
            affordable new construction options in the Cincinnati metro area. For buyers who want
            a new home without a luxury budget, this is the place to start.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Parks of Whitewater is Ryan&apos;s third Harrison community, offering the Redwood and
            Columbia plans adjacent to Miami Whitewater Forest. Buyers here get the benefit of
            proximity to nearly 5,000 acres of parkland along with access to the community pool.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Drees Homes at Trailhead
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Drees Homes serves the upper end of the Harrison new construction market with two
            product lines at Trailhead. The Arches series offers patio homes starting with the
            KENAI plan at $420,100, featuring 3 bedrooms, 2 baths, and 1,778 square feet in a
            maintenance-friendly layout. For buyers wanting a larger home with premium finishes,
            the Denali BENNETT plan starts at $605,900 and delivers 4 bedrooms, 4 baths, and
            3,282 square feet. Drees is a well-regarded Cincinnati-area builder with a track
            record of quality construction and responsive warranty service.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            M/I Homes
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            M/I Homes is also building in the broader Cincinnati area with communities accessible
            from Harrison. If you are open to the greater West Cincinnati corridor, M/I Homes
            expands your inventory of new construction options. Scott can walk you through what
            M/I currently has available based on your price range and preferences.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            The Most Important Thing About New Construction
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Working with a buyer&apos;s agent on new construction costs you nothing. The builder
            pays the commission. This is not a nuance. The builder&apos;s sales agent in the
            model home works for the builder. Their job is to sell you the house at the best price
            for the builder, with the fewest concessions. They have no incentive to negotiate
            upgrades or closing cost contributions on your behalf because that comes directly out
            of the builder&apos;s margin.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor negotiates on your behalf. That means pushing for upgrade credits,
            closing cost contributions, and contract terms that protect your interests. He knows
            what each builder in Harrison has offered recent buyers and what they are willing to
            do in the current market. That knowledge is yours for free when you bring a buyer&apos;s
            agent to your first visit.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            New Construction and Long-Term Value
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison&apos;s population grew by 3,000 from 2010 to 2020 and continues to grow.
            Southwest Local Schools rank in the top 30% of Ohio schools with a 94% graduation
            rate. Homes in Harrison are selling at 98.4% of asking price on average. The
            fundamentals that make a neighborhood hold value over time are present here.
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
                Is new construction in Harrison Ohio a good investment?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Harrison Ohio new construction has performed well. The area is growing, with the
                population increasing by 3,000 residents from 2010 to 2020. Southwest Local
                Schools rank in the top 30% of Ohio with a 94% graduation rate, which supports
                resale value. New construction in Harrison is priced meaningfully below comparable
                new builds on the east and north sides of Cincinnati, which provides a margin of
                value at purchase.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What new home builders are in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Three major builders are actively building in the Harrison area: Ryan Homes,
                building in Whitewater Trails, Sedona Reserve, and Parks of Whitewater; Drees
                Homes, building in the Trailhead community with plans from $420,100 to over
                $605,900; and M/I Homes, which is active in the broader Cincinnati area including
                communities accessible from Harrison.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How much do new homes cost in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                New homes in Harrison Ohio start at $319,990 for Ryan Homes entry-level plans in
                Sedona Reserve. Ryan Homes Whitewater Trails ranges from approximately $350,990
                to $379,990. Drees Homes at Trailhead starts at $420,100 and reaches $605,900 for
                the Denali BENNETT plan with 4 bedrooms, 4 baths, and 3,282 square feet.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                Do I need a realtor for new construction in Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                You do not need one, but you should strongly consider using one. The builder&apos;s
                sales agent represents the builder&apos;s interests, not yours. A buyer&apos;s
                agent costs you nothing on new construction because the builder pays the
                commission. Scott Windsor negotiates upgrades, closing cost contributions, and
                contract terms that the builder&apos;s agent has no incentive to offer you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Tour New Construction in Harrison at No Cost to You
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor represents buyers at Ryan Homes, Drees Homes, and M/I Homes communities
            in Harrison. The builder pays his fee. You get an experienced negotiator on your side.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/new-construction-harrison-ohio"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
