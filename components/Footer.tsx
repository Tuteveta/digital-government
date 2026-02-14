'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/png-emblem.png" alt="Digital Government Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">Digital Government</span>
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              Digital Transformation Office - Leading PNG's digital government initiatives 
              to improve service delivery and promote innovation with integrity.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/infrastructure" className="text-gray-300 hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/digital-services" className="text-gray-300 hover:text-white transition-colors">Digital Services</Link></li>
              <li><Link href="/standards-compliance" className="text-gray-300 hover:text-white transition-colors">Standards & Compliance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@digitalgov.pg</li>
              <li>Phone: +675 XXX XXXX</li>
              <li>Address: Port Moresby, PNG</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Digital Transformation Office. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
