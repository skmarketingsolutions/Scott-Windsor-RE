import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Harrison OH Neighborhoods | Homes for Sale | Scott Windsor",
  description:
    "Discover homes for sale in Harrison OH neighborhoods including Cleves, North Bend, Okeana, Trailhead, and Whitewater Township with Scott Windsor.",
  keywords: ["harrison ohio neighborhoods", "harrison ohio communities", "best neighborhoods harrison ohio", "where to live harrison ohio", "okeana ohio homes"],
};

const neighborhoods = [
  { name: "Parks of Whitewater", slug: "parks-of-whitewater", tagline: "New construction near Miami Whitewater Forest", type: "New Construction", highlight: "Ryan Homes · From low $300s", photo: "/images/neighborhoods/parks-of-whitewater.jpg", desc: "Harrison's premier new construction community, adjacent to Miami Whitewater Forest trails. Families and young professionals choose Parks of Whitewater for modern homes, green space, and easy I-74 access.", ctaHref: "/homes-for-sale/new-construction-harrison-ohio" },
  { name: "Trailhead", slug: "trailhead", tagline: "Modern homes along the trails", type: "New Construction", highlight: "Drees & Ryan Homes", photo: "/images/neighborhoods/trailhead.jpg", desc: "Trailhead is one of Harrison's fastest-growing communities, offering Drees Homes floor plans along a network of walking and biking trails that connect to the broader Whitewater trail system.", ctaHref: "/homes-for-sale/new-construction-harrison-ohio" },
  { name: "The District (DORA)", slug: "the-district", tagline: "Walkable downtown living in Harrison's DORA", type: "Established", highlight: "Harrison Downtown District", photo: "/images/neighborhoods/the-district.jpg", desc: "The Harrison DORA (Designated Outdoor Refreshment Area) has revitalized downtown, creating a walkable neighborhood of renovated homes, local restaurants, and community events." },
  { name: "Cleves", slug: "cleves", tagline: "Charming village with a small-town feel", type: "Established Village", highlight: "Hamilton County · SW Local Schools", photo: "/images/neighborhoods/cleves.jpg", desc: "Cleves is a historic village in Hamilton County: affordable, walkable, and about 20 minutes from downtown Cincinnati. Great for buyers who want character and community." },
  { name: "North Bend", slug: "north-bend", tagline: "Historic river community with character", type: "Historic", highlight: "Ohio River Views · Unique Homes", photo: "/images/neighborhoods/north-bend.jpg", desc: "North Bend sits along the Ohio River and offers some of the most distinctive historic homes in the area. Known for larger lots, mature trees, and a quiet, established neighborhood feel." },
  { name: "Okeana", slug: "okeana", tagline: "Country estates and rural properties in Butler County", type: "Rural / Estate", highlight: "Butler County · Rural Estates", photo: "/images/neighborhoods/new-baltimore.jpg", desc: "Okeana is a small Butler County community offering rural estate properties, larger acreage parcels, and country living within Scott's service area. Known for scenic farmland and privacy." },
  { name: "Whitewater Township", slug: "whitewater-township", tagline: "Rural township with suburban convenience", type: "Township", highlight: "Larger Lots · Agricultural Feel", photo: "/images/neighborhoods/parks-of-whitewater.jpg", desc: "Whitewater Township encompasses much of the rural land between Harrison and the Indiana border. Offers acreage properties, low traffic, and access to Whitewater Memorial State Park." },
];

export default function NeighborhoodsPage() {
  return (
    <PublicLayout>
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Explore Communities</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Harrison &amp; Southwest Ohio Communities
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            Parks of Whitewater, Trailhead, and The District are in Harrison. Cleves, North Bend, Okeana, and Whitewater Township are nearby communities Scott serves throughout Southwest Ohio.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group block overflow-hidden border border-gray-200 hover:border-[#2C2C2C] hover:shadow-lg transition-all duration-300"
              >
                {/* Photo */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${n.photo}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#FF6B00] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-inter">
                    {n.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 font-inter">{n.highlight}</p>
                  <h2 className="font-playfair text-xl font-bold text-navy mb-2 group-hover:text-[#2C2C2C] transition-colors">{n.name}</h2>
                  <p className="text-gray-500 text-sm font-inter leading-relaxed mb-4">{n.desc}</p>
                  <span className="flex items-center gap-2 text-[#2C2C2C] text-xs font-bold uppercase tracking-wider font-inter group-hover:gap-3 transition-all">
                    Explore {n.name} <ArrowRight className="w-3 h-3" />
                  </span>
                  {n.ctaHref && (
                    <span className="text-xs text-gray-500 underline font-inter mt-3 block hover:text-navy transition-colors cursor-pointer">
                      View New Construction →
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
