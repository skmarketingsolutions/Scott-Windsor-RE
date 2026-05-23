import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Real listings from Scott Windsor's Align Right Realty Infinity profile
// Source: alignrightinfinity.com/agents/Scott-Windsor/8864339
// These are properties where Scott was the listing agent (verified)

const realListings = [
  {
    slug: "1516-fairchild-dr-harrison-oh",
    address: "1516 Fairchild Dr",
    city: "Harrison",
    state: "OH",
    zip: "45030",
    price: 525000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3240,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 525000,
    soldDate: new Date("2024-01-01"),
    description: "Stunning 4 bed / 4 bath home in Harrison, Ohio. 3,240 sq ft of beautifully finished living space. This Harrison gem offers generous rooms, quality finishes, and the community lifestyle that makes this zip code so sought-after. Listed and sold by Scott Windsor, Align Right Realty Infinity.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "623-deerfield-dr-harrison-oh",
    address: "623 Deerfield Dr",
    city: "Harrison",
    state: "OH",
    zip: "45030",
    price: 315000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1500,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 315000,
    soldDate: new Date("2024-03-01"),
    description: "Charming 4 bedroom, 2 bath home on Deerfield Drive in Harrison. 1,500 sq ft with great bones and a fantastic Harrison location close to schools, parks, and the I-74 corridor. Sold by Scott Windsor, Align Right Realty Infinity.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "202-elbern-ave-harrison-oh",
    address: "202 Elbern Ave",
    city: "Harrison",
    state: "OH",
    zip: "45030",
    price: 239000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1440,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 239000,
    soldDate: new Date("2024-02-01"),
    description: "Well-maintained 4 bed / 2 bath home on Elbern Ave in Harrison, Ohio. 1,440 sq ft with excellent value in a convenient Harrison location. Perfect for families looking for space without the premium price. Sold by Scott Windsor, Align Right Realty Infinity.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "7887-hamilton-scipo-rd-morgan-twp-oh",
    address: "7887 Hamilton Scipo Rd",
    city: "Morgan Twp",
    state: "OH",
    zip: "45053",
    price: 649900,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2166,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 649900,
    soldDate: new Date("2023-10-01"),
    description: "Exceptional property at 7887 Hamilton Scipo Road in Morgan Township. 3 beds, 3 baths, 2,166 sq ft with premium finishes and a peaceful rural setting. This property exemplifies the value you can find in Southwest Ohio just outside the Cincinnati metro. Listed and sold by Scott Windsor.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "11440-gideon-ln-sycamore-twp-oh",
    address: "11440 Gideon Ln",
    city: "Sycamore Twp",
    state: "OH",
    zip: "45249",
    price: 669000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2845,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 669000,
    soldDate: new Date("2023-08-01"),
    description: "Impressive 4 bedroom, 3 bathroom home in Sycamore Township. 2,845 sq ft of refined living space. This beautifully appointed home in a desirable Sycamore Township location showcases what Scott Windsor's multi-million dollar production looks like — premium homes, professional marketing, real results.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
  {
    slug: "7034-state-road-46-st-leon-in",
    address: "7034 State Road 46",
    city: "St Leon",
    state: "IN",
    zip: "47060",
    price: 249900,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 2100,
    propertyType: "Single Family",
    status: "Sold",
    soldPrice: 249900,
    soldDate: new Date("2023-06-01"),
    description: "Unique 2 bed / 2 bath property on State Road 46 in St. Leon, Indiana. 2,100 sq ft — exceptional value with generous space for the price. Cross-state expertise: Scott Windsor serves buyers and sellers across the Southwest Ohio / Southeast Indiana region.",
    photos: JSON.stringify(["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"]),
    featured: false,
    featuredOrder: 0,
  },
];

async function main() {
  console.log("Seeding real listings from Scott Windsor's verified transactions...\n");

  let added = 0;
  let skipped = 0;

  for (const listing of realListings) {
    const existing = await prisma.listing.findUnique({ where: { slug: listing.slug } });
    if (existing) {
      console.log(`  ⏭  Already exists: ${listing.address}`);
      skipped++;
      continue;
    }
    await prisma.listing.create({ data: listing });
    console.log(`  ✓  Added: ${listing.address}, ${listing.city} — $${listing.price.toLocaleString()} (${listing.status})`);
    added++;
  }

  const total = await prisma.listing.count();
  console.log(`\n✅ Done. Added ${added} listings, skipped ${skipped} duplicates.`);
  console.log(`📊 Total listings in database: ${total}\n`);

  // Show full summary
  const all = await prisma.listing.findMany({ orderBy: { createdAt: "desc" } });
  console.log("Current database contents:");
  for (const l of all) {
    console.log(`  • ${l.address}, ${l.city} — $${l.price.toLocaleString()} [${l.status}]${l.featured ? " ⭐" : ""}`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
