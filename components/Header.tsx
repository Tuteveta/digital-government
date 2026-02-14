'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Lock, Building2, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const resourcesMenu = [
  { 
    name: 'About Us', 
    href: '/about', 
    description: 'Learn about our transformation journey',
    subsections: [
      { name: 'Our Journey', href: '/our-journey' },
      { name: 'Our Achievements', href: '/our-achievements' }
    ]
  },
  { 
    name: 'Infrastructure', 
    href: '/infrastructure', 
    description: 'Digital infrastructure and technology stack',
    subsections: [
      { name: 'Government Stack', href: '/infrastructure/government-stack' },
      { name: 'Government Private Network', href: '/infrastructure/government-private-network' },
      { name: 'Government Cloud', href: '/infrastructure/government-cloud' },
      { name: 'Cyber Security', href: '/infrastructure/cyber-security' },
      { name: 'Government Portal', href: '/infrastructure/government-portal' }
    ]
  },
  { 
    name: 'Digital Services', 
    href: '/digital-services', 
    description: 'Comprehensive digital services for government'
  },
  { 
    name: 'Standards & Compliance', 
    href: '/standards-compliance', 
    description: 'Quality and compliance frameworks',
    subsections: [
      { name: 'Compliance', href: '/standards-compliance/compliance' },
      { name: 'Service Standards', href: '/standards-compliance/service-standards' },
      { name: 'Data Governance', href: '/standards-compliance/data-governance' },
      { name: 'DTO', href: '/standards-compliance/dto' }
    ]
  },
  { 
    name: 'News', 
    href: '/news', 
    description: 'Latest updates and announcements'
  },
  { 
    name: 'Contact Us', 
    href: '/contact', 
    description: 'Get in touch with us'
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [securityInfoOpen, setSecurityInfoOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top identification bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-2">
            {/* PNG Flag and Website identification */}
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
                A Papua New Guinea Government Agency Website
              </span>
            </div>
            
            {/* How to identify link */}
            <button
              onClick={() => setSecurityInfoOpen(!securityInfoOpen)}
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <span>How to identify</span>
              <ChevronDown 
                className={`h-3 w-3 transition-transform duration-200 ${
                  securityInfoOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          
          {/* Dropdown security information */}
          {securityInfoOpen && (
            <div className="border-t border-gray-300 py-6 pb-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column - Official websites */}
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
                      <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Trusted websites
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Right column - HTTPS security */}
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

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left section: Logo, Title, and Navigation aligned with flag above */}
            <div className="flex items-center gap-8 flex-1">
              {/* Logo and Title - aligned with PNG flag */}
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
                <h1 className="text-base font-bold tracking-tight text-gray-900">
                  Digital Government
                </h1>
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
                  <button 
                    className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                  >
                    Our Resources
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Login */}
                <Link 
                  href="/login"
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                >
                  Login
                </Link>
              </nav>
            </div>

            {/* Right: Search and Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Search - Desktop with functionality */}
              <form 
                onSubmit={handleSearch}
                className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-48 text-gray-700 placeholder-gray-500"
                />
                <button type="submit" aria-label="Search">
                  <SearchIcon className="w-5 h-5 text-gray-500" />
                </button>
              </form>
              
              {/* Mobile search icon */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <SearchIcon className="w-6 h-6 text-gray-600" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
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
                  <button
                    type="submit"
                    className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Mega Menu - Our Resources */}
      {megaMenuOpen && (
        <div
          className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-xl"
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={closeMegaMenu}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Our Resources
                <span className="text-primary text-2xl">→</span>
              </h2>
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
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={closeMegaMenu}
                    className="group p-5 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:shadow-sm block"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1.5 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {item.name}
                      <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all text-lg">→</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </Link>
                  
                  {/* Subsections if available */}
                  {item.subsections && item.subsections.length > 0 && (
                    <div className="ml-5 space-y-1">
                      {item.subsections.map((subsection) => (
                        <Link
                          key={subsection.name}
                          href={subsection.href}
                          onClick={closeMegaMenu}
                          className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        >
                          • {subsection.name}
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 py-4 bg-gray-50">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors"
            >
              Home
            </Link>
            
            {/* Mobile Resources Menu */}
            {resourcesMenu.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
                {item.subsections && item.subsections.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subsections.map((subsection) => (
                      <Link
                        key={subsection.name}
                        href={subsection.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {subsection.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors text-center mt-3"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}