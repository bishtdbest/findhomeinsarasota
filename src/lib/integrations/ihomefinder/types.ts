/**
 * iHomefinder IDX Integration - Typed Interfaces
 */

export interface IHomefinderConfig {
  apiUrl: string;
  clientKey?: string;
  boardId: string;
  updateIntervalMinutes: number;
}

export interface IHomefinderSearchParams {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  waterfront?: boolean;
  pool?: boolean;
  newConstruction?: boolean;
  postalCode?: string;
  mlsNumber?: string;
  page?: number;
  pageSize?: number;
}

export interface IHomefinderResponse<T> {
  success: boolean;
  totalResults: number;
  page: number;
  results: T[];
  disclaimer: string;
  timestamp: string;
}
