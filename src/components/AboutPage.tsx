import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ShieldCheck,
  Heart,
  Users,
  Award,
  Sparkles,
  BookOpen,
  Calendar,
  CheckCircle2,
  MapPin,
  Trophy,
  Target,
  Compass,
  UserCheck,
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
  onOpenSafeguarding?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
  onOpenSafeguarding,
}) => {
  const leadershipTeam = [
    {
      name: 'Emmanuel Ekai',
      role: 'Founder & Executive Director',
      bio: 'Refugee-led CBO visionary who established Kakuma Soccer Academy in November 2024 to create safe spaces, educational pathways, and athletic development for youth across Kakuma.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      badge: 'CBO Founder',
    },
    {
      name: 'Peter Lokai',
      role: 'Head Football Coach & Technical Lead',
      bio: 'Certified CAF grassroots coach dedicated to tactical discipline, physical agility, and positive character building on dusty community pitches.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      badge: 'Head Coach',
    },
    {
      name: 'Grace Nyabol',
      role: 'Head Coach, Kakuma Queens & Women’s Lead',
      bio: 'Pioneer advocate for female youth empowerment through sports, providing mentorship, hygiene dignity supplies, and reproductive health awareness.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      badge: 'Girls Empowerment',
    },
    {
      name: 'Hassan Ali',
      role: 'Youth Development Director & Tournament Coordinator',
      bio: 'Organizes inter-camp competitions, referee logistics, and scouting connections for talent identification across Turkana West.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      badge: 'Youth Operations',
    },
  ];

  const coreValues = [
    { title: 'Unity', desc: 'Bringing together youth from diverse nationalities and background in harmony.' },
    { title: 'Discipline', desc: 'Fostering responsibility, punctuality, and self-control on and off the field.' },
    { title: 'Respect', desc: 'Valuing every teammate, opponent, coach, referee, and community member.' },
    { title: 'Inclusion', desc: 'Equal access for boys, girls, children with disability, and host communities.' },
    { title: 'Integrity', desc: 'Upholding transparency, honest sportsmanship, and high ethical standards.' },
    { title: 'Education', desc: 'Prioritizing academic progress and lifelong literacy hall alongside sports.' },
    { title: 'Hope', desc: 'Empowering young people to dream big and build a resilient, positive future.' },
  ];

  const pathwaySteps = [
    { step: '01', title: 'Discover', desc: 'Community outreach identifying passionate young talent in Kakuma camps & host villages.' },
    { step: '02', title: 'Train', desc: 'Structured age-group coaching developing technical ball skills, physical agility, and teamwork.' },
    { step: '03', title: 'Mentor', desc: 'Daily mandatory study hall, literacy tutoring, and life-skills workshops before practice.' },
    { step: '04', title: 'Compete', desc: 'Regular Kakuma Youth League fixtures, fair-play tournaments, and regional showcases.' },
    { step: '05', title: 'Progress', desc: 'Scholarship opportunities, secondary school transitions, and youth leadership roles.' },
  ];

  const timelineMilestones = [
    { date: 'November 2024', title: 'Academy Founded', desc: 'Established as a refugee-led Community-Based Organization (CBO) in Kakuma Refugee Camp.' },
    { date: 'January 2025', title: 'Grounds & Study Hub Established', desc: 'Secured Kakuma Central Pitch and launched after-school homework literacy support.' },
    { date: 'June 2025', title: 'Kakuma Queens Launch', desc: 'Expanded female youth participation with dedicated female coaches and dignity kit supplies.' },
    { date: 'August 2026', title: 'Youth Championship League', desc: 'Active weekly competition engaging over 100+ registered athletes across U10–U17 divisions.' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* PAGE HERO HEADER */}
      <section
        className="bg-[#071D3B] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden min-h-[520px]"
        style={{
          backgroundImage: "url('/images/aboutusheroimage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#071D3B]/85" />
        <div className="relative max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Homepage</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 fill-[#123764]" />
            <span>Refugee-Led Community Initiative</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
              BORN IN KAKUMA. BUILT FOR THE FUTURE.
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
              Kakuma Soccer Academy was established in November 2024 to identify, nurture and expose young football talent while promoting unity, education, mentorship, discipline and peaceful coexistence in Kakuma Refugee Camp and Turkana West.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenJoin}
                className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all"
              >
                Join Our Academy
              </button>
              <button
                onClick={() => onOpenDonate()}
                className="bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 hover:border-[#FDBD55] transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#FDBD55]" />
                <span>Support Our Mission</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-3xl border-2 border-[#123764]/10 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#123764] text-[#FDBD55] flex items-center justify-center font-black mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase mb-2">Our Mission</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              To identify, nurture and expose young football talent while using sport, education and mentorship to build confident, healthy, and responsible young leaders who foster peace across refugee and host communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-3xl border-2 border-[#123764]/10 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FDBD55] text-[#123764] flex items-center justify-center font-black mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase mb-2">Our Vision</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A united and empowered community in Kakuma where every child, regardless of origin or gender, has access to quality sports training, educational support, and pathways toward a dignified future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3.5 py-1 rounded-full uppercase tracking-widest">
            Principles We Live By
          </span>
          <h2 className="text-3xl font-black font-serif text-[#123764] uppercase mt-3">
            OUR CORE VALUES
          </h2>
          <div className="w-20 h-1 bg-[#FDBD55] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#FDBD55] transition-all cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-[#EDF3FA] text-[#123764] font-black text-xs flex items-center justify-center mb-3">
                0{idx + 1}
              </div>
              <h4 className="font-extrabold text-[#123764] text-base mb-1">{val.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5-STEP ATHLETE DEVELOPMENT PATHWAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#071D3B] text-white p-8 sm:p-12 rounded-3xl border-4 border-[#FDBD55] shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-[#123764] bg-[#FDBD55] px-3.5 py-1 rounded-full uppercase tracking-widest">
              Holistic Growth Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-white uppercase mt-3">
              THE 5-STEP ACADEMY PATHWAY
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-2">
              From discovering a passion for football to academic graduation and youth leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pathwaySteps.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#123764] p-5 rounded-2xl border border-[#FDBD55]/30 relative flex flex-col justify-between hover:border-[#FDBD55] transition-all"
              >
                <span className="text-2xl font-black text-[#FDBD55] block mb-2">{p.step}</span>
                <h4 className="font-black text-white text-base mb-2">{p.title}</h4>
                <p className="text-xs text-white/80 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP & COACHES PROFILE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3.5 py-1 rounded-full uppercase tracking-widest">
            Community Leadership
          </span>
          <h2 className="text-3xl font-black font-serif text-[#123764] uppercase mt-3">
            MEET OUR LEADERS & COACHES
          </h2>
          <div className="w-20 h-1 bg-[#FDBD55] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-sm hover:border-[#FDBD55] transition-all flex flex-col"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-[#123764] text-[#FDBD55] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-[#FDBD55]">
                  {leader.badge}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[#123764] text-lg">{leader.name}</h3>
                  <p className="text-xs font-bold text-[#FDBD55] bg-[#123764] px-2.5 py-0.5 rounded-md inline-block mt-1">
                    {leader.role}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CBO TIMELINE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-md">
          <h3 className="text-xl font-black font-serif text-[#123764] uppercase text-center mb-6">
            OUR ORGANIZATIONAL TIMELINE
          </h3>

          <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#123764]/20 pl-8">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FDBD55] border-2 border-[#123764]" />
                <span className="text-xs font-extrabold text-[#123764] uppercase tracking-wider block">
                  {m.date}
                </span>
                <h4 className="font-bold text-sm text-[#123764] mt-0.5">{m.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFEGUARDING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#FFF7E8] border-2 border-[#FDBD55] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#123764] text-[#FDBD55] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black font-serif text-[#123764] text-lg uppercase">
                Child Protection & Safeguarding Commitment
              </h4>
              <p className="text-xs text-gray-700 mt-1 max-w-xl">
                We maintain strict child safeguarding standards across all training grounds, tournaments, and study halls to ensure every young athlete is protected.
              </p>
            </div>
          </div>

          {onOpenSafeguarding && (
            <button
              onClick={onOpenSafeguarding}
              className="bg-[#123764] hover:bg-[#0c2545] text-white text-xs font-bold px-5 py-3 rounded-full shrink-0 border border-[#FDBD55]"
            >
              Read Safeguarding Policy
            </button>
          )}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
