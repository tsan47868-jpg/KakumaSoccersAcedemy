import React from 'react';
import { motion } from 'motion/react';
import { Trophy, GraduationCap, Users, Heart, Shield, Award } from 'lucide-react';
import { CountUp } from './CountUp';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      number: '450+',
      label: 'Young Athletes Nurtured',
      sublabel: 'Across Kakuma Refugee Camp',
      icon: Users,
    },
    {
      id: 2,
      number: '12',
      label: 'Youth & Senior Teams',
      sublabel: 'U11, U13, U15, U17, Senior Women',
      icon: Trophy,
    },
    {
      id: 3,
      number: '85%',
      label: 'School Attendance & Excellence',
      sublabel: 'Integrated Homework Support',
      icon: GraduationCap,
    },
    {
      id: 4,
      number: '24',
      label: 'Community Coaches & Mentors',
      sublabel: 'Local Leadership & Peacebuilders',
      icon: Shield,
    },
    {
      id: 5,
      number: '100%',
      label: 'Free Participation',
      sublabel: 'No Financial Barrier for Youth',
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 bg-[#123764] text-white relative overflow-hidden border-t-4 border-[#FDBD55]">
      
      {/* Decorative pitch circle arc overlays */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-10">
        <div className="w-96 h-96 rounded-full border-8 border-[#FDBD55]"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 pointer-events-none opacity-10">
        <div className="w-96 h-96 rounded-full border-8 border-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-3 text-xs font-bold text-[#FDBD55] uppercase tracking-widest border border-[#FDBD55]/40">
            <Award className="w-4 h-4 text-[#FDBD55]" />
            <span>Empowering Kakuma Youth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif tracking-tight">
            OUR IMPACT AT A GLANCE
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-sm sm:text-base text-white/80">
            Measuring our commitment to youth development, education, and social cohesion through football in Turkana West.
          </p>
        </motion.div>

        {/* Round Statistic Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Outer Gold Ring Circle */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#0c2545] border-4 border-[#FDBD55] flex flex-col items-center justify-center p-3 shadow-xl transform group-hover:scale-110 transition-transform duration-300 relative">
                  
                  {/* Subtle Icon Background */}
                  <Icon className="w-6 h-6 text-[#FDBD55] mb-1" />
                  
                  {/* Large Gold Number */}
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FDBD55] tracking-tight font-serif">
                    <CountUp value={stat.number} />
                  </span>

                  {/* Inner ring line */}
                  <div className="absolute inset-1.5 rounded-full border border-[#FDBD55]/20 pointer-events-none"></div>
                </div>

                {/* Label & Sublabel */}
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-white group-hover:text-[#FDBD55] transition-colors">
                  {stat.label}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs text-white/70 max-w-[180px]">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


export default StatsSection;
