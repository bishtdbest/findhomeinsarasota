import React, { useState } from 'react';
import { Download, Menu, X, Home, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenDownloadModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownloadModal, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone: Clean Architectural Wordmark & House Crest */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded-lg p-1"
          aria-label="Finding Home in Sarasota Homepage"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FE947A] to-[#994530] flex items-center justify-center text-white shadow-md shadow-[#994530]/20 transition-transform group-hover:scale-105">
            <Home className="w-6 h-6 stroke-[2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#121E1E] tracking-tight leading-none group-hover:text-[#994530] transition-colors">
              Finding Home in Sarasota
            </span>
            <span className="text-[11px] font-['Roboto_Flex'] text-[#55423E] tracking-wider uppercase font-semibold mt-1">
              Luxury Coastal & Relocation
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#303C3D]">
          <button 
            onClick={() => onNavigateSection('search-section')} 
            className="hover:text-[#994530] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded"
          >
            MLS Search
          </button>
          <button 
            onClick={() => onNavigateSection('listings-section')} 
            className="hover:text-[#994530] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded"
          >
            Featured Listings
          </button>
          <button 
            onClick={() => onNavigateSection('concierge-section')} 
            className="hover:text-[#994530] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded"
          >
            Relocation Concierge
          </button>
          <button 
            onClick={() => onNavigateSection('enclaves-section')} 
            className="hover:text-[#994530] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded"
          >
            Sarasota Enclaves
          </button>
        </nav>

        {/* Action Zone: Download Theme & Database Button + Social Icons */}
        <div className="flex items-center gap-3">
          {/* Download Package Action Button */}
          {/* <button
            onClick={onOpenDownloadModal}
            className="flex items-center gap-2 bg-[#994530] hover:bg-[#7b2e1c] text-white px-4 py-2.5 rounded-xl font-['Outfit'] font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE947A]"
            title="Download WordPress Theme (.zip) and Database (.sql / .xml)"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">WordPress Package & DB</span>
            <span className="sm:hidden">Theme & DB</span>
          </button> */}

          {/* Social Icons (matching reference header) */}
          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-[#E2E8F0]">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#121E1E] text-white flex items-center justify-center text-xs hover:bg-[#00696D] transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#121E1E] text-white flex items-center justify-center text-xs hover:bg-[#00696D] transition-colors"
              aria-label="YouTube"
            >
              ▶
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#121E1E] text-white flex items-center justify-center text-xs hover:bg-[#00696D] transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#121E1E] text-white flex items-center justify-center text-xs hover:bg-[#00696D] transition-colors"
              aria-label="Twitter / X"
            >
              𝕏
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#121E1E] text-white flex items-center justify-center text-xs hover:bg-[#00696D] transition-colors"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#121E1E] hover:bg-slate-100 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 font-medium text-base text-[#303C3D]">
            <button 
              onClick={() => { onNavigateSection('search-section'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-[#994530] border-b border-slate-100"
            >
              MLS Property Search
            </button>
            <button 
              onClick={() => { onNavigateSection('listings-section'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-[#994530] border-b border-slate-100"
            >
              Featured Exclusive Listings
            </button>
            <button 
              onClick={() => { onNavigateSection('concierge-section'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-[#994530] border-b border-slate-100"
            >
              Meet Jenna Ryan (Relocation Concierge)
            </button>
            <button 
              onClick={() => { onNavigateSection('enclaves-section'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-[#994530] border-b border-slate-100"
            >
              All 24 Sarasota Enclaves & Keys
            </button>
            <button 
              onClick={() => { onNavigateSection('relocation-guide'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-[#994530]"
            >
              Download 42-Page Relocation Guide
            </button>
          </nav>
          
          {/* <div className="pt-2">
            <button
              onClick={() => { onOpenDownloadModal(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-[#994530] text-white py-3 rounded-xl font-['Outfit'] font-semibold"
            >
              <Download className="w-4 h-4" /> Download WordPress Theme & Database
            </button>
          </div> */}
        </div>
      )}
    </header>
  );
};
