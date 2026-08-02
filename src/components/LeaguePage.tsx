import React, { useState } from 'react';
import {
  ArrowLeft,
  Trophy,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  FileText,
  Award,
  Shield,
  Activity,
  X,
} from 'lucide-react';
import { FIXTURES_DATA, STANDINGS_DATA } from '../data/mockData';
import { Fixture, LeagueStanding } from '../types';

interface LeaguePageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const LeaguePage: React.FC<LeaguePageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'results' | 'standings' | 'scorers' | 'fairplay'>('fixtures');
  const [selectedMatch, setSelectedMatch] = useState<Fixture | null>(null);

  const topScorers = [
    { rank: 1, name: 'Samuel Lual', team: 'Kakuma Heroes U17', goals: 14, matches: 12 },
    { rank: 2, name: 'Amina Mohamed', team: 'Kakuma Queens', goals: 12, matches: 10 },
    { rank: 3, name: 'Joseph Deng', team: 'Kakuma Heroes U17', goals: 8, matches: 12 },
    { rank: 4, name: 'Francis K.', team: 'Kakuma Eagles U15', goals: 7, matches: 11 },
    { rank: 5, name: 'Mark L.', team: 'Kakuma Town Strikers', goals: 6, matches: 12 },
  ];

  const fairPlayTable = [
    { rank: 1, team: 'Kakuma Stars U13', yellowCards: 1, redCards: 0, points: 98 },
    { rank: 2, team: 'Kakuma Queens', yellowCards: 2, redCards: 0, points: 95 },
    { rank: 3, team: 'Kakuma Heroes U17', yellowCards: 4, redCards: 0, points: 91 },
    { rank: 4, team: 'Kalobeyei Warriors', yellowCards: 6, redCards: 1, points: 84 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <Trophy className="w-4 h-4 fill-[#123764]" />
            <span>COMPETITION WITH A GREATER PURPOSE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            KAKUMA YOUTH LEAGUE & MATCH CENTER
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            The Kakuma Soccer Academy League is a platform for hope, unity, discipline, talent development and community growth across Kakuma Refugee Camp.
          </p>

          {/* League Nav Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 mt-10 pt-6 border-t border-white/20 overflow-x-auto scrollbar-none">
            {[
              { key: 'fixtures', label: 'Upcoming Fixtures' },
              { key: 'results', label: 'Match Results' },
              { key: 'standings', label: 'League Table' },
              { key: 'scorers', label: 'Top Scorers' },
              { key: 'fairplay', label: 'Fair Play Table' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-[#FDBD55] text-[#123764] shadow-md border-2 border-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MAIN LEAGUE VIEW CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

        {/* UPCOMING FIXTURES */}
        {activeTab === 'fixtures' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#FDBD55]" />
              <span>Upcoming Scheduled Matches</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIXTURES_DATA.filter((f) => f.status === 'upcoming').map((fix) => (
                <div
                  key={fix.id}
                  className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-md hover:border-[#FDBD55] transition-all space-y-4"
                >
                  <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-3">
                    <span className="bg-[#123764] text-[#FDBD55] font-black px-3 py-1 rounded-full uppercase">
                      {fix.division}
                    </span>
                    <span className="text-gray-500 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#123764]" />
                      {fix.date} @ {fix.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-center gap-4 py-2">
                    <div className="w-5/12">
                      <h4 className="font-extrabold text-[#123764] text-base">{fix.homeTeam}</h4>
                    </div>

                    <div className="w-2/12 shrink-0 bg-[#FFF7E8] text-[#123764] font-black text-xs px-3 py-2 rounded-xl border border-[#FDBD55]">
                      VS
                    </div>

                    <div className="w-5/12">
                      <h4 className="font-extrabold text-[#123764] text-base">{fix.awayTeam}</h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {fix.venue}
                    </span>
                    <button
                      onClick={() => setSelectedMatch(fix)}
                      className="text-[#123764] font-black hover:text-[#FDBD55]"
                    >
                      Match Preview →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MATCH RESULTS */}
        {activeTab === 'results' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span>Completed Match Results</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIXTURES_DATA.filter((f) => f.status === 'completed').map((fix) => (
                <div
                  key={fix.id}
                  className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-md hover:border-[#FDBD55] transition-all space-y-4"
                >
                  <div className="flex items-center justify-between text-xs border-b border-gray-100 pb-3">
                    <span className="bg-emerald-700 text-white font-black px-3 py-1 rounded-full uppercase">
                      {fix.division} (Final)
                    </span>
                    <span className="text-gray-500 font-bold">{fix.date}</span>
                  </div>

                  <div className="flex items-center justify-between text-center gap-4 py-2">
                    <div className="w-5/12">
                      <h4 className="font-extrabold text-[#123764] text-base">{fix.homeTeam}</h4>
                    </div>

                    <div className="w-2/12 shrink-0 bg-[#071D3B] text-[#FDBD55] font-black text-lg px-4 py-2 rounded-xl border border-[#FDBD55]">
                      {fix.homeScore} - {fix.awayScore}
                    </div>

                    <div className="w-5/12">
                      <h4 className="font-extrabold text-[#123764] text-base">{fix.awayTeam}</h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span>{fix.venue}</span>
                    <button
                      onClick={() => setSelectedMatch(fix)}
                      className="text-[#123764] font-black hover:text-[#FDBD55]"
                    >
                      Match Report →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TABLE */}
        {activeTab === 'standings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-500" />
                <span>U17 Championship Standings</span>
              </h3>
              <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">
                Season 2026 Standings
              </span>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#071D3B] text-white">
                    <tr>
                      <th className="p-4">POS</th>
                      <th className="p-4">CLUB / SQUAD</th>
                      <th className="p-4 text-center">P</th>
                      <th className="p-4 text-center">W</th>
                      <th className="p-4 text-center">D</th>
                      <th className="p-4 text-center">L</th>
                      <th className="p-4 text-center">GD</th>
                      <th className="p-4 text-center font-black text-[#FDBD55]">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {STANDINGS_DATA.map((row) => (
                      <tr key={row.position} className={row.position === 1 ? 'bg-[#FFF7E8]' : 'hover:bg-gray-50'}>
                        <td className="p-4 font-black text-[#123764]">{row.position}</td>
                        <td className="p-4 font-bold text-gray-900">{row.team}</td>
                        <td className="p-4 text-center">{row.played}</td>
                        <td className="p-4 text-center text-emerald-600 font-bold">{row.won}</td>
                        <td className="p-4 text-center">{row.drawn}</td>
                        <td className="p-4 text-center text-rose-600">{row.lost}</td>
                        <td className="p-4 text-center font-bold">{row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                        <td className="p-4 text-center font-black text-[#123764] text-base">{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TOP SCORERS */}
        {activeTab === 'scorers' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase flex items-center gap-2">
              <Award className="w-6 h-6 text-[#FDBD55]" />
              <span>Golden Boot Top Scorers</span>
            </h3>

            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#071D3B] text-white">
                    <tr>
                      <th className="p-4">RANK</th>
                      <th className="p-4">PLAYER NAME</th>
                      <th className="p-4">TEAM</th>
                      <th className="p-4 text-center">MATCHES</th>
                      <th className="p-4 text-center font-black text-[#FDBD55]">GOALS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {topScorers.map((scorer) => (
                      <tr key={scorer.rank} className="hover:bg-gray-50">
                        <td className="p-4 font-black text-[#123764]">{scorer.rank}</td>
                        <td className="p-4 font-bold text-gray-900">{scorer.name}</td>
                        <td className="p-4 text-gray-600">{scorer.team}</td>
                        <td className="p-4 text-center">{scorer.matches}</td>
                        <td className="p-4 text-center font-black text-emerald-700 text-base">{scorer.goals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* FAIR PLAY TABLE */}
        {activeTab === 'fairplay' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase flex items-center gap-2">
              <Shield className="w-6 h-6 text-emerald-600" />
              <span>Community Fair Play Index</span>
            </h3>

            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#071D3B] text-white">
                    <tr>
                      <th className="p-4">RANK</th>
                      <th className="p-4">SQUAD NAME</th>
                      <th className="p-4 text-center">YELLOW CARDS</th>
                      <th className="p-4 text-center">RED CARDS</th>
                      <th className="p-4 text-center font-black text-[#FDBD55]">FAIR PLAY SCORE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {fairPlayTable.map((fp) => (
                      <tr key={fp.rank} className="hover:bg-gray-50">
                        <td className="p-4 font-black text-[#123764]">{fp.rank}</td>
                        <td className="p-4 font-bold text-gray-900">{fp.team}</td>
                        <td className="p-4 text-center text-amber-600 font-bold">{fp.yellowCards}</td>
                        <td className="p-4 text-center text-rose-600 font-bold">{fp.redCards}</td>
                        <td className="p-4 text-center font-black text-emerald-700 text-base">{fp.points} / 100</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* MATCH MODAL / REPORT */}
      {selectedMatch && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border-4 border-[#FDBD55] shadow-2xl">
            <button
              onClick={() => setSelectedMatch(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase">
              {selectedMatch.division}
            </span>

            <h3 className="text-xl font-black font-serif text-[#123764] uppercase mt-2">
              Match Details & Summary
            </h3>

            <div className="my-4 bg-[#071D3B] text-white p-4 rounded-2xl text-center border border-[#FDBD55]">
              <div className="flex items-center justify-between font-extrabold text-base">
                <span>{selectedMatch.homeTeam}</span>
                <span className="text-[#FDBD55] text-lg font-black">
                  {selectedMatch.status === 'completed' ? `${selectedMatch.homeScore} - ${selectedMatch.awayScore}` : 'VS'}
                </span>
                <span>{selectedMatch.awayTeam}</span>
              </div>
              <p className="text-xs text-white/70 mt-2">{selectedMatch.date} • {selectedMatch.venue}</p>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              This fixture promotes youth sportsmanship, peer leadership, and healthy physical activity in Kakuma Refugee Camp. Both squads demonstrated high respect and discipline.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedMatch(null)}
                className="bg-[#123764] text-white text-xs font-bold px-5 py-2.5 rounded-full"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LeaguePage;
