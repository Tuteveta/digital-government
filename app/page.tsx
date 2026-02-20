'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Database,
  Mail,
  Cloud,
  Server,
  FileText,
  Shield,
  Network,
  Lock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Play,
} from 'lucide-react';

const heroSlides = [
  {
    title: 'DIGITAL TRANSFORMATION',
    subtitle: "Building Papua New Guinea's digital future through innovation, technology, and strategic partnerships.",
    image: 'image1.jpg',
    badge: "Powering PNG's Digital Economy",
  },
  {
    title: 'E-GOVERNMENT PORTAL',
    subtitle: 'One unified access point for all government services — faster, smarter, and more accessible.',
    image: '/image2.jpg',
    badge: 'Serving Citizens Better',
  },
  {
    title: 'INNOVATIVE SOLUTIONS',
    subtitle: 'Modern technology infrastructure empowering efficient government operations nationwide.',
    image: 'image3.jpg',
    badge: 'Technology for All',
  },
];

const stats = [
  { value: '50,000+', label: 'Registered Citizens', sublabel: 'Active portal users' },
  { value: '15+', label: 'Digital Services', sublabel: 'Available online' },
  { value: '99.9%', label: 'System Uptime', sublabel: 'Average availability' },
  { value: '24/7', label: 'Service Availability', sublabel: 'Round-the-clock support' },
];

const services = [
  {
    icon: FileText,
    title: 'Application Services',
    desc: 'Secure hosting for government applications with 99.9% uptime guarantee and real-time monitoring.',
    features: ['24/7 Monitoring', 'Auto Scaling', 'Secure Infrastructure'],
    href: '/digital-services',
  },
  {
    icon: Mail,
    title: 'Email Hosting',
    desc: 'Professional email services with advanced security, collaboration tools, and unlimited storage.',
    features: ['Unlimited Storage', 'Spam Protection', 'Mobile Access'],
    href: '/digital-services',
  },
  {
    icon: Cloud,
    title: 'Virtual Private Cloud',
    desc: 'Scalable cloud infrastructure with dedicated resources, full control, and high performance.',
    features: ['Custom Configuration', 'High Performance', 'Cost Effective'],
    href: '/digital-services',
  },
  {
    icon: Server,
    title: 'Data Hosting',
    desc: 'Enterprise-grade data center services with encrypted storage, backups, and disaster recovery.',
    features: ['Disaster Recovery', 'Data Encryption', 'Regular Backups'],
    href: '/digital-services',
  },
];

