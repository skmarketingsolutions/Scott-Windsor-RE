"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Home, BookOpen, Users, Calendar,
  Star, Image, Settings, LogOut, Menu, X, ChevronRight
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/listings", label: "Listings", icon: Home },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/open-houses", label: "Open Houses", icon: Calendar },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (item: typeof navItems[0]) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="block">
          <p className="font-playfair font-bold text-white text-lg">Scott Windsor</p>
          <p className="text-[#FF6B00] text-xs uppercase tracking-widest font-inter font-semibold mt-0.5">
            Admin Dashboard
          </p>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-inter font-medium transition-colors",
              isActive(item)
                ? "bg-[#FF6B00] text-[#1A1A1A]"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {item.label}
            {isActive(item) && <ChevronRight className="w-3 h-3 ml-auto" />}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <Link href="/" target="_blank" className="flex items-center gap-3 px-3 py-2 text-xs text-white/50 hover:text-white font-inter transition-colors">
          <Home className="w-3.5 h-3.5" />
          View Public Site
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-3 px-3 py-2 text-xs text-white/50 hover:text-red-400 font-inter transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-navy flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 h-full bg-navy flex flex-col">
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 font-inter hidden sm:block">
              windsorinfinity@gmail.com
            </span>
            <div className="w-8 h-8 bg-[#2C2C2C] flex items-center justify-center">
              <span className="text-white text-xs font-bold">SW</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
