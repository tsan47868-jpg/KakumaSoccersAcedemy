import React, { useState } from 'react';
import {
  ArrowLeft,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Send,
  Calendar,
  Phone,
  MapPin,
  Heart,
  Sparkles,
} from 'lucide-react';

interface RegisterPageProps {
  onBackToHome: () => void;
  onOpenDonate?: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  onBackToHome,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    playerName: '',
    ageGroup: 'U12',
    gender: 'Boy',
    position: 'Midfield',
    locationInKakuma: 'Kakuma 1',
    medicalNotes: '',
    emergencyContact: '',
    emergencyPhone: '',
    agreeSafeguarding: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeSafeguarding) return;
    setSubmitted(true);
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

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <UserCheck className="w-4 h-4 fill-[#123764]" />
            <span>SAFE & INCLUSIVE YOUTH ENROLLMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            REGISTER A YOUNG ATHLETE
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
            Join Kakuma Soccer Academy for structured football coaching, mandatory study hall homework support, life-skills mentorship, and peer friendship.
          </p>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-gray-200 shadow-xl">
          {submitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-400 p-8 rounded-3xl text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
                Player Registration Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                Thank you for enrolling <span className="font-bold text-[#123764]">{formData.playerName}</span> in Kakuma Soccer Academy. Our coaching staff will contact you at <span className="font-bold text-[#123764]">{formData.parentPhone}</span> ahead of the next training session.
              </p>
              <div className="pt-4">
                <button
                  onClick={onBackToHome}
                  className="bg-[#123764] text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-[#0c2545]"
                >
                  Return to Main Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              
              {/* Guardian Section */}
              <div className="border-b border-gray-100 pb-4 space-y-4">
                <h4 className="font-black font-serif text-[#123764] text-lg uppercase flex items-center gap-2">
                  <span>01. Parent / Guardian Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Phone Number (M-Pesa / Call) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +254 7XX XXX XXX"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Kakuma Zone / Location in Camp *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kakuma 1 Zone 3, Kalobeyei Village 2, or Town"
                    value={formData.locationInKakuma}
                    onChange={(e) => setFormData({ ...formData, locationInKakuma: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>
              </div>

              {/* Player Section */}
              <div className="border-b border-gray-100 pb-4 space-y-4">
                <h4 className="font-black font-serif text-[#123764] text-lg uppercase">
                  02. Young Athlete Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Player's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="First & Last Name"
                      value={formData.playerName}
                      onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Age Category *</label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764] bg-white"
                    >
                      <option value="U10">Under 10 (Grassroots Fun)</option>
                      <option value="U12">Under 12 (Junior Development)</option>
                      <option value="U14">Under 14 (Cadet Squad)</option>
                      <option value="U17">Under 17 (Competitive Academy)</option>
                      <option value="Girls">Kakuma Queens (Girls & Young Women)</option>
                      <option value="Senior">Community Senior Squad</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Gender *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764] bg-white"
                    >
                      <option value="Boy">Boy / Male</option>
                      <option value="Girl">Girl / Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Preferred Position</label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764] bg-white"
                    >
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender / Center Back</option>
                      <option value="Midfield">Midfielder / Playmaker</option>
                      <option value="Forward">Forward / Winger / Striker</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Medical Considerations / Allergies</label>
                  <input
                    type="text"
                    placeholder="e.g. Asthma, previous injuries, or none"
                    value={formData.medicalNotes}
                    onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>
              </div>

              {/* Safeguarding Consent */}
              <div className="bg-[#FFF7E8] p-4 rounded-2xl border border-[#FDBD55]/40 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-gray-700 leading-relaxed">
                    <span className="font-extrabold text-[#123764] block mb-0.5">Safeguarding & Mandatory School Attendance Agreement:</span>
                    I confirm that I am the parent/guardian of this child. I permit them to join Kakuma Soccer Academy activities and agree that they will maintain regular school attendance alongside sports training.
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#FDBD55]/20">
                  <input
                    type="checkbox"
                    id="safeguardConsent"
                    required
                    checked={formData.agreeSafeguarding}
                    onChange={(e) => setFormData({ ...formData, agreeSafeguarding: e.target.checked })}
                    className="rounded text-[#123764]"
                  />
                  <label htmlFor="safeguardConsent" className="font-bold text-[#123764] cursor-pointer text-xs">
                    I agree to the Academy Child Safeguarding & Code of Conduct policy *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.agreeSafeguarding}
                className="w-full bg-[#123764] hover:bg-[#0c2545] disabled:bg-gray-300 text-white font-black text-xs sm:text-sm py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#FDBD55]" />
                <span>Submit Player Registration</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default RegisterPage;
