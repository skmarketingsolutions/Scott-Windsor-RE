import { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Open Houses Harrison Ohio | Scott Windsor Realtor",
  description:
    "Find upcoming open houses in Harrison Ohio. Get notified of new open houses in 45030 from Scott Windsor at Align Right Realty Infinity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find open houses in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can find upcoming open houses in Harrison Ohio by visiting the open houses page on this site, which is updated regularly. You can also register with Scott Windsor to receive alerts when new open houses are scheduled in your target neighborhoods in 45030.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an agent to attend an open house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you do not need an agent to attend an open house. Open houses are open to the public. However, it is important to know that the listing agent present at the open house represents the seller, not you. Having your own buyer's agent attend with you, or registering your agent before visiting, means you have someone working in your interest during the transaction.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour homes without a realtor in Harrison Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can tour open houses without a realtor. For private showings on non-open house properties, you typically need to schedule through an agent. Scott Windsor offers buyer representation at no cost to buyers, so working with him to tour homes in Harrison costs you nothing and gives you professional guidance throughout the process.",
      },
    },
  ],
};

export default function HarrisonOhioOpenHousesPage() {
  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#2C2C2C] pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">
            Harrison OH Open Houses
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Open Houses in Harrison Ohio
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Attending open houses is one of the best ways to explore the Harrison Ohio market without commitment. You can walk through multiple homes in a single weekend, compare layouts and finishes, get a feel for different neighborhoods, and develop a clear sense of what your budget actually buys in this market. For buyers who are still early in the process, open houses are an invaluable step.
          </p>

          <div className="bg-[#F5F5F5] border-l-4 border-[#E8F840] p-6 mb-8">
            <p className="text-[#1A1A1A] font-semibold font-inter mb-2">View Current Open Houses</p>
            <p className="text-[#555555] font-inter mb-4">
              Browse the latest scheduled open houses in Harrison Ohio and the 45030 zip code.
            </p>
            <Link
              href="/open-houses"
              className="inline-block bg-[#2C2C2C] text-white font-inter font-semibold text-sm px-6 py-3 hover:bg-[#1A1A1A] transition-colors"
            >
              See All Open Houses
            </Link>
          </div>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            How to Find Open Houses in Harrison
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            The open houses page on this site is updated regularly as new events are scheduled. You can browse current listings and see which homes are hosting open houses this weekend or in the coming days. You can also register with Scott Windsor to receive direct alerts when new open houses are scheduled in your target neighborhoods, specific price ranges, or particular home types within 45030.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Harrison has a strong inventory of homes across all price ranges, from entry-level condos and townhomes in Stone Ridge to new construction homes in Parks of Whitewater and Trailhead. Open houses happen regularly across all categories.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            What to Look for When Touring a Home
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Open houses give you a chance to evaluate a home in ways that listing photos cannot capture. Here is what to pay attention to when you walk through:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#555555] font-inter mb-6">
            <li>Roof condition. Check for missing shingles, sagging, or obvious wear from the exterior. Ask the listing agent when the roof was last replaced.</li>
            <li>Windows. Look for fogging between panes, which indicates seal failure and reduced insulation value.</li>
            <li>Mechanicals. When were the furnace, AC, and water heater last replaced? Older systems that need replacement soon affect your true cost of ownership.</li>
            <li>Basement. Check for water staining, efflorescence on block walls, or any musty smell. These are signs of past or present moisture issues.</li>
            <li>Water pressure. Turn on a faucet or ask the agent about the water source and pressure rating.</li>
            <li>Ceilings and walls. Look for staining, cracks, or patched areas that may indicate a roof leak or settling issue.</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Tips for Getting the Most Out of Open House Visits
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Arrive early. The listing agent is most available and most willing to answer questions at the beginning of an open house before crowds arrive. This is the best time to get candid information about the property, the sellers&apos; timeline, and any known issues.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Bring a notepad or use your phone to take notes. After visiting several homes in an afternoon, the details blur together quickly. Write down what you noticed, both good and bad, for each property so you can compare them clearly later.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Take your own photos if permitted. Listing photos are professionally staged and shot. Your own photos capture what the home actually looks like and help you remember details when reviewing options at home.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Do not discuss your budget, timeline, or level of interest with the listing agent. They represent the seller, not you. Anything you share can be used in negotiations against your position.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">
            Scott Windsor Can Represent You at Any Open House at No Cost
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            This is an important point that many buyers do not know: Scott Windsor can represent you as a buyer at any open house in Harrison Ohio and it costs you absolutely nothing. His fee is paid by the seller, not the buyer, just as it is in the vast majority of real estate transactions.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            Having your own representation means someone is working in your interest, not the seller&apos;s. When you attend an open house alone and later make an offer through the listing agent, that agent has a legal obligation to the seller. Scott has a legal obligation to you. That difference matters when it comes to pricing strategy, inspection negotiations, and contract terms.
          </p>
          <p className="text-[#555555] leading-relaxed mb-4 font-inter">
            If you are planning to attend open houses in Harrison this weekend, reach out to Scott first. He can tour homes with you, give you unfiltered assessments of each property, and be ready to move quickly when you find the right one.
          </p>
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
                How do I find open houses in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter">
                Visit the{" "}
                <Link href="/open-houses" className="text-[#1A1A1A] font-semibold underline underline-offset-2">
                  open houses page
                </Link>{" "}
                on this site, which is updated regularly. You can also register with Scott Windsor to receive alerts when new open houses are scheduled in your target neighborhoods in 45030.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                Do I need an agent to attend an open house?
              </h3>
              <p className="text-[#555555] font-inter">
                No. Open houses are open to the public. However, the listing agent at the open house represents the seller. Having your own representation means someone is working in your interest during the transaction. Scott Windsor can represent you as a buyer at no cost to you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] font-inter mb-2">
                Can I tour homes without a realtor in Harrison Ohio?
              </h3>
              <p className="text-[#555555] font-inter">
                Yes, you can tour open houses without a realtor. For private showings, you typically need to schedule through an agent. Scott Windsor&apos;s buyer representation costs you nothing and gives you professional guidance throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2C2C2C]">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-playfair text-2xl font-bold text-white mb-4">
            Get Notified of New Open Houses
          </h2>
          <p className="text-white/70 font-inter mb-8">
            Register with Scott Windsor and receive alerts when open houses are scheduled in your target neighborhoods in Harrison Ohio.
          </p>
          <LeadForm
            formType="buyer"
            sourcePage="/harrison-ohio-open-houses"
            ctaText="Contact Scott Windsor"
            dark
            compact
          />
        </div>
      </section>
    </PublicLayout>
  );
}
