import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatPrice, formatDate } from "@/lib/utils";
import { Home, FileText, Users, Calendar, PlusCircle, ArrowRight } from "lucide-react";

async function getDashboardData() {
  const [activeListings, soldListings, totalLeads, publishedPosts, recentListings, recentLeads] = await Promise.all([
    prisma.listing.count({ where: { status: { in: ["Active", "Pending", "Coming Soon"] } } }),
    prisma.listing.count({ where: { status: "Sold" } }),
    prisma.lead.count(),
    prisma.blogPost.count({ where: { status: "Published" } }),
    prisma.listing.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);
  return { activeListings, soldListings, totalLeads, publishedPosts, recentListings, recentLeads };
}

export default async function AdminDashboard() {
  const { activeListings, soldListings, totalLeads, publishedPosts, recentListings, recentLeads } = await getDashboardData();

  const stats = [
    { label: "Active Listings", value: activeListings, icon: Home, color: "bg-blue-500", href: "/admin/listings" },
    { label: "Sold Listings", value: soldListings, icon: Home, color: "bg-green-500", href: "/admin/listings/sold" },
    { label: "Total Leads", value: totalLeads, icon: Users, color: "bg-gold", href: "/admin/leads" },
    { label: "Blog Posts", value: publishedPosts, icon: FileText, color: "bg-purple-500", href: "/admin/blog" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-bold text-navy">Dashboard</h1>
        <p className="text-gray-500 font-inter text-sm mt-1">Welcome back, Scott.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="admin-card hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.color} p-2.5 rounded-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
            </div>
            <p className="font-playfair text-3xl font-bold text-navy">{stat.value}</p>
            <p className="text-gray-500 text-sm font-inter mt-1">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="admin-card mb-8">
        <h2 className="font-playfair font-bold text-navy text-lg mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/listings/new" className="btn-navy flex items-center gap-2 text-sm py-2.5 px-5">
            <PlusCircle className="w-4 h-4" /> Add Listing
          </Link>
          <Link href="/admin/blog/new" className="btn-gold flex items-center gap-2 text-sm py-2.5 px-5">
            <PlusCircle className="w-4 h-4" /> New Blog Post
          </Link>
          <Link href="/admin/leads" className="btn-outline-gold flex items-center gap-2 text-sm py-2.5 px-5">
            <Users className="w-4 h-4" /> View Leads
          </Link>
          <Link href="/admin/open-houses/new" className="flex items-center gap-2 text-sm py-2.5 px-5 border border-gray-300 text-gray-700 hover:border-navy hover:text-navy transition-all font-inter font-semibold">
            <Calendar className="w-4 h-4" /> Add Open House
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Listings */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair font-bold text-navy text-lg">Recent Listings</h2>
            <Link href="/admin/listings" className="text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider hover:text-gold-light font-inter">View All →</Link>
          </div>
          {recentListings.length > 0 ? (
            <div className="space-y-3">
              {recentListings.map((l) => (
                <div key={l.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold text-sm text-navy font-inter">{l.address}, {l.city}</p>
                    <p className="text-xs text-gray-400 font-inter">{l.status} · {formatDate(l.createdAt)}</p>
                  </div>
                  <span className="font-playfair font-bold text-navy text-sm">{formatPrice(l.price)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm font-inter">No listings yet. <Link href="/admin/listings/new" className="text-[#1A1A1A]">Add one →</Link></p>
          )}
        </div>

        {/* Recent Leads */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair font-bold text-navy text-lg">Recent Leads</h2>
            <Link href="/admin/leads" className="text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider hover:text-gold-light font-inter">View All →</Link>
          </div>
          {recentLeads.length > 0 ? (
            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold text-sm text-navy font-inter">{lead.firstName} {lead.lastName}</p>
                    <p className="text-xs text-gray-400 font-inter">{lead.formType} · {formatDate(lead.createdAt)}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 font-inter ${
                    lead.status === "New" ? "bg-blue-100 text-blue-700" :
                    lead.status === "Contacted" ? "bg-yellow-100 text-yellow-700" :
                    lead.status === "Qualified" ? "bg-green-100 text-green-700" :
                    "bg-gray-100 text-gray-500"
                  }`}>{lead.status}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm font-inter">No leads yet. Forms on the public site will populate this.</p>
          )}
        </div>
      </div>
    </div>
  );
}
