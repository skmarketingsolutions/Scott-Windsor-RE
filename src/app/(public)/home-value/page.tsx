import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { TrendingUp, Clock, ShieldCheck, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "What's My Home Worth in Harrison Ohio? | Free Home Valuation",
  description:
    "Get a free home valuation from Scott Windsor — Harrison Ohio real estate broker with 24 years of local market expertise. No obligation. Response within 24 hours.",
  keywords: [
    "what is my home worth harrison ohio",
    "home valuation harrison ohio",
    "how much is my house worth harrison ohio",
    "free home valuation harrison oh 45030",
    "harrison ohio housing market 2026",
    "zillow harrison ohio estimate",
  ],
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
        text: "Zillow Zestimates can be off by 5% to 15% in Harrison Ohio because they cannot account for neighborhood nuances, recent updates, or hyperlocal market conditions. A free CMA from Scott Windsor gives you a far more accurate number.",
      },
    },
    {
      "@type": "Question",
      name: "What is my home worth in Harrison Ohio in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrison Ohio homes are currently selling at approximately 98.4% of asking price with a median of $277,859 to $384,950. For an accurate value of your specific home, request a free comparative market analysis from Scott Windsor at 513-307-6449.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to sell a home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Homes in Harrison Ohio are averaging 43 days on market in 2026. Well-priced homes in desirable neighborhoods like Trailhead and Parks of Whitewater can sell faster. Pricing correctly from day one is the key to a fast sale.",
      },
    },
  ],
};

