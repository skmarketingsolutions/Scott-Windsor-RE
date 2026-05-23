import { Suspense } from "react";
import { Metadata } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import HomeHero from "@/components/home/HomeHero";
import StatsBar from "@/components/home/StatsBar";
import LoftyActiveListings from "@/components/listings/LoftyActiveListings";
import ListingsSkeleton from "@/components/listings/ListingsSkeleton";
import AboutIntro from "@/components/home/AboutIntro";
import OpenHouseWidget from "@/components/home/OpenHouseWidget";
import NeighborhoodGrid from "@/components/home/NeighborhoodGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RecentSales from "@/components/home/RecentSales";
import SchoolsSection from "@/components/home/SchoolsSection";
import HomeValueCTA from "@/components/home/HomeValueCTA";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import FinalCTA from "@/components/home/FinalCTA";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Harrison Ohio Real Estate Agent | Scott Windsor | Align Right Realty Infinity",
  description:
    "Scott Windsor — retired Harrison firefighter of 24 years, multi-million dollar producing real estate broker/owner. Helping families buy and sell homes in Harrison, Ohio and Southwest Ohio.",
  keywords: [
    "harrison ohio real estate agent",
    "harrison ohio homes for sale",
    "harrison oh realtor",
    "homes for sale harrison oh 45030",
    "real estate broker harrison ohio",
    "sell my home harrison ohio",
    "best real estate agent harrison ohio",
    "align right realty infinity harrison ohio",
  ],
  openGraph: {
    title: "Harrison Ohio Real Estate | Scott Windsor",
    description: "24 years protecting Harrison. Now helping families buy and sell in it.",
    url: "/",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://scottwindsor.com/#agent",
      name: "Scott Windsor",
      description:
        "Scott Windsor is a retired Harrison firefighter of 24 years and multi-million dollar producing real estate broker at Align Right Realty Infinity. Specializing in Harrison Ohio homes for sale, new construction in Parks of Whitewater and Trailhead, and Southwest Ohio real estate.",
      telephone: "513-307-6449",
      email: "windsorinfinity@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Harrison",
        addressRegion: "OH",
        postalCode: "45030",
        addressCountry: "US",
      },
      areaServed: [
        "Harrison, OH",
        "Cleves, OH",
        "North Bend, OH",
        "New Baltimore, OH",
        "Whitewater Township, OH",
        "Hamilton County, OH",
        "Butler County, OH",
        "Anderson Township, OH",
        "Sharonville, OH",
        "West Harrison, OH",
        "Southwest Ohio",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Align Right Realty Infinity",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://scottwindsor.com/#business",
      name: "Scott Windsor | Align Right Realty Infinity",
      telephone: "513-307-6449",
      email: "windsorinfinity@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Harrison",
        addressRegion: "OH",
        postalCode: "45030",
      },
      priceRange: "$149,900 to $625,000",
      description: "Scott Windsor is a retired Harrison firefighter of 24 years and multi-million dollar producing real estate broker at Align Right Realty Infinity. Specializing in Harrison Ohio homes for sale, new construction in Parks of Whitewater and Trailhead, and Southwest Ohio real estate.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.2598,
        longitude: -84.8219,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best real estate agent in Harrison Ohio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scott Windsor at Align Right Realty Infinity is a local broker with 24 years serving the Harrison community, first as a firefighter and now as a multi-million dollar producing real estate broker. Call 513-307-6449.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average home price in Harrison Ohio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The median home price in Harrison Ohio is approximately $277,859 to $384,950 as of 2026, which is 11.7% below the national average cost of living making it one of Southwest Ohio's best values.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Harrison Ohio from Cincinnati?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harrison Ohio is approximately 30 minutes northwest of Cincinnati via Interstate 74, making it a popular choice for families who want more space and value while maintaining an easy Cincinnati commute.",
          },
        },
        {
          "@type": "Question",
          name: "Is Harrison Ohio a good place to live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Harrison Ohio offers a sparse suburban feel, strong Southwest Local Schools ranked in the top 30% of Ohio, nearly 5,000 acres of Miami Whitewater Forest, a growing DORA district downtown, and a cost of living 11.7% below the national average.",
          },
        },
      ],
    },
  ],
};

async function getHomePageData() {
  const [openHouses, testimonials, soldListings, blogPosts] =
    await Promise.all([
      prisma.openHouse.findMany({
        where: {
          cancelled: false,
          date: { gte: new Date().toISOString().split("T")[0] },
        },
        include: { listing: true },
        take: 4,
        orderBy: { date: "asc" },
      }),
       prisma.testimonial.findMany({
        where: { visible: true },
        orderBy: { order: "asc" },
        take: 8,
      }),
      prisma.listing.findMany({
        where: { status: "Sold" },
        orderBy: { soldDate: "desc" },
        take: 6,
      }),
      prisma.blogPost.findMany({
        where: { status: "Published" },
        orderBy: { publishedAt: "desc" },
        take: 3,
      }),
    ]);

  return { openHouses, testimonials, soldListings, blogPosts };
}

export default async function HomePage() {
  const { openHouses, testimonials, soldListings, blogPosts } =
    await getHomePageData();

  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <HomeHero />
      <StatsBar />
      <AboutIntro />
      {openHouses.length > 0 && <OpenHouseWidget openHouses={openHouses as any} />}
      <NeighborhoodGrid />
      <TestimonialsSection testimonials={testimonials as any} />
      <RecentSales listings={soldListings as any} />
      <SchoolsSection />
      <HomeValueCTA />
      <LatestBlogPosts posts={blogPosts as any} />
      <FinalCTA />
    </PublicLayout>
  );
}
