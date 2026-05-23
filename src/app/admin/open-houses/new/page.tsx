"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function NewOpenHousePage() {
  const router = useRouter();
  const [listings, setListings] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ listingId: "", date: "", startTime: "", endTime: "", notes: "" });

  useEffect(() => {
    fetch("/api/listings?status=Active&limit=100").then(r => r.json()).then(d => setListings(d.listings || []));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/open-houses", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false);
    router.push("/admin/open-houses");
  };

  return (
    <div>
      <h1 className="font-playfair text-3xl font-bold text-navy mb-8">Schedule Open House</h1>
      <div className="admin-card max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="form-label">Property *</label>
            <select className="form-input" value={form.listingId} onChange={e => setForm(f => ({ ...f, listingId: e.target.value }))} required>
              <option value="">Select a listing...</option>
              {listings.map(l => <option key={l.id} value={l.id}>{l.address}, {l.city}</option>)}
            </select>
          </div>
          <div><label className="form-label">Date *</label><input type="text" className="form-input" placeholder="Saturday, January 15, 2025" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="form-label">Start Time *</label><input className="form-input" placeholder="1:00 PM" value={form.startTime} onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))} required /></div>
            <div><label className="form-label">End Time *</label><input className="form-input" placeholder="3:00 PM" value={form.endTime} onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))} required /></div>
          </div>
          <div><label className="form-label">Notes</label><textarea className="form-input" rows={3} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Light refreshments, bring your pre-approval..." /></div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn-navy flex items-center gap-2">
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" />Saving...</> : "Schedule Open House"}
            </button>
            <button type="button" onClick={() => router.back()} className="btn-outline-gold">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
