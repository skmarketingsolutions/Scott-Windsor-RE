"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, X } from "lucide-react";
import LoftyIDXWidget from "./LoftyIDXWidget";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
});

type FormData = z.infer<typeof schema>;

export default function IDXClickGate() {
  const [showModal, setShowModal] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleOverlayClick = () => {
    if (!unlocked) setShowModal(true);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          email: data.email,
          phone: data.phone,
          formType: "listing_search",
          sourcePage: "/listings",
          message: "Requested listing access via IDX click gate",
        }),
      });
    } catch {
      // fail silently
    } finally {
      setLoading(false);
      setUnlocked(true);
      setShowModal(false);
    }
  };

  return (
    <>
      {/* IDX + click intercept overlay */}
      <div className="relative w-full">
        <LoftyIDXWidget />

        {/* Transparent overlay — intercepts first click */}
        {!unlocked && (
          <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="absolute inset-0 z-10 cursor-pointer"
            style={{ background: "transparent" }}
            aria-label="Click to view listing details"
          />
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
          style={{ background: "rgba(0,0,0,0.75)" }}
        >
          <div className="bg-[#1A1A1A] w-full max-w-md relative border border-white/10">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Header */}
              <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">
                Schedule a Showing
              </p>
              <h2 className="font-playfair text-2xl font-bold text-white mb-2 leading-tight">
                Interested in this home?
              </h2>
              <p className="text-white/50 font-inter text-sm mb-7">
                Scott will reach out to confirm details and schedule a showing at your convenience.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5 font-inter">
                    Full Name
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="John Smith"
                    autoFocus
                    className="w-full bg-[#2C2C2C] border border-white/15 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
                  />
                  {errors.firstName && (
                    <p className="text-[#FF6B00] text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5 font-inter">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-[#2C2C2C] border border-white/15 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
                  />
                  {errors.email && (
                    <p className="text-[#FF6B00] text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5 font-inter">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="(513) 000-0000"
                    className="w-full bg-[#2C2C2C] border border-white/15 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
                  />
                  {errors.phone && (
                    <p className="text-[#FF6B00] text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold font-inter uppercase tracking-wider py-4 text-sm transition-colors flex items-center justify-center gap-2 mt-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request a Showing →"
                  )}
                </button>
              </form>

              <p className="text-white/30 text-xs text-center font-inter mt-4">
                Your information is kept private and never shared.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
