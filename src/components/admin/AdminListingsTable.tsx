"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, formatDate, getStatusColor } from "@/lib/utils";
import type { Listing } from "@/types";
import { Edit2, Trash2, CheckCircle, Clock, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props { listings: Listing[]; }

export default function AdminListingsTable({ listings }: Props) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleMarkSold = async (id: string) => {
    await fetch(`/api/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Sold", soldDate: new Date().toISOString() }),
    });
    router.refresh();
  };

  const handleMarkPending = async (id: string) => {
    await fetch(`/api/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Pending" }),
    });
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    await fetch(`/api/listings/${id}`, { method: "DELETE" });
    setDeleting(null);
    setConfirmDelete(null);
    router.refresh();
  };

  if (!listings.length) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 font-inter">No listings yet.</p>
        <Link href="/admin/listings/new" className="btn-gold mt-4 inline-flex text-sm">Add First Listing</Link>
      </div>
    );
  }

  return (
    <>
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-sm w-full shadow-2xl">
            <h3 className="font-playfair font-bold text-navy text-xl mb-3">Delete Listing?</h3>
            <p className="text-gray-600 font-inter text-sm mb-6">This cannot be undone. The listing and all associated data will be permanently deleted.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm font-inter hover:bg-gray-50">Cancel</button>
              <button onClick={() => handleDelete(confirmDelete)} disabled={deleting === confirmDelete}
                className="flex-1 py-2.5 bg-red-600 text-white font-semibold text-sm font-inter hover:bg-red-700 disabled:opacity-50">
                {deleting === confirmDelete ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Price</th>
              <th>Status</th>
              <th>Beds/Baths</th>
              <th>Featured</th>
              <th>Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((l) => (
              <tr key={l.id}>
                <td>
                  <div>
                    <p className="font-semibold text-navy">{l.address}</p>
                    <p className="text-xs text-gray-400">{l.city}, OH {l.zip}</p>
                  </div>
                </td>
                <td className="font-semibold text-navy font-playfair">{formatPrice(l.price)}</td>
                <td>
                  <span className={`text-xs font-bold px-2 py-1 font-inter ${getStatusColor(l.status)}`}>{l.status}</span>
                </td>
                <td className="text-gray-600">{l.bedrooms} bd / {l.bathrooms} ba</td>
                <td>
                  {l.featured ? <span className="text-[#1A1A1A] text-xs font-bold">★ Featured</span> : <span className="text-gray-300 text-xs">—</span>}
                </td>
                <td className="text-gray-400 text-xs">{formatDate(l.createdAt)}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/listings/${l.id}/edit`} className="p-1.5 text-gray-400 hover:text-navy transition-colors" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </Link>
                    {l.status !== "Sold" && (
                      <button onClick={() => handleMarkSold(l.id)} className="p-1.5 text-gray-400 hover:text-green-600 transition-colors" title="Mark Sold">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {l.status === "Active" && (
                      <button onClick={() => handleMarkPending(l.id)} className="p-1.5 text-gray-400 hover:text-yellow-600 transition-colors" title="Mark Pending">
                        <Clock className="w-4 h-4" />
                      </button>
                    )}
                    <button onClick={() => setConfirmDelete(l.id)} className="p-1.5 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
