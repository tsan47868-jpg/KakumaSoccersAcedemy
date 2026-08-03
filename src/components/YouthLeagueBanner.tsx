import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Zap, ArrowRight, Trophy, Users, Shield, Award } from 'lucide-react';

interface YouthLeagueBannerProps {
  onOpenJoin?: () => void;
  onOpenDonate?: () => void;
  onSelectTeam?: (teamName: string) => void;
}

export interface QuoteSlide {
  id: number;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
  tag: string;
}

export const HERO_QUOTES: QuoteSlide[] = [
  {
    id: 1,
    quote: "When young people step onto the pitch, they do not only play football. They discover confidence, friendship and hope.",
    author: "Peter Lokai",
    role: "Head Coach & Founder",
    imageUrl: "/images/qoute1.jpg",
    tag: "Kakuma Pitch Sunset"
  },
  {
    id: 2,
    quote: "Football taught me that no matter where you come from, on this pitch we are all equals with a shared dream.",
    author: "Amina Hassan",
    role: "Girls U17 Captain",
    imageUrl: "/images/qoute2.jpg",
    tag: "Academy Goalkeeper"
  },
  {
    id: 3,
    quote: "Every pass is a promise, every match is a lesson in resilience, and every goal is celebrated by our whole community.",
    author: "David Deng",
    role: "U14 Playmaker",
    imageUrl: "/images/qoute3.jpg",
    tag: "Matchday Celebration"
  },
  {
    id: 4,
    quote: "Education and football go hand in hand. In Kakuma, the ball opens the door to the classroom.",
    author: "Hassan Ali",
    role: "Education Coordinator",
    imageUrl: "/images/qoute4.jpg",
    tag: "Community Pitch"
  },
  {
    id: 5,
    quote: "When girls play sports, barriers break down. We gain leadership skills that last long after the final whistle.",
    author: "Grace Nyabol",
    role: "Mentorship Lead",
    imageUrl: "/images/qoute5.jpg",
    tag: "Team Circle"
  },
  {
    id: 6,
    quote: "Football gives us focus and discipline. It keeps our mind clear and our hearts full of passion.",
    author: "Samuel Otim",
    role: "U17 Goalkeeper",
    imageUrl: "/images/qoute6.jpg",
    tag: "Training Drills"
  },
  {
    id: 7,
    quote: "Through football, youth from 10 different nations in Kakuma learn to speak one single language: unity.",
    author: "Emmanuel Lado",
    role: "Youth Representative",
    imageUrl: "/images/qoute7.jpg",
    tag: "Peace Tournament"
  },
  {
    id: 8,
    quote: "Putting on the Kakuma FA jersey fills me with pride. I play for my family and for every young dreamer here.",
    author: "Joseph Konyi",
    role: "Forward, U17 Squad",
    imageUrl: "/images/qoute8.jpg",
    tag: "Jersey Pride"
  },
  {
    id: 9,
    quote: "Sports teach us dignity in victory and grace in defeat. It builds true leaders for tomorrow.",
    author: "Mary Akol",
    role: "Youth Mentor",
    imageUrl: "/images/qoute9.jpg",
    tag: "Mentorship Circle"
  },
  {
    id: 10,
    quote: "Our boots may be worn, our pitch may be dust, but our spirit on match day is unbreakable.",
    author: "Gatluak Ruai",
    role: "U12 Winger",
    imageUrl: "/images/qoute10.jpg",
    tag: "Dust Pitch Glory"
  },
  {
    id: 11,
    quote: "Coaching these young athletes is the greatest honor of my life. Their energy inspires all of Turkana West.",
    author: "Coach John Mwangi",
    role: "Tactical Coach",
    imageUrl: "/images/qoute11.jpg",
    tag: "Coach Guidance"
  },
  {
    id: 12,
    quote: "Behind every youth player is a community of mothers, elders, and friends cheering them on with joy.",
    author: "Florence Lopidia",
    role: "Fan Club Coordinator",
    imageUrl: "/images/qoute12.jpg",
    tag: "Community Fans"
  }
];

