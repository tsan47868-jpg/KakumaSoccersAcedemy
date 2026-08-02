import React from 'react';
import { motion } from 'motion/react';
import { PLAYER_SPOTLIGHTS, TESTIMONIALS } from '../data/mockData';
import { BookOpen, Sparkles, Heart, Quote, Star, GraduationCap } from 'lucide-react';
import { CountUp } from './CountUp';

export const ImpactMentorshipSection: React.FC = () => {
  return (
    <section id="impact" className="py-16 lg:py-24 bg-[#FFF7E8] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#123764] text-white px-4 py-1.5 rounded-full mb-3 text-xs font-black uppercase tracking-widest border border-[#FDBD55]">
            <Sparkles className="w-4 h-4 text-[#FDBD55]" />
            <span>Nurturing Character & Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight">
            IMPACT & MENTORSHIP
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-base sm:text-lg text-[#111827]/80">
            At Kakuma Soccer Academy, football is our hook, but mentorship and education are our heartbeat.
          </p>
        </motion.div>

        {/* Player & Mentee Spotlights */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-8 pb-3 border-b-2 border-[#123764]/10"
          >
            <h3 className="text-2xl font-black text-[#123764] font-serif">
              Featured Player & Mentee Spotlights
            </h3>
            <span className="hidden sm:inline-block text-xs font-bold text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase">
              Kakuma Youth Role Models
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLAYER_SPOTLIGHTS.map((player, pIdx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: pIdx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border-2 border-[#FDBD55] shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative"
              >
                <div>
                  {/* Circular Avatar Frame with Gold Ring */}
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full border-4 border-[#FDBD55] bg-[#123764] p-1 shadow-md">
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-1 bg-[#123764] text-[#FDBD55] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#FDBD55]">
                      {player.team.split(' ')[1] || 'KFA'}
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <h4 className="text-xl font-bold text-[#123764]">{player.name}</h4>
                    <p className="text-xs font-black text-[#FDBD55] uppercase tracking-wider mt-0.5">
                      {player.role} • Age {player.age}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#111827]/90 leading-relaxed mb-4 text-center">
                    "{player.bio}"
                  </p>

                  <div className="bg-[#EDF3FA] p-3 rounded-2xl mb-4 border border-[#123764]/10">
                    <div className="flex items-center gap-2 text-xs text-[#123764] font-bold">
                      <GraduationCap className="w-4 h-4 text-[#FDBD55] shrink-0" />
                      <span>Academic Goal: {player.academicGoal}</span>
                    </div>
                  </div>
                </div>

                {/* Player Stats Grid */}
                <div className="pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-[#FFF7E8] p-2 rounded-xl border border-[#FDBD55]/50">
                    <span className="block font-black text-[#123764] text-sm">
                      <CountUp value={player.stats.matches} />
                    </span>
                    <span className="text-[10px] text-[#111827]/70">Matches</span>
                  </div>
                  <div className="bg-[#FFF7E8] p-2 rounded-xl border border-[#FDBD55]/50">
                    <span className="block font-black text-[#123764] text-sm">
                      <CountUp value={player.stats.goals || player.stats.assists || 0} />
                    </span>
                    <span className="text-[10px] text-[#111827]/70">Goal Contr</span>
                  </div>
                  <div className="bg-[#FFF7E8] p-2 rounded-xl border border-[#FDBD55]/50">
                    <span className="block font-black text-[#123764] text-sm">
                      <CountUp value={player.stats.attendanceRate} />
                    </span>
                    <span className="text-[10px] text-[#111827]/70">Class Att.</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>


        {/* Community Testimonials & Voices */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-[#123764] font-serif">
              VOICES FROM OUR KAKUMA COMMUNITY
            </h3>
            <div className="w-16 h-1 bg-[#FDBD55] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#123764] text-white p-6 rounded-3xl border-2 border-[#FDBD55] shadow-lg flex flex-col justify-between relative"
              >
                <Quote className="w-8 h-8 text-[#FDBD55] opacity-40 mb-2" />
                <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FDBD55]"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-[#FDBD55]">{t.name}</h5>
                    <p className="text-[11px] text-white/70">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactMentorshipSection;
