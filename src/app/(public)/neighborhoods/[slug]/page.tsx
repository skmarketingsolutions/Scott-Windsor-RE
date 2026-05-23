import { Metadata } from "next";
import { notFound } from "next/navigation";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";

const neighborhoods: Record<string, {
  name: string; tagline: string; type: string; priceRange: string;
  photo: string;
  description: string[]; features: string[]; schools: string;
  nearby: string[]; relatedSlugs: string[];
}> = {
  "parks-of-whitewater": {
    name: "Parks of Whitewater",
    tagline: "New Construction Near Miami Whitewater Forest, Harrison, OH",
    type: "New Construction Community",
    priceRange: "From low $300s to upper $400s",
    photo: "/images/neighborhoods/parks-of-whitewater.jpg",
    description: [
      "Parks of Whitewater is Harrison Ohio's premier new construction community, a Ryan Homes development situated immediately adjacent to Miami Whitewater Forest, one of Southwest Ohio's most beloved parks.",
      "Families choose Parks of Whitewater for modern floor plans with open layouts, 2-car garages, and move-in-ready finishes, all without the price premium of comparable homes in Mason or West Chester. The community backs up to the forest and offers direct trail access for hiking, biking, and outdoor recreation.",
      "The location is as practical as it is scenic: quick access to I-74 puts downtown Cincinnati less than 30 minutes away, and Southwest Local Schools serve all children in the community.",
    ],
    features: ["Ryan Homes new construction", "Adjacent to Miami Whitewater Forest", "Trail access from the community", "Modern open-concept floor plans", "Southwest Local School District", "I-74 access, 25 min to Cincinnati", "3–5 bedroom homes available", "2-car garages standard"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Miami Whitewater Forest (4,000+ acres)", "Harrison DORA District (5 min)", "I-74 interchange (3 min)", "Cincinnati Premium Outlets (15 min)", "Downtown Cincinnati (28 min)"],
    relatedSlugs: ["trailhead", "the-district", "cleves"],
  },
  "trailhead": {
    name: "Trailhead",
    tagline: "Modern Homes Along the Trails, Harrison, OH",
    type: "New Construction Community",
    priceRange: "From mid $300s to $500s",
    photo: "/images/neighborhoods/trailhead.jpg",
    description: [
      "Trailhead is one of Harrison's fastest-growing residential communities, with a mix of Drees Homes and Ryan Homes construction along a connected network of walking and biking trails.",
      "What makes Trailhead stand out is the combination of quality builders and thoughtful community design. Drees Homes' Denali and Arches floor plans bring more customization options than typical production builders, while Ryan Homes offers quick-move-in options for buyers on a timeline.",
      "The community's trail system connects to the broader Whitewater Greenway, making it a top choice for active families. New retail and dining are continuing to develop along the Trailhead corridor.",
    ],
    features: ["Drees & Ryan Homes options", "Connected trail system", "Customization options available", "Multiple price points", "New construction warranty", "Close to Harrison DORA", "Southwest Local Schools", "Strong resale value"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Whitewater Greenway Trail Access", "Harrison DORA District (3 min)", "Miami Whitewater Forest (10 min)", "I-74 interchange (5 min)", "Cincinnati (30 min)"],
    relatedSlugs: ["parks-of-whitewater", "the-district", "new-baltimore"],
  },
  "the-district": {
    name: "The District (DORA)",
    tagline: "Harrison's Walkable Downtown, Designated Outdoor Refreshment Area",
    type: "Urban Neighborhood",
    priceRange: "From upper $100s to $300s",
    photo: "/images/neighborhoods/the-district.jpg",
    description: [
      "The Harrison DORA (Designated Outdoor Refreshment Area) has transformed downtown Harrison into a destination. Local restaurants, breweries, shops, and community events anchor the district, and the surrounding residential neighborhood has seen significant renovation and investment.",
      "Homes in The District range from renovated historic bungalows to newer infill construction. Buyers are drawn to the walkability, the sense of community, and the significantly lower price points compared to new construction communities.",
      "For buyers who want to be in the middle of everything Harrison has to offer, support local businesses, and be part of an active community, The District is the neighborhood.",
    ],
    features: ["Walkable to DORA bars and restaurants", "Historic character homes", "Renovation opportunities available", "Strong community culture", "Annual events and festivals", "Close to Harrison Community Center", "Southwest Local Schools", "Lower price points vs. new construction"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Harrison DORA (walking distance)", "Harrison Park (2 min)", "City Hall & Library (5 min)", "I-74 interchange (8 min)", "Cleves (15 min)"],
    relatedSlugs: ["parks-of-whitewater", "cleves", "trailhead"],
  },
  "cleves": {
    name: "Cleves",
    tagline: "Historic Hamilton County Village, Homes for Sale",
    type: "Historic Village",
    priceRange: "From upper $100s to $350s",
    photo: "/images/neighborhoods/cleves.jpg",
    description: [
      "Cleves is one of Hamilton County's most charming historic villages, a tight-knit community of about 3,000 residents located along the Great Miami River, about 20 minutes from downtown Cincinnati.",
      "The village has a strong identity and active civic culture. Homes range from 19th-century historic properties to mid-century ranches and newer construction. Buyers consistently cite the community feel, the elementary school, and the pricing as primary reasons for choosing Cleves.",
      "For buyers who want the feel of a small Ohio river town with easy access to Cincinnati, Cleves delivers in a way that most suburbs can't match.",
    ],
    features: ["Historic village character", "Great Miami River access", "Cleves Elementary School (SW Local)", "Tight-knit community culture", "Excellent Cincinnati commute access", "Affordable price points", "Historic architecture options", "Active village events calendar"],
    schools: "Southwest Local School District: Cleves Elementary, SW Middle & High",
    nearby: ["Great Miami River", "North Bend (10 min)", "Harrison (15 min)", "Downtown Cincinnati (20 min)", "Mt. Airy Forest (20 min)"],
    relatedSlugs: ["north-bend", "the-district", "parks-of-whitewater"],
  },
  "north-bend": {
    name: "North Bend",
    tagline: "Ohio River Community with Historic Character",
    type: "Historic River Community",
    priceRange: "From upper $100s to $400s+",
    photo: "/images/neighborhoods/north-bend.jpg",
    description: [
      "North Bend is one of the most historically significant communities in Hamilton County, birthplace of President William Henry Harrison, and one of the most distinctive real estate markets in Southwest Ohio.",
      "Homes here sit along the Ohio River with commanding views and large lots that are simply unavailable in newer suburban communities. The architecture ranges from beautifully preserved 19th-century homes to mid-century colonials and contemporary builds on the bluffs.",
      "Buyers choose North Bend for the uniqueness, the views, the community history, and the relative affordability compared to similarly distinctive neighborhoods in Cincinnati proper.",
    ],
    features: ["Ohio River views available", "Historic & unique architecture", "Large lots on the bluffs", "Quiet, established community", "Swimming and boating access", "Southwest Local Schools", "Low traffic, rural feel", "Strong neighborhood identity"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Ohio River (walking distance)", "Cleves (10 min)", "Harrison (15 min)", "Cincinnati (25 min)", "William Henry Harrison Tomb (5 min)"],
    relatedSlugs: ["cleves", "new-baltimore", "whitewater-township"],
  },
  "new-baltimore": {
    name: "New Baltimore",
    tagline: "Rural Acreage and Estate Properties in Hamilton County",
    type: "Rural / Suburban",
    priceRange: "From $200s to $600s+",
    photo: "/images/neighborhoods/new-baltimore.jpg",
    description: [
      "New Baltimore attracts buyers who want land: rural lots of one to ten acres or more, hobby farms, and estate-size properties within Southwest Ohio's commute range of Cincinnati.",
      "The area has a quiet, agricultural character while still sitting within Southwest Local School District boundaries. Properties here offer the privacy and space that's simply unavailable in established subdivisions, at prices that still make sense.",
      "For buyers moving from Cincinnati who want a true lifestyle change without sacrificing everything, New Baltimore is one of the best values in Hamilton County.",
    ],
    features: ["Rural lot and acreage options", "Hobby farm potential", "Estate-size properties", "Privacy and low traffic", "Southwest Local Schools", "Custom home opportunities", "Horse properties available", "25–35 min to Cincinnati"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Harrison (10 min)", "Whitewater Memorial State Park", "I-74 (12 min)", "Cincinnati (30 min)", "Oxford, OH (20 min)"],
    relatedSlugs: ["whitewater-township", "north-bend", "trailhead"],
  },
  "whitewater-township": {
    name: "Whitewater Township",
    tagline: "Rural Township, Acreage & Privacy Near Harrison Ohio",
    type: "Township",
    priceRange: "From $200s to $500s+",
    photo: "/images/neighborhoods/parks-of-whitewater.jpg",
    description: [
      "Whitewater Township is the rural backbone of Harrison Ohio's surrounding area, a largely agricultural township that encompasses significant land between Harrison, the Indiana state line, and the Ohio River corridor.",
      "Township properties offer the most space-per-dollar of any area Scott serves. From country ranches on 2-acre lots to working farms with barns and outbuildings, Whitewater Township attracts buyers who are done with HOAs, deed restrictions, and tiny backyards.",
      "Southwest Local School District buses run throughout the township, so families can enjoy rural living without sacrificing school quality.",
    ],
    features: ["Largest lots in the area", "Agricultural and rural properties", "No HOA (most areas)", "Horse and livestock allowed", "Custom home sites available", "Southwest Local Schools", "Near Whitewater Memorial State Park", "Low property taxes"],
    schools: "Southwest Local School District (K–12)",
    nearby: ["Harrison (8 min)", "Whitewater Memorial State Park", "New Baltimore (10 min)", "Indiana border (15 min)", "Cincinnati (35 min)"],
    relatedSlugs: ["new-baltimore", "north-bend", "parks-of-whitewater"],
  },
};

interface Props { params: { slug: string }; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = neighborhoods[params.slug];
  if (!n) return {};
  return {
    title: `${n.name} Homes for Sale — Harrison Ohio | Scott Windsor`,
    description: `${n.name} real estate in Harrison Ohio. ${n.tagline}. ${n.priceRange}. Contact Scott Windsor — local broker with 24 years in this market.`,
    keywords: [`${n.name.toLowerCase()} harrison ohio homes`, `${n.name.toLowerCase()} real estate`, `homes for sale ${n.name.toLowerCase()} ohio`],
  };
}

export async function generateStaticParams() {
  return Object.keys(neighborhoods).map((slug) => ({ slug }));
}

export default function NeighborhoodPage({ params }: Props) {
  const n = neighborhoods[params.slug];
  if (!n) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: n.name,
    description: n.description[0],
    address: { "@type": "PostalAddress", addressLocality: "Harrison", addressRegion: "OH", postalCode: "45030" },
  };

  return (
    <PublicLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero — full-bleed photo with overlay */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        {/* Photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${n.photo}')` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />

        {/* Breadcrumb — top left */}
        <div className="absolute top-0 left-0 right-0 pt-28 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-white/50 text-xs font-inter">
              <Link href="/neighborhoods" className="hover:text-white transition-colors">Neighborhoods</Link>
              <span>/</span>
              <span className="text-white/80">{n.name}</span>
            </div>
          </div>
        </div>

        {/* Hero content — bottom */}
        <div className="relative container-wide pb-12 md:pb-16 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-[#E8F840] text-[#2C2C2C] text-xs font-bold uppercase tracking-widest px-3 py-1 font-inter mb-4">
                {n.type}
              </span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
                {n.name}
              </h1>
              <p className="text-white/70 text-lg font-inter max-w-xl leading-relaxed">
                {n.tagline}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-playfair text-2xl font-bold text-[#E8F840]">{n.priceRange}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:5133076449"
                className="inline-flex items-center gap-2 bg-[#E8F840] text-[#2C2C2C] font-bold font-inter px-6 py-3 text-sm uppercase tracking-wider hover:bg-white transition-colors"
              >
                Call Scott · 513-307-6449
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left column — body content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div>
                <p className="text-[#E8F840] bg-[#2C2C2C] inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1 mb-4">About This Community</p>
                <div className="space-y-4">
                  {n.description.map((p, i) => (
                    <p key={i} className="text-gray-600 font-inter leading-relaxed text-base">{p}</p>
                  ))}
                </div>
              </div>

              {/* Features grid */}
              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-5">Community Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {n.features.map(f => (
                    <div key={f} className="flex items-center gap-3 bg-[#F5F5F5] p-4 border-l-2 border-[#E8F840]">
                      <CheckCircle className="w-4 h-4 text-[#E8F840] bg-[#2C2C2C] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-inter font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schools */}
              <div className="bg-navy p-6">
                <h2 className="font-playfair text-xl font-bold text-white mb-2">Schools</h2>
                <p className="text-white/70 font-inter text-sm">{n.schools}</p>
                <Link
                  href="/harrison-ohio-schools"
                  className="flex items-center gap-1.5 text-[#E8F840] text-sm font-semibold font-inter mt-3 hover:gap-2.5 transition-all"
                >
                  View full school district info <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Nearby */}
              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">Nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {n.nearby.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-inter p-3 bg-[#F5F5F5]">
                      <MapPin className="w-4 h-4 text-navy flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* IDX Placeholder */}
              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">Homes for Sale in {n.name}</h2>
                <div className="bg-[#F5F5F5] border-2 border-dashed border-gray-300 p-12 text-center">
                  <p className="text-gray-400 font-inter text-sm">IDX listings for {n.name} will appear here once your IDX provider is configured.</p>
                  <p className="text-gray-500 text-sm mt-2">Add <code className="text-navy bg-white px-1.5 py-0.5">NEXT_PUBLIC_IDX_SRC</code> to your .env file.</p>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">

              {/* Lead form */}
              <div className="bg-[#2C2C2C] p-8">
                <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-2">Free Home Alerts</p>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Get Notified in {n.name}</h3>
                <p className="text-white/60 text-sm font-inter mb-6">Scott will contact you the moment a matching home hits the market.</p>
                <LeadForm formType="neighborhood_alert" sourcePage={`/neighborhoods/${params.slug}`} showMessage ctaText={`Get ${n.name} Alerts`} dark />
              </div>

              {/* Price range callout */}
              <div className="bg-[#E8F840] p-6">
                <p className="text-[#2C2C2C] text-xs font-bold uppercase tracking-widest font-inter mb-1">Price Range</p>
                <p className="font-playfair text-2xl font-bold text-[#2C2C2C]">{n.priceRange}</p>
                <p className="text-[#2C2C2C]/60 text-xs font-inter mt-1">Current market estimates · 2026</p>
              </div>

              {/* Related neighborhoods */}
              {n.relatedSlugs.length > 0 && (
                <div className="border border-gray-200 p-6">
                  <h3 className="font-playfair font-bold text-navy mb-4">Explore Nearby</h3>
                  <div className="space-y-3">
                    {n.relatedSlugs.map(slug => {
                      const related = neighborhoods[slug];
                      if (!related) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/neighborhoods/${slug}`}
                          className="flex items-center justify-between p-3 bg-[#F5F5F5] hover:bg-[#2C2C2C] group transition-colors"
                        >
                          <div>
                            <p className="font-semibold text-navy text-sm group-hover:text-white transition-colors font-inter">{related.name}</p>
                            <p className="text-gray-400 text-xs font-inter group-hover:text-white/50 transition-colors">{related.priceRange}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E8F840] transition-colors flex-shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-[#F5F5F5] p-6 text-center">
                <p className="font-playfair font-bold text-navy mb-2">Ready to See Homes?</p>
                <p className="text-gray-500 text-sm font-inter mb-4">Scott knows every street in this community.</p>
                <a
                  href="tel:5133076449"
                  className="block w-full bg-navy text-[#E8F840] font-bold font-inter py-3 text-sm uppercase tracking-wider text-center hover:bg-[#2C2C2C] transition-colors"
                >
                  Call 513-307-6449
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
