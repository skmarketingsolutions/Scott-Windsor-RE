import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.blogPost.findUnique({ where: { id: params.id } });
  if (!post) notFound();
  return <div><h1 className="font-playfair text-3xl font-bold text-navy mb-8">Edit Post</h1><BlogPostForm post={post as any} /></div>;
}
