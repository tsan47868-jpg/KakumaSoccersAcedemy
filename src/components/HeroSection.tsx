import React from 'react';
import { ArrowRight, Heart, Users, Trophy, Calendar, Shield, Info } from 'lucide-react';
import { Logo } from './Logo';
import { CountUp } from './CountUp';

interface HeroSectionProps {
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenJoin,
  onOpenDonate,
}) => {
  const scrollToDiscover = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#071D3B] text-white overflow-hidden select-none">
      
      {/* SECTION 1: MAIN HERO COVER AREA */}
      <section id="home" className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
        
        {/* Full-width Cover Background Image with Warm Sunset & Navy Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/whatwedo.png"
            alt="Kakuma Soccer Academy: What We Do"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105 scale-100 sm:scale-105 transition-transform duration-1000"
          />
          {/* Multi-stage Responsive Overlay Gradient for Perfect Text Legibility across Mobile & Desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071D3B]/90 via-[#071D3B]/80 to-[#071D3B] sm:bg-gradient-to-r sm:from-[#071D3B]/95 sm:via-[#071D3B]/80 sm:to-[#071D3B]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071D3B] via-transparent to-[#071D3B]/60 opacity-90 sm:opacity-100" />
        </div>

        {/* Hero Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Headline, Subtitle, Buttons & Scroll Indicator */}
            <div className="lg:col-span-7 flex flex-col text-left pt-3 sm:pt-6">
              
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-black text-[#FDBD55] tracking-widest uppercase bg-[#123764]/70 px-3.5 py-1 rounded-full border border-[#FDBD55]/30">
                  KAKUMA, TURKANA COUNTY, KENYA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif text-white tracking-tight leading-[1.03] uppercase mb-6 sm:mb-8 drop-shadow-md">
                NURTURING DREAMS <br />
                <span className="text-[#FDBD55] relative inline-block mt-2">
                  THROUGH FOOTBALL.
                  {/* Underline Sweep Arrow Graphic Accent */}
                  <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-5 text-[#FDBD55]" viewBox="0 0 300 20" fill="none">
                    <path d="M5 14 C 90 4, 210 4, 280 12 L 295 15 M 280 8 L 295 15 L 285 19" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal drop-shadow">
                Kakuma Soccer Academy is a community-based organization using football, mentorship, education and teamwork to nurture young talent and create positive opportunities for young people in Kakuma.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-10 sm:mb-12">
                <button
                  onClick={onOpenJoin}
                  className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
                >
                  <span>Join the Academy</span>
                  <ArrowRight className="w-4 h-4 text-[#123764] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDonate}
                  className="bg-[#071D3B]/80 hover:bg-[#0c2545] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md transition-all border border-white/30 hover:border-[#FDBD55] flex items-center justify-center gap-2.5 group backdrop-blur-xs"
                >
                  <span>Support Our Dream</span>
                  <Heart className="w-4 h-4 text-[#FDBD55] group-hover:scale-110 transition-transform fill-[#FDBD55]/30" />
                </button>
              </div>

              {/* Scroll to Discover Helper */}
              <button
                onClick={scrollToDiscover}
                className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-[#FDBD55] transition-colors group cursor-pointer w-fit"
              >
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#FDBD55]">
                  <Info className="w-3 h-3 text-[#FDBD55]" />
                </div>
                <span className="tracking-wide">Scroll to discover</span>
              </button>

            </div>

            {/* Right Column: Prominent Circular Badge Emblem Overlay */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center lg:justify-end">
              <div className="relative transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                {/* Large Official Logo Badge */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                  <Logo size={280} showSlogan={false} className="w-full h-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* SECTION 2: FLOATING OVERLAPPING STATS BAR BELOW HERO IMAGE */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 lg:-mt-14 pb-8">
        <div className="bg-[#0c2545] border border-[#FDBD55]/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-md">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Stat 1: 100+ Young Players Supported */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-0 sm:px-3 first:pt-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#123764] border border-[#FDBD55]/30 flex items-center justify-center shrink-0 text-[#FDBD55]">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-white tracking-tight leading-none">
                  <CountUp value="100+" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mt-1 leading-tight truncate sm:whitespace-normal">
                  Young Players Supported
                </span>
              </div>
            </div>

            {/* Stat 2: 10+ Community Teams */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#123764] border border-[#FDBD55]/30 flex items-center justify-center shrink-0 text-[#FDBD55]">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-white tracking-tight leading-none">
                  <CountUp value="10+" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mt-1 leading-tight truncate sm:whitespace-normal">
                  Community Teams
                </span>
              </div>
            </div>

            {/* Stat 3: 20+ Matches & Training Events */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#123764] border border-[#FDBD55]/30 flex items-center justify-center shrink-0 text-[#FDBD55]">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-white tracking-tight leading-none">
                  <CountUp value="20+" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mt-1 leading-tight truncate sm:whitespace-normal">
                  Matches & Training Events
                </span>
              </div>
            </div>

            {/* Stat 4: 1 United Community */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#123764] border border-[#FDBD55]/30 flex items-center justify-center shrink-0 text-[#FDBD55]">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black font-serif text-white tracking-tight leading-none">
                  <CountUp value="1" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mt-1 leading-tight truncate sm:whitespace-normal">
                  United Community
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;