export default function HomeValuePage() {
  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#2C2C2C] pt-28 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Copy */}
            <div className="pt-4">
              <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-4">
                Free Home Valuation
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                What&apos;s Your Harrison Ohio Home Worth?
              </h1>
              <p className="text-white/60 text-lg font-inter leading-relaxed mb-10">
                Online estimates are built on algorithms. Scott&apos;s are built on
                24 years of knowing this market personally.
              </p>

              {/* Trust badges */}
              <div className="flex flex-col gap-4 mb-10">
                {[
                  { icon: TrendingUp, label: "Local Market Data", sub: "Real MLS comps, not algorithms" },
                  { icon: Clock,       label: "24-Hour Response",  sub: "Scott follows up personally" },
                  { icon: ShieldCheck, label: "No Obligation",     sub: "Free, no strings attached" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#E8F840]/10 border border-[#E8F840]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#E8F840]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold font-inter leading-tight">{label}</p>
                      <p className="text-white/40 text-xs font-inter">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Market stats strip */}
              <div className="border-t border-white/10 pt-8 grid grid-cols-3 gap-4">
                {[
                  { stat: "98.4%", label: "Sale-to-list ratio" },
                  { stat: "43",    label: "Avg. days on market" },
                  { stat: "$181",  label: "Median price / sq ft" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="font-playfair text-2xl font-bold text-[#E8F840]">{stat}</p>
                    <p className="text-white/40 text-xs font-inter mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form card */}
            <div className="bg-white shadow-2xl">
              <div className="bg-[#E8F840] px-8 py-5">
                <h2 className="font-playfair text-xl font-bold text-[#2C2C2C]">
                  Get My Free Home Value
                </h2>
                <p className="text-[#2C2C2C]/60 text-sm font-inter mt-0.5">
                  Scott will follow up personally, usually same day.
                </p>
              </div>
              <div className="px-8 py-8">
                <LeadForm
                  formType="home_valuation"
                  sourcePage="/home-value"
                  showAddress
                  showMessage
                  ctaText="Get My Free Home Valuation"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Zillow is Wrong */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8F840] bg-[#2C2C2C] inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1 mb-4">
              Important for Harrison Sellers
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
              Why Zillow&apos;s Estimate Isn&apos;t Accurate
            </h2>
            <p className="text-gray-500 font-inter mt-4 max-w-xl mx-auto leading-relaxed">
              A national algorithm cannot account for what a buyer paid on your street last month,
              or what your kitchen remodel is actually worth in this neighborhood.
            </p>
          </div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {[
              {
                label: "Zillow / Online Estimates",
                title: "Algorithm-Based",
                accent: "bg-red-50",
                headerBg: "bg-red-500",
                icon: XCircle,
                iconColor: "text-white",
                items: [
                  "National data models",
                  "No local condition insight",
                  "Can miss by 5 to 15%",
                  "No neighborhood nuance",
                  "Ignores your updates",
                ],
                negative: true,
              },
              {
                label: "Scott Windsor",
                title: "Local Expert CMA",
                accent: "bg-[#2C2C2C]",
                headerBg: "bg-[#2C2C2C]",
                icon: CheckCircle,
                iconColor: "text-[#E8F840]",
                items: [
                  "Real sold comps from MLS",
                  "Current active competition",
                  "Neighborhood trends",
                  "Condition-adjusted pricing",
                  "24 years of local knowledge",
                ],
                negative: false,
                featured: true,
              },
              {
                label: "Why It Matters",
                title: "The Result",
                accent: "bg-gray-50",
                headerBg: "bg-gray-700",
                icon: CheckCircle,
                iconColor: "text-white",
                items: [
                  "Priced right on day one",
                  "Attracts serious buyers",
                  "Fewer price reductions",
                  "Faster sale timeline",
                  "More money in your pocket",
                ],
                negative: false,
              },
            ].map((col) => (
              <div key={col.title} className="flex flex-col">
                <div className={`${col.headerBg} px-6 py-4`}>
                  <p className="text-white/60 text-xs font-inter uppercase tracking-widest mb-1">{col.label}</p>
                  <h3 className="font-playfair font-bold text-white text-xl">{col.title}</h3>
                </div>
                <div className={`${col.accent} px-6 py-6 flex-1`}>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <col.icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${col.negative ? "text-red-400" : col.featured ? "text-[#E8F840]" : "text-gray-400"}`} />
                        <span className={`text-sm font-inter ${col.featured ? "text-white/80" : "text-gray-600"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs font-inter mt-4">
            On a $300,000 home, a 10% Zillow error = $30,000 mispriced. That&apos;s the cost of skipping a proper CMA.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="text-[#2C2C2C] text-xs font-bold uppercase tracking-widest font-inter mb-3 text-center">
            Common Questions
          </p>
          <h2 className="font-playfair text-3xl font-bold text-[#2C2C2C] text-center mb-10">
            Home Valuation FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How accurate is a CMA vs. a formal appraisal?",
                a: "A Comparative Market Analysis from Scott is highly accurate for pricing purposes and is what you use to decide your listing price. A formal appraisal is required by lenders during the mortgage process. Both use sold comparables, but Scott's CMA is faster, free, and specifically designed for listing strategy.",
              },
              {
                q: "What information do you need to value my home?",
                a: "Your address is the most important piece. It helps to know your square footage, bedrooms and bathrooms, year built, and any significant updates, but Scott can pull most of this from public records. The more you share, the more precise the valuation.",
              },
              {
                q: "Is Harrison Ohio a seller's market right now?",
                a: "As of 2026, Harrison Ohio homes are selling at 98.4% of asking price with 43 average days on market. Inventory remains limited in the most desirable price ranges, which continues to support seller-favorable conditions.",
              },
              {
                q: "What is the best time of year to sell in Harrison Ohio?",
                a: "April is historically the strongest month for Harrison Ohio sales volume. Listing in late February or March positions your home to capture peak spring buyer activity. That said, Scott has closed strong deals in every season.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-gray-100 p-6">
                <h3 className="font-playfair font-bold text-[#2C2C2C] text-lg mb-3">{q}</h3>
                <p className="text-gray-500 font-inter leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#2C2C2C] section-padding">
        <div className="container-wide max-w-2xl text-center">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-4">
            Ready to Know Your Number?
          </p>
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            Get Your Free Valuation Today
          </h2>
          <p className="text-white/50 font-inter mb-8 text-sm">
            No obligation. No automated report. Scott reviews your home personally and follows up same day.
          </p>
          <a
            href="tel:5133076449"
            className="inline-flex items-center gap-3 bg-[#E8F840] text-[#2C2C2C] font-bold font-inter px-8 py-4 hover:bg-white transition-colors text-sm uppercase tracking-wider"
          >
            Call 513-307-6449
          </a>
        </div>
      </section>
    </PublicLayout>
  );
}
