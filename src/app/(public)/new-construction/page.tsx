import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { CheckCircle, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "New Construction Homes Harrison OH 2026 | Scott Windsor",
  description:
    "Explore new construction in Harrison OH from Ryan Homes, Drees Homes & M/I Homes. Scott Windsor helps buyers navigate new builds at no extra cost.",
  keywords: [
    "new construction homes harrison ohio",
    "ryan homes harrison ohio",
    "drees homes trailhead harrison ohio",
    "whitewater trails harrison ohio",
    "sedona reserve harrison ohio",
    "new homes harrison ohio 2026",
    "trailhead denali harrison ohio",
    "harrison ohio new construction 2026",
  ],
};

export default function NewConstructionPage() {
  return (
    <PublicLayout>
      <div className="bg-navy pt-28 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">New Construction</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                New Construction Homes in Harrison Ohio
              </h1>
              <p className="text-white/70 text-lg font-inter leading-relaxed mb-6">
                Harrison Ohio is one of Southwest Ohio&apos;s fastest-growing markets for
                new construction, with communities from Ryan Homes and Drees Homes
                offering modern floor plans starting in the low-$300s.
              </p>
              <div className="bg-white/10 border border-white/20 p-5 mb-6">
                <p className="text-[#FF6B00] font-bold font-inter mb-1 text-sm uppercase tracking-wide">Important for Buyers</p>
                <p className="text-white/80 text-sm font-inter leading-relaxed">
                  Working with a buyer&apos;s agent on new construction costs you nothing &mdash;
                  the builder pays Scott&apos;s commission. And unlike going directly to the
                  builder&apos;s sales office, Scott negotiates on your behalf and protects
                  your interests through every step.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-2xl">
              <LeadForm
                formType="new_construction"
                sourcePage="/new-construction"
                title="Get New Construction Info"
                subtitle="Scott will send you current floor plans, pricing, and availability."
                showMessage
                ctaText="Get Details & Pricing"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ryan Homes */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="label-gold mb-3">National Builder &middot; Harrison Ohio</p>
          <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Ryan Homes Communities</h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-10 max-w-2xl">
            Ryan Homes has established two communities in Harrison Ohio, Whitewater Trails and Sedona Reserve, offering single-family homes with modern finishes and flexible floor plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Whitewater Trails",
                tagline: "Adjacent to Miami Whitewater Forest",
                priceRange: "From the low $300s",
                highlights: ["Single family homes", "Modern open floor plans", "2-car garages standard", "Close to trails and parks", "Southwest Local School District", "Quick access to I-74"],
                body: "Whitewater Trails is Ryan Homes' flagship Harrison community, situated near the entrance to Miami Whitewater Forest. Buyers get new construction quality with the bonus of immediate access to 4,000+ acres of parks, trails, and green space. Floor plans range from 3&ndash;5 bedrooms.",
              },
              {
                name: "Sedona Reserve",
                tagline: "Spacious lots in a growing community",
                priceRange: "From the mid $300s",
                highlights: ["Larger lot sizes available", "Multiple elevation options", "Energy-efficient construction", "10-year structural warranty", "Flex room and loft options", "Established neighborhood feel"],
                body: "Sedona Reserve offers Ryan Homes' newest floor plans in a community designed for families who want space. Slightly larger lots than Whitewater Trails, with more flexibility on customization. Popular with buyers relocating from Cincinnati who want more land without sacrificing convenience.",
              },
            ].map((community) => (
              <div key={community.name} className="border border-gray-200 overflow-hidden">
                <div className="bg-navy p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-[#FF6B00]" />
                    <div>
                      <h3 className="font-playfair font-bold text-white text-xl">{community.name}</h3>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider font-inter">{community.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[#FF6B00] font-playfair font-bold text-lg">{community.priceRange}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-inter text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: community.body }} />
                  <ul className="space-y-2">
                    {community.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-gray-700 font-inter">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drees Homes */}
      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <p className="label-gold mb-3">Regional Builder &middot; Trailhead Harrison Ohio</p>
          <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Drees Homes: Trailhead Community</h2>
          <p className="text-gray-600 font-inter leading-relaxed mb-10 max-w-2xl">
            Drees Homes is a Cincinnati-area regional builder known for quality construction and design flexibility. Their Trailhead community in Harrison offers elevated floor plans with more customization than typical production builders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Trailhead Denali",
                priceRange: "From the mid $300s",
                sqft: "2,100&ndash;2,800+ sqft",
                body: "The Denali is Drees Homes&apos; most popular floor plan in Trailhead, a two-story home with open kitchen/great room concept, flex space, and owner&apos;s suite on the main floor option. Perfect for families who want space to spread out with a layout that still feels connected.",
                features: ["Main floor owner's suite option", "Open kitchen/great room", "2&ndash;4 car garage options", "Covered porch standard", "Drees design center customization"],
              },
              {
                name: "Trailhead Arches",
                priceRange: "From the upper $300s",
                sqft: "2,400&ndash;3,200+ sqft",
                body: "The Arches is Drees Homes&apos; larger floor plan offering, a full two-story with bonus room options, larger bedrooms, and a more traditional exterior elevation. Popular with larger families and buyers who want the space for a home office or playroom.",
                features: ["Bonus room / loft options", "4&ndash;5 bedroom configurations", "3-car garage available", "Optional finished basement", "Larger lot selections available"],
              },
            ].map((plan) => (
              <div key={plan.name} className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-[#2D3A2D] p-6">
                  <h3 className="font-playfair font-bold text-white text-xl mb-1">{plan.name}</h3>
                  <div className="flex gap-4 text-xs font-inter">
                    <span className="text-[#FF6B00] font-semibold">{plan.priceRange}</span>
                    <span className="text-white/60" dangerouslySetInnerHTML={{ __html: plan.sqft }} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-inter text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: plan.body }} />
                  <ul className="space-y-2">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 font-inter">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: f }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Scott for New Construction */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Why It Matters</p>
              <h2 className="font-playfair text-3xl font-bold text-white mb-6">
                Working with Scott on New Construction Costs You Nothing and Protects You from Everything
              </h2>
              <p className="text-white/70 font-inter leading-relaxed mb-6">
                The builder&apos;s sales agent works for the builder. Scott works for you. That distinction matters, and it costs you nothing, because the builder pays Scott&apos;s commission regardless of whether you have representation.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Contract Review", body: "Builder contracts heavily favor the builder. Scott reads every line and flags issues before you sign." },
                  { title: "Negotiation", body: "Upgrades, lot premiums, closing cost contributions: Scott negotiates these even when builder's agents say they can't." },
                  { title: "Inspection Coordination", body: "New construction should still be inspected. Scott coordinates independent inspectors at the pre-drywall and final stages." },
                  { title: "Timeline Management", body: "Builds run long. Scott manages communication with the builder and protects your earnest money if timelines slip." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white font-inter mb-0.5">{title}</p>
                      <p className="text-white/60 text-sm font-inter">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8">
              <LeadForm
                formType="new_construction_inquiry"
                sourcePage="/new-construction"
                title="Get Current New Construction Info"
                subtitle="Scott will share current availability, pricing, and lot maps from Ryan and Drees Homes communities."
                showMessage
                ctaText="Send Me New Construction Info"
              />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
