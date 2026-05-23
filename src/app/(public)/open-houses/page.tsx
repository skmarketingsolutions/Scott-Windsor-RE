export const dynamic = "force-dynamic";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import LeadForm from "@/components/ui/LeadForm";
import { Calendar, Clock, MapPin, Bed, Bath } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Houses in Harrison Ohio | Scott Windsor",
  description: "Upcoming open houses in Harrison, Cleves, North Bend, and Southwest Ohio. Hosted by Scott Windsor — Align Right Realty Infinity.",
};

async function getOpenHouses() {
  const today = new Date().toISOString().split("T")[0];
  return prisma.openHouse.findMany({
    where: { cancelled: false, date: { gte: today } },
    include: { listing: true },
    orderBy: { date: "asc" },
  });
}

export default async function OpenHousesPage() {
  const openHouses = await getOpenHouses();

  return (
    <PublicLayout>
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Come See In Person</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Open Houses
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            Tour Scott&apos;s listings firsthand. No pressure, just great homes.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {openHouses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openHouses.map((oh) => (
                <div key={oh.id} className="border border-gray-200 hover:border-gold transition-all group">
                  <div className="bg-navy p-4 flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-[#E8F840]" />
                    <div>
                      <p className="text-white font-semibold font-inter">{oh.date}</p>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{oh.startTime} – {oh.endTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link href={`/listings/${oh.listing.slug}`}>
                      <h2 className="font-playfair text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                        {oh.listing.address}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5 text-navy" />
                      <span className="font-inter">{oh.listing.city}, OH {oh.listing.zip}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-playfair font-bold text-navy text-xl">{formatPrice(oh.listing.price)}</span>
                      <span className="text-gray-400 text-sm font-inter flex items-center gap-2">
                        <Bed className="w-3.5 h-3.5 text-navy" />{oh.listing.bedrooms} bd
                        <Bath className="w-3.5 h-3.5 text-navy" />{oh.listing.bathrooms} ba
                      </span>
                    </div>
                    {oh.notes && <p className="text-gray-500 text-sm font-inter mb-4">{oh.notes}</p>}
                    <LeadForm formType="open_house_rsvp" sourcePage="/open-houses" ctaText="RSVP for Open House" compact />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-bold text-gray-400 mb-3">No Open Houses Scheduled</h2>
              <p className="text-gray-500 font-inter mb-6">Check back soon or contact Scott to schedule a private showing.</p>
              <a href="tel:5133076449" className="btn-gold inline-flex">Call 513-307-6449</a>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
