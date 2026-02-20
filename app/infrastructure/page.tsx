'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  ChevronLeft,
  Server,
  Shield,
  Network,
  Cloud,
  Layers,
  Globe,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '99.9%', label: 'Uptime SLA',        sublabel: 'Service availability' },
  { value: '500TB+', label: 'Storage Capacity',  sublabel: 'Total managed data' },
  { value: '10Gbps', label: 'Network Speed',     sublabel: 'Core backbone throughput' },
  { value: '24/7',   label: 'Monitoring',        sublabel: 'Round-the-clock operations' },
];

const features = [
  { title: 'High Availability', desc: '99.9% uptime SLA with redundant systems, failover capabilities, and 24/7 monitoring to ensure continuous service delivery.' },
  { title: 'Scalability',       desc: 'Elastic infrastructure that grows with demand, supporting increasing workloads and user base without compromising performance.' },
  { title: 'Security First',    desc: 'Multi-layered security architecture with encryption, access controls, and continuous monitoring to protect sensitive government data.' },
];

const components = [
  { icon: Layers, title: 'Government Stack',           desc: 'Integrated technology stack providing standardised services and infrastructure across all government departments.',     href: '/infrastructure/government-stack' },
  { icon: Network, title: 'Government Private Network', desc: 'Secure, high-speed network infrastructure connecting government agencies nationwide with redundancy and reliability.',   href: '/infrastructure/government-private-network' },
  { icon: Cloud,   title: 'Government Cloud',           desc: 'Scalable cloud platform offering IaaS and PaaS for government applications with enterprise-grade security.',            href: '/infrastructure/government-cloud' },
  { icon: Shield,  title: 'Cyber Security',             desc: 'Comprehensive security framework protecting government digital assets with advanced threat detection and response.',     href: '/infrastructure/cyber-security' },
  { icon: Globe,   title: 'Government Portal',          desc: 'Unified digital gateway providing citizens and businesses with seamless access to government services and information.', href: '/infrastructure/government-portal' },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── 1. HERO ──────────────────────────────────────────────────── */}
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
              <span className="text-white font-medium">Infrastructure</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Infrastructure</h1>
                <p className="text-xl text-blue-50 mt-2">
                  World-class digital infrastructure powering PNG&apos;s digital transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Who We Are</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Overview</h2>
                <p className="text-sm text-gray-600">The backbone of Papua New Guinea&apos;s digital government</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All systems operational
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Transformation Office maintains a robust and secure digital infrastructure
                that serves as the backbone for all government digital services.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our infrastructure is designed with redundancy, scalability, and security at its core.
                We leverage cutting-edge technology and best practices to ensure high availability,
                data integrity, and seamless service delivery across all government departments and agencies.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our infrastructure components work together to create a comprehensive ecosystem that
                supports digital government transformation while maintaining the highest standards of
                security, reliability, and performance.
              </p>
              <div className="mb-2">
                {[
                  'Redundant architecture with automated failover',
                  'End-to-end encryption for all government data',
                  'Continuous 24/7 monitoring and incident response',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. KEY METRICS ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Performance</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Metrics</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Infrastructure Report</span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-gray-200 divide-x divide-y lg:divide-y-0 divide-gray-200">
              {metrics.map((m, i) => (
                <div key={i} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{m.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{m.label}</div>
                  <div className="text-xs text-gray-500">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. KEY FEATURES ─────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Capabilities</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Key Features</h2>
                <p className="text-sm text-gray-600">Core principles underpinning our infrastructure design</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All features active
              </div>
            </div>

            <div className="border-x border-b border-gray-200">
              {features.map((f, i) => (
                <div key={i} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{i + 1}</span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{f.title}</span>
                  </div>
                  <div className="p-5 hover:bg-gray-50/70 transition-colors">
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. INFRASTRUCTURE COMPONENTS ───────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Components</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Infrastructure Components</h2>
                <p className="text-sm text-gray-600">Five core systems powering digital government services</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {components.length} components<br />
                <span className="text-gray-400">All systems active</span>
              </p>
            </div>

            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {components.map((c, index) => (
                <div
                  key={index}
                  className={[
                    'bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200',
                    index % 2 === 1 ? 'md:border-l' : '',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          Operational
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">
                        <Link href={c.href} className="hover:underline">{c.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <c.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link href={c.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. CTA ──────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Get Started</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Access Our Infrastructure</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Authorised Papua New Guinea government agencies can onboard to our infrastructure
                  platform and access the full suite of digital services provided by the DTO.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Eligible users', value: 'PNG Government agencies and departments' },
                    { label: 'Onboarding',     value: 'Contact your ICT administrator or the DTO' },
                    { label: 'Support hours',  value: 'Monday – Friday, 8:00 am – 5:00 pm (PGT)' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-28 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="text-xs text-gray-700">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
                  Quick Navigation
                </p>
                <div className="space-y-3 mb-5">
                  <Link href="/infrastructure/government-stack" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Government Stack
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Contact the DTO
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/our-achievements" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Our Achievements
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure/government-stack" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Government Stack
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
