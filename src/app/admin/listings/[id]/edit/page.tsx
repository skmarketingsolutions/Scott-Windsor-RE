import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ListingForm from "@/components/admin/ListingForm";
import { parsePhotos } from "@/lib/utils";

export default async function EditListingPage({ params }: { params: { id: string } }) {
  const listing = await prisma.listing.findUnique({ where: { id: params.id } });
  if (!listing) notFound();

  return (
    <div>
      <h1 className="font-playfair text-3xl font-bold text-navy mb-8">Edit Listing</h1>
      <ListingForm listing={{ ...listing, photos: parsePhotos(listing.photos) } as any} />
    </div>
  );
}
