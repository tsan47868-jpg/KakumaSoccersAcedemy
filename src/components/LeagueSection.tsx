import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FIXTURES_DATA, STANDINGS_DATA, TEAMS_DATA } from '../data/mockData';
import { Trophy, Calendar, MapPin, Award, CheckCircle2, Shield } from 'lucide-react';

export const LeagueSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'standings' | 'teams'>('fixtures');

  return (
    <section id="league" className="py-16 lg:py-24 bg-white text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
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
            className="inline-flex items-center gap-2 bg-[#EDF3FA] border border-[#123764] px-4 py-1.5 rounded-full mb-3 text-xs font-black text-[#123764] uppercase tracking-widest shadow-xs"
          >
            <Trophy className="w-4 h-4 text-[#FDBD55]" />
            <span>Kakuma Youth League Center</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight">
            MATCHES & LEAGUE STANDINGS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-base sm:text-lg text-[#111827]/80">
            Follow Kakuma Football Academy teams across weekend tournament fixtures, youth league tables, and match results.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-[#EDF3FA] p-1.5 rounded-full border border-[#123764]/20 shadow-inner">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('fixtures')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all relative ${
                activeTab === 'fixtures'
                  ? 'bg-[#123764] text-white shadow-md'
                  : 'text-[#123764] hover:text-[#123764]/80'
              }`}
            >
              Fixtures & Results
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('standings')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all relative ${
                activeTab === 'standings'
                  ? 'bg-[#123764] text-white shadow-md'
                  : 'text-[#123764] hover:text-[#123764]/80'
              }`}
            >
              U17 League Table
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('teams')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all relative ${
                activeTab === 'teams'
                  ? 'bg-[#123764] text-white shadow-md'
                  : 'text-[#123764] hover:text-[#123764]/80'
              }`}
            >
              Academy Squads
            </motion.button>
          </div>
        </motion.div>

        {/* Tab Content Wrapper */}
        <AnimatePresence mode="wait">
          {/* Tab Content 1: Fixtures & Results */}
          {activeTab === 'fixtures' && (
            <motion.div
              key="fixtures"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {FIXTURES_DATA.map((fix, idx) => (
                <motion.div
                  key={fix.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-[#FFF7E8] rounded-3xl p-6 border-2 border-[#FDBD55] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Division & Status Badge */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FDBD55]/50">
                      <span className="text-xs font-black text-[#123764] bg-[#FDBD55] px-3 py-1 rounded-full uppercase tracking-wider">
                        {fix.division}
                      </span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          fix.status === 'completed'
                            ? 'bg-[#123764] text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {fix.status === 'completed' ? 'Final Score' : 'Upcoming Match'}
                      </span>
                    </div>

                    {/* Teams and Score Lockup */}
                    <div className="grid grid-cols-7 items-center gap-2 text-center my-4">
                      {/* Home Team */}
                      <div className="col-span-3 flex flex-col items-center">
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          className="w-12 h-12 rounded-full bg-[#123764] text-[#FDBD55] font-black text-sm flex items-center justify-center mb-2 border-2 border-[#FDBD55] shadow"
                        >
                          KFA
                        </motion.div>
                        <span className="text-xs sm:text-sm font-bold text-[#123764] leading-tight">
                          {fix.homeTeam}
                        </span>
                      </div>

                      {/* Score or VS */}
                      <div className="col-span-1 flex flex-col items-center justify-center">
                        {fix.status === 'completed' ? (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#123764] text-[#FDBD55] font-black text-lg sm:text-xl px-3 py-1 rounded-xl font-serif shadow"
                          >
                            {fix.homeScore} - {fix.awayScore}
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-[#FDBD55] text-[#123764] font-black text-xs flex items-center justify-center border border-[#123764] shadow-sm"
                          >
                            VS
                          </motion.div>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="col-span-3 flex flex-col items-center">
                        <motion.div
                          whileHover={{ rotate: -5, scale: 1.05 }}
                          className="w-12 h-12 rounded-full bg-gray-200 text-[#123764] font-black text-sm flex items-center justify-center mb-2 border-2 border-[#123764] shadow"
                        >
                          OPP
                        </motion.div>
                        <span className="text-xs sm:text-sm font-bold text-[#111827] leading-tight">
                          {fix.awayTeam}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Match Details Footer */}
                  <div className="pt-3 border-t border-[#FDBD55]/40 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#123764]/80">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#123764]" />
                      <span>{fix.date} • {fix.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#123764]" />
                      <span>{fix.venue}</span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab Content 2: League Standings */}
          {activeTab === 'standings' && (
            <motion.div
              key="standings"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF7E8] rounded-3xl p-6 sm:p-8 border-2 border-[#FDBD55] shadow-md overflow-x-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#123764]">Kakuma Youth League • U17 Division</h3>
                  <p className="text-xs text-[#111827]/70">Official Turkana West Grassroots Tournament</p>
                </div>
                <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-3 py-1 rounded-full uppercase shadow-xs">
                  2026 Season
                </span>
              </div>

              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#123764] text-white text-xs uppercase tracking-wider border-b-2 border-[#FDBD55]">
                    <th className="py-3 px-4 rounded-tl-xl">Pos</th>
                    <th className="py-3 px-4">Club Team</th>
                    <th className="py-3 px-3 text-center">P</th>
                    <th className="py-3 px-3 text-center">W</th>
                    <th className="py-3 px-3 text-center">D</th>
                    <th className="py-3 px-3 text-center">L</th>
                    <th className="py-3 px-3 text-center">GD</th>
                    <th className="py-3 px-4 text-center rounded-tr-xl">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FDBD55]/30">
                  {STANDINGS_DATA.map((row, rIdx) => (
                    <motion.tr
                      key={row.position}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: rIdx * 0.05 }}
                      className={`transition-colors ${
                        row.team.includes('Kakuma Football Academy')
                          ? 'bg-[#FDBD55]/30 font-bold text-[#123764]'
                          : 'hover:bg-white/50 text-[#111827]'
                      }`}
                    >
                      <td className="py-3.5 px-4 font-black">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                          row.position === 1 ? 'bg-[#FDBD55] text-[#123764] font-black shadow-xs' : 'bg-gray-200'
                        }`}>
                          {row.position}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                        {row.team.includes('Kakuma Football Academy') && (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-2 h-2 rounded-full bg-[#123764]"
                          />
                        )}
                        {row.team}
                      </td>
                      <td className="py-3.5 px-3 text-center">{row.played}</td>
                      <td className="py-3.5 px-3 text-center">{row.won}</td>
                      <td className="py-3.5 px-3 text-center">{row.drawn}</td>
                      <td className="py-3.5 px-3 text-center">{row.lost}</td>
                      <td className="py-3.5 px-3 text-center font-mono">{row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                      <td className="py-3.5 px-4 text-center font-black text-sm text-[#123764]">
                        {row.points}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Tab Content 3: Academy Squads */}
          {activeTab === 'teams' && (
            <motion.div
              key="teams"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {TEAMS_DATA.map((team, tIdx) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: tIdx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl p-6 border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-[#123764] text-[#FDBD55] font-black text-lg flex items-center justify-center mb-4 border-4 border-[#FDBD55] shadow"
                    >
                      {team.badge}
                    </motion.div>
                    <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-2.5 py-1 rounded-full uppercase">
                      {team.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#123764] mt-2">
                      {team.name}
                    </h3>
                    <p className="text-xs text-[#111827]/70 mt-1">
                      Head Coach: <strong className="text-[#123764]">{team.coach}</strong>
                    </p>
                    <p className="text-xs text-[#111827]/70 mt-0.5">
                      Registered Players: <strong className="text-[#123764]">{team.playersCount} Athletes</strong>
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                      <span className="text-[10px] font-black text-[#123764] uppercase tracking-wider">
                        Recent Honors:
                      </span>
                      {team.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-1.5 text-xs text-[#111827]">
                          <Award className="w-3.5 h-3.5 text-[#FDBD55] shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default LeagueSection;

