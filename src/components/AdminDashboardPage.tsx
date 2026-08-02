import React, { useState } from 'react';
import {
  ArrowLeft,
  LayoutDashboard,
  Users,
  Trophy,
  BookOpen,
  Mail,
  Plus,
  CheckCircle2,
  Trash2,
  Edit,
  Save,
  Search,
  Sparkles,
  Shield,
  Download,
} from 'lucide-react';
import { FIXTURES_DATA, STANDINGS_DATA, NEWS_ARTICLES } from '../data/mockData';

interface AdminDashboardPageProps {
  onBackToHome: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'registrations' | 'fixtures' | 'stories' | 'messages'>('overview');
  const [fixturesList, setFixturesList] = useState(FIXTURES_DATA);
  const [editingScoreId, setEditingScoreId] = useState<string | null>(null);
  const [homeScoreInput, setHomeScoreInput] = useState<number>(0);
  const [awayScoreInput, setAwayScoreInput] = useState<number>(0);

  const sampleRegistrations = [
    { id: 'reg-1', name: 'Joseph Deng', age: 16, ageGroup: 'U17', guardian: 'Mary Achan', phone: '+254 712 345 678', zone: 'Kakuma 1', date: 'Aug 1, 2026' },
    { id: 'reg-2', name: 'Amina Mohamed', age: 15, ageGroup: 'Girls', guardian: 'Fatima Z.', phone: '+254 723 456 789', zone: 'Kalobeyei', date: 'Jul 28, 2026' },
    { id: 'reg-3', name: 'Samuel Lual', age: 14, ageGroup: 'U15', guardian: 'Peter L.', phone: '+254 734 567 890', zone: 'Kakuma 2', date: 'Jul 25, 2026' },
  ];

  const handleUpdateScore = (fixId: string) => {
    setFixturesList(
      fixturesList.map((f) => {
        if (f.id === fixId) {
          return {
            ...f,
            homeScore: homeScoreInput,
            awayScore: awayScoreInput,
            status: 'completed' as const,
          };
        }
        return f;
      })
    );
    setEditingScoreId(null);
  };

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-6 shadow-md group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Exit Dashboard</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1 rounded-full mb-3 text-xs font-black uppercase tracking-widest shadow-sm">
            <LayoutDashboard className="w-4 h-4 fill-[#123764]" />
            <span>ADMINISTRATOR CONTROL PANEL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase">
            KAKUMA ACADEMY MANAGEMENT
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Manage player registrations, update league match scores, post community stories, and review inquiries.
          </p>

          {/* Nav Tabs */}
          <div className="flex items-center gap-2 mt-8 pt-4 border-t border-white/20 overflow-x-auto scrollbar-none">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'registrations', label: 'Player Registrations' },
              { key: 'fixtures', label: 'Fixtures & Scores' },
              { key: 'stories', label: 'News Stories' },
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

      {/* DASHBOARD CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-2">
                <span className="text-xs font-extrabold text-gray-500 uppercase">Registered Players</span>
                <span className="text-3xl font-black font-serif text-[#123764] block">100+</span>
                <span className="text-[11px] text-emerald-600 font-bold">↑ Active Across 6 Squads</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-2">
                <span className="text-xs font-extrabold text-gray-500 uppercase">League Fixtures</span>
                <span className="text-3xl font-black font-serif text-[#123764] block">{fixturesList.length}</span>
                <span className="text-[11px] text-[#123764] font-bold">2 Matches Scheduled This Weekend</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-2">
                <span className="text-xs font-extrabold text-gray-500 uppercase">Published Stories</span>
                <span className="text-3xl font-black font-serif text-[#123764] block">{NEWS_ARTICLES.length}</span>
                <span className="text-[11px] text-amber-600 font-bold">Community & Match Recaps</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-2">
                <span className="text-xs font-extrabold text-gray-500 uppercase">Pending Inquiries</span>
                <span className="text-3xl font-black font-serif text-[#123764] block">4</span>
                <span className="text-[11px] text-purple-600 font-bold">Partnerships & Equipment</span>
              </div>
            </div>
          </div>
        )}

        {/* REGISTRATIONS TAB */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                Player Enrollment Submissions
              </h3>
              <button
                onClick={() => alert('Exporting registrations as CSV...')}
                className="bg-[#123764] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#FDBD55]" />
                <span>Export Registrations (CSV)</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#071D3B] text-white">
                  <tr>
                    <th className="p-4">PLAYER NAME</th>
                    <th className="p-4">AGE GROUP</th>
                    <th className="p-4">GUARDIAN</th>
                    <th className="p-4">PHONE</th>
                    <th className="p-4">LOCATION</th>
                    <th className="p-4">DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sampleRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-[#123764]">{reg.name}</td>
                      <td className="p-4">
                        <span className="bg-[#EDF3FA] text-[#123764] font-black px-2.5 py-0.5 rounded-full text-[11px]">
                          {reg.ageGroup}
                        </span>
                      </td>
                      <td className="p-4 text-gray-700">{reg.guardian}</td>
                      <td className="p-4 text-gray-700 font-mono">{reg.phone}</td>
                      <td className="p-4 text-gray-600">{reg.zone}</td>
                      <td className="p-4 text-gray-400">{reg.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FIXTURES & SCORES TAB */}
        {activeTab === 'fixtures' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
              Manage Fixtures & Enter Match Scores
            </h3>

            <div className="space-y-4">
              {fixturesList.map((fix) => (
                <div key={fix.id} className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black text-[#FDBD55] bg-[#123764] px-2.5 py-0.5 rounded-full uppercase">
                      {fix.division}
                    </span>
                    <h4 className="font-extrabold text-[#123764] text-base mt-1">
                      {fix.homeTeam} vs {fix.awayTeam}
                    </h4>
                    <p className="text-xs text-gray-500">{fix.date} • {fix.venue}</p>
                  </div>

                  {editingScoreId === fix.id ? (
                    <div className="flex items-center gap-2 bg-[#FFF7E8] p-3 rounded-2xl border border-[#FDBD55]">
                      <input
                        type="number"
                        className="w-12 p-1 text-center font-bold border rounded"
                        value={homeScoreInput}
                        onChange={(e) => setHomeScoreInput(parseInt(e.target.value) || 0)}
                      />
                      <span className="font-bold text-[#123764]">-</span>
                      <input
                        type="number"
                        className="w-12 p-1 text-center font-bold border rounded"
                        value={awayScoreInput}
                        onChange={(e) => setAwayScoreInput(parseInt(e.target.value) || 0)}
                      />
                      <button
                        onClick={() => handleUpdateScore(fix.id)}
                        className="bg-[#123764] text-white text-xs px-3 py-1.5 rounded-full font-bold ml-2"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="font-black text-lg text-[#123764]">
                        {fix.status === 'completed' ? `${fix.homeScore} - ${fix.awayScore}` : 'Pending'}
                      </span>
                      <button
                        onClick={() => {
                          setEditingScoreId(fix.id);
                          setHomeScoreInput(fix.homeScore || 0);
                          setAwayScoreInput(fix.awayScore || 0);
                        }}
                        className="bg-[#FDBD55] text-[#123764] text-xs font-black px-3.5 py-1.5 rounded-full hover:bg-[#e0a33c]"
                      >
                        Edit Score
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
};

export default AdminDashboardPage;
