import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Heart,
  Shield,
  CheckCircle2,
  Smartphone,
  CreditCard,
  Building,
  Sparkles,
  Award,
  Package,
} from 'lucide-react';
import { SPONSOR_TIERS } from '../data/mockData';

interface DonatePageProps {
  onBackToHome: () => void;
  onOpenJoin?: () => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({
  onBackToHome,
}) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'bank'>('mpesa');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const equipmentWishlist = [
    { item: 'Match Quality Footballs', cost: '$15 / ball', desc: 'Durable size 4 & size 5 balls for dusty pitches' },
    { item: 'Football Boots & Shin Guards', cost: '$25 / pair', desc: 'Protective gear for youth playing without footwear' },
    { item: 'Team Jerseys & Bibs Set', cost: '$120 / team', desc: 'Complete numbered kits for age-group matches' },
    { item: 'First-Aid Medical Supplies', cost: '$50 / kit', desc: 'Bandages, antiseptics, and ice packs for match day' },
    { item: 'Study Hall Books & Stationery', cost: '$30 / month', desc: 'Exercise notebooks, pens, and English readers' },
  ];

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
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
            <Heart className="w-4 h-4 fill-[#123764]" />
            <span>DIRECT COMMUNITY SUPPORT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase">
            INVEST IN TALENT. STRENGTHEN A COMMUNITY.
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Every contribution directly provides footballs, boots, study hall literacy supplies, female dignity kits, and safe coaching for youth in Kakuma.
          </p>
        </div>
      </section>

