/**
 * Real Estate Typed Data Models
 * Headless WordPress & iHomefinder IDX Schema
 */

export interface Property {
  id: string | number;
  slug: string;
  title: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  priceFormatted: string;
  beds: number;
  baths: number;
  sqft: number;
  mlsNumber: string;
  status: 'ACTIVE MLS' | 'PENDING' | 'CONTINGENT' | 'SOLD';
  isWaterfront: boolean;
  hasPool: boolean;
  isNewConstruction: boolean;
  featured: boolean;
  imageUrl: string;
  gallery?: string[];
  description: string;
  excerpt: string;
  idxDisclaimer: string;
  yearBuilt?: number;
  lotSize?: string;
  hoaFee?: string;
  propertyType?: string;
}

export interface Enclave {
  id: string | number;
  slug: string;
  name: string;
  tag: string;
  startingPrice: string;
  summary: string;
  content?: string;
  imageUrl: string;
  features?: string[];
}

export interface SearchFilterState {
  city: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  waterfrontOnly: boolean;
  poolIncluded: boolean;
  newConstruction: boolean;
  activeTab: 'quick' | 'map' | 'address';
  searchQuery?: string;
}

export interface AgentProfile {
  name: string;
  title: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  license: string;
  serving: string;
  imageUrl: string;
  social: {
    linkedin: string;
    youtube: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  contactEmail: string;
  activeMlsCount: number;
  stellarMlsFeed: string;
  idxProvider: string;
  copyrightYear: number;
  disclaimer: string;
}
