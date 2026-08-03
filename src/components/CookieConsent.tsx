import React, { useEffect, useState } from 'react';

const CONSENT_KEY = 'kakuma-cookie-consent';
const COOKIE_NAME = 'kakuma_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setIsVisible(false);
      return;
    }

    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));

    if (cookieValue) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, []);

  const saveConsent = (value: 'accepted' | 'declined') => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(CONSENT_KEY, value);
    document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[60] w-[min(92vw,760px)] -translate-x-1/2 rounded-2xl border border-[#FDBD55]/40 bg-[#071D3B] p-4 text-white shadow-2xl sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FDBD55]">
            Cookie Notice
          </p>
          <p className="text-sm leading-relaxed text-white/90">
            We use cookies to improve your browsing experience and remember your choices on this site.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <button
            onClick={() => saveConsent('declined')}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Decline
          </button>
          <button
            onClick={() => saveConsent('accepted')}
            className="rounded-full bg-[#FDBD55] px-4 py-2 text-sm font-black text-[#123764] transition hover:bg-[#e0a33c]"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
