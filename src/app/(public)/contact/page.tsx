import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Scott Windsor | Harrison Ohio Realtor | 513-307-6449",
  description:
    "Contact Scott Windsor — Harrison Ohio real estate broker. Call 513-307-6449 or fill out the form. Response within 24 hours.",
};

const GHL_CALENDAR_ID = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID;

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-3">Get In Touch</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Talk Real Estate
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            No automated systems, no gatekeepers. You reach Scott directly.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                Send a Message
              </h2>
              <LeadForm
                formType="contact"
                sourcePage="/contact"
                showMessage
                ctaText="Send Message"
              />
            </div>

            {/* Info + Calendar */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                  Contact Info
                </h2>
                <div className="space-y-5">
                  <a href="tel:5133076449" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#E8F840]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-inter mb-0.5">Phone</p>
                      <p className="font-semibold text-navy group-hover:text-gold transition-colors font-inter">513-307-6449</p>
                    </div>
                  </a>
                  <a href="mailto:windsorinfinity@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#E8F840]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-inter mb-0.5">Email</p>
                      <p className="font-semibold text-navy group-hover:text-gold transition-colors font-inter">windsorinfinity@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#E8F840]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-inter mb-0.5">Location</p>
                      <p className="font-semibold text-navy font-inter">Harrison, OH 45030</p>
                      <p className="text-sm text-gray-500 font-inter">Serving Hamilton & Butler County</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#E8F840]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-inter mb-0.5">Response Time</p>
                      <p className="font-semibold text-navy font-inter">Within 24 Hours</p>
                      <p className="text-sm text-gray-500 font-inter">Usually same day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GHL Calendar Embed */}
              <div>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                  Schedule a Call
                </h2>
                <div
                  id="ghl-calendar"
                  className="min-h-[400px] border border-gray-200 bg-offwhite flex items-center justify-center"
                >
                  {GHL_CALENDAR_ID ? (
                    <iframe
                      src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
                      className="w-full min-h-[400px] border-0"
                      title="Schedule a Call with Scott Windsor"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-gray-400 text-sm font-inter">
                        Calendar embed: add your GHL Calendar ID to enable scheduling.
                      </p>
                      <p className="text-gray-500 text-sm font-inter mt-2">
                        Or call directly:{" "}
                        <a href="tel:5133076449" className="text-[#1A1A1A] font-semibold">
                          513-307-6449
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
