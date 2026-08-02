import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Heart,
  GraduationCap,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  UserCheck,
  Package,
} from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'parents' | 'volunteers' | 'academics' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  keyPoints?: string[];
}

interface FaqSectionProps {
  onOpenJoin?: () => void;
  onOpenDonate?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenJoin, onOpenDonate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'parents',
      categoryLabel: 'For Parents & Guardians',
      question: 'How do I enroll my child in Kakuma Soccer Academy, and are there any fees?',
      answer:
        'Enrollment is 100% FREE for all youth residing in Kakuma and surrounding Turkana communities. Parents or guardians can register their child online through our website or visit our desk at Kakuma Central Pitch during weekend training sessions. We welcome boys and girls of all skill levels.',
      keyPoints: [
        'No registration or monthly membership fees',
        'Open to all youth aged 8 to 18 years',
        'Simple registration form signed by a parent/guardian',
      ],
    },
    {
      id: 'faq-2',
      category: 'parents',
      categoryLabel: 'For Parents & Guardians',
      question: 'What age divisions and teams are available for young players?',
      answer:
        'Kakuma Soccer Academy operates structured age-group divisions to ensure safe, age-appropriate competition and physical development.',
      keyPoints: [
        'U10 & U13 Junior Development Squads',
        'U15 & U17 Competitive Youth League Squads',
        'Kakuma Queens Girls Empowerment Squad (ages 10–18)',
      ],
    },
    {
      id: 'faq-3',
      category: 'academics',
      categoryLabel: 'Academics & Safety',
      question: 'How does the Academy ensure players stay focused on school and education?',
      answer:
        'Education is a non-negotiable core pillar of Kakuma Soccer Academy. Attendance at our daily Homework & Literacy Study Hub is mandatory prior to stepping onto the football pitch. Coaches and mentors track school attendance and termly report cards.',
      keyPoints: [
        'Mandatory 1-hour quiet study & homework sessions before practice',
        'Free learning materials, exercise books, and literacy assistance',
        'Academic excellence awards presented every season',
      ],
    },
    {
      id: 'faq-4',
      category: 'academics',
      categoryLabel: 'Academics & Safety',
      question: 'What child safeguarding and safety measures are in place?',
      answer:
        'The safety and dignity of every child is our top priority. We operate under a strict Child Protection & Safeguarding Policy. All coaches and volunteers undergo background checks and safety orientation. Additionally, female mentors lead the Kakuma Queens program to provide a safe, supportive space for girls.',
      keyPoints: [
        'Trained first-aid responders present at all matches and practice sessions',
        'Female coaches & chaperones dedicated to girls squads',
        'Zero tolerance for discrimination, bullying, or harassment',
      ],
    },
    {
      id: 'faq-5',
      category: 'volunteers',
      categoryLabel: 'For Volunteers & Supporters',
      question: 'How can I volunteer as a coach, mentor, or educational tutor?',
      answer:
        'We welcome enthusiastic local community members, teachers, and international partners to volunteer with us! Volunteers can assist with tactical coaching, refereeing, academic tutoring in English/Math, or running life-skills workshops for young women.',
      keyPoints: [
        'Flexible part-time or weekend volunteer schedules',
        'Mentorship and coaching guidance provided by senior academy staff',
        'Certificate of appreciation & volunteer reference upon request',
      ],
    },
    {
      id: 'faq-6',
      category: 'volunteers',
      categoryLabel: 'For Volunteers & Supporters',
      question: 'What football gear and physical equipment are most urgently needed?',
      answer:
        'Due to the dusty terrain and high player participation, equipment wears out quickly. Donated gear directly enables more youth to participate safely without playing barefoot.',
      keyPoints: [
        'Youth football boots (EU sizes 35–43)',
        'Shin guards, goalkeeper gloves, and durable match balls (Size 4 & 5)',
        'Dignity & hygiene kits (sanitary pads, soap, towels) for female athletes',
        'Aluminum goal nets and training bibs',
      ],
    },
    {
      id: 'faq-7',
      category: 'general',
      categoryLabel: 'General & Organization',
      question: 'How are monetary donations and sponsorships utilized?',
      answer:
        'Kakuma Soccer Academy is a registered Community-Based Organization (CBO). 100% of financial contributions directly fund youth pitch maintenance, tournament transport, referee stipends, educational books, and nutritious post-match snacks for young players.',
    },
    {
      id: 'faq-8',
      category: 'volunteers',
      categoryLabel: 'For Volunteers & Supporters',
      question: 'Can external sports clubs, schools, or NGOs partner with the Academy?',
      answer:
        'Yes! We actively collaborate with international football clubs, local CBOs, NGOs, and educational foundations. Partners can sponsor a team, fund a pitch improvement project, or organize equipment donation drives in their home cities.',
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF7E8] relative overflow-hidden select-none">
      
      {/* Decorative Pitch Line Background Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <circle cx="600" cy="400" r="300" stroke="#123764" strokeWidth="3" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="#123764" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#123764] text-[#FDBD55] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-[#FDBD55]/40 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#FDBD55]" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Everything parents, players, volunteers, and donors need to know about joining, supporting, and empowering youth at Kakuma Soccer Academy.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-white rounded-3xl p-4 sm:p-6 shadow-md border-2 border-[#123764]/10 mb-8 space-y-4"
        >
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
              {[
                { id: 'all', label: 'All Questions', icon: HelpCircle },
                { id: 'parents', label: 'For Parents', icon: UserCheck },
                { id: 'volunteers', label: 'For Volunteers', icon: Heart },
                { id: 'academics', label: 'Academics & Safety', icon: ShieldCheck },
              ].map((cat) => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#123764] text-white shadow-md border-2 border-[#FDBD55]'
                        : 'bg-[#EDF3FA] text-[#123764] hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 text-xs rounded-full border border-gray-300 focus:outline-none focus:border-[#123764] bg-[#EDF3FA]/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

        </motion.div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-gray-300 my-6"
          >
            <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-[#123764]">No matching questions found</h4>
            <p className="text-xs text-gray-500 mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#123764] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#0c2545] cursor-pointer"
            >
              Reset Search
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className={`bg-white rounded-2xl border-2 transition-all shadow-xs overflow-hidden ${
                    isExpanded ? 'border-[#FDBD55] ring-2 ring-[#FDBD55]/30' : 'border-[#123764]/10 hover:border-[#123764]/30'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#123764] hover:bg-[#EDF3FA]/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FDBD55] shrink-0" />
                      <span className="leading-snug">{faq.question}</span>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-8 h-8 rounded-full bg-[#EDF3FA] flex items-center justify-center shrink-0 text-[#123764]"
                    >
                      <ChevronDown className="w-5 h-5 text-[#123764]" />
                    </motion.div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-gray-700 border-t border-gray-100 bg-white">
                          <p className="leading-relaxed text-gray-700">{faq.answer}</p>

                          {/* Key Points Bullet List if available */}
                          {faq.keyPoints && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: 0.1 }}
                              className="mt-3 pt-3 border-t border-gray-100 bg-[#FFF7E8]/60 p-3.5 rounded-xl border border-[#FDBD55]/30"
                            >
                              <span className="font-extrabold text-[11px] text-[#123764] uppercase tracking-wider block mb-2">
                                Key Details:
                              </span>
                              <ul className="space-y-1.5">
                                {faq.keyPoints.map((point, index) => (
                                  <li key={index} className="flex items-start gap-2 text-xs text-gray-800">
                                    <span className="text-[#FDBD55] font-black shrink-0">✓</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}

                          <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                            <span className="bg-[#123764]/10 text-[#123764] px-2.5 py-0.5 rounded-full font-extrabold">
                              {faq.categoryLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 bg-[#0c2545] border-2 border-[#FDBD55] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-[#FDBD55] text-[#123764] flex items-center justify-center shrink-0 shadow-md"
            >
              <MessageCircle className="w-6 h-6 stroke-[2.5]" />
            </motion.div>
            <div>
              <h4 className="text-lg font-black font-serif uppercase text-white">
                Have a Specific Question?
              </h4>
              <p className="text-xs text-white/80 mt-1 max-w-md">
                Our academy team in Kakuma is happy to assist parents with registration or help volunteers get involved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
            {onOpenJoin && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenJoin}
                className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Register Youth Player</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}

            {onOpenDonate && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDonate}
                className="bg-[#123764] hover:bg-[#071D3B] text-white font-bold text-xs px-5 py-3 rounded-full border border-white/30 hover:border-[#FDBD55] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#FDBD55]" />
                <span>Support Equipment</span>
              </motion.button>
            )}
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default FaqSection;
