"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        centered ? "text-center" : "",
        className
      )}
    >
      {label && (
        <p className={cn(
          "label-gold mb-3",
          dark && "text-[#E8F840]"
        )}>
          {label}
        </p>
      )}
      <h2
        className={cn(
          "heading-lg pb-4",
          centered ? "mx-auto" : "",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            centered ? "mx-auto" : "",
            dark ? "text-white/70" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
