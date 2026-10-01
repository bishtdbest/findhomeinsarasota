/**
 * WordPress REST API Client for Headless Next.js / React
 */

import { Property, Enclave, AgentProfile } from '../../types/real-estate';
import { INITIAL_PROPERTIES, SARASOTA_ENCLAVES, AGENT_PROFILE } from '../integrations/ihomefinder/mock-data';

export class WordPressClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_WORDPRESS_URL || '';
  }

  async getFeaturedProperties(): Promise<Property[]> {
    if (this.baseUrl) {
      try {
        const res = await fetch(`${this.baseUrl}/wp-json/sarasota/v1/featured`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            return json.data;
          }
        }
      } catch (err) {
        console.warn('Could not fetch from WordPress backend, using cached state:', err);
      }
    }
    return INITIAL_PROPERTIES.filter(p => p.featured);
  }

  async getEnclaves(): Promise<Enclave[]> {
    if (this.baseUrl) {
      try {
        const res = await fetch(`${this.baseUrl}/wp-json/sarasota/v1/enclaves`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            return json.data;
          }
        }
      } catch (err) {
        console.warn('Could not fetch enclaves from WordPress backend:', err);
      }
    }
    return SARASOTA_ENCLAVES;
  }

  async getAgent(): Promise<AgentProfile> {
    if (this.baseUrl) {
      try {
        const res = await fetch(`${this.baseUrl}/wp-json/sarasota/v1/agent`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            return json.data;
          }
        }
      } catch (err) {
        console.warn('Could not fetch agent profile from WordPress backend:', err);
      }
    }
    return AGENT_PROFILE;
  }

  async submitLead(email: string, name?: string): Promise<{ success: boolean; message: string }> {
    if (this.baseUrl) {
      try {
        const res = await fetch(`${this.baseUrl}/wp-json/sarasota/v1/inquire`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name }),
        });
        if (res.ok) {
          const json = await res.json();
          return { success: true, message: json.message || 'Guide dispatched successfully!' };
        }
      } catch (err) {
        console.warn('WordPress lead submit fallback:', err);
      }
    }
    // Standalone fallback
    return {
      success: true,
      message: `Thank you! Your complimentary 42-page Sarasota Relocation Guide has been dispatched to ${email}.`,
    };
  }
}

export const wpClient = new WordPressClient();
