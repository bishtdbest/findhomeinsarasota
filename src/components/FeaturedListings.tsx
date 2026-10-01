import React from 'react';
import { ArrowRight, Bed, Bath, Square, Sparkles } from 'lucide-react';
import { Property } from '../types/real-estate';

interface FeaturedListingsProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onViewAllClick: () => void;
}

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  properties,
  onSelectProperty,
  onViewAllClick,
}) => {
  return (
    <section 
      id="listings-section"
      aria-label="Featured Exclusive Sarasota Listings"
      className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#E2E8F0] gap-2">
        <div>
          <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#121E1E] uppercase tracking-wide">
            Featured Exclusive Sarasota Listings
          </h2>
          <p className="text-xs sm:text-sm font-['Roboto_Flex'] text-[#635D5B] mt-0.5">
            Directly from Stellar MLS · Handpicked coastal estates, golf properties, & bayfront condos
          </p>
        </div>

        <button
          onClick={onViewAllClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Outfit'] font-semibold text-[#00696D] hover:text-[#994530] transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] rounded p-1"
        >
          <span>View All MLS Listings</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.slice(0, 4).map((prop) => (
          <article
            key={prop.id}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:shadow-[#121E1E]/8 hover:border-[#83D4D8] transition-all duration-300 flex flex-col"
          >
            {/* Image Container with 16:10 Ratio & Active Tag */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={prop.imageUrl}
                alt={`${prop.title} in ${prop.city}, FL`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Status Badge: ACTIVE MLS */}
              <div className="absolute top-3 left-3 bg-[#00696D] text-white text-[10px] font-['Outfit'] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                {prop.status}
              </div>

              {/* Price Badge Overlay */}
              <div className="absolute bottom-3 left-3 bg-[#121E1E]/80 backdrop-blur-md text-white font-['Outfit'] font-bold text-base px-3 py-1 rounded-lg">
                {prop.priceFormatted}
              </div>
            </div>

            {/* Content Zone */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#121E1E] group-hover:text-[#00696D] transition-colors leading-tight">
                  {prop.title}
                </h3>
                <p className="text-xs font-['Roboto_Flex'] text-[#635D5B] mt-0.5">
                  {prop.city}, {prop.state} {prop.zip}
                </p>

                {/* Specs Row: Beds · Baths · Sq Ft */}
                <div className="flex items-center gap-2 text-xs font-['Roboto_Flex'] text-[#303C3D] py-3 my-2 border-y border-[#E2E8F0]/70 font-medium">
                  <span>{prop.beds} Beds</span>
                  <span className="text-slate-300">·</span>
                  <span>{prop.baths} Baths</span>
                  <span className="text-slate-300">·</span>
                  <span className="tabular-nums">{prop.sqft.toLocaleString()} Sq Ft</span>
                </div>
              </div>

              {/* Action Button: View Property Details */}
              <button
                onClick={() => onSelectProperty(prop)}
                className="w-full mt-2 bg-[#EFFCFD] hover:bg-[#00696D] text-[#00696D] hover:text-white border border-[#9CEDF1] hover:border-transparent py-2 px-3 rounded-xl font-['Outfit'] font-semibold text-xs transition-all duration-200 cursor-pointer text-center"
              >
                View Property Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimers (Strictly matching reference footer of MLS grid) */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-['Roboto_Flex'] text-[#635D5B] mt-6 pt-4 border-t border-[#E2E8F0] gap-2">
        <p>Listing information courtesy of Stellar MLS. Information is deemed reliable but not guaranteed.</p>
        <p className="font-semibold text-[#00696D]">IDX provided by iHomefinder Inc.</p>
      </div>
    </section>
  );
};
