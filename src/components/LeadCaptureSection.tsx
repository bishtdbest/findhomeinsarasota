import React, { useState } from 'react';
import { Lock, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { wpClient } from '../lib/wordpress/client';

interface LeadCaptureSectionProps {
  onOpenGuideModal: () => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ onOpenGuideModal }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await wpClient.submitLead(email);
      if (res.success) {
        setIsSuccess(true);
      }
    } catch (err) {
      setErrorMessage('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="relocation-guide"
      aria-label="Sarasota Relocation Guide Lead Capture"
      className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E2E8F0] shadow-xl shadow-[#121E1E]/5 p-8 sm:p-12 text-center relative overflow-hidden">
        
        {/* Soft Peach Ambience Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F2]/60 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-4">
          
          {/* Sub-kicker */}
          <span className="text-xs font-['Outfit'] font-bold text-[#FE947A] uppercase tracking-widest block">
            TAKE THE FIRST STEP TODAY
          </span>

          {/* Main Headline */}
          <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#121E1E] tracking-tight max-w-2xl mx-auto leading-tight">
            Still searching? Let us help you find your perfect Sarasota home!
          </h2>

          {/* Subtitle / Value proposition */}
          <p className="font-['Roboto_Flex'] text-sm sm:text-base text-[#55423E] max-w-xl mx-auto leading-relaxed">
            Get personalized home recommendations, unlisted new builder lot alerts, and our complimentary 42-page Sarasota Relocation Guide.
          </p>

          {/* Form */}
          {isSuccess ? (
            <div className="pt-4 max-w-md mx-auto space-y-3">
              <div className="bg-[#EFFCFD] border border-[#83D4D8] text-[#00696D] p-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00696D] flex-shrink-0" />
                <span>Success! Your 42-page guide is ready.</span>
              </div>
              <button
                onClick={onOpenGuideModal}
                className="w-full bg-[#FE947A] hover:bg-[#994530] text-white py-3 rounded-xl font-['Outfit'] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Open Instant Relocation PDF Guide</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-[#FBF9F6] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#121E1E] focus:outline-none focus:border-[#FE947A] focus:ring-2 focus:ring-[#FE947A]/20 transition-all text-left"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FE947A] hover:bg-[#e0775d] active:scale-[0.98] text-white px-7 py-3 rounded-xl font-['Outfit'] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'GET IN TOUCH'}
                </button>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 mt-2 text-left">{errorMessage}</p>
              )}

              {/* Subtext with lock icon */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-['Roboto_Flex'] text-[#635D5B] mt-4">
                <Lock className="w-3.5 h-3.5 text-[#635D5B]" />
                <span>No spam. Unsubscribe anytime. Complimentary instant PDF guide dispatched immediately.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
