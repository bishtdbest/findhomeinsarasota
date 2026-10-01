import React, { useState } from 'react';
import { X, Download, FileCode, Database, CheckCircle2, FolderArchive, ArrowRight, Copy, Terminal, ExternalLink } from 'lucide-react';
import { downloadMasterBundle, downloadThemeZip, downloadDatabaseSql, downloadDatabaseXml } from '../lib/download-theme';

interface DownloadThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadThemeModal: React.FC<DownloadThemeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleDownloadMaster = async () => {
    setDownloading('master');
    await downloadMasterBundle();
    setDownloading(null);
  };

  const handleDownloadTheme = async () => {
    setDownloading('theme');
    await downloadThemeZip();
    setDownloading(null);
  };

  const handleCopyEnv = () => {
    navigator.clipboard.writeText('NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-domain.com');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 bg-[#EFFCFD] border-b border-[#D8E5E6]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#994530] text-white flex items-center justify-center shadow-md">
              <FolderArchive className="w-6 h-6" />
            </div>
            <div>
              <h2 id="download-modal-title" className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#121E1E]">
                WordPress Theme & Database Download Center
              </h2>
              <p className="text-xs sm:text-sm font-['Roboto_Flex'] text-[#00696D] font-medium">
                100% Native WordPress Core · No ACF · No Elementor · Ready to Paste & Import
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-[#121E1E] flex items-center justify-center shadow-sm cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main 1-Click Master Download Button */}
          <div className="bg-gradient-to-br from-[#994530] to-[#762B19] rounded-2xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="bg-white/20 text-[11px] font-['Outfit'] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block">
                RECOMMENDED · ALL-IN-ONE
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl">
                Download Complete Master Package (.ZIP)
              </h3>
              <p className="text-xs text-white/80 max-w-lg">
                Includes the complete <code className="bg-black/30 px-1.5 py-0.5 rounded">sarasota-headless</code> theme folder, <code className="bg-black/30 px-1.5 py-0.5 rounded">sarasota-database.sql</code>, <code className="bg-black/30 px-1.5 py-0.5 rounded">sarasota-content.xml</code>, and Hindi Setup Guide.
              </p>
            </div>

            <button
              onClick={handleDownloadMaster}
              disabled={downloading !== null}
              className="bg-white hover:bg-[#EFFCFD] text-[#994530] px-7 py-4 rounded-xl font-['Outfit'] font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 active:scale-95 disabled:opacity-75"
            >
              <Download className="w-5 h-5" />
              <span>{downloading === 'master' ? 'Packaging ZIP...' : 'Download Master ZIP'}</span>
            </button>
          </div>

          {/* Individual File Download Cards */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-base text-[#121E1E] mb-3">
              Or Download Individual Files:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Theme ZIP */}
              <div className="p-4 rounded-2xl border border-[#E2E8F0] hover:border-[#83D4D8] bg-[#FBF9F6] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#EFFCFD] text-[#00696D] flex items-center justify-center mb-2">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <h5 className="font-['Outfit'] font-bold text-sm text-[#121E1E]">Theme Folder (.ZIP)</h5>
                  <p className="text-[11px] text-[#635D5B] mt-1">
                    Paste directly into <code className="text-[#994530]">wp-content/themes/</code>
                  </p>
                </div>
                <button
                  onClick={handleDownloadTheme}
                  disabled={downloading !== null}
                  className="mt-4 w-full bg-[#00696D] hover:bg-[#046E72] text-white py-2 rounded-xl text-xs font-['Outfit'] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Theme</span>
                </button>
              </div>

              {/* Database SQL */}
              <div className="p-4 rounded-2xl border border-[#E2E8F0] hover:border-[#83D4D8] bg-[#FBF9F6] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#FFF5F2] text-[#994530] flex items-center justify-center mb-2">
                    <Database className="w-5 h-5" />
                  </div>
                  <h5 className="font-['Outfit'] font-bold text-sm text-[#121E1E]">Database Dump (.SQL)</h5>
                  <p className="text-[11px] text-[#635D5B] mt-1">
                    Direct import via phpMyAdmin or MySQL CLI.
                  </p>
                </div>
                <button
                  onClick={downloadDatabaseSql}
                  className="mt-4 w-full bg-[#994530] hover:bg-[#7b2e1c] text-white py-2 rounded-xl text-xs font-['Outfit'] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .SQL</span>
                </button>
              </div>

              {/* WXR XML Export */}
              <div className="p-4 rounded-2xl border border-[#E2E8F0] hover:border-[#83D4D8] bg-[#FBF9F6] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#EFFCFD] text-[#00696D] flex items-center justify-center mb-2">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <h5 className="font-['Outfit'] font-bold text-sm text-[#121E1E]">WP Tools Export (.XML)</h5>
                  <p className="text-[11px] text-[#635D5B] mt-1">
                    Import via <strong>WP Admin &gt; Tools &gt; Import</strong>
                  </p>
                </div>
                <button
                  onClick={downloadDatabaseXml}
                  className="mt-4 w-full bg-[#00696D] hover:bg-[#046E72] text-white py-2 rounded-xl text-xs font-['Outfit'] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .XML</span>
                </button>
              </div>

            </div>
          </div>

          {/* Hindi Setup Guide Section */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 space-y-4">
            <h4 className="font-['Outfit'] font-bold text-lg text-[#121E1E] flex items-center gap-2">
              <span>🇮🇳</span>
              <span>हिंदी गाइड: थीम पेस्ट और डेटाबेस इम्पोर्ट कैसे करें (Zero Coding)</span>
            </h4>

            <div className="space-y-4 text-xs sm:text-sm font-['Roboto_Flex'] text-[#303C3D] leading-relaxed">
              
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-[#994530] font-['Outfit'] block text-sm mb-1">
                  स्टेप 1: थीम फोल्डर में पेस्ट करें
                </strong>
                <p>
                  ऊपर से <strong>sarasota-headless-theme.zip</strong> डाउनलोड करें। ZIP को अनजिप करें और <code>sarasota-headless</code> फोल्डर को अपने वर्डप्रेस में यहाँ पेस्ट कर दें:
                </p>
                <div className="bg-slate-900 text-slate-100 p-2.5 rounded-lg font-mono text-xs my-2">
                  wp-content/themes/sarasota-headless/
                </div>
                <p>
                  इसके बाद WordPress Admin में जाएँ: <strong>Appearance &gt; Themes</strong> और <strong>"Sarasota Headless Luxury Real Estate"</strong> को <strong>Activate</strong> कर दें।
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-[#00696D] font-['Outfit'] block text-sm mb-1">
                  स्टेप 2: डेटाबेस इम्पोर्ट करें (1-क्लिक आसान तरीका)
                </strong>
                <p>
                  आपको phpMyAdmin या SQL में जाने की भी ज़रूरत नहीं है! थीम एक्टिवेट करते ही आपके WP Admin साइडबार में <strong>"Sarasota Demo Setup"</strong> का मेनू आ जाएगा।
                </p>
                <p className="mt-1">
                  उसपर क्लिक करें और <strong>"Seed Demo Listings & Enclaves"</strong> बटन दबाएँ। सभी 4 लग्जरी लिस्टिंग, 24 एन्क्लेव, जेना रायन का प्रोफाइल, और सारे कस्टम फील्ड्स ऑटोमैटिक डेटाबेस में बन जाएँगे!
                </p>
                <p className="mt-2 text-slate-500 text-xs">
                  (यदि आप phpMyAdmin का उपयोग करना चाहते हैं, तो <code>sarasota-database.sql</code> फाइल को phpMyAdmin में इम्पोर्ट भी कर सकते हैं।)
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-[#121E1E] font-['Outfit'] block text-sm mb-1">
                  स्टेप 3: Next.js Frontend से कनेक्ट करें
                </strong>
                <p>
                  Next.js की <code>.env.local</code> फाइल में अपने वर्डप्रेस का लिंक डाल दें:
                </p>
                <div className="flex items-center justify-between bg-slate-900 text-emerald-400 p-2.5 rounded-lg font-mono text-xs my-2">
                  <span>NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com</span>
                  <button onClick={handleCopyEnv} className="text-white hover:text-[#83D4D8] cursor-pointer">
                    {copiedCode ? 'Copied!' : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p>
                  बस! आपका पूरा हेडलेस पोर्टल आपके वर्डप्रेस डेटा के साथ लाइव काम करने लगेगा।
                </p>
              </div>

              {/* Iske liye apko kya kya chahiye answer */}
              <div className="p-4 bg-[#EFFCFD] rounded-xl border border-[#83D4D8]">
                <strong className="text-[#00696D] font-['Outfit'] block text-sm mb-1">
                  💡 इसके लिए आपको मुझसे या अपने सिस्टम में क्या-क्या चाहिए?
                </strong>
                <p className="text-xs text-[#002021] leading-relaxed">
                  आपको किसी भी कोड को लिखने की बिल्कुल ज़रूरत नहीं है! आपको सिर्फ एक बेसिक फ्रेश वर्डप्रेस इनस्टॉल चाहिए (चाhe <strong>LocalWP</strong> (फ्री सॉफ्टवेयर आपके कंप्यूटर पर) हो, या आपकी किसी भी होस्टिंग (Hostinger, cPanel, Siteground) पर हो)। बाक़ी सब कुछ (थीम कोड, कस्टम पोस्ट टाइप्स, मेटा फील्ड्स, REST APIs, और डेटाबेस SQL) मैंने इस पैकेज में 100% तैयार करके दे दिया है।
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
