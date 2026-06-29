export const dynamic = "force-dynamic";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import LeadForm from "@/components/ui/LeadForm";
import { Shield, Award, Home, Users, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Scott Windsor | Harrison OH Realtor",
  description:
    "Scott Windsor — retired Harrison firefighter of 24 years & multi-million dollar agent. Based in Harrison OH, serving Greater Cincinnati & SW Ohio.",
  keywords: [
    "scott windsor realtor cincinnati",
    "greater cincinnati real estate agent",
    "align right realty infinity harrison ohio",
    "cincinnati tri state realtor",
    "harrison ohio real estate agent",
    "harrison firefighter turned realtor",
  ],
};

async function getTestimonials() {
  return prisma.testimonial.findMany({
    where: { visible: true },
    orderBy: { order: "asc" },
    take: 8,
  });
}

export default async function AboutPage() {
  const testimonials = await getTestimonials();

  const defaultTestimonials = [
    {
      id: "1", clientName: "Mike & Jenny Schroeder", city: "Harrison, OH",
      quote: "Scott sold our home in 11 days, $7,000 over asking. He knows this market better than anyone.",
      starRating: 5, listingAddress: "Parks of Whitewater", visible: true, order: 0, createdAt: new Date(),
    },
    {
      id: "2", clientName: "Tyler & Amanda Reeves", city: "Cleves, OH",
      quote: "As first-time buyers, we had no idea what we were doing. Scott was patient, honest, and never pushed us toward something we couldn't afford.",
      starRating: 5, visible: true, order: 1, createdAt: new Date(),
    },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-end bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/80 to-[#2C2C2C]/40" />
        <div className="relative container-wide pb-16 pt-28">
          <div className="flex items-end gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#FF6B00] flex-shrink-0">
              <img
                src="/images/scott-windsor-headshot.jpg"
                alt="Scott Windsor — Harrison Ohio Real Estate Agent"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Scott Windsor</p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
                From Fighting Fires to Finding Homes
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-gold py-6">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "24 Yrs", sub: "Harrison Fire Dept." },
              { icon: Award, label: "Multi-Million", sub: "Dollar Producer" },
              { icon: Home, label: "Owner & Agent", sub: "Align Right Realty Infinity" },
              { icon: Users, label: "500+ Families", sub: "Helped in SW Ohio" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="w-6 h-6 text-white mb-1" />
                <p className="font-playfair font-bold text-white text-lg">{label}</p>
                <p className="text-white/80 text-xs font-inter">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="label-gold mb-3">The Full Story</p>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6">
                  A Lifelong Commitment to Harrison
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed font-inter">
                Scott Windsor spent 24 years on the front lines as a firefighter for
                the City of Harrison, Ohio. He responded to thousands of calls, knew
                every street and neighborhood intimately, and built deep, genuine
                relationships with the community he served. When he retired from the
                department, he brought that same dedication and trust into a new
                career: real estate.
              </p>

              <p className="text-gray-600 leading-relaxed font-inter">
                As the Owner and Agent of Align Right Realty Infinity, Scott covers the
                full Greater Cincinnati metro and Southwest Ohio. He&apos;s a multi-million
                dollar producer, but what sets him apart isn&apos;t the volume. It&apos;s
                the fact that every client gets the same honest, direct, community-first
                approach that defined his 24 years in the firehouse — now applied across
                the entire Cincinnati market.
              </p>

              <p className="text-gray-600 leading-relaxed font-inter">
                Scott doesn&apos;t work in Harrison. He <em>lives</em> in Harrison. He
                knows which streets have the best school access, which neighborhoods
                are growing, where the new construction is coming, and what homes
                are actually worth, not what an algorithm says. That local knowledge
                is something no out-of-town agent can replicate.
              </p>

              <p className="text-gray-600 leading-relaxed font-inter">
                Whether you&apos;re buying in Harrison, searching the Cincinnati suburbs,
                relocating from out of state, or looking anywhere across Greater Cincinnati,
                Scott&apos;s approach is the same: straight talk, hard work, and results.
                He&apos;s not a one-zip-code agent — he knows this entire market.
              </p>

              <div className="bg-offwhite p-6 border-l-4 border-gold mt-4">
                <p className="font-playfair text-lg italic text-navy leading-relaxed">
                  &ldquo;This community gave me a career. Real estate is my way of giving
                  something back, helping the families I know and the ones
                  moving here to become part of what makes Harrison great.&rdquo;
                </p>
                <p className="text-[#1A1A1A] text-sm font-semibold mt-3 font-inter">
                  — Scott Windsor
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Credentials */}
              <div className="bg-navy p-6">
                <h3 className="font-playfair text-lg font-bold text-white mb-4">
                  Credentials
                </h3>
                <ul className="space-y-3">
                  {[
                    "Licensed Ohio Real Estate Agent",
                    "Owner and Agent, Align Right Realty Infinity",
                    "24-Year Harrison Fire Department Veteran",
                    "Multi-Million Dollar Producer",
                    "Greater Cincinnati Specialist",
                    "New Construction Expert",
                    "First-Time Buyer Specialist",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80 font-inter">
                      <Star className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Area */}
              <div className="bg-offwhite p-6">
                <h3 className="font-playfair text-lg font-bold text-navy mb-4">
                  Service Area
                </h3>
                <ul className="space-y-2">
                  {[
                    "Harrison, OH 45030",
                    "Greater Cincinnati Metro",
                    "Hamilton, Butler & Warren Counties",
                    "Cleves · North Bend · Okeana",
                    "Whitewater Township",
                    "All of Southwest Ohio",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-gray-600 font-inter">
                      <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brokerage */}
              <div className="border border-gray-200 p-6">
                <p className="label-gold mb-2">Brokerage</p>
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">
                  Align Right Realty Infinity
                </h3>
                <p className="text-gray-600 text-sm font-inter leading-relaxed">
                  Part of the national Align Right Realty network. Local ownership,
                  professional support, competitive commission structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <p className="label-gold mb-3">Community First</p>
          <h2 className="font-playfair text-3xl font-bold text-navy mb-8 max-w-xl">
            Rooted in Harrison. Serving Greater Cincinnati.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Ties",
                body: "Scott remains deeply connected to Harrison through local organizations, neighborhood events, and the relationships he built during 24 years with the fire department.",
              },
              {
                title: "Local Knowledge",
                body: "From Harrison's new construction corridors to the Cincinnati suburbs and beyond — Scott knows the Greater Cincinnati market: streets, subdivisions, price points, and trends.",
              },
              {
                title: "Honest Advice",
                body: "Scott doesn't just tell people what they want to hear. Clients get honest market analysis, direct communication, and a real plan. No sales pitch.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 shadow-sm">
                <div className="w-8 h-1 bg-gold mb-4" />
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="label-gold mb-3 text-center">Client Stories</p>
          <h2 className="font-playfair text-3xl font-bold text-navy text-center mb-12">
            What Clients Say About Scott
          </h2>
          <TestimonialsCarousel
            testimonials={testimonials.length > 0 ? (testimonials as any) : (defaultTestimonials as any)}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">Ready to Work Together?</p>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                Let&apos;s Talk About Your Move
              </h2>
              <p className="text-white/70 font-inter leading-relaxed">
                Whether you&apos;re buying, selling, or just exploring, Scott will
                give you a straight answer and a real plan. No pressure.
                Just the kind of help you&apos;d expect from someone who actually
                cares about this community.
              </p>
            </div>
            <div className="bg-white p-8">
              <LeadForm
                formType="about_contact"
                sourcePage="/about"
                showMessage
                ctaText="Let's Talk"
              />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
