import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Home Value Harrison Ohio 2026 | Free CMA Scott Windsor",
  description:
    "Find out what your Harrison Ohio home is worth in 2026. Get a free comparative market analysis from local real estate agent Scott Windsor at Align Right Realty Infinity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is Zillow for Harrison Ohio homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zillow's Zestimate for Harrison Ohio homes is frequently off by 5 to 15 percent, and sometimes more. The algorithm works from public data: tax records, square footage, and broad regional trends. It cannot account for recent updates to your kitchen or bathrooms, a finished basement that did not get permitted, a lot that backs to open space, or what buyers in your specific neighborhood are actually offering right now. A human CMA from a local broker who knows Harrison street by street will always outperform an algorithm when it comes to pricing accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average home price in Harrison OH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Harrison Ohio median home price in 2026 runs between $277,859 and $384,950 depending on property type, location, and condition. Homes are selling at 98.4% of asking price on average, meaning correctly priced homes are generating offers very close to list price. The median price per square foot is approximately $181. New construction from Ryan Homes and Drees Homes is driving the upper end of the market, with Drees starting at $420,100 and going past $600,000 at the Trailhead community.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to sell a home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "April is the peak selling month in Harrison based on historical sales volume data. Spring listings in general, from March through June, consistently attract more buyers than fall or winter listings. Buyer motivation is highest in spring as families try to close and move before the school year ends. If you are considering selling, listing in early April puts you at the exact peak of buyer activity in the Harrison market.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free home valuation in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Scott Windsor at 513-307-6449 or submit a request through this page. Scott will review actual sold comps from the last 90 days in your specific neighborhood, evaluate active competition, assess your home's condition and updates, and deliver a realistic price range within 24 hours. There is no cost and no obligation. The CMA is yours to use however you choose, whether you decide to list now, wait, or simply want to understand your equity position.",
      },
    },
  ],
};

export default function HomeValueHarrisonOhioPage() {
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
            Free Harrison OH Home Valuation
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            What Is My Home Worth in Harrison Ohio?
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Zillow cannot tell you what your Harrison home is worth. A local real estate agent with 24
            years in this market can. Get a real number based on actual sold data, not an
            algorithm.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            If you have looked up your Harrison Ohio home value on Zillow or a similar site,
            the number you got is probably wrong. Not slightly wrong. Potentially wrong by
            tens of thousands of dollars. Algorithm-based estimates miss by 5 to 15 percent
            in suburban markets like Harrison because they cannot account for the factors
            that actually drive buyer decisions at the street and neighborhood level.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Zillow does not know about the kitchen you renovated two years ago. It does not
            know that your street sells faster than the next street over because of how it
            backs to greenspace. It does not know what buyers are actually offering right now,
            this month, in your specific part of Harrison. Those details are the difference
            between a number you can plan around and a number that misleads you.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            The Harrison Market in 2026
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Here is what the current data shows. Harrison homes are selling at 98.4% of
            asking price when priced correctly, which means the market is rewarding accurate
            pricing rather than aggressive overpricing. The average days on market is 43 days,
            which is active but not so fast that sellers have no time to prepare. The median
            home price runs between $277,859 and $384,950 depending on property type and
            condition. Median price per square foot is approximately $181.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            April is the best time to sell based on historical sales volume data. More buyers
            are actively searching and more transactions close in April than in any other
            month. If you are targeting an April list date, the preparation and CMA
            conversation should happen in February or March so you have time to address
            any condition issues before hitting the market.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            How Scott Prices a Harrison Home
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott&apos;s pricing process is methodical and grounded in current data. It starts
            with actual sold comps from the last 90 days in your immediate neighborhood. Not
            listings, not pending sales, but closed transactions where a buyer and seller
            agreed on a number and went through the full process. Those are the only comps
            that matter.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            From there, Scott evaluates active competition: what other sellers are currently
            asking, how long they have been on the market, and whether their pricing is
            realistic given what comparable homes have actually sold for. He then assesses
            your home&apos;s condition and updates, identifying where your property sits
            relative to those comps and what adjustments are warranted.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Finally, Scott applies 24 years of local market knowledge from Harrison. He
            knows which neighborhoods command premium prices, which streets have sold
            consistently above their neighbors, and where buyers are willing to stretch
            versus where they become more cautious. That local layer is what separates
            a genuine CMA from a number generated by a national algorithm.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            What You Get With a Free CMA
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            A free CMA from Scott Windsor takes less than 24 hours and gives you a realistic
            price range you can actually plan around. You will know your likely list price,
            what you can expect to net after closing costs, and what the current market
            timeline looks like for a home in your condition and price range.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            There is no obligation attached to the CMA. Some homeowners use it to decide
            whether now is the right time to sell. Others use it to understand their equity
            position for refinancing or estate planning purposes. Whatever your reason for
            wanting to know, Scott will give you a straight answer based on real data.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Ready to list? Visit the{" "}
            <Link
              href="/sell/sell-my-home-harrison-ohio"
              className="text-[#1A1A1A] font-semibold underline underline-offset-4 hover:text-[#555555] transition-colors"
            >
              complete seller guide for Harrison Ohio
            </Link>{" "}
            to understand what the full selling process looks like from start to close.
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
                How accurate is Zillow for Harrison Ohio homes?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Zillow&apos;s Zestimate frequently misses by 5 to 15 percent in Harrison.
                The algorithm cannot account for recent renovations, specific lot features,
                or what buyers are actually offering in your neighborhood this month. A local
                CMA based on recent sold comps will always be more accurate than an automated
                estimate.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What is the average home price in Harrison OH?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The Harrison Ohio median home price in 2026 runs between $277,859 and
                $384,950. Homes are selling at 98.4% of asking when priced correctly.
                The median price per square foot is approximately $181. New construction
                from Drees Homes starts at $420,100 and represents the upper end of the
                market.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                When is the best time to sell a home in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                April is the peak selling month in Harrison based on historical sales volume.
                Spring listings from March through June consistently attract more buyers than
                fall or winter listings. If you are targeting a spring list date, starting the
                CMA and preparation process in February puts you in the best position.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How do I get a free home valuation in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Submit a request on this page or call Scott Windsor directly at 513-307-6449.
                Scott reviews actual sold comps from the last 90 days in your neighborhood
                and delivers a realistic price range within 24 hours. No cost, no obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Find Out What Your Home Is Worth
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor delivers a real CMA based on current sold data in your Harrison
            neighborhood. No algorithm, no guesswork. A real number you can plan around,
            within 24 hours, at no cost to you.
          </p>
          <LeadForm
            formType="valuation"
            sourcePage="/sell/home-value-harrison-ohio"
            ctaText="Get My Free Valuation"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
