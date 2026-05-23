# Scott Windsor | Align Right Realty Infinity
## Production Real Estate Website — Harrison, Ohio

Full-stack Next.js 14 real estate website with admin dashboard, lead capture, SEO, and IDX/GHL integration.

---

## Tech Stack

- **Next.js 14** App Router + TypeScript  
- **Tailwind CSS** + custom design system (Navy/Gold/White)
- **Framer Motion** scroll animations  
- **NextAuth.js** admin authentication (credentials)  
- **Prisma ORM** + SQLite  
- **react-hook-form** + Zod validation  
- **next-sitemap** + Schema.org markup  

---

## First-Time Setup

### 1. Install

```bash
cd app
npm install
```

### 2. Configure .env

```bash
cp .env.example .env
```

Fill in:
- `NEXTAUTH_SECRET` — `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`
- `ADMIN_EMAIL` — windsorinfinity@gmail.com  
- `ADMIN_PASSWORD` — your chosen password (plain text for dev; hash for prod — see below)
- `NEXT_PUBLIC_SITE_URL` — your domain

### 3. Database Setup

```bash
npm run db:migrate    # Creates SQLite DB + runs migrations
npm run db:seed       # Seeds 4 blog posts, 6 testimonials, 6 sample listings
```

### 4. Start Dev Server

```bash
npm run dev
# http://localhost:3000
# Admin: http://localhost:3000/admin
```

---

## Admin Dashboard

**Login:** `/admin/login`  
Credentials are set in `.env` → `ADMIN_EMAIL` + `ADMIN_PASSWORD`

### Hashing Your Password (Production)

```bash
node -e "const b = require('bcryptjs'); console.log(b.hashSync('yourpassword', 12))"
```

Paste the output as `ADMIN_PASSWORD` in `.env` and restart.

### Admin Sections

| Section | URL | What You Can Do |
|---------|-----|-----------------|
| Dashboard | `/admin` | Stats, recent listings, recent leads |
| Listings | `/admin/listings` | Add/edit/delete, mark sold/pending, set featured |
| Sold Archive | `/admin/listings/sold` | All sold homes with sold dates/prices |
| Blog | `/admin/blog` | Create/publish/edit posts |
| Leads | `/admin/leads` | All form submissions, update status, CSV export |
| Open Houses | `/admin/open-houses` | Schedule, manage, cancel |
| Testimonials | `/admin/testimonials` | Add/edit/toggle visible |
| Settings | `/admin/settings` | GHL URL, GTM ID, IDX URL, social links, password |

---

## Adding Your First Real Listing

1. `/admin/listings` → Add Listing  
2. Fill address, price, beds/baths, description  
3. Add photo URLs (upload to Cloudinary → copy URL → paste)  
4. Toggle **Featured** to show on homepage  
5. Save → appears live immediately

**Mark as Sold:** Click ✓ icon in listings table → status changes, listing moves to sold archive with SOLD badge on public site.

---

## IDX Integration

```env
NEXT_PUBLIC_IDX_SRC="https://your-idx-provider.com/embed/..."
```

Restart server → IDX iframe appears on `/listings` page automatically.

Compatible with: iHomeFinder, Showcase IDX, MLS2Go, Diverse Solutions, and any iframe-based IDX.

---

## Go High Level (GHL)

### Webhook (Form Leads)

All public forms → GHL + stored in local database.

```env
GHL_WEBHOOK_URL="https://hooks.leadconnectorhq.com/hooks/..."
```

### Calendar Embed

```env
NEXT_PUBLIC_GHL_CALENDAR_ID="your-calendar-id"
```

Shows on `/contact` page automatically.

### Forms → GHL

| Page | Form Type |
|------|-----------|
| Home Valuation | `home_valuation` |
| Contact | `contact` |
| Sell page | `seller_valuation` |
| Listing detail | `listing_inquiry` |
| Neighborhood pages | `neighborhood_alert` |
| Open Houses | `open_house_rsvp` |
| First Time Buyers | `first_time_buyer` |
| New Construction | `new_construction` |
| Schools | `school_alert` |

---

## Google Tag Manager

```env
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"
```

GTM fires on: `page_view`, `lead_submitted`, `listing_viewed`, `neighborhood_clicked`, `virtual_tour_clicked`, `open_house_rsvp`, and more.

---

## Vercel Deployment

1. Push to GitHub
2. Import on Vercel → set root directory to `app`
3. Add all env vars from `.env.example`
4. Set build command to: `prisma generate && prisma migrate deploy && next build`

**Note:** For production, upgrade SQLite to Turso (edge SQLite) or PostgreSQL (Railway/Supabase). Update `DATABASE_URL` and `prisma/schema.prisma` datasource provider.

---

## Useful Commands

```bash
npm run dev            # Dev server
npm run build          # Prod build + generate sitemap
npm run db:migrate     # Run migrations
npm run db:seed        # Seed initial data
npm run db:studio      # Prisma Studio (visual DB browser)
```

---

## Site Map

```
/                          Homepage
/listings                  Active listings + IDX
/listings/[slug]           Listing detail
/sold                      Sold homes
/about                     About Scott
/home-value                Home valuation form
/sell                      Seller landing page
/contact                   Contact + calendar
/open-houses               Open house schedule
/new-construction          Ryan Homes + Drees Homes
/neighborhoods             All neighborhoods
/neighborhoods/[slug]      Individual neighborhood
/harrison-ohio-schools     School district page
/first-time-buyers         Buyer guide
/blog                      Blog index
/blog/[slug]               Blog post
/admin                     Dashboard (protected)
```

---

## Contact

**Scott Windsor** · Align Right Realty Infinity  
Harrison, Ohio 45030  
513-307-6449 · windsorinfinity@gmail.com
