export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import { formatPrice, parsePhotos } from "@/lib/utils";
import LeadForm from "@/components/ui/LeadForm";
import MortgageCalculator from "@/components/ui/MortgageCalculator";
import ListingCard from "@/components/ui/ListingCard";
import { Bed, Bath, Square, Calendar, MapPin, Home, ExternalLink } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = await prisma.listing.findUnique({ where: { slug: params.slug } });
  if (!listing) return {};

  return {
    title: `${listing.address}, ${listing.city} OH — ${formatPrice(listing.price)} | Scott Windsor`,
    description: `${listing.bedrooms} bed, ${listing.bathrooms} bath ${listing.propertyType.toLowerCase()} in ${listing.city}, Ohio. ${listing.sqft ? listing.sqft.toLocaleString() + " sqft. " : ""}Listed by Scott Windsor, Align Right Realty Infinity.`,
    openGraph: {
      title: `${listing.address} — ${formatPrice(listing.price)}`,
      description: `${listing.bedrooms}bd/${listing.bathrooms}ba in ${listing.city}, OH`,
    },
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const listing = await prisma.listing.findUnique({
    where: { slug: params.slug },
    include: { openHouses: { where: { cancelled: false } } },
  });

  if (!listing) notFound();

  const photos = parsePhotos(listing.photos);
  const related = await prisma.listing.findMany({
    where: {
      city: listing.city,
      status: { not: "Sold" },
      id: { not: listing.id },
    },
    take: 3,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: listing.address,
    description: listing.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
    },
    numberOfRooms: listing.bedrooms,
    floorSize: listing.sqft
      ? { "@type": "QuantitativeValue", value: listing.sqft, unitCode: "SQFT" }
      : undefined,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
    },
  };

  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-20">
        {/* Photo Gallery */}
        <div className="relative">
          {photos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-h-[600px] overflow-hidden">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={photos[0]}
                  alt={`${listing.address} main photo`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {listing.status === "Sold" && (
                  <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                    <div className="bg-red-600 text-white text-2xl font-bold uppercase tracking-widest px-8 py-4 -rotate-6">
                      SOLD
                    </div>
                  </div>
                )}
              </div>
              <div className="hidden md:grid grid-cols-2 gap-1">
                {photos.slice(1, 5).map((photo, i) => (
                  <div key={i} className="relative aspect-[4/3]">
                    <Image
                      src={photo}
                      alt={`${listing.address} photo ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-96 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center pt-20">
              <div className="text-white/30 text-center">
                <Home className="w-16 h-16 mx-auto mb-2" />
                <p>No Photos Available</p>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 font-inter ${
                    listing.status === "Active" ? "bg-green-100 text-green-800" :
                    listing.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                    listing.status === "Sold" ? "bg-red-100 text-red-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {listing.status}
                  </span>
                  <span className="text-xs text-gray-400 font-inter">
                    {listing.propertyType}
                  </span>
                  {listing.mlsNumber && (
                    <span className="text-xs text-gray-400 font-inter">
                      MLS# {listing.mlsNumber}
                    </span>
                  )}
                </div>
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-2">
                  {formatPrice(listing.price)}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-navy" />
                  <span className="font-inter">
                    {listing.address}, {listing.city}, {listing.state} {listing.zip}
                  </span>
                </div>

                {/* Key Stats */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-navy" />
                    <span className="font-inter">
                      <strong className="text-navy">{listing.bedrooms}</strong>{" "}
                      <span className="text-gray-500 text-sm">Bedrooms</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-navy" />
                    <span className="font-inter">
                      <strong className="text-navy">{listing.bathrooms}</strong>{" "}
                      <span className="text-gray-500 text-sm">Bathrooms</span>
                    </span>
                  </div>
                  {listing.sqft && (
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-navy" />
                      <span className="font-inter">
                        <strong className="text-navy">
                          {listing.sqft.toLocaleString()}
                        </strong>{" "}
                        <span className="text-gray-500 text-sm">Sq Ft</span>
                      </span>
                    </div>
                  )}
                  {listing.yearBuilt && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-navy" />
                      <span className="font-inter">
                        <strong className="text-navy">Built {listing.yearBuilt}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {listing.description && (
                <div className="mb-8">
                  <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                    About This Home
                  </h2>
                  <div className="prose-content">
                    <p className="text-gray-600 leading-relaxed font-inter whitespace-pre-line">
                      {listing.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Property Details Table */}
              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-0 border border-gray-200">
                  {[
                    ["Property Type", listing.propertyType],
                    ["Status", listing.status],
                    ["Bedrooms", listing.bedrooms],
                    ["Bathrooms", listing.bathrooms],
                    listing.sqft ? ["Square Footage", `${listing.sqft.toLocaleString()} sqft`] : null,
                    listing.lotSize ? ["Lot Size", listing.lotSize] : null,
                    listing.yearBuilt ? ["Year Built", listing.yearBuilt] : null,
                    ["City", listing.city],
                    ["ZIP Code", listing.zip],
                    listing.mlsNumber ? ["MLS#", listing.mlsNumber] : null,
                  ]
                    .filter(Boolean)
                    .map(([key, value], i) => (
                      <div
                        key={String(key)}
                        className={`flex flex-col p-3 border-b border-gray-200 ${
                          i % 2 === 0 ? "border-r" : ""
                        }`}
                      >
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-inter mb-0.5">
                          {key}
                        </span>
                        <span className="font-semibold text-navy font-inter text-sm">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Virtual Tour */}
              {listing.virtualTourUrl && (
                <div className="mb-8">
                  <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                    Virtual Tour
                  </h2>
                  <div className="aspect-video">
                    <iframe
                      src={listing.virtualTourUrl}
                      className="w-full h-full border-0"
                      allowFullScreen
                      title="Virtual Tour"
                    />
                  </div>
                </div>
              )}

              {/* Open Houses */}
              {listing.openHouses && listing.openHouses.length > 0 && (
                <div className="mb-8 bg-gray-100 border border-gray-200 p-6">
                  <h2 className="font-playfair text-xl font-bold text-navy mb-4">
                    Upcoming Open Houses
                  </h2>
                  {listing.openHouses.map((oh) => (
                    <div key={oh.id} className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-navy" />
                      <span className="font-inter font-semibold text-navy">
                        {oh.date} &bull; {oh.startTime} – {oh.endTime}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Mortgage Calculator */}
              <MortgageCalculator defaultPrice={listing.price} />

              {/* School District */}
              <div className="mt-8 p-6 bg-offwhite">
                <h2 className="font-playfair text-xl font-bold text-navy mb-3">
                  School District
                </h2>
                <p className="text-gray-600 font-inter text-sm mb-3">
                  Homes in {listing.city} are served by the{" "}
                  <strong>Southwest Local School District</strong>, a
                  community-focused district that families specifically choose
                  when relocating from Cincinnati.
                </p>
                <Link
                  href="/harrison-ohio-schools"
                  className="text-navy text-sm font-semibold hover:text-gold font-inter"
                >
                  View School District Details →
                </Link>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white shadow-xl p-6 md:p-8 border-t-4 border-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <span className="font-playfair font-bold text-white text-lg">SW</span>
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-navy">Scott Windsor</p>
                      <p className="text-xs text-gray-500 font-inter">
                        Broker/Owner | Align Right Realty Infinity
                      </p>
                    </div>
                  </div>

                  <LeadForm
                    formType="listing_inquiry"
                    sourcePage={`/listings/${listing.slug}`}
                    title="Interested in This Home?"
                    subtitle="Scott will respond within a few hours."
                    showMessage
                    ctaText="Request Info / Showing"
                  />

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <a
                      href="tel:5133076449"
                      className="block text-center text-navy font-semibold text-sm hover:text-gold transition-colors font-inter"
                    >
                      📞 513-307-6449
                    </a>
                  </div>

                  {listing.virtualTourUrl && (
                    <a
                      href={listing.virtualTourUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 btn-outline-gold w-full flex items-center justify-center gap-2 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Virtual Tour
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Listings */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="font-playfair text-2xl font-bold text-navy mb-8">
                More Homes in {listing.city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((r) => (
                  <ListingCard key={r.id} listing={r as any} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
