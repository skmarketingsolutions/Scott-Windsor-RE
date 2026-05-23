import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "West Harrison Ohio Homes for Sale | Scott Windsor",
  description:
    "Search homes for sale in West Harrison Ohio. Expert local guidance from Scott Windsor, Align Right Realty Infinity Harrison OH.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is West Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "West Harrison Ohio sits on the Indiana-Ohio state border immediately west of Harrison proper. The two communities share US Route 52 as their primary connector and blend seamlessly in terms of daily life and character. West Harrison is in Hamilton County, Ohio, and is part of the broader Harrison area served by Southwest Local Schools.",
      },
    },
    {
      "@type": "Question",
      name: "How far is West Harrison from Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "West Harrison Ohio is approximately 35 to 40 minutes from downtown Cincinnati via I-74. It sits just west of Harrison, which itself is about 30 minutes from the city. The I-74 corridor provides the primary highway connection, making the commute straightforward despite the greater distance.",
      },
    },
    {
      "@type": "Question",
      name: "What are home prices in West Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median home price in West Harrison Ohio is $365,136. The residential character is similar to Harrison proper, primarily single-family homes and newer construction. That median is notably above Harrison's lower range, reflecting the mix of housing stock and the appeal of the border community location for buyers with Indiana employment connections.",
      },
    },
  ],
};

export default function WestHarrisonOhio() {
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
            West Harrison OH Real Estate
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Homes for Sale in West Harrison Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            On the Indiana-Ohio border, West Harrison extends the Harrison market westward with
            solid suburban value and easy access to both states.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            West Harrison Ohio sits on the Indiana-Ohio state border immediately west of
            Harrison proper. The two communities blend seamlessly along US Route 52, and for
            most practical purposes they function as a single residential area. The state line
            is more of a geographic marker than a meaningful divide in terms of daily life,
            services, or community character.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Home Prices and Housing Stock
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The median home price in West Harrison is $365,136, which places it comfortably
            above Harrison&apos;s lower range and reflects solid demand for this border community.
            The housing character here is primarily single-family homes, a mix of newer
            construction and established residential neighborhoods that have grown up along
            the US Route 52 corridor over the past several decades.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            West Harrison does not have the same concentration of large-scale new construction
            communities that Harrison proper has seen in recent years with Ryan Homes and Drees
            Homes. The inventory tends toward existing homes, giving buyers who prefer an
            established neighborhood more options here than in the newer developments to the east.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            The Indiana-Ohio Border Advantage
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            West Harrison&apos;s location on the state border is its most distinctive feature for
            buyers with Indiana employment connections. The eastern Indiana corridor includes
            communities like Brookville and Metamora, and buyers who work in that direction find
            West Harrison particularly attractive because it bridges both states without
            committing fully to either. I-74 runs directly through this corridor, connecting
            West Harrison to both Indianapolis to the north and Cincinnati to the east.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            For buyers whose work is entirely Ohio-based, the distinction between West Harrison
            and Harrison proper is minimal. The same I-74 access applies, the school district
            is the same, and the daily experience of living in either community is similar.
            The choice often comes down to specific properties and price points rather than
            meaningful lifestyle differences.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Schools and Daily Life
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            West Harrison is served by Southwest Local School District on the Ohio side of the
            border. Southwest Local ranks in the top 30% of Ohio schools with a 94% graduation
            rate. Families with children benefit from the same strong school infrastructure that
            makes Harrison proper attractive, without any adjustment for the border location.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Shopping, dining, and services are a short drive east into Harrison, where The
            District DORA and local businesses serve the broader community. The cost of living
            advantage that characterizes Harrison carries through to West Harrison, with overall
            costs running meaningfully below the US average in this part of Hamilton County.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Working with Scott Windsor in West Harrison
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor serves buyers throughout the Harrison and West Harrison market. His
            knowledge of the area goes back over 24 years, covering both the established
            neighborhoods of West Harrison and the newer developments that have reshaped
            Harrison proper. If you are comparing properties on both sides of the border or
            trying to understand how the two communities differ in practical terms, Scott can
            give you a grounded perspective based on what buyers have actually experienced
            in each location.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Homes in the Harrison area sell at an average of 98.4% of asking price with 43 days
            on market. Working with a local agent who knows the inventory helps you move quickly
            when the right property appears.
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
                Where is West Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                West Harrison Ohio sits on the Indiana-Ohio state border immediately west of
                Harrison proper. The two communities share US Route 52 as their primary
                connector and blend seamlessly in terms of daily life and character. West Harrison
                is in Hamilton County, Ohio, and is served by Southwest Local Schools.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                How far is West Harrison from Cincinnati?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                West Harrison Ohio is approximately 35 to 40 minutes from downtown Cincinnati
                via I-74. It sits just west of Harrison, which itself is about 30 minutes from
                the city. The I-74 corridor provides the primary highway connection, making the
                commute straightforward despite the greater distance.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What are home prices in West Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The median home price in West Harrison Ohio is $365,136. The residential
                character is primarily single-family homes and established neighborhoods. That
                median reflects the appeal of the border community location for buyers with
                Indiana employment connections and those who prefer existing homes over new
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Search West Harrison Homes with a Local Expert
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor serves the full Harrison and West Harrison market. Connect with him to
            find the right property on either side of the border.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/west-harrison-ohio"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
