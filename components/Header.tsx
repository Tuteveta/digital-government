'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu, X, ChevronDown, ChevronRight, Lock, Building2,
  Search as SearchIcon, Users, Server, Globe, Shield,
  Newspaper, MessageSquare,
} from 'lucide-react';
import Image from 'next/image';

const resourcesMenu = [
  {
    name: 'About Us',
    icon: Users,
    href: '/about',
    description: 'Learn about our transformation journey',
    subsections: [
      { name: 'Our Journey',       href: '/our-journey' },
      { name: 'Our Achievements',  href: '/our-achievements' },
    ],
  },
  {
    name: 'Infrastructure',
    icon: Server,
    href: '/infrastructure',
    description: 'Digital infrastructure and technology stack',
    subsections: [
      { name: 'Government Stack',           href: '/infrastructure/government-stack' },
      { name: 'Government Private Network', href: '/infrastructure/government-private-network' },
      { name: 'Government Cloud',           href: '/infrastructure/government-cloud' },
      { name: 'Cyber Security',             href: '/infrastructure/cyber-security' },
      { name: 'Government Portal',          href: '/infrastructure/government-portal' },
    ],
  },
  {
    name: 'Digital Services',
    icon: Globe,
    href: '/digital-services',
    description: 'Comprehensive digital services for government',
  },
  {
    name: 'Standards & Compliance',
    icon: Shield,
    href: '/standards-compliance',
    description: 'Quality and compliance frameworks',
    subsections: [
      { name: 'Compliance',       href: '/standards-compliance/compliance' },
      { name: 'Service Standards', href: '/standards-compliance/service-standards' },
      { name: 'Data Governance',  href: '/standards-compliance/data-governance' },
      { name: 'DTO',              href: '/standards-compliance/dto' },
    ],
  },
  {
    name: 'News',
    icon: Newspaper,
    href: '/news',
    description: 'Latest updates and announcements',
  },
  {
    name: 'Contact Us',
    icon: MessageSquare,
    href: '/contact',
    description: 'Get in touch with us',
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);
  const [securityInfoOpen, setSecurityInfoOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen]         = useState(false);
  const [searchQuery, setSearchQuery]           = useState('');
  const [searchOpen, setSearchOpen]             = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const closeMegaMenu = () => setMegaMenuOpen(false);

  const openPortal = () => window.open('/login', '_blank');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      {/* ── Top identification bar ──────────────────────────────────────── */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-4 flex-shrink-0">
                <Image
                  src="/png-flag.png"
                  alt="PNG Flag"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xs text-gray-700">
                An Official Papua New Guinea Government Website
              </span>
            </div>

            <button
              onClick={() => setSecurityInfoOpen(!securityInfoOpen)}
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              How to identify
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${securityInfoOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Security info dropdown */}
          {securityInfoOpen && (
            <div className="border-t border-gray-300 py-6 pb-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Building2 className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Official website links end with .gov.pg
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Government agencies communicate via .gov.pg websites (e.g. go.gov.pg/open).{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">
                        Trusted websites
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Lock className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Secure websites use HTTPS
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Look for a <span className="font-semibold">lock (<Lock className="h-3 w-3 inline-block mb-0.5" />)</span> or https:// as an added precaution.
                      Share sensitive information only on official, secure websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Main header ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Logo + Navigation */}
            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                <div className="relative w-12 h-12">
                  <Image
                    src="/png-emblem.png"
                    alt="PNG National Emblem"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-base font-bold tracking-tight text-gray-900 leading-tight">
                    Digital Government
                  </h1>
                  <p className="text-xs text-gray-500">Papua New Guinea</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <Link
                  href="/"
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                >
                  Home
                </Link>

                {/* Our Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={closeMegaMenu}
                >
                  <button className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200">
                    Our Resources
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {megaMenuOpen && (
                    <div className="absolute left-0 right-0 h-4 bg-transparent" />
                  )}
                </div>

                {/* Officer Login */}
                <button
                  onClick={openPortal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 ml-1 text-sm font-semibold bg-primary text-white hover:bg-primary/90 rounded-md transition-all duration-200"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Officer Login
                </button>
              </nav>
            </div>

            {/* Right: Search + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop search */}
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:bg-gray-100 focus-within:border-primary focus-within:bg-white transition-colors"
              >
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-44 text-gray-700 placeholder-gray-500"
                />
                <button type="submit" aria-label="Search">
                  <SearchIcon className="w-4 h-4 text-gray-500" />
                </button>
              </form>

              {/* Mobile search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle search"
              >
                <SearchIcon className="w-5 h-5 text-gray-600" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {searchOpen && (
            <div className="md:hidden mt-3">
              <form onSubmit={handleSearch}>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <SearchIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                    autoFocus
                  />
                  <button type="submit" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                    Search
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* ── Mega Menu ───────────────────────────────────────────────────── */}
        {megaMenuOpen && (
          <div
            className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={closeMegaMenu}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5">Browse</p>
                  <h2 className="text-xl font-bold text-gray-900">Our Resources</h2>
                </div>
                <button
                  onClick={closeMegaMenu}
                  className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resourcesMenu.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMegaMenu}
                      className="group p-5 hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-primary/20 hover:shadow-sm block rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-1 group-hover:text-primary transition-colors text-sm">
                            {item.name}
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Link>

                    {/* Subsections */}
                    {item.subsections && item.subsections.length > 0 && (
                      <div className="mt-1.5 ml-4 space-y-0.5">
                        {item.subsections.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={closeMegaMenu}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 hover:text-primary hover:bg-blue-50 rounded-md transition-colors group"
                          >
                            <ChevronRight className="w-3 h-3 flex-shrink-0 text-gray-300 group-hover:text-primary transition-colors" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-4 py-4 bg-gray-50 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-white hover:text-primary rounded-lg transition-colors border border-transparent hover:border-gray-200"
            >
              Home
            </Link>

            {resourcesMenu.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-white hover:text-primary rounded-lg transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {item.name}
                </Link>
                {item.subsections && item.subsections.length > 0 && (
                  <div className="ml-10 mt-0.5 space-y-0.5">
                    {item.subsections.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-600 hover:text-primary hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 flex-shrink-0 text-gray-400" />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-gray-200 mt-3">
              <button
                onClick={() => { setMobileMenuOpen(false); openPortal(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors"
              >
                <Lock className="w-4 h-4" />
                Officer Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
