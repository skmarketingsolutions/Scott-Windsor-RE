import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "North Bend Ohio Homes for Sale | Scott Windsor",
  description:
    "Find homes for sale in North Bend Ohio. Browse listings with local Southwest Ohio broker Scott Windsor at Align Right Realty Infinity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is North Bend Ohio known for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North Bend Ohio is known as the birthplace and burial place of President William Henry Harrison, the ninth President of the United States. The William Henry Harrison Tomb State Memorial is located there. Beyond its historical significance, North Bend is known for its Ohio River setting, scenic views, and rural character with larger lots and properties than are typical in surrounding suburban Harrison neighborhoods.",
      },
    },
    {
      "@type": "Question",
      name: "How much do homes cost in North Bend Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median home price in North Bend Ohio is $333,399. Homes here tend to have more land and character than newer construction in the area, which reflects the rural and historic nature of the community. The price range runs from smaller homes under $250,000 to larger estate properties that command premium prices for their Ohio River views and acreage.",
      },
    },
    {
      "@type": "Question",
      name: "Is North Bend Ohio near Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. North Bend Ohio is approximately 20 miles west of downtown Cincinnati. Via I-74 and local roads, the commute to Cincinnati takes approximately 25 to 30 minutes. North Bend is about 10 miles east of Harrison, putting it between Harrison and the city along the Ohio River corridor.",
      },
    },
  ],
};

export default function NorthBendOhio() {
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
            North Bend OH Real Estate
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Homes for Sale in North Bend Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            A historic Ohio River community with scenic views, larger lots, and a character
            that suburban neighborhoods simply cannot replicate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            North Bend Ohio is a historic Ohio River community with a profile unlike any other
            in the greater Cincinnati area. It is the birthplace and burial place of President
            William Henry Harrison, the ninth President of the United States, and the William
            Henry Harrison Tomb State Memorial draws visitors from across the region. For
            residents, that history is part of the backdrop of daily life in a community that
            still feels genuinely distinct from its suburban neighbors.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            The Real Estate Character of North Bend
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            With a median home price of $333,399, North Bend offers something that is
            increasingly rare in the Cincinnati metro: homes with genuine land and character at
            accessible prices. The properties here tend to have more square footage of lot than
            newer construction, and many offer Ohio River views or ridge-top vistas that simply
            do not exist in flat-grid subdivisions. Buyers who have spent time touring standard
            suburban homes and felt something was missing often find it in North Bend.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The housing stock in North Bend runs from smaller older homes under $250,000 to
            larger estate-style properties that command premium prices for their settings. The
            community does not have the new construction density of Harrison proper, which means
            inventory is more limited but also more varied. Each property tends to have its own
            character rather than being one of many similar floor plans built in the same year.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Who Buys in North Bend
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The buyers Scott sees in North Bend tend to share certain preferences. They want
            something different from the standard suburban product. They value privacy, land, and
            a location that feels rural or semi-rural without being genuinely remote. Many are
            willing to accept a slightly longer commute in exchange for a property that has
            views, acreage, or architectural character that they cannot find at the same price
            closer to Cincinnati.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Outdoor enthusiasts find North Bend particularly appealing given the proximity to
            the Ohio River and to Miami Whitewater Forest a few miles to the west. The natural
            setting of the community is its strongest selling point, and buyers who prioritize
            that tend to be very happy with their choice over time.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Location and Access
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            North Bend sits approximately 10 miles east of Harrison and about 20 miles west of
            downtown Cincinnati along the Ohio River corridor. I-74 provides the primary highway
            connection, putting downtown Cincinnati approximately 25 to 30 minutes away under
            normal conditions. CVG International Airport is reachable in approximately 30 minutes.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The commute is a real consideration for buyers comparing North Bend to Harrison
            proper, which has more direct I-74 access. For buyers whose work is in western
            Hamilton County or eastern Indiana, the difference is minimal. For buyers commuting
            daily to central Cincinnati, the extra 10 minutes each way is a trade-off worth
            evaluating against the lifestyle benefits of the location.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Schools and Daily Life
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            North Bend is served by Southwest Local School District, the same district covering
            Harrison and Cleves. Southwest Local ranks in the top 30% of Ohio schools with a
            94% graduation rate. The community has a small-town character with proximity to
            Cleves and Harrison for everyday shopping and services. North Bend is not the right
            choice for buyers who want walkable urban amenities, but for those who want space,
            history, and natural beauty, it offers something genuinely different.
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
                What is North Bend Ohio known for?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                North Bend Ohio is known as the birthplace and burial place of President William
                Henry Harrison, the ninth President of the United States. Beyond its historical
                significance, North Bend is known for its Ohio River setting, scenic views, and
                rural character with larger lots and properties than are typical in surrounding
                suburban Harrison neighborhoods.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How much do homes cost in North Bend Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The median home price in North Bend Ohio is $333,399. Homes here tend to have
                more land and character than newer construction in the area, reflecting the rural
                and historic nature of the community. The price range runs from smaller homes
                under $250,000 to larger estate properties commanding premium prices for Ohio
                River views and acreage.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                Is North Bend Ohio near Cincinnati?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Yes. North Bend Ohio is approximately 20 miles west of downtown Cincinnati. Via
                I-74 and local roads, the commute to Cincinnati takes approximately 25 to 30
                minutes. North Bend is about 10 miles east of Harrison, putting it between
                Harrison and the city along the Ohio River corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Find Your North Bend Property
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor serves buyers throughout the Ohio River corridor, including North Bend,
            Cleves, and Harrison. Reach out to discuss what North Bend has available right now.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/north-bend-ohio"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
