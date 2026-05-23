"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, TrendingUp, Home, Users } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: 24,
    suffix: " Yrs",
    label: "Harrison Fire Dept",
  },
  {
    icon: TrendingUp,
    value: null,
    suffix: "",
    label: "Dollar Producer",
    custom: "Multi-Million",
  },
  {
    icon: Home,
    value: null,
    suffix: "",
    label: "Align Right Realty Infinity",
    custom: "Broker/Owner",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Families Helped in SW Ohio",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 md:py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-6 py-4 first:pl-0 last:pr-0"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="font-playfair text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1">
                {stat.value !== null ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{stat.custom}</span>
                )}
              </div>
              <p className="text-gray-500 text-xs font-inter tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
