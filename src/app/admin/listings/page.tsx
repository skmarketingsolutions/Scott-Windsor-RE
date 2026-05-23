import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatPrice, formatDate, getStatusColor } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import AdminListingsTable from "@/components/admin/AdminListingsTable";

export default async function AdminListingsPage() {
  const listings = await prisma.listing.findMany({
    orderBy: { createdAt: "desc" },
    where: { status: { not: "Sold" } },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-navy">Listings</h1>
          <p className="text-gray-500 font-inter text-sm mt-1">{listings.length} active listing{listings.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/listings/sold" className="btn-outline-gold text-sm py-2.5 px-5">Sold Archive</Link>
          <Link href="/admin/listings/new" className="btn-gold flex items-center gap-2 text-sm py-2.5 px-5">
            <PlusCircle className="w-4 h-4" /> Add Listing
          </Link>
        </div>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        <AdminListingsTable listings={listings as any} />
      </div>
    </div>
  );
}
