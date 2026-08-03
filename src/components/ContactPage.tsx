import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: 'General Inquiry',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.message) return;

    const submission = {
      id: `contact-${Date.now()}`,
      type: 'contact',
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      reason: form.reason,
      subject: form.subject,
      message: form.message,
      createdAt: new Date().toLocaleString(),
    };

    const existing = typeof window !== 'undefined' ? window.localStorage.getItem('kakuma-form-submissions') : null;
    const submissions = existing ? JSON.parse(existing) : [];
    submissions.unshift(submission);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('kakuma-form-submissions', JSON.stringify(submissions));
    }

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
            <Mail className="w-4 h-4 fill-[#123764]" />
            <span>CONNECT WITH OUR HEADQUARTERS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-6">
            CONTACT KAKUMA SOCCER ACADEMY
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
            Whether you are a parent looking to register a young player, an NGO seeking partnership, or a donor wanting to support equipment, we welcome your message.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CONTACT DETAILS CARDS */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-sm space-y-4">
              <h3 className="font-black font-serif text-xl text-[#123764] uppercase border-b border-gray-100 pb-2">
                Academy Headquarters
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[#123764] block">Location:</span>
                    <span className="text-gray-700">Kakuma Refugee Camp, Turkana County, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[#123764] block">Direct Phone:</span>
                    <a href="tel:+254728071757" className="text-gray-700 hover:text-[#123764] font-bold">+254 728 071757</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[#123764] block">Email Address:</span>
                    <a href="mailto:agawanyang4@gmail.com" className="text-gray-700 hover:text-[#123764] font-bold">agawanyang4@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center shrink-0">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[#123764] block">Facebook Community:</span>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-[#123764]">Kakuma Soccer Academy Official Page</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pitch & Hours Card */}
            <div className="bg-[#071D3B] text-white p-6 rounded-3xl border-2 border-[#FDBD55] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#FDBD55] font-black">
                <Clock className="w-4 h-4" />
                <span className="uppercase tracking-wider">Training & Pitch Hours</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                <span className="font-bold text-white block">Monday - Friday:</span>
                Study Hall (2:00 PM - 4:00 PM)<br />
                Pitch Practice (4:00 PM - 6:00 PM)<br />
                <span className="font-bold text-white block mt-2">Saturday & Sunday:</span>
                Kakuma League Fixtures (2:30 PM - 6:00 PM)
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-xl lg:col-span-2">
            {submitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-400 p-8 rounded-3xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-extrabold text-[#123764] text-xl">Thank You for Reaching Out!</h3>
                <p className="text-xs text-gray-700 max-w-md mx-auto">
                  Your message has been delivered to Kakuma Soccer Academy leadership. We will respond promptly via phone or email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#123764] text-white font-bold text-xs px-6 py-2.5 rounded-full"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-black font-serif text-[#123764] text-2xl uppercase">
                  Send Us a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Emmanuel"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Phone Number (M-Pesa / Call)</label>
                    <input
                      type="tel"
                      placeholder="e.g. +254 7XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Reason for Contacting *</label>
                    <select
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764] bg-white"
                    >
                      <option value="Player Registration">Player Registration</option>
                      <option value="Partnership">Partnership / NGO Collaboration</option>
                      <option value="Donation">Donation / Equipment Support</option>
                      <option value="Volunteering">Volunteering / Coaching</option>
                      <option value="Match Invitation">Match / Tournament Invitation</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Brief summary of your inquiry"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Kakuma Soccer Academy</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* KAKUMA MAP PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#071D3B] text-white p-8 rounded-3xl border-2 border-[#FDBD55] shadow-md text-center space-y-3">
          <MapPin className="w-8 h-8 text-[#FDBD55] mx-auto" />
          <h4 className="font-black font-serif text-xl uppercase">Kakuma Refugee Camp Grounds</h4>
          <p className="text-xs text-white/80 max-w-lg mx-auto">
            Kakuma Central Pitch 1 & 2, Turkana West Sub-County, Kenya. Training activities and matches take place on community grounds across Kakuma 1, Kakuma 2, Kakuma 3, and Kalobeyei.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
