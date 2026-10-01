import React from 'react';
import { Umbrella, Flag, GraduationCap } from 'lucide-react';

const PILLARS = [
  {
    icon: Umbrella,
    title: 'Beaches & Outdoor Life',
    description: 'Home to Siesta Key, consistently named the #1 beach in America with 99% pure quartz sand that never gets hot. Enjoy boating, kayaking mangrove tunnels, Gulf sunsets, and an outdoor coastal lifestyle 365 days a year.'
  },
  {
    icon: Flag,
    title: 'World-class Golf Courses',
    description: 'Featuring more than 30 championship courses crafted by Jack Nicklaus, Arnold Palmer, and Tom Fazio. From Lakewood National to The Concession, Sarasota is Florida\'s premier destination for golf enthusiasts.'
  },
  {
    icon: GraduationCap,
    title: 'Top-Rated Schools',
    description: 'Sarasota County continuously earns an "A" rating from the Florida Department of Education, ranking as the #2 public school district in Florida and home to Pine View School, the #1 gifted public school in America.'
  }
];

export const LifestylePillars: React.FC = () => {
  return (
    <section 
      aria-label="Sarasota Lifestyle Pillars"
      className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PILLARS.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-[#EFFCFD] rounded-3xl p-8 border border-[#D8E5E6] hover:border-[#83D4D8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white text-[#00696D] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-7 h-7 stroke-[1.8]" />
              </div>

              {/* Title */}
              <h3 className="font-['Outfit'] font-bold text-xl text-[#121E1E] mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-['Roboto_Flex'] text-sm text-[#55423E] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