export const YouthLeagueBanner: React.FC<YouthLeagueBannerProps> = ({
  onOpenJoin,
}) => {
  const [leagueTab, setLeagueTab] = useState<'fixtures' | 'results' | 'standings' | 'scorers'>('fixtures');
  
  // Quote Carousel State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMode, setSpeedMode] = useState<'fast' | 'normal'>('normal'); // 'fast' = 200ms (0.2s), 'normal' = 3000ms (3s)

  // Auto-advance slideshow timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = speedMode === 'fast' ? 200 : 3500;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_QUOTES.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, speedMode]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_QUOTES.length) % HERO_QUOTES.length);
  };

  const scrollToImpact = () => {
    const impactElem = document.getElementById('impact');
    if (impactElem) {
      impactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlide = HERO_QUOTES[currentIndex];

  return (
    <section className="py-12 bg-[#FFF7E8] text-[#123764] border-y-2 border-[#FDBD55]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Responsive Layout matching reference website */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          
          {/* COLUMN 1: A PLACE FOR EVERY YOUNG PLAYER */}
          <div className="lg:col-span-3 bg-[#FFFBF0] rounded-3xl p-6 border-2 border-[#FDBD55] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase text-[#FDBD55] bg-[#123764] px-2.5 py-1 rounded-full">
                A PLACE FOR EVERY
              </span>
              <h3 className="text-2xl font-black font-serif text-[#123764] mt-2 mb-4 uppercase tracking-tight">
                YOUNG PLAYER
                <span className="block h-1 w-12 bg-[#FDBD55] rounded-full mt-1" />
              </h3>

              {/* 6 Category Items Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                
                {/* Under 10 */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    ⚽
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Under 10</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Foundation & Fun</p>
                  </div>
                </div>

                {/* Under 12 */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Under 12</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Skills & Confidence</p>
                  </div>
                </div>

                {/* Under 14 */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    👟
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Under 14</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Development & Competition</p>
                  </div>
                </div>

                {/* Under 17 */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    ⭐
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Under 17</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Performance & Leadership</p>
                  </div>
                </div>

                {/* Girls' Football */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    👑
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Girls' Football</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Inclusion & Opportunity</p>
                  </div>
                </div>

                {/* Community Team */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl border border-[#FDBD55]/50 shadow-2xs hover:border-[#123764] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center text-xs font-black shrink-0">
                    🤝
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#123764] leading-tight">Community Team</h4>
                    <p className="text-[10px] text-gray-600 leading-tight">Unity & Progression</p>
                  </div>
                </div>

              </div>
            </div>

            <button
              onClick={() => {
                const teamElem = document.getElementById('programs');
                if (teamElem) teamElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#123764] hover:bg-[#0c2545] text-white font-black text-xs py-3 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 group border border-[#FDBD55]"
            >
              <span>View All Teams</span>
              <ArrowRight className="w-4 h-4 text-[#FDBD55] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* COLUMN 2: ACADEMY LEAGUE FIXTURES & STANDINGS */}
          <div className="lg:col-span-5 bg-[#FFFBF0] rounded-3xl p-6 border-2 border-[#FDBD55] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#FDBD55] bg-[#123764] px-2.5 py-1 rounded-full">
                  ACADEMY LEAGUE
                </span>
                <span className="text-[10px] font-bold text-[#123764]/70">
                  Turkana West Tournament
                </span>
              </div>

              <h3 className="text-2xl font-black font-serif text-[#123764] mt-1 mb-3 leading-tight">
                Competition with a greater purpose.
              </h3>

              {/* League Tabs */}
              <div className="flex items-center gap-1 bg-[#EDF3FA] p-1 rounded-xl mb-4 text-xs font-bold border border-[#123764]/20 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setLeagueTab('fixtures')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    leagueTab === 'fixtures' ? 'bg-[#FDBD55] text-[#123764] font-black shadow-xs' : 'text-[#123764]/80 hover:text-[#123764]'
                  }`}
                >
                  Fixtures
                </button>
                <button
                  onClick={() => setLeagueTab('results')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    leagueTab === 'results' ? 'bg-[#FDBD55] text-[#123764] font-black shadow-xs' : 'text-[#123764]/80 hover:text-[#123764]'
                  }`}
                >
                  Results
                </button>
                <button
                  onClick={() => setLeagueTab('standings')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    leagueTab === 'standings' ? 'bg-[#FDBD55] text-[#123764] font-black shadow-xs' : 'text-[#123764]/80 hover:text-[#123764]'
                  }`}
                >
                  Standings
                </button>
                <button
                  onClick={() => setLeagueTab('scorers')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    leagueTab === 'scorers' ? 'bg-[#FDBD55] text-[#123764] font-black shadow-xs' : 'text-[#123764]/80 hover:text-[#123764]'
                  }`}
                >
                  Top Scorers
                </button>
              </div>

              {/* Tab Content 1: Fixtures */}
              {leagueTab === 'fixtures' && (
                <div className="space-y-2.5 mb-4">
                  
                  {/* Match Item 1 */}
                  <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#123764] text-white p-2 rounded-xl text-center min-w-[50px]">
                        <span className="block text-[9px] font-black uppercase text-[#FDBD55]">AUG</span>
                        <span className="block text-sm font-black leading-none">08</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-[#123764]/70 uppercase block">U17 Division</span>
                        <div className="text-xs font-black text-[#123764] flex items-center gap-1.5">
                          <span>Kakuma FA</span>
                          <span className="text-[10px] text-[#FDBD55] bg-[#123764] px-1.5 py-0.2 rounded font-mono">VS</span>
                          <span>St. Antony Boys</span>
                        </div>
                        <span className="text-[10px] text-gray-500 block">3:30 PM • Kakuma Field 1</span>
                      </div>
                    </div>
                    <button className="bg-[#FFF7E8] border border-[#FDBD55] text-[#123764] text-[10px] font-black px-3 py-1 rounded-lg hover:bg-[#FDBD55] transition-colors">
                      View
                    </button>
                  </div>

                  {/* Match Item 2 */}
                  <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#123764] text-white p-2 rounded-xl text-center min-w-[50px]">
                        <span className="block text-[9px] font-black uppercase text-[#FDBD55]">AUG</span>
                        <span className="block text-sm font-black leading-none">09</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-[#123764]/70 uppercase block">Women's Division</span>
                        <div className="text-xs font-black text-[#123764] flex items-center gap-1.5">
                          <span>Kakuma Queens</span>
                          <span className="text-[10px] text-[#FDBD55] bg-[#123764] px-1.5 py-0.2 rounded font-mono">VS</span>
                          <span>Unity FC</span>
                        </div>
                        <span className="text-[10px] text-gray-500 block">4:00 PM • Community Pitch</span>
                      </div>
                    </div>
                    <button className="bg-[#FFF7E8] border border-[#FDBD55] text-[#123764] text-[10px] font-black px-3 py-1 rounded-lg hover:bg-[#FDBD55] transition-colors">
                      View
                    </button>
                  </div>

                  {/* Match Item 3 */}
                  <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#123764] text-white p-2 rounded-xl text-center min-w-[50px]">
                        <span className="block text-[9px] font-black uppercase text-[#FDBD55]">AUG</span>
                        <span className="block text-sm font-black leading-none">15</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-[#123764]/70 uppercase block">U14 Division</span>
                        <div className="text-xs font-black text-[#123764] flex items-center gap-1.5">
                          <span>Kakuma Stars</span>
                          <span className="text-[10px] text-[#FDBD55] bg-[#123764] px-1.5 py-0.2 rounded font-mono">VS</span>
                          <span>Hope Academy</span>
                        </div>
                        <span className="text-[10px] text-gray-500 block">4:00 PM • Kakuma Field 2</span>
                      </div>
                    </div>
                    <button className="bg-[#FFF7E8] border border-[#FDBD55] text-[#123764] text-[10px] font-black px-3 py-1 rounded-lg hover:bg-[#FDBD55] transition-colors">
                      View
                    </button>
                  </div>

                </div>
              )}

              {/* Tab Content 2: Results */}
              {leagueTab === 'results' && (
                <div className="space-y-2.5 mb-4">
                  <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">Completed</span>
                      <div className="text-xs font-black text-[#123764] mt-1">Kakuma FA U15 3 - 1 Kalobeyei Stars</div>
                      <span className="text-[10px] text-gray-500">Aug 2 • Kakuma Main Pitch</span>
                    </div>
                    <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-2.5 py-1 rounded-lg">3 - 1</span>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">Completed</span>
                      <div className="text-xs font-black text-[#123764] mt-1">Kakuma FA U13 2 - 0 Peace Rangers</div>
                      <span className="text-[10px] text-gray-500">Aug 1 • Youth Pitch</span>
                    </div>
                    <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-2.5 py-1 rounded-lg">2 - 0</span>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Standings Preview */}
              {leagueTab === 'standings' && (
                <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 text-xs mb-4">
                  <div className="font-black text-[#123764] mb-2 flex items-center justify-between">
                    <span>U17 League Table</span>
                    <span className="text-[10px] text-[#FDBD55] bg-[#123764] px-2 py-0.5 rounded">12 Matches</span>
                  </div>
                  <div className="space-y-1 font-semibold text-[11px]">
                    <div className="flex justify-between bg-[#FDBD55]/30 p-1.5 rounded font-bold text-[#123764]">
                      <span>1. Kakuma FA U17</span>
                      <span>31 Pts (GD +22)</span>
                    </div>
                    <div className="flex justify-between p-1.5">
                      <span>2. Kalobeyei Warriors</span>
                      <span>26 Pts (GD +14)</span>
                    </div>
                    <div className="flex justify-between p-1.5">
                      <span>3. Turkana West Youth</span>
                      <span>24 Pts (GD +10)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 4: Top Scorers */}
              {leagueTab === 'scorers' && (
                <div className="bg-white p-3 rounded-2xl border border-[#FDBD55]/60 text-xs mb-4 space-y-2">
                  <div className="flex items-center justify-between p-1.5 bg-[#FFF7E8] rounded border border-[#FDBD55]/40">
                    <span className="font-bold text-[#123764]">1. Amina Mohamed (Queens)</span>
                    <span className="font-black text-[#123764] bg-[#FDBD55] px-2 py-0.5 rounded">12 Goals</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5">
                    <span className="font-bold text-[#123764]">2. Joseph Deng (U17)</span>
                    <span className="font-black text-[#123764] bg-gray-100 px-2 py-0.5 rounded">8 Goals</span>
                  </div>
                </div>
              )}

            </div>

            <button
              onClick={() => {
                const leagueElem = document.getElementById('league');
                if (leagueElem) leagueElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs py-3 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 group"
            >
              <span>View Full League</span>
              <ArrowRight className="w-4 h-4 text-[#123764] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* COLUMN 3: HERO IMAGE & QUOTE AUTO-CAROUSEL (12 IMAGES WITH FAST 0.2s SPEED CONTROL) */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full border-2 border-[#FDBD55] shadow-xl flex flex-col justify-between p-6 sm:p-8 text-white group">
            
            {/* Background Image with Smooth Crossfade Transition */}
            <div className="absolute inset-0 z-0">
              <img
                key={currentSlide.id}
                src={currentSlide.imageUrl}
                alt={currentSlide.tag}
                className="w-full h-full object-cover object-center transition-all duration-300 filter brightness-90 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D3B] via-[#071D3B]/70 to-[#071D3B]/30" />
            </div>

            {/* Top Bar: Tag & Interactive Speed / Play Controls */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="bg-[#FDBD55] text-[#123764] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {currentSlide.tag}
              </span>

              {/* Speed Switcher & Controls */}
              <div className="flex items-center gap-1.5 bg-[#071D3B]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-xs">
                {/* 0.2s Turbo Mode Toggle */}
                <button
                  onClick={() => setSpeedMode(speedMode === 'fast' ? 'normal' : 'fast')}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1 transition-colors ${
                    speedMode === 'fast' ? 'bg-[#FDBD55] text-[#123764]' : 'text-white/80 hover:text-white'
                  }`}
                  title="Toggle 0.2s Rapid Image Cycling"
                >
                  <Zap className="w-3 h-3 fill-current" />
                  <span>{speedMode === 'fast' ? '0.2s Fast' : '3s Auto'}</span>
                </button>

                {/* Play / Pause Toggle */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:text-[#FDBD55] transition-colors"
                  title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                {/* Index Counter */}
                <span className="text-[10px] font-mono font-bold text-[#FDBD55] pl-1 border-l border-white/20">
                  {String(currentIndex + 1).padStart(2, '0')}/{HERO_QUOTES.length}
                </span>
              </div>
            </div>

            {/* Center / Bottom Quote Text Display */}
            <div className="relative z-10 my-auto py-4">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-black font-serif text-white leading-snug drop-shadow-md mb-4 italic">
                "{currentSlide.quote}"
                <span className="block h-1 w-16 bg-[#FDBD55] rounded-full mt-3" />
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-[#FDBD55]">
                    — {currentSlide.author}
                  </div>
                  <div className="text-xs font-semibold text-white/80">
                    {currentSlide.role}
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#FDBD55] hover:text-[#123764] transition-colors flex items-center justify-center backdrop-blur-xs"
                    aria-label="Previous Quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#FDBD55] hover:text-[#123764] transition-colors flex items-center justify-center backdrop-blur-xs"
                    aria-label="Next Quote"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Action Button & Quick Thumbnail Selector */}
            <div className="relative z-10 pt-3 border-t border-white/20 flex flex-col gap-3">
              <button
                onClick={scrollToImpact}
                className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Read Player Stories</span>
                <ArrowRight className="w-4 h-4 text-[#123764] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 12 Image Thumbnail Quick Selector Row */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto pt-1 no-scrollbar">
                {HERO_QUOTES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`w-5 h-5 rounded-md overflow-hidden shrink-0 border transition-all ${
                      currentIndex === idx ? 'border-[#FDBD55] scale-125 ring-2 ring-[#FDBD55]/50' : 'border-white/30 opacity-60 hover:opacity-100'
                    }`}
                    title={`${slide.author} - ${slide.tag}`}
                  >
                    <img src={slide.imageUrl} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default YouthLeagueBanner;
