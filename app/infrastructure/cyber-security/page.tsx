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
  Lock,
  Eye,
  Cpu,
  Users,
  Network,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const metrics = [
  { value: '24/7',  label: 'SOC Monitoring',    sublabel: 'Security operations centre' },
  { value: '0',     label: 'Major Breaches',     sublabel: 'Since establishment' },
  { value: '99.9%', label: 'Threat Detection',   sublabel: 'Automated coverage' },
  { value: 'ISO',   label: '27001 Certified',    sublabel: 'Information security standard' },
];

const domains = [
  { icon: Network,  title: 'Network Security',      desc: 'Firewalls, intrusion detection/prevention, DDoS protection, and network segmentation securing government networks.',                     features: ['Next-gen Firewalls', 'IDS/IPS', 'DDoS Protection'] },
  { icon: Lock,     title: 'Application Security',   desc: 'Secure development practices, code review, vulnerability scanning, and web application firewalls protecting applications.',               features: ['WAF', 'SAST/DAST Scanning', 'Secure SDLC'] },
  { icon: Shield,   title: 'Data Security',          desc: 'Encryption at rest and in transit, data loss prevention, and access controls protecting sensitive information.',                          features: ['AES-256 Encryption', 'DLP Policies', 'Key Management'] },
  { icon: Users,    title: 'Identity & Access',      desc: 'Multi-factor authentication, single sign-on, role-based access control, and privileged access management.',                              features: ['MFA', 'SSO', 'PAM'] },
  { icon: Cpu,      title: 'Endpoint Security',      desc: 'Anti-malware, device encryption, mobile device management, and endpoint detection and response.',                                        features: ['EDR', 'MDM', 'Device Encryption'] },
  { icon: Eye,      title: 'Security Operations',    desc: '24/7 security monitoring, incident response, threat intelligence, and security event management.',                                       features: ['SIEM', 'SOAR', 'Threat Intelligence'] },
];

const initiatives = [
  { title: 'Awareness Training',  desc: 'Regular security awareness programs for government employees on phishing, social engineering, and best practices.', features: ['Phishing Simulations', 'E-learning Modules', 'Annual Certification'] },
  { title: 'Threat Intelligence', desc: 'Proactive threat hunting and intelligence sharing to identify and mitigate emerging threats before they cause impact.',   features: ['Threat Feeds', 'Dark Web Monitoring', 'Indicator Sharing'] },
  { title: 'Incident Response',   desc: 'Structured incident response process with clear escalation procedures, playbooks, and post-incident analysis.',          features: ['Response Playbooks', 'Escalation Matrix', 'Post-incident Review'] },
];

export default function CyberSecurityPage() {
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
              <span className="text-white font-medium">Cyber Security</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Cyber Security</h1>
                <p className="text-xl text-blue-50 mt-2">Comprehensive security framework protecting government digital assets and data</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Security Posture</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Security at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Reporting Period: FY 2024–2025<br />
                <span className="text-gray-400">Source: DTO Security Operations Report</span>
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
                <p className="text-sm text-gray-600">Defence-in-depth protecting all government digital assets</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
                Our comprehensive cybersecurity programme protects government digital assets against
                evolving threats through a defence-in-depth strategy, continuous monitoring, and
                rapid incident response.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The Security Operations Centre (SOC) provides 24/7 monitoring and response capabilities,
                leveraging advanced security tools, threat intelligence, and skilled analysts to detect
                and respond to security incidents.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Regular security assessments, penetration testing, and vulnerability management ensure
                continuous improvement of our security posture while compliance audits verify adherence
                to security standards and regulations.
              </p>
              <div>
                {['ISO 27001 certified security management system', '24/7 Security Operations Centre (SOC)', 'Zero major security breaches since establishment'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. SECURITY DOMAINS ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Coverage</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Security Domains</h2>
                <p className="text-sm text-gray-600">Six domains forming our defence-in-depth architecture</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                All domains active
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {domains.map((domain, index) => (
                <div key={index} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index % 2 === 1 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          Active
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-1.5">{domain.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{domain.desc}</p>
                      <ul className="space-y-1">
                        {domain.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                      <domain.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. KEY INITIATIVES / CTA ────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Programmes</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Key Initiatives</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Our proactive security programmes build resilience across people, processes, and
                  technology to stay ahead of evolving cyber threats.
                </p>
                <div className="border-x border-b border-gray-200">
                  {initiatives.map((item, index) => (
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
                      Report a Security Issue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/infrastructure/government-portal" className="block">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white py-3 text-sm font-semibold justify-between group">
                      Government Portal
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <Link href="/infrastructure/government-cloud" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Government Cloud
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/infrastructure/government-portal" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors group">
                    Government Portal
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
