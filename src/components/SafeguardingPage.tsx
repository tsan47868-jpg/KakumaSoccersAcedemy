import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Phone,
  Mail,
  Send,
  Sparkles,
  FileText,
} from 'lucide-react';

interface SafeguardingPageProps {
  onBackToHome: () => void;
  onOpenJoin?: () => void;
  onOpenDonate?: () => void;
}

export const SafeguardingPage: React.FC<SafeguardingPageProps> = ({
  onBackToHome,
}) => {
  const [reportSuccess, setReportSuccess] = useState<boolean>(false);
  const [reporterName, setReporterName] = useState<string>('');
  const [reporterContact, setReporterContact] = useState<string>('');
  const [category, setCategory] = useState<string>('General Concern');
  const [details, setDetails] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details) return;
    setReportSuccess(true);
  };

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

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1 rounded-full mb-3 text-xs font-black uppercase tracking-widest shadow-sm">
            <ShieldCheck className="w-4 h-4 fill-[#123764]" />
            <span>ZERO TOLERANCE TO HARM OR EXPLOITATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase">
            CHILD PROTECTION & SAFEGUARDING POLICY
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Kakuma Soccer Academy is committed to ensuring that every child and young person participates in football, mentorship, and education in a safe, respectful, and protected environment free from abuse, discrimination, or exploitation.
          </p>
        </div>
      </section>

      {/* CORE SAFEGUARDING PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Child Protection',
              desc: 'Strict protocols preventing physical, emotional, verbal, or sexual harm, with mandatory background checks for all staff and volunteer coaches.',
            },
            {
              title: 'Inclusive Participation',
              desc: 'Equal access and dignity for boys, girls, children with disabilities, and all refugee or host community youth without discrimination.',
            },
            {
              title: 'Confidential Reporting',
              desc: 'Clear, confidential channels for players, parents, or community members to report any safety concerns or policy violations.',
            },
            {
              title: 'Responsible Coaching',
              desc: 'Coaches adhere to positive reinforcement, fair discipline, respectful communication, and chaperoned group travel.',
            },
          ].map((pillar, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-md space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#123764] text-[#FDBD55] font-black text-xs flex items-center justify-center">
                0{i + 1}
              </span>
              <h3 className="font-extrabold text-[#123764] text-lg">{pillar.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODE OF CONDUCT & STAFF STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <FileText className="w-6 h-6 text-[#FDBD55]" />
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
              COACH & VOLUNTEER CODE OF CONDUCT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-800">
            <div className="space-y-2">
              <h4 className="font-bold text-[#123764] text-sm">Every Academy Leader Must:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Treat all children with equal respect, dignity, and encouragement regardless of ability or background.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ensure all training sessions and study hall activities are conducted in open, visible, public settings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Promptly report any suspected safeguarding breach to the Designated Safeguarding Focal Point.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#123764] text-sm">Strictly Prohibited Conduct:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Any form of corporal punishment, physical aggression, or harsh degrading language.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>One-on-one unchaperoned isolated situations with minor athletes in private rooms or non-public areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Sharing or publishing private identification details or photos of minor athletes without parent consent.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL REPORT FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#071D3B] text-white p-8 rounded-3xl border-4 border-[#FDBD55] shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-[#FDBD55]" />
            <div>
              <h3 className="text-2xl font-black font-serif text-white uppercase">
                CONFIDENTIAL SAFEGUARDING CONCERN FORM
              </h3>
              <p className="text-xs text-white/80">
                Submit a confidential report regarding child protection, harassment, or conduct concerns in Kakuma.
              </p>
            </div>
          </div>

          {reportSuccess ? (
            <div className="bg-emerald-800/90 border border-emerald-400 p-6 rounded-2xl text-center text-white space-y-2">
              <CheckCircle2 className="w-10 h-10 text-[#FDBD55] mx-auto" />
              <h4 className="font-bold text-base">Safeguarding Report Received</h4>
              <p className="text-xs text-white/90">
                Thank you for speaking up. Our Designated Safeguarding Officer will review this report with utmost confidentiality and priority.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitReport} className="space-y-4 text-xs">
              <div className="flex items-center gap-2 text-[#FDBD55] mb-2">
                <input
                  type="checkbox"
                  id="anon"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-[#123764]"
                />
                <label htmlFor="anon" className="font-bold cursor-pointer">Submit this report anonymously</label>
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-white mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#FDBD55]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-white mb-1">Contact Email / Phone</label>
                    <input
                      type="text"
                      placeholder="Phone number or email"
                      value={reporterContact}
                      onChange={(e) => setReporterContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#FDBD55]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block font-bold text-white mb-1">Concern Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#123764] border border-white/20 text-white focus:outline-none focus:border-[#FDBD55]"
                >
                  <option value="General Concern">General Safety Concern</option>
                  <option value="Coach Conduct">Coach / Staff Conduct</option>
                  <option value="Bullying">Peer Bullying or Discrimination</option>
                  <option value="Safety Hazard">Pitch or Facility Safety Hazard</option>
                  <option value="Other">Other Confidential Matter</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-white mb-1">Details of Concern *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please describe what happened, dates, locations, and any relevant details..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#FDBD55]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs py-3 rounded-full shadow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Safeguarding Report</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default SafeguardingPage;
