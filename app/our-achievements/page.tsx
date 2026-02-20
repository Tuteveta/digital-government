'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Trophy,
  Award,
  Users,
  Server,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Building2,
  Globe,
  Target,
  Clock,
  ArrowRight,
} from 'lucide-react';

const impactMetrics = [
  { icon: Server,    value: '85+',   label: 'Digital Services', sublabel: 'Active government services' },
  { icon: Building2, value: '120+',  label: 'Departments',      sublabel: 'Successfully onboarded' },
  { icon: Users,     value: '250K+', label: 'Transactions',     sublabel: 'Monthly digital transactions' },
  { icon: Award,     value: '5K+',   label: 'Users Trained',    sublabel: 'Government employees' },
  { icon: Shield,    value: '3',     label: 'Data Centers',     sublabel: 'Tier III certified facilities' },
  { icon: TrendingUp,value: '92%',   label: 'Satisfaction',     sublabel: 'User satisfaction rate' },
];

const keyAchievements = [
  { icon: Shield,  title: 'ISO 27001 Certification',         description: 'Information security management system certified',                          year: '2023' },
  { icon: Trophy,  title: 'Regional Digital Excellence Award',description: 'Recognition for innovative government digital transformation',               year: '2024' },
  { icon: Server,  title: 'Tier III Data Center',            description: 'First government-owned Tier III certified data center in PNG',               year: '2022' },
  { icon: Users,   title: '500K+ Citizens Served',           description: 'Digital services reaching half a million Papua New Guineans',                year: '2024' },
  { icon: Zap,     title: 'K50M Cost Savings',               description: 'Annual government operational cost reduction',                               year: '2024' },
  { icon: Clock,   title: '99.9% Uptime',                    description: 'Consistent service availability and reliability',                            year: '2024' },
];

const awards = [
  { year: '2024', title: 'Pacific Digital Innovation Award',      organization: 'Pacific Islands Forum',          description: 'Outstanding achievement in digital government transformation' },
  { year: '2023', title: 'Best Government Cloud Initiative',      organization: 'APAC Tech Summit',              description: 'Recognition for government cloud infrastructure deployment' },
  { year: '2023', title: 'Cybersecurity Excellence Award',        organization: 'Regional Cyber Security Alliance', description: 'Excellence in government cybersecurity frameworks' },
  { year: '2022', title: 'Digital Transformation Leadership',     organization: 'Commonwealth Innovation Awards', description: 'Leading digital transformation in the Pacific region' },
];

const successStories = [
  { icon: Users,  title: 'Digital Identity System',    description: 'Implemented nationwide digital identity verification system, reducing processing time by 80% and serving 200K+ citizens.', impact: '80% faster processing' },
  { icon: Target, title: 'E-Procurement Platform',     description: 'Government procurement digitised, saving K30M annually through transparent and efficient procurement processes.',            impact: 'K30M annual savings' },
  { icon: Globe,  title: 'Rural Connectivity Program', description: 'Extended digital services to 50+ rural districts through satellite and wireless infrastructure deployment.',                impact: '50+ districts connected' },
  { icon: Shield, title: 'Cybersecurity Framework',    description: 'Established comprehensive cybersecurity framework protecting critical government infrastructure and data.',                  impact: 'Zero major breaches' },
];

export default function OurAchievementsPage() {
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
              <span className="text-white font-medium">Our Achievements</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Our Achievements</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Milestones in digital transformation excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. IMPACT METRICS ───────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Impact Metrics</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Impact by the Numbers
                </h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Annual Performance Report</span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 border-x border-b border-gray-200 divide-x divide-y divide-gray-200">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center mb-3">
                    <metric.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.sublabel}</div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400 italic">
              * Statistics reflect operational data from the most recent reporting quarter.
            </p>
          </div>
        </section>

        {/* ─── 3. KEY ACHIEVEMENTS ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Major Milestones</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Key Achievements
                </h2>
                <p className="text-sm text-gray-600">
                  Significant accomplishments that mark our digital transformation journey
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                {keyAchievements.length} milestones recorded
              </div>
            </div>

            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {keyAchievements.map((item, index) => (
                <div
                  key={index}
                  className={[
                    'bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group',
                    index % 2 === 1 ? 'md:border-l border-t border-gray-200' : 'border-t border-gray-200',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <item.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. AWARDS & RECOGNITION ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Recognition</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Awards &amp; Recognition
                </h2>
                <p className="text-sm text-gray-600">
                  International and regional recognition for excellence in digital government
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                2022 – 2024<br />
                <span className="text-gray-400">{awards.length} awards received</span>
              </p>
            </div>

            <div className="border-x border-b border-gray-200">
              {awards.map((award, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-14 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                      {award.year}
                    </span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex-1">
                      {award.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-px rounded">
                      <Star className="w-3 h-3" />
                      Award
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="w-9 h-9 border border-gray-200 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Awarding Body</p>
                        <p className="text-sm font-semibold text-gray-800">{award.organization}</p>
                      </div>
                    </div>
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. SUCCESS STORIES ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Case Studies</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Success Stories
                </h2>
                <p className="text-sm text-gray-600">
                  Real-world impact of our digital transformation initiatives
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All programmes operational
              </div>
            </div>

            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className={[
                    'bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group',
                    index % 2 === 1 ? 'md:border-l border-t border-gray-200' : 'border-t border-gray-200',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <CheckCircle className="w-3 h-3" />
                          {story.impact}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{story.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{story.description}</p>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <story.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400 italic">
              * Outcomes reflect verified programme results from DTO project completion reports.
            </p>
          </div>
        </section>

        {/* ─── 6. CTA / NAVIGATION ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              {/* Left: Context */}
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Building on Our Success
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Continue the Journey
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Our achievements fuel our commitment to advancing Papua New Guinea&apos;s digital
                  transformation. Together, we&apos;re creating a more connected, efficient, and
                  transparent government for all citizens.
                </p>

                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Our Services',     value: 'Browse the full catalogue of DTO digital services' },
                    { label: 'Our Journey',       value: 'Trace the milestones that brought us here' },
                    { label: 'Contact the DTO',   value: 'Get in touch with our team' },
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
                  <Link href="/digital-services" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Explore Our Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/our-journey" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group"
                    >
                      Our Journey
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
                  <Link href="/our-journey" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Our Journey
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Infrastructure
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
