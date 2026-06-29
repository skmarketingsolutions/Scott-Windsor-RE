import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const blogPosts = [
  {
    title: "Harrison Ohio Real Estate Market Update 2025",
    slug: "harrison-ohio-real-estate-market-update-2025",
    category: "Market Updates",
    status: "Published",
    publishedAt: new Date("2025-01-15"),
    metaTitle: "Harrison Ohio Real Estate Market Update 2025 | Scott Windsor",
    metaDescription: "Current market conditions in Harrison Ohio — median home prices, days on market, new construction trends, and what buyers and sellers need to know in 2025.",
    keywords: "harrison ohio real estate market 2025, harrison ohio home prices, harrison ohio housing market, homes for sale harrison oh 45030",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    body: `<p>If you're thinking about buying or selling a home in Harrison, Ohio, the 2025 market looks fundamentally different than it did three years ago — and understanding what's actually happening is the difference between a good outcome and an expensive mistake.</p>

<h2>What the Numbers Show</h2>

<p>Harrison Ohio has seen consistent appreciation over the past five years, driven by a combination of new construction activity, migration from the Cincinnati metro, and a persistent shortage of move-in-ready inventory in the $200,000–$350,000 range. That demand hasn't evaporated in 2025 — it's moderated, which is actually healthier for buyers and sellers alike.</p>

<p>Median days on market in Harrison have stretched from the 7–12 days we saw in 2021–2022 to a more normal 18–30 days in 2025. This is a return to a market where buyers have time to think, and sellers need to price correctly from day one rather than relying on a feeding frenzy to paper over an overpriced listing.</p>

<h2>New Construction is Reshaping the Market</h2>

<p>Ryan Homes' Whitewater Trails and Sedona Reserve communities, along with Drees Homes' Trailhead plans, have added meaningful new inventory to Harrison. These communities are absorbing buyers who might otherwise compete for existing homes — which has taken some pressure off resale pricing.</p>

<p>This matters if you're a seller of an existing home: you're now competing not just with other resales, but with new construction that comes with warranties, modern layouts, and builder incentives. Pricing and condition matter more than ever.</p>

<p>For buyers, this is actually welcome news. New construction options in the $300,000–$450,000 range give you more choices than Harrison has offered in decades.</p>

<h2>Interest Rates: The Variable That Drives Everything</h2>

<p>We entered 2025 with mortgage rates that remain elevated compared to the historically anomalous lows of 2020–2021. Most buyers in Harrison are financing at rates in the 6.5%–7.5% range depending on loan type and credit profile. This hasn't stopped the market — it's shifted it.</p>

<p>Buyers are more deliberate. Sellers who price correctly are still closing. Sellers who overprice by 5–10% are sitting for 60–90 days and eventually cutting. The data is clear on this.</p>

<h2>What Sellers Need to Know Right Now</h2>

<p>The most common mistake I see is sellers pricing based on the peak 2022 market — homes that went $30,000–$50,000 over asking with 15 offers. That market is gone. Pricing to the current market means looking at what actually sold in the last 60–90 days, not what sold 18 months ago.</p>

<p>The good news: properly priced, move-in-ready homes in Harrison are still selling well. Buyers who are in the market are serious and qualified. A clean home, competitively priced, with professional photos and a real marketing strategy will move.</p>

<h2>What Buyers Need to Know Right Now</h2>

<p>Harrison Ohio remains one of the best values in the greater Cincinnati market. For what you'd pay for a 1,400 sq ft condo in Mason or Blue Ash, you can buy a 2,200 sq ft home in Parks of Whitewater with a 2-car garage and a backyard. That equation hasn't changed.</p>

<p>Get pre-approved before you start seriously looking. Sellers expect it, and in a market where inventory can move quickly, not having your financing in order means losing homes you want.</p>

<h2>The Bottom Line for 2025</h2>

<p>Harrison Ohio is a stable, demand-driven market. It's not the chaos of 2021, and it's not a buyer's market where you can lowball and win. It's a balanced market that rewards preparation — buyers who know what they want and are ready to act, sellers who price accurately and present their homes well.</p>

<p>If you want the actual numbers for your specific situation — whether that's finding out what your home is worth today, or understanding what you can afford in this market — call me directly. I'll give you a straight answer.</p>

<p><strong>Scott Windsor | 513-307-6449 | windsorinfinity@gmail.com</strong></p>`,
  },
  {
    title: "Moving to Harrison Ohio: Everything Buyers Need to Know",
    slug: "moving-to-harrison-ohio-buyers-guide",
    category: "Buyer Tips",
    status: "Published",
    publishedAt: new Date("2025-02-10"),
    metaTitle: "Moving to Harrison Ohio — Complete Buyer's Guide 2025",
    metaDescription: "Everything you need to know about moving to Harrison, Ohio — neighborhoods, schools, cost of living, commute to Cincinnati, and what homes actually cost in 45030.",
    keywords: "moving to harrison ohio, is harrison ohio a good place to live, harrison ohio from cincinnati, cost of living harrison ohio, harrison ohio commute cincinnati",
    heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    body: `<p>I've had this conversation hundreds of times: a family from Cincinnati — Blue Ash, Kenwood, Madeira, wherever — is watching housing prices climb and asking themselves where they can go to get more for their money without sacrificing everything they care about. The answer, more often than not, is Harrison, Ohio.</p>

<p>I spent 24 years as a Harrison firefighter before I went into real estate. I know this community as well as anyone alive. Here's what I tell people who are considering making the move.</p>

<h2>The Case for Harrison Ohio</h2>

<p>Harrison sits in northwestern Hamilton County along the I-74 corridor — about 22 miles from downtown Cincinnati. The commute to downtown is 28–35 minutes in normal traffic, or 40–45 minutes if you're heading to the eastern suburbs like Kenwood or Eastgate. For most Cincinnati-area jobs, it's completely manageable.</p>

<p>What you get in exchange for that commute is significant. The same $400,000 that buys you a 3-bedroom, 1,600 sq ft older home in Hyde Park or 2,000 sq ft in Mason buys you 2,500–3,000 sq ft of new construction in Parks of Whitewater with a full basement and a 3-car garage. That's not a small difference. That's a fundamentally different quality of life.</p>

<h2>Harrison's Neighborhoods: What You're Actually Choosing Between</h2>

<p><strong>Parks of Whitewater</strong> is the community I show most relocating families first. Ryan Homes' development adjacent to Miami Whitewater Forest offers modern, open-concept homes with current finishes, 2–3 car garages, and walking distance to 4,000 acres of trails and parkland. Prices start in the low $300s and go up from there depending on lot and upgrades.</p>

<p><strong>Trailhead</strong> is where I send buyers who want more customization. Drees Homes builds here, and their floor plans — the Denali, the Arches — give you more flexibility than a production builder. If you want to choose your finishes and wait for your home to be built, Trailhead is worth the look.</p>

<p><strong>Established Harrison neighborhoods</strong> offer older construction at better price points — typically $180,000–$300,000 for homes that may need some updating but offer the bones of a solid house in a community that's been here for generations.</p>

<p><strong>Cleves and North Bend</strong> are for buyers who want something genuinely different. Historic villages along the Ohio River and Great Miami River, with architectural character you simply cannot buy in new construction. If you want a 1920s craftsman with a front porch on a tree-lined street, these communities deliver it.</p>

<h2>The Schools</h2>

<p>Every home in Harrison proper, Cleves, and North Bend is in the Southwest Local School District. This is consistently one of the reasons families choose Harrison — not just one of the reasons.</p>

<p>Southwest Local runs smaller than most Hamilton County districts, which means your kids know their teachers and their teachers know your kids. The high school runs active sports and extracurricular programs. The parent community is engaged. It's not a wealthy district by any means, but it's a good district — and the families who choose it tend to be deeply committed to it.</p>

<h2>Miami Whitewater Forest</h2>

<p>One thing that surprises people who haven't spent time in Harrison: Miami Whitewater Forest is extraordinary. Four thousand acres of parks, trails, a golf course, boating, camping, and greenway trails right on your doorstep. For outdoor families, this is a major reason to choose Harrison over similar-priced suburbs to the east. You can't get this in Mason or Loveland.</p>

<h2>Cost of Living Beyond Housing</h2>

<p>Property taxes in Harrison run lower than much of Hamilton County — you're not paying for the same school system as Indian Hill or the same services as Hyde Park. Groceries, gas, and services are priced at suburban Ohio rates rather than urban-adjacent premiums. Overall, Harrison is a meaningfully more affordable place to live beyond just the home purchase price.</p>

<h2>What I'd Tell a Family Moving Here</h2>

<p>Be honest with yourself about the commute. For most people, I-74 into Cincinnati is straightforward. But if you're working in Blue Ash or Kenwood, add 15 minutes to anything you calculate. Test the commute at the time you'd actually be driving before you buy.</p>

<p>Get pre-approved early. Harrison has been a strong seller's market and inventory in the best price ranges can move fast. Being pre-approved is the difference between getting the house you want and watching it go to someone else.</p>

<p>If you're looking at new construction, bring a buyer's agent — me, or someone else. The builder's sales rep works for the builder. Having your own representation costs you nothing (the builder pays it) and means someone is watching out for your interests on the contract, the inspection, and the closing.</p>

<p>Questions? Call me. I've helped hundreds of families make this move and I can answer whatever you're wondering about in a 15-minute phone call.</p>

<p><strong>Scott Windsor | 513-307-6449</strong></p>`,
  },
  {
    title: "Parks of Whitewater vs Trailhead: Which Harrison Ohio Neighborhood Fits You?",
    slug: "parks-of-whitewater-vs-trailhead-harrison-ohio",
    category: "Neighborhood Guides",
    status: "Published",
    publishedAt: new Date("2025-03-01"),
    metaTitle: "Parks of Whitewater vs Trailhead Harrison Ohio — Which is Right for You?",
    metaDescription: "Detailed comparison of Harrison Ohio's two top new construction communities — Parks of Whitewater (Ryan Homes) vs Trailhead (Drees & Ryan Homes). Prices, floor plans, location, and lifestyle.",
    keywords: "parks of whitewater harrison ohio, trailhead harrison ohio real estate, parks of whitewater vs trailhead, ryan homes harrison ohio, drees homes trailhead harrison ohio",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    body: `<p>If you're buying a new construction home in Harrison Ohio, you've almost certainly come across both Parks of Whitewater and Trailhead. They're the two dominant communities right now, and I get asked to compare them constantly. Here's the honest version of that comparison, from someone who knows both communities well and doesn't have a stake in which one you choose.</p>

<h2>Location and Access</h2>

<p><strong>Parks of Whitewater</strong> sits immediately adjacent to the entrance of Miami Whitewater Forest — which is not a small detail. If your family hikes, bikes, runs trails, or wants to be outside on weekends, this is a legitimately exceptional location. The forest's 4,000 acres of parks, golf, boating, and trails are within walking distance. The tradeoff is that you're slightly further from Harrison's downtown district and commercial corridors.</p>

<p><strong>Trailhead</strong> is positioned closer to Harrison's growing retail and dining areas, and has better direct access to Harrison's community trail network. It's also closer to I-74, which matters if your commute is to downtown Cincinnati or points east.</p>

<p><strong>Bottom line on location:</strong> If outdoor access to the forest is important to you, Parks of Whitewater wins. If daily convenience and commute access are priorities, Trailhead has the edge.</p>

<h2>The Builders and Floor Plans</h2>

<p><strong>Parks of Whitewater</strong> is primarily Ryan Homes. Ryan is a national production builder — they build well, they build efficiently, and their designs are smart. Open-concept layouts, solid standard finishes, reasonable upgrade options. The process is predictable. You know what you're getting.</p>

<p><strong>Trailhead</strong> has both Drees Homes and Ryan Homes, with Drees representing the more premium tier. Drees Homes is a regional Cincinnati-area builder with a longer track record in Southwest Ohio and more flexibility in their build process. Their Denali and Arches plans are legitimately different from production builder designs — larger rooms, more character, more customization options at the design center.</p>

<p><strong>Bottom line on builders:</strong> If you want a smooth, predictable process with solid value, Ryan at Parks of Whitewater is excellent. If you want more customization and a step up in finish quality, Drees in Trailhead is worth the premium.</p>

<h2>Pricing</h2>

<p>Both communities have shifted in price over the past 24 months. Current ranges (always verify with the builder for current pricing):</p>

<ul>
<li><strong>Parks of Whitewater (Ryan):</strong> Typically starting in the low $300s and running to the mid-$400s depending on lot premium, floor plan, and upgrades</li>
<li><strong>Trailhead (Ryan):</strong> Similar range to Parks of Whitewater on the Ryan side</li>
<li><strong>Trailhead (Drees):</strong> Generally starting in the mid-$300s and running to $500,000+ for larger plans with significant upgrades</li>
</ul>

<p>Both communities have lot premium variation — lots backing to open space or the trail system carry a premium. Know what you're comparing when you look at base prices.</p>

<h2>Community Feel</h2>

<p><strong>Parks of Whitewater</strong> has developed a strong neighborhood identity around the outdoor access. Families who chose this community specifically for the trails and parks tend to use them, which creates an active, outdoorsy community culture. Neighbors know each other. There are dog walkers, joggers, and families on bikes.</p>

<p><strong>Trailhead</strong> is newer in parts and the community culture is still developing, but the trail network connection gives it a similar orientation toward outdoor lifestyle. The proximity to Harrison's DORA district means more walkability to restaurants and local activities than Parks of Whitewater currently offers.</p>

<h2>Who Should Choose Parks of Whitewater</h2>

<ul>
<li>Families with kids who will use Miami Whitewater Forest constantly</li>
<li>Buyers who want a proven Ryan Homes process with a great location</li>
<li>Outdoor recreation as a lifestyle priority</li>
<li>Buyers who want good value in the $310,000–$430,000 range</li>
</ul>

<h2>Who Should Choose Trailhead</h2>

<ul>
<li>Buyers who want Drees Homes quality and more customization</li>
<li>Buyers with a tighter commute window who need closer I-74 access</li>
<li>Families who want walkability to Harrison's dining and shopping</li>
<li>Buyers willing to spend $380,000–$500,000 for a step up in finish quality</li>
</ul>

<h2>One More Thing</h2>

<p>Whichever community you choose, don't walk into the builder's sales office without a buyer's agent. I've said this before and I'll keep saying it: the builder's sales rep is paid by the builder to protect the builder's interests. A buyer's agent — paid by the builder, at no cost to you — is there to protect yours. On a $400,000 purchase, having proper representation is not optional.</p>

<p>Call me if you want to tour either community. I know both of them well and I'll give you an honest take on your specific situation.</p>

<p><strong>Scott Windsor | 513-307-6449</strong></p>`,
  },
  {
    title: "How to Sell Your Home in Harrison Ohio and Get Top Dollar",
    slug: "how-to-sell-your-home-harrison-ohio",
    category: "Seller Tips",
    status: "Published",
    publishedAt: new Date("2025-03-20"),
    metaTitle: "How to Sell Your Home in Harrison Ohio for Top Dollar | Scott Windsor",
    metaDescription: "Proven strategies for selling your Harrison Ohio home quickly and at the best price. From pricing strategy to marketing — expert advice from a local real estate agent with 24 years in Harrison.",
    keywords: "sell my home harrison ohio, how to sell house harrison ohio, listing agent harrison ohio, home selling tips harrison ohio, sell home fast harrison oh 45030",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
    body: `<p>Every seller wants the same thing: the most money, in the least time, with the fewest headaches. That's a reasonable goal, and it's achievable — but it requires making the right decisions from the start, not fixing mistakes after you've already been on the market for 45 days with a price reduction.</p>

<p>I've helped hundreds of Harrison Ohio families sell their homes. Here's what I've learned about what actually works.</p>

<h2>Pricing: The Decision That Determines Everything</h2>

<p>Every other decision you make — staging, photos, marketing, negotiation — is downstream from pricing. Price right and you create competition. Price too high and you repel the buyers who would have paid the most, leaving only the ones who show up when you cut the price weeks later and think they can negotiate you down further.</p>

<p>In Harrison, "pricing right" means:</p>

<ul>
<li>Looking at what actually sold in the last 60–90 days within a reasonable radius and square footage range</li>
<li>Adjusting for condition, updates, lot, and location — not just raw square footage</li>
<li>Factoring in current active competition (what buyers have to choose from right now)</li>
<li>Understanding the absorption rate — how quickly homes in your price range are selling</li>
</ul>

<p>I don't price homes to win the listing. I price them to sell. Those aren't always the same thing.</p>

<h2>Condition: The Multiplier on Your Marketing Investment</h2>

<p>Marketing a poorly maintained home is expensive and ineffective. Marketing a well-presented home is how you get multiple offers.</p>

<p>Before we list, I walk through every property and tell sellers specifically what to address. Not everything — some things don't pay back. But the things that will hurt your sale or give buyers ammunition to reduce their offer need to be handled before the first showing.</p>

<p>The highest-return pre-sale improvements are almost always:</p>

<ul>
<li><strong>Decluttering and deep cleaning</strong> — free labor, massive impact</li>
<li><strong>Fresh neutral paint</strong> — typically $1,500–$3,500 for the interior of a standard Harrison home, almost always returns more than cost</li>
<li><strong>Landscaping and curb appeal</strong> — first impressions matter online and in person</li>
<li><strong>Fixing deferred maintenance</strong> — dripping faucets, loose outlets, sticking doors — these signal to buyers that nothing has been maintained</li>
</ul>

<p>I will tell you clearly if a full kitchen remodel will pay back before selling. Usually it won't. Most sellers over-invest in the wrong things and under-invest in the right ones.</p>

<h2>Photography: The Difference Between 200 Clicks and 2,000</h2>

<p>More than 95% of buyers start their search online. The photos are the property. If your photos are dark, shot with a phone, or show clutter and disorder — buyers swipe past. Period.</p>

<p>Professional real estate photography costs $250–$450 in Harrison Ohio. On a $300,000 sale, the cost is 0.1% of the transaction. I use professional photographers on every listing I take. It's not optional.</p>

<h2>Marketing: More Than Just the MLS</h2>

<p>Every agent lists on the MLS. That's the baseline. What I do beyond the MLS is what differentiates results:</p>

<ul>
<li><strong>Targeted social media campaigns</strong> — specifically aimed at buyers in the Cincinnati metro who are looking in the $250,000–$450,000 range in Hamilton County</li>
<li><strong>Personal network outreach</strong> — 24 years in Harrison means I know every active agent and a significant portion of the serious buyers in this market personally</li>
<li><strong>Email campaigns</strong> to active buyers and buyer's agents in my database</li>
<li><strong>Open houses</strong> when appropriate — not every home benefits from one, but some do</li>
</ul>

<h2>The Negotiation</h2>

<p>The offer is not the close. Between offer and closing, you have inspection findings, appraisal results, loan approval contingencies, and closing timeline negotiations. Each of these is an opportunity for the deal to fall apart — or for the buyer to extract concessions.</p>

<p>I negotiate hard on behalf of sellers. When an inspector finds issues, I know the difference between what actually needs to be fixed and what's a buyer trying to get money back. When an appraisal comes in low, I know how to challenge it and when to negotiate from it. This is where experience matters most.</p>

<h2>The First Step</h2>

<p>Call me or fill out the form on this site to request a free home valuation. I'll give you an honest number — not one designed to win your listing, one designed to get you the best outcome.</p>

<p><strong>Scott Windsor | 513-307-6449 | windsorinfinity@gmail.com</strong></p>`,
  },
];

