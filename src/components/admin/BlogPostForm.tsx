"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2, Save } from "lucide-react";
import { slugify } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface Props { post?: BlogPost; }

export default function BlogPostForm({ post }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [body, setBody] = useState(post?.body || "");

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: post ? {
      title: post.title, slug: post.slug, heroImage: post.heroImage || "",
      metaTitle: post.metaTitle || "", metaDescription: post.metaDescription || "",
      keywords: post.keywords || "", category: post.category, status: post.status,
    } : { category: "Market Updates", status: "Draft" },
  });

  const title = watch("title");

  const onSubmit = async (data: any) => {
    setSaving(true);
    const url = post ? `/api/blog/${post.id}` : "/api/blog";
    const method = post ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, body, publishedAt: data.status === "Published" ? new Date().toISOString() : null }),
    });
    setSaving(false);
    if (res.ok) router.push("/admin/blog");
  };

  const inputCls = "form-input";
  const labelCls = "form-label";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-card">
            <div className="space-y-4">
              <div>
                <label className={labelCls}>Title *</label>
                <input {...register("title")} className={inputCls} placeholder="Post title..." required
                  onBlur={() => !post && setValue("slug", slugify(title || ""))} />
              </div>
              <div>
                <label className={labelCls}>Slug</label>
                <input {...register("slug")} className={inputCls} placeholder="post-slug" />
              </div>
              <div>
                <label className={labelCls}>Hero Image URL</label>
                <input {...register("heroImage")} className={inputCls} placeholder="https://..." />
              </div>
            </div>
          </div>

          <div className="admin-card">
            <label className={labelCls}>Body (HTML)</label>
            <p className="text-xs text-gray-400 font-inter mb-2">Write HTML or paste from a text editor. Use &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt; etc.</p>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              rows={20}
              className={`${inputCls} font-mono text-xs`}
              placeholder="<p>Start writing...</p>"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="font-playfair font-bold text-navy mb-4">Publish Settings</h3>
            <div className="space-y-4">
              <div>
                <label className={labelCls}>Status</label>
                <select {...register("status")} className={inputCls}>
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Category</label>
                <select {...register("category")} className={inputCls}>
                  {["Market Updates", "Neighborhood Guides", "Buyer Tips", "Seller Tips", "Community"].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="font-playfair font-bold text-navy mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className={labelCls}>Meta Title</label>
                <input {...register("metaTitle")} className={inputCls} placeholder="SEO title..." />
              </div>
              <div>
                <label className={labelCls}>Meta Description</label>
                <textarea {...register("metaDescription")} rows={3} className={inputCls} placeholder="SEO description..." />
              </div>
              <div>
                <label className={labelCls}>Keywords (comma separated)</label>
                <input {...register("keywords")} className={inputCls} placeholder="harrison ohio, real estate..." />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn-navy flex-1 flex items-center justify-center gap-2">
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" />Saving...</> : <><Save className="w-4 h-4" />Save</>}
            </button>
            <button type="button" onClick={() => router.back()} className="btn-outline-gold px-4">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}
