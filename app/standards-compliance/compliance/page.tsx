'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Shield,
  FileCheck,
  Scale,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '100%', label: 'Audit Coverage',      sublabel: 'Agencies reviewed annually' },
  { value: 'ISO',  label: '27001 Certified',     sublabel: 'Information security' },
  { value: 'WCAG', label: '2.1 AA Compliant',    sublabel: 'Accessibility standard' },
  { value: '0',    label: 'Critical Violations', sublabel: 'Since establishment' },
];

const complianceAreas = [
  { icon: Scale,     title: 'Legal Compliance',      badge: 'Active', desc: 'Adherence to Papua New Guinea laws, regulations, and legal frameworks governing digital government operations and data management.',           features: ['PNG ICT Act', 'Privacy Regulations', 'Data Protection Laws'] },
  { icon: FileCheck, title: 'Regulatory Compliance', badge: 'Active', desc: 'Meeting requirements set by government regulatory bodies and international standards organisations for digital services.',                     features: ['ISO Standards', 'NIST Framework', 'WCAG Guidelines'] },
  { icon: Shield,    title: 'Policy Compliance',     badge: 'Active', desc: 'Ensuring alignment with government policies, procedures, and internal guidelines for digital transformation initiatives.',                      features: ['ICT Policy', 'Security Policy', 'Data Governance Policy'] },
];

const keyAreas = [
  { title: 'Data Protection',   desc: 'Compliance with data protection laws, privacy regulations, and information security requirements for handling citizen data.', features: ['Data Encryption', 'Access Controls', 'Breach Notification'] },
  { title: 'Accessibility',     desc: 'Meeting accessibility standards to ensure digital services are usable by all citizens, including those with disabilities.',    features: ['WCAG 2.1 AA', 'Screen Reader Support', 'Keyboard Navigation'] },
  { title: 'Audit & Reporting', desc: 'Regular compliance audits, reporting requirements, and documentation to demonstrate adherence to standards and regulations.', features: ['Annual Audits', 'Compliance Reports', 'Remediation Tracking'] },
];

export default function CompliancePage() {
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
              <span className="text-white font-medium">Compliance</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Compliance</h1>
                <p className="text-xl text-blue-50 mt-2">Ensuring adherence to legal, regulatory, and policy requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Compliance Posture</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Compliance at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Compliance Report</span>
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
                <p className="text-sm text-gray-600">Protecting citizen data and building public trust through rigorous compliance</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Transformation Office maintains a comprehensive compliance program to ensure
                all digital government services meet legal, regulatory, and policy requirements —
                protecting citizen data and building public trust.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our compliance framework covers data protection, privacy, security, accessibility, and
                service delivery standards. Regular audits and assessments verify ongoing adherence to
                these requirements across all agencies.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                We work closely with legal counsel, regulatory bodies, and policy makers to stay
                current with evolving requirements and ensure timely implementation of new compliance
                obligations.
              </p>
              <div>
                {[
                  '100% annual compliance audit coverage across all agencies',
                  'Zero critical compliance violations since establishment',
                  'ISO 27001 and WCAG 2.1 AA certified across all services',
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

        {/* ─── 4. COMPLIANCE FRAMEWORK ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Coverage</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Compliance Framework</h2>
                <p className="text-sm text-gray-600">Three dimensions covering legal, regulatory, and policy requirements</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All areas active
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-3">
              {complianceAreas.map((area, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index > 0 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          {area.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{area.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{area.desc}</p>
                      <ul className="space-y-1">
                        {area.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <area.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. KEY AREAS / CTA ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Focus Areas</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Key Compliance Areas</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Three priority areas where compliance effort is concentrated to protect
                  citizens and ensure service integrity.
                </p>
                <div className="border-x border-b border-gray-200">
                  {keyAreas.map((item, index) => (
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
                      Contact Compliance Team
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/standards-compliance" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Standards & Compliance
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/standards-compliance/service-standards" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Service Standards
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/standards-compliance" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Standards & Compliance
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
