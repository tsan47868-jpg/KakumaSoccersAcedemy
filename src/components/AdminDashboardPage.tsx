import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { subscribeToSubmissions } from '../lib/submissions';
import { signInAdmin, signOutAdmin, onAdminAuthStateChanged } from '../lib/admin';
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
  LogOut,
} from 'lucide-react';
import { FIXTURES_DATA, STANDINGS_DATA, NEWS_ARTICLES } from '../data/mockData';

interface AdminDashboardPageProps {
  onBackToHome: () => void;
}

type AdminTab = 'overview' | 'registrations' | 'fixtures' | 'stories' | 'messages' | 'donations';

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [fixturesList, setFixturesList] = useState(FIXTURES_DATA);
  const [editingScoreId, setEditingScoreId] = useState<string | null>(null);
  const [homeScoreInput, setHomeScoreInput] = useState<number>(0);
  const [awayScoreInput, setAwayScoreInput] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [storiesList, setStoriesList] = useState<any[]>(NEWS_ARTICLES);
  const [newStory, setNewStory] = useState({ title: '', summary: '', category: 'Community' });
  const [searchTerm, setSearchTerm] = useState('');
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);
  const [newFixture, setNewFixture] = useState({
    date: '',
    time: '',
    homeTeam: '',
    awayTeam: '',
    venue: '',
    division: 'Academy League',
  });

