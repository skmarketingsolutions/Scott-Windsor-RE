import { getLoftyListings } from "@/lib/lofty";
import { prisma } from "@/lib/prisma";
import ListingsGatedGrid from "./ListingsGatedGrid";

export default async function ListingsGatedFetch() {
  const [loftyListings, dbListings] = await Promise.all([
    getLoftyListings(),
    prisma.listing.findMany({
      where: { status: { not: "Sold" } },
      orderBy: [{ featured: "desc" }, { featuredOrder: "asc" }, { createdAt: "desc" }],
    }),
  ]);

  const listings = loftyListings.length > 0 ? loftyListings : dbListings;

  if (listings.length === 0) return null;

  return <ListingsGatedGrid listings={listings as any} />;
}
