import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, UserCheck, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Privacy Policy | Total Waste Clearout - GDPR Compliant Berkshire</title>
        <meta name="description" content="Read our GDPR-compliant privacy policy. Learn how Total Waste Clearout protects your personal data for waste removal services in Berkshire & Surrey." />
        <meta name="keywords" content="privacy policy, GDPR, data protection, waste removal berkshire, rubbish clearance privacy, Reading, Slough, Guildford, Surrey" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/privacy-policy/" />
        <meta property="og:title" content="Privacy Policy | Total Waste Clearout" />
        <meta property="og:description" content="GDPR-compliant privacy policy for Total Waste Clearout, Berkshire's trusted waste removal service." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <ShieldCheck size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Privacy Policy
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Your privacy matters. See how we collect, use, and protect your personal data in full compliance with UK GDPR and Data Protection Act 2018.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white/60 text-xs font-black uppercase tracking-wider">Last Updated:</span>
              <span className="text-white font-black ml-2">January 2026</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white/60 text-xs font-black uppercase tracking-wider">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Quick Navigation */}
          <div className="bg-slate-100 border-4 border-slate-900 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-black uppercase mb-6 text-slate-900">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Who We Are',
                'Information We Collect',
                'How We Use Your Data',
                'Legal Basis for Processing',
                'Data Retention',
                'Your Rights',
                'Cookies & Tracking',
                'Contact Us'
              ].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#16a34a] font-bold hover:text-[#064e3b] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Section: Who We Are */}
          <section id="who-we-are" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">Who We Are</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Total Waste Clearout Ltd</strong> is a registered waste management company operating throughout Berkshire and Surrey. We are committed to protecting and respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <div className="bg-[#4ade80]/10 border-l-4 border-[#4ade80] p-6 my-6">
                <p className="font-bold text-slate-900 mb-2">Data Controller Details:</p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Company:</strong> Total Waste Clearout Ltd</li>
                  <li><strong>Registration:</strong> Registered in England & Wales</li>
                  <li><strong>Email:</strong> <a href="mailto:privacy@totalwasteclearout.co.uk" className="text-[#16a34a] hover:underline">privacy@totalwasteclearout.co.uk</a></li>
                  <li><strong>Phone:</strong> <a href="tel:07769844298" className="text-[#16a34a] hover:underline">07769 844298</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Information We Collect */}
          <section id="information-we-collect" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Eye size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[8px_8px_0px_#e2e8f0]">
                <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Personal Information You Provide</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Contact Details:</strong> Name, phone number, email address, postal address</span></li>
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Service Information:</strong> Property details, waste type, collection dates and times</span></li>
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Payment Information:</strong> Billing address (card details processed securely by our payment processor)</span></li>
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Communication Records:</strong> Emails, phone calls, text messages, and other correspondence</span></li>
                </ul>
              </div>

              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[8px_8px_0px_#e2e8f0]">
                <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Automatically Collected Information</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Website Usage:</strong> IP address, browser type, device information, pages visited</span></li>
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Cookies:</strong> See our <Link to="/cookie-usage" className="text-[#16a34a] font-bold hover:underline">Cookie Usage Policy</Link> for details</span></li>
                  <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Location Data:</strong> Approximate location based on IP address for service area verification</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: How We Use Your Data */}
          <section id="how-we-use-your-data" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Lock size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">How We Use Your Data</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">We process your personal data for the following purposes:</p>
              <div className="grid gap-4">
                {[
                  { title: 'Service Delivery', desc: 'To provide waste removal and clearance services, schedule collections, and fulfill our contractual obligations' },
                  { title: 'Customer Communication', desc: 'To respond to inquiries, provide quotes, send appointment reminders, and update you on service status' },
                  { title: 'Payment Processing', desc: 'To process payments, issue invoices, and maintain financial records as required by law' },
                  { title: 'Legal Compliance', desc: 'To comply with waste carrier licensing, environmental regulations, and other legal obligations' },
                  { title: 'Service Improvement', desc: 'To analyze usage patterns, improve our website, and enhance customer experience' },
                  { title: 'Marketing', desc: 'To send promotional offers and updates (only with your explicit consent, which you can withdraw at any time)' }
                ].map(item => (
                  <div key={item.title} className="bg-slate-50 border-l-4 border-[#4ade80] p-6">
                    <h3 className="font-black uppercase text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Legal Basis */}
          <section id="legal-basis-for-processing" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Legal Basis for Processing</h2>
            <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
              <p className="mb-6 font-bold italic text-lg">We process your personal data under the following legal bases:</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span><strong>Contract Performance:</strong> Processing necessary to fulfill our waste removal service contract with you</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span><strong>Legal Obligation:</strong> Compliance with waste carrier regulations, tax laws, and environmental legislation</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span><strong>Legitimate Interest:</strong> Business operations, fraud prevention, and service improvement</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black">✓</span><span><strong>Consent:</strong> Marketing communications (you can opt out at any time)</span></li>
              </ul>
            </div>
          </section>

          {/* Section: Data Retention */}
          <section id="data-retention" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Data Retention</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-3">Active Customers</h3>
                <p className="text-slate-700">Duration of service relationship plus 6 years (in line with UK tax requirements)</p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-3">Marketing Data</h3>
                <p className="text-slate-700">Until consent is withdrawn or 2 years of inactivity</p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-3">Website Analytics</h3>
                <p className="text-slate-700">Anonymized data retained for 26 months</p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-3">Legal Records</h3>
                <p className="text-slate-700">As required by applicable law (minimum 6 years for financial records)</p>
              </div>
            </div>
          </section>

          {/* Section: Your Rights */}
          <section id="your-rights" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Your Rights</h2>
            <div className="bg-gradient-to-r from-[#4ade80]/20 to-[#16a34a]/20 border-4 border-slate-900 rounded-xl p-8">
              <p className="font-bold text-slate-900 mb-6 text-lg">Under UK GDPR, you have the following rights:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { right: 'Right of Access', desc: 'Request a copy of your personal data we hold' },
                  { right: 'Right to Rectification', desc: 'Correct inaccurate or incomplete data' },
                  { right: 'Right to Erasure', desc: 'Request deletion of your data (subject to legal obligations)' },
                  { right: 'Right to Restrict Processing', desc: 'Limit how we use your data' },
                  { right: 'Right to Data Portability', desc: 'Receive your data in a structured, commonly used format' },
                  { right: 'Right to Object', desc: 'Object to processing based on legitimate interests or direct marketing' },
                  { right: 'Right to Withdraw Consent', desc: 'Withdraw consent for marketing at any time' },
                  { right: 'Right to Lodge a Complaint', desc: 'Complain to the ICO (Information Commissioner\'s Office)' }
                ].map(item => (
                  <div key={item.right} className="bg-white rounded-lg p-4">
                    <h3 className="font-black text-slate-900 mb-2 text-sm uppercase">{item.right}</h3>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Cookies */}
          <section id="cookies-&-tracking" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Cookies & Tracking</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We use cookies and similar technologies to enhance your browsing experience. For detailed information about the cookies we use and how to manage them, please see our <Link to="/cookie-usage" className="text-[#16a34a] font-bold hover:underline">Cookie Usage Policy</Link>.
            </p>
          </section>

          {/* Section: Contact */}
          <section id="contact-us" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Contact Us</h2>
            <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
              <p className="mb-6 font-bold italic text-lg">For any questions about this Privacy Policy or to exercise your rights:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-[#4ade80]" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Email</p>
                    <a href="mailto:privacy@totalwasteclearout.co.uk" className="text-[#4ade80] font-black text-lg hover:underline">privacy@totalwasteclearout.co.uk</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-[#4ade80]" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Phone</p>
                    <a href="tel:07769844298" className="text-[#4ade80] font-black text-lg hover:underline">07769 844298</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  <strong>ICO Registration:</strong> We are registered with the Information Commissioner's Office (ICO).
                  You have the right to lodge a complaint with the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] hover:underline">ico.org.uk</a>
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

export default PrivacyPolicy;
