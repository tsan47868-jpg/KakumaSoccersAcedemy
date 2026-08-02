import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  Heart,
  Download,
  CheckCircle2,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface ImpactPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const impactStats = [
    { value: '100+', label: 'Young Players Supported', desc: 'Provided with football gear, boots, and structured coaching.' },
    { value: '40%', label: 'Girls Participation Goal', desc: 'Empowered through the Kakuma Queens female sports initiative.' },
    { value: '20+', label: 'Training & Study Sessions', desc: 'Weekly football drills combined with study hall tutoring.' },
    { value: '10+', label: 'Community Teams Engaged', desc: 'Inter-camp refugee and host community squads in the Kakuma League.' },
    { value: '5+', label: 'Certified Volunteer Coaches', desc: 'Trained local mentors guiding character, health, and athletic discipline.' },
  ];

  const outcomesList = [
    {
      title: 'Academic Retention & Literacy',
      stat: '94% School Attendance Rate',
      desc: 'Mandatory study hall prior to practice ensures youth stay enrolled in school and improve English literacy scores.',
    },
    {
      title: 'Peace & Social Cohesion',
      stat: '10+ Diverse Ethnicities United',
      desc: 'Youth from South Sudan, Somalia, Ethiopia, DRC, Burundi, and host Turkana play side-by-side in mixed squads.',
    },
    {
      title: 'Health & Female Dignity',
      stat: '100% Monthly Kit Provision',
      desc: 'Female players receive health education and dignity kits to ensure they never miss school or sports due to lack of supplies.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <TrendingUp className="w-4 h-4 fill-[#123764]" />
            <span>PROGRESS YOU CAN SEE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            OUR COMMUNITY IMPACT IN KAKUMA
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            Measuring the tangible difference football, mandatory education, female empowerment, and peacebuilding make in young lives every day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDonate}
              className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#123764]" />
              <span>Invest in Youth Impact</span>
            </motion.button>
            <a
              href="#report"
              className="bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#FDBD55]" />
              <span>Download Impact Report (PDF)</span>
            </a>
          </div>

        </motion.div>
      </section>

      {/* KEY STATS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {impactStats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-3xl border-2 border-[#123764]/10 shadow-xl text-center space-y-2"
            >
              <span className="text-3xl sm:text-4xl font-black font-serif text-[#123764] block">
                {st.value}
              </span>
              <h4 className="font-extrabold text-[#123764] text-xs uppercase">{st.label}</h4>
              <p className="text-[11px] text-gray-500 leading-tight">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3.5 py-1 rounded-full uppercase tracking-widest">
            Measurable Results
          </span>
          <h2 className="text-3xl font-black font-serif text-[#123764] uppercase mt-3">
            WHAT OUR PROGRAM DELIVERS
          </h2>
          <div className="w-20 h-1 bg-[#FDBD55] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomesList.map((out, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm hover:border-[#FDBD55] transition-all space-y-3">
              <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-3 py-1 rounded-full uppercase inline-block">
                {out.stat}
              </span>
              <h3 className="font-black font-serif text-xl text-[#123764] uppercase">{out.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{out.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#071D3B] text-white p-8 sm:p-12 rounded-3xl border-4 border-[#FDBD55] shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Quote className="w-10 h-10 text-[#FDBD55] mx-auto mb-2 opacity-80" />
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-white uppercase">
              VOICES FROM OUR COMMUNITY
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Hear directly from parents, coaches, and youth athletes in Kakuma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#123764] p-6 rounded-2xl border border-[#FDBD55]/30 flex flex-col justify-between space-y-4">
                <p className="text-xs text-white/90 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img src={t.imageUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-[#FDBD55]" />
                  <div>
                    <h5 className="font-extrabold text-white text-xs">{t.name}</h5>
                    <p className="text-[10px] text-[#FDBD55]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD REPORT */}
      <section id="report" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-md space-y-4">
          <Award className="w-10 h-10 text-[#FDBD55] mx-auto" />
          <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
            Kakuma Soccer Academy Annual Progress Report
          </h3>
          <p className="text-xs text-gray-600 max-w-xl mx-auto leading-relaxed">
            Read our comprehensive overview detailing operational transparency, financial governance, athletic milestones, and educational retention metrics across Turkana West.
          </p>
          <button
            onClick={() => alert('Downloading Kakuma Soccer Academy 2026 Annual Impact & Governance Overview (PDF)...')}
            className="bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs px-6 py-3 rounded-full shadow border border-[#FDBD55] inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-[#FDBD55]" />
            <span>Download Annual Impact Overview (PDF)</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default ImpactPage;
