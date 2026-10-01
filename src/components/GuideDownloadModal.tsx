import React from 'react';
import { X, Download, BookOpen, Check, Award, School, Sun, Building } from 'lucide-react';

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideDownloadModal: React.FC<GuideDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text document representing the relocation guide
    const content = `========================================================================
FINDING HOME IN SARASOTA: 2025/2026 OFFICIAL RELOCATION GUIDE (42 PAGES)
By Jenna Ryan | Sarasota Relocation Concierge & Luxury Advisor
Email: jennaryanflorida@gmail.com | Phone: (941) 555-0192
========================================================================

CHAPTER INDEX:
1. Introduction to Florida Gulf Coast Luxury Living
2. Neighborhood Master Comparisons: Siesta Key vs Lakewood Ranch vs Downtown
3. Sarasota County Public & Private School Rankings (Pine View #1 in USA)
4. Florida Tax Advantages: 0% State Income Tax & Homestead Exemption ($50,000 + 3% Save Our Homes Cap)
5. Boating & Water Access: Deepwater Canals, Fixed Bridges & Marina Jack Slips
6. Championship Golf Directory: Jack Nicklaus, Tom Fazio, Arnold Palmer Courses
7. Healthcare Excellence: Sarasota Memorial Hospital (Top 50 in USA)
8. Complete Step-by-Step Relocation Checklist

Thank you for requesting your comprehensive Sarasota Relocation Dossier.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sarasota-Relocation-Guide-2025.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-[#121E1E] flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF5F2] text-[#994530] flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#121E1E]">
              42-Page Sarasota Relocation Guide
            </h2>
            <p className="text-xs text-[#635D5B]">Curated by Jenna Ryan · 2025/2026 Edition</p>
          </div>
        </div>

        <div className="space-y-3 bg-[#FBF9F6] p-5 rounded-2xl border border-[#E2E8F0] text-xs text-[#303C3D]">
          <h3 className="font-['Outfit'] font-bold text-sm text-[#121E1E]">What is inside this guide:</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00696D]" />
              <span><strong>Tax Advantages:</strong> Florida 0% State Income Tax & Save-Our-Homes Assessment Caps.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00696D]" />
              <span><strong>Top Schools:</strong> Complete guide to Sarasota County "A" rated schools & Pine View.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00696D]" />
              <span><strong>All 24 Enclaves:</strong> Median home values, HOA fees, golf access, and boating canals.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00696D]" />
              <span><strong>Healthcare & Lifestyle:</strong> Top 50 ranked Sarasota Memorial Health Network.</span>
            </li>
          </ul>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-[#994530] hover:bg-[#7b2e1c] text-white py-3.5 rounded-xl font-['Outfit'] font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Guide Now</span>
        </button>
      </div>
    </div>
  );
};
