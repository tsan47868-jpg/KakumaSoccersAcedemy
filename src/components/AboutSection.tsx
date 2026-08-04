import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Heart, BookOpen, Shield, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'history' | 'pillars' | 'governance'>('mission');

  const pillars = [
    {
      title: 'Football Excellence & Teamwork',
      desc: 'Structured coaching, tactical development, and fair play that build physical fitness, mental resilience, and camaraderie.',
      icon: Target,
    },
    {
      title: 'Educational Mentorship',
      desc: 'Mandatory study halls, reading literacy clubs, and exam preparation so every player excels academically.',
      icon: BookOpen,
    },
    {
      title: 'Life Skills & Character Building',
      desc: 'Workshops on leadership, conflict resolution, mental well-being, and health education for youth.',
      icon: Shield,
    },
    {
      title: 'Community Cohesion & Peace',
      desc: 'Uniting young people from diverse refugee and host community backgrounds in Kakuma through shared passion.',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white text-[#111827] relative overflow-hidden">
      
      {/* Top Curved Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-[#123764] clip-path-curve"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#EDF3FA] border border-[#123764] px-4 py-1.5 rounded-full mb-3">
            <span className="text-xs font-black text-[#123764] uppercase tracking-widest">
              Community-Based Organization (CBO)
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif">
            ABOUT KAKUMA FOOTBALL ACADEMY
          </h2>
          
          {/* Gold Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '7rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] rounded-full mt-3 mb-4"
          />
          
          <p className="max-w-3xl text-base sm:text-lg text-[#111827] leading-relaxed">
            Founded in 2024 in Kakuma Refugee Camp, Kenya, <strong className="text-[#123764]">Kakuma Football Academy</strong> is a grassroots Community-Based Organization dedicated to transforming youth lives through sport, education, and holistic mentorship.
          </p>
        </motion.div>

        {/* Tab Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-[#EDF3FA] p-1.5 rounded-full border border-[#123764]/20 shadow-inner max-w-full overflow-hidden">
            {[
              { id: 'mission', label: 'Mission' },
              { id: 'history', label: 'Context' },
              { id: 'pillars', label: 'Pillars' },
              { id: 'governance', label: 'Leadership' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 sm:px-4 lg:px-5 py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#123764] text-white shadow-md'
                    : 'text-[#123764] hover:text-[#123764]/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Panels */}
        <div className="bg-[#FFF7E8] rounded-3xl p-4 sm:p-6 lg:p-10 border-2 border-[#FDBD55] shadow-lg">
          
          {activeTab === 'mission' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
                <span className="text-[10px] sm:text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full w-fit">
                  SECTION 01 • MISSION
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#123764] font-serif">
                  Empowering Young Minds, Nurturing Lifelong Dreams
                </h3>
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed">
                  Our mission is to leverage the universal power of football to provide young refugees and local youth in Kakuma with safe spaces, structured sports training, academic tutoring, and life skills guidance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-1 sm:mt-2">
                  <div className="flex items-start gap-3 bg-white p-2.5 sm:p-3 lg:p-4 rounded-2xl border border-[#FDBD55]">
                    <CheckCircle2 className="w-5 h-5 text-[#FDBD55] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#123764] text-sm">Inclusive Opportunity</h4>
                      <p className="text-xs text-[#111827]/80 mt-1">Open to all youth regardless of nationality, gender, or background.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-2.5 sm:p-3 lg:p-4 rounded-2xl border border-[#FDBD55]">
                    <CheckCircle2 className="w-5 h-5 text-[#FDBD55] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#123764] text-sm">Dual Focus Paradigm</h4>
                      <p className="text-xs text-[#111827]/80 mt-1">No football without school. Education and attendance are mandatory.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-4 p-3 sm:p-4 bg-[#123764] text-white rounded-2xl border-l-4 border-[#FDBD55]">
                  <p className="text-xs sm:text-sm font-semibold italic text-[#FDBD55]">
                    “More Than Football — Nurturing Dreams and Building Futures.”
                  </p>
                </div>
              </div>

              {/* Circular Image Frame with Gold Ring */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full border-6 sm:border-8 border-[#FDBD55] bg-white p-2 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=600"
                    alt="Kakuma Football Academy Mentorship Group"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 right-4 bg-[#123764] text-white text-xs font-bold px-4 py-1.5 rounded-full border-2 border-[#FDBD55] shadow">
                    Official CBO • 2024
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
                <span className="text-[10px] sm:text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full w-fit">
                  SECTION 02 • CONTEXT & ORIGIN
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#123764] font-serif">
                  Serving Kakuma & Turkana West
                </h3>
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed">
                  Kakuma Refugee Camp in Turkana County, Kenya, is home to over 200,000 individuals from diverse nations across East and Central Africa. Young people make up more than 60% of the population, facing significant hurdles in accessing extracurricular programs, higher education, and structured recreational facilities.
                </p>
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed">
                  Recognizing the transformative role of sport, local coaches and community leaders established Kakuma Football Academy in 2024 to provide an organized, safe, and empowering platform for young talent.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full border-6 sm:border-8 border-[#123764] bg-[#FDBD55] p-2 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600"
                    alt="Kakuma Pitch Action"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pillars' && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full">
                  SECTION 03 • CORE PILLARS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#123764] font-serif mt-2">
                  The Foundations of Kakuma Football Academy
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-sm flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center font-bold shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#FDBD55] uppercase tracking-wider">
                            Pillar 0{idx + 1}
                          </span>
                          <h4 className="text-lg font-bold text-[#123764]">
                            {pillar.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#111827] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="flex flex-col gap-6">
              <div className="max-w-3xl">
                <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full">
                  SECTION 04 • CBO LEADERSHIP
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#123764] font-serif mt-2">
                  Community-Based Governance & Accountability
                </h3>
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed mt-2">
                  Kakuma Soccer Academy operates under a community-led governance model. Our leadership board consists of certified grassroots coaches, parent representatives, refugee youth advocates, and local education advisors working transparently.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                <div className="bg-white p-5 rounded-2xl border border-[#FDBD55] text-center">
                  <div className="w-16 h-16 rounded-full bg-[#123764] text-[#FDBD55] mx-auto flex items-center justify-center font-bold text-xl mb-3 border-2 border-[#FDBD55]">
                    PL
                  </div>
                  <h4 className="font-bold text-[#123764] text-base">Peter Lokai</h4>
                  <p className="text-xs text-[#FDBD55] font-extrabold uppercase">Academy Director & Head Coach</p>
                  <p className="text-xs text-[#111827]/80 mt-2">Grassroots football license holder with 8+ years coaching in Turkana West.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#FDBD55] text-center">
                  <div className="w-16 h-16 rounded-full bg-[#123764] text-[#FDBD55] mx-auto flex items-center justify-center font-bold text-xl mb-3 border-2 border-[#FDBD55]">
                    GN
                  </div>
                  <h4 className="font-bold text-[#123764] text-base">Grace Nyabol</h4>
                  <p className="text-xs text-[#FDBD55] font-extrabold uppercase">Women’s Lead & Mentor</p>
                  <p className="text-xs text-[#111827]/80 mt-2">Advocate for girls sports empowerment and reproductive health awareness.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#FDBD55] text-center">
                  <div className="w-16 h-16 rounded-full bg-[#123764] text-[#FDBD55] mx-auto flex items-center justify-center font-bold text-xl mb-3 border-2 border-[#FDBD55]">
                    HA
                  </div>
                  <h4 className="font-bold text-[#123764] text-base">Hassan Ali</h4>
                  <p className="text-xs text-[#FDBD55] font-extrabold uppercase">Education Coordinator</p>
                  <p className="text-xs text-[#111827]/80 mt-2">Manages the academy study hall, book lending, and school tutoring schedules.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
