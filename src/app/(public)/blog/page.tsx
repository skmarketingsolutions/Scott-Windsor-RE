export const dynamic = "force-dynamic";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Harrison OH Real Estate Blog Market Updates | Scott Windsor",
  description:
    "Scott Windsor shares Harrison OH real estate insights — market updates, neighborhood guides & buyer and seller tips from a 24-year local expert.",
  keywords: ["harrison ohio real estate blog", "harrison ohio housing market", "harrison ohio market update 2025"],
};

const categories = ["All", "Market Updates", "Neighborhood Guides", "Buyer Tips", "Seller Tips", "Community"];

async function getPosts(category?: string) {
  const where: any = { status: "Published" };
  if (category && category !== "All") where.category = category;
  return prisma.blogPost.findMany({ where, orderBy: { publishedAt: "desc" } });
}

export default async function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;
  const posts = await getPosts(category);

  return (
    <PublicLayout>
      <div className="bg-navy pt-28 pb-16">
        <div className="container-wide">
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest font-inter mb-3">Local Expertise</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Greater Cincinnati Real Estate Insights
          </h1>
          <p className="text-white/70 text-lg font-inter max-w-xl">
            Market updates, neighborhood guides, and straight talk about Greater Cincinnati real estate, from someone who actually lives here.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {categories.map(cat => (
              <Link key={cat} href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
                className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider font-inter transition-all ${
                  (cat === "All" && !category) || cat === category
                    ? "bg-navy text-white"
                    : "text-gray-500 hover:text-navy hover:bg-offwhite"
                }`}>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group block bg-white shadow-sm hover:shadow-md transition-all">
                    <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                      {post.heroImage ? (
                        <Image src={post.heroImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                          <span className="text-white/20 font-playfair text-xl">Blog</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-gold text-[#1A1A1A] text-xs font-bold uppercase tracking-wider px-2.5 py-1 font-inter">{post.category}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-inter">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt ? formatDate(post.publishedAt) : "Recent"}
                      </div>
                      <h2 className="font-playfair font-bold text-navy text-xl mb-3 leading-tight group-hover:text-gold transition-colors">{post.title}</h2>
                      {post.metaDescription && <p className="text-gray-500 text-sm leading-relaxed font-inter line-clamp-3">{post.metaDescription}</p>}
                      <div className="flex items-center gap-2 mt-4 text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider font-inter">
                        Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-inter text-lg mb-4">No posts yet in this category.</p>
              <Link href="/blog" className="btn-navy inline-flex">View All Posts</Link>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
