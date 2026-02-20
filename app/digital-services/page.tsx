'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  ChevronLeft,
  FileText,
  Mail,
  Cloud,
  Server,
  Database,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Application Services',
    desc: 'Secure hosting for government applications with 99.9% uptime guarantee, automated monitoring, and full lifecycle management.',
    features: ['Custom App Hosting', 'Web Application Deployment', 'Database Management', '24/7 Monitoring & Support'],
  },
  {
    icon: Mail,
    title: 'Email Hosting',
    desc: 'Professional government email services with advanced security, anti-spam protection, and unlimited storage for all agencies.',
    features: ['Government Domain Emails', 'Advanced Security', 'Large Storage Capacity', 'Mobile Device Support'],
  },
  {
    icon: Cloud,
    title: 'Virtual Private Cloud',
    desc: 'Scalable, isolated cloud infrastructure with dedicated resources, high availability, and full agency-level control.',
    features: ['Isolated Virtual Networks', 'Scalable Compute Resources', 'High Availability', 'Disaster Recovery'],
  },
  {
    icon: Server,
    title: 'Data Hosting',
    desc: 'Enterprise-grade data centre services with encrypted storage, automated backups, and compliance with government data standards.',
    features: ['Secure Data Storage', 'Regular Automated Backups', 'Standards Compliance', 'Fast Data Access'],
  },
  {
    icon: Database,
    title: 'Shared Services',
    desc: 'Reusable common services enabling agencies to rapidly adopt digital capabilities without building from scratch.',
    features: ['Identity Management', 'Payment Gateways', 'Document Management', 'Notification Services'],
  },
  {
    icon: Shield,
    title: 'Security Services',
    desc: 'Comprehensive cybersecurity solutions protecting government systems, data, and users against evolving threats.',
    features: ['24/7 Threat Monitoring', 'Security Audits', 'Incident Response', 'Compliance Management'],
  },
];

const metrics = [
  { icon: FileText,   value: '15+',   label: 'Services Available',  sublabel: 'For government agencies' },
  { icon: Users,      value: '120+',  label: 'Agencies Onboarded',  sublabel: 'Active subscribers' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime SLA',          sublabel: 'Average availability' },
  { icon: Clock,      value: '24/7',  label: 'Support',             sublabel: 'Round-the-clock operations' },
];

export default function DigitalServicesPage() {
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
              <span className="text-white font-medium">Digital Services</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Digital Services</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Comprehensive digital services for government departments and agencies
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
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Mandate</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">What We Offer</h2>
                <p className="text-sm text-gray-600">
                  Digital services for all government departments at national, provincial, and district levels
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Gazette Notice No. 109<br />
                <span className="text-gray-400">Department of ICT, Papua New Guinea</span>
              </p>
            </div>

            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Digital Transformation Office was approved under Gazette Notice No. 109 to provide
                public service bodies with enhanced digital connectivity and modern ICT services.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                We currently offer the following digital services to all Government Departments and
                Agencies at the National, Provincial, and District Government levels — enabling
                efficient, secure, and cost-effective service delivery across the public sector.
              </p>
              <div>
                {[
                  'Services available to all PNG government agencies at every level',
                  'Enterprise-grade security and compliance built in by default',
                  'Dedicated support and onboarding assistance for every agency',
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

        {/* ─── 3. SERVICES DIRECTORY ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Services</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Digital Services Directory</h2>
                <p className="text-sm text-gray-600">
                  Government digital services provided by the Digital Transformation Office
                </p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {services.length} services available<br />
                <span className="text-gray-400">For PNG Government Agencies</span>
              </p>
            </div>

            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {services.map((service, index) => (
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
                          Available Online
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.desc}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <service.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      Enquire about {service.title}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                Showing all {services.length} available digital services. All services are accessible to authorised government agencies.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm font-semibold group">
                  Request a Service
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. KEY METRICS ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Impact</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Performance Indicators</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Annual Performance Report</span>
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
            <p className="mt-3 text-xs text-gray-400 italic">
              * Statistics reflect operational data from the most recent reporting quarter.
            </p>
          </div>
        </section>

        {/* ─── 5. CTA ──────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Get Started
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Access Digital Services
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Authorised Papua New Guinea government employees and agencies can sign in to
                  access the full suite of digital services, tools, and resources provided by
                  the Digital Transformation Office.
                </p>
                <div className="border border-gray-200 bg-gray-50 divide-y divide-gray-100">
                  {[
                    { label: 'Eligible users',  value: 'PNG Government employees and agencies' },
                    { label: 'Access method',   value: 'Agency-issued credentials via ICT administrator' },
                    { label: 'Support hours',   value: 'Monday – Friday, 8:00 am – 5:00 pm (PGT)' },
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
                  Sign In or Get Help
                </p>
                <div className="space-y-3 mb-5">
                  <Link href="/login" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Member Login
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
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Not yet registered?</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Contact your agency ICT administrator or{' '}
                    <Link href="/contact" className="text-primary hover:underline font-medium">reach out to the DTO</Link>
                    {' '}for onboarding and access provisioning assistance.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Back to Home
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Infrastructure
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">Portal is currently online and operational</span>
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
