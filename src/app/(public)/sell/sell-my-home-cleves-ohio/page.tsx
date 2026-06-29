import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Sell My Home Cleves Ohio | Scott Windsor Realtor",
  description:
    "Selling your home in Cleves Ohio? Get a free home valuation from local expert Scott Windsor at Align Right Realty Infinity. Serving 45002.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is my Cleves Ohio home worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median home price in Cleves Ohio is currently $369,565. Your specific home's value depends on square footage, condition, lot size, updates, and what comparable properties have actually sold for in your neighborhood in the last 90 days. Online estimators like Zillow frequently miss by 5 to 15 percent because they cannot account for these local factors. A free comparative market analysis from Scott Windsor gives you a real number based on current sold data.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sell my home in Cleves Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selling in Cleves starts with accurate pricing based on current sold comps in the 45002 zip code. From there, professional photography, MLS listing, and targeted marketing to the Cincinnati metro buyer pool are the keys to generating strong offers. Cleves is appealing to Cincinnati commuters who want a small-town feel at a price point below what comparable homes cost closer to the city. Scott Windsor markets Cleves properties to that full buyer pool, not just buyers already searching in Cleves.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to sell a house in Cleves OH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Days on market in the Cleves and broader Southwest Ohio market are similar to the Harrison average of 43 days from listing to accepted offer. Homes priced correctly and marketed professionally to the full Cincinnati metro buyer pool move faster than the average. Seasonal timing matters: spring listings, particularly in April, historically see more buyer activity than winter listings. Closing typically takes another 30 to 45 days after an accepted offer.",
      },
    },
  ],
};

export default function SellMyHomeClevesOhioPage() {
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
            Sell Your Cleves OH Home
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Sell My Home in Cleves Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Cleves median home price is $369,565. Get a free market analysis from Scott
            Windsor, Southwest Ohio&apos;s local real estate agent, and find out exactly what your
            home is worth in today&apos;s market.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Cleves Ohio sits in Hamilton County just east of Harrison, with a median home
            price of $369,565 and strong demand from buyers looking for Southwest Ohio value
            close to Cincinnati. If you are thinking about selling your Cleves home, the
            market fundamentals are working in your favor. Buyers in this price range are
            motivated, and Cleves offers something genuinely appealing to the Cincinnati
            commuter who wants a small-town feel without sacrificing access to the city.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor covers the Cleves market as part of his Southwest Ohio service
            area. He is not a Cincinnati broker who occasionally handles a Cleves listing.
            This is his market, and his knowledge of local pricing nuances, neighborhood
            differences within the 45002 zip code, and the specific buyer profile that
            Cleves attracts directly improves your outcome as a seller.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            The Cleves Seller Advantage
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Selling in Cleves at $369,565 median puts you in a sweet spot. Your home is
            priced attractively relative to comparable properties in Anderson Township and
            other eastside Cincinnati suburbs, which means you are pulling buyers from a
            wide geographic area. Buyers who have been outbid or priced out of tighter
            Cincinnati markets are actively looking at Cleves as a legitimate alternative
            that delivers real value.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            That expanded buyer pool is exactly what you want as a seller. More qualified
            buyers means more competition for your home, which supports pricing close to
            asking. Scott&apos;s marketing approach is built around reaching the full
            Cincinnati metropolitan area buyer pool, not just buyers who happen to be
            already searching in Cleves.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            How Scott Markets Cleves Homes
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Every Cleves listing Scott takes gets professional photography as the foundation.
            Buyers make their first decision about whether to schedule a showing based entirely
            on online listing photos. Professional images generate more views, more showings,
            and better first impressions before a buyer ever walks through the door.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            MLS listing ensures your home reaches every active buyer&apos;s agent in Southwest
            Ohio. Social media marketing pushes your listing to buyers who are not yet actively
            searching but respond when they see a property that matches what they have been
            looking for. Scott&apos;s personal network, built over 24 years in this community,
            adds another layer of exposure through direct agent-to-agent outreach.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Cleves is particularly attractive to Cincinnati commuters who use I-74 daily. That
            is a defined and reachable buyer segment. Scott&apos;s marketing speaks directly
            to that audience, positioning Cleves properties as the right combination of price,
            community, and commute convenience.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Your Free Cleves CMA
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            A comparative market analysis from Scott is based on actual sold properties in
            your specific area of Cleves from the last 90 days. It accounts for your
            home&apos;s square footage, condition, updates, lot, and how it compares to
            what buyers have actually paid recently. You will get a realistic price range,
            not a number padded to win your listing.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott delivers CMAs within 24 hours. There is no obligation and no cost. It is
            the right starting point whether you are ready to list today or still deciding
            whether the timing makes sense for your situation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/sell/home-value-harrison-ohio"
              className="text-[#1A1A1A] font-semibold font-inter underline underline-offset-4 hover:text-[#555555] transition-colors"
            >
              Understand Home Valuations in Southwest Ohio
            </Link>
          </div>
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
                What is my Cleves Ohio home worth?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The Cleves median home price is $369,565. Your specific home&apos;s value
                depends on square footage, condition, updates, and what comparable properties
                have sold for in your area in the last 90 days. Online estimators frequently
                miss by 5 to 15 percent because they cannot account for local factors. A free
                CMA from Scott Windsor gives you a real number based on current sold data.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How do I sell my home in Cleves Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Start with accurate pricing based on current sold comps in the 45002 zip code.
                From there, professional photography, MLS listing, and targeted marketing to
                the Cincinnati metro buyer pool are the keys to strong offers. Scott Windsor
                markets Cleves properties to that full buyer audience, including Cincinnati
                commuters who are a natural fit for the Cleves lifestyle.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How long does it take to sell a house in Cleves OH?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Days on market in Cleves and the broader Southwest Ohio area are similar to
                the Harrison average of 43 days from listing to accepted offer. Correctly
                priced homes marketed to the full Cincinnati buyer pool move faster. Spring
                listings, especially in April, historically see stronger buyer activity.
                Closing adds another 30 to 45 days after an accepted offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Get Your Free Cleves Home Valuation
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor knows the Cleves market and can tell you exactly what your home
            is worth based on real sold data, not an algorithm. Free, no obligation, delivered
            within 24 hours.
          </p>
          <LeadForm
            formType="seller"
            sourcePage="/sell/sell-my-home-cleves-ohio"
            ctaText="Get My Free Valuation"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
