"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import LeadForm from "@/components/ui/LeadForm";
import { CheckCircle, XCircle, Clock, ShieldCheck, Star, ArrowRight, Phone } from "lucide-react";

export default function HomeValuePage() {
  return (
    <PublicLayout>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-28 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Headline + copy */}
            <div className="pt-4">
              <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-5">
                Free for Harrison Homeowners
              </p>

              <h1 className="font-playfair text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 leading-[1.1]">
                Find Out What Your Harrison Home Will Actually Sell For —
                <span className="text-[#E8F840]"> Not the Zillow Guess.</span>
              </h1>

              <p className="text-white/65 text-lg font-inter leading-relaxed mb-8 max-w-xl">
                Get a personalized video from a Harrison firefighter who&apos;s closed deals on your
                street — delivered to your inbox within 24 hours. No computer estimates.
                No pressure. No automated follow-up calls.
              </p>

              {/* Trust icons */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  { icon: Clock,       text: "Delivered within 24 hours — usually same day" },
                  { icon: ShieldCheck, text: "No obligation, no pressure, no spam calls" },
                  { icon: CheckCircle, text: "Real MLS comps — not an algorithm" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#E8F840] flex-shrink-0" />
                    <span className="text-white/70 text-sm font-inter">{text}</span>
                  </div>
                ))}
              </div>

              {/* Market proof bar */}
              <div className="border border-white/10 bg-white/5 p-5 grid grid-cols-3 gap-4">
                {[
                  { stat: "98.4%", label: "Sale-to-list ratio" },
                  { stat: "43",    label: "Avg. days on market" },
                  { stat: "$181",  label: "Median price / sq ft" },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-playfair text-2xl font-bold text-[#E8F840]">{stat}</p>
                    <p className="text-white/40 text-xs font-inter mt-0.5">{label}</p>
                  </div>
                ))}
                <p className="col-span-3 text-white/25 text-xs font-inter text-center pt-1">
                  Harrison OH 45030 — 2026 market data
                </p>
              </div>
            </div>

            {/* RIGHT: Form card */}
            <div className="bg-white shadow-2xl">
              <div className="bg-[#E8F840] px-7 py-5">
                <p className="text-[#1A1A1A] text-xs font-bold uppercase tracking-widest font-inter mb-1">
                  Request Your Free Video Report
                </p>
                <h2 className="font-playfair text-xl font-bold text-[#1A1A1A]">
                  What&apos;s My Home Worth?
                </h2>
                <p className="text-[#1A1A1A]/60 text-sm font-inter mt-1">
                  Scott reviews every request personally. 60 seconds to fill out.
                </p>
              </div>
              <div className="px-7 py-8">
                <LeadForm
                  formType="home_valuation"
                  sourcePage="/home-value"
                  showAddress
                  showMessage
                  ctaText="Send Me My Free Home Value"
                />
                <p className="text-gray-400 text-xs font-inter text-center mt-4 leading-relaxed">
                  Your info stays between us. No lead-selling. No ISA team blowing up your phone.
                  Just Scott — a Harrison firefighter who gives straight answers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROBLEM: WHY ZILLOW IS WRONG ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E8F840] bg-[#1A1A1A] inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1.5 mb-5">
              The Problem With Every Other Tool
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5">
              Zillow Has Never Walked Your Street
            </h2>
            <p className="text-gray-500 font-inter leading-relaxed max-w-2xl mx-auto">
              Zillow&apos;s Zestimate is generated by an algorithm that&apos;s never set foot in your home.
              It doesn&apos;t know your finished basement, your updated kitchen, or your corner lot.
              It&apos;s been off by <strong>$40,000–$80,000</strong> on Harrison homes. I&apos;ve seen it.
            </p>
            <p className="text-gray-500 font-inter leading-relaxed max-w-2xl mx-auto mt-3">
              Sibcy Cline&apos;s website literally says in their own fine print:{" "}
              <em className="text-gray-700">&ldquo;These values are generated by automated computer modeling
              and should not be considered a definitive statement of this property&apos;s worth.&rdquo;</em>
            </p>
            <p className="text-gray-800 font-semibold font-inter mt-4">
              They&apos;re telling you to your face: don&apos;t trust this.
            </p>
          </div>

          {/* 3-column comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 overflow-hidden">
            {[
              {
                tag: "Zillow / Online Tools",
                title: "The Algorithm",
                bg: "bg-red-50", header: "bg-red-500",
                icon: XCircle, iconColor: "text-red-300",
                textColor: "text-gray-600",
                items: [
                  "National data models — not local",
                  "No condition or update insight",
                  "Can miss by 5–20%",
                  "Doesn't know Harrison streets",
                  "Sellers get burned every month",
                ],
              },
              {
                tag: "Scott Windsor",
                title: "The Real Number",
                bg: "bg-[#1A1A1A]", header: "bg-[#E8F840]",
                icon: CheckCircle, iconColor: "text-[#E8F840]",
                textColor: "text-white/75",
                featured: true,
                items: [
                  "Real MLS comps from your zip",
                  "Adjusted for your condition & updates",
                  "Current active competition",
                  "Pricing strategy included",
                  "24 years of local knowledge",
                ],
              },
              {
                tag: "Why It Matters",
                title: "The Result",
                bg: "bg-gray-50", header: "bg-gray-700",
                icon: CheckCircle, iconColor: "text-gray-400",
                textColor: "text-gray-600",
                items: [
                  "Priced right on day one",
                  "Attracts serious buyers fast",
                  "Fewer costly price reductions",
                  "Faster, cleaner close",
                  "More money in your pocket",
                ],
              },
            ].map((col) => (
              <div key={col.title} className="flex flex-col">
                <div className={`${col.header} px-6 py-4`}>
                  <p className={`text-xs font-inter uppercase tracking-widest mb-1 ${col.featured ? "text-[#1A1A1A]/60" : "text-white/60"}`}>
                    {col.tag}
                  </p>
                  <h3 className={`font-playfair font-bold text-xl ${col.featured ? "text-[#1A1A1A]" : "text-white"}`}>
                    {col.title}
                  </h3>
                </div>
                <div className={`${col.bg} px-6 py-6 flex-1`}>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <col.icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${col.iconColor}`} />
                        <span className={`text-sm font-inter ${col.textColor}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs font-inter mt-3">
            On a $300,000 home, a 10% Zillow error = $30,000 mispriced. That&apos;s the cost of skipping a proper CMA.
          </p>
        </div>
      </section>

      {/* ─── OFFER STACK ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E8F840] bg-[#1A1A1A] inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1.5 mb-5">
              What You Actually Get
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Here&apos;s Everything Included — Free
            </h2>
          </div>

          <div className="space-y-0 border border-gray-200 overflow-hidden">
            {[
              {
                num: "01",
                title: "Your Personalized Harrison Home Value Video",
                value: "~$200 value",
                desc: "A 3–5 minute personal video where Scott walks you through the 3 most recent comparable sales closest to your home — what sold, for how much, how long they sat, and what that means for your specific price range in today's market. Not a computer estimate. Scott, on video, talking about your home.",
              },
              {
                num: "02",
                title: "The 14-Point Pre-Listing Checklist — Harrison Edition",
                value: "Worth $8K–$22K at closing",
                desc: "The exact prep list Scott gives every seller before they go live. Most sellers spend money on the wrong things — full remodels that add zero to the sale price — and skip the $400 fixes that cost $6,000 at inspection. This checklist tells you what actually moves the needle in the Harrison market. Based on 100+ closed transactions.",
              },
              {
                num: "03",
                title: "The Harrison Market Snapshot",
                value: "Real-time data",
                desc: "What's actually selling in 45030 right now, what's sitting, and what that means for your timing. Days on market have shifted dramatically in the last 18 months. You deserve to know the real picture before you make a $300,000 decision.",
              },
              {
                num: "04",
                title: "Scott's Direct Line — No Team, No ISA",
                value: "Priceless",
                desc: "After you watch the video, if you want to talk, you call Scott directly. No assistant screening your call. No automated text sequences at 9pm. No team of buyer's agents you've never met. Just Scott. You can call or not — completely your choice.",
              },
            ].map(({ num, title, value, desc }, i) => (
              <div
                key={num}
                className={`flex gap-6 p-7 border-b border-gray-200 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"}`}
              >
                <div className="font-playfair text-4xl font-bold text-gray-100 flex-shrink-0 leading-none select-none w-12">
                  {num}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-inter font-bold text-[#1A1A1A] text-base">{title}</h3>
                    <span className="bg-[#E8F840] text-[#1A1A1A] text-xs font-bold font-inter px-2 py-0.5 uppercase tracking-wide">
                      {value}
                    </span>
                  </div>
                  <p className="text-gray-500 font-inter text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total value callout */}
          <div className="bg-[#1A1A1A] p-7 mt-0 border-t-4 border-[#E8F840]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-white/40 text-xs font-inter uppercase tracking-widest mb-1">Total value</p>
                <p className="font-playfair text-3xl font-bold text-white">
                  $500+ <span className="text-white/30 line-through text-xl ml-2">if you paid for it</span>
                </p>
                <p className="text-white/50 font-inter text-sm mt-2">
                  Your cost: <strong className="text-[#E8F840]">$0.</strong>{" "}
                  Because Scott spent 24 years as a Harrison firefighter — and that&apos;s not how he operates.
                </p>
              </div>
              <a
                href="#get-started"
                className="flex-shrink-0 bg-[#E8F840] text-[#1A1A1A] font-bold font-inter px-8 py-4 text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
              >
                Get Mine Free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1A1A1A] text-xs font-bold uppercase tracking-widest font-inter mb-3">
              Harrison Homeowners
            </p>
            <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A]">
              What Sellers Say After Working with Scott
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Scott sold our home in 11 days — $7,000 over asking. He knows this market better than anyone. We tried another agent first who gave us bad advice. Scott fixed everything and got results.",
                name: "Mike & Jenny Schroeder",
                city: "Harrison, OH",
              },
              {
                quote: "Scott got us $22,000 more than we expected on the sale of our house. His pricing strategy was exactly right. We were skeptical at first but he knew what he was doing.",
                name: "Beth & Dave Collinsworth",
                city: "Whitewater Township",
              },
              {
                quote: "I wanted to sell quickly and quietly. Scott handled everything professionally. Closed in 3 weeks. I've referred him to three of my neighbors since.",
                name: "Donna Hartman",
                city: "Harrison, OH",
              },
            ].map(({ quote, name, city }) => (
              <div key={name} className="border border-gray-100 bg-[#F7F7F7] p-7">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8F840] text-[#E8F840]" />
                  ))}
                </div>
                <p className="text-gray-700 font-inter text-sm leading-relaxed mb-5 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#1A1A1A] text-sm font-inter">{name}</p>
                  <p className="text-gray-400 text-xs font-inter">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IS SCOTT ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8F840] text-xs font-bold uppercase tracking-widest font-inter mb-4">
                Why Take Real Estate Advice From a Firefighter?
              </p>
              <h2 className="font-playfair text-3xl font-bold text-white mb-5">
                Because the people who trust you most are the ones who showed up when it mattered.
              </h2>
              <p className="text-white/60 font-inter text-sm leading-relaxed mb-4">
                I spent 24 years as a Harrison firefighter. I&apos;ve responded to calls in every
                neighborhood in this city. I know which streets flood in March, which subdivisions
                have HOA drama, which blocks are turning over fast — and which ones aren&apos;t.
              </p>
              <p className="text-white/60 font-inter text-sm leading-relaxed mb-4">
                When you&apos;re a firefighter, people trust you because you showed up when it
                mattered — not because you sold them something. That&apos;s how I approach real estate.
              </p>
              <p className="text-white/60 font-inter text-sm leading-relaxed mb-6">
                I give you the real numbers. I tell you what I&apos;d do if it were my house. And if
                you decide not to sell, or to use a different agent — that&apos;s your call. No hard feelings.
              </p>
              <div className="border-l-4 border-[#E8F840] pl-5">
                <p className="text-white font-bold font-inter">Scott Windsor</p>
                <p className="text-white/50 text-sm font-inter">Broker | Align Right Realty Infinity</p>
                <p className="text-white/50 text-sm font-inter">24-Year Harrison Firefighter</p>
                <a href="tel:5133076449" className="text-[#E8F840] text-sm font-bold font-inter mt-1 block hover:text-white transition-colors">
                  513-307-6449
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Years serving Harrison", value: "24+" },
                { label: "Transactions closed in Hamilton County", value: "100+" },
                { label: "Average seller result above list price", value: "+2.3%" },
                { label: "Firefighters ranked #1 most trusted profession", value: "92%" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                  <span className="text-white/50 font-inter text-sm">{label}</span>
                  <span className="font-playfair text-2xl font-bold text-[#E8F840]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM FORM ─────────────────────────────────────────────────── */}
      <section id="get-started" className="section-padding bg-white">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E8F840] bg-[#1A1A1A] inline-block text-xs font-bold uppercase tracking-widest font-inter px-3 py-1.5 mb-5">
              Ready to Know Your Number?
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              The market has shifted. Sellers who price right are still winning.
            </h2>
            <p className="text-gray-500 font-inter">
              Find out which side you&apos;re on — for free, with no obligation.
            </p>
          </div>

          <div className="border border-gray-200 bg-[#F7F7F7] p-8">
            <LeadForm
              formType="home_valuation"
              sourcePage="/home-value"
              showAddress
              showMessage
              ctaText="Send Me My Free Home Value Video"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              {[
                { icon: Clock,       text: "Delivered in 24 hours" },
                { icon: ShieldCheck, text: "No obligation" },
                { icon: CheckCircle, text: "Personal — not automated" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#1A1A1A] flex-shrink-0" />
                  <span className="text-gray-500 text-xs font-inter">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Or call directly */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm font-inter mb-3">Prefer to talk now?</p>
            <a
              href="tel:5133076449"
              className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold font-inter text-lg hover:text-[#1A1A1A]/70 transition-colors"
            >
              <Phone className="w-5 h-5" />
              513-307-6449
            </a>
          </div>
        </div>
      </section>

    </PublicLayout>
  );
}
