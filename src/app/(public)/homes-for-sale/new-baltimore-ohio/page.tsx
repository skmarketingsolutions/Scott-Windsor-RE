import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "New Baltimore Ohio Homes for Sale | Scott Windsor",
  description:
    "Browse homes for sale in New Baltimore Ohio. Rural acreage and estate properties near Harrison OH. Scott Windsor, Align Right Realty Infinity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there much housing in New Baltimore Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Baltimore is a small rural community in Hamilton County with limited housing inventory at any given time. Properties turn over slowly because buyers who purchase here tend to stay. The appeal is the land and privacy, not a high volume of sales. When homes do come available, they often attract serious buyers quickly because estate and acreage properties in Southwest Ohio at reasonable prices are genuinely rare.",
      },
    },
    {
      "@type": "Question",
      name: "What type of homes are in New Baltimore Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Baltimore properties are primarily estate-style homes and rural properties with larger lot sizes. You will find older farmhouses on multiple acres, ranch homes with significant yard space, and custom-built residences that simply could not be replicated on a standard suburban lot. This is not a neighborhood of tightly spaced single-family homes. The character is genuinely rural, with properties offering the kind of separation from neighbors that suburban buyers rarely find at comparable price points.",
      },
    },
    {
      "@type": "Question",
      name: "How far is New Baltimore from Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Baltimore is located southeast of Harrison in Hamilton County, roughly 10 to 15 minutes by car depending on the specific address. Harrison's retail corridor, downtown DORA District, and I-74 access are all within easy reach. Cincinnati is approximately 30 to 35 minutes from most New Baltimore addresses via I-74.",
      },
    },
  ],
};

export default function NewBaltimoreOhioPage() {
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
            Rural Hamilton County
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Homes for Sale in New Baltimore Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Estate properties, acreage, and rural living southeast of Harrison. More land per
            dollar than anywhere else in Southwest Ohio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            New Baltimore is a small rural Hamilton County community located southeast of
            Harrison. It attracts buyers who want estate-style properties, larger lots, and
            country living while remaining within reach of Cincinnati and Harrison. Properties
            here typically offer more land than anything available inside Harrison proper,
            making New Baltimore a genuine alternative for buyers who have been priced out of
            acreage elsewhere in Southwest Ohio.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The area has a genuine rural character with minimal commercial development. That
            is by design. Buyers come here specifically because it does not feel like a
            subdivision. The roads are quieter, the lots are larger, and the pace is different
            from even the most relaxed Harrison neighborhood.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Pricing in New Baltimore
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Pricing in New Baltimore tends to run above the Harrison median for equivalent
            house sizes, and the reason is land. A 2,000-square-foot home on a half-acre lot
            in Harrison will typically sell for less than a comparable home on three acres in
            New Baltimore. Buyers are paying for the acreage, the separation, and the
            lifestyle. For buyers who want that, the value is real. For buyers who are simply
            looking for square footage, there are more efficient options closer to town.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison&apos;s median home price runs between $277,859 and $384,950 depending on
            property type and condition. New Baltimore properties with meaningful acreage
            commonly land above that range. If you have a specific budget and want to
            understand what is realistic in New Baltimore versus Harrison proper, that is
            exactly the kind of conversation Scott Windsor has with buyers every week.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            What New Baltimore Buyers Are Looking For
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The buyers Scott works with in New Baltimore tend to fall into a few clear
            categories. Some want hobby farm potential: a few acres, maybe a barn or outbuilding,
            room for animals or a large garden. Others simply want privacy that is impossible to
            achieve in a subdivision. A third group is drawn by the investment angle: rural land
            values in Southwest Ohio have appreciated steadily, and buyers who purchased New
            Baltimore properties five to ten years ago have seen that reflected in current
            appraisals.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Whatever the motivation, the common thread is buyers who want something that feels
            meaningfully different from standard suburban living. New Baltimore delivers that,
            and the proximity to Harrison means you are not giving up access to schools, retail,
            and I-74 in exchange for that lifestyle.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Working with Scott Windsor in New Baltimore
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor covers the New Baltimore area as part of his Southwest Ohio service
            territory. He has 24 years of history in this part of Hamilton County, and that
            matters when you are evaluating rural properties. Acreage transactions involve
            different considerations than standard home sales: septic systems, well water,
            flood zone status, and easements all require attention that a generalist agent
            may not flag. Scott knows what to look for and how to protect buyers in these
            transactions.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Sellers in New Baltimore also benefit from Scott&apos;s network. Rural properties
            require targeted marketing to reach the right buyer pool. Scott reaches Cincinnati
            metro buyers who are specifically searching for acreage and privacy, not just buyers
            browsing standard suburban inventory. If you are considering selling, a free
            comparative market analysis from Scott will show you exactly where your property
            stands in today&apos;s market.
          </p>

          <div className="mt-10">
            <Link
              href="/homes-for-sale/harrison-ohio-with-acreage"
              className="text-[#1A1A1A] font-semibold font-inter underline underline-offset-4 hover:text-[#555555] transition-colors"
            >
              View Harrison Ohio Homes with Acreage
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
                Is there much housing in New Baltimore Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                New Baltimore is a small rural community with limited housing inventory at any
                given time. Properties turn over slowly because buyers who purchase here tend
                to stay. When homes do come available, they attract serious buyers quickly
                because estate and acreage properties in Southwest Ohio at reasonable prices
                are genuinely rare.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What type of homes are in New Baltimore Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                New Baltimore properties are primarily estate-style homes and rural properties
                with larger lot sizes. You will find older farmhouses on multiple acres, ranch
                homes with significant yard space, and custom-built residences on parcels that
                could not be replicated in a standard suburban setting. This is not a
                neighborhood of tightly spaced single-family homes. The character is genuinely
                rural, with real separation between properties.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How far is New Baltimore from Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                New Baltimore is located southeast of Harrison in Hamilton County, roughly 10
                to 15 minutes by car depending on the specific address. Harrison&apos;s retail
                corridor, downtown DORA District, and I-74 access are all within easy reach.
                Cincinnati is approximately 30 to 35 minutes from most New Baltimore addresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Find Your Rural Property in New Baltimore
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor knows this area personally and can help you find acreage, estate
            homes, and rural properties that never make it to the public search portals. Reach
            out today to start the conversation.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/new-baltimore-ohio"
            ctaText="Contact Scott About New Baltimore"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
