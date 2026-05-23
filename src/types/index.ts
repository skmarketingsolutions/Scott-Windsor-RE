export interface Listing {
  id: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft?: number | null;
  lotSize?: string | null;
  yearBuilt?: number | null;
  propertyType: string;
  status: string;
  description?: string | null;
  photos: string;
  virtualTourUrl?: string | null;
  openHouseDate?: string | null;
  openHouseEndTime?: string | null;
  mlsNumber?: string | null;
  featured: boolean;
  soldDate?: Date | null;
  soldPrice?: number | null;
  featuredOrder: number;
  createdAt: Date;
  updatedAt: Date;
  openHouses?: OpenHouse[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  heroImage?: string | null;
  body: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string | null;
  category: string;
  status: string;
  publishedAt?: Date | null;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  message?: string | null;
  formType: string;
  sourcePage: string;
  status: string;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  clientName: string;
  city?: string | null;
  quote: string;
  starRating: number;
  listingAddress?: string | null;
  visible: boolean;
  order: number;
  createdAt: Date;
}

export interface OpenHouse {
  id: string;
  listingId: string;
  date: string;
  startTime: string;
  endTime: string;
  notes?: string | null;
  cancelled: boolean;
  listing?: Listing;
  createdAt: Date;
}

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
}

export type PropertyType =
  | "Single Family"
  | "Condo"
  | "Townhouse"
  | "Multi-Family"
  | "Land";
export type ListingStatus = "Active" | "Pending" | "Sold" | "Coming Soon";
export type LeadStatus = "New" | "Contacted" | "Qualified" | "Archived";
export type BlogCategory =
  | "Market Updates"
  | "Neighborhood Guides"
  | "Buyer Tips"
  | "Seller Tips"
  | "Community";
export type BlogStatus = "Draft" | "Published";
