"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface LatestBlogPostsProps {
  posts: BlogPost[];
}

export default function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            label="Market Insights"
            title="Greater Cincinnati Real Estate Blog"
            subtitle="Local market updates, neighborhood guides, and expert advice."
          />
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all font-inter whitespace-nowrap"
          >
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block group bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                  {post.heroImage ? (
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                      <span className="text-white/20 font-playfair text-2xl">Blog</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-gold text-[#1A1A1A] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-inter">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-inter">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt ? formatDate(post.publishedAt) : "Recent"}
                  </div>
                  <h3 className="font-playfair font-bold text-navy text-lg mb-3 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  {post.metaDescription && (
                    <p className="text-gray-500 text-sm leading-relaxed font-inter line-clamp-2">
                      {post.metaDescription}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-4 text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider font-inter">
                    Read Article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
