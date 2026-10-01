import React, { useState, useEffect } from 'react';
import { ASSETS } from '../lib/integrations/ihomefinder/mock-data';

const SLIDES = [
  {
    image: ASSETS.heroMansion,
    highlight: 'Dream Home',
    titleSuffix: 'is Just a Click Away',
    subtitle: 'Explore listings for our unique Florida coastal lifestyles in Sarasota.'
  },
  {
    image: ASSETS.siestaBeach,
    highlight: 'Island Life',
    titleSuffix: 'is Just a Click Away',
    subtitle: 'Wake up to #1 ranked pure white quartz sands and serene Gulf breezes on Siesta Key.'
  },
  {
    image: ASSETS.lakewoodGolf,
    highlight: 'Golf Haven',
    titleSuffix: 'is Just a Click Away',
    subtitle: 'Over 30 championship golf courses crafted by Jack Nicklaus, Arnold Palmer, and Tom Fazio.'
  },
  {
    image: ASSETS.downtownSkyline,
    highlight: 'Urban Marina',
    titleSuffix: 'is Just a Click Away',
    subtitle: 'Walkable bayfront dining, Marie Selby Botanical Gardens, and the Sarasota Opera.'
  },
  {
    image: ASSETS.longboatBeachfront,
    highlight: 'Gulf Luxury',
    titleSuffix: 'is Just a Click Away',
    subtitle: 'Private direct beachfront sanctuaries and peaceful barrier island sunsets.'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds unless user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section 
      aria-label="Coastal Luxury Lifestyle Showcase"
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden bg-[#121E1E]"
    >
      {/* Background Photography with Smooth Crossfade */}
      {SLIDES.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={s.image}
            alt="Sarasota coastal waterfront lifestyle"
            className="w-full h-full object-cover object-center"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Atmospheric Contrast Scrim - Golden hour dusk overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Hero Typography & Value Proposition */}
      <div className="relative z-10 max-w-[1360px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Main Title Matching Visual Reference */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] drop-shadow-lg">
            <span>Your </span>
            <span className="text-[#FE947A] underline decoration-[#FE947A]/60 decoration-wavy underline-offset-8">
              {slide.highlight}
            </span>
            <span className="block mt-1 sm:mt-2">{slide.titleSuffix}</span>
          </h1>

          <p className="font-['Roboto_Flex'] text-base sm:text-lg md:text-xl text-[#EFFCFD]/90 font-light max-w-2xl mx-auto drop-shadow-md pt-2">
            {slide.subtitle}
          </p>
        </div>

        {/* 5 Carousel Pagination Dots (Matching reference) */}
        <div 
          className="absolute bottom-8 flex items-center gap-2.5 z-20"
          role="tablist"
          aria-label="Hero slider pagination"
        >
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Go to slide ${idx + 1} of ${SLIDES.length}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#83D4D8] cursor-pointer ${
                idx === currentSlide 
                  ? 'w-7 h-2.5 bg-white shadow-md' 
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
