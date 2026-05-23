import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import AdminOpenHouseActions from "@/components/admin/AdminOpenHouseActions";

export default async function AdminOpenHousesPage() {
  const openHouses = await prisma.openHouse.findMany({
    include: { listing: true },
    orderBy: { date: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-playfair text-3xl font-bold text-navy">Open Houses</h1>
        <Link href="/admin/open-houses/new" className="btn-gold flex items-center gap-2 text-sm py-2.5 px-5">
          <PlusCircle className="w-4 h-4" /> Schedule Open House
        </Link>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        {openHouses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr><th>Property</th><th>Date</th><th>Time</th><th>Notes</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {openHouses.map(oh => (
                  <tr key={oh.id} className={oh.cancelled ? "opacity-50" : ""}>
                    <td>
                      <p className="font-semibold text-navy">{oh.listing.address}</p>
                      <p className="text-xs text-gray-400">{oh.listing.city}, OH</p>
                    </td>
                    <td className="font-inter text-sm">{oh.date}</td>
                    <td className="text-gray-600 text-sm">{oh.startTime} – {oh.endTime}</td>
                    <td className="text-gray-400 text-xs">{oh.notes || "—"}</td>
                    <td>
                      <span className={`text-xs font-bold px-2 py-1 font-inter ${oh.cancelled ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>
                        {oh.cancelled ? "Cancelled" : "Active"}
                      </span>
                    </td>
                    <td><AdminOpenHouseActions id={oh.id} cancelled={oh.cancelled} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 font-inter">No open houses scheduled.</p>
          </div>
        )}
      </div>
    </div>
  );
}
