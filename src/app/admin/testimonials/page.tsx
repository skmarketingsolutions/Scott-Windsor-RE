"use client";

import { useState, useEffect } from "react";
import { PlusCircle, Edit2, Trash2, Eye, EyeOff, Star } from "lucide-react";

interface Testimonial {
  id: string; clientName: string; city?: string; quote: string;
  starRating: number; listingAddress?: string; visible: boolean; order: number;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState({ clientName: "", city: "", quote: "", starRating: 5, listingAddress: "", visible: true });

  useEffect(() => {
    fetch("/api/testimonials/all").then(r => r.json()).then(setTestimonials);
  }, []);

  const save = async () => {
    const url = editing ? `/api/testimonials/${editing.id}` : "/api/testimonials";
    const method = editing ? "PUT" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await res.json();
    if (editing) setTestimonials(prev => prev.map(t => t.id === editing.id ? data : t));
    else setTestimonials(prev => [...prev, data]);
    setShowForm(false); setEditing(null); setForm({ clientName: "", city: "", quote: "", starRating: 5, listingAddress: "", visible: true });
  };

  const toggleVisible = async (t: Testimonial) => {
    await fetch(`/api/testimonials/${t.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ visible: !t.visible }) });
    setTestimonials(prev => prev.map(x => x.id === t.id ? { ...x, visible: !x.visible } : x));
  };

  const del = async (id: string) => {
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const startEdit = (t: Testimonial) => {
    setEditing(t); setForm({ clientName: t.clientName, city: t.city || "", quote: t.quote, starRating: t.starRating, listingAddress: t.listingAddress || "", visible: t.visible }); setShowForm(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-playfair text-3xl font-bold text-navy">Testimonials</h1>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="btn-gold flex items-center gap-2 text-sm py-2.5 px-5">
          <PlusCircle className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      {showForm && (
        <div className="admin-card mb-6">
          <h2 className="font-playfair font-bold text-navy mb-4">{editing ? "Edit" : "Add"} Testimonial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="form-label">Client Name *</label><input className="form-input" value={form.clientName} onChange={e => setForm(f => ({ ...f, clientName: e.target.value }))} /></div>
            <div><label className="form-label">City</label><input className="form-input" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} /></div>
            <div className="md:col-span-2"><label className="form-label">Quote *</label><textarea className="form-input" rows={4} value={form.quote} onChange={e => setForm(f => ({ ...f, quote: e.target.value }))} /></div>
            <div><label className="form-label">Listing Address</label><input className="form-input" value={form.listingAddress} onChange={e => setForm(f => ({ ...f, listingAddress: e.target.value }))} /></div>
            <div><label className="form-label">Star Rating</label>
              <select className="form-input" value={form.starRating} onChange={e => setForm(f => ({ ...f, starRating: Number(e.target.value) }))}>
                {[5,4,3,2,1].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={save} className="btn-navy text-sm py-2.5 px-6">Save</button>
            <button onClick={() => { setShowForm(false); setEditing(null); }} className="btn-outline-gold text-sm py-2.5 px-6">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {testimonials.map(t => (
          <div key={t.id} className={`admin-card flex items-start gap-4 ${!t.visible ? "opacity-50" : ""}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {Array.from({ length: t.starRating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#1A1A1A] fill-[#FF6B00]" />)}
              </div>
              <p className="font-inter italic text-gray-700 mb-2 text-sm">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-semibold text-navy text-sm font-inter">{t.clientName}{t.city ? ` — ${t.city}` : ""}</p>
              {t.listingAddress && <p className="text-[#1A1A1A] text-xs font-inter mt-0.5">{t.listingAddress}</p>}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => toggleVisible(t)} className={`p-1.5 ${t.visible ? "text-green-500" : "text-gray-300"}`}>{t.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</button>
              <button onClick={() => startEdit(t)} className="p-1.5 text-gray-400 hover:text-navy"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => del(t.id)} className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
        {!testimonials.length && <div className="text-center py-16 text-gray-400 font-inter">No testimonials yet. Add your first one above.</div>}
      </div>
    </div>
  );
}
