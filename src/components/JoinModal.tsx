import React, { useState } from 'react';
import { X, CheckCircle, User, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import { JoinFormData } from '../types';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<JoinFormData>({
    fullName: '',
    parentName: '',
    dateOfBirth: '',
    gender: 'Male',
    category: 'U15 Boys (Ages 14-15)',
    phone: '',
    email: '',
    locationInKakuma: 'Kakuma 1',
    positionPreference: 'Midfielder',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FDBD55] my-8">
        
        {/* Header Bar */}
        <div className="bg-[#123764] text-white p-6 relative border-b-4 border-[#FDBD55]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FDBD55] hover:text-[#123764] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-black text-[#FDBD55] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#FDBD55]/40">
            Official Application
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-serif mt-2 text-white">
            JOIN KAKUMA SOCCER ACADEMY
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Free registration for young athletes and volunteers in Kakuma Refugee Camp.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center bg-[#FFF7E8]">
            <div className="w-20 h-20 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center mb-4 border-4 border-[#FDBD55] shadow-lg animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-[#123764] font-serif">
              Application Submitted Successfully!
            </h4>
            <p className="text-sm text-[#111827] mt-2 max-w-md">
              Thank you, <strong className="text-[#123764]">{formData.fullName}</strong>. Your registration details have been sent to Coach Peter and the Kakuma Football Academy technical staff.
            </p>
            <div className="my-6 p-4 bg-white rounded-2xl border border-[#FDBD55] text-left text-xs text-[#123764] space-y-1 w-full max-w-md">
              <p><strong>Registration ID:</strong> KFA-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
              <p><strong>Category:</strong> {formData.category}</p>
              <p><strong>Location:</strong> {formData.locationInKakuma}</p>
              <p><strong>Next Step:</strong> Report to Kakuma Main Pitch on Saturday 3:30 PM with a parent/guardian for kit sizing.</p>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#123764] text-[#FDBD55] font-black text-sm px-8 py-3 rounded-full hover:bg-[#0c2545] transition-colors border-2 border-[#FDBD55]"
            >
              Close & Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Applicant Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Lual"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Required for youth under 18"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Gender *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                >
                  <option value="U11 Junior (Ages 8-11)">U11 Junior (Ages 8-11)</option>
                  <option value="U13 Youth (Ages 12-13)">U13 Youth (Ages 12-13)</option>
                  <option value="U15 Youth (Ages 14-15)">U15 Youth (Ages 14-15)</option>
                  <option value="U17 Youth (Ages 16-17)">U17 Youth (Ages 16-17)</option>
                  <option value="Senior Women Kakuma Queens">Senior Women Kakuma Queens</option>
                  <option value="Volunteer Coach / Mentor">Volunteer Coach / Mentor</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Phone / WhatsApp Contact *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                  Location in Kakuma / Turkana West *
                </label>
                <select
                  value={formData.locationInKakuma}
                  onChange={(e) => setFormData({ ...formData, locationInKakuma: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
                >
                  <option value="Kakuma 1">Kakuma 1</option>
                  <option value="Kakuma 2">Kakuma 2</option>
                  <option value="Kakuma 3">Kakuma 3</option>
                  <option value="Kakuma 4">Kakuma 4</option>
                  <option value="Kalobeyei Settlement">Kalobeyei Settlement</option>
                  <option value="Kakuma Town / Host Community">Kakuma Town / Host Community</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                Preferred Playing Position / Interests
              </label>
              <input
                type="text"
                value={formData.positionPreference}
                onChange={(e) => setFormData({ ...formData, positionPreference: e.target.value })}
                placeholder="e.g. Midfielder, Goalkeeper, Striker, or Academic Mentorship"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                Additional Notes / School Attended
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us a little about yourself or your school..."
                className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm"
              />
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#123764] hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#FDBD55] text-[#123764] font-black text-xs px-5 py-2.5 rounded-full hover:bg-[#e0a33c] shadow-md transition-all"
              >
                Submit Application
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default JoinModal;
