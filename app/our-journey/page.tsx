'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  CheckCircle,
  Calendar,
  Rocket,
  Target,
  Users,
  ArrowRight,
} from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'Establishment',
    description: 'Digital Transformation Office officially established under Gazette Notice No. 109',
    status: 'Completed',
    achievements: [
      'DTO infrastructure setup',
      'Initial team formation',
      'Strategic planning commenced',
    ],
  },
  {
    year: '2021',
    title: 'Infrastructure Development',
    description: 'Building the foundation for digital government services',
    status: 'Completed',
    achievements: [
      'Data center establishment',
      'Network infrastructure deployment',
      'Security frameworks implemented',
    ],
  },
  {
    year: '2022',
    title: 'Service Digitization',
    description: 'Launch of core digital services for government operations',
    status: 'Completed',
    achievements: [
      'Email hosting services launched',
      'Application hosting platform deployed',
      'Cloud infrastructure activated',
    ],
  },
  {
    year: '2023',
    title: 'Expansion',
    description: 'Scaling services across government departments',
    status: 'Completed',
    achievements: [
      '50+ departments onboarded',
      'Provincial connectivity established',
      'Service catalog expanded',
    ],
  },
  {
    year: '2024',
    title: 'Innovation & Integration',
    description: 'Introducing advanced technologies and integrated platforms',
    status: 'Completed',
    achievements: [
      'AI/ML pilot projects initiated',
      'Unified government portal launched',
      'Mobile services deployment',
    ],
  },
  {
    year: '2025',
    title: 'Digital Nation Vision',
    description: 'Working towards comprehensive digital transformation',
    status: 'In Progress',
    achievements: [
      'National digital strategy implementation',
      'Citizen-centric services expansion',
      'Smart government initiatives',
    ],
  },
];

const forwardStats = [
  { icon: Calendar, value: '2026–2028', label: 'Next Phase', sublabel: 'Comprehensive digital ecosystem deployment' },
  { icon: Target, value: '100%', label: 'Coverage Target', sublabel: 'Complete digital service accessibility' },
  { icon: Users, value: '1M+', label: 'Citizens Empowered', sublabel: 'Direct digital service access' },
];

export default function OurJourneyPage() {
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
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Our Journey</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Our Journey</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Transforming PNG through digital innovation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. TIMELINE ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Milestones</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Digital Transformation Timeline
                </h2>
                <p className="text-sm text-gray-600">
                  Key achievements in our journey towards a digital Papua New Guinea
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                2020 – Present<br />
                <span className="text-gray-400">Digital Transformation Office, PNG</span>
              </p>
            </div>

            {/* Timeline rows */}
            <div className="border-x border-b border-gray-200">
              {milestones.map((milestone, index) => (
                <div key={index} className="border-t border-gray-200">
                  {/* Row header */}
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-14 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                      {milestone.year}
                    </span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex-1">
                      {milestone.title}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-1.5 py-px rounded border ${
                      milestone.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        milestone.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} />
                      {milestone.status}
                    </span>
                  </div>

                  {/* Row content: description + achievements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    {/* Description pane */}
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                    {/* Achievements pane */}
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Achievements</p>
                      <ul className="space-y-1.5">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400 italic">
              * Timeline reflects the DTO Digital Government Progress Report — current as of 2025.
            </p>
          </div>
        </section>

        {/* ─── 3. LOOKING FORWARD ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">The Future</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Looking Forward
                </h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Strategic Outlook: 2026–2028<br />
                <span className="text-gray-400">DTO Digital Nation Strategy</span>
              </p>
            </div>

            {/* Forward stats table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-x border-b border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {forwardStats.map((stat, index) => (
                <div key={index} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center mb-3">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400 italic">
              * Targets are drawn from the DTO three-year digital transformation roadmap.
            </p>
          </div>
        </section>

        {/* ─── 4. VISION CTA ───────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              {/* Left: Vision context */}
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Our Vision
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Building a Connected Digital Nation
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Our journey continues as we work towards creating a fully integrated digital
                  ecosystem that empowers every Papua New Guinean with access to efficient,
                  transparent, and innovative government services.
                </p>

                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Focus', value: 'Citizen-centric digital service delivery' },
                    { label: 'Approach', value: 'Integrated platforms and smart government' },
                    { label: 'Outcome', value: 'Fully connected PNG by 2028' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-24 flex-shrink-0 pt-0.5">
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
                  Continue Exploring
                </p>

                <div className="space-y-3 mb-5">
                  <Link href="/our-achievements" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      View Our Achievements
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/about" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group"
                    >
                      About the DTO
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

                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/about" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    About Us
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/our-achievements" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Our Achievements
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
