import React, { useState } from 'react';
import { X, Bed, Bath, Square, Calendar, Phone, Mail, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { Property } from '../types/real-estate';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [tourName, setTourName] = useState('');
  const [tourEmail, setTourEmail] = useState('');
  const [tourDate, setTourDate] = useState('2026-09-30');
  const [submitted, setSubmitted] = useState(false);

  if (!property) return null;

  const handleSubmitTour = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-property-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#121E1E] flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#83D4D8]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scroll Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Photo Banner with Tags */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#00696D] text-white text-xs font-['Outfit'] font-bold px-3 py-1 rounded-md shadow">
                {property.status}
              </span>
              {property.isWaterfront && (
                <span className="bg-[#83D4D8] text-[#002021] text-xs font-['Outfit'] font-bold px-3 py-1 rounded-md shadow">
                  Waterfront
                </span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white font-['Outfit'] font-bold text-2xl px-4 py-1.5 rounded-xl">
              {property.priceFormatted}
            </div>
          </div>

          {/* Title & Location Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4">
            <div>
              <h2 id="modal-property-title" className="font-['Outfit'] font-bold text-2xl text-[#121E1E]">
                {property.title}
              </h2>
              <p className="flex items-center gap-1.5 text-sm font-['Roboto_Flex'] text-[#635D5B] mt-1">
                <MapPin className="w-4 h-4 text-[#994530]" />
                {property.street}, {property.city}, {property.state} {property.zip}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#635D5B]">Stellar MLS #</span>
              <p className="font-mono text-sm font-bold text-[#121E1E]">{property.mlsNumber}</p>
            </div>
          </div>

          {/* Key Metric Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#EFFCFD] rounded-2xl border border-[#9CEDF1]/40 text-center">
            <div>
              <span className="text-xs text-[#55423E] block font-medium">Bedrooms</span>
              <span className="text-lg font-['Outfit'] font-bold text-[#00696D]">{property.beds}</span>
            </div>
            <div>
              <span className="text-xs text-[#55423E] block font-medium">Bathrooms</span>
              <span className="text-lg font-['Outfit'] font-bold text-[#00696D]">{property.baths}</span>
            </div>
            <div>
              <span className="text-xs text-[#55423E] block font-medium">Living Area</span>
              <span className="text-lg font-['Outfit'] font-bold text-[#00696D]">{property.sqft.toLocaleString()} sqft</span>
            </div>
            <div>
              <span className="text-xs text-[#55423E] block font-medium">Property Type</span>
              <span className="text-lg font-['Outfit'] font-bold text-[#00696D]">{property.propertyType || 'Estate'}</span>
            </div>
          </div>

          {/* Narrative Description */}
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-[#121E1E] mb-2">Property Overview</h3>
            <p className="text-sm font-['Roboto_Flex'] text-[#303C3D] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Schedule Private Tour / Direct Concierge Form */}
          <div className="p-6 bg-[#FFF5F2] rounded-2xl border border-[#FE947A]/30">
            <h3 className="font-['Outfit'] font-bold text-lg text-[#994530] mb-1">
              Schedule a Private Tour with Jenna Ryan
            </h3>
            <p className="text-xs text-[#55423E] mb-4">
              Direct consultation with our local Sarasota Relocation Concierge. In-person or live FaceTime walkthrough available.
            </p>

            {submitted ? (
              <div className="bg-white p-4 rounded-xl flex items-center gap-3 text-emerald-700 font-medium text-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span>Tour request confirmed! Jenna Ryan will reach out to verify your appointment for {tourDate}.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitTour} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={tourName}
                  onChange={(e) => setTourName(e.target.value)}
                  className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#121E1E] focus:outline-none focus:ring-2 focus:ring-[#FE947A]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={tourEmail}
                  onChange={(e) => setTourEmail(e.target.value)}
                  className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#121E1E] focus:outline-none focus:ring-2 focus:ring-[#FE947A]"
                />
                <button
                  type="submit"
                  className="bg-[#994530] hover:bg-[#7b2e1c] text-white py-2.5 px-4 rounded-xl font-['Outfit'] font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Request Private Tour
                </button>
              </form>
            )}
          </div>

          {/* MLS & IDX Disclosures */}
          <div className="text-[11px] text-[#635D5B] leading-relaxed pt-2 border-t border-[#E2E8F0] space-y-1">
            <p><strong>MLS Disclosure:</strong> {property.idxDisclaimer}</p>
            <p>Equal Housing Opportunity. Information is updated via iHomefinder IDX directly from Stellar MLS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