async function main() {
  console.log("Seeding database...");

  // ── Admin user ──────────────────────────────────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL || "windsorinfinity@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const hashedPassword = await bcrypt.hash(adminPassword, 12);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword, name: "Scott Windsor" },
    create: { email: adminEmail, password: hashedPassword, name: "Scott Windsor" },
  });
  console.log(`✓ Admin user: ${adminEmail}`);

  // ── Blog posts ──────────────────────────────────────────────────────────────
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
    console.log(`✓ Blog post: ${post.title.slice(0, 50)}`);
  }

  // ── Testimonials ────────────────────────────────────────────────────────────
  const testimonials = [
    { clientName: "Mike & Jenny Schroeder", city: "Harrison, OH", quote: "Scott sold our home in 11 days — $7,000 over asking. He knows this market better than anyone. We tried another agent first who gave us bad advice. Scott fixed everything and got results.", starRating: 5, listingAddress: "Parks of Whitewater", visible: true, order: 0 },
    { clientName: "Tyler & Amanda Reeves", city: "Cleves, OH", quote: "As first-time buyers, we had no idea what we were doing. Scott was patient, honest, and never pushed us toward something we couldn't afford. We love our house.", starRating: 5, visible: true, order: 1 },
    { clientName: "Donna Hartman", city: "Harrison, OH", quote: "I wanted to sell quickly and quietly. Scott handled everything professionally. Closed in 3 weeks. I've referred him to three of my neighbors since.", starRating: 5, listingAddress: "Harrison, OH", visible: true, order: 2 },
    { clientName: "Ryan & Kayla Bosworth", city: "North Bend, OH", quote: "Scott's background as a firefighter comes through in everything — calm under pressure, totally reliable, and genuinely invested in the community. Best realtor experience we've ever had.", starRating: 5, visible: true, order: 3 },
    { clientName: "James Kowalski", city: "Harrison, OH", quote: "Moved from Cincinnati and was overwhelmed by the options. Scott cut through the noise immediately. He knew exactly which neighborhoods matched what we were looking for and why. Closed in 45 days.", starRating: 5, visible: true, order: 4 },
    { clientName: "Beth & Dave Collinsworth", city: "Whitewater Township", quote: "Scott got us $22,000 more than we expected on the sale of our house. His pricing strategy was exactly right. We were skeptical at first but he knew what he was doing.", starRating: 5, visible: true, order: 5 },
  ];

  // Delete and re-create testimonials (simpler than upsert without unique key)
  const existingCount = await prisma.testimonial.count();
  if (existingCount === 0) {
    for (const t of testimonials) {
      await prisma.testimonial.create({ data: t });
      console.log(`✓ Testimonial: ${t.clientName}`);
    }
  } else {
    console.log(`✓ Testimonials already seeded (${existingCount} records)`);
  }

  // ── Sold listings (real data from Scott's closed transactions) ──────────────
  const soldListings = [
    {
      slug: "11440-gideon-ln-cincinnati",
      address: "11440 Gideon Ln",
      city: "Cincinnati", state: "OH", zip: "45249",
      price: 650000, bedrooms: 4, bathrooms: 2.5, sqft: 2845,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/4704771854-350162802/11440-gideon-ln-cincinnati-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2026-06-04"), soldPrice: 650000, featuredOrder: 99,
    },
    {
      slug: "623-deerfield-dr-harrison",
      address: "623 Deerfield Dr",
      city: "Harrison", state: "OH", zip: "45030",
      price: 315000, bedrooms: 4, bathrooms: 2, sqft: 1500,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/3543282254-656462502/623-deerfield-dr-harrison-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2026-05-04"), soldPrice: 315000, featuredOrder: 99,
    },
    {
      slug: "202-elbern-ave-harrison",
      address: "202 Elbern Ave",
      city: "Harrison", state: "OH", zip: "45030",
      price: 248000, bedrooms: 4, bathrooms: 1.5, sqft: 1440,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/6521006724-649921691/202-elbern-ave-harrison-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2025-05-15"), soldPrice: 248000, featuredOrder: 99,
    },
    {
      slug: "7887-hamilton-scipio-rd-okeana",
      address: "7887 Hamilton Scipio Rd",
      city: "Okeana", state: "OH", zip: "45053",
      price: 670000, bedrooms: 3, bathrooms: 3, sqft: 2166,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/0363132073-029275171/7887-hamilton-scipio-rd-okeana-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2024-05-16"), soldPrice: 670000, featuredOrder: 99,
    },
    {
      slug: "1516-fairchild-dr-harrison",
      address: "1516 Fairchild Dr",
      city: "Harrison", state: "OH", zip: "45030",
      price: 525000, bedrooms: 4, bathrooms: 3.5, sqft: 3240,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/6866859923-594032751/1516-fairchild-dr-harrison-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2023-09-05"), soldPrice: 525000, featuredOrder: 99,
    },
    {
      slug: "106-westfield-dr-harrison",
      address: "106 Westfield Dr",
      city: "Harrison", state: "OH", zip: "45030",
      price: 156000, bedrooms: 4, bathrooms: 1, sqft: 1056,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/1509096092-268139541/106-westfield-dr-harrison-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2023-02-10"), soldPrice: 156000, featuredOrder: 99,
    },
    {
      slug: "104-circle-dr-harrison",
      address: "104 Circle Dr",
      city: "Harrison", state: "OH", zip: "45030",
      price: 240000, bedrooms: 3, bathrooms: 2, sqft: 1543,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/2661417574-284740512/104-circle-dr-harrison-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2022-02-15"), soldPrice: 240000, featuredOrder: 99,
    },
    {
      slug: "380-gregorian-dr-fairfield",
      address: "380 Gregorian Dr",
      city: "Fairfield", state: "OH", zip: "45014",
      price: 372225, bedrooms: 4, bathrooms: 3.5, sqft: 2521,
      propertyType: "Single Family", status: "Sold",
      photos: JSON.stringify(["https://images.homes.com/listings/102/1848428291-088389701/380-gregorian-dr-fairfield-oh-primaryphoto.jpg"]),
      featured: false, soldDate: new Date("2021-09-20"), soldPrice: 372225, featuredOrder: 99,
    },
  ];

  for (const listing of soldListings) {
    await prisma.listing.upsert({
      where: { slug: listing.slug },
      update: listing,
      create: listing,
    });
    console.log(`✓ Sold listing: ${listing.address}, ${listing.city}`);
  }

  // ── Site settings ───────────────────────────────────────────────────────────
  const settings = [
    { key: "agentName", value: "Scott Windsor" },
    { key: "agentPhone", value: "513-307-6449" },
    { key: "agentEmail", value: "windsorinfinity@gmail.com" },
    { key: "brokerage", value: "Align Right Realty Infinity" },
    { key: "siteUrl", value: "https://www.scott-windsor.com" },
  ];
  for (const s of settings) {
    await prisma.siteSettings.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }
  console.log("✓ Site settings");

  console.log("\n✅ Seed complete!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
