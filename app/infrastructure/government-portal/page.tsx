'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users,
  Briefcase,
  Info,
  Lock,
  CreditCard,
  Bell,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '50K+',  label: 'Registered Users',  sublabel: 'Active portal accounts' },
  { value: '15+',   label: 'Services Online',   sublabel: 'Available to citizens' },
  { value: '24/7',  label: 'Access',            sublabel: 'Always available' },
  { value: '99.9%', label: 'Uptime',            sublabel: 'Portal availability' },
];

const portalFeatures = [
  { icon: Users,      title: 'Citizen Services',   desc: 'Access to government services including applications, payments, document requests, and service status tracking.',            features: ['Application Tracking', 'Document Requests', 'Status Updates'] },
  { icon: Briefcase,  title: 'Business Services',  desc: 'Business registration, licensing, permits, tax filing, and procurement opportunities for enterprises.',                       features: ['Business Registration', 'Licensing & Permits', 'Tax Filing'] },
  { icon: Info,       title: 'Information Hub',    desc: 'Centralised access to government information, policies, regulations, and public data resources.',                             features: ['Policy Library', 'Open Data Portal', 'Regulations Database'] },
  { icon: Lock,       title: 'Digital Identity',   desc: 'Secure authentication and single sign-on enabling seamless access across all government services.',                           features: ['Single Sign-On', 'Multi-factor Auth', 'Identity Verification'] },
  { icon: CreditCard, title: 'Payment Gateway',    desc: 'Integrated payment processing for government fees, taxes, and service charges with multiple payment options.',               features: ['Online Payments', 'Payment History', 'Multiple Methods'] },
  { icon: Bell,       title: 'Notifications',      desc: 'Automated alerts and notifications for application status, deadlines, and important government announcements.',              features: ['SMS Alerts', 'Email Notifications', 'In-portal Messages'] },
];

const benefits = [
  { title: 'Convenience',   desc: '24/7 access to government services from anywhere, eliminating the need for physical visits and reducing wait times.',    initiatives: ['Mobile-responsive design', 'Offline-capable features', 'Multi-language support'] },
  { title: 'Transparency',  desc: 'Real-time status tracking, clear processes, and open data promoting accountability and trust in government.',              initiatives: ['Application status tracker', 'Open data dashboards', 'Service level reporting'] },
  { title: 'Efficiency',    desc: 'Automated workflows, digital documents, and electronic payments reducing processing time and administrative burden.',      initiatives: ['Automated approvals', 'E-signature support', 'Paperless processing'] },
];

export default function GovernmentPortalPage() {
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
              <span className="text-white font-medium">Government Portal</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Government Portal</h1>
                <p className="text-xl text-blue-50 mt-2">Single digital gateway for accessing government services and information</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Usage</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Portal at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Portal Analytics Report</span>
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
                <p className="text-sm text-gray-600">The primary digital interface between government and citizens</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                The Government Portal serves as the primary digital interface between government and
                citizens, providing a unified platform for accessing services, information, and engaging
                with government agencies.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Built on user-centred design principles, the portal offers intuitive navigation,
                personalised dashboards, and responsive design ensuring accessibility across desktop,
                tablet, and mobile devices.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Integration with government systems enables real-time service delivery, automated
                processing, and seamless data exchange while maintaining security and privacy through
                robust authentication and authorisation mechanisms.
              </p>
              <div>
                {['Mobile-responsive and accessible on all devices', 'Single sign-on across all government services', 'Real-time application and payment processing'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. PORTAL FEATURES ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">What's Available</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Portal Features</h2>
                <p className="text-sm text-gray-600">Six core modules serving citizens, businesses, and government</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {portalFeatures.length} modules<br />
                <span className="text-gray-400">All modules live</span>
              </p>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {portalFeatures.map((feature, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index % 2 === 1 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          Available Online
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{feature.desc}</p>
                      <ul className="space-y-1">
                        {feature.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <feature.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. KEY BENEFITS / CTA ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Value</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Key Benefits</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  The Government Portal transforms how Papua New Guineans interact with government —
                  making services faster, simpler, and more transparent.
                </p>
                <div className="border-x border-b border-gray-200">
                  {benefits.map((b, index) => (
                    <div key={index} className="border-t border-gray-200">
                      <div className="flex items-center gap-3 px-5 py-2.5 bg-gray-50 border-b border-gray-200">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded flex-shrink-0">{index + 1}</span>
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{b.title}</span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 leading-relaxed mb-2">{b.desc}</p>
                        <ul className="space-y-1">
                          {b.initiatives.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                              <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Portal Access</p>
                <div className="space-y-3 mb-5">
                  <Link href="/login" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-semibold justify-between group">
                      Sign In to Portal
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
                    {' '}for onboarding assistance.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/infrastructure/cyber-security" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Cyber Security
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
