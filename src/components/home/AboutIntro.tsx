"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, MapPin } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-navy overflow-hidden">
              <Image
                src="/images/scott-windsor-headshot.jpg"
                alt="Scott Windsor - Harrison Ohio Real Estate Agent"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Credential card */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-[#2C2C2C]" />
                <div>
                  <p className="font-playfair font-bold text-[#1A1A1A] text-sm">
                    24 Years
                  </p>
                  <p className="text-xs text-gray-500 font-inter">
                    Harrison Fire Dept.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#2C2C2C]" />
                <div>
                  <p className="font-playfair font-bold text-[#1A1A1A] text-sm">
                    Multi-Million
                  </p>
                  <p className="text-xs text-gray-500 font-inter">
                    Dollar Producer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-4">About Scott</p>

            <h2 className="heading-lg text-[#1A1A1A] mb-6">
              From Fighting Fires to{" "}
              <span className="relative inline-block">
                Finding Homes
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00]" />
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 font-inter">
              Scott Windsor spent 24 years as a firefighter for the City of
              Harrison — responding to calls, knowing every street, and building
              deep relationships with the people who live here. When he retired
              from the department, he channeled that same dedication and
              community trust into real estate.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 font-inter">
              As the Owner and Agent of Align Right Realty Infinity, Scott covers
              the full Greater Cincinnati metro and Southwest Ohio. His approach
              isn&apos;t corporate or transactional — it&apos;s the same hands-on, honest
              mindset that defined his 24 years in the firehouse, applied across
              the entire Cincinnati market.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: MapPin, text: "Harrison, OH Native" },
                { icon: Shield, text: "Retired Firefighter" },
                { icon: Award, text: "Owner & Agent" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white px-4 py-2.5 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-[#2C2C2C]" />
                  <span className="text-sm font-semibold text-[#1A1A1A] font-inter">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-navy inline-flex items-center gap-2"
            >
              Meet Scott
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
