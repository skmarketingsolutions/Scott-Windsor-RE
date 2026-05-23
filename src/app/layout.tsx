import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GTMScript, GTMNoScript } from "@/components/GTM";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://scottwindsor.com"
  ),
  title: {
    default:
      "Scott Windsor | Harrison Ohio Real Estate Agent | Align Right Realty Infinity",
    template: "%s | Scott Windsor Realtor Harrison OH",
  },
  description:
    "Scott Windsor — retired Harrison firefighter of 24 years, multi-million dollar real estate broker/owner in Harrison, Ohio. Serving Harrison, Cleves, North Bend, New Baltimore, and Southwest Ohio.",
  keywords: [
    "harrison ohio real estate agent",
    "harrison ohio homes for sale",
    "harrison oh realtor",
    "homes for sale harrison oh 45030",
    "real estate broker harrison ohio",
    "sell my home harrison ohio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Scott Windsor | Align Right Realty Infinity",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <GTMScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-inter antialiased bg-white text-charcoal">
        <GTMNoScript />
        {children}
      </body>
    </html>
  );
}
