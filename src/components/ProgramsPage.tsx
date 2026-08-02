import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Shield,
  Trophy,
  Heart,
  BookOpen,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  UserCheck,
  Calendar,
  X,
} from 'lucide-react';
import { Program } from '../types';

interface ProgramsPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const programsList: Program[] = [
    {
      id: 'prog-1',
      title: 'Junior Football Development (U10 & U13)',
      ageGroup: 'Ages 8 - 13',
      description:
        'Foundational football technical training focusing on ball control, passing accuracy, coordination, teamwork, and building confidence on dusty pitches.',
      features: [
        'Weekly technical passing & dribbling clinics',
        'Physical agility & footwork drills',
        'Nutritional snacks & hydration after training',
        'Free pitch access & training bibs provision',
      ],
      schedule: 'Monday, Wednesday, Friday (4:00 PM - 5:30 PM)',
      iconName: 'Shield',
    },
    {
      id: 'prog-2',
      title: 'Competitive Youth Squads (U15 & U17)',
      ageGroup: 'Ages 14 - 17',
      description:
        'Tactical discipline, position-specific training, match strategy, physical conditioning, and leadership preparation for regional youth leagues.',
      features: [
        'Advanced tactical formation drills & set-piece strategies',
        'Mandatory educational report card monitoring',
        'Captains leadership & communication workshops',
        'Regional tournament matches & scouting exposure',
      ],
      schedule: 'Tuesday, Thursday, Saturday (4:00 PM - 6:00 PM)',
      iconName: 'Trophy',
    },
    {
      id: 'prog-3',
      title: "Kakuma Queens Girls' Empowerment",
      ageGroup: 'Ages 10 - 22',
      description:
        'Empowering young women through football, female sports mentorship, monthly hygiene kit support, reproductive health awareness, and school retention.',
      features: [
        'Dedicated female coaches & trained chaperones',
        'Monthly dignity kits & hygiene supplies distribution',
        'Gender equality & public speaking workshops',
        'Competitive girls league fixtures',
      ],
      schedule: 'Wednesday, Saturday, Sunday (3:30 PM - 5:30 PM)',
      iconName: 'Heart',
    },
    {
      id: 'prog-4',
      title: 'Daily Homework & Literacy Study Hub',
      ageGroup: 'All Academy Athletes',
      description:
        'Mandatory study hall providing English literacy tutoring, mathematics guidance, quiet study spaces, and exam preparation before football practice.',
      features: [
        'One-hour quiet study time before stepping onto pitch',
        'Free exercise books, pens, and reading library access',
        'Termly academic excellence certificates',
        'Mentorship from volunteer local teachers',
      ],
      schedule: 'Monday to Friday (2:00 PM - 4:00 PM)',
      iconName: 'BookOpen',
    },
    {
      id: 'prog-5',
      title: 'Peacebuilding & Cultural Cohesion Festivals',
      ageGroup: 'Community Youth & Host Communities',
      description:
        'Inter-community sports festivals and friendly matches uniting young people from diverse refugee backgrounds and host Turkana communities.',
      features: [
        'Mixed-community friendly team fixtures',
        'Cultural dance performances & peace pledges',
        'Youth conflict resolution dialogues',
        'Free community meals & victory celebrations',
      ],
      schedule: 'Monthly Weekend Events & Holidays',
      iconName: 'Users',
    },
  ];

  const filteredPrograms = programsList.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Football' && (p.id === 'prog-1' || p.id === 'prog-2')) return true;
    if (selectedCategory === 'Girls Empowerment' && p.id === 'prog-3') return true;
    if (selectedCategory === 'Academics' && p.id === 'prog-4') return true;
    if (selectedCategory === 'Peacebuilding' && p.id === 'prog-5') return true;
    return false;
  });

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
            <Sparkles className="w-4 h-4 fill-[#123764]" />
            <span>Holistic Youth Development</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            OUR ACADEMY PATHWAYS & PROGRAMS
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            At Kakuma Soccer Academy, we combine sports coaching with mandatory academic tutoring, female empowerment, life-skills mentorship, and peacebuilding.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 flex-wrap mt-10 pt-6 border-t border-white/20">
            {['All', 'Football', 'Girls Empowerment', 'Academics', 'Peacebuilding'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FDBD55] text-[#123764] font-black border-2 border-white shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </motion.div>
      </section>

      {/* PROGRAMS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-8">
          {filteredPrograms.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-200 shadow-md hover:border-[#FDBD55] transition-all flex flex-col lg:flex-row gap-6 justify-between items-start"
            >
              <div className="lg:w-2/3 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#123764] text-[#FDBD55] font-black text-xs flex items-center justify-center shrink-0">
                    0{index + 1}
                  </span>
                  <span className="bg-[#EDF3FA] text-[#123764] text-xs font-black px-3 py-1 rounded-full uppercase border border-[#123764]/20">
                    {prog.ageGroup}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#123764] uppercase">
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {prog.description}
                </p>

                <div className="bg-[#FFF7E8] p-4 rounded-2xl border border-[#FDBD55]/40 space-y-2">
                  <span className="text-[11px] font-black text-[#123764] uppercase tracking-wider block">
                    Core Pillars & Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-800">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Sidebar Card */}
              <div className="lg:w-1/3 bg-[#071D3B] text-white p-6 rounded-2xl border-2 border-[#FDBD55] w-full flex flex-col justify-between shrink-0 space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#FDBD55] tracking-widest block">
                    Weekly Schedule
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold mt-1 text-white">
                    <Clock className="w-4 h-4 text-[#FDBD55] shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="w-full bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs py-2.5 rounded-full border border-white/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Program Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FDBD55]" />
                  </button>

                  <button
                    onClick={onOpenJoin}
                    className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs py-2.5 rounded-full shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Enroll Player in Program</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAM DETAIL MODAL */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border-4 border-[#FDBD55] shadow-2xl">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase">
              {activeModalProgram.ageGroup}
            </span>

            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase mt-2">
              {activeModalProgram.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
              {activeModalProgram.description}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <h5 className="font-bold text-xs text-[#123764] uppercase tracking-wider mb-2">Program Features:</h5>
              <ul className="space-y-1.5">
                {activeModalProgram.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <button
                onClick={onOpenJoin}
                className="w-full bg-[#123764] text-white font-black text-xs py-3 rounded-full hover:bg-[#0c2545] transition-colors"
              >
                Register Youth Player Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProgramsPage;
