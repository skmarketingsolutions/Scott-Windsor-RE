import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "First Time Home Buyer Guide — Harrison Ohio | Scott Windsor",
  description:
    "Complete first time home buyer guide for Harrison, Ohio. Step-by-step process, local lender info, and free consultation with Scott Windsor — broker with 24 years in Harrison.",
  keywords: [
    "first time home buyer harrison ohio",
    "how to buy a home harrison ohio",
    "first time buyer guide harrison oh",
    "buying first home harrison ohio 45030",
    "harrison ohio home buying process",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much do I need for a down payment in Harrison Ohio?", acceptedAnswer: { "@type": "Answer", text: "FHA loans require as little as 3.5% down, and conventional loans can go as low as 3% for first-time buyers. On a $275,000 home in Harrison Ohio, that's roughly $8,250–$9,625. VA loans and USDA loans (if eligible) can be 0% down. Contact Scott for referrals to local lenders who specialize in first-time buyers." } },
    { "@type": "Question", name: "What is the home buying process in Ohio?", acceptedAnswer: { "@type": "Answer", text: "The general process: get pre-approved → search homes with Scott → make an offer → inspection → appraisal → final walkthrough → closing. From pre-approval to keys in hand typically takes 30–60 days in Harrison Ohio." } },
    { "@type": "Question", name: "Is Harrison Ohio a good place to buy a first home?", acceptedAnswer: { "@type": "Answer", text: "Yes. Harrison offers excellent value for first-time buyers. Prices are significantly lower than many Cincinnati suburbs, Southwest Local Schools are strong, and the community is welcoming. Starter homes in the $180,000–$250,000 range are available." } },
  ],
};

const steps = [
  { num: "1", title: "Get Pre-Approved", body: "Before you look at homes, talk to a lender. Pre-approval tells you your real budget and makes your offer competitive. Scott can refer you to trusted local lenders who specialize in first-time buyers." },
  { num: "2", title: "Talk to Scott", body: "Your agent matters. As a broker/owner who knows every neighborhood in Harrison personally, Scott will make sure you look at the right homes and avoid the wrong ones." },
  { num: "3", title: "Define Your Must-Haves", body: "Bedrooms, location, school district, commute to Cincinnati. Scott helps you sort what matters from what's nice-to-have, so you don't fall in love with a house that doesn't fit." },
  { num: "4", title: "Search & Tour Homes", body: "Scott shows you homes that match your criteria, including some not yet on the market. He'll point out what's priced right, what's overpriced, and what needs work." },
  { num: "5", title: "Make an Offer", body: "Scott writes a competitive, clean offer. He'll advise on price, contingencies, and how to structure the offer to win, especially in a competitive situation." },
  { num: "6", title: "Home Inspection", body: "Always get an inspection. Scott can refer qualified inspectors. He'll help you understand the report and what to ask the seller to address." },
  { num: "7", title: "Appraisal & Final Steps", body: "Your lender will order an appraisal. If it comes in low, Scott knows how to negotiate. He manages the timeline so your closing stays on schedule." },
  { num: "8", title: "Closing Day", body: "You sign a stack of documents, pay closing costs (typically 2–5% of the purchase price), and get your keys. Scott is there with you the whole way." },
];

export default function FirstTimeBuyersPage() {
  return (
    <PublicLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Buyer's Guide</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            First Time Home Buyer Guide: Harrison Ohio
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            Buying your first home is one of the biggest decisions you&apos;ll make. Scott will walk you through every step. No jargon, no pressure.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="label-gold mb-3">Step By Step</p>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-10">The Home Buying Process in Harrison Ohio</h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy flex items-center justify-center">
                      <span className="font-playfair font-bold text-[#E8F840] text-lg">{step.num}</span>
                    </div>
                    <div className="flex-1 border-b border-gray-100 pb-8">
                      <h3 className="font-playfair font-bold text-navy text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600 font-inter leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="font-playfair text-2xl font-bold text-navy mb-6">First Time Buyer FAQ</h2>
                <div className="space-y-6">
                  {[
                    { q: "How much do I need for a down payment in Harrison Ohio?", a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3% for first-time buyers. On a $275,000 home, that's roughly $8,250–$9,625. VA and USDA loans may require 0% down if you qualify. Scott can connect you with local lenders who specialize in first-time buyers." },
                    { q: "What are closing costs in Ohio?", a: "Expect 2–5% of the purchase price. On a $250,000 home, that's $5,000–$12,500. Costs include loan origination, title insurance, appraisal, escrow, and prepaid items. Some sellers will contribute to closing costs as part of the negotiation, so ask Scott about this." },
                    { q: "Should I buy in Harrison or rent in Cincinnati?", a: "In most cases, buying in Harrison makes more financial sense than renting closer to Cincinnati. Home prices are lower, you're building equity instead of paying someone else's mortgage, and the commute on I-74 is manageable. Scott can run the numbers for your specific situation." },
                    { q: "How long does it take to buy a home?", a: "From pre-approval to closing is typically 30–60 days. Finding the right home can take anywhere from a few weeks to a few months depending on the market and how specific your needs are." },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-offwhite p-6">
                      <h3 className="font-playfair font-bold text-navy mb-2">{q}</h3>
                      <p className="text-gray-600 font-inter text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-navy p-8 shadow-xl sticky top-24">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Talk to Scott About Buying Your First Home</h3>
                <p className="text-white/60 text-sm font-inter mb-6">Free consultation. No obligation. Just honest advice from someone who knows this market.</p>
                <LeadForm formType="first_time_buyer" sourcePage="/first-time-buyers" showMessage ctaText="Talk to Scott" dark />
              </div>

              <div className="bg-offwhite p-6">
                <p className="label-gold mb-3">Why Harrison Ohio</p>
                <h3 className="font-playfair font-bold text-navy text-lg mb-4">Great for First-Time Buyers</h3>
                <ul className="space-y-3">
                  {[
                    "Significantly lower prices vs. Cincinnati suburbs",
                    "Starter homes from $180,000–$250,000",
                    "Strong Southwest Local School District",
                    "Under 30 min commute to Cincinnati via I-74",
                    "Growing community with new construction",
                    "Lower property taxes than Hamilton Co. average",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 font-inter">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
