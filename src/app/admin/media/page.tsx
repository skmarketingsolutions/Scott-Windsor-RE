export default function AdminMediaPage() {
  return (
    <div>
      <h1 className="font-playfair text-3xl font-bold text-navy mb-4">Media Library</h1>
      <p className="text-gray-500 font-inter mb-8">Upload images via Uploadthing or Cloudinary and paste URLs into your listings and blog posts.</p>
      <div className="admin-card">
        <h2 className="font-playfair font-bold text-navy mb-4">Quick Upload Tips</h2>
        <ul className="space-y-3 text-sm text-gray-600 font-inter">
          <li className="flex items-start gap-2"><span className="text-[#1A1A1A] font-bold mt-0.5">1.</span> Configure <code className="text-xs bg-gray-100 px-1">UPLOADTHING_SECRET</code> and <code className="text-xs bg-gray-100 px-1">UPLOADTHING_APP_ID</code> in .env</li>
          <li className="flex items-start gap-2"><span className="text-[#1A1A1A] font-bold mt-0.5">2.</span> Or use Cloudinary: upload at cloudinary.com, copy the URL, paste into listing/blog photo fields</li>
          <li className="flex items-start gap-2"><span className="text-[#1A1A1A] font-bold mt-0.5">3.</span> Recommended: host on Cloudinary with auto WebP conversion for best performance</li>
          <li className="flex items-start gap-2"><span className="text-[#1A1A1A] font-bold mt-0.5">4.</span> For listing photos: 1200×900px minimum, landscape orientation recommended</li>
          <li className="flex items-start gap-2"><span className="text-[#1A1A1A] font-bold mt-0.5">5.</span> For blog hero images: 1200×630px for proper OG preview</li>
        </ul>
      </div>
    </div>
  );
}
