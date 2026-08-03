import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Heart,
  UserPlus,
  ChevronDown,
  Sparkles,
  BookOpen,
  Users,
  Award,
  HelpCircle,
  Mail,
  MapPin,
  ShieldCheck,
  Trophy,
} from 'lucide-react';

interface NavbarProps {
  onOpenJoin: () => void;
  onOpenDonate: () => void;
  onReplayLoading?: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoin,
  onOpenDonate,
  activeSection,
  setActiveSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    const targetId = sectionId || id;

    if (id === 'home') {
      setActiveSection('home');
      setTimeout(() => scrollToElement(targetId), 100);
      return;
    }

    setActiveSection(id);
    if (targetId === 'gallery') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => scrollToElement(targetId), 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      
      {/* TOP ANNOUNCEMENT BAR */}
      {showAnnouncement && (
        <div className="bg-[#071D3B] text-white py-1 px-4 text-xs font-medium border-b border-[#FDBD55]/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-center sm:text-left overflow-hidden">
              <span className="text-sm leading-none select-none">⚽</span>
              <span className="truncate tracking-wide text-xs">
                Registration is open for the next Kakuma Soccer Academy youth training program.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenJoin}
                className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black px-2.5 py-0.5 rounded text-[11px] transition-colors tracking-wide uppercase"
              >
                Register Now
              </button>

              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-white/60 hover:text-white transition-colors p-0.5"
                aria-label="Close Announcement Bar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN NAVIGATION BAR (STICKY, SEMI-TRANSPARENT WITH BACKDROP BLUR) */}
      <nav className="bg-[#0c2545]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-2.5 transition-all text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* BRANDING (FAR LEFT) */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
            title="Go to Homepage"
          >
            <Logo size={42} />

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg font-black text-white tracking-tight leading-none group-hover:text-[#FDBD55] transition-colors font-serif uppercase">
                  KAKUMA SOCCER ACADEMY
                </h1>
              </div>
              {/* SLOGAN & TAGLINE DIRECTLY UNDER ORGANIZATION NAME */}
              <span className="text-[11px] font-bold text-[#FDBD55] tracking-widest uppercase block mt-0.5">
                Learn, Earn, Innovate.
              </span>
            </div>
          </div>

          {/* NAVIGATION MENU (CENTER) - DESKTOP ONLY */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-bold text-white/90">
            
            {/* 1. About Us ▾ */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                  activeSection === 'about' ? 'text-[#FDBD55] font-black' : 'text-white/90'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#FDBD55] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-60 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-[#071D3B] border-2 border-[#FDBD55] rounded-2xl shadow-2xl p-2 text-xs text-white space-y-1 backdrop-blur-xl">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Mission & Vision</span>
                      <span className="text-[10px] text-white/60">Our core purpose in Kakuma</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">CBO Story & Leadership</span>
                      <span className="text-[10px] text-white/60">Refugee-led organization</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. What We Do ▾ */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('programs')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                  activeSection === 'programs' || activeSection === 'teams' ? 'text-[#FDBD55] font-black' : 'text-white/90'
                }`}
              >
                <span>What We Do</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#FDBD55] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-64 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-[#071D3B] border-2 border-[#FDBD55] rounded-2xl shadow-2xl p-2 text-xs text-white space-y-1 backdrop-blur-xl">
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Trophy className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Football Divisions (U10–U17)</span>
                      <span className="text-[10px] text-white/60">Tactical & physical training</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <BookOpen className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Homework & Literacy Hub</span>
                      <span className="text-[10px] text-white/60">Daily study hall before practice</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Users className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Kakuma Queens Circle</span>
                      <span className="text-[10px] text-white/60">Girls empowerment & life skills</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Where We Work */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                activeSection === 'where-we-work' ? 'text-[#FDBD55] font-black' : 'text-white/90'
              }`}
            >
              <span>Where We Work</span>
            </button>

            {/* 4. Our Impact ▾ */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('impact')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                  activeSection === 'impact' || activeSection === 'league' ? 'text-[#FDBD55] font-black' : 'text-white/90'
                }`}
              >
                <span>Our Impact</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#FDBD55] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-60 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-[#071D3B] border-2 border-[#FDBD55] rounded-2xl shadow-2xl p-2 text-xs text-white space-y-1 backdrop-blur-xl">
                  <button
                    onClick={() => handleNavClick('home', 'impact')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Award className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Youth Impact Statistics</span>
                      <span className="text-[10px] text-white/60">Measurable community transformation</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('home', 'impact')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Users className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Player & Mentee Spotlights</span>
                      <span className="text-[10px] text-white/60">Inspiring athlete growth stories</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('home', 'league')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Trophy className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Youth Academy League</span>
                      <span className="text-[10px] text-white/60">Match center & standings</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Get Involved ▾ */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('faq')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                  activeSection === 'faq' || activeSection === 'contact' ? 'text-[#FDBD55] font-black' : 'text-white/90'
                }`}
              >
                <span>Get Involved</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#FDBD55] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 w-60 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-[#071D3B] border-2 border-[#FDBD55] rounded-2xl shadow-2xl p-2 text-xs text-white space-y-1 backdrop-blur-xl">
                  <button
                    onClick={onOpenJoin}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <UserPlus className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Register / Join Squad</span>
                      <span className="text-[10px] text-white/60">Player application</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('faq')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <HelpCircle className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Parent & Volunteer FAQ</span>
                      <span className="text-[10px] text-white/60">Common answers & gear needs</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                  >
                    <Mail className="w-4 h-4 text-[#FDBD55]" />
                    <div>
                      <span className="font-bold block text-white">Contact Academy Desk</span>
                      <span className="text-[10px] text-white/60">Direct inquiry form</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Direct Link */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                activeSection === 'gallery' ? 'text-[#FDBD55] font-black' : 'text-white/90'
              }`}
            >
              <span>Gallery</span>
            </button>

          </div>

          {/* CALL-TO-ACTION (FAR RIGHT) - SOLID GREEN ACCENT DONATE BUTTON */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('donate')}
              className="bg-[#28a745] hover:bg-[#218838] active:bg-[#1e7e34] text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider flex items-center gap-2 group cursor-pointer border border-emerald-400/40 hover:scale-105 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white text-white shrink-0 group-hover:scale-110 transition-transform" />
              <span>DONATE</span>
            </button>
          </div>

          {/* MOBILE MENU HAMBURGER & QUICK ACTION */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('donate')}
              className="bg-[#28a745] text-white font-bold px-3 py-1.5 rounded-full text-xs flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-transform"
              aria-label="Donate Page"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>DONATE</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2">
            <div className="flex flex-col gap-1 text-sm font-bold">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'home' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'about' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                About Us / Mission
              </button>
              <button
                onClick={() => handleNavClick('programs')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'programs' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                What We Do / Programs
              </button>
              <button
                onClick={() => handleNavClick('league')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'league' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Academy League
              </button>
              <button
                onClick={() => handleNavClick('impact')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'impact' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Our Impact
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'gallery' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Gallery & Activities
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'faq' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Parent & Volunteer FAQ
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left px-3 py-2 rounded-lg ${
                  activeSection === 'contact' ? 'bg-white/10 text-[#FDBD55] border-l-4 border-[#FDBD55]' : 'text-white/90'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full flex items-center justify-center gap-2 bg-[#28a745] text-white font-black py-3 rounded-xl shadow uppercase tracking-wider text-xs"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>DONATE TO ACADEMY</span>
              </button>

              <button
                onClick={() => handleNavClick('register')}
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-3 rounded-xl border border-[#FDBD55] text-xs uppercase"
              >
                <UserPlus className="w-4 h-4 text-[#FDBD55]" />
                <span>JOIN THE ACADEMY</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

