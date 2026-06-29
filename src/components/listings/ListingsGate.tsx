"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Home, Lock } from "lucide-react";
import LoftyIDXWidget from "./LoftyIDXWidget";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
});

type FormData = z.infer<typeof schema>;

export default function ListingsGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          message: "Requested full MLS access via listings gate",
        }),
      });
    } catch {
      // fail silently — always unlock
    } finally {
      setLoading(false);
      setUnlocked(true);
    }
  };

  if (unlocked) {
    return (
      <div>
        {/* Confirmation strip */}
        <div className="bg-[#FF6B00] py-4 px-6">
          <div className="container-wide flex flex-col sm:flex-row items-center gap-3 justify-center text-center sm:text-left">
            <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
            <p className="text-white font-inter text-sm font-semibold">
              You&apos;re in. Scott will be in touch shortly — check your email.
              Browse every active listing below.
            </p>
          </div>
        </div>

        {/* IDX widget */}
        <section className="bg-white py-8">
          <div className="container-wide">
            <LoftyIDXWidget />
          </div>
        </section>
      </div>
    );
  }

  return (
    <section className="bg-[#1A1A1A] py-16 md:py-24">
      <div className="container-wide">
        <div className="max-w-xl mx-auto">

          {/* Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center">
                <Home className="w-7 h-7 text-[#FF6B00]" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FF6B00] flex items-center justify-center">
                <Lock className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="text-center mb-10">
            <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">
              Full MLS Access — Greater Cincinnati
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              See Every Home for Sale.<br />Right Now. For Free.
            </h2>
            <p className="text-white/60 font-inter text-base leading-relaxed max-w-md mx-auto">
              Every active listing in Greater Cincinnati and Southwest Ohio — not just
              Scott&apos;s. Updated daily from the MLS. Enter your info and get
              instant access in 10 seconds.
            </p>
          </div>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { num: "500+", label: "Homes Sold" },
              { num: "24 yrs", label: "Local Expert" },
              { num: "100%", label: "Free — No Pressure" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-playfair text-xl font-bold text-[#FF6B00]">{num}</div>
                <div className="text-white/50 text-xs font-inter uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                {...register("firstName")}
                placeholder="First Name"
                className="w-full bg-white/8 border border-white/15 px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
              />
              {errors.firstName && (
                <p className="text-[#FF6B00] text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/8 border border-white/15 px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
              />
              {errors.email && (
                <p className="text-[#FF6B00] text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/8 border border-white/15 px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors font-inter text-sm"
              />
              {errors.phone && (
                <p className="text-[#FF6B00] text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold font-inter uppercase tracking-wider py-4 text-sm transition-colors flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  One second...
                </>
              ) : (
                "Show Me the Homes →"
              )}
            </button>
          </form>

          <p className="text-white/30 text-xs text-center font-inter mt-4">
            No spam. No pressure. Scott will reach out — not a robot.
          </p>

        </div>
      </div>
    </section>
  );
}
