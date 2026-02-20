'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  Database,
  Cpu,
  Code,
  CheckCircle,
  Zap,
  Server,
  Network,
  ArrowRight,
} from 'lucide-react';

const stackMetrics = [
  { value: '6',     label: 'Core Components', sublabel: 'Integrated services' },
  { value: '50+',   label: 'Applications',    sublabel: 'Running on stack' },
  { value: '99.9%', label: 'Availability',    sublabel: 'Service uptime' },
  { value: '3x',    label: 'Faster Deploy',   sublabel: 'Development speed' },
  { value: '500TB+',label: 'Data Managed',    sublabel: 'Storage capacity' },
  { value: '120+',  label: 'Agencies',        sublabel: 'Using the stack' },
];

const stackDefinitions = [
  { number: '01', category: 'CYBER SECURITY &',  title: 'GOVERNANCE',             description: 'Standards, regulations, and procedures governing the use of technology within the government — including protecting government systems, networks, and data from cyber threats.' },
  { number: '02', category: 'HOSTING &',         title: 'COMM INFRASTRUCTURE',    description: 'Cloud-based government data and application hosting with secure network communication and data transfer. Core components include GovCloud, GovNetwork, and Satellite System.' },
  { number: '03', category: 'SECURED DATA',      title: 'EXCHANGE',               description: 'Online platforms providing a single point of access to various government services: Citizens\' Portal, Government Portal, Investment Portal, and Students\' Portal.' },
  { number: '04', category: 'SHARED MICRO',      title: 'SERVICES',               description: 'Modular services that each perform a specific function, enabling scalability, easy maintenance, and fast deployment across government systems.' },
  { number: '05', category: 'DIGITAL',           title: 'SERVICES',               description: 'Digital services provided by various government bodies to citizens and businesses, accessible through unified platforms.' },
  { number: '06', category: 'E-GOVERNMENT',      title: 'PORTAL',                 description: 'Online platforms that provide a single point of access to various government services: Citizens\' Portal, Government Portal, Investment Portal, and Students\' Portal.' },
];

const stackLayers = [
  { icon: Database, title: 'Infrastructure Layer', desc: 'Foundation layer providing compute, storage, and network resources through virtualisation and cloud infrastructure.', initiatives: ['Virtual Machines', 'Distributed Storage', 'Network Fabric'] },
  { icon: Cpu,      title: 'Platform Layer',        desc: 'Middleware services including databases, application servers, messaging queues, and development frameworks.',      initiatives: ['Managed Databases', 'App Servers', 'Message Queues'] },
  { icon: Code,     title: 'Application Layer',     desc: 'Government applications and services built on standardised platforms with common interfaces and APIs.',             initiatives: ['Shared APIs', 'Service Catalogue', 'Common UI Components'] },
];

const keyBenefits = [
  { icon: Zap,     title: 'Cost Efficiency',  desc: 'Shared infrastructure and services reduce duplication and lower total cost of ownership across government.',                     metric: '40% cost reduction' },
  { icon: Server,  title: 'Faster Deployment',desc: 'Pre-built components and standardised platforms enable rapid development and deployment of new services.',                       metric: '3x faster delivery' },
  { icon: Network, title: 'Interoperability', desc: 'Common standards and APIs enable seamless integration and data exchange between government systems.',                             metric: '100% compatibility' },
];

export default function GovernmentStackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── 1. HERO (KEPT AS-IS) ─────────────────────────────────────── */}
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
              <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Government Stack</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Government Stack</h1>
                <p className="text-xl text-blue-50 mt-2">Integrated technology platform enabling efficient digital services</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. STACK METRICS ────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Stack Metrics</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Government Stack by the Numbers</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Infrastructure Report</span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 border-x border-b border-gray-200 divide-x divide-y divide-gray-200">
              {stackMetrics.map((m, i) => (
                <div key={i} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{m.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{m.label}</div>
                  <div className="text-xs text-gray-500">{m.sublabel}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400 italic">* Statistics reflect operational data from the most recent reporting quarter.</p>
          </div>
        </section>

        {/* ─── 3. OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">About</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Overview</h2>
                <p className="text-sm text-gray-600">Standardised platform accelerating digital service delivery</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Government Stack provides a standardised technology platform that reduces duplication,
                improves interoperability, and accelerates digital service delivery across government.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Built on open standards and modern cloud-native architecture, the stack enables agencies
                to rapidly develop and deploy digital services while maintaining security and compliance.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Key components include identity management, payment gateways, notification services,
                document management, workflow automation, and data exchange platforms.
              </p>
              <div>
                {['Open-standards cloud-native architecture', 'Shared identity and payment services', 'Centralised compliance and audit tooling'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STACK COMPONENTS ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Stack Definition</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Government Stack Components</h2>
                <p className="text-sm text-gray-600">Six integrated layers powering digital government services</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                6 layers<br />
                <span className="text-gray-400">All components active</span>
              </p>
            </div>

            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {stackDefinitions.map((def, index) => (
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
                        <span className="inline-flex items-center justify-center w-8 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                          {def.number}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{def.category}</span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{def.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{def.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. ARCHITECTURE LAYERS ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Architecture</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Stack Architecture Layers</h2>
                <p className="text-sm text-gray-600">Three-tier architecture ensuring scalability and flexibility</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All layers operational
              </div>
            </div>

            <div className="border-x border-b border-gray-200">
              {stackLayers.map((layer, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{layer.title}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="w-9 h-9 border border-gray-200 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <layer.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Initiatives</p>
                      <ul className="space-y-1.5">
                        {layer.initiatives.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            {item}
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

        {/* ─── 6. KEY BENEFITS / CTA ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Benefits</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Build on the Government Stack</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Leverage our standardised platform to accelerate your digital service development.
                  Contact us to learn how the Government Stack can support your agency&apos;s needs.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {keyBenefits.map((b) => (
                    <div key={b.title} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-36 flex-shrink-0 pt-0.5">{b.title}</span>
                      <span className="text-xs text-gray-700 flex-1">{b.desc}</span>
                      <span className="text-xs font-bold text-primary whitespace-nowrap pt-0.5">{b.metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Quick Navigation</p>
                <div className="space-y-3 mb-5">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/infrastructure/government-private-network" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Government Network
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/digital-services" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      View Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/infrastructure" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Infrastructure
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure/government-private-network" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Government Network
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
