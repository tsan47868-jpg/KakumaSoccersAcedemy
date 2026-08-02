import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingAnimationProps {
  onComplete?: () => void;
  isOverlay?: boolean;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  onComplete,
  isOverlay = false,
}) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Step 1: Navy outer circle appears (0ms - 300ms)
    const t1 = setTimeout(() => setStep(2), 300);  // Gold centre fades in
    const t2 = setTimeout(() => setStep(3), 600);  // Football rolls toward boot
    const t3 = setTimeout(() => setStep(4), 900);  // White star appears
    const t4 = setTimeout(() => setStep(5), 1200); // Words "Nurturing Dreams" fade upward
    const t5 = setTimeout(() => {
      setStep(6);
      if (onComplete) {
        onComplete();
      }
    }, 1800); // Complete animation under 2 seconds

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        className={`${
          isOverlay ? 'fixed inset-0 z-50' : 'fixed inset-0 z-50'
        } flex flex-col items-center justify-center bg-[#EDF3FA] text-[#123764]`}
      >
        <div className="relative flex flex-col items-center justify-center p-8">
          {/* Main Animated Badge SVG */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id="loadTopTextPath" d="M 100,250 A 150,150 0 0,1 400,250" fill="none" />
                <path id="loadBottomTextPath" d="M 80,250 A 170,170 0 0,0 420,250" fill="none" />
              </defs>

              {/* STEP 1: Navy Outer Circle Appears */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0, opacity: step >= 1 ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <circle cx="250" cy="250" r="235" fill="#123764" stroke="#FDBD55" strokeWidth="6" />
                {/* Year Badges */}
                <rect x="35" y="230" width="70" height="40" rx="6" fill="#123764" stroke="#FDBD55" strokeWidth="3" />
                <text x="70" y="257" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="Impact, sans-serif" textAnchor="middle">20</text>
                <rect x="395" y="230" width="70" height="40" rx="6" fill="#123764" stroke="#FDBD55" strokeWidth="3" />
                <text x="430" y="257" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="Impact, sans-serif" textAnchor="middle">24</text>
                
                {/* Arc Texts */}
                <text fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="Impact, sans-serif" letterSpacing="12">
                  <textPath href="#loadTopTextPath" startOffset="50%" textAnchor="middle">KAKUMA</textPath>
                </text>
                <text fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="Impact, sans-serif" letterSpacing="6">
                  <textPath href="#loadBottomTextPath" startOffset="50%" textAnchor="middle">SOCCER ACADEMY</textPath>
                </text>
              </motion.g>

              {/* STEP 2: Gold Centre Fades In */}
              <motion.circle
                cx="250"
                cy="250"
                r="150"
                fill="#FDBD55"
                stroke="#123764"
                strokeWidth="8"
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: step >= 2 ? 1 : 0.2, opacity: step >= 2 ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'backOut' }}
              />

              {/* STEP 3: Football Rolls Toward Boot */}
              {/* Football Boot */}
              <motion.g
                id="loaderBoot"
                transform="translate(240, 200)"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M 60,10 C 70,30 65,60 55,75 L 45,95 C 40,105 50,115 70,115 C 90,115 105,95 108,80 C 112,65 100,50 90,45 L 75,20 Z"
                  fill="#FDBD55"
                  stroke="#123764"
                  strokeWidth="5"
                />
                <path d="M 60,10 Q 70,0 80,15 L 75,20 Z" fill="#FFFFFF" stroke="#123764" strokeWidth="4" />
                <path d="M 45,95 C 50,118 75,118 108,80" fill="none" stroke="#123764" strokeWidth="6" />
                <circle cx="50" cy="116" r="4" fill="#123764" />
                <circle cx="65" cy="120" r="4" fill="#123764" />
                <circle cx="82" cy="116" r="4" fill="#123764" />
                <path d="M 58,40 Q 66,45 74,40" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
                <path d="M 54,55 Q 64,60 72,55" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
              </motion.g>

              {/* Football Rolling In */}
              <motion.g
                id="loaderBall"
                initial={{ x: 100, y: 260, rotate: -180, opacity: 0 }}
                animate={
                  step >= 3
                    ? { x: 190, y: 260, rotate: 0, opacity: 1 }
                    : { x: 100, y: 260, rotate: -180, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <circle cx="0" cy="0" r="48" fill="#FFFFFF" stroke="#123764" strokeWidth="5" />
                <polygon points="0,-18 16,-5 10,15 -10,15 -16,-5" fill="#123764" />
                <line x1="0" y1="-18" x2="0" y2="-48" stroke="#123764" strokeWidth="4" />
                <line x1="16" y1="-5" x2="40" y2="-25" stroke="#123764" strokeWidth="4" />
                <line x1="10" y1="15" x2="33" y2="33" stroke="#123764" strokeWidth="4" />
                <line x1="-10" y1="15" x2="-33" y2="33" stroke="#123764" strokeWidth="4" />
                <line x1="-16" y1="-5" x2="-40" y2="-25" stroke="#123764" strokeWidth="4" />
              </motion.g>

              {/* STEP 4: White Star Appears */}
              <motion.polygon
                points="250,120 256,138 275,138 260,149 265,167 250,156 235,167 240,149 225,138 244,138"
                fill="#FFFFFF"
                stroke="#123764"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{
                  scale: step >= 4 ? 1 : 0,
                  opacity: step >= 4 ? 1 : 0,
                  rotate: step >= 4 ? 0 : -45,
                }}
                transition={{ duration: 0.25, ease: 'backOut' }}
                style={{ transformOrigin: '250px 145px' }}
              />
            </svg>
          </div>

          {/* STEP 5: Words "Nurturing Dreams" Fade Upward */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: step >= 5 ? 0 : 20, opacity: step >= 5 ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-6 flex flex-col items-center text-center"
          >
            <span className="text-xl sm:text-2xl font-black text-[#123764] tracking-widest uppercase font-serif">
              NURTURING DREAMS
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#123764]/80 tracking-wider mt-1">
              Kakuma Football Academy • CBO
            </span>
          </motion.div>

          {/* Subtle Loading Progress Bar */}
          <div className="w-48 h-1.5 bg-[#123764]/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-[#FDBD55]"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
