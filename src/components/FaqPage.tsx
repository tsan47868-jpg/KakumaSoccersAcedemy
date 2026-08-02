import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  HelpCircle,
} from 'lucide-react';
import { FaqSection } from './FaqSection';

interface FaqPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.button
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </motion.button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-4 h-4 fill-[#123764]" />
            <span>CLEAR INFORMATION FOR PARENTS & PARTNERS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
            Find quick answers about player enrollment, training schedules, study hall attendance, equipment donations, and volunteering with Kakuma Soccer Academy.
          </p>
        </motion.div>
      </section>

      {/* FAQ CONTENT SECTION */}
      <section className="pt-8">
        <FaqSection onOpenJoin={onOpenJoin} onOpenDonate={onOpenDonate} />
      </section>

    </div>
  );
};

export default FaqPage;
