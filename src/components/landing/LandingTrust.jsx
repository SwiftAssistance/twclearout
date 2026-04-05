import React from 'react';
import { ShieldCheck, BadgeCheck, Star } from 'lucide-react';

const LandingTrust = () => (
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        Trust &amp; Credentials
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Credentials badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-3">
            <BadgeCheck size={24} className="text-[#16a34a] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900">Licensed Waste Carrier</p>
              <p className="text-xs text-slate-500 mt-1">Environment Agency registered — Licence No: CBDU XXXXXX</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-3">
            <ShieldCheck size={24} className="text-[#16a34a] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900">Fully Insured</p>
              <p className="text-xs text-slate-500 mt-1">Public liability coverage for every job</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-3">
            <Star size={24} className="text-[#16a34a] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900">5★ Google Reviews</p>
              <p className="text-xs text-slate-500 mt-1">Trusted by homeowners and businesses</p>
            </div>
          </div>
        </div>

        {/* Google reviews placeholder */}
        <div id="google-reviews" className="bg-white rounded-xl border border-slate-200 p-6 text-center min-h-[100px] flex items-center justify-center">
          <p className="text-sm text-slate-400">Google Reviews widget will appear here</p>
        </div>

        {/* Before & After photos */}
        <div>
          <h3 className="font-bold text-lg text-slate-900 mb-4 text-center">Before &amp; After</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="space-y-2">
                <div className="aspect-[4/3] bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-semibold">Before</span>
                </div>
                <div className="aspect-[4/3] bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-semibold">After</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where does your waste go */}
        <div className="bg-[#064e3b] rounded-xl p-6 sm:p-8 text-white">
          <h3 className="font-bold text-lg mb-3">Where Does Your Waste Go?</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            We take your waste to licensed transfer stations. We recycle and donate wherever possible.
            You receive a waste transfer note for your records. We never fly-tip — guaranteed.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LandingTrust;
