import React, { useState } from 'react';
import { Home, Search, MapPin, Check } from 'lucide-react';
import { SearchFilterState } from '../types/real-estate';

interface MlsSearchCardProps {
  onSearch: (filters: SearchFilterState) => void;
  totalFound: number;
}

export const MlsSearchCard: React.FC<MlsSearchCardProps> = ({ onSearch, totalFound }) => {
  const [activeTab, setActiveTab] = useState<'quick' | 'map' | 'address'>('quick');
  const [city, setCity] = useState('Sarasota (All Areas)');
  const [propertyType, setPropertyType] = useState('Single Family');
  const [minPrice, setMinPrice] = useState(750000);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [waterfrontOnly, setWaterfrontOnly] = useState(true);
  const [poolIncluded, setPoolIncluded] = useState(false);
  const [newConstruction, setNewConstruction] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch({
      city,
      propertyType,
      minPrice,
      maxPrice,
      waterfrontOnly,
      poolIncluded,
      newConstruction,
      activeTab,
      searchQuery: activeTab === 'address' ? searchQuery : undefined,
    });
  };

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 relative z-30">
      <div className="bg-white rounded-2xl shadow-xl shadow-[#121E1E]/8 border border-[#E2E8F0] p-5 sm:p-7">
        
        {/* Header Row: Title & iHomefinder Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#E2E8F0] gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EFFCFD] text-[#00696D] flex items-center justify-center">
              <Home className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="font-['Outfit'] font-bold text-lg text-[#121E1E] leading-tight">
                MLS Property Search
              </h2>
              <p className="text-xs font-['Roboto_Flex'] text-[#635D5B]">
                Direct MLS Feed Updated Every 15 Minutes
              </p>
            </div>
          </div>

          {/* iHomefinder Live Connection Status */}
          <div className="flex items-center gap-2 self-start sm:self-center bg-[#F0F9FA] px-3 py-1.5 rounded-full border border-[#9CEDF1]/50 text-xs font-['Outfit'] text-[#00696D]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Powered by <strong>iHomefinder IDX</strong></span>
          </div>
        </div>

        {/* Tab Navigation: Quick Search, Map Search, Address / MLS # */}
        <div className="flex items-center gap-8 pt-4 border-b border-[#E2E8F0] overflow-x-auto" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'quick'}
            onClick={() => setActiveTab('quick')}
            className={`pb-3 font-['Outfit'] font-semibold text-sm transition-colors relative whitespace-nowrap cursor-pointer ${
              activeTab === 'quick' ? 'text-[#00696D]' : 'text-[#635D5B] hover:text-[#121E1E]'
            }`}
          >
            Quick Search
            {activeTab === 'quick' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00696D]" />
            )}
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'map'}
            onClick={() => setActiveTab('map')}
            className={`pb-3 font-['Outfit'] font-semibold text-sm transition-colors relative whitespace-nowrap cursor-pointer ${
              activeTab === 'map' ? 'text-[#00696D]' : 'text-[#635D5B] hover:text-[#121E1E]'
            }`}
          >
            Map Search
            {activeTab === 'map' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00696D]" />
            )}
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'address'}
            onClick={() => setActiveTab('address')}
            className={`pb-3 font-['Outfit'] font-semibold text-sm transition-colors relative whitespace-nowrap cursor-pointer ${
              activeTab === 'address' ? 'text-[#00696D]' : 'text-[#635D5B] hover:text-[#121E1E]'
            }`}
          >
            Address / MLS #
            {activeTab === 'address' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00696D]" />
            )}
          </button>
        </div>

        {/* Search Controls Form */}
        <form onSubmit={handleSearchSubmit} className="pt-5 space-y-5">
          {activeTab === 'address' ? (
            /* Address / MLS Query Input */
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter street address, building name, or MLS # (e.g. 4128 Ocean Blvd or A4592031)..."
                  className="w-full bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#121E1E] focus:outline-none focus:border-[#83D4D8] focus:ring-2 focus:ring-[#83D4D8]/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#00696D] hover:bg-[#046e72] text-white px-8 py-3 rounded-xl font-['Outfit'] font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          ) : (
            /* Standard Grid Filters (City, Property Type, Min Price, Max Price, CTA) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              
              {/* City or Area */}
              <div>
                <label className="block text-[11px] font-['Outfit'] font-bold uppercase tracking-wider text-[#55423E] mb-1.5">
                  City or Area
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm text-[#121E1E] font-medium focus:outline-none focus:border-[#83D4D8] focus:ring-2 focus:ring-[#83D4D8]/20 transition-all cursor-pointer"
                >
                  <option value="Sarasota (All Areas)">Sarasota (All Areas)</option>
                  <option value="Siesta Key">Siesta Key</option>
                  <option value="Lakewood Ranch">Lakewood Ranch</option>
                  <option value="Downtown Sarasota">Downtown Sarasota</option>
                  <option value="Longboat Key">Longboat Key</option>
                  <option value="Bird Key">Bird Key</option>
                  <option value="Palmer Ranch">Palmer Ranch</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-[11px] font-['Outfit'] font-bold uppercase tracking-wider text-[#55423E] mb-1.5">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm text-[#121E1E] font-medium focus:outline-none focus:border-[#83D4D8] focus:ring-2 focus:ring-[#83D4D8]/20 transition-all cursor-pointer"
                >
                  <option value="Single Family">Single Family</option>
                  <option value="Condo">Condo / High-Rise</option>
                  <option value="All Property Types">All Property Types</option>
                </select>
              </div>

              {/* Min Price */}
              <div>
                <label className="block text-[11px] font-['Outfit'] font-bold uppercase tracking-wider text-[#55423E] mb-1.5">
                  Min Price
                </label>
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm text-[#121E1E] font-medium focus:outline-none focus:border-[#83D4D8] focus:ring-2 focus:ring-[#83D4D8]/20 transition-all cursor-pointer"
                >
                  <option value={0}>No Minimum</option>
                  <option value={500000}>$500,000</option>
                  <option value={750000}>$750,000</option>
                  <option value={1000000}>$1,000,000</option>
                  <option value={1500000}>$1,500,000</option>
                  <option value={2000000}>$2,000,000</option>
                </select>
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-[11px] font-['Outfit'] font-bold uppercase tracking-wider text-[#55423E] mb-1.5">
                  Max Price
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm text-[#121E1E] font-medium focus:outline-none focus:border-[#83D4D8] focus:ring-2 focus:ring-[#83D4D8]/20 transition-all cursor-pointer"
                >
                  <option value={1500000}>$1,500,000</option>
                  <option value={3000000}>$3,000,000</option>
                  <option value={5000000}>$5,000,000+</option>
                  <option value={10000000}>$10,000,000+</option>
                  <option value={0}>No Maximum</option>
                </select>
              </div>

              {/* Action Button: Search Properties */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00696D] hover:bg-[#046e72] active:scale-[0.98] text-white py-2.5 px-4 rounded-xl font-['Outfit'] font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer h-[42px]"
                >
                  <Search className="w-4 h-4 stroke-[2.5]" />
                  <span>Search Properties</span>
                </button>
              </div>
            </div>
          )}

          {/* Secondary Checkboxes & Live Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-3 text-xs text-[#55423E]">
            <div className="flex flex-wrap items-center gap-5 font-medium">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={waterfrontOnly}
                  onChange={(e) => setWaterfrontOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#00696D] focus:ring-[#83D4D8] cursor-pointer"
                />
                <span>Waterfront Only</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={poolIncluded}
                  onChange={(e) => setPoolIncluded(e.target.checked)}
                  className="w-4 h-4 rounded text-[#00696D] focus:ring-[#83D4D8] cursor-pointer"
                />
                <span>Pool Included</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={newConstruction}
                  onChange={(e) => setNewConstruction(e.target.checked)}
                  className="w-4 h-4 rounded text-[#00696D] focus:ring-[#83D4D8] cursor-pointer"
                />
                <span>New Construction</span>
              </label>
            </div>

            {/* Live Count */}
            <div className="font-['Roboto_Flex'] text-[#635D5B] sm:text-right font-medium">
              <span className="font-bold text-[#121E1E] tabular-nums">
                {totalFound > 0 ? totalFound.toLocaleString() : '1,248'}
              </span> active Sarasota County properties found
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
