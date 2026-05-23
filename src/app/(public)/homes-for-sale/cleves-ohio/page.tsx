import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Cleves Ohio Homes for Sale | Scott Windsor Realtor",
  description:
    "Browse homes for sale in Cleves Ohio. Local expert Scott Windsor at Align Right Realty Infinity serves the Cleves OH 45002 market.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is Cleves Ohio from Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cleves Ohio is approximately 15 to 20 miles west of downtown Cincinnati. Via I-74, the commute to downtown Cincinnati takes approximately 20 to 25 minutes under normal conditions. Cleves sits just off I-74 along the Ohio River, giving residents straightforward highway access to Cincinnati employment and amenities.",
      },
    },
    {
      "@type": "Question",
      name: "What are home prices in Cleves Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The median home price in Cleves Ohio is $369,565. Homes in Cleves range from older village homes under $250,000 to newer construction and larger properties in the mid-$400,000s. The median reflects solid demand for this Ohio River community with its small-town character and good Cincinnati access.",
      },
    },
    {
      "@type": "Question",
      name: "Is Cleves Ohio a good place to live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cleves offers a genuine small-town community feel, walkable downtown, and Ohio River access within a reasonable commute of Cincinnati. It is served by Southwest Local School District, which ranks in the top 30% of Ohio schools with a 94% graduation rate. For buyers who value community character and a small-town lifestyle without giving up access to Cincinnati, Cleves is a strong option.",
      },
    },
  ],
};

export default function ClevesOhio() {
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
            Cleves OH Real Estate
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Homes for Sale in Cleves Ohio
          </h1>
          <p className="text-white/70 font-inter mt-4 max-w-2xl text-lg">
            A genuine Ohio River village with small-town character, Southwest Local Schools, and
            a 20-minute commute to Cincinnati.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Cleves Ohio is a charming Hamilton County village located just west of Cincinnati on
            the Ohio River. It is the kind of place that surprises buyers who have only heard
            the name. The village has a genuine downtown with local businesses, a strong sense
            of community identity, and a quiet residential character that feels distinctly
            different from the newer suburban developments that dominate the outer Cincinnati
            ring.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Home Prices and What to Expect
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The median home price in Cleves is $369,565. That number reflects the village&apos;s
            appeal to buyers who want more than a plain subdivision but are not chasing the
            extreme prices of the eastern Cincinnati suburbs. For $369,000 in Cleves, buyers
            typically find a well-maintained single-family home with a yard, often with older
            construction that has the character and lot sizes that newer builds simply cannot
            replicate.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The range in Cleves runs from older village homes that come to market under $250,000
            to newer and larger properties that approach the mid-$400,000s. Buyers willing to do
            some updating often find exceptional value in the historic village core, where
            homes on tree-lined streets have more square footage and lot size than equivalent
            dollar amounts would get in tighter Cincinnati neighborhoods.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Location and Commute
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Cleves sits along the Ohio River with I-74 access that puts downtown Cincinnati
            approximately 20 to 25 minutes east. The village is immediately west of North Bend
            and roughly 10 miles east of Harrison, making it a natural fit for buyers who work
            in Cincinnati or the western Hamilton County corridor. CVG International Airport is
            within 30 minutes via the interstate.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            US Route 50 runs through Cleves along the river, connecting the village to both
            Cincinnati to the east and Harrison to the west without requiring highway access
            for local errands. That makes daily life in Cleves feel more self-contained than
            many outer suburbs where the highway is the only option for everything.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Schools and Community
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Cleves is served by Southwest Local School District, the same district that serves
            Harrison and Whitewater Township. Southwest Local ranks in the top 30% of Ohio
            schools with a 94% graduation rate. For families, that consistency of school quality
            across the district is a meaningful factor when choosing between Cleves and
            neighboring communities.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The village has a walkable downtown area with local shops and a civic culture that
            reflects genuine community engagement. Seasonal events, local sports leagues, and
            the Ohio River setting give Cleves a sense of place that newer developments elsewhere
            in the county are still working to establish.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">
            Buying in Cleves with Scott Windsor
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Scott Windsor regularly serves buyers and sellers throughout Hamilton County,
            including Cleves and the surrounding Ohio River communities. His familiarity with
            the local market means he can give you honest guidance on which properties represent
            genuine value and which are priced above what the data supports. Whether you are
            looking for a historic village home or something newer in the surrounding area, Scott
            can help you navigate the Cleves market with the context that only comes from two
            decades of local experience.
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
                How far is Cleves Ohio from Cincinnati?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Cleves Ohio is approximately 15 to 20 miles west of downtown Cincinnati. Via
                I-74, the commute to downtown Cincinnati takes approximately 20 to 25 minutes
                under normal conditions. Cleves sits just off I-74 along the Ohio River, giving
                residents straightforward highway access to Cincinnati employment and amenities.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                What are home prices in Cleves Ohio?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                The median home price in Cleves Ohio is $369,565. Homes in Cleves range from
                older village homes under $250,000 to newer construction and larger properties
                in the mid-$400,000s. The median reflects solid demand for this Ohio River
                community with its small-town character and convenient Cincinnati access.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-[#1A1A1A] mb-2">
                Is Cleves Ohio a good place to live?
              </h3>
              <p className="text-[#555555] font-inter leading-relaxed">
                Cleves offers a genuine small-town community feel, a walkable downtown, and Ohio
                River access within a reasonable commute of Cincinnati. It is served by Southwest
                Local School District, which ranks in the top 30% of Ohio schools with a 94%
                graduation rate. For buyers who value community character without giving up
                access to Cincinnati, Cleves is a strong option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Search Cleves Ohio Homes with a Local Broker
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Scott Windsor serves buyers and sellers throughout Hamilton County, including Cleves
            and the Ohio River corridor. Reach out to start your search.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/homes-for-sale/cleves-ohio"
            ctaText="Get In Touch"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
