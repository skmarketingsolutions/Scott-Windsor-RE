"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";

const schools = [
  {
    name: "Southwest Early Childhood Learning Center",
    type: "Early Childhood",
    grades: "PreK",
  },
  {
    name: "Harrison Elementary School",
    type: "Elementary",
    grades: "K–5",
    phone: "(513) 367-4161",
  },
  {
    name: "Miami Whitewater Elementary School",
    type: "Elementary",
    grades: "K–5",
  },
  {
    name: "Harrison Junior School",
    type: "Junior High",
    grades: "6–8",
    address: "9840 West Rd, Harrison OH 45030",
    phone: "(513) 367-4831",
  },
  {
    name: "William Henry Harrison High School",
    type: "High School",
    grades: "9–12",
    address: "10800 Campbell Rd, Harrison OH 45030",
  },
];

const stats = [
  { value: "Top 30%", label: "of Ohio Schools" },
  { value: "94%", label: "Graduation Rate" },
  { value: "4,382", label: "Students Enrolled" },
  { value: "100%", label: "Licensed Teachers" },
];

export default function SchoolsSection() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-gold mb-4">Education</p>
            <h2 className="heading-lg text-[#1A1A1A] mb-2">
              Southwest Local Schools
            </h2>
            <p className="text-xs text-[#555555] font-inter mb-1">
              10800 Campbell Rd, Harrison, OH 45030 &bull; (513) 367-4139
            </p>
            <p className="text-xs text-[#555555] font-inter mb-6">
              <a
                href="https://www.southwestschools.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#2C2C2C] transition-colors"
              >
                southwestschools.org
              </a>
              {" "}&bull; 4,382 students &bull; Grades PreK–12 &bull; 5 Schools
            </p>
            <p className="text-[#555555] leading-relaxed mb-6 font-inter">
              Homes in Harrison Ohio are served by the Southwest Local School District, a district families choose specifically when relocating from Cincinnati. Smaller class sizes, strong community involvement, and excellent academic performance make this one of Southwest Ohio's most sought-after districts.
            </p>

            <div className="space-y-3 mb-8">
              {schools.map((school) => (
                <div
                  key={school.name}
                  className="flex items-start gap-4 bg-white p-4 shadow-sm"
                >
                  <GraduationCap className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm font-inter">
                      {school.name}
                    </p>
                    <p className="text-[#555555] text-xs font-inter">
                      {school.type} &bull; Grades {school.grades}
                      {school.phone && ` • ${school.phone}`}
                    </p>
                    {school.address && (
                      <p className="text-[#555555] text-xs font-inter">{school.address}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/harrison-ohio-schools"
              className="btn-navy inline-flex items-center gap-2"
            >
              School District Info
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#2C2C2C] p-8 md:p-12"
          >
            <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-4">
              District Performance
            </p>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">
              Why Families Choose Southwest Local
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 p-4">
                  <p className="font-playfair text-2xl font-bold text-[#FF6B00]">
                    {s.value}
                  </p>
                  <p className="text-white/70 text-xs font-inter mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 border-t border-white/10 pt-6">
              {[
                "New construction in Parks of Whitewater from Ryan Homes",
                "New homes in Trailhead from Drees Homes starting at $420k",
                "New construction in Sedona Reserve from Ryan Homes",
                "30 minutes to downtown Cincinnati via I-74",
                "More home for your money than Cincinnati suburbs",
                "Miami Whitewater Forest with 4,000 acres of trails",
                "Small town feel with big city access",
                "Math proficiency 63% vs 52% Ohio average",
                "Reading proficiency 68% vs 60% Ohio average",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-2 flex-shrink-0" />
                  <p className="text-white/80 text-sm font-inter">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
