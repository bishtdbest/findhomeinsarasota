import React, { useState } from 'react';
import { MapPin, Mail, Phone, Calendar, MessageSquare, Check } from 'lucide-react';
import { AGENT_PROFILE } from '../lib/integrations/ihomefinder/mock-data';

export const ConciergeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(AGENT_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="concierge-section"
      aria-label="Local Sarasota Relocation Concierge"
      className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="bg-[#EFFCFD]/70 rounded-3xl border border-[#D8E5E6] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#83D4D8]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FE947A]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Chip */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#83D4D8] text-xs font-['Outfit'] font-bold text-[#00696D] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#00696D]" />
              <span>LOCAL SARASOTA CONCIERGE</span>
            </div>

            {/* Main Greeting Heading */}
            <h2 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl text-[#00696D] tracking-tight leading-none">
              Hello,
            </h2>

            {/* Narrative Prose (Matching reference) */}
            <div className="font-['Roboto_Flex'] text-base sm:text-lg text-[#303C3D] leading-relaxed space-y-4">
              <p>
                your Sarasota Relocation Concierge. I am here to help you get acquainted with the area and to possibly find the place to call home. Sarasota has a lot to offer, oceans, beaches, luxury homes, golf, parks, entertainment and fine dining. Living in Sarasota is amazing and I hope to bring you the information you need to decide if Sarasota is the place for you.
              </p>
            </div>

            {/* Callout & Direct Channels */}
            <div className="pt-2 border-t border-[#D8E5E6]">
              <span className="block font-['Outfit'] font-semibold text-sm text-[#121E1E] mb-3">
                Reach out today to chat:
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${AGENT_PROFILE.email}`}
                  className="inline-flex items-center gap-2 bg-[#994530] hover:bg-[#7b2e1c] text-white px-5 py-2.5 rounded-xl font-['Outfit'] font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Jenna</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#121E1E] border border-[#E2E8F0] px-4 py-2.5 rounded-xl font-['Outfit'] font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-[#00696D]" />
                      <span>{AGENT_PROFILE.email}</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:9415550192"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#121E1E] border border-[#E2E8F0] px-4 py-2.5 rounded-xl font-['Outfit'] font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#00696D]" />
                  <span>(941) 555-0192</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Jenna Ryan Portrait Card (Matching reference) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#121E1E]/15 border-4 border-white">
              <img
                src={AGENT_PROFILE.imageUrl}
                alt="Jenna Ryan, Sarasota Relocation & Luxury Advisor"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Identity Pill Overlay (Matching Reference) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-['Outfit'] font-bold text-sm text-[#121E1E] leading-tight">
                    {AGENT_PROFILE.name}
                  </h3>
                  <p className="text-[11px] font-['Roboto_Flex'] text-[#635D5B]">
                    {AGENT_PROFILE.title}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EFFCFD] text-[#00696D] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