      {/* SPONSOR TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPONSOR_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedAmount(tier.amount)}
              className={`bg-white rounded-3xl p-6 sm:p-8 border-4 cursor-pointer transition-all shadow-md flex flex-col justify-between space-y-4 ${
                selectedAmount === tier.amount
                  ? 'border-[#FDBD55] shadow-2xl scale-[1.02]'
                  : 'border-gray-200 hover:border-[#123764]/40'
              }`}
            >
              <div className="space-y-3">
                <span className="bg-[#123764] text-[#FDBD55] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {tier.title}
                </span>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-serif text-[#123764]">${tier.amount}</span>
                  <span className="text-xs text-gray-500 font-bold">{tier.period}</span>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed">{tier.description}</p>

                <div className="bg-[#FFF7E8] p-3 rounded-2xl border border-[#FDBD55]/40 text-xs">
                  <span className="font-extrabold text-[#123764] block mb-1">Impact Outcome:</span>
                  <p className="text-gray-800 text-[11px]">{tier.impactText}</p>
                </div>
              </div>

              <button
                type="button"
                className={`w-full py-2.5 rounded-full text-xs font-black transition-all ${
                  selectedAmount === tier.amount
                    ? 'bg-[#FDBD55] text-[#123764] shadow-md'
                    : 'bg-[#123764] text-white hover:bg-[#0c2545]'
                }`}
              >
                {selectedAmount === tier.amount ? '✓ Selected Tier' : 'Select Tier'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DONATION FORM & PAYMENT OPTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-gray-200 shadow-xl space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black font-serif text-[#123764] uppercase">
              MAKE YOUR CONTRIBUTION
            </h3>
            <p className="text-xs text-gray-600 max-w-md mx-auto">
              Choose your giving frequency, amount, and preferred payment method.
            </p>
          </div>

          {/* Frequency Selector */}
          <div className="flex items-center justify-center gap-2 max-w-xs mx-auto bg-[#EDF3FA] p-1 rounded-full border border-gray-200">
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`w-1/2 py-2 rounded-full text-xs font-black transition-all ${
                frequency === 'monthly' ? 'bg-[#123764] text-white shadow' : 'text-gray-600 hover:text-[#123764]'
              }`}
            >
              Monthly Giving
            </button>
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`w-1/2 py-2 rounded-full text-xs font-black transition-all ${
                frequency === 'one-time' ? 'bg-[#123764] text-white shadow' : 'text-gray-600 hover:text-[#123764]'
              }`}
            >
              One-Time Gift
            </button>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-50 border-2 border-emerald-400 p-8 rounded-3xl text-center space-y-3"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-[#123764] text-lg">Thank You for Supporting Kakuma Soccer Academy!</h4>
              <p className="text-xs text-gray-700 max-w-md mx-auto">
                Your commitment enables us to nurture young football talent and provide safe education pathways in Kakuma Refugee Camp.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-[#123764] text-white font-bold text-xs px-6 py-2.5 rounded-full"
              >
                Make Another Contribution
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleDonateSubmit} className="space-y-6 text-xs">
              {/* Payment Method Selector */}
              <div>
                <label className="block font-bold text-[#123764] mb-2 uppercase text-[11px] tracking-wider">
                  Select Payment Method:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'mpesa', name: 'M-Pesa / Mobile Money', icon: Smartphone },
                    { id: 'card', name: 'Debit / Credit Card', icon: CreditCard },
                    { id: 'bank', name: 'Bank Wire Transfer', icon: Building },
                  ].map((pm) => {
                    const Icon = pm.icon;
                    return (
                      <motion.button
                        key={pm.id}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setPaymentMethod(pm.id as any)}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                          paymentMethod === pm.id
                            ? 'border-[#FDBD55] bg-[#FFF7E8] text-[#123764] font-black shadow-sm'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-5 h-5 text-[#123764]" />
                        <span className="text-[11px] leading-tight">{pm.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Method Instructions */}
              <motion.div
                key={paymentMethod}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#EDF3FA] p-4 rounded-2xl border border-gray-200 space-y-2"
              >
                {paymentMethod === 'mpesa' && (
                  <div>
                    <h5 className="font-bold text-[#123764]">M-Pesa Kenya Instructions:</h5>
                    <p className="text-[11px] text-gray-700 mt-0.5">
                      1. Go to M-Pesa Menu → Lipa Na M-Pesa → Buy Goods & Services / Paybill.<br />
                      2. Contact Executive Director via <span className="font-bold text-[#123764]">+254 728 071757</span> or <span className="font-bold text-[#123764]">agawanyang4@gmail.com</span> for official CBO Till numbers.
                    </p>
                  </div>
                )}
                {paymentMethod === 'card' && (
                  <div>
                    <h5 className="font-bold text-[#123764]">Card Payment Gateway:</h5>
                    <p className="text-[11px] text-gray-700 mt-0.5">
                      Card gateway placeholder ready for Stripe / Flutterwave integration. Submit details below to receive a secure invoice link.
                    </p>
                  </div>
                )}
                {paymentMethod === 'bank' && (
                  <div>
                    <h5 className="font-bold text-[#123764]">Bank Transfer Details:</h5>
                    <p className="text-[11px] text-gray-700 mt-0.5">
                      Kakuma Soccer Academy CBO Account (Kenya Shillings / USD). Wire instructions provided upon request.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Donor Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#123764] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#123764] mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. jane@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#123764]" />
                <span>Pledge ${selectedAmount} {frequency === 'monthly' ? '/ Month' : 'One-Time'}</span>
              </motion.button>
            </form>
          )}

        </motion.div>
      </section>

      {/* EQUIPMENT WISHLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-md space-y-4"
        >
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-[#FDBD55]" />
            <h3 className="text-xl font-black font-serif text-[#123764] uppercase">
              EQUIPMENT & MATERIAL DONATION WISHLIST
            </h3>
          </div>

          <div className="divide-y divide-gray-100">
            {equipmentWishlist.map((eq, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * eIdx }}
                whileHover={{ x: 4 }}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs transition-colors hover:bg-[#FFF7E8]/50 px-2 rounded-xl"
              >
                <div>
                  <h5 className="font-extrabold text-[#123764]">{eq.item}</h5>
                  <p className="text-gray-600 text-[11px]">{eq.desc}</p>
                </div>
                <span className="bg-[#123764] text-[#FDBD55] font-black px-3 py-1 rounded-full shrink-0">
                  {eq.cost}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default DonatePage;
