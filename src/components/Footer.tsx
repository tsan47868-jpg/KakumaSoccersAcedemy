import React, { useState } from 'react';
import { Logo } from './Logo';
import { Heart, MapPin, Mail, Phone, ShieldCheck, ArrowUp, Lock, Send, CheckCircle2, Bell, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenJoin: () => void;
  onOpenDonate: () => void;
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenJoin,
  onOpenDonate,
  setActiveSection,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const handleNav = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123764] text-white pt-16 pb-8 border-t-8 border-[#FDBD55] relative">
      
      {/* Decorative Pitch Arc Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <circle cx="500" cy="300" r="280" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="500" cy="300" r="180" stroke="#FDBD55" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EMAIL NEWSLETTER SUBSCRIPTION SECTION */}
        <div className="bg-[#0c2545] border-2 border-[#FDBD55]/50 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FDBD55]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider">
                <Bell className="w-3.5 h-3.5 fill-[#123764]" />
                <span>Stay Connected</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-serif text-white uppercase tracking-tight">
                Subscribe For Match Recaps & Youth Updates
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Join our newsletter to receive monthly updates on Kakuma League fixtures, player stories, study hall milestones, and community projects.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              {subscribed ? (
                <div className="bg-emerald-900/80 border border-emerald-400/60 text-emerald-100 px-6 py-3.5 rounded-2xl flex items-center gap-3 text-xs font-bold shadow-inner">
                  <CheckCircle2 className="w-5 h-5 text-[#FDBD55] shrink-0" />
                  <span>Thank you! You're subscribed to Kakuma Soccer Academy updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-[420px]">
                  <div className="relative w-full">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#FDBD55] focus:bg-white/15 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs px-6 py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Organization Branding & Motto */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <Logo size={70} onClick={scrollToTop} />
              <div>
                <h2 className="text-xl font-black font-serif text-white tracking-tight">
                  Kakuma Soccer Academy
                </h2>
                <span className="text-xs font-black text-[#FDBD55] uppercase tracking-widest block mt-0.5">
                  Nurturing Dreams
                </span>
                <span className="text-[11px] text-white/70 block mt-0.5">
                  Community-Based Organization (CBO)
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed mb-4 max-w-sm">
              Formed in November 2024 to identify, nurture and expose young football talent while promoting unity, education, mentorship, discipline and peaceful coexistence in Kakuma Refugee Camp.
            </p>

            <div className="p-3 bg-[#0c2545] rounded-2xl border border-[#FDBD55]/40 text-xs font-bold text-[#FDBD55] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FDBD55]" />
              <span>More Than Football — A Platform for Hope.</span>
            </div>
          </div>

          {/* Column 2: Core Pages */}
          <div className="lg:col-span-3 flex flex-col gap-1.5 text-center md:text-left">
            <h3 className="text-xs font-black text-[#FDBD55] uppercase tracking-wider mb-2 font-serif">
              Explore Pages
            </h3>
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Us & Mission' },
              { id: 'programs', label: 'Our Programs' },
              { id: 'teams', label: 'Teams & Squads' },
              { id: 'league', label: 'Academy League' },
              { id: 'impact', label: 'Our Impact' },
              { id: 'stories', label: 'Stories & News' },
              { id: 'gallery', label: 'Gallery & Activities' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-xs text-white/80 hover:text-[#FDBD55] transition-colors py-0.5 text-left w-fit font-medium"
              >
                • {link.label}
              </button>
            ))}
          </div>

          {/* Column 3: Get Involved & Policies */}
          <div className="lg:col-span-2 flex flex-col gap-1.5 text-center md:text-left">
            <h3 className="text-xs font-black text-[#FDBD55] uppercase tracking-wider mb-2 font-serif">
              Get Involved
            </h3>
            {[
              { id: 'register', label: 'Register a Player' },
              { id: 'donate', label: 'Support & Donate' },
              { id: 'safeguarding', label: 'Safeguarding Policy' },
              { id: 'faq', label: 'Parents FAQ' },
              { id: 'contact', label: 'Contact Academy' },
              { id: 'admin', label: 'Admin Panel' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-xs text-white/80 hover:text-[#FDBD55] transition-colors py-0.5 text-left w-fit font-medium"
              >
                • {link.label}
              </button>
            ))}
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-center md:text-left">
            <h3 className="text-xs font-black text-[#FDBD55] uppercase tracking-wider mb-2 font-serif">
              Contact Kakuma CBO
            </h3>

            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#FDBD55] shrink-0 mt-0.5" />
              <span>Kakuma Refugee Camp, Turkana County, Kenya</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-white/80">
              <Phone className="w-4 h-4 text-[#FDBD55] shrink-0" />
              <a href="tel:+254728071757" className="hover:text-[#FDBD55] font-bold">+254 728 071757</a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-white/80">
              <Mail className="w-4 h-4 text-[#FDBD55] shrink-0" />
              <a href="mailto:agawanyang4@gmail.com" className="hover:text-[#FDBD55] font-bold">agawanyang4@gmail.com</a>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleNav('donate')}
                className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs px-4 py-2 rounded-full shadow transition-all flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-[#123764]" />
                <span>Donate Now</span>
              </button>

              <button
                onClick={() => handleNav('register')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2 rounded-full transition-all border border-[#FDBD55]"
              >
                <span>Register Player</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2024 - 2026 Kakuma Soccer Academy (CBO). All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#FDBD55] font-bold">Nurturing Talent. Building Unity. Creating Futures.</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0c2545] text-[#FDBD55] flex items-center justify-center border border-[#FDBD55] hover:bg-[#FDBD55] hover:text-[#123764] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
