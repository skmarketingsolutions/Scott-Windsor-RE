export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import LeadForm from "@/components/ui/LeadForm";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface Props { params: { slug: string }; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || "",
    keywords: post.keywords?.split(",").map(k => k.trim()) || [],
    openGraph: { title: post.title, description: post.metaDescription || "", images: post.heroImage ? [post.heroImage] : [] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug, status: "Published" },
  });
  if (!post) notFound();

  // Increment views
  await prisma.blogPost.update({ where: { id: post.id }, data: { views: { increment: 1 } } });

  const related = await prisma.blogPost.findMany({
    where: { status: "Published", category: post.category, id: { not: post.id } },
    take: 3,
    orderBy: { publishedAt: "desc" },
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Person", name: "Scott Windsor" },
    publisher: { "@type": "Organization", name: "Align Right Realty Infinity" },
    datePublished: post.publishedAt?.toISOString(),
    image: post.heroImage,
  };

  return (
    <PublicLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="pt-20">
        {/* Hero */}
        <div className="relative bg-navy">
          {post.heroImage ? (
            <div className="relative h-96 md:h-[500px]">
              <Image src={post.heroImage} alt={post.title} fill className="object-cover opacity-40" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            </div>
          ) : (
            <div className="h-64 bg-gradient-to-br from-navy to-navy-light" />
          )}
          <div className="absolute inset-0 flex items-end">
            <div className="container-wide pb-12">
              <Link href="/blog" className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-inter mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="inline-block bg-gold text-[#1A1A1A] text-xs font-bold uppercase tracking-wider px-3 py-1.5 font-inter mb-4">
                {post.category}
              </div>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-4 text-white/60 text-sm font-inter">
                <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Scott Windsor</span>
                {post.publishedAt && <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.body }} />

              {/* Author bio */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
                <div className="w-16 h-16 bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair font-bold text-white text-lg">SW</span>
                </div>
                <div>
                  <p className="font-playfair font-bold text-navy">Scott Windsor</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-inter mb-2">Real Estate Agent, Align Right Realty Infinity</p>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">
                    Retired Harrison firefighter of 24 years. Multi-million dollar producing real estate agent serving Harrison, Ohio and Southwest Ohio since 2004.
                    <a href="tel:5133076449" className="text-navy font-semibold ml-1 hover:text-gold transition-colors">513-307-6449</a>
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-navy p-6 shadow-xl">
                <h3 className="font-playfair text-lg font-bold text-white mb-4">Talk to Scott About This</h3>
                <LeadForm formType="blog_inquiry" sourcePage={`/blog/${post.slug}`} showMessage ctaText="Get In Touch" dark compact />
              </div>

              {related.length > 0 && (
                <div className="bg-offwhite p-6">
                  <h3 className="font-playfair font-bold text-navy mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.id} href={`/blog/${r.slug}`} className="block group">
                        <p className="text-xs text-[#1A1A1A] uppercase tracking-wider font-inter mb-1">{r.category}</p>
                        <p className="font-semibold text-navy text-sm group-hover:text-gold transition-colors leading-snug">{r.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
