'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  Shield,
  CheckCircle,
} from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    content: [
      {
        heading: 'Personal Information',
        text: 'When you register for or use the Digital Government Portal, we collect information you provide directly, including your full name, government agency, official email address, position title, contact number, and unique agency identifier.',
      },
      {
        heading: 'Usage Data',
        text: 'We automatically collect information about how you interact with our services, including IP addresses, browser type, pages visited, time spent on pages, and actions taken within the portal.',
      },
      {
        heading: 'Device Information',
        text: 'We collect information about the device you use to access our services, including device type, operating system, and browser version to ensure compatibility and security.',
      },
    ],
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    content: [
      {
        heading: 'Service Delivery',
        text: 'Your information is used to authenticate your identity, provide access to portal features, process service requests, and communicate updates regarding your submissions and applications.',
      },
      {
        heading: 'Security & Compliance',
        text: 'We use collected data to monitor for unauthorised access, investigate security incidents, and ensure compliance with government ICT policies and applicable legislation.',
      },
      {
        heading: 'Improvement of Services',
        text: 'Aggregated and anonymised usage data helps us understand how the portal is used, identify areas for improvement, and develop new features that better serve Digital Transformation Officers.',
      },
    ],
  },
  {
    number: '03',
    title: 'Data Sharing & Disclosure',
    content: [
      {
        heading: 'Within Government',
        text: 'Your information may be shared with other authorised government agencies strictly on a need-to-know basis, where required to process your service requests or fulfil statutory obligations.',
      },
      {
        heading: 'No Commercial Sharing',
        text: 'We do not sell, rent, or trade your personal information to any third party for commercial purposes. Your data is used solely for official government operations.',
      },
      {
        heading: 'Legal Requirements',
        text: 'We may disclose your information when required by law, court order, or government regulation, or to protect the rights, property, or safety of citizens and government assets.',
      },
    ],
  },
  {
    number: '04',
    title: 'Data Security',
    content: [
      {
        heading: 'Technical Safeguards',
        text: 'All data transmitted to and from the portal is encrypted using TLS 1.3. Data at rest is protected with AES-256 encryption. Access controls, multi-factor authentication, and role-based permissions restrict data access to authorised personnel only.',
      },
      {
        heading: 'Monitoring',
        text: 'Our 24/7 Security Operations Centre (SOC) continuously monitors for security threats, unauthorised access attempts, and anomalous activity across all systems.',
      },
      {
        heading: 'Incident Response',
        text: 'In the event of a data breach affecting your information, we will notify affected users within 72 hours of becoming aware of the breach, in accordance with applicable security incident procedures.',
      },
    ],
  },
  {
    number: '05',
    title: 'Data Retention',
    content: [
      {
        heading: 'Retention Period',
        text: 'We retain your personal information for as long as your portal account is active or as needed to provide services. Account data is retained for a minimum of seven (7) years after account closure to comply with government record-keeping requirements.',
      },
      {
        heading: 'Deletion',
        text: 'Upon request, personal data that is no longer required for legal or operational purposes will be securely deleted or anonymised in accordance with the Government of Papua New Guinea records management policies.',
      },
    ],
  },
  {
    number: '06',
    title: 'Your Rights',
    content: [
      {
        heading: 'Access & Correction',
        text: 'You have the right to request access to the personal information we hold about you and to request corrections where the information is inaccurate or incomplete.',
      },
      {
        heading: 'Withdrawal of Consent',
        text: 'Where processing is based on consent, you may withdraw consent at any time. This will not affect the lawfulness of processing carried out prior to withdrawal.',
      },
      {
        heading: 'Complaints',
        text: 'If you believe your privacy rights have been breached, you may lodge a complaint with the Digital Transformation Office. We will investigate and respond within 30 business days.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── HERO ──────────────────────────────────────────────────────── */}
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
              <span className="text-white font-medium">Privacy Policy</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                <p className="text-xl text-blue-50 mt-2">How we collect, use, and protect your information</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OVERVIEW ─────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Overview</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Our Commitment to Privacy</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Effective: 1 January 2026<br />
                <span className="text-gray-400">Last reviewed: February 2026</span>
              </p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
              The Digital Transformation Office (DTO) of Papua New Guinea is committed to protecting
              the privacy and security of personal information collected through the Digital Government
              Portal and associated services.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This Privacy Policy describes how we collect, use, store, and share your information
              when you access or use the DTO Officer Portal and related government digital services.
              By using our services, you acknowledge and agree to the practices described in this policy.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              This policy applies to all Digital Transformation Officers, government agency staff,
              and any other authorised users who access the portal.
            </p>
            <div>
              {[
                'Your data is never sold or shared for commercial purposes',
                'All data is stored within Papua New Guinea government infrastructure',
                'Access is restricted to authorised personnel on a need-to-know basis',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── POLICY SECTIONS ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-0">
            {sections.map((section, si) => (
              <div key={si} className="border border-gray-200 mb-4">
                {/* Section header */}
                <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-200">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                    {section.number}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{section.title}</h3>
                </div>
                {/* Sub-sections */}
                {section.content.map((item, ii) => (
                  <div key={ii} className={['p-5 grid grid-cols-1 sm:grid-cols-4 gap-3', ii > 0 ? 'border-t border-gray-100' : ''].join(' ')}>
                    <div className="sm:col-span-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-snug">{item.heading}</p>
                    </div>
                    <div className="sm:col-span-3">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ─── CONTACT / CTA ────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Contact</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Privacy Enquiries</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights,
                  please contact the DTO Privacy Officer.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Email',   value: 'privacy@digitalgov.gov.pg' },
                    { label: 'Phone',   value: '+675 180-1234' },
                    { label: 'Address', value: 'Level 5, IPA Haus, Waigani Drive, Port Moresby' },
                    { label: 'Response', value: 'Within 30 business days' },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-20 flex-shrink-0 pt-0.5">{c.label}</span>
                      <span className="text-xs text-gray-700">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Related Policies</p>
                <div className="space-y-0">
                  {[
                    { label: 'Terms of Service', href: '/terms-of-service' },
                    { label: 'Standards & Compliance', href: '/standards-compliance' },
                    { label: 'Data Governance', href: '/standards-compliance/data-governance' },
                    { label: 'Contact the DTO', href: '/contact' },
                  ].map((item, i, arr) => (
                    <Link
                      key={i}
                      href={item.href}
                      className={['flex items-center justify-between py-2.5 text-sm font-semibold text-gray-600 hover:text-primary transition-colors group', i < arr.length - 1 ? 'border-b border-gray-100' : ''].join(' ')}
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
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
