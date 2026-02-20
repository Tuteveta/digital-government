'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Target,
  Eye,
  Server,
  Lightbulb,
  Shield,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const focusAreas = [
  {
    icon: Server,
    title: 'Infrastructure',
    desc: 'Building and maintaining world-class digital infrastructure to support government operations and service delivery.',
    features: ['Redundant Connectivity', 'Cloud-Ready Systems', 'Disaster Recovery'],
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Fostering a culture of innovation and continuous improvement in government service delivery through technology adoption.',
    features: ['Emerging Tech', 'Agile Delivery', 'Digital Skills'],
  },
  {
    icon: Shield,
    title: 'Governance',
    desc: 'Establishing standards, policies, and frameworks to ensure secure, reliable, and compliant digital services.',
    features: ['Policy Frameworks', 'Audit & Compliance', 'Risk Management'],
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Users Served', sublabel: 'Active portal users' },
  { icon: Award, value: '15+', label: 'Services Live', sublabel: 'Available online' },
  { icon: Building2, value: '100+', label: 'Departments', sublabel: 'Government agencies' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', sublabel: 'Average availability' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── 1. HERO SECTION (KEPT AS-IS) ────────────────────────────── */}
        <section className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-6 text-blue-100">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About Us</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Leading Papua New Guinea&apos;s digital transformation journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Who We Are</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Overview
                </h2>
                <p className="text-sm text-gray-600">
                  Papua New Guinea&apos;s lead agency for digital government
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Established: 2019<br />
                <span className="text-gray-400">Gazette Notice No. 109</span>
              </p>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                  Our Mandate
                </p>
                <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                  The Digital Transformation Office (DTO) was established to lead Papua New
                  Guinea&apos;s journey towards becoming a digitally enabled nation.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Our office works closely with government departments and agencies at the national,
                  provincial, and district levels to deliver integrated digital services. We focus on
                  building robust infrastructure, establishing standards and governance frameworks, and
                  promoting innovation with integrity across the public sector.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Through our initiatives, we aim to bridge the digital divide, enhance service delivery,
                  and create a more transparent and accountable government for all Papua New Guineans.
                </p>

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
            </div>
          </div>
        </section>

        {/* ─── 3. MISSION & VISION ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Purpose</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Mission &amp; Vision
                </h2>
                <p className="text-sm text-gray-600">
                  The principles guiding PNG&apos;s digital transformation
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Strategic Direction<br />
                <span className="text-gray-400">Department of ICT, Papua New Guinea</span>
              </p>
            </div>

            {/* 2-column bordered grid */}
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {/* Mission */}
              <div className="bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Core Directive
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">Our Mission</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      To drive the digital transformation of government services in Papua New Guinea,
                      making them more accessible, efficient, and transparent for all citizens and businesses.
                    </p>
                    <ul className="space-y-1">
                      {['Accessible services for all citizens', 'Efficient government operations', 'Transparent public accountability'].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                    <Target className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t md:border-t-0 md:border-l border-gray-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Future State
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">Our Vision</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      A digitally connected Papua New Guinea where government services are seamlessly
                      delivered through innovative technology, fostering economic growth and improving
                      quality of life for all.
                    </p>
                    <ul className="space-y-1">
                      {['Seamless digital service delivery', 'Technology-driven economic growth', 'Improved quality of life nationwide'].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                    <Eye className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. KEY FOCUS AREAS ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">What We Do</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Key Focus Areas
                </h2>
                <p className="text-sm text-gray-600">
                  Strategic pillars driving our digital transformation initiatives
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All programmes active
              </div>
            </div>

            {/* Architecture-style layers */}
            <div className="border-x border-b border-gray-200">
              {focusAreas.map((area, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                      {area.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    {/* Description pane */}
                    <div className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="w-9 h-9 border border-gray-200 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="text-sm font-semibold text-gray-900">{area.title}</h4>
                          <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-px rounded font-medium">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
                      </div>
                    </div>
                    {/* Features pane */}
                    <div className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Initiatives</p>
                        <ul className="space-y-1.5">
                          {area.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400 italic">
              * Focus areas reflect the current DTO Digital Government Strategic Framework.
            </p>
          </div>
        </section>

        {/* ─── 5. IMPACT STATS ─────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
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

        {/* ─── 6. NAVIGATION / CTA ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              {/* Left: Context */}
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Continue Exploring
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Learn More About DTO
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Discover how the Digital Transformation Office is driving change across Papua New
                  Guinea — from our founding journey to our ongoing programmes and achievements.
                </p>

                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Our Journey', value: 'The history and milestones of the DTO since 2019' },
                    { label: 'Achievements', value: 'Key outcomes and progress made to date' },
                    { label: 'Contact Us', value: 'Get in touch with the Digital Transformation Office' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-28 flex-shrink-0 pt-0.5">
                        {row.label}
                      </span>
                      <span className="text-xs text-gray-700">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Navigation panel */}
              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
                  Quick Navigation
                </p>

                <div className="space-y-3 mb-5">
                  <Link href="/our-journey" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Our Journey
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/our-achievements" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group"
                    >
                      Our Achievements
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

                <div className="border-t border-gray-100 pt-4 flex items-start gap-3">
                  <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Back to Home
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