const techLayers = [
  {
    layerName: 'Citizen & Service Interface',
    items: [
      { icon: Database, title: 'E-Governmental Portal', desc: 'Unified access point for all government digital services and citizen interactions.' },
      { icon: FileText, title: 'Digital Services', desc: 'End-to-end digital service delivery with streamlined, automated workflows.' },
    ],
  },
  {
    layerName: 'Integration & Application Layer',
    items: [
      { icon: Shield, title: 'Shared Micro Services', desc: 'Reusable service components enabling rapid development and system consistency.' },
      { icon: Database, title: 'Secured Data Exchange', desc: 'Encrypted protocols ensuring secure inter-agency data communication.' },
    ],
  },
  {
    layerName: 'Infrastructure & Security',
    items: [
      { icon: Network, title: 'Hosting & Communication', desc: 'Reliable government cloud infrastructure with redundant connectivity.' },
      { icon: Lock, title: 'Cyber Security & Governance', desc: 'Comprehensive security framework protecting critical government digital assets.' },
    ],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ─── 1. HERO SLIDER ──────────────────────────────────────────── */}
      <section
        className="relative h-[520px] sm:h-[580px] md:h-[660px] overflow-hidden cursor-pointer"
        onClick={handleHeroClick}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-blue-900/85" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>
        ))}

        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none z-20"
            style={{ left: ripple.x, top: ripple.y }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/30 rounded-full animate-ping" />
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full animate-ping"
              style={{ animationDelay: '0.15s' }}
            />
          </div>
        ))}

        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white mb-5">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                {heroSlides[currentSlide].badge}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 tracking-tight leading-[1.05]">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="/digital-services">
                  <Button className="bg-red-500 hover:bg-red-600 text-white shadow-2xl shadow-red-500/30 px-6 py-3 text-sm font-semibold rounded-lg group transition-all duration-300 hover:scale-105">
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/70 text-white hover:bg-white hover:text-primary px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-full z-20 transition-all duration-200 hover:scale-110 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-full z-20 transition-all duration-200 hover:scale-110 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-10' : 'bg-white/40 hover:bg-white/60 w-6'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── 2. ABOUT US ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">About Us</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Digital Government
              </h2>
              <p className="text-sm text-gray-600">
                Papua New Guinea&apos;s lead agency for digital government
              </p>
            </div>
            <p className="text-xs text-gray-500 sm:text-right pb-0.5">
              Established: 2019<br />
              <span className="text-gray-400">Department of ICT, Papua New Guinea</span>
            </p>
          </div>

          {/* 2-column layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Video placeholder */}
            <div>
              <div className="relative aspect-video border border-gray-200 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gray-100" />
                {/* Corner bracket accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <button className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-2.5 hover:bg-primary/20 transition-colors">
                      <Play className="w-5 h-5 text-primary ml-0.5" style={{ fill: 'currentColor' }} />
                    </button>
                    <p className="text-xs text-gray-500 font-medium">Watch Our Story</p>
                  </div>
                </div>
              </div>
              {/* Caption */}
              <p className="mt-2 text-xs text-gray-400 italic">
                Digital Transformation Office — Port Moresby, Papua New Guinea
              </p>
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                Our Mandate
              </p>
              {/* Pull quote / mission statement */}
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Transformation Office (DTO) is the lead agency responsible for Papua New
                Guinea&apos;s digital government strategy, policy, and implementation.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Through strategic adoption of information and communication technologies, we drive
                innovation with integrity across all government sectors — ensuring services are
                accessible, efficient, and trustworthy for all Papua New Guineans.
              </p>

              {/* Mandate checklist */}
              <div className="mb-6">
                {[
                  'Enhanced digital infrastructure for government operations',
                  'Streamlined processes for faster service delivery',
                  'Improved citizen access to essential government services',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm font-semibold group">
                  Learn More About DTO
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES DIRECTORY ───────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Services</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Digital Services Directory
              </h2>
              <p className="text-sm text-gray-600">
                Government digital services provided by the Digital Transformation Office
              </p>
            </div>
            <p className="text-xs text-gray-500 sm:text-right pb-0.5">
              15+ services available<br />
              <span className="text-gray-400">For PNG Government Agencies</span>
            </p>
          </div>

          {/* Service entries — 2-column bordered grid */}
          <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={[
                  'bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group',
                  index === 1 ? 'border-t md:border-t-0 md:border-l border-gray-200' : '',
                  index === 2 ? 'border-t border-gray-200' : '',
                  index === 3 ? 'border-t md:border-l border-gray-200' : '',
                ].join(' ')}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Available Online
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">
                      <Link href={service.href} className="hover:underline">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                    <service.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    More about {service.title}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              Showing 4 of 15+ available digital services. All services are accessible to authorised government agencies.
            </p>
            <Link href="/digital-services">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm font-semibold group">
                Browse All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. KEY PERFORMANCE INDICATORS ──────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Impact</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Key Performance Indicators
              </h2>
            </div>
            <p className="text-xs text-gray-500 sm:text-right pb-0.5">
              Reporting Period: FY 2024–2025<br />
              <span className="text-gray-400">Source: DTO Annual Performance Report</span>
            </p>
          </div>

          {/* Stats table */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-gray-200 divide-x divide-y lg:divide-y-0 divide-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-0.5">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-400 italic">
            * Statistics reflect operational data from the most recent reporting quarter.
          </p>
        </div>
      </section>

      {/* ─── 5. TECHNOLOGY INFRASTRUCTURE ───────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Technology Stack</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Government Technology Infrastructure
              </h2>
              <p className="text-sm text-gray-600">
                Integrated ecosystem enabling interoperability across all PNG government agencies
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
              All components operational
            </div>
          </div>

          {/* Architecture layers */}
          <div className="border-x border-b border-gray-200">
            {techLayers.map((layer, layerIndex) => (
              <div key={layerIndex} className="border-t border-gray-200">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                    {layerIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {layer.layerName}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {layer.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="w-9 h-9 border border-gray-200 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                          <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-px rounded font-medium">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-400 italic">
            * Architecture reflects the current DTO Government Technology Reference Framework.
          </p>
        </div>
      </section>

      {/* ─── 6. PORTAL ACCESS ────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

            {/* Left: Context */}
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Portal Access
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Access the E-Government Portal
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Authorised Papua New Guinea government employees and agencies can sign in to
                access the full suite of digital services, tools, and resources provided by
                the Digital Transformation Office.
              </p>

              {/* Eligibility info */}
              <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                {[
                  { label: 'Eligible users', value: 'PNG Government employees and agencies' },
                  { label: 'Access method', value: 'Agency-issued credentials via ICT administrator' },
                  { label: 'Support hours', value: 'Monday – Friday, 8:00 am – 5:00 pm (PGT)' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 px-4 py-3">
                    <span className="text-xs font-semibold text-gray-500 w-32 flex-shrink-0 pt-0.5">
                      {row.label}
                    </span>
                    <span className="text-xs text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Action panel */}
            <div className="border border-gray-200 bg-white p-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
                Sign In or Get Help
              </p>

              <div className="space-y-3 mb-5">
                <Link href="/login" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                    Member Login
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group"
                  >
                    Contact the DTO
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p className="text-xs font-semibold text-gray-600">Not yet registered?</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Contact your agency ICT administrator or{' '}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    reach out to the DTO
                  </Link>{' '}
                  for onboarding and access provisioning assistance.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                <span className="text-xs text-gray-500">Portal is currently online and operational</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
