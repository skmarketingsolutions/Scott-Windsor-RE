import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Acreage Homes Harrison OH | Scott Windsor Realtor",
  description:
    "Find homes with land and acreage in Harrison Ohio and surrounding Whitewater Township, New Baltimore, and North Bend areas from Scott Windsor.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find homes with acreage near Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best places to search for homes with acreage near Harrison Ohio are Whitewater Township, New Baltimore, and North Bend. These communities surround Harrison and offer rural and estate-style properties with larger lot sizes, often ranging from half an acre to 10 or more acres. Harrison itself also has a sparse suburban character with some larger lots, particularly in the outer neighborhoods.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home with land cost near Harrison OH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Homes with acreage near Harrison Ohio typically range from $300,000 to $600,000 depending on the size of the home, the acreage, outbuildings, and condition. Smaller properties with a half to two acres in established neighborhoods tend to be at the lower end of that range, while larger estate or farm properties with 5 to 10 or more acres push toward or above the higher end.",
      },
    },
    {
      "@type": "Question",
      name: "What townships near Harrison Ohio have acreage properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whitewater Township is the primary township surrounding Harrison and has a mix of rural, agricultural, and estate residential properties. North Bend along the Ohio River and New Baltimore to the south also have acreage properties. These communities sit within 30 to 40 minutes of Cincinnati via I-74 and local roads, making them practical for buyers who want land without complete rural isolation.",
      },
    },
  ],
};

export default function HarrisonWithAcreage() {
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
            Acreage and Rural Properties
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Homes with Acreage for Sale in Harrison Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            Land and privacy within 30 minutes of Cincinnati. The surrounding townships offer
            what most suburbs simply cannot.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            For buyers who want space, privacy, and the feeling of rural living without actually
            moving far from Cincinnati, the Harrison area offers something unusual. The city itself
            sits 30 minutes northwest of Cincinnati via I-74, and the townships surrounding it
            still carry a genuinely rural character. Whitewater Township, New Baltimore, and North
            Bend all have homes with meaningful acreage at prices that are hard to find elsewhere
            at this distance from a major metro.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            What the Acreage Market Looks Like
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Properties with half an acre to 10-plus acres in this area typically range from
            $300,000 to $600,000. At the lower end, you are looking at an established home on
            a rural lot of one to three acres, often with a barn or outbuilding. At the higher
            end, the market opens up to estate-style properties with custom or semi-custom homes,
            larger acreage, and sometimes horse facilities, ponds, or wooded land.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Miami Whitewater Forest, nearly 5,000 acres of public land adjacent to this area,
            contributes to the outdoor character of the community and makes this part of Ohio
            genuinely appealing to buyers who want an active outdoor lifestyle. Trails, open
            water, and wildlife are essentially at your doorstep if you buy in the right spot.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Whitewater Township, New Baltimore, and North Bend
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Whitewater Township is the primary municipality surrounding Harrison and has the most
            consistent acreage inventory. Properties here range from modern homes on large rural
            lots to working small farms. New Baltimore, to the south of Harrison along the Great
            Miami River, has an older stock of homes on generous lots with a quieter, more
            established feel. North Bend, situated along the Ohio River, has its own character
            and some notable estate-quality properties.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison itself also carries what residents describe as a sparse suburban feel,
            different from the denser inner-ring suburbs closer to Cincinnati. Even homes within
            the Harrison city limits sit on larger lots than you would expect in comparable towns,
            which gives the whole area a more open, breathable quality.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Who Buys Acreage Properties in This Market
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-[#555555] font-inter">
              Horse owners and hobby farmers who need outdoor space, pasture, and outbuildings
              that simply do not exist in suburban neighborhoods.
            </li>
            <li className="text-[#555555] font-inter">
              Buyers who have spent years on a standard quarter-acre suburban lot and want genuine
              privacy, distance from neighbors, and space to breathe.
            </li>
            <li className="text-[#555555] font-inter">
              Buyers relocating from rural areas in other states who want to maintain a similar
              lifestyle while having access to Cincinnati for work, medical care, and amenities.
            </li>
            <li className="text-[#555555] font-inter">
              Buyers looking for a long-term family property with room to add a shop, a barn,
              a pool, or an additional structure over time.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Practical Considerations for Acreage Buyers
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Buying rural or semi-rural property involves due diligence steps beyond a standard
            suburban home purchase. Well and septic systems need inspection and testing. Zoning
            and deed restrictions vary by township and affect what you can do with the land.
            If horses or livestock are part of your plan, you will want to confirm that the
            property and its zoning support that use before making an offer.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor has sold properties throughout the Harrison area and surrounding
            townships and can help you navigate these details. He knows which areas have the
            right combination of character, infrastructure, and accessibility for buyers who
            want acreage without sacrificing the convenience of being near Cincinnati.
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
                Where can I find homes with acreage near Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The best places to search for homes with acreage near Harrison Ohio are Whitewater
                Township, New Baltimore, and North Bend. These communities surround Harrison and
                offer rural and estate-style properties with larger lot sizes, often ranging from
                half an acre to 10 or more acres. Harrison itself also has a sparse suburban
                character with some larger lots, particularly in the outer neighborhoods.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How much does a home with land cost near Harrison OH?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Homes with acreage near Harrison Ohio typically range from $300,000 to $600,000
                depending on the size of the home, the acreage, outbuildings, and condition.
                Smaller properties with a half to two acres tend to be at the lower end of that
                range, while larger estate or farm properties with 5 to 10 or more acres push
                toward or above the higher end.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What townships near Harrison Ohio have acreage properties?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Whitewater Township is the primary township surrounding Harrison and has a mix of
                rural, agricultural, and estate residential properties. North Bend along the Ohio
                River and New Baltimore to the south also have acreage properties. These communities
                sit within 30 to 40 minutes of Cincinnati via I-74 and local roads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Find Your Acreage Property Near Harrison
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor covers Harrison and the surrounding townships. Tell him what you are
            looking for in a rural or acreage property and he will help you find it.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/harrison-ohio-with-acreage"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
