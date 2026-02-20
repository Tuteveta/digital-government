'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Server,
  Database,
  Monitor,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '99.9%',  label: 'Availability',      sublabel: 'Platform uptime SLA' },
  { value: '500TB+', label: 'Storage Managed',    sublabel: 'Total cloud storage' },
  { value: '120+',   label: 'Agencies Hosted',    sublabel: 'Government tenants' },
  { value: '3x',     label: 'Faster Deployment',  sublabel: 'vs on-premise baseline' },
];

const serviceModels = [
  { icon: Server,   title: 'Infrastructure as a Service', desc: 'Virtual machines, storage, and networking resources on-demand with full control over operating systems and applications.',         features: ['Virtual Machines', 'Object Storage', 'Virtual Networking'] },
  { icon: Database, title: 'Platform as a Service',       desc: 'Development platforms, databases, and middleware services enabling rapid application development and deployment.',                  features: ['Managed Databases', 'App Runtime', 'CI/CD Pipelines'] },
  { icon: Monitor,  title: 'Software as a Service',       desc: 'Ready-to-use applications including email, collaboration tools, and enterprise software accessible via web browsers.',              features: ['Email & Calendaring', 'Document Collaboration', 'Video Conferencing'] },
];

const features = [
  { title: 'Compliance',  desc: 'Meets government security and compliance requirements with data residency, encryption, and audit capabilities.',                         initiatives: ['Data Residency Controls', 'Audit Logging', 'ISO 27001 Aligned'] },
  { title: 'Elasticity',  desc: 'Auto-scaling capabilities to handle varying workloads with pay-per-use pricing for cost optimisation.',                                   initiatives: ['Auto-scaling Groups', 'Pay-per-use Billing', 'Resource Quotas'] },
  { title: 'Resilience',  desc: 'Multi-zone deployment with automated backup, disaster recovery, and high availability for critical services.',                            initiatives: ['Multi-zone Redundancy', 'Automated Backups', 'Disaster Recovery'] },
];

export default function GovernmentCloudPage() {
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
              <span className="text-white font-medium">Government Cloud</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Government Cloud</h1>
                <p className="text-xl text-blue-50 mt-2">Secure, scalable cloud platform for government applications and services</p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cloud at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Cloud Operations Report</span>
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
                <p className="text-sm text-gray-600">Private cloud security with public cloud flexibility</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Government Cloud provides a secure, compliant, and cost-effective platform for
                hosting government applications and data.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Built on enterprise-grade infrastructure, it offers the flexibility and scalability of
                public cloud with the security and control of private infrastructure. The platform
                supports hybrid cloud deployments, allowing agencies to maintain sensitive workloads
                on-premises while leveraging cloud services for less critical applications.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Advanced automation, orchestration, and self-service capabilities enable agencies to
                provision resources quickly while maintaining governance and cost control through
                centralised management and monitoring.
              </p>
              <div>
                {['Government data stays within PNG borders', 'Self-service provisioning with governance guardrails', 'Automated backup and disaster recovery'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. SERVICE MODELS ───────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Offerings</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Service Models</h2>
                <p className="text-sm text-gray-600">Three consumption models covering all agency needs</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All models available
              </div>
            </div>
            <div className="border-x border-b border-gray-200">
              {serviceModels.map((model, index) => (
                <div key={index} className="border-t border-gray-200">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{model.title}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-5 flex items-start gap-4 hover:bg-gray-50/70 transition-colors">
                      <div className="w-9 h-9 border border-gray-200 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <model.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{model.desc}</p>
                      </div>
                    </div>
                    <div className="p-5 hover:bg-gray-50/70 transition-colors">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Includes</p>
                      <ul className="space-y-1.5">
                        {model.features.map((f, fi) => (
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

        {/* ─── 5. KEY FEATURES / CTA ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Capabilities</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Key Features</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  The Government Cloud is designed to meet the compliance, performance, and resilience
                  requirements of Papua New Guinea&apos;s public sector.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-24 flex-shrink-0 pt-0.5">{f.title}</span>
                      <span className="text-xs text-gray-700">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Quick Navigation</p>
                <div className="space-y-3 mb-5">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Request Cloud Access
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/infrastructure/cyber-security" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Cyber Security
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/infrastructure/government-private-network" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Government Network
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure/cyber-security" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Cyber Security
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
