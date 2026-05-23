import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import Link from "next/link";
import { GraduationCap, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Harrison Ohio Schools & School Districts | Southwest Local School District",
  description:
    "Complete guide to Harrison Ohio schools and the Southwest Local School District. Find homes near top-rated schools in Harrison OH 45030.",
  keywords: [
    "harrison ohio schools",
    "southwest local school district homes for sale",
    "harrison ohio school district real estate",
    "southwest local school district harrison ohio",
    "homes near southwest local schools ohio",
  ],
};

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What school district is Harrison Ohio in?",
      acceptedAnswer: { "@type": "Answer", text: "Harrison Ohio is served by the Southwest Local School District, which includes Harrison Elementary, Southwest Middle School, and Southwest High School." },
    },
    {
      "@type": "Question",
      name: "Are Southwest Local Schools good?",
      acceptedAnswer: { "@type": "Answer", text: "Southwest Local Schools are well-regarded in Hamilton County for their community feel, smaller class sizes, and strong parental involvement. Families frequently cite the district as a primary reason for choosing Harrison over other Cincinnati suburbs." },
    },
  ],
};

export default function SchoolsPage() {
  return (
    <PublicLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }} />

      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Education</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Harrison Ohio Schools &amp; School Districts
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            Everything you need to know about Southwest Local School District, one of the top reasons families choose Harrison Ohio.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="label-gold mb-2">District Overview</p>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Southwest Local School District</h2>
                <p className="text-gray-600 font-inter leading-relaxed mb-4">
                  Homes in Harrison, Cleves, North Bend, New Baltimore, and Whitewater Township are served by the <strong>Southwest Local School District</strong>, a community-focused public school district known for smaller class sizes and strong family involvement.
                </p>
                <p className="text-gray-600 font-inter leading-relaxed">
                  Families relocating from Cincinnati consistently choose Southwest Local as a primary reason for settling in Harrison. The district offers a more personalized education experience than many larger Hamilton County districts, while still providing competitive academics and extracurriculars.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Harrison Elementary School", type: "Elementary", grades: "K–5", notes: "Serves Harrison and surrounding areas" },
                  { name: "Cleves Elementary School", type: "Elementary", grades: "K–5", notes: "Serves Cleves and North Bend area" },
                  { name: "Southwest Middle School", type: "Middle School", grades: "6–8", notes: "District-wide middle school" },
                  { name: "Southwest High School", type: "High School", grades: "9–12", notes: "District-wide high school, Harrison OH" },
                ].map((school) => (
                  <div key={school.name} className="bg-offwhite p-5 border-l-4 border-gold">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-playfair font-bold text-navy mb-1">{school.name}</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-inter mb-1">{school.type} · Grades {school.grades}</p>
                        <p className="text-gray-600 text-sm font-inter">{school.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">Why Families Choose Southwest Local</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Smaller class sizes vs. larger suburban districts",
                    "Strong parent and community involvement",
                    "Competitive athletics and extracurricular programs",
                    "Active PTO organizations at every school",
                    "Newer school facilities and technology",
                    "Located in affordable Harrison OH 45030",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <p className="text-gray-600 font-inter text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy p-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">Find Homes in Southwest Local School District</h2>
                <p className="text-white/70 font-inter mb-6 text-sm">Every home Scott lists in Harrison, Cleves, and North Bend falls within Southwest Local. Search active listings or ask Scott for a curated list.</p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/listings" className="btn-gold">Search Active Listings</Link>
                  <a href="tel:5133076449" className="btn-outline-white">Call Scott</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-offwhite p-6 shadow-sm">
                <h3 className="font-playfair font-bold text-navy text-lg mb-4">School Resources</h3>
                <div className="space-y-3">
                  {[
                    { label: "Southwest Local School District Website", href: "https://www.southwest.k12.oh.us" },
                    { label: "GreatSchools: Southwest Local", href: "https://www.greatschools.org" },
                    { label: "Niche School Rankings: Harrison OH", href: "https://www.niche.com" },
                    { label: "Ohio Report Card", href: "https://reportcard.education.ohio.gov" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors font-inter">
                      <ExternalLink className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="font-playfair font-bold text-navy text-lg mb-4">Get School District Alerts</h3>
                <p className="text-gray-500 text-sm font-inter mb-4">Tell Scott what you&apos;re looking for in Southwest Local and he&apos;ll notify you when matching homes hit the market.</p>
                <LeadForm formType="school_alert" sourcePage="/harrison-ohio-schools" ctaText="Get School District Alerts" compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
