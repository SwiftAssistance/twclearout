import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, BarChart, Shield, Trash2 } from 'lucide-react';

const CookieUsage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Cookie Policy | Total Waste Clearout - Website Cookie Information</title>
        <meta name="description" content="Transparent cookie policy for Total Waste Clearout. Learn what cookies we use, why we use them, and how to manage your cookie preferences online." />
        <meta name="keywords" content="cookie policy, website cookies, privacy settings, waste removal berkshire, Reading, Slough, Guildford, Surrey cookies" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/cookie-usage/" />
        <meta property="og:title" content="Cookie Policy | Total Waste Clearout" />
        <meta property="og:description" content="Learn about cookies used on our waste removal service website and how to manage your preferences." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/cookie-usage" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <Cookie size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Cookie Usage
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Transparency about cookies and tracking technologies used on our website. Learn what we collect, why, and how to manage your preferences.
          </p>
          <div className="mt-6">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg inline-block">
              <span className="text-white/60 text-xs font-black uppercase tracking-wider">Last Updated:</span>
              <span className="text-white font-black ml-2">January 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* What Are Cookies */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Cookie size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">What Are Cookies?</h2>
            </div>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0]">
              <p className="text-slate-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They help the website remember information about your visit, making your next visit easier and the site more useful to you.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and deliver personalized content. This Cookie Usage Policy explains what cookies we use and why.
              </p>
            </div>
          </section>

          {/* Types of Cookies We Use */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Types of Cookies We Use</h2>

            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden shadow-[8px_8px_0px_#e2e8f0]">
                <div className="bg-[#16a34a] p-6 flex items-center gap-4">
                  <Shield size={32} className="text-white" />
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">Essential Cookies</h3>
                    <p className="text-white/80 font-bold">Required - Cannot be disabled</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">Examples:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Session cookies:</strong> Keep you logged in as you navigate pages</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Security cookies:</strong> Authenticate users and prevent fraudulent use</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Cookie consent:</strong> Remember your cookie preferences</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden shadow-[8px_8px_0px_#e2e8f0]">
                <div className="bg-[#064e3b] p-6 flex items-center gap-4">
                  <BarChart size={32} className="text-[#4ade80]" />
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">Analytics & Performance Cookies</h3>
                    <p className="text-white/80 font-bold">Optional - Help us improve</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often and if visitors receive error messages. All information is aggregated and anonymous.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">What we track:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Page views:</strong> Which pages are most popular</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>User journey:</strong> How visitors navigate through the site</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Device & browser:</strong> Technical information to optimize display</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Time on site:</strong> Engagement metrics to improve content</span></li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-[#4ade80]/10 border-l-4 border-[#4ade80] p-4">
                    <p className="text-slate-700"><strong>Note:</strong> We may use Google Analytics. Data is anonymized and used solely for improving our website experience.</p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden shadow-[8px_8px_0px_#e2e8f0]">
                <div className="bg-slate-700 p-6 flex items-center gap-4">
                  <Settings size={32} className="text-[#4ade80]" />
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">Functional Cookies</h3>
                    <p className="text-white/80 font-bold">Optional - Enhance experience</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your location or language) and provide enhanced, more personalized features.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">Examples:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Location:</strong> Remember your service area (e.g., Reading, Guildford)</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Preferences:</strong> Save form data to make future quote requests easier</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Chat support:</strong> Enable live chat functionality if used</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden shadow-[8px_8px_0px_#e2e8f0]">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 flex items-center gap-4">
                  <BarChart size={32} className="text-white" />
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">Marketing & Advertising Cookies</h3>
                    <p className="text-white/80 font-bold">Optional - Requires consent</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    These cookies track your online activity to help us deliver more relevant advertising and limit the number of times you see an ad. They may be set by us or third-party partners.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-bold text-slate-900 mb-2">Used for:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Retargeting:</strong> Show relevant ads to people who visited our site</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Social media:</strong> Track conversions from social media campaigns</span></li>
                      <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span><strong>Interest-based ads:</strong> Deliver content relevant to your interests</span></li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-4">
                    <p className="text-slate-700"><strong>Important:</strong> We only use marketing cookies with your explicit consent. You can withdraw consent at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Third-Party Cookies</h2>
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-4 border-slate-900 rounded-xl p-8">
              <p className="text-slate-700 leading-relaxed mb-6">
                We may use third-party services that set their own cookies. These services include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <h3 className="font-black uppercase text-slate-900 mb-2">Google Analytics</h3>
                  <p className="text-slate-700 text-sm">Website analytics and performance tracking</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <h3 className="font-black uppercase text-slate-900 mb-2">Social Media Platforms</h3>
                  <p className="text-slate-700 text-sm">Facebook, Instagram, LinkedIn integration</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <h3 className="font-black uppercase text-slate-900 mb-2">Payment Processors</h3>
                  <p className="text-slate-700 text-sm">Secure payment handling (if applicable)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <h3 className="font-black uppercase text-slate-900 mb-2">Communication Tools</h3>
                  <p className="text-slate-700 text-sm">Email services and chat widgets</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-6 italic">
                These third parties have their own privacy policies. We recommend reviewing them to understand how they use cookies.
              </p>
            </div>
          </section>

          {/* How to Manage Cookies */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Trash2 size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">How to Manage Cookies</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
                <h3 className="text-2xl font-black uppercase mb-4 text-[#4ade80]">Browser Settings</h3>
                <p className="mb-4 leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span>View and delete existing cookies</span></li>
                  <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span>Block third-party cookies</span></li>
                  <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span>Block all cookies from specific sites</span></li>
                  <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span>Delete all cookies when closing the browser</span></li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
                  { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                  { browser: 'Safari', link: 'https://support.apple.com/en-gb/guide/safari/sfri11471/mac' },
                  { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
                ].map(item => (
                  <a key={item.browser} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-slate-900 rounded-xl p-6 hover:bg-[#4ade80]/10 transition-colors">
                    <h3 className="font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                      {item.browser}
                      <span className="text-[#16a34a]">→</span>
                    </h3>
                    <p className="text-slate-700 text-sm">Instructions for managing cookies</p>
                  </a>
                ))}
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <p className="font-bold text-slate-900 mb-2">⚠️ Important Note:</p>
                <p className="text-slate-700">
                  Blocking or deleting cookies may affect your experience on our website. Some features may not work properly if cookies are disabled, particularly essential cookies required for basic functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Cookie Duration</h2>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-black uppercase text-slate-900 mb-3 text-lg">Session Cookies</h3>
                  <p className="text-slate-700 mb-3">Temporary cookies that are deleted when you close your browser</p>
                  <div className="text-[#16a34a] font-black text-sm">DURATION: Until browser closes</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-black uppercase text-slate-900 mb-3 text-lg">Persistent Cookies</h3>
                  <p className="text-slate-700 mb-3">Remain on your device for a set period or until manually deleted</p>
                  <div className="text-[#16a34a] font-black text-sm">DURATION: Varies (typically 30 days to 2 years)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Updates to This Policy</h2>
            <div className="bg-[#4ade80]/10 border-l-4 border-[#4ade80] p-6">
              <p className="text-slate-700 leading-relaxed">
                We may update this Cookie Usage Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Questions?</h2>
            <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
              <p className="mb-6 font-bold italic text-lg">If you have any questions about our use of cookies, please contact us:</p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:privacy@totalwasteclearout.co.uk" className="text-[#4ade80] font-black text-lg hover:underline">privacy@totalwasteclearout.co.uk</a>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:07769844298" className="text-[#4ade80] font-black text-lg hover:underline">07769 844298</a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  For more information about how we handle your personal data, please see our <Link to="/privacy-policy" className="text-[#4ade80] font-bold hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieUsage;
