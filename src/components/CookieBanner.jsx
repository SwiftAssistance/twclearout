import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ChevronDown, X } from 'lucide-react';

const STORAGE_KEY = 'twc_cookie_consent';

function readConsent() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch {
    return null;
  }
}

function saveConsent(prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, ts: Date.now() }));
  } catch {}
}

function applyConsent(prefs) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage:  prefs.analytics ? 'granted' : 'denied',
    ad_storage:         prefs.marketing ? 'granted' : 'denied',
    ad_user_data:       prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  });
}

const Toggle = ({ checked, onChange, id }) => (
  <button
    role="switch"
    aria-checked={checked}
    id={id}
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] ${checked ? 'bg-[#16a34a]' : 'bg-slate-200'}`}
  >
    <span className={`inline-block h-4 w-4 rounded-full bg-white border border-slate-300 shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
  </button>
);

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const saved = readConsent();
    if (!saved) {
      setVisible(true);
    } else {
      applyConsent(saved);
    }

    window.openCookiePreferences = () => {
      const current = readConsent();
      if (current) setPrefs({ analytics: !!current.analytics, marketing: !!current.marketing });
      setExpanded(true);
      setVisible(true);
    };

    return () => { delete window.openCookiePreferences; };
  }, []);

  const accept = useCallback(() => {
    const all = { analytics: true, marketing: true };
    saveConsent(all);
    applyConsent(all);
    setVisible(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const none = { analytics: false, marketing: false };
    saveConsent(none);
    applyConsent(none);
    setVisible(false);
  }, []);

  const saveCustom = useCallback(() => {
    saveConsent(prefs);
    applyConsent(prefs);
    setVisible(false);
  }, [prefs]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[2000] p-4 sm:p-6"
    >
      <div className="max-w-2xl mx-auto bg-[#064e3b] border-4 border-[#4ade80] shadow-[8px_8px_0px_#4ade80] rounded-2xl p-6 text-white">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4ade80] rounded-xl flex items-center justify-center shrink-0">
              <Cookie size={22} className="text-[#064e3b]" />
            </div>
            <h2 className="text-lg font-black uppercase italic leading-tight">Cookie Preferences</h2>
          </div>
          <button
            onClick={rejectNonEssential}
            aria-label="Close and use essential cookies only"
            className="text-white/40 hover:text-white transition-colors shrink-0 mt-0.5"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-white/80 text-sm font-bold leading-relaxed mb-5">
          We use cookies to improve your experience and measure how our site is used.
          Essential cookies keep the site working. Analytics and marketing cookies are
          optional and only set with your consent.{' '}
          <Link to="/cookie-usage/" className="text-[#4ade80] underline hover:text-white transition-colors">
            Cookie Policy
          </Link>
        </p>

        {/* Expandable details */}
        <div className="mb-5">
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center gap-2 text-[#4ade80] text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
            aria-expanded={expanded}
          >
            <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
            {expanded ? 'Hide' : 'Customise'} preferences
          </button>

          {expanded && (
            <div className="mt-4 space-y-4 border-t border-white/10 pt-4">

              {/* Essential */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-black text-sm uppercase italic">Essential</p>
                  <p className="text-white/60 text-xs font-bold mt-0.5">Required for the site to function. Always active.</p>
                </div>
                <div className="shrink-0 mt-0.5">
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-slate-600 bg-[#16a34a] cursor-not-allowed" aria-label="Essential cookies always on">
                    <span className="inline-block h-4 w-4 rounded-full bg-white border border-slate-300 shadow translate-x-5" />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <label htmlFor="toggle-analytics" className="cursor-pointer">
                  <p className="font-black text-sm uppercase italic">Analytics</p>
                  <p className="text-white/60 text-xs font-bold mt-0.5">Google Analytics 4 — anonymous usage data to improve the site.</p>
                </label>
                <div className="shrink-0 mt-0.5">
                  <Toggle
                    id="toggle-analytics"
                    checked={prefs.analytics}
                    onChange={v => setPrefs(p => ({ ...p, analytics: v }))}
                  />
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <label htmlFor="toggle-marketing" className="cursor-pointer">
                  <p className="font-black text-sm uppercase italic">Marketing</p>
                  <p className="text-white/60 text-xs font-bold mt-0.5">Google Ads conversion tracking for relevant advertising.</p>
                </label>
                <div className="shrink-0 mt-0.5">
                  <Toggle
                    id="toggle-marketing"
                    checked={prefs.marketing}
                    onChange={v => setPrefs(p => ({ ...p, marketing: v }))}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={accept}
            className="bg-[#4ade80] hover:bg-white text-slate-900 px-6 py-3 font-black uppercase italic tracking-wider text-sm transition-all rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            Accept All
          </button>

          {expanded ? (
            <button
              onClick={saveCustom}
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-3 font-black uppercase italic tracking-wider text-sm transition-all rounded-sm"
            >
              Save Preferences
            </button>
          ) : (
            <button
              onClick={rejectNonEssential}
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-3 font-black uppercase italic tracking-wider text-sm transition-all rounded-sm"
            >
              Essential Only
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
