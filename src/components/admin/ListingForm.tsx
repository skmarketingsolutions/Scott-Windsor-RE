"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Save, X, Upload } from "lucide-react";
import type { Listing } from "@/types";

const schema = z.object({
  address: z.string().min(1, "Address required"),
  city: z.string().min(1, "City required"),
  state: z.string().default("OH"),
  zip: z.string().min(1, "ZIP required"),
  price: z.coerce.number().min(1, "Price required"),
  bedrooms: z.coerce.number().min(0),
  bathrooms: z.coerce.number().min(0),
  sqft: z.coerce.number().optional(),
  lotSize: z.string().optional(),
  yearBuilt: z.coerce.number().optional(),
  propertyType: z.string().default("Single Family"),
  status: z.string().default("Active"),
  description: z.string().optional(),
  virtualTourUrl: z.string().optional(),
  openHouseDate: z.string().optional(),
  openHouseEndTime: z.string().optional(),
  mlsNumber: z.string().optional(),
  featured: z.boolean().default(false),
  soldPrice: z.coerce.number().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props { listing?: Listing & { photos?: string[] }; }

export default function ListingForm({ listing }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [photoUrls, setPhotoUrls] = useState<string[]>(listing?.photos || []);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: listing ? {
      address: listing.address, city: listing.city, state: listing.state, zip: listing.zip,
      price: listing.price, bedrooms: listing.bedrooms, bathrooms: listing.bathrooms,
      sqft: listing.sqft || undefined, lotSize: listing.lotSize || undefined,
      yearBuilt: listing.yearBuilt || undefined, propertyType: listing.propertyType,
      status: listing.status, description: listing.description || undefined,
      virtualTourUrl: listing.virtualTourUrl || undefined,
      openHouseDate: listing.openHouseDate || undefined,
      mlsNumber: listing.mlsNumber || undefined,
      featured: listing.featured, soldPrice: listing.soldPrice || undefined,
    } : { state: "OH", status: "Active", propertyType: "Single Family", featured: false },
  });

  const onSubmit = async (data: FormData) => {
    setSaving(true);
    const url = listing ? `/api/listings/${listing.id}` : "/api/listings";
    const method = listing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, photos: photoUrls }),
    });

    setSaving(false);
    if (res.ok) router.push("/admin/listings");
  };

  const addPhotoUrl = () => {
    if (newPhotoUrl.trim()) {
      setPhotoUrls([...photoUrls, newPhotoUrl.trim()]);
      setNewPhotoUrl("");
    }
  };

  const inputCls = "form-input";
  const labelCls = "form-label";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Address */}
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy text-lg mb-5">Property Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelCls}>Street Address *</label>
            <input {...register("address")} className={inputCls} placeholder="123 Main Street" />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <label className={labelCls}>City *</label>
            <input {...register("city")} className={inputCls} placeholder="Harrison" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>State</label>
              <input {...register("state")} className={inputCls} defaultValue="OH" />
            </div>
            <div>
              <label className={labelCls}>ZIP *</label>
              <input {...register("zip")} className={inputCls} placeholder="45030" />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy text-lg mb-5">Property Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>List Price *</label>
            <input {...register("price")} type="number" className={inputCls} placeholder="299000" />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
          </div>
          <div>
            <label className={labelCls}>Bedrooms</label>
            <input {...register("bedrooms")} type="number" className={inputCls} placeholder="3" />
          </div>
          <div>
            <label className={labelCls}>Bathrooms</label>
            <input {...register("bathrooms")} type="number" step="0.5" className={inputCls} placeholder="2" />
          </div>
          <div>
            <label className={labelCls}>Sq Footage</label>
            <input {...register("sqft")} type="number" className={inputCls} placeholder="1800" />
          </div>
          <div>
            <label className={labelCls}>Lot Size</label>
            <input {...register("lotSize")} className={inputCls} placeholder="0.25 acres" />
          </div>
          <div>
            <label className={labelCls}>Year Built</label>
            <input {...register("yearBuilt")} type="number" className={inputCls} placeholder="2005" />
          </div>
          <div>
            <label className={labelCls}>Property Type</label>
            <select {...register("propertyType")} className={inputCls}>
              {["Single Family", "Condo", "Townhouse", "Multi-Family", "Land"].map(t => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Status</label>
            <select {...register("status")} className={inputCls}>
              {["Active", "Pending", "Sold", "Coming Soon"].map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>MLS Number</label>
            <input {...register("mlsNumber")} className={inputCls} placeholder="1234567" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy text-lg mb-5">Description</h2>
        <textarea {...register("description")} rows={8} className={inputCls} placeholder="Describe the property..." />
      </div>

      {/* Photos */}
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy text-lg mb-5">Photos</h2>
        <p className="text-gray-500 text-sm font-inter mb-4">Add photo URLs (upload to Cloudinary or uploadthing, then paste URL here).</p>
        <div className="flex gap-3 mb-4">
          <input value={newPhotoUrl} onChange={e => setNewPhotoUrl(e.target.value)} className={`${inputCls} flex-1`} placeholder="https://..." onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addPhotoUrl())} />
          <button type="button" onClick={addPhotoUrl} className="btn-gold px-4 py-2 text-sm flex items-center gap-2">
            <Upload className="w-4 h-4" /> Add
          </button>
        </div>
        {photoUrls.length > 0 && (
          <div className="space-y-2">
            {photoUrls.map((url, i) => (
              <div key={i} className="flex items-center gap-3 bg-offwhite p-2">
                <span className="text-xs text-gray-500 font-mono flex-1 truncate">{url}</span>
                <button type="button" onClick={() => setPhotoUrls(photoUrls.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Optional */}
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy text-lg mb-5">Optional Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Virtual Tour URL</label>
            <input {...register("virtualTourUrl")} className={inputCls} placeholder="https://matterport.com/..." />
          </div>
          <div>
            <label className={labelCls}>Open House Date</label>
            <input {...register("openHouseDate")} className={inputCls} placeholder="Sat, Jan 15 · 1–3 PM" />
          </div>
          <div>
            <label className={labelCls}>Sold Price (if sold)</label>
            <input {...register("soldPrice")} type="number" className={inputCls} placeholder="305000" />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input {...register("featured")} type="checkbox" id="featured" className="w-4 h-4 accent-gold" />
            <label htmlFor="featured" className="text-sm font-semibold text-charcoal font-inter cursor-pointer">
              Feature on Homepage
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button type="submit" disabled={saving} className="btn-navy flex items-center gap-2">
          {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Listing</>}
        </button>
        <button type="button" onClick={() => router.back()} className="btn-outline-gold">Cancel</button>
      </div>
    </form>
  );
}