const sampleRegistrations: Array<{ id: string; name: string; age: number | string; ageGroup: string; guardian: string; phone: string; zone: string; date: string; email?: string }> = [
    { id: 'reg-1', name: 'Joseph Deng', age: 16, ageGroup: 'U17', guardian: 'Mary Achan', phone: '+254 712 345 678', zone: 'Kakuma 1', date: 'Aug 1, 2026' },
    { id: 'reg-2', name: 'Amina Mohamed', age: 15, ageGroup: 'Girls', guardian: 'Fatima Z.', phone: '+254 723 456 789', zone: 'Kalobeyei', date: 'Jul 28, 2026' },
    { id: 'reg-3', name: 'Samuel Lual', age: 14, ageGroup: 'U15', guardian: 'Peter L.', phone: '+254 734 567 890', zone: 'Kakuma 2', date: 'Jul 25, 2026' },
  ];

  useEffect(() => {
    const unsubscribeAuth = onAdminAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    if (typeof window !== 'undefined') {
      const storedFixtures = window.localStorage.getItem('kakuma-fixtures');
      if (storedFixtures) {
        try {
          setFixturesList(JSON.parse(storedFixtures));
        } catch {
          setFixturesList(FIXTURES_DATA);
        }
      }
    }

    return () => {
      unsubscribeAuth();
    };
  }, []);

  // Subscribe to submissions only once authenticated so the Firestore rules
  // (which require a signed-in user to read) are satisfied.
  useEffect(() => {
    if (!isAuthenticated) {
      setSubmissions([]);
      return;
    }

    const unsubscribeSubmissions = subscribeToSubmissions((nextSubmissions) => {
      setSubmissions(nextSubmissions || []);
    });

    return () => {
      unsubscribeSubmissions();
    };
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail || !adminPassword) return;
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const result = await signInAdmin(adminEmail, adminPassword);

      if (result.ok) {
        setAdminEmail('');
        setAdminPassword('');
      } else {
        setLoginError(result.error || 'Incorrect admin email or password.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const persistFixtures = (nextFixtures: typeof fixturesList) => {
    setFixturesList(nextFixtures);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('kakuma-fixtures', JSON.stringify(nextFixtures));
    }
  };

  const handleUpdateScore = (fixId: string) => {
    const updatedFixtures = fixturesList.map((f) => {
      if (f.id === fixId) {
        return {
          ...f,
          homeScore: homeScoreInput,
          awayScore: awayScoreInput,
          status: 'completed' as const,
        };
      }
      return f;
    });

    persistFixtures(updatedFixtures);
    setEditingScoreId(null);
  };

  const handleAddFixture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFixture.date || !newFixture.homeTeam || !newFixture.awayTeam || !newFixture.venue) return;

    const fixture = {
      id: `fixture-${Date.now()}`,
      date: newFixture.date,
      time: newFixture.time || 'TBD',
      homeTeam: newFixture.homeTeam.trim(),
      awayTeam: newFixture.awayTeam.trim(),
      venue: newFixture.venue.trim(),
      division: newFixture.division,
      status: 'upcoming' as const,
    };

    const nextFixtures = [fixture, ...fixturesList];
    persistFixtures(nextFixtures);
    setNewFixture({ date: '', time: '', homeTeam: '', awayTeam: '', venue: '', division: 'Academy League' });
  };

  const joinSubmissions = submissions.filter((submission) => submission.type === 'join');
  const contactSubmissions = submissions.filter((submission) => submission.type === 'contact');
  const subscribeSubmissions = submissions.filter((submission) => submission.type === 'subscribe');
  const donationSubmissions = submissions.filter((submission) => submission.type === 'donation');
  const registrationRows = joinSubmissions.length > 0
    ? joinSubmissions.map((submission) => ({
        id: submission.id,
        name: submission.fullName,
        age: '—',
        ageGroup: submission.category || 'Open',
        guardian: submission.parentName || 'N/A',
        phone: submission.phone || 'N/A',
        zone: submission.location || 'N/A',
        date: submission.createdAt || 'Pending',
        email: submission.email || undefined,
      }))
    : sampleRegistrations;

  const handleAddStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.title.trim() || !newStory.summary.trim()) return;

    const story = {
      id: `story-${Date.now()}`,
      title: newStory.title.trim(),
      summary: newStory.summary.trim(),
      category: newStory.category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    setStoriesList([story, ...storiesList]);
    setNewStory({ title: '', summary: '', category: 'Community' });
  };

  const handleRemoveStory = (storyId: string) => {
    setStoriesList(storiesList.filter((story) => story.id !== storyId));
  };

  const handleLogout = async () => {
    await signOutAdmin();
    setIsAuthenticated(false);
    setAdminEmail('');
    setAdminPassword('');
    setLoginError('');
  };

  const toggleReviewed = (id: string) => {
    setReviewedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const filteredRegistrationRows = registrationRows.filter((reg) => {
    const haystack = `${reg.name} ${reg.guardian} ${reg.phone} ${reg.zone}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const filteredSubmissions = submissions.filter((submission) => {
    if (submission.type !== 'contact' && submission.type !== 'subscribe') {
      return false;
    }
    const haystack = `${submission.fullName} ${submission.email || ''} ${submission.phone || ''} ${submission.reason || ''} ${submission.subject || ''}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const overviewStats = [
    {
      title: 'Registered Players',
      value: `${joinSubmissions.length + 20}+`,
      note: '↑ Active Across 6 Squads',
      noteClass: 'text-emerald-600',
    },
    {
      title: 'League Fixtures',
      value: `${fixturesList.length}`,
      note: '2 Matches Scheduled This Weekend',
      noteClass: 'text-[#123764]',
    },
    {
      title: 'Published Stories',
      value: `${storiesList.length}`,
      note: 'Community & Match Recaps',
      noteClass: 'text-amber-600',
    },
    {
      title: 'Pending Inquiries',
      value: `${contactSubmissions.length + subscribeSubmissions.length}`,
      note: 'Partnerships & Equipment',
      noteClass: 'text-purple-600',
    },
    {
      title: 'Donation Pledges',
      value: `${donationSubmissions.length}`,
      note: 'Community Support & Contributions',
      noteClass: 'text-emerald-600',
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFF7E8] text-[#111827] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl border-2 border-[#FDBD55] bg-white p-8 shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3 py-1 rounded-full mb-4 text-[11px] font-black uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            <span>Admin Access</span>
          </div>

          <h2 className="text-2xl font-black font-serif text-[#123764] uppercase">Sign in to manage submissions</h2>
          <p className="mt-2 text-sm text-gray-600">Use the staff credentials below to access the admin dashboard.</p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Email</label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {loginError && <p className="text-sm font-semibold text-red-600">{loginError}</p>}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full rounded-full bg-[#123764] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0c2545] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoggingIn ? 'Signing In…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">Sign in with your existing Firebase account. No local accounts are stored.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Exit Dashboard</span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] px-4 py-2 rounded-full text-xs font-black transition-all border-2 border-white shadow-lg"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

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
               { key: 'messages', label: 'Messages & Emails' },
               { key: 'donations', label: 'Donations' },
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
              {overviewStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-2"
                >
                  <span className="text-xs font-extrabold text-gray-500 uppercase">{stat.title}</span>
                  <span className="text-3xl font-black font-serif text-[#123764] block">{stat.value}</span>
                  <span className={`text-[11px] font-bold ${stat.noteClass}`}>{stat.note}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-3xl border-2 border-[#FDBD55] bg-[#071D3B] p-6 text-white shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FDBD55]" />
                  <h3 className="text-lg font-black uppercase">Quick Admin Actions</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">Use the dashboard to review new applications, publish stories, and keep staff informed.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button onClick={() => setActiveTab('registrations')} className="rounded-full bg-[#FDBD55] px-4 py-2 text-sm font-black text-[#123764]">Review Registrations</button>
                  <button onClick={() => setActiveTab('messages')} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">Check Messages</button>
                  <button onClick={() => setActiveTab('stories')} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">Publish Story</button>
                  <button onClick={() => setActiveTab('donations')} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">Review Donations</button>
                </div>
              </div>

              <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black text-[#123764] uppercase">Staff Note</h3>
                <p className="mt-2 text-sm text-gray-600">Keep this dashboard fresh by posting weekly updates for volunteers and coaches.</p>
                <div className="mt-4 rounded-2xl bg-[#FFF7E8] p-4 text-sm font-semibold text-[#123764]">
                  Next review: Saturday training session at Kakuma Main Pitch.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGISTRATIONS TAB */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                Player Enrollment Submissions
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                  <Search className="w-3.5 h-3.5 text-[#123764]" />
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search player"
                    className="w-28 bg-transparent outline-none"
                  />
                </label>
                <button
                  onClick={() => alert('Exporting registrations as CSV...')}
                  className="bg-[#123764] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#FDBD55]" />
                  <span>Export Registrations (CSV)</span>
                </button>
              </div>
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
                  {filteredRegistrationRows.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-[#123764]">
                        <div>{reg.name}</div>
                        {reg.email && <div className="mt-1 text-[11px] font-semibold text-[#123764]">{reg.email}</div>}
                      </td>
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

        {/* STORIES TAB */}
        {activeTab === 'stories' && (
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">Publish Community Stories</h3>
              <p className="mt-2 text-sm text-gray-600">Add new academy stories, match reports, or volunteer highlights directly from the dashboard.</p>

              <form onSubmit={handleAddStory} className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Story Title</label>
                  <input
                    value={newStory.title}
                    onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                    placeholder="e.g. Girls Team Wins Weekend Cup"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Story Summary</label>
                  <textarea
                    value={newStory.summary}
                    onChange={(e) => setNewStory({ ...newStory, summary: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                    rows={3}
                    placeholder="Write the story details here..."
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Category</label>
                  <div className="relative">
                    <select
                      value={newStory.category}
                      onChange={(e) => setNewStory({ ...newStory, category: e.target.value })}
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 pr-10 text-sm shadow-sm transition hover:border-[#FDBD55] focus:border-[#123764] focus:outline-none"
                    >
                      <option value="Community">Community</option>
                      <option value="Matches">Matches</option>
                      <option value="Girls">Girls</option>
                      <option value="Education">Education</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#123764]">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.25 7.5 10 12.25 14.75 7.5H5.25Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <button type="submit" className="w-full rounded-full bg-[#123764] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0c2545]">
                    Add Story
                  </button>
                </div>
              </form>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {storiesList.map((story) => (
                <div key={story.id} className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-[#EDF3FA] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#123764]">
                        {story.category}
                      </span>
                      <h4 className="mt-3 text-lg font-black text-[#123764]">{story.title}</h4>
                    </div>
                    <button onClick={() => handleRemoveStory(story.id)} className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                      Remove
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{story.summary}</p>
                  <p className="mt-3 text-xs font-semibold text-gray-400">{story.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MESSAGES & EMAILS TAB */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                Contact Messages & Enrollment Emails
              </h3>
              <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                <Search className="w-3.5 h-3.5 text-[#123764]" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search message"
                  className="w-28 bg-transparent outline-none"
                />
              </label>
            </div>

            {filteredSubmissions.length === 0 ? (
              <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-600">
                No submissions collected yet. Forms submitted from the website will appear here automatically.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <div key={submission.id} className="rounded-3xl border-2 border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#123764] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#FDBD55]">
                        {submission.type === 'join'
                          ? 'Join Application'
                          : submission.type === 'subscribe'
                            ? 'Newsletter Subscription'
                            : 'Contact Message'}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">{submission.createdAt}</span>
                      <button
                        onClick={() => toggleReviewed(submission.id)}
                        className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${reviewedIds.includes(submission.id) ? 'bg-emerald-100 text-emerald-700' : 'bg-[#FFF7E8] text-[#123764]'}`}
                      >
                        {reviewedIds.includes(submission.id) ? 'Reviewed' : 'Mark Reviewed'}
                      </button>
                    </div>

                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-lg font-black text-[#123764]">{submission.fullName}</h4>
                        <p className="text-sm font-semibold text-[#123764]">{submission.email || 'No email provided'}</p>
                        <p className="text-xs text-gray-500">{submission.subject || submission.reason || ''}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p><span className="font-semibold text-[#123764]">Phone:</span> {submission.phone || 'N/A'}</p>
                        <p><span className="font-semibold text-[#123764]">Location:</span> {submission.location || submission.reason || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl bg-[#FFF7E8] p-3 text-sm text-gray-700">
                      {submission.message || submission.notes || 'No additional details provided.'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

         {/* DONATIONS TAB */}
         {activeTab === 'donations' && (
           <div className="space-y-6">
             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
               <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                 Donation Pledges & Contributions
               </h3>
               <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                 <Search className="w-3.5 h-3.5 text-[#123764]" />
                 <input
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   placeholder="Search donor"
                   className="w-28 bg-transparent outline-none"
                 />
               </label>
             </div>

             {donationSubmissions.length === 0 ? (
               <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-600">
                 No donation pledges recorded yet. Contributions made from the website will appear here automatically.
               </div>
             ) : (
               <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
                 <table className="w-full text-left text-xs sm:text-sm">
                   <thead className="bg-[#071D3B] text-white">
                     <tr>
                       <th className="p-4">DONOR</th>
                       <th className="p-4">EMAIL</th>
                       <th className="p-4">PHONE</th>
                       <th className="p-4">AMOUNT</th>
                       <th className="p-4">TIER</th>
                       <th className="p-4">METHOD</th>
                       <th className="p-4">DATE</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {donationSubmissions
                       .filter((submission) => {
                         const haystack = `${submission.fullName} ${submission.email || ''} ${submission.phone || ''}`.toLowerCase();
                         return haystack.includes(searchTerm.toLowerCase());
                       })
                       .map((submission) => (
                         <tr key={submission.id} className="hover:bg-gray-50">
                           <td className="p-4 font-bold text-[#123764]">{submission.fullName}</td>
                           <td className="p-4 text-gray-700">{submission.email || 'N/A'}</td>
                           <td className="p-4 text-gray-700 font-mono">{submission.phone || 'N/A'}</td>
                           <td className="p-4 font-black text-[#123764]">${submission.amount ?? '—'}</td>
                           <td className="p-4 text-gray-700 text-xs">{submission.tierId}</td>
                           <td className="p-4">
                             <span className="rounded-full bg-[#EDF3FA] text-[#123764] font-black px-2.5 py-0.5 text-[11px]">
                               {submission.paymentMethod || submission.reason || '—'}
                             </span>
                           </td>
                           <td className="p-4 text-gray-400">{submission.createdAt || 'Pending'}</td>
                         </tr>
                       ))}
                   </tbody>
                 </table>
               </div>
             )}
           </div>
         )}

         {/* FIXTURES & SCORES TAB */}
         {activeTab === 'fixtures' && (
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                Add New Fixture
              </h3>
              <p className="mt-2 text-sm text-gray-600">Submit match details from the dashboard and they will appear in the fixtures table immediately.</p>

              <form onSubmit={handleAddFixture} className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Date</label>
                  <input
                    type="date"
                    required
                    value={newFixture.date}
                    onChange={(e) => setNewFixture({ ...newFixture, date: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Time</label>
                  <input
                    type="time"
                    value={newFixture.time}
                    onChange={(e) => setNewFixture({ ...newFixture, time: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Home Team</label>
                  <input
                    type="text"
                    required
                    value={newFixture.homeTeam}
                    onChange={(e) => setNewFixture({ ...newFixture, homeTeam: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                    placeholder="Kakuma Stars"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Away Team</label>
                  <input
                    type="text"
                    required
                    value={newFixture.awayTeam}
                    onChange={(e) => setNewFixture({ ...newFixture, awayTeam: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                    placeholder="Kalobeyei FC"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Venue</label>
                  <input
                    type="text"
                    required
                    value={newFixture.venue}
                    onChange={(e) => setNewFixture({ ...newFixture, venue: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                    placeholder="Kakuma Main Pitch"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase text-[#123764]">Division</label>
                  <select
                    value={newFixture.division}
                    onChange={(e) => setNewFixture({ ...newFixture, division: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#123764] focus:outline-none"
                  >
                    <option value="Academy League">Academy League</option>
                    <option value="Women League">Women League</option>
                    <option value="Community Cup">Community Cup</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="rounded-full bg-[#123764] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#0c2545]">
                    Submit Fixture
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#071D3B] text-white">
                  <tr>
                    <th className="p-4">DATE</th>
                    <th className="p-4">MATCH</th>
                    <th className="p-4">VENUE</th>
                    <th className="p-4">STATUS</th>
                    <th className="p-4">RESULT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fixturesList.map((fix) => (
                    <tr key={fix.id} className="hover:bg-gray-50">
                      <td className="p-4 text-gray-700">
                        <div className="font-bold text-[#123764]">{fix.date}</div>
                        <div className="text-[11px] text-gray-500">{fix.time}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-black text-[#123764]">{fix.homeTeam} vs {fix.awayTeam}</div>
                        <div className="text-[11px] text-gray-500">{fix.division}</div>
                      </td>
                      <td className="p-4 text-gray-700">{fix.venue}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-[#EDF3FA] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#123764]">
                          {fix.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {editingScoreId === fix.id ? (
                          <div className="flex flex-wrap items-center gap-2">
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
                              className="bg-[#123764] text-white text-xs px-3 py-1.5 rounded-full font-bold"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-black text-[#123764]">
                              {fix.status === 'completed' ? `${fix.homeScore ?? 0} - ${fix.awayScore ?? 0}` : 'Pending'}
                            </span>
                            <button
                              onClick={() => {
                                setEditingScoreId(fix.id);
                                setHomeScoreInput(fix.homeScore || 0);
                                setAwayScoreInput(fix.awayScore || 0);
                              }}
                              className="bg-[#FDBD55] text-[#123764] text-xs font-black px-3 py-1.5 rounded-full hover:bg-[#e0a33c]"
                            >
                              Edit Score
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};

export default AdminDashboardPage;
