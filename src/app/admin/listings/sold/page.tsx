import { prisma } from "@/lib/prisma";
import { formatPrice, formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function SoldListingsPage() {
  const sold = await prisma.listing.findMany({
    where: { status: "Sold" },
    orderBy: { soldDate: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-navy">Sold Homes Archive</h1>
          <p className="text-gray-500 text-sm font-inter mt-1">{sold.length} sold listing{sold.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/admin/listings" className="btn-outline-gold text-sm py-2.5 px-5">← Active Listings</Link>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        {sold.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>List Price</th>
                  <th>Sold Price</th>
                  <th>Sold Date</th>
                  <th>Beds/Baths</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sold.map((l) => (
                  <tr key={l.id}>
                    <td>
                      <p className="font-semibold text-navy">{l.address}</p>
                      <p className="text-xs text-gray-400">{l.city}, OH</p>
                    </td>
                    <td className="font-semibold text-navy">{formatPrice(l.price)}</td>
                    <td>{l.soldPrice ? <span className="text-green-700 font-semibold">{formatPrice(l.soldPrice)}</span> : <span className="text-gray-400">—</span>}</td>
                    <td className="text-gray-500 text-xs">{l.soldDate ? formatDate(l.soldDate) : "—"}</td>
                    <td className="text-gray-600">{l.bedrooms} bd / {l.bathrooms} ba</td>
                    <td>
                      <Link href={`/admin/listings/${l.id}/edit`} className="text-[#1A1A1A] text-xs font-semibold hover:text-gold-light font-inter">Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 font-inter">No sold listings yet. Mark a listing as sold from the listings page.</p>
          </div>
        )}
      </div>
    </div>
  );
}
