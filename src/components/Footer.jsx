import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-10 pb-24 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Total Waste Clearout</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fast, licensed waste removal across Berkshire &amp; Surrey.
              Same day collection available.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-gray-400">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:07XXXXXXXXX"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} />
                  07XXX XXXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@totalwasteclearout.co.uk"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} />
                  info@totalwasteclearout.co.uk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-gray-400">
              Credentials
            </h3>
            <div className="flex items-start gap-2 text-gray-300 text-sm">
              <ShieldCheck size={16} className="text-brand-green-light shrink-0 mt-0.5" />
              <span>Licensed Waste Carrier &mdash; Reg No: CBDU XXXXXX</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-gray-400">
              Legal
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-usage" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; 2026 Total Waste Clearout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
