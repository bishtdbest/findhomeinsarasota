import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Enclave } from '../types/real-estate';

interface EnclavesSectionProps {
  enclaves: Enclave[];
  onExploreEnclave: (enclave: Enclave) => void;
  onViewAllEnclaves: () => void;
}

export const EnclavesSection: React.FC<EnclavesSectionProps> = ({
  enclaves,
  onExploreEnclave,
  onViewAllEnclaves,
}) => {
  return (
    <section 
      id="enclaves-section"
      aria-label="Sarasota Enclaves and Communities"
      className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* 3 Featured Enclaves Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {enclaves.slice(0, 3).map((enclave) => {
          const isDowntown = enclave.slug === 'downtown-sarasota';
          return (
            <div
              key={enclave.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Tags */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={enclave.imageUrl}
                  alt={enclave.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Top Left Tag (e.g. Beachfront & Coastal, Top Master-Planned) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#00696D] text-[11px] font-['Outfit'] font-bold px-3 py-1 rounded-full shadow">
                  {enclave.tag}
                </div>

                {/* Bottom Left Price Badge (e.g. From $850,000) */}
                <div className="absolute bottom-4 left-4 bg-[#121E1E]/80 backdrop-blur-md text-white text-xs font-['Outfit'] font-bold px-3 py-1 rounded-lg">
                  {enclave.startingPrice}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-2xl text-[#121E1E] group-hover:text-[#00696D] transition-colors mb-2">
                    {enclave.name}
                  </h3>
                  <p className="font-['Roboto_Flex'] text-xs sm:text-sm text-[#55423E] leading-relaxed">
                    {enclave.summary}
                  </p>
                </div>

                {/* Explore Button (Downtown card has explicit Explore Downtown button as in reference) */}
                {isDowntown ? (
                  <button
                    onClick={() => onExploreEnclave(enclave)}
                    className="w-full mt-6 bg-[#FE947A] hover:bg-[#e0775d] text-white py-3 px-4 rounded-xl font-['Outfit'] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                  >
                    Explore Downtown
                  </button>
                ) : (
                  <button
                    onClick={() => onExploreEnclave(enclave)}
                    className="w-full mt-6 bg-[#EFFCFD] hover:bg-[#00696D] text-[#00696D] hover:text-white border border-[#9CEDF1] py-2.5 px-4 rounded-xl font-['Outfit'] font-semibold text-xs transition-all cursor-pointer text-center"
                  >
                    View {enclave.name} Homes
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global View All 24 Enclaves Button (Matching reference) */}
      <div className="mt-12 text-center">
        <button
          onClick={onViewAllEnclaves}
          className="inline-flex items-center gap-2 bg-white hover:bg-[#EFFCFD] text-[#00696D] border border-[#83D4D8] px-8 py-3.5 rounded-full font-['Outfit'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <span>VIEW ALL 24 SARASOTA ENCLAVES & KEYS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
