'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Network,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: 'GN109', label: 'Gazette Notice',     sublabel: 'Establishing instrument' },
  { value: '3',     label: 'Strategic Pillars',  sublabel: 'Core focus areas' },
  { value: '120+',  label: 'Agencies Supported', sublabel: 'Government tenants' },
  { value: '2019',  label: 'Established',        sublabel: 'Year of establishment' },
];

const responsibilities = [
  { icon: BookOpen, title: 'Standards & Policy', badge: 'Active', desc: 'Developing and maintaining standards, policies, and guidelines for digital government services and infrastructure across all agencies.', features: ['ICT Policy Development', 'Digital Standards', 'Compliance Frameworks'] },
  { icon: Network,  title: 'Infrastructure',     badge: 'Active', desc: 'Providing shared digital infrastructure including cloud services, networks, and platforms for government use.', features: ['Government Cloud', 'Private Network', 'Government Portal'] },
  { icon: Users,    title: 'Capacity Building',  badge: 'Active', desc: 'Training government employees and building organisational capability to effectively use digital technologies.', features: ['Training Programmes', 'Digital Skills', 'Change Management'] },
];

const strategicFocus = [
  { title: 'Digital Service Delivery', desc: 'Enabling government agencies to provide accessible, user-friendly digital services that meet citizen needs and expectations.', features: ['Citizen Portal', 'Service Automation', 'User Experience'] },
  { title: 'Data & Analytics',         desc: 'Promoting data-driven decision making through proper data management, analytics capabilities, and information sharing across government.', features: ['Open Data', 'Analytics Platform', 'Data Governance'] },
  { title: 'Cybersecurity',            desc: 'Protecting government digital assets and citizen data through comprehensive cybersecurity programs and incident response capabilities.', features: ['24/7 SOC', 'ISO 27001', 'Incident Response'] },
];

export default function DTOPage() {
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
              <Link href="/standards-compliance" className="hover:text-white transition-colors">Standards & Compliance</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Digital Transformation Office</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Digital Transformation Office</h1>
                <p className="text-xl text-blue-50 mt-2">Leading Papua New Guinea&apos;s journey to digital government excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">At a Glance</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">DTO Overview</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Annual Report</span>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">About DTO</h2>
                <p className="text-sm text-gray-600">Central authority for digital government in Papua New Guinea</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Transformation Office (DTO) serves as the central authority for digital
                government initiatives in Papua New Guinea. Established under Gazette Notice No. 109,
                we provide leadership, governance, and technical expertise to drive digital
                transformation across government.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our work encompasses infrastructure development, standards establishment, policy
                formulation, and capacity building to enable effective digital service delivery. We
                collaborate with government agencies, private sector partners, and international
                organisations to achieve our goals.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Through strategic planning and coordinated implementation, we ensure digital
                transformation initiatives align with national priorities and deliver tangible
                benefits to citizens and businesses.
              </p>
              <div>
                {[
                  'Central authority established under Gazette Notice No. 109',
                  'Setting standards and policies for all government digital services',
                  'Providing shared infrastructure for 120+ government agencies',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. KEY RESPONSIBILITIES ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Mandate</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Key Responsibilities</h2>
                <p className="text-sm text-gray-600">Three core areas driving our mandate</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All areas active
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-3">
              {responsibilities.map((r, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index > 0 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          {r.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{r.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{r.desc}</p>
                      <ul className="space-y-1">
                        {r.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <r.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. STRATEGIC FOCUS / CTA ────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Direction</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Strategic Focus Areas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Three strategic pillars drive our mission to deliver effective, trusted, and
                  resilient digital government for Papua New Guinea.
                </p>
                <div className="border-x border-b border-gray-200">
                  {strategicFocus.map((item, index) => (
                    <div key={index} className="border-t border-gray-200">
                      <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{item.title}</span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                        <ul className="space-y-1">
                          {item.features.map((f, fi) => (
                            <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                              <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
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
                  <Link href="/standards-compliance/data-governance" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Data Governance
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/standards-compliance" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Standards & Compliance
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/standards-compliance/data-governance" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Data Governance
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
