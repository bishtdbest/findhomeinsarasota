/**
 * Finding Home in Sarasota - Headless WordPress & Next.js Production Website
 *
 * Pixel-accurate implementation of Sarasota Coastal Warm Luxury reference.
 * 100% Native WordPress Theme + Decoupled iHomefinder Integration Layer + React App.
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { MlsSearchCard } from './components/MlsSearchCard';
import { FeaturedListings } from './components/FeaturedListings';
import { ConciergeSection } from './components/ConciergeSection';
import { LifestylePillars } from './components/LifestylePillars';
import { EnclavesSection } from './components/EnclavesSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { EnclavesModal } from './components/EnclavesModal';
// import { DownloadThemeModal } from './components/DownloadThemeModal';
import { GuideDownloadModal } from './components/GuideDownloadModal';

import { Property, Enclave, SearchFilterState } from './types/real-estate';
import { INITIAL_PROPERTIES, SARASOTA_ENCLAVES } from './lib/integrations/ihomefinder/mock-data';
import { ihomefinderClient } from './lib/integrations/ihomefinder/client';

export default function App() {
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [totalFound, setTotalFound] = useState<number>(1248);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isEnclavesModalOpen, setIsEnclavesModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Handle MLS Search filtering
  const handleSearch = async (filters: SearchFilterState) => {
    const res = await ihomefinderClient.searchProperties(filters);
    setProperties(res.properties);
    setTotalFound(res.totalCount > 0 ? res.totalCount : 1248);

    // Smooth scroll to listings grid
    const target = document.getElementById('listings-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterByEnclave = async (enclaveName: string) => {
    const res = await ihomefinderClient.searchProperties({ city: enclaveName });
    setProperties(res.properties);
    setTotalFound(res.totalCount);
    const target = document.getElementById('listings-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#121E1E] font-['Roboto_Flex'] selection:bg-[#83D4D8]/30 selection:text-[#00696D]">

      {/* Main Global Header */}
      <Header
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* Hero Section with Lifestyle Carousel */}
        <HeroSlider />

        {/* MLS Search Card (Overlapping Hero) */}
        <div id="search-section">
          <MlsSearchCard onSearch={handleSearch} totalFound={totalFound} />
        </div>

        {/* Featured Exclusive Sarasota Listings (4 Cards) */}
        <FeaturedListings
          properties={properties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onViewAllClick={() => handleFilterByEnclave('All Areas')}
        />

        {/* Relocation Concierge (Jenna Ryan Bio & Channels) */}
        <ConciergeSection />

        {/* 3 Lifestyle Pillars (Beaches, Golf, Schools) */}
        <LifestylePillars />

        {/* 24 Sarasota Enclaves & Neighborhoods Grid */}
        <EnclavesSection
          enclaves={SARASOTA_ENCLAVES}
          onExploreEnclave={(enc) => handleFilterByEnclave(enc.name)}
          onViewAllEnclaves={() => setIsEnclavesModalOpen(true)}
        />

        {/* Relocation Guide Lead Capture Section */}
        <LeadCaptureSection onOpenGuideModal={() => setIsGuideModalOpen(true)} />
      </main>

      {/* Global Comprehensive 4-Column Footer */}
      <Footer
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onFilterByEnclave={handleFilterByEnclave}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Interactive Modals */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <EnclavesModal
        isOpen={isEnclavesModalOpen}
        onClose={() => setIsEnclavesModalOpen(false)}
        onFilterByEnclave={handleFilterByEnclave}
      />

      {/* <DownloadThemeModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      /> */}

      <GuideDownloadModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

    </div>
  );
}
