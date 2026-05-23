import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Realtor Harrison Ohio | Scott Windsor Align Right",
  description:
    "Looking for a trusted realtor in Harrison Ohio? Scott Windsor is a local broker with 24 years in the Harrison community. Call 513-307-6449 today.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best realtor in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scott Windsor is the broker/owner of Align Right Realty Infinity and one of the most knowledgeable real estate professionals in Harrison Ohio. He spent 24 years as a firefighter for the City of Harrison before transitioning to real estate full time. That background gives him a depth of local knowledge that most agents simply do not have. He has grown into a multi-million dollar producing agent serving Harrison and Southwest Ohio.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a real estate agent in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most important thing when choosing an agent in Harrison Ohio is local knowledge. You want someone who knows the neighborhoods, understands local price dynamics, and has a track record of closed transactions in the area. Scott Windsor can be reached at 513-307-6449 or through the contact form on this site.",
      },
    },
    {
      "@type": "Question",
      name: "What does Scott Windsor specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scott Windsor specializes in buyer representation, seller listing and marketing, new construction buyer representation, and relocation assistance for buyers moving to Harrison Ohio from outside the area. He serves Harrison OH, Cleves OH, North Bend OH, New Baltimore OH, Whitewater Township OH, Anderson Township OH, Sharonville OH, and broader Hamilton County and Butler County markets.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Scott Windsor been a realtor in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scott Windsor has been deeply rooted in the Harrison Ohio community for over 24 years as a firefighter with the Harrison Fire Department before moving into real estate full time as broker/owner of Align Right Realty Infinity. His real estate career has grown into a multi-million dollar producing practice serving Harrison and Southwest Ohio.",
      },
    },
  ],
};

export default function RealtorHarrisonOhioPage() {
  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#2C2C2C] pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">
            Your Harrison OH Real Estate Expert
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Realtor in Harrison Ohio: Scott Windsor
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            If you are looking for a realtor in Harrison Ohio who actually knows this community from the inside out, Scott Windsor is the right call. He did not move here to sell real estate. He has spent over two decades living and working in Harrison as a firefighter before transitioning to real estate full time. That background is the foundation of everything he does.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            24 Years in Harrison Before Real Estate
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor spent 24 years as a firefighter for the City of Harrison Fire Department before transitioning to real estate. During those two-plus decades, he drove every street in Harrison, knew every neighborhood, and was part of the community in a way that goes far deeper than most real estate agents who work a market from a distance.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            That background transfers directly to real estate. He knows which blocks hold value and which ones have struggled. He knows the neighborhoods that are improving and why. He knows how to price a home correctly in every zip code he serves because he has seen these communities change over time in ways that no amount of data analysis fully captures.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Broker/Owner of Align Right Realty Infinity
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott is the broker and owner of Align Right Realty Infinity. He has grown the practice into a multi-million dollar producing real estate business serving Harrison, Southwest Ohio, and surrounding communities. As a broker/owner rather than a typical agent, he has the licensing, experience, and accountability that comes with running his own firm.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            That distinction matters to buyers and sellers. You are working directly with the principal of the firm, not an agent who passes your file up the chain when things get complicated. Scott handles your transaction personally.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Services
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#555555] font-inter mb-6">
            <li>
              <strong className="text-[#1A1A1A] font-semibold">Buyer Representation:</strong> Scott represents buyers at no cost to them. His fee is paid by the seller. He works exclusively in your interest: pricing analysis, home selection, inspection guidance, and contract negotiation.
            </li>
            <li>
              <strong className="text-[#1A1A1A] font-semibold">Seller Listing and Marketing:</strong> Comprehensive listing services including professional photography, MLS exposure, digital marketing, and strategic pricing to get the most for your home.
            </li>
            <li>
              <strong className="text-[#1A1A1A] font-semibold">New Construction Buyer Representation:</strong> Scott can represent you when purchasing from Ryan Homes, Drees Homes, or any other builder in the Harrison area. Builder representatives work for the builder. You need your own representation.
            </li>
            <li>
              <strong className="text-[#1A1A1A] font-semibold">Relocation:</strong> Buyers moving to Harrison from outside the area receive detailed neighborhood guidance, virtual tours, and market analysis so they can make a confident decision before arriving.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Areas Served
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#555555] font-inter mb-6">
            <li>Harrison OH (45030)</li>
            <li>Cleves OH</li>
            <li>North Bend OH</li>
            <li>New Baltimore OH</li>
            <li>Whitewater Township OH</li>
            <li>Anderson Township OH</li>
            <li>Sharonville OH</li>
            <li>Hamilton County OH</li>
            <li>Butler County OH</li>
            <li>Southwest Ohio broadly</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Harrison Ohio Market at a Glance
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison&apos;s real estate market in 2026 is active and consistent. The median home price runs $277,859 to $384,950 depending on the area and property type. Homes average 43 days on market and sell at 98.4% of asking price. That data tells you this is a market where correctly priced homes move and sellers are not leaving much on the table. 258 homes sold in the most recent tracked period.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            New construction is a strong part of the market with Ryan Homes building from $319,990 in Parks of Whitewater and Drees Homes from $420,100 in Trailhead. The resale market covers every price range from entry-level condos at $184,900 to custom and upscale single-family homes above $500,000.
          </p>

          <div className="bg-[#F5F5F5] p-6 mt-8">
            <p className="font-semibold text-[#1A1A1A] font-inter text-lg mb-2">Contact Scott Windsor</p>
            <p className="text-[#555555] font-inter mb-1">
              Phone: <a href="tel:5133076449" className="text-[#1A1A1A] font-semibold">513-307-6449</a>
            </p>
            <p className="text-[#555555] font-inter mb-4">
              Email: <a href="mailto:windsorinfinity@gmail.com" className="text-[#1A1A1A] font-semibold">windsorinfinity@gmail.com</a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#2C2C2C] text-white font-inter font-semibold text-sm px-6 py-3 hover:bg-[#1A1A1A] transition-colors"
              >
                Send a Message
              </Link>
              <Link
                href="/about"
                className="inline-block border border-[#2C2C2C] text-[#2C2C2C] font-inter font-semibold text-sm px-6 py-3 hover:bg-[#2C2C2C] hover:text-white transition-colors"
              >
                Learn More About Scott
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-wide max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                Who is the best realtor in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter">
                Scott Windsor is the broker/owner of Align Right Realty Infinity. He spent 24 years as a firefighter in Harrison before transitioning to real estate full time, making him one of the most knowledgeable real estate professionals in the area. He has grown into a multi-million dollar producing agent serving Harrison and Southwest Ohio.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                How do I find a real estate agent in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter">
                Choose an agent with genuine local knowledge and a track record in Harrison specifically. Scott Windsor can be reached directly at 513-307-6449 or through the contact form on this site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                What does Scott Windsor specialize in?
              </h3>
              <p className="text-[#555555] font-inter">
                Scott specializes in buyer representation, seller listing and marketing, new construction buyer representation, and relocation for buyers moving to Harrison from outside the area. He serves Harrison, Cleves, North Bend, and broader Hamilton County and Butler County.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                How long has Scott Windsor been a realtor in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter">
                Scott has been rooted in the Harrison community for over 24 years as a firefighter before moving into real estate full time as broker/owner of Align Right Realty Infinity. His real estate practice has grown into a multi-million dollar producing business serving Harrison and Southwest Ohio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Ready to Work with a Local Expert?
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Call Scott Windsor at 513-307-6449 or send a message below. He responds promptly and will give you honest, direct answers about the Harrison market.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/realtor-harrison-ohio"
            ctaText="Contact Scott Windsor"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
