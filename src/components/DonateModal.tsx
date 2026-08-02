import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Check, CreditCard, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { SPONSOR_TIERS } from '../data/mockData';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<string>('tier-1');
  const [customAmount, setCustomAmount] = useState<number>(50);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'bank'>('mpesa');
  const [step, setStep] = useState<'select' | 'payment' | 'success'>('select');

  if (!isOpen) return null;

  const currentTierObj = SPONSOR_TIERS.find((t) => t.id === selectedTier) || SPONSOR_TIERS[0];

  const handleNext = () => {
    setStep('payment');
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = () => {
    setStep('select');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FDBD55] my-8"
          >
            {/* Header Bar */}
        <div className="bg-[#123764] text-white p-6 relative border-b-4 border-[#FDBD55]">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FDBD55] hover:text-[#123764] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#123764]" />
            <span>Support Our Dream</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-serif mt-2 text-white">
            SPONSOR KAKUMA YOUTH ATHLETES
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Every dollar directly provides football kits, school stationery, tournament transport, and daily meals in Kakuma.
          </p>
        </div>

        {step === 'select' && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Tier Selector */}
            <div>
              <h4 className="text-xs font-black text-[#123764] uppercase tracking-wider mb-3">
                01. Select Sponsorship Level
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SPONSOR_TIERS.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                      selectedTier === tier.id
                        ? 'bg-[#FFF7E8] border-[#FDBD55] shadow-md ring-2 ring-[#FDBD55]'
                        : 'bg-white border-gray-200 hover:border-[#123764]/30'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#123764] bg-[#EDF3FA] px-2 py-0.5 rounded">
                        {tier.period}
                      </span>
                      <h5 className="font-bold text-[#123764] text-sm mt-1">{tier.title}</h5>
                      <p className="text-xl font-black text-[#123764] mt-2 font-serif">
                        ${tier.amount}
                      </p>
                      <p className="text-xs text-[#111827]/80 mt-2 line-clamp-3">
                        {tier.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#123764]">
                      <span>{selectedTier === tier.id ? 'Selected' : 'Select'}</span>
                      {selectedTier === tier.id && <Check className="w-4 h-4 text-[#FDBD55]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Calculator Preview */}
            <div className="bg-[#EDF3FA] p-5 rounded-2xl border border-[#123764]/10">
              <h4 className="text-xs font-black text-[#123764] uppercase tracking-wider mb-2">
                Impact Breakdown for ${currentTierObj.amount}
              </h4>
              <p className="text-sm font-bold text-[#123764]">
                {currentTierObj.impactText}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-[#111827]">
                {currentTierObj.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FDBD55]"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Amount option */}
            <div>
              <label className="block text-xs font-bold text-[#123764] uppercase mb-1">
                Or Enter Custom Support Amount ($ USD)
              </label>
              <input
                type="number"
                min="5"
                value={customAmount}
                onChange={(e) => setCustomAmount(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#123764] focus:outline-none text-sm font-bold text-[#123764]"
              />
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#123764] hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#FDBD55] text-[#123764] font-black text-xs px-5 py-2.5 rounded-full hover:bg-[#e0a33c] shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Proceed to Payment</span>
                <Heart className="w-3.5 h-3.5 fill-[#123764]" />
              </button>
            </div>

          </div>
        )}

        {step === 'payment' && (
          <form onSubmit={handleFinish} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            <div className="bg-[#FFF7E8] p-4 rounded-2xl border border-[#FDBD55] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#111827]/70">Selected Contribution:</span>
                <h4 className="font-extrabold text-[#123764] text-base">{currentTierObj.title}</h4>
              </div>
              <span className="text-2xl font-black text-[#123764] font-serif">${currentTierObj.amount}</span>
            </div>

            <div>
              <h4 className="text-xs font-black text-[#123764] uppercase tracking-wider mb-3">
                02. Choose Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`p-3 rounded-2xl border-2 text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'mpesa'
                      ? 'bg-[#123764] text-white border-[#FDBD55]'
                      : 'bg-white text-[#123764] border-gray-200'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-[#FDBD55]" />
                  <span>M-PESA (Kenya)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-2xl border-2 text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#123764] text-white border-[#FDBD55]'
                      : 'bg-white text-[#123764] border-gray-200'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#FDBD55]" />
                  <span>Card / PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-3 rounded-2xl border-2 text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'bank'
                      ? 'bg-[#123764] text-white border-[#FDBD55]'
                      : 'bg-white text-[#123764] border-gray-200'
                  }`}
                >
                  <Globe className="w-5 h-5 text-[#FDBD55]" />
                  <span>Bank Transfer</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'mpesa' && (
              <div className="bg-[#EDF3FA] p-4 rounded-2xl border border-[#123764]/20 space-y-2 text-xs text-[#123764]">
                <p className="font-extrabold text-sm">Official M-PESA Paybill Instructions:</p>
                <p>1. Go to M-PESA menu on your mobile phone</p>
                <p>2. Select <strong>Lipa Na M-PESA</strong> &gt; <strong>Paybill</strong></p>
                <p>3. Business Number: <strong className="text-base text-[#123764] font-mono">522522</strong> (KCB Bank)</p>
                <p>4. Account Number: <strong className="text-base text-[#123764] font-mono">1328490204</strong> (Kakuma Football Academy)</p>
                <p>5. Enter amount and PIN to authorize</p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#123764] uppercase mb-1">Name on Card</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123764] uppercase mb-1">Card Number</label>
                  <input type="text" required placeholder="4000 1234 5678 9010" className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 text-sm font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#123764] uppercase mb-1">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 text-sm font-mono" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123764] uppercase mb-1">CVC / CVC2</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 text-sm font-mono" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bg-[#EDF3FA] p-4 rounded-2xl border border-[#123764]/20 space-y-1.5 text-xs text-[#123764]">
                <p className="font-extrabold text-sm">International Bank Transfer Details:</p>
                <p><strong>Bank Name:</strong> KCB Bank Kenya Ltd</p>
                <p><strong>Account Name:</strong> Kakuma Football Academy CBO</p>
                <p><strong>Account Number:</strong> 1328490204</p>
                <p><strong>Branch:</strong> Kakuma Branch, Turkana West</p>
                <p><strong>SWIFT Code:</strong> KCBLKENX</p>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Secure Transaction. 100% directly funds Kakuma youth programs.</span>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('select')}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#123764] hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#FDBD55] text-[#123764] font-black text-xs px-5 py-2.5 rounded-full hover:bg-[#e0a33c] shadow-md transition-all"
              >
                Confirm Support
              </button>
            </div>

          </form>
        )}

        {step === 'success' && (
          <div className="p-8 text-center flex flex-col items-center bg-[#FFF7E8]">
            <div className="w-20 h-20 rounded-full bg-[#123764] text-[#FDBD55] flex items-center justify-center mb-4 border-4 border-[#FDBD55] shadow-lg animate-bounce">
              <Heart className="w-10 h-10 fill-[#FDBD55]" />
            </div>
            <h4 className="text-2xl font-black text-[#123764] font-serif">
              Thank You for Supporting Our Dream!
            </h4>
            <p className="text-sm text-[#111827] mt-2 max-w-md">
              Your donation directly empowers young athletes in Kakuma with football gear, mentorship, and educational supplies.
            </p>
            <div className="my-6 p-4 bg-white rounded-2xl border border-[#FDBD55] text-left text-xs text-[#123764] space-y-1 w-full max-w-md">
              <p><strong>Receipt No:</strong> KFA-DON-{(Math.random() * 89999 + 10000).toFixed(0)}</p>
              <p><strong>Organization:</strong> Kakuma Football Academy (CBO)</p>
              <p><strong>Motto:</strong> Nurturing Dreams</p>
            </div>
            <button
              onClick={handleClose}
              className="bg-[#123764] text-[#FDBD55] font-black text-sm px-8 py-3 rounded-full hover:bg-[#0c2545] transition-colors border-2 border-[#FDBD55]"
            >
              Return to Website
            </button>
          </div>
        )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
