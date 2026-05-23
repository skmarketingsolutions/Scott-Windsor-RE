import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { PlusCircle, Edit2, Eye, EyeOff } from "lucide-react";
import AdminBlogActions from "@/components/admin/AdminBlogActions";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-navy">Blog</h1>
          <p className="text-gray-500 text-sm font-inter mt-1">{posts.length} post{posts.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/admin/blog/new" className="btn-gold flex items-center gap-2 text-sm py-2.5 px-5">
          <PlusCircle className="w-4 h-4" /> New Post
        </Link>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        {posts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Published</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div>
                        <p className="font-semibold text-navy">{post.title}</p>
                        <p className="text-xs text-gray-400 font-mono">/{post.slug}</p>
                      </div>
                    </td>
                    <td><span className="text-xs bg-gray-100 text-[#1A1A1A] px-2 py-1 font-semibold font-inter">{post.category}</span></td>
                    <td>
                      <span className={`text-xs font-bold px-2 py-1 font-inter ${post.status === "Published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="text-gray-500">{post.views.toLocaleString()}</td>
                    <td className="text-gray-400 text-xs">{post.publishedAt ? formatDate(post.publishedAt) : "—"}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/blog/${post.id}/edit`} className="p-1.5 text-gray-400 hover:text-navy transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <AdminBlogActions postId={post.id} status={post.status} slug={post.slug} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 font-inter mb-4">No blog posts yet.</p>
            <Link href="/admin/blog/new" className="btn-gold inline-flex text-sm">Create First Post</Link>
          </div>
        )}
      </div>
    </div>
  );
}
