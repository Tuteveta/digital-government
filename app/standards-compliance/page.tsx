'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  Shield,
  FileCheck,
  Database,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: 'ISO',  label: '27001 Certified',  sublabel: 'Information security' },
  { value: 'NIST', label: 'Framework Aligned', sublabel: 'Cybersecurity standard' },
  { value: 'WCAG', label: '2.1 AA Compliant',  sublabel: 'Accessibility standard' },
  { value: '100%', label: 'Policy Coverage',   sublabel: 'Across all agencies' },
];

const frameworkAreas = [
  { icon: Database, title: 'Data Governance',             href: '/standards-compliance/data-governance', badge: 'Active', desc: 'Policies, procedures, and standards for managing government data throughout its lifecycle.',             features: ['Data Classification', 'Data Lifecycle', 'Data Stewardship'] },
  { icon: FileCheck, title: 'Compliance',                 href: '/standards-compliance/compliance',      badge: 'Active', desc: 'Ensuring adherence to legal, regulatory, and policy requirements across all digital services.',        features: ['Legal Compliance', 'Regulatory Audits', 'Risk Management'] },
  { icon: Award,    title: 'Service Standards',           href: '/standards-compliance/service-standards', badge: 'Active', desc: 'Measurable service quality standards covering availability, performance, and user experience.',       features: ['SLA Management', 'Quality Metrics', 'Continuous Improvement'] },
  { icon: Shield,   title: 'Digital Transformation Office', href: '/standards-compliance/dto',           badge: 'Active', desc: 'Central authority driving digital government standards, policies, and governance across PNG.',           features: ['Policy Development', 'Standards Setting', 'Agency Support'] },
];

const securityStandards = [
  {
    title: 'Information Security', badge: 'ISO 27001 Certified',
    desc: 'Comprehensive information security management covering access control, encryption, and incident management.',
    features: ['Access Control & Authentication', 'AES-256 Encryption', 'TLS 1.3 Communications', 'Security Incident Management', 'Penetration Testing & Audits'],
  },
  {
    title: 'Cybersecurity', badge: 'NIST Aligned',
    desc: 'Proactive cyber threat management through intelligence-driven monitoring and structured response capabilities.',
    features: ['Threat Intelligence & Monitoring', 'Vulnerability Management', 'Security Awareness Training', 'Incident Response Procedures', 'Business Continuity Planning'],
  },
];

const digitalStandards = [
  { title: 'User-Centered Design', desc: 'Services designed with user needs first' },
  { title: 'Accessibility',        desc: 'WCAG 2.1 AA compliance for all services' },
  { title: 'Open Standards',       desc: 'Open and interoperable technologies' },
  { title: 'Agile Delivery',       desc: 'Iterative development and improvement' },
  { title: 'Digital by Default',   desc: 'Digital as the primary channel' },
  { title: 'Data-Driven',          desc: 'Evidence-based decision making' },
  { title: 'Cloud First',          desc: 'Leveraging cloud technologies' },
  { title: 'Privacy by Design',    desc: 'Privacy built into every service' },
];

const policies = [
  { title: 'ICT Policy',           desc: 'Comprehensive policies governing ICT use, procurement, and management across government.' },
  { title: 'Data Sharing Policy',  desc: 'Guidelines for secure and appropriate sharing of data between government entities.' },
  { title: 'Cybersecurity Policy', desc: 'Framework for protecting government digital assets and critical infrastructure.' },
];

export default function StandardsCompliancePage() {
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
              <span className="text-white font-medium">Standards & Compliance</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Standards & Compliance</h1>
                <p className="text-xl text-blue-50 mt-2">Ensuring quality, security, and reliability in government digital services</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Certification</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Standards at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Standards & Compliance Report</span>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Our Commitment to Excellence</h2>
                <p className="text-sm text-gray-600">Foundational guide for crafting trusted government digital services</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Standards represent a foundational guide for crafting government digital
                services with simplicity, clarity, reliability, and trustworthiness — designed to
                benefit citizens and businesses across Papua New Guinea.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We maintain the highest standards of governance, security, and service quality to
                protect citizen data and ensure seamless service delivery across all government
                departments and agencies.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Through strategic planning, compliance monitoring, and continuous improvement, the
                DTO ensures digital initiatives align with national priorities and international
                best practices.
              </p>
              <div>
                {[
                  'ISO 27001 certified information security management',
                  'NIST Cybersecurity Framework alignment',
                  'WCAG 2.1 AA accessibility compliance across all services',
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

        {/* ─── 4. GOVERNANCE FRAMEWORK ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Framework</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Governance Areas</h2>
                <p className="text-sm text-gray-600">Four domains forming our standards and compliance architecture</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All areas active
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {frameworkAreas.map((area, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index % 2 === 1 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          {area.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">
                        <Link href={area.href} className="hover:underline">{area.title}</Link>
                      </h3>
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

        {/* ─── 5. SECURITY STANDARDS ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Security</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Security Standards</h2>
                <p className="text-sm text-gray-600">International certifications protecting government digital assets</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {securityStandards.length} certifications<br />
                <span className="text-gray-400">All standards current</span>
              </p>
            </div>
            <div className="border-x border-b border-gray-200">
              {securityStandards.map((s, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{s.title}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">{s.badge}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Includes</p>
                      <ul className="space-y-1.5">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />{f}
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

        {/* ─── 6. DIGITAL SERVICE STANDARDS ────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Principles</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Digital Service Standards</h2>
                <p className="text-sm text-gray-600">Eight principles guiding government digital service design and delivery</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {digitalStandards.length} principles<br />
                <span className="text-gray-400">Mandatory for all services</span>
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-gray-200 divide-x divide-y divide-gray-200">
              {digitalStandards.map((s, i) => (
                <div key={i} className="p-5 sm:p-6 bg-white hover:bg-gray-50 transition-colors">
                  <div className="inline-flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded mb-3">{i + 1}</div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{s.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. POLICY FRAMEWORK / CTA ───────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Policies</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Policy Framework</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  A comprehensive suite of policies underpins standards and compliance across all
                  government digital operations.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {policies.map((p, i) => (
                    <div key={i} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-36 flex-shrink-0 pt-0.5">{p.title}</span>
                      <span className="text-xs text-gray-700">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Quick Navigation</p>
                <div className="space-y-3 mb-5">
                  <Link href="/standards-compliance/dto" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Digital Transformation Office
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/standards-compliance/data-governance" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Data Governance
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Contact Compliance Team
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    For compliance queries, standards documentation, or policy guidance, contact the
                    DTO Compliance Team directly.
                  </p>
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

