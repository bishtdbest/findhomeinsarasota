import React, { useState } from 'react';
import { X, MapPin, ArrowRight, Check } from 'lucide-react';
import { Enclave } from '../types/real-estate';
import { SARASOTA_ENCLAVES } from '../lib/integrations/ihomefinder/mock-data';

interface EnclavesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterByEnclave: (enclaveName: string) => void;
}

export const EnclavesModal: React.FC<EnclavesModalProps> = ({
  isOpen,
  onClose,
  onFilterByEnclave,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  if (!isOpen) return null;

  const allTags = ['all', 'Beachfront', 'Golf', 'Master-Planned', 'Downtown'];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enclaves-modal-title"
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#E2E8F0]">
          <div>
            <h2 id="enclaves-modal-title" className="font-['Outfit'] font-bold text-2xl text-[#121E1E]">
              All 24 Sarasota Enclaves, Keys & Neighborhoods
            </h2>
            <p className="text-xs sm:text-sm font-['Roboto_Flex'] text-[#635D5B] mt-1">
              From barrier island white-sand beaches to premier country club communities.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-[#121E1E] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Enclaves Grid */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SARASOTA_ENCLAVES.map((enc) => (
              <div
                key={enc.id}
                className="border border-[#E2E8F0] rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-[#83D4D8] hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-['Outfit'] font-bold text-[#00696D] bg-[#EFFCFD] px-2.5 py-1 rounded-md">
                      {enc.tag}
                    </span>
                    <span className="text-xs font-bold text-[#121E1E]">
                      {enc.startingPrice}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-lg text-[#121E1E] group-hover:text-[#00696D] transition-colors">
                    {enc.name}
                  </h3>

                  <p className="text-xs font-['Roboto_Flex'] text-[#55423E] mt-2 leading-relaxed">
                    {enc.summary}
                  </p>

                  {enc.features && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {enc.features.map((feat: string, i: number) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    onFilterByEnclave(enc.name);
                    onClose();
                  }}
                  className="mt-5 w-full bg-[#00696D] hover:bg-[#046e72] text-white py-2 rounded-xl font-['Outfit'] font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Search {enc.name} MLS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
