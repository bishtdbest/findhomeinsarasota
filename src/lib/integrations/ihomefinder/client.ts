/**
 * iHomefinder IDX Integration Client
 * Decoupled data access layer supporting both live iHomefinder endpoints and fallback dataset.
 */

import { Property, SearchFilterState } from '../../../types/real-estate';
import { INITIAL_PROPERTIES } from './mock-data';

export class IHomefinderClient {
  private apiUrl: string;
  private apiKey?: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_IHOMFINDER_API_URL || '';
    this.apiKey = import.meta.env.VITE_IHOMFINDER_API_KEY || '';
  }

  /**
   * Search properties using MLS filter criteria
   */
  async searchProperties(filters: Partial<SearchFilterState>): Promise<{
    properties: Property[];
    totalCount: number;
    source: 'LIVE_IHOMFINDER' | 'STANDALONE_HEADLESS';
  }> {
    // If live API credentials are configured, query iHomefinder API
    if (this.apiUrl && this.apiKey) {
      try {
        const queryParams = new URLSearchParams();
        if (filters.city && filters.city !== 'All Areas' && filters.city !== 'Sarasota (All Areas)') {
          queryParams.append('city', filters.city);
        }
        if (filters.minPrice) queryParams.append('minPrice', filters.minPrice.toString());
        if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());
        if (filters.waterfrontOnly) queryParams.append('waterfront', 'true');
        if (filters.poolIncluded) queryParams.append('pool', 'true');
        if (filters.newConstruction) queryParams.append('newConstruction', 'true');

        const res = await fetch(`${this.apiUrl}/listings/search?${queryParams.toString()}`, {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept': 'application/json',
          },
        });

        if (res.ok) {
          const json = await res.json();
          return {
            properties: json.results || [],
            totalCount: json.totalResults || 0,
            source: 'LIVE_IHOMFINDER',
          };
        }
      } catch (err) {
        console.warn('Live iHomefinder endpoint query failed, falling back to local dataset:', err);
      }
    }

    // Local Headless dataset filtering
    let filtered = [...INITIAL_PROPERTIES];

    if (filters.city && filters.city !== 'All Areas' && filters.city !== 'Sarasota (All Areas)') {
      filtered = filtered.filter(p => p.city.toLowerCase().includes(filters.city!.toLowerCase()));
    }

    if (filters.propertyType && filters.propertyType !== 'All Property Types') {
      filtered = filtered.filter(p => p.propertyType === filters.propertyType);
    }

    if (filters.minPrice && filters.minPrice > 0) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice && filters.maxPrice > 0) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.waterfrontOnly) {
      filtered = filtered.filter(p => p.isWaterfront);
    }

    if (filters.poolIncluded) {
      filtered = filtered.filter(p => p.hasPool);
    }

    if (filters.newConstruction) {
      filtered = filtered.filter(p => p.isNewConstruction);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.mlsNumber.toLowerCase().includes(q) ||
        p.zip.includes(q)
      );
    }

    return {
      properties: filtered,
      totalCount: filtered.length,
      source: 'STANDALONE_HEADLESS',
    };
  }

  /**
   * Get single property by slug or ID
   */
  async getProperty(slugOrId: string): Promise<Property | null> {
    const found = INITIAL_PROPERTIES.find(p => p.slug === slugOrId || p.id.toString() === slugOrId);
    return found || null;
  }

  /**
   * Get featured exclusive listings
   */
  async getFeaturedListings(): Promise<Property[]> {
    return INITIAL_PROPERTIES.filter(p => p.featured);
  }
}

export const ihomefinderClient = new IHomefinderClient();
