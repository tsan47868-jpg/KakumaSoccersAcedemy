import React from 'react';
import { motion } from 'motion/react';
import { PROGRAMS_DATA } from '../data/mockData';
import { Shield, Trophy, Heart, BookOpen, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenJoin: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenJoin }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="w-7 h-7 text-[#FDBD55]" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-[#FDBD55]" />;
      case 'Heart':
        return <Heart className="w-7 h-7 text-[#FDBD55]" />;
      case 'BookOpen':
        return <BookOpen className="w-7 h-7 text-[#FDBD55]" />;
      default:
        return <Trophy className="w-7 h-7 text-[#FDBD55]" />;
    }
  };

  return (
    <section id="programs" className="py-16 lg:py-24 bg-[#EDF3FA] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#123764] text-white px-4 py-1.5 rounded-full mb-3 text-xs font-extrabold uppercase tracking-widest border border-[#FDBD55]">
            <Trophy className="w-4 h-4 text-[#FDBD55]" />
            <span>Structured Youth Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight">
            ACADEMY DIVISIONS & PROGRAMS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-base sm:text-lg text-[#111827]/80">
            Providing tailored football coaching, mentorship, and educational support across all age groups in Kakuma.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS_DATA.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-md hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Section Number */}
              <div className="absolute top-0 right-0 bg-[#123764] text-[#FDBD55] font-black text-sm px-5 py-2 rounded-bl-2xl font-serif">
                0{index + 1}
              </div>

              <div>
                {/* Header Lockup */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#123764] flex items-center justify-center shrink-0 border-2 border-[#FDBD55] shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(prog.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#FDBD55] bg-[#123764]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {prog.ageGroup}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#123764] mt-1 group-hover:text-[#FDBD55] transition-colors">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#111827] leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-6 bg-[#FFF7E8] p-4 rounded-2xl border border-[#FDBD55]/50">
                  <h4 className="text-xs font-black text-[#123764] uppercase tracking-wider mb-2">
                    Key Highlights:
                  </h4>
                  {prog.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111827]">
                      <CheckCircle2 className="w-4 h-4 text-[#FDBD55] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule & Join CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#123764]">
                  <Clock className="w-4 h-4 text-[#FDBD55]" />
                  <span>{prog.schedule}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenJoin}
                  className="w-full sm:w-auto bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all border border-[#FDBD55] cursor-pointer"
                >
                  <span>Enrol Player</span>
                  <ArrowRight className="w-4 h-4 text-[#FDBD55]" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Campaign Affirmation Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 bg-[#123764] text-white rounded-3xl p-8 border-4 border-[#FDBD55] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FDBD55] text-[#123764] font-black text-2xl flex items-center justify-center shrink-0">
              ⚽
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-serif text-[#FDBD55]">
                Ready to Join Kakuma Football Academy?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                We welcome young boys and girls across all skill levels in Kakuma. Registration is 100% free.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenJoin}
            className="w-full md:w-auto bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-sm px-8 py-3.5 rounded-full shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Register a Player Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramsSection;
