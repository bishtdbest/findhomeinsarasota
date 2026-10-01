import React, { useState } from 'react';
import { Home, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onFilterByEnclave: (enclaveName: string) => void;
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownloadModal,
  onFilterByEnclave,
  onOpenGuideModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#121E1E] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid (Matching Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Column 1: Brand & Agent Bio (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FE947A] to-[#994530] flex items-center justify-center text-white">
                <Home className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="font-['Outfit'] font-bold text-xl tracking-tight text-white">
                Finding Home in Sarasota
              </span>
            </div>

            <p className="font-['Roboto_Flex'] text-xs sm:text-sm text-slate-400 leading-relaxed">
              Jenna Ryan — Your Sarasota Relocation Concierge. Dedicated to helping you discover exceptional waterfront properties, championship golf communities, and premier Florida coastal living.
            </p>

            <div className="text-xs font-['Roboto_Flex'] text-slate-300 space-y-1.5 pt-1">
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:jennaryanflorida@gmail.com" className="text-[#83D4D8] hover:underline">
                  jennaryanflorida@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Serving:</strong> Sarasota, Siesta Key, Lakewood Ranch & Longboat Key
              </p>
            </div>
          </div>

          {/* Column 2: Sarasota Communities (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-200">
              SARASOTA COMMUNITIES
            </h3>
            <ul className="space-y-2.5 text-xs font-['Roboto_Flex'] text-slate-400">
              <li>
                <button onClick={() => onFilterByEnclave('Siesta Key')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Siesta Key Waterfront
                </button>
              </li>
              <li>
                <button onClick={() => onFilterByEnclave('Lakewood Ranch')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Lakewood Ranch Country Club
                </button>
              </li>
              <li>
                <button onClick={() => onFilterByEnclave('Downtown Sarasota')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Downtown Sarasota Condos
                </button>
              </li>
              <li>
                <button onClick={() => onFilterByEnclave('Longboat Key')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Longboat Key Beachfront
                </button>
              </li>
              <li>
                <button onClick={() => onFilterByEnclave('Bird Key')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Bird Key Luxury Estates
                </button>
              </li>
              <li>
                <button onClick={() => onFilterByEnclave('Palmer Ranch')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Palmer Ranch Homes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Relocation Resources (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-200">
              RELOCATION RESOURCES
            </h3>
            <ul className="space-y-2.5 text-xs font-['Roboto_Flex'] text-slate-400">
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  MLS Property Search (iHomefinder)
                </a>
              </li>
              <li>
                <a href="#enclaves-section" className="hover:text-white transition-colors">
                  Featured Neighborhoods
                </a>
              </li>
              <li>
                <button onClick={onOpenGuideModal} className="hover:text-white transition-colors text-left cursor-pointer">
                  Sarasota County Schools Index
                </button>
              </li>
              <li>
                <button onClick={onOpenGuideModal} className="hover:text-white transition-colors text-left cursor-pointer">
                  Championship Golf Course Guide
                </button>
              </li>
              <li>
                <a href="mailto:jennaryanflorida@gmail.com?subject=Video Consultation Request" className="hover:text-white transition-colors">
                  Schedule a Video Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-slate-200">
              STAY CONNECTED
            </h3>
            <p className="text-xs font-['Roboto_Flex'] text-slate-400">
              Join our weekly Sarasota lifestyle and real estate update:
            </p>

            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#83D4D8]"
                />
                <button
                  type="submit"
                  className="bg-[#00696D] hover:bg-[#046e72] text-white px-4 py-2 rounded-xl text-xs font-['Outfit'] font-bold cursor-pointer"
                >
                  GO
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00696D] flex items-center justify-center text-xs text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                in
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00696D] flex items-center justify-center text-xs text-slate-300 hover:text-white transition-colors" aria-label="YouTube">
                ▶
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00696D] flex items-center justify-center text-xs text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                f
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00696D] flex items-center justify-center text-xs text-slate-300 hover:text-white transition-colors" aria-label="Twitter / X">
                𝕏
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00696D] flex items-center justify-center text-xs text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-['Roboto_Flex'] text-slate-500 gap-4 text-center md:text-left">
          <p>
            Internet Data Exchange (IDX) powered by iHomefinder. All real estate information deemed reliable but not guaranteed.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Equal Housing Opportunity
            </span>
            <span>© 2025 Finding Home in Sarasota. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
