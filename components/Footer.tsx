'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Red accent top bar */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/png-emblem.png"
                  alt="PNG National Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold block leading-tight">Digital Government</span>
                <span className="text-xs text-blue-300">Papua New Guinea</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed max-w-sm mb-6">
              The Digital Transformation Office leads PNG&apos;s digital government initiatives
              to improve service delivery and promote innovation with integrity.
            </p>
            <div className="flex flex-col gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg w-fit">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs text-blue-200">All systems operational</span>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg w-fit transition-colors group"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-300 group-hover:text-white transition-colors" />
                <span className="text-xs text-blue-300 font-medium group-hover:text-white transition-colors">Officer Portal</span>
              </Link>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home',                   href: '/' },
                { label: 'About Us',               href: '/about' },
                { label: 'Infrastructure',         href: '/infrastructure' },
                { label: 'Digital Services',       href: '/digital-services' },
                { label: 'Standards & Compliance', href: '/standards-compliance' },
                { label: 'News & Updates',         href: '/news' },
                { label: 'Contact Us',             href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@digitalgov.gov.pg" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5">General Enquiries</p>
                    <span className="text-sm text-blue-300 group-hover:text-white transition-colors">
                      info@digitalgov.gov.pg
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+6751801234" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5">Phone</p>
                    <span className="text-sm text-blue-300 group-hover:text-white transition-colors">
                      +675 180-1234
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-blue-400 mb-0.5">Address</p>
                  <span className="text-sm text-blue-300 leading-relaxed">
                    Level 5, IPA Haus<br />
                    Waigani Drive, Port Moresby<br />
                    <span className="text-xs text-blue-400">NCD, Papua New Guinea</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy',         href: '/privacy-policy' },
                { label: 'Terms of Service',        href: '/terms-of-service' },
                { label: 'Accessibility',           href: '/accessibility' },
                { label: 'Standards & Compliance',  href: '/standards-compliance' },
                { label: 'Data Governance',         href: '/standards-compliance/data-governance' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-400">
            © {new Date().getFullYear()} Digital Transformation Office, Papua New Guinea Government. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-blue-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-blue-600 text-xs">•</span>
            <Link href="/terms-of-service" className="text-xs text-blue-400 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-blue-600 text-xs">•</span>
            <Link href="/accessibility" className="text-xs text-blue-400 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
