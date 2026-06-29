export const dynamic = "force-dynamic";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { prisma } from "@/lib/prisma";
import ListingCard from "@/components/ui/ListingCard";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Your Harrison Ohio Home Fast | Scott Windsor Realtor",
  description:
    "Ready to sell your Harrison OH home? Scott Windsor — top producing agent offering free valuation & proven marketing strategy. Call 513-307-6449.",
  keywords: [
    "sell my home harrison ohio",
    "list my house harrison ohio",
    "realtor to sell my home harrison oh",
    "best way to sell house harrison ohio",
    "how to sell home harrison ohio",
    "listing agent harrison ohio",
  ],
};

async function getRecentSold() {
  return prisma.listing.findMany({ where: { status: "Sold" }, orderBy: { soldDate: "desc" }, take: 3 });
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I sell my home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by getting a free comparative market analysis to understand your home's value. Then work with a local broker like Scott Windsor who knows the Harrison market, prices it correctly, and markets it to qualified buyers through MLS, online platforms, and his local network.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to sell a home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "April is historically the best month to sell a home in Harrison Ohio based on sales volume data. Listing in late February or March puts you on market for peak buyer activity in April and May.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a real estate agent charge to sell a home in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate commissions in Ohio are negotiable and typically range from 4% to 6% of the sale price. Contact Scott Windsor at 513-307-6449 to discuss his commission structure.",
      },
    },
  ],
};

export default async function SellPage() {
  const sold = await getRecentSold();

  const steps = [
    { num: "01", title: "Free Home Valuation", body: "Scott analyzes current sold comps, active competition, and market trends to give you an accurate, honest price. Not a number designed to win the listing." },
    { num: "02", title: "Strategic Pricing", body: "Priced too high and buyers pass. Priced right and you get multiple offers. Scott has the data to find the number that maximizes your sale price while minimizing days on market." },
    { num: "03", title: "Professional Preparation", body: "Scott advises on what to fix, stage, or leave alone. Not every improvement adds value, and he'll tell you where to spend money and where not to." },
    { num: "04", title: "Professional Marketing", body: "MLS listing, professional photography, social media campaigns, targeted buyer outreach, and Scott's personal network of buyers and agents who know his listings sell." },
    { num: "05", title: "Showings & Offers", body: "Scott manages showings, communicates feedback, and keeps you informed. When offers come in, you get his honest take, not just \"take the highest one.\"" },
    { num: "06", title: "Negotiation", body: "24 years of staying calm under pressure. Scott negotiates firmly on your behalf: price, contingencies, closing timeline, and everything in between." },
    { num: "07", title: "Closing", body: "Scott manages the entire closing process: inspections, appraisals, title, and lender timelines, so you don't have to. You show up, sign, and move forward." },
  ];

  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-navy pt-28 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">Sell Your Home</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Sell Your Home in Harrison Ohio
              </h1>
              <p className="text-white/70 text-lg font-inter leading-relaxed mb-8">
                Scott Windsor has sold millions of dollars in Harrison Ohio real estate.
                His approach is direct, data-driven, and focused on one thing: getting
                you the best result possible.
              </p>
              <ul className="space-y-3">
                {["Free, no-obligation home valuation", "Proven marketing strategy", "24-year local market expertise", "Direct broker access, not an assistant"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/80 font-inter">
                    <CheckCircle className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-2xl">
              <div className="bg-[#FF6B00] px-8 py-5">
                <h2 className="font-playfair text-xl font-bold text-[#2C2C2C]">Start Your Home Sale</h2>
                <p className="text-[#2C2C2C]/60 text-sm font-inter mt-0.5">Scott will follow up personally, usually same day.</p>
              </div>
              <div className="px-8 py-8">
                <LeadForm formType="seller_valuation" sourcePage="/sell" showAddress showMessage ctaText="Start My Home Sale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Step Process */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="label-gold mb-3">Scott's Process</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-12 max-w-xl">
            7 Steps to Selling Your Harrison Ohio Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <span className="font-playfair font-bold text-[#1A1A1A] text-lg">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="bg-[#F5F5F5] py-4 border-b border-gray-200">
        <div className="container-wide flex flex-wrap gap-6 text-sm font-inter">
          <span className="text-gray-500">Related:</span>
          <Link href="/harrison-ohio-real-estate-market" className="text-[#2C2C2C] hover:text-[#FF6B00] font-semibold transition-colors">
            Harrison Ohio Market Report 2026
          </Link>
          <Link href="/sell/home-value-harrison-ohio" className="text-[#2C2C2C] hover:text-[#FF6B00] font-semibold transition-colors">
            Free Home Valuation Harrison Ohio
          </Link>
        </div>
      </div>

      {/* What Scott Does Differently */}
      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-gold mb-3">Why Scott</p>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-6">What Scott Does Differently</h2>
              <div className="space-y-5">
                {[
                  { title: "He Lives Here", body: "Scott isn't sending a buyer's agent to do a walk-through. He's personally visiting your home, walking your neighborhood, and understanding the exact story your listing needs to tell." },
                  { title: "Honest Pricing", body: "Some agents price high to win the listing, then push for price reductions 30 days in. Scott prices correctly from day one: fewer days on market, less stress, better outcome." },
                  { title: "Network That Sells", body: "24 years in Harrison means knowing every agent, investor, and serious buyer in this market. Scott's listings sell because of his network before they even hit the MLS." },
                  { title: "You Talk to Scott", body: "Not an assistant, not a showing coordinator. You have Scott's direct number and he picks up. That's how it works." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy font-inter mb-1">{title}</p>
                      <p className="text-gray-600 font-inter text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy p-8 md:p-10">
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Proven Results</p>
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Recent Sales</h3>
              {sold.length > 0 ? (
                <div className="space-y-4">
                  {sold.map(l => (
                    <div key={l.id} className="border border-white/10 p-4 text-white">
                      <p className="font-semibold font-inter">{l.address}, {l.city}</p>
                      <p className="text-[#FF6B00] font-playfair font-bold text-lg">${l.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/60 font-inter text-sm">Recent sold listings coming soon.</p>
              )}
              <a href="/sold" className="btn-gold w-full text-center mt-6 block">View All Sold Homes</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-wide max-w-3xl">
          <p className="label-gold mb-3">Common Questions</p>
          <h2 className="font-playfair text-3xl font-bold text-[#2C2C2C] mb-10">
            Selling Your Home in Harrison Ohio
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I sell my home in Harrison Ohio?",
                a: "Start by getting a free comparative market analysis to understand your home's value. Then work with a local broker like Scott Windsor who knows the Harrison market, prices it correctly, and markets it to qualified buyers through MLS, online platforms, and his local network.",
              },
              {
                q: "What is the best time to sell a home in Harrison Ohio?",
                a: "April is historically the best month to sell a home in Harrison Ohio based on sales volume data. Listing in late February or March puts you on market for peak buyer activity in April and May.",
              },
              {
                q: "How much does a real estate agent charge to sell a home in Harrison Ohio?",
                a: "Real estate commissions in Ohio are negotiable and typically range from 4% to 6% of the sale price. Contact Scott Windsor at 513-307-6449 to discuss his commission structure.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white p-6 border border-gray-100">
                <h3 className="font-playfair text-lg font-bold text-[#2C2C2C] mb-3">{item.q}</h3>
                <p className="text-gray-600 font-inter leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
