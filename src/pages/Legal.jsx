import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText, AlertTriangle, ShieldCheck, CheckCircle } from 'lucide-react';

const Legal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Terms & Conditions | Total Waste Clearout - Service Agreement Berkshire</title>
        <meta name="description" content="Legal terms and conditions for Total Waste Clearout services. Licensed waste carrier operating in Reading, Slough, Guildford, and across Berkshire & Surrey." />
        <meta name="keywords" content="terms and conditions, waste removal terms, legal agreement, Reading waste clearance, Slough rubbish removal, Berkshire Surrey" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/legal/" />
        <meta property="og:title" content="Terms & Conditions | Total Waste Clearout" />
        <meta property="og:description" content="Legal terms governing waste removal and clearance services across Berkshire and Surrey." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/legal" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <Scale size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Legal terms governing the use of our waste removal services. Please read carefully before booking a clearance.
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
          {/* Important Notice */}
          <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} className="text-orange-500 shrink-0" />
              <div>
                <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Important Notice</h2>
                <p className="text-slate-700 leading-relaxed">
                  By booking our services, contacting us for a quote, or allowing us onto your property, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <FileText size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">Company Information</h2>
            </div>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0]">
              <ul className="space-y-3 text-slate-700 text-lg">
                <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Company Name:</strong> Total Waste Clearout Ltd</span></li>
                <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Registration:</strong> Registered in England & Wales</span></li>
                <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Registration Number:</strong> 09876543</span></li>
                <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Waste Carrier License:</strong> Fully licensed and registered with the Environment Agency</span></li>
                <li className="flex gap-3"><span className="text-[#16a34a] font-black">•</span><span><strong>Insurance:</strong> Public liability insurance up to £5,000,000</span></li>
              </ul>
            </div>
          </section>

          {/* Service Terms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Service Terms</h2>

            <div className="space-y-6">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-black uppercase text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[#16a34a]" />
                  1. Service Description
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="leading-relaxed">Total Waste Clearout Ltd provides waste removal and clearance services including but not limited to:</p>
                  <ul className="ml-6 space-y-2">
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Residential and commercial waste clearance</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>House, garage, and garden clearances</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>End of tenancy clearances</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Office and commercial site clearances</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Construction and trade waste removal</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-black uppercase text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[#16a34a]" />
                  2. Quotations & Pricing
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="leading-relaxed">All quotations are estimates based on the information provided by the customer. Final pricing may vary based on actual volume and type of waste.</p>
                  <div className="bg-[#4ade80]/10 border-l-4 border-[#4ade80] p-4 mt-4">
                    <p className="font-bold mb-2">Important Price Terms:</p>
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span>•</span><span>Quotes are valid for 7 days from issue</span></li>
                      <li className="flex gap-2"><span>•</span><span>Prices include loading and disposal fees unless otherwise stated</span></li>
                      <li className="flex gap-2"><span>•</span><span>Additional charges may apply for hazardous waste, asbestos, or items requiring special disposal</span></li>
                      <li className="flex gap-2"><span>•</span><span>Access issues (stairs, restricted parking) may incur additional charges</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-black uppercase text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[#16a34a]" />
                  3. Booking & Appointments
                </h3>
                <div className="space-y-3 text-slate-700">
                  <ul className="space-y-3">
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Bookings are confirmed upon receipt of deposit or full payment (as agreed)</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>We provide 1-2 hour arrival windows for scheduled appointments</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Same-day and emergency services are subject to availability</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>We reserve the right to reschedule due to weather, traffic, or operational issues</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-black uppercase text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[#16a34a]" />
                  4. Payment Terms
                </h3>
                <div className="space-y-3 text-slate-700">
                  <ul className="space-y-3">
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Payment is due upon completion of service unless otherwise agreed in writing</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>We accept cash, bank transfer, and card payments</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Invoices must be paid within 14 days of issue for account customers</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Late payment may incur interest charges at 8% above Bank of England base rate</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-black uppercase text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[#16a34a]" />
                  5. Cancellations & Refunds
                </h3>
                <div className="space-y-3 text-slate-700">
                  <p className="font-bold">Customer Cancellations:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2"><span>•</span><span><strong>More than 48 hours notice:</strong> Full refund of any deposit</span></li>
                    <li className="flex gap-2"><span>•</span><span><strong>24-48 hours notice:</strong> 50% cancellation fee</span></li>
                    <li className="flex gap-2"><span>•</span><span><strong>Less than 24 hours notice:</strong> Full charge applies</span></li>
                  </ul>
                  <p className="font-bold mt-4">Company Cancellations:</p>
                  <p>If we need to cancel, you will receive a full refund or rescheduling at no extra cost.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Responsibilities */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Customer Responsibilities</h2>
            <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
              <p className="mb-6 font-bold italic text-lg">By using our services, you agree to:</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Provide accurate information about the waste type, volume, and access conditions</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Ensure you have legal authority to dispose of all items (proof of ownership may be required)</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Inform us of any hazardous materials (asbestos, chemicals, batteries, etc.)</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Ensure safe access to the property and removal site</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Obtain necessary permissions for parking or access (if applicable)</span></li>
                <li className="flex gap-3"><span className="text-[#4ade80] font-black text-xl">✓</span><span className="leading-relaxed">Be present or provide site access during the scheduled collection</span></li>
              </ul>
            </div>
          </section>

          {/* Prohibited Items */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Prohibited Items</h2>
            <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle size={32} className="text-orange-500 shrink-0" />
                <p className="text-slate-700 leading-relaxed font-bold">
                  The following items cannot be accepted unless specifically agreed in advance with special arrangements:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Asbestos and asbestos-containing materials',
                  'Hazardous chemicals and solvents',
                  'Clinical waste and medical sharps',
                  'Radioactive materials',
                  'Explosive materials and ammunition',
                  'Gas cylinders (unless emptied and certified)',
                  'Vehicle batteries (lead acid)',
                  'Large quantities of liquid waste'
                ].map(item => (
                  <div key={item} className="flex gap-2 items-start">
                    <span className="text-orange-500 font-black text-xl">×</span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-orange-200">
                <p className="text-slate-700 text-sm">
                  <strong>Note:</strong> If prohibited items are discovered during collection, we reserve the right to refuse removal and charge a call-out fee. Please contact us if you're unsure about any items.
                </p>
              </div>
            </div>
          </section>

          {/* Liability & Insurance */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck size={32} className="text-[#16a34a]" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900">Liability & Insurance</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-4">Our Liability</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>We carry £5,000,000 public liability insurance</span></li>
                  <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>We take all reasonable care to avoid damage to your property</span></li>
                  <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Any damage caused by our negligence will be covered up to policy limits</span></li>
                  <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Claims must be reported within 48 hours with photographic evidence</span></li>
                </ul>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6">
                <h3 className="font-black uppercase text-slate-900 mb-4">Limitations</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">We are not liable for:</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2"><span>•</span><span>Pre-existing damage or structural weakness not reported to us</span></li>
                  <li className="flex gap-2"><span>•</span><span>Items removed at your specific instruction</span></li>
                  <li className="flex gap-2"><span>•</span><span>Indirect losses, lost profits, or consequential damages</span></li>
                  <li className="flex gap-2"><span>•</span><span>Delays caused by factors beyond our reasonable control</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Environmental Commitment */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Environmental Commitment</h2>
            <div className="bg-gradient-to-r from-[#4ade80]/20 to-[#16a34a]/20 border-4 border-slate-900 rounded-xl p-8">
              <p className="text-slate-700 leading-relaxed mb-6 font-bold text-lg">
                We are committed to environmentally responsible waste disposal and aim to recycle at least 94% of all waste we collect.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-4xl font-black text-[#16a34a] mb-2">94%</div>
                  <p className="text-slate-700 font-bold">Recycling Rate</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-4xl font-black text-[#16a34a] mb-2">100%</div>
                  <p className="text-slate-700 font-bold">Legal Compliance</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-4xl font-black text-[#16a34a] mb-2">0%</div>
                  <p className="text-slate-700 font-bold">To Landfill (where possible)</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-6">
                All waste is taken to licensed facilities and processed in accordance with environmental regulations. We provide waste transfer notes as legal proof of compliant disposal.
              </p>
            </div>
          </section>

          {/* Complaints & Disputes */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Complaints & Disputes</h2>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0]">
              <p className="text-slate-700 leading-relaxed mb-6">
                We strive for 100% customer satisfaction. If you're unhappy with our service:
              </p>
              <ol className="space-y-4 text-slate-700">
                <li className="flex gap-3"><span className="font-black text-[#16a34a]">1.</span><span><strong>Contact us immediately</strong> by phone or email</span></li>
                <li className="flex gap-3"><span className="font-black text-[#16a34a]">2.</span><span><strong>Provide details</strong> of the issue with photos if applicable</span></li>
                <li className="flex gap-3"><span className="font-black text-[#16a34a]">3.</span><span><strong>We will investigate</strong> and respond within 5 working days</span></li>
                <li className="flex gap-3"><span className="font-black text-[#16a34a]">4.</span><span><strong>Resolution</strong> will be offered (refund, discount, or corrective action)</span></li>
              </ol>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-700 text-sm">
                  If a dispute cannot be resolved directly, it will be subject to the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Governing Law</h2>
            <div className="bg-slate-100 border-l-4 border-[#16a34a] p-6">
              <p className="text-slate-700 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Changes to These Terms</h2>
            <div className="bg-[#4ade80]/10 border-l-4 border-[#4ade80] p-6">
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Contact Information</h2>
            <div className="bg-[#064e3b] text-white border-4 border-slate-900 rounded-xl p-8">
              <p className="mb-6 font-bold italic text-lg">For questions about these Terms and Conditions:</p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:07769844298" className="text-[#4ade80] font-black text-2xl hover:underline">07769 844298</a>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@totalwasteclearout.co.uk" className="text-[#4ade80] font-black text-lg hover:underline">info@totalwasteclearout.co.uk</a>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Operating Hours</p>
                  <p className="text-white font-black">Monday - Friday: 7am - 7pm</p>
                  <p className="text-white font-black">Saturday: 8am - 5pm</p>
                </div>
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

export default Legal;
