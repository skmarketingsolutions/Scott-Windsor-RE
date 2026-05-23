import Link from "next/link";
import Image from "next/image";
import { formatPrice, parsePhotos } from "@/lib/utils";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import type { Listing } from "@/types";

interface ListingCardProps {
  listing: Listing;
  priority?: boolean;
  /** Override the default /listings/[slug] href (e.g. for external MLS listings) */
  href?: string;
}

export default function ListingCard({ listing, priority = false, href }: ListingCardProps) {
  const photos = parsePhotos(listing.photos);
  const mainPhoto = photos[0] || null;
  const isSold = listing.status === "Sold";
  const isPending = listing.status === "Pending";
  const isComingSoon = listing.status === "Coming Soon";

  return (
    <Link
      href={href ?? `/listings/${listing.slug}`}
      className="card-listing block group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        {mainPhoto ? (
          <Image
            src={mainPhoto}
            alt={`${listing.address}, ${listing.city} OH — ${listing.bedrooms} bed, ${listing.bathrooms} bath`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
            <div className="text-center text-white/30">
              <Square className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs">No Photo</p>
            </div>
          </div>
        )}

        {/* Status Badge */}
        {isSold && (
          <div className="sold-badge z-10">SOLD</div>
        )}
        {isPending && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 z-10">
            PENDING
          </div>
        )}
        {isComingSoon && (
          <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 z-10">
            COMING SOON
          </div>
        )}

        {/* Price overlay on hover */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-inter text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
              {listing.propertyType}
            </p>
            <h3 className="font-playfair font-bold text-lg text-navy leading-tight">
              {formatPrice(listing.price)}
            </h3>
          </div>
          {listing.mlsNumber && (
            <span className="text-xs text-gray-400 font-inter">
              MLS# {listing.mlsNumber}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5 text-navy flex-shrink-0" />
          <span className="font-inter text-sm truncate">
            {listing.address}, {listing.city}
          </span>
        </div>

        <div className="flex items-center gap-4 text-charcoal">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-navy" />
            <span className="text-sm font-inter font-medium">
              {listing.bedrooms} <span className="text-gray-400 font-normal">bd</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-navy" />
            <span className="text-sm font-inter font-medium">
              {listing.bathrooms} <span className="text-gray-400 font-normal">ba</span>
            </span>
          </div>
          {listing.sqft && (
            <div className="flex items-center gap-1.5">
              <Square className="w-4 h-4 text-navy" />
              <span className="text-sm font-inter font-medium">
                {listing.sqft.toLocaleString()} <span className="text-gray-400 font-normal">sqft</span>
              </span>
            </div>
          )}
        </div>

        {listing.openHouseDate && !isSold && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs font-semibold text-navy uppercase tracking-wider">
              Open House: {listing.openHouseDate}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
