"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Trash2 } from "lucide-react";

export default function AdminBlogActions({ postId, status, slug }: { postId: string; status: string; slug: string }) {
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);

  const togglePublish = async () => {
    const newStatus = status === "Published" ? "Draft" : "Published";
    await fetch(`/api/blog/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus, publishedAt: newStatus === "Published" ? new Date().toISOString() : null }),
    });
    router.refresh();
  };

  const deletePost = async () => {
    await fetch(`/api/blog/${postId}`, { method: "DELETE" });
    setConfirm(false);
    router.refresh();
  };

  return (
    <>
      {confirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-sm w-full shadow-2xl">
            <h3 className="font-playfair font-bold text-navy text-xl mb-3">Delete Post?</h3>
            <p className="text-gray-600 text-sm font-inter mb-6">This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm">Cancel</button>
              <button onClick={deletePost} className="flex-1 py-2.5 bg-red-600 text-white font-semibold text-sm hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={togglePublish} className={`p-1.5 transition-colors ${status === "Published" ? "text-green-500 hover:text-gray-400" : "text-gray-400 hover:text-green-500"}`} title={status === "Published" ? "Unpublish" : "Publish"}>
        {status === "Published" ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
      </button>
      <button onClick={() => setConfirm(true)} className="p-1.5 text-gray-400 hover:text-red-600 transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </>
  );
}
