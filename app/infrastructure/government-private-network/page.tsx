'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Network,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '10Gbps', label: 'Core Throughput',  sublabel: 'Backbone link speed' },
  { value: '99.9%',  label: 'Uptime SLA',       sublabel: 'Guaranteed availability' },
  { value: '120+',   label: 'Sites Connected',  sublabel: 'Government locations' },
  { value: '24/7',   label: 'NOC Monitoring',   sublabel: 'Network operations centre' },
];

const architecture = [
  {
    title: 'Network Topology',
    desc: 'Multi-tier architecture with redundant core, distribution, and access layers ensuring high availability and fault tolerance.',
    features: ['Redundant Core Switches', 'Dual Fibre Paths', 'Automatic Failover'],
  },
  {
    title: 'Connectivity',
    desc: 'Fibre optic backbone with 10Gbps connectivity between major sites and redundant links for business continuity.',
    features: ['Fibre Optic Backbone', 'MPLS Routing', 'Satellite Backup Links'],
  },
];

const features = [
  { title: 'Security',     desc: 'Isolated from the public internet with encryption, firewalls, intrusion detection, and access controls protecting government data.', initiatives: ['Firewall Perimeter', 'IDS/IPS', 'VPN Tunnels'] },
  { title: 'Performance',  desc: 'High-bandwidth connectivity with QoS policies ensuring priority for critical government applications and services.',                   initiatives: ['QoS Policies', 'Traffic Shaping', 'Load Balancing'] },
  { title: 'Reliability',  desc: '99.9% uptime SLA with redundant paths, equipment, and automatic failover for business continuity.',                                  initiatives: ['Redundant Links', 'Auto Failover', 'SLA Reporting'] },
];

export default function GovernmentPrivateNetworkPage() {
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
                <Home className="w-4 h-4" />Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Government Private Network</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Government Private Network</h1>
                <p className="text-xl text-blue-50 mt-2">Secure, high-performance network connecting government agencies nationwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Performance</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Network at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Network Operations Report</span>
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

        {/* ─── 3. OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">About</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Overview</h2>
                <p className="text-sm text-gray-600">Secure dedicated connectivity for all government agencies</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Government Private Network (GPN) provides secure, dedicated connectivity between
                government agencies, enabling efficient communication and data exchange while maintaining
                strict security and privacy controls.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Built on enterprise-grade networking equipment and fibre optic infrastructure, the GPN
                delivers high-speed, low-latency connectivity with guaranteed bandwidth and quality of service.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                The network is designed with redundancy at every layer, including multiple fibre paths,
                redundant core switches, and automatic failover mechanisms to ensure continuous operation.
              </p>
              <div>
                {['Isolated from the public internet', 'End-to-end traffic encryption', 'Automatic failover at all network tiers'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. NETWORK ARCHITECTURE ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Design</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Network Architecture</h2>
                <p className="text-sm text-gray-600">Resilient multi-tier design built for continuous operation</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All tiers operational
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {architecture.map((item, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index % 2 === 1 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          Active
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                      <ul className="space-y-1">
                        {item.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <Network className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. KEY FEATURES / CTA ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Capabilities</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Key Features</h2>
                <p className="text-sm text-gray-600">Security, performance and reliability at every layer</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All features active
              </div>
            </div>
            <div className="border-x border-b border-gray-200">
              {features.map((f, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{f.title}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                    </div>
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Initiatives</p>
                      <ul className="space-y-1.5">
                        {f.initiatives.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Get Connected</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Connect Your Agency</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Government agencies can apply to connect to the GPN for secure, high-speed access to
                  shared government services and inter-agency communication.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Eligible users', value: 'PNG Government agencies and departments' },
                    { label: 'Connectivity',   value: 'Fibre, wireless, and satellite options available' },
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
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Quick Navigation</p>
                <div className="space-y-3 mb-5">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Contact the DTO
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/infrastructure/government-cloud" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Government Cloud
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/infrastructure/government-stack" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Government Stack
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure/government-cloud" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Government Cloud
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
