"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { pushGTMEvent } from "@/lib/gtm";
import { Loader2, CheckCircle } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().optional(),
  address: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  formType: string;
  sourcePage: string;
  title?: string;
  subtitle?: string;
  showAddress?: boolean;
  showMessage?: boolean;
  ctaText?: string;
  dark?: boolean;
  compact?: boolean;
}

export default function LeadForm({
  formType,
  sourcePage,
  title,
  subtitle,
  showAddress = false,
  showMessage = false,
  ctaText = "Get Started",
  dark = false,
  compact = false,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType,
          sourcePage,
        }),
      });

      if (res.ok) {
        pushGTMEvent("lead_submitted", { form_type: formType, source_page: sourcePage });
        setSubmitted(true);
        reset();
      }
    } catch {
      // fail silently — still show thank you
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = dark
    ? "w-full bg-white/10 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors font-inter text-sm"
    : "form-input";
  const labelCls = dark ? "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 font-inter" : "form-label";

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center text-center py-8 ${compact ? "" : "min-h-[200px]"}`}>
        <CheckCircle className={`w-12 h-12 mb-4 ${dark ? "text-[#FF6B00]" : "text-green-500"}`} />
        <h3 className={`font-playfair text-xl font-bold mb-2 ${dark ? "text-white" : "text-navy"}`}>
          Thank You!
        </h3>
        <p className={`text-sm ${dark ? "text-white/70" : "text-gray-600"}`}>
          Scott will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h3
          className={`font-playfair font-bold mb-2 ${compact ? "text-xl" : "text-2xl"} ${dark ? "text-white" : "text-navy"}`}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-6 ${dark ? "text-white/70" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className={compact ? "grid grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div>
            <label className={labelCls}>First Name *</label>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className={inputCls}
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className={labelCls}>Last Name</label>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputCls}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className={labelCls}>Phone</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(513) 555-0000"
            className={inputCls}
          />
        </div>

        {showAddress && (
          <div>
            <label className={labelCls}>Property Address</label>
            <input
              {...register("address")}
              placeholder="123 Main St, Harrison, OH"
              className={inputCls}
            />
          </div>
        )}

        {showMessage && (
          <div>
            <label className={labelCls}>Message</label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell Scott about your real estate needs..."
              className={`${inputCls} resize-none`}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            ctaText
          )}
        </button>
      </form>
    </div>
  );
}
