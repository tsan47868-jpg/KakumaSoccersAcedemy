import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Users,
  Trophy,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Award,
  ChevronRight,
  Search,
} from 'lucide-react';
import { TEAMS_DATA } from '../data/mockData';
import { Team } from '../types';

interface TeamsPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const TeamsPage: React.FC<TeamsPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTeamRoster, setSelectedTeamRoster] = useState<Team | null>(null);

  const categories = ['All', 'U10', 'U12', 'U14', 'U17', 'Girls', 'Community'];

  const allTeams: (Team & { schedule: string; focus: string; rosterSample: any[] })[] = [
    {
      id: 't-u10',
      name: 'Kakuma Cubs U10',
      category: 'U10 Boys & Girls',
      coach: 'Coach Mary Achan',
      playersCount: 22,
      badge: 'U10',
      achievements: ['Grassroots Fun Cup Champions', 'Fair Play Medal 2025'],
      schedule: 'Mon & Wed (3:30 PM - 5:00 PM)',
      focus: 'Foundational ball control, fun agility games, and sportsmanship.',
      rosterSample: [
        { name: 'Peter A.', age: 9, position: 'Forward', jersey: 7 },
        { name: 'Daniel K.', age: 9, position: 'Midfielder', jersey: 10 },
        { name: 'Gabriel L.', age: 8, position: 'Goalkeeper', jersey: 1 },
        { name: 'John D.', age: 9, position: 'Defender', jersey: 4 },
      ],
    },
    {
      id: 't-u12',
      name: 'Kakuma Stars U12',
      category: 'U12 Boys',
      coach: 'Coach Peter Lokai',
      playersCount: 26,
      badge: 'U12',
      achievements: ['Kakuma Youth Cup Champions 2024', 'Best Defense Award'],
      schedule: 'Mon, Wed, Fri (4:00 PM - 5:30 PM)',
      focus: 'Short passing, spatial positioning, communication, and decision making.',
      rosterSample: [
        { name: 'Joseph M.', age: 11, position: 'Midfielder', jersey: 8 },
        { name: 'Samuel L.', age: 12, position: 'Striker', jersey: 9 },
        { name: 'David E.', age: 11, position: 'Defender', jersey: 5 },
        { name: 'Emmanuel T.', age: 12, position: 'Goalkeeper', jersey: 1 },
      ],
    },
    {
      id: 't-u14',
      name: 'Kakuma Eagles U14',
      category: 'U14 Boys',
      coach: 'Coach Hassan Ali',
      playersCount: 28,
      badge: 'U14',
      achievements: ['Turkana West League Runners-Up', '100% Academic Attendance'],
      schedule: 'Tue, Thu, Sat (4:00 PM - 5:30 PM)',
      focus: 'Tactical positioning, endurance pressing, and peer leadership.',
      rosterSample: [
        { name: 'Michael O.', age: 13, position: 'Winger', jersey: 11 },
        { name: 'Francis K.', age: 14, position: 'Central Midfielder', jersey: 6 },
        { name: 'Hassan B.', age: 13, position: 'Center Back', jersey: 3 },
        { name: 'Victor R.', age: 14, position: 'Goalkeeper', jersey: 12 },
      ],
    },
    {
      id: 't-u17',
      name: 'Kakuma Heroes U17',
      category: 'U17 Boys',
      coach: 'Coach Emmanuel Ekai',
      playersCount: 30,
      badge: 'U17',
      achievements: ['Camp Championship Winners 2024', '7 Selected for Regional Trials'],
      schedule: 'Tue, Thu, Sat (4:00 PM - 6:00 PM)',
      focus: 'High-level competitive tactics, set-piece execution, and university pathways.',
      rosterSample: [
        { name: 'Joseph Deng', age: 16, position: 'Playmaker & Captain', jersey: 10 },
        { name: 'Lual S.', age: 17, position: 'Center Forward', jersey: 9 },
        { name: 'Kuel P.', age: 16, position: 'Defensive Midfield', jersey: 4 },
        { name: 'Mekonnen T.', age: 17, position: 'Goalkeeper', jersey: 1 },
      ],
    },
    {
      id: 't-queens',
      name: 'Kakuma Queens Senior & Youth',
      category: 'Girls Football',
      coach: 'Coach Grace Nyabol',
      playersCount: 25,
      badge: 'Girls',
      achievements: ['Regional Women Football Gala Gold', 'Community Inspiration Award'],
      schedule: 'Wed, Sat, Sun (3:30 PM - 5:30 PM)',
      focus: 'Female empowerment, high pressing, athletic conditioning, and peer mentorship.',
      rosterSample: [
        { name: 'Amina Mohamed', age: 15, position: 'Forward & Leader', jersey: 9 },
        { name: 'Grace N.', age: 16, position: 'Midfielder', jersey: 8 },
        { name: 'Sarah K.', age: 14, position: 'Defender', jersey: 2 },
        { name: 'Fatima Z.', age: 15, position: 'Goalkeeper', jersey: 1 },
      ],
    },
    {
      id: 't-community',
      name: 'Kakuma Unity Senior Squad',
      category: 'Community Team',
      coach: 'Coach Hassan Ali',
      playersCount: 32,
      badge: 'Senior',
      achievements: ['Turkana Inter-County Tournament Finalists', 'Peace Cup Trophy'],
      schedule: 'Sat & Sun (4:30 PM - 6:30 PM)',
      focus: 'Community role modeling, inter-ethnic peace building, and adult mentorship.',
      rosterSample: [
        { name: 'Mark L.', age: 20, position: 'Striker', jersey: 9 },
        { name: 'Erupe E.', age: 21, position: 'Defender', jersey: 5 },
        { name: 'James O.', age: 19, position: 'Wing Back', jersey: 2 },
      ],
    },
  ];

  const filteredTeams = allTeams.filter((t) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'U10' && t.category.includes('U10')) return true;
    if (activeCategory === 'U12' && t.category.includes('U12')) return true;
    if (activeCategory === 'U14' && t.category.includes('U14')) return true;
    if (activeCategory === 'U17' && t.category.includes('U17')) return true;
    if (activeCategory === 'Girls' && t.category.includes('Girls')) return true;
    if (activeCategory === 'Community' && t.category.includes('Community')) return true;
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
            <Users className="w-4 h-4 fill-[#123764]" />
            <span>ACADEMY DIVISIONS & SQUADS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            A PLACE FOR EVERY YOUNG PLAYER
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            From grassroots U10 players discovering teamwork to competitive U17 athletes and our empowered Kakuma Queens squad.
          </p>

          {/* Division Tabs */}
          <div className="flex items-center gap-2.5 flex-wrap mt-10 pt-6 border-t border-white/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
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

      {/* SQUAD CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team, idx) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md hover:border-[#FDBD55] transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-3.5 py-1 rounded-full uppercase border border-[#FDBD55]">
                    {team.badge} Division
                  </span>
                  <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#123764]" />
                    {team.playersCount} Athletes
                  </span>
                </div>

                <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                  {team.name}
                </h3>

                <p className="text-xs text-gray-600 font-medium">
                  <span className="font-bold text-[#123764]">Lead Coach:</span> {team.coach}
                </p>

                <div className="bg-[#FFF7E8] p-3.5 rounded-2xl border border-[#FDBD55]/40 text-xs">
                  <span className="font-extrabold text-[#123764] block mb-1">Training Focus:</span>
                  <p className="text-gray-700 text-[11px] leading-relaxed">{team.focus}</p>
                </div>

                <div className="bg-[#EDF3FA] p-3 rounded-2xl text-xs flex items-center gap-2 text-[#123764] font-semibold">
                  <Calendar className="w-4 h-4 text-[#FDBD55] shrink-0" />
                  <span>{team.schedule}</span>
                </div>

                {team.achievements.length > 0 && (
                  <div>
                    <span className="text-[10px] font-black text-[#123764] uppercase tracking-wider block mb-1">
                      Recent Accolades:
                    </span>
                    <ul className="space-y-1">
                      {team.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                          <Trophy className="w-3 h-3 text-amber-500 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setSelectedTeamRoster(team)}
                  className="w-1/2 bg-[#123764] hover:bg-[#0c2545] text-white text-xs font-bold py-2.5 rounded-full transition-colors"
                >
                  View Roster
                </button>
                <button
                  onClick={onOpenJoin}
                  className="w-1/2 bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs py-2.5 rounded-full shadow transition-all flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Register</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* PRIVACY & SAFEGUARDING NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <h4 className="font-bold text-xs text-[#123764] uppercase">Minor Protection & Child Privacy</h4>
          <p className="text-[11px] text-gray-500 max-w-xl mx-auto mt-1">
            In accordance with child protection policies, full private contact details, school records, and dates of birth of minor athletes are protected and not displayed publicly.
          </p>
        </div>
      </section>

      {/* SQUAD ROSTER MODAL */}
      {selectedTeamRoster && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative border-4 border-[#FDBD55] shadow-2xl">
            <button
              onClick={() => setSelectedTeamRoster(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              ✕
            </button>

            <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase">
              {selectedTeamRoster.category}
            </span>

            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase mt-2">
              {selectedTeamRoster.name} - Sample Roster
            </h3>

            <p className="text-xs text-gray-600 mt-1">
              Led by <span className="font-bold text-[#123764]">{selectedTeamRoster.coach}</span> ({selectedTeamRoster.playersCount} Total Registered Athletes)
            </p>

            <div className="mt-4 border border-gray-200 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#123764] text-white">
                  <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">Athlete</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {selectedTeamRoster.rosterSample.map((player, pIdx) => (
                    <tr key={pIdx} className="hover:bg-gray-50">
                      <td className="p-3 font-black text-[#123764]">{player.jersey}</td>
                      <td className="p-3 font-bold text-gray-800">{player.name}</td>
                      <td className="p-3 text-gray-600">{player.age} yrs</td>
                      <td className="p-3 text-emerald-700 font-semibold">{player.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={onOpenDonate}
                className="bg-[#FDBD55] text-[#123764] font-black text-xs px-5 py-2.5 rounded-full hover:bg-[#e0a33c]"
              >
                Sponsor This Team
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default TeamsPage;
