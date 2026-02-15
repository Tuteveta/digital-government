'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Building2, Lock } from 'lucide-react';

export function PortalHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-primary">
      {/* Portal Identification Bar */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 py-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-medium">
              Secure PNG Government Portal - Member Access Only
            </span>
          </div>
        </div>
      </div>

      {/* Portal Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/png-emblem.png"
                  alt="PNG Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  PNG Digital Government Portal
                </h1>
                <p className="text-xs text-gray-600">
                  Secure Member Access
                </p>
              </div>
            </div>

            {/* Portal Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-700">
                Secure Connection
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function PortalFooter() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            © 2026 PNG Digital Government. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Secure Portal v2.0</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
