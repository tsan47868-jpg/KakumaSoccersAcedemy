import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building2,
  Globe,
  Sparkles,
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        category: 'General Inquiry',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#EDF3FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#123764] text-[#FDBD55] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 border border-[#FDBD55]/40 shadow-sm">
            <Mail className="w-4 h-4 text-[#FDBD55]" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight uppercase">
            CONTACT KAKUMA SOCCER ACADEMY
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Have questions about player registration, volunteer opportunities, gear donations, or local partnerships? Send us a message and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Academy Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >

            
            {/* Contact Info Card */}
            <div className="bg-[#071D3B] text-white p-6 sm:p-8 rounded-3xl border-4 border-[#FDBD55] shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FDBD55]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-4">
                <Building2 className="w-3.5 h-3.5 fill-[#123764]" />
                <span>Headquarters & Grounds</span>
              </div>

              <h3 className="text-2xl font-black font-serif text-white tracking-tight uppercase mb-6">
                GET IN TOUCH WITH OUR TEAM
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123764] border border-[#FDBD55]/50 flex items-center justify-center shrink-0 text-[#FDBD55]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDBD55] font-black block">Main Location</span>
                    <p className="text-white font-medium mt-0.5">
                      Kakuma Central Pitch & Education Hub, Kakuma Refugee Camp / Turkana West, Kenya
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123764] border border-[#FDBD55]/50 flex items-center justify-center shrink-0 text-[#FDBD55]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDBD55] font-black block">Email Inquiry</span>
                    <a
                      href="mailto:info@kakumasoccer.org"
                      className="text-white hover:text-[#FDBD55] font-medium mt-0.5 transition-colors block"
                    >
                      info@kakumasoccer.org
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123764] border border-[#FDBD55]/50 flex items-center justify-center shrink-0 text-[#FDBD55]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDBD55] font-black block">Phone & WhatsApp</span>
                    <a
                      href="tel:+254700123456"
                      className="text-white hover:text-[#FDBD55] font-medium mt-0.5 transition-colors block"
                    >
                      +254 (0) 700 123 456
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123764] border border-[#FDBD55]/50 flex items-center justify-center shrink-0 text-[#FDBD55]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDBD55] font-black block">Training & Office Hours</span>
                    <p className="text-white/90 font-medium mt-0.5">
                      Monday – Saturday: 8:00 AM – 6:00 PM (EAT)
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#FDBD55]" />
                  <span>Registered CBO #48291/Kenya</span>
                </span>
                <span className="font-bold text-[#FDBD55]">100% Non-Profit</span>
              </div>

            </div>

            {/* Quick Note Banner */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#123764]/10 shadow-sm flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#FDBD55] shrink-0" />
              <p className="text-xs text-gray-700 leading-normal">
                <strong>Fast Response Guarantee:</strong> Our community desk responds to all parent inquiries and volunteer submissions within 24–48 hours.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#123764]/10 shadow-xl relative"
          >
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#123764] text-[#FDBD55] flex items-center justify-center font-black">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black font-serif text-[#123764] uppercase">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-gray-500">Fill out the form below with your inquiry details.</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-8 text-center animate-fadeIn my-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-emerald-900 font-serif uppercase">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Kakuma Soccer Academy. A representative from our coordination team will review your message and respond via email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-xs">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block font-extrabold text-[#123764] uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Grace Nyabol"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all ${
                        errors.fullName
                          ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#123764] focus:ring-2 focus:ring-[#123764]/10 bg-[#EDF3FA]/30'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-extrabold text-[#123764] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. grace@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#123764] focus:ring-2 focus:ring-[#123764]/10 bg-[#EDF3FA]/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Inquiry Category & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Category Dropdown */}
                  <div>
                    <label className="block font-extrabold text-[#123764] uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#123764] focus:ring-2 focus:ring-[#123764]/10 bg-white font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Parent / Player Enrollment">Parent / Player Enrollment</option>
                      <option value="Volunteer Coaching & Mentorship">Volunteer Coaching & Mentorship</option>
                      <option value="Equipment & Boots Donation">Equipment & Boots Donation</option>
                      <option value="Sponsorship & Partnerships">Sponsorship & Partnerships</option>
                    </select>
                  </div>

                  {/* Subject Line */}
                  <div>
                    <label className="block font-extrabold text-[#123764] uppercase tracking-wider mb-1.5">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. U15 Player Registration Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#123764] focus:ring-2 focus:ring-[#123764]/10 bg-[#EDF3FA]/30"
                    />
                  </div>

                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-extrabold text-[#123764] uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your question, comment, or request here..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all ${
                      errors.message
                        ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-[#123764] focus:ring-2 focus:ring-[#123764]/10 bg-[#EDF3FA]/30'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#123764] hover:bg-[#0c2545] text-white font-black text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-[#FDBD55] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FDBD55] group-hover:translate-x-1 transition-transform" />
                        <span>SEND MESSAGE NOW</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
