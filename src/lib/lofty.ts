/**
 * Lofty CRM — Active Listings Integration
 * Fetches Scott Windsor's active MLS listings via the Lofty v1 and v2 APIs.
 * Results are cached for 24 hours via Next.js fetch revalidation.
 * Falls back to an empty array on any error so the site always renders.
 */

import type { Listing } from "@/types";

const LOFTY_API_KEY = process.env.LOFTY_API_KEY;
const LOFTY_AGENT_ID = process.env.LOFTY_AGENT_ID ?? "210708";
const CACHE_SECONDS = 60 * 60 * 24; // 24 hours

// ─── Types ────────────────────────────────────────────────────────────────────

interface LoftyListingItem {
  listingId?: string;
  mlsListingId?: string;
  listingStreetName?: string;
  listingCity?: string;
  listingState?: string;
  listingZipcode?: string[] | string;
  price?: string | number;
  beds?: number;
  baths?: number;
  sqft?: number;
  pictureList?: string[];
  listingStatus?: string;
  propertyTypeSecondary?: string;
  builtYear?: number;
  [key: string]: unknown;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractItems(data: unknown): LoftyListingItem[] {
  if (!data || typeof data !== "object") return [];
  const d = data as Record<string, unknown>;

  // Try common response envelope keys
  for (const key of ["listings", "data", "results", "items"]) {
    if (Array.isArray(d[key])) return d[key] as LoftyListingItem[];
  }

  // v1 API returns "listIng" (unusual casing) — may be an array or object with data
  if (d.listIng) {
    if (Array.isArray(d.listIng)) return d.listIng as LoftyListingItem[];
    if (typeof d.listIng === "object") {
      const inner = d.listIng as Record<string, unknown>;
      for (const key of ["data", "listings", "items", "results"]) {
        if (Array.isArray(inner[key])) return inner[key] as LoftyListingItem[];
      }
    }
  }

  return [];
}

function mapToListing(item: LoftyListingItem): Listing {
  const zip = Array.isArray(item.listingZipcode)
    ? (item.listingZipcode[0] ?? "")
    : String(item.listingZipcode ?? "");

  const rawAddress = item.listingStreetName ?? "";
  const city = item.listingCity ?? "";
  const slug =
    slugify(`${rawAddress} ${city} ${zip}`) ||
    `lofty-${item.listingId ?? Math.random().toString(36).slice(2)}`;

  const rawPrice =
    typeof item.price === "number" ? item.price : parseInt(String(item.price ?? "0"), 10);

  const rawType = item.propertyTypeSecondary ?? "";
  const propertyType = rawType.toLowerCase().includes("condo")
    ? "Condo"
    : rawType.toLowerCase().includes("townhouse")
    ? "Townhouse"
    : rawType.toLowerCase().includes("multi")
    ? "Multi-Family"
    : rawType.toLowerCase().includes("land")
    ? "Land"
    : "Single Family";

  return {
    id: `lofty-${item.listingId ?? slug}`,
    slug,
    address: rawAddress,
    city,
    state: item.listingState ?? "OH",
    zip,
    price: rawPrice,
    bedrooms: item.beds ?? 0,
    bathrooms: item.baths ?? 0,
    sqft: item.sqft ?? null,
    lotSize: null,
    yearBuilt: item.builtYear ?? null,
    propertyType,
    status: "Active",
    description: null,
    photos: JSON.stringify(item.pictureList ?? []),
    virtualTourUrl: null,
    openHouseDate: null,
    openHouseEndTime: null,
    mlsNumber: item.mlsListingId ?? null,
    featured: false,
    soldDate: null,
    soldPrice: null,
    featuredOrder: 99,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// ─── Fetch strategies ─────────────────────────────────────────────────────────

/** v2 search — recommended for app integrations */
async function fetchV2(): Promise<LoftyListingItem[]> {
  const res = await fetch("https://api.lofty.com/v2.0/listings/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOFTY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchScope: "my",
      soldFlag: false,
      pageSize: 50,
    }),
    next: { revalidate: CACHE_SECONDS },
  });

  if (!res.ok) throw new Error(`v2 ${res.status} ${res.statusText}`);
  return extractItems(await res.json());
}

