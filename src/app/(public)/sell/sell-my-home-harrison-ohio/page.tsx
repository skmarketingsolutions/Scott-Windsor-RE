import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Sell My Home Harrison Ohio | Free CMA Scott Windsor",
  description:
    "Ready to sell your home in Harrison Ohio? Get a free market analysis from local broker Scott Windsor at Align Right Realty Infinity. Call 513-307-6449.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I sell my home fast in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The single most important factor in selling quickly is correct pricing from day one. Homes in Harrison that are priced accurately based on current sold comps go under contract faster and attract better offers. Professional photography, MLS exposure, social media marketing, and agent-to-agent outreach all accelerate the timeline. Homes in Harrison are currently averaging 43 days on market. With the right pricing and presentation, many properties sell faster than that. Overpriced homes linger and often end up selling for less than they would have with a correct original price.",
      },
    },
    {
      "@type": "Question",
      name: "What is my Harrison Ohio home worth in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrison Ohio home values in 2026 range from a median of $277,859 to $384,950 depending on property type, condition, location, and square footage. Homes are currently selling at 98.4% of asking price when priced correctly. The most accurate way to determine your specific home's value is a comparative market analysis based on actual sold properties from the last 90 days in your immediate neighborhood. Scott Windsor provides free CMAs for Harrison homeowners and can have a number to you within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to sell a house in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The current average days on market in Harrison Ohio is 43 days from list date to accepted offer. Closing typically adds another 30 to 45 days depending on the buyer's financing type. Total time from listing to keys in hand is typically 75 to 90 days for a well-priced home. Homes listed in April, which is the peak selling month based on historical volume, tend to move faster than properties listed in slower months like November or January.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a realtor to sell my home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You are not legally required to use a realtor, but the data consistently shows that represented sellers net more money even after paying commission. A local broker like Scott Windsor brings MLS access, professional marketing, negotiation experience, and a network of active buyers and buyer agents that individual sellers cannot replicate. In a market where homes sell at 98.4% of asking, the difference between correct and incorrect pricing is thousands of dollars. Scott offers a free consultation so you can understand the numbers before committing to anything.",
      },
    },
  ],
};

export default function SellMyHomeHarrisonOhioPage() {
  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#2C2C2C] pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">
            Sell Your Harrison OH Home
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Sell My Home in Harrison Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Harrison homes are selling at 98.4% of asking price with an average of 43 days
            on market. Get a free CMA from local broker Scott Windsor and know exactly what
            your home is worth before you list.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Selling a home in Harrison Ohio is not complicated when you have the right
            information and the right agent. The market is active. Homes are selling at 98.4%
            of asking price, which means a well-priced, well-presented property is going to
            attract real offers from motivated buyers. The average days on market is 43 days,
            which is competitive but not frantic. You have time to prepare, but you also need
            to be ready to move when the right offer arrives.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            April is the peak selling season in Harrison based on historical sales volume.
            If you are considering listing in the spring, the preparation work starts now.
            A free CMA from Scott Windsor will show you exactly where your home fits in
            the current market and what you can realistically expect to net after closing costs.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Pricing Correctly From Day One
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Correct pricing is the single most critical factor in a successful home sale. It
            sounds simple, but it is where sellers most often leave money on the table. Overpriced
            homes sit. When a home sits, buyers assume something is wrong. Price reductions signal
            desperation and attract low offers. The best outcome in any market is a correctly
            priced home that generates competition among buyers in the first two weeks on the
            market.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor has sold homes in Harrison for years and knows which streets and
            neighborhoods command premium prices versus which require more aggressive pricing.
            Two similar homes on different streets can have very different sale prices because
            of factors that only show up in hyperlocal sales data. That knowledge is what
            separates a local broker from someone running comparable sales on a national
            aggregator.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            How Scott Markets Harrison Homes
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott&apos;s marketing approach covers every channel that matters in this market.
            Professional photography is the starting point. Listings with professional photos
            generate significantly more online views and more showings than listings with
            phone camera images, and online views are where buyers make their first decision
            about whether to schedule a showing.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            MLS listing puts your home in front of every buyer&apos;s agent in Southwest Ohio.
            Social media exposure reaches buyers who are not actively searching but become
            interested when they see the right property. Scott&apos;s local network of buyers
            and agents, built over 24 years in this community, means your listing is seen by
            people who are specifically interested in Harrison before it even hits the public
            portals.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Why a Local Broker Matters
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor has lived in and served this community for 24 years. He spent that
            time as a Harrison firefighter, responding to every part of this city and knowing
            it at a level that cannot be replicated from a suburban office in Blue Ash or
            Anderson Township. That depth of local knowledge translates directly into better
            pricing decisions, smarter negotiating, and a smoother transaction from listing
            to close.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            As broker and owner of Align Right Realty Infinity, Scott does not hand you off
            to a junior agent. You work directly with him. That consistency matters when
            negotiations get complex, inspection issues arise, or the appraisal comes in
            at an unexpected number. Scott has seen every scenario and knows how to protect
            your interests at every stage.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Ready to understand what your home is worth in today&apos;s market? Visit the{" "}
            <Link
              href="/sell/home-value-harrison-ohio"
              className="text-[#1A1A1A] font-semibold underline underline-offset-4 hover:text-[#555555] transition-colors"
            >
              free home value tool
            </Link>{" "}
            or reach out to Scott directly at 513-307-6449.
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
                How do I sell my home fast in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Correct pricing from day one is the most important factor. Homes in Harrison
                that are priced accurately based on current sold comps go under contract faster
                and attract better offers. Professional photography, MLS exposure, and Scott&apos;s
                local buyer network all accelerate the timeline. The current average is 43 days
                on market, with well-priced homes in peak months performing better than that.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What is my Harrison Ohio home worth in 2026?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Harrison home values in 2026 range from a median of $277,859 to $384,950.
                Homes are selling at 98.4% of asking when priced correctly. The most accurate
                way to determine your home&apos;s specific value is a comparative market analysis
                from actual sold comps in your neighborhood. Scott Windsor provides free CMAs
                and can have a number to you within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How long does it take to sell a house in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The current average days on market is 43 days from list to accepted offer.
                Closing adds another 30 to 45 days. Total time from listing to closing is
                typically 75 to 90 days for a well-priced home. April listings, which
                coincide with Harrison&apos;s peak selling season, tend to move faster.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                Do I need a realtor to sell my home in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                You are not legally required to, but represented sellers consistently net
                more money even after paying commission. A local broker brings MLS access,
                professional marketing, negotiation experience, and a buyer network that
                individual sellers cannot replicate. Scott offers a free consultation so
                you can evaluate the numbers before committing to anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Get Your Free Home Valuation
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor delivers a real CMA based on actual sold data in your neighborhood,
            not an algorithm. Find out what your Harrison home is worth in today&apos;s market
            and what it takes to sell it at the right price.
          </p>
          <LeadForm
            formType="seller"
            sourcePage="/sell/sell-my-home-harrison-ohio"
            ctaText="Get My Free Valuation"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