/** v1 agent search — explicit agent ID lookup */
async function fetchV1(): Promise<LoftyListingItem[]> {
  const params = new URLSearchParams({
    userId: LOFTY_AGENT_ID,
    agentListings: "true",
    limit: "50",
  });

  const res = await fetch(`https://api.lofty.com/v1.0/listing?${params}`, {
    headers: { Authorization: `Bearer ${LOFTY_API_KEY}` },
    next: { revalidate: CACHE_SECONDS },
  });

  if (!res.ok) throw new Error(`v1 ${res.status} ${res.statusText}`);
  return extractItems(await res.json());
}

// ─── Public export ────────────────────────────────────────────────────────────

/**
 * Returns Scott Windsor's active MLS listings from Lofty.
 * Tries v2 first, then v1; returns [] on any failure so the page
 * can fall back to DB listings.
 */
export async function getLoftyListings(): Promise<Listing[]> {
  if (!LOFTY_API_KEY) {
    // Key not configured — silent no-op in production
    return [];
  }

  let items: LoftyListingItem[] = [];

  try {
    items = await fetchV2();
    if (items.length === 0) {
      // v2 returned nothing — try v1 as fallback
      items = await fetchV1();
    }
  } catch (err) {
    console.warn("[Lofty] v2 failed, trying v1:", err);
    try {
      items = await fetchV1();
    } catch (err2) {
      console.error("[Lofty] Both endpoints failed:", err2);
      return [];
    }
  }

  return items
    .filter((item) => (item.listingStatus ?? "Active").toLowerCase() === "active")
    .map(mapToListing);
}

// ─── Lead Creation ─────────────────────────────────────────────────────────────

export interface LoftyLeadPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  address?: string;
  formType: string;
  sourcePage: string;
}

// Map our form types to Lofty lead types (1 = Seller, 2 = Buyer)
function getLeadType(formType: string): number {
  const sellerForms = ["home_valuation", "seller_valuation", "sell_inquiry"];
  return sellerForms.includes(formType) ? 1 : 2;
}

// Map form type to a readable Lofty source tag
function getSourceLabel(formType: string): string {
  const labels: Record<string, string> = {
    contact: "Contact Form",
    home_valuation: "Home Valuation Request",
    seller_valuation: "Seller Valuation",
    neighborhood_alert: "Neighborhood Alert",
    first_time_buyer: "First-Time Buyer",
    new_construction: "New Construction Inquiry",
    new_construction_inquiry: "New Construction Inquiry",
    blog_inquiry: "Blog Inquiry",
    open_house_rsvp: "Open House RSVP",
    school_alert: "School District Alert",
  };
  return labels[formType] || formType;
}

/**
 * Creates a lead/contact in Scott's Lofty CRM account.
 * Fire-and-forget — always returns without throwing.
 */
export async function sendLeadToLofty(payload: LoftyLeadPayload): Promise<boolean> {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) {
    console.warn("[Lofty] LOFTY_API_KEY not set — skipping lead push");
    return false;
  }

  const sourceLabel = getSourceLabel(payload.formType);

  // Build note from message + address
  const noteParts: string[] = [];
  if (payload.address) noteParts.push(`Property: ${payload.address}`);
  if (payload.message) noteParts.push(payload.message);
  noteParts.push(`Source: ${payload.sourcePage}`);
  const note = noteParts.join("\n");

  const body: Record<string, unknown> = {
    firstName: payload.firstName,
    ...(payload.lastName ? { lastName: payload.lastName } : {}),
    emails: [payload.email],
    ...(payload.phone ? { phones: [payload.phone] } : {}),
    leadTypes: [getLeadType(payload.formType)],
    source: "Scott Windsor Realty Website",
    tags: ["website-lead", sourceLabel],
    note,
    welcomeEmail: false,
    leadAlert: true,
  };

  try {
    const res = await fetch("https://api.lofty.com/v1.0/leads", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[Lofty] Lead creation failed:", res.status, errText);
      return false;
    }

    console.log("[Lofty] Lead created successfully:", payload.email);
    return true;
  } catch (err) {
    console.error("[Lofty] Lead creation error:", err);
    return false;
  }
}
