'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  Eye,
  CheckCircle,
  Monitor,
  Keyboard,
  Volume2,
  Smartphone,
  MousePointer,
  AlignLeft,
} from 'lucide-react';

const standards = [
  { code: 'WCAG 2.1 AA', label: 'Web Content Accessibility Guidelines', status: 'Compliant' },
  { code: 'PNG ICT Policy', label: 'Government Digital Accessibility Standard', status: 'Compliant' },
  { code: 'ISO 9241-171', label: 'Ergonomics of Human-System Interaction', status: 'Aligned' },
  { code: 'EN 301 549',   label: 'Accessibility Requirements for ICT Products', status: 'Aligned' },
];

const features = [
  {
    icon: Monitor,
    title: 'Screen Reader Support',
    desc: 'All portal pages are structured with semantic HTML and ARIA landmarks to ensure compatibility with screen readers including NVDA, JAWS, and VoiceOver.',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    desc: 'Every interactive element on the portal is accessible via keyboard. Users can navigate all content and complete all actions without requiring a mouse or pointer device.',
  },
  {
    icon: Eye,
    title: 'Colour & Contrast',
    desc: 'Text and interactive elements meet WCAG 2.1 AA minimum contrast ratios. The portal does not rely solely on colour to convey meaning or status.',
  },
  {
    icon: AlignLeft,
    title: 'Readable Content',
    desc: 'Content is written in plain language and structured with clear headings, lists, and labels. Page layouts are logical and consistent across all sections.',
  },
  {
    icon: Volume2,
    title: 'Alternative Text',
    desc: 'All images, icons, and non-text elements include descriptive alternative text or are marked as decorative so screen reader users are not given redundant information.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'The portal is fully responsive and accessible across all device types and screen sizes, including mobile phones, tablets, and desktop displays.',
  },
];

const sections = [
  {
    number: '01',
    title: 'Our Commitment',
    content: [
      {
        heading: 'Policy Statement',
        text: 'The Digital Transformation Office (DTO) is committed to ensuring that the Digital Government Portal is accessible to all users, including those with visual, hearing, motor, or cognitive disabilities. Accessibility is an integral part of our digital design and development process, not an afterthought.',
      },
      {
        heading: 'Scope',
        text: 'This accessibility statement applies to all pages and features of the Digital Government Portal at digitalgov.gov.pg and the DTO Officer Portal. It covers public-facing content as well as authenticated officer portal features.',
      },
    ],
  },
  {
    number: '02',
    title: 'Known Limitations',
    content: [
      {
        heading: 'PDF Documents',
        text: 'Some legacy PDF documents available for download may not be fully accessible. We are progressively reviewing and replacing these with accessible HTML or tagged PDF versions. Where an accessible version is required urgently, please contact us directly.',
      },
      {
        heading: 'Third-Party Content',
        text: 'Some portal features embed content from third-party services, such as mapping tools. We work with our providers to ensure accessibility, however we cannot guarantee full compliance for all externally hosted content.',
      },
      {
        heading: 'Ongoing Improvement',
        text: 'We conduct regular accessibility audits and address identified issues on a priority basis. We aim to resolve critical accessibility barriers within 30 days and other issues within 90 days of identification.',
      },
    ],
  },
  {
    number: '03',
    title: 'Assistive Technology',
    content: [
      {
        heading: 'Supported Technologies',
        text: 'The portal has been tested with and supports the following assistive technologies: NVDA with Firefox, JAWS with Chrome, VoiceOver with Safari (macOS and iOS), and TalkBack with Chrome on Android.',
      },
      {
        heading: 'Browser Support',
        text: 'The portal is optimised for current versions of Chrome, Firefox, Safari, and Edge. For the best accessible experience, we recommend keeping your browser and assistive technology updated to the latest versions.',
      },
    ],
  },
  {
    number: '04',
    title: 'Feedback & Assistance',
    content: [
      {
        heading: 'Reporting Issues',
        text: 'If you experience accessibility barriers when using the portal, or if you need information in an alternative format, please contact us. We welcome feedback and are committed to responding to all accessibility-related enquiries promptly.',
      },
      {
        heading: 'Alternative Access',
        text: 'If you are unable to access information or complete a task due to an accessibility barrier, our support team can assist you by phone or email during business hours (Monday to Friday, 8am to 5pm). No user should be disadvantaged by an accessibility limitation in our systems.',
      },
      {
        heading: 'Formal Complaints',
        text: 'If you are not satisfied with our response to an accessibility concern, you may escalate your complaint to the DTO Director of Digital Services. We are committed to resolving all accessibility complaints fairly and within a reasonable timeframe.',
      },
    ],
  },
];

export default function AccessibilityPage() {
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
              <span className="text-white font-medium">Accessibility</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Accessibility</h1>
                <p className="text-xl text-blue-50 mt-2">Our commitment to an inclusive digital government</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE METRICS ───────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Standards</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Compliance & Conformance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Last audited: January 2026<br />
                <span className="text-gray-400">Next review: July 2026</span>
              </p>
            </div>

            {/* Standards table */}
            <div className="border border-gray-200 mb-8">
              {standards.map((s, i) => (
                <div key={i} className={['grid grid-cols-1 sm:grid-cols-5 gap-3 p-4 bg-white items-center', i > 0 ? 'border-t border-gray-100' : ''].join(' ')}>
                  <div className="sm:col-span-1">
                    <span className="inline-block text-xs font-bold text-primary bg-primary/5 border border-primary/20 px-2 py-1 rounded">
                      {s.code}
                    </span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-sm text-gray-700">{s.label}</p>
                  </div>
                  <div className="sm:col-span-1 sm:text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3" />
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div>
              {[
                'Portal is designed and tested against WCAG 2.1 Level AA criteria',
                'Accessibility audits are conducted bi-annually by an independent reviewer',
                'All new features undergo accessibility testing before release',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ACCESSIBILITY FEATURES ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Features</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Built-In Accessibility</h2>
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={[
                    'p-6 bg-white border-t border-gray-200 flex items-start gap-4',
                    index % 2 === 1 ? 'sm:border-l' : '',
                  ].join(' ')}
                >
                  <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{feature.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── POLICY SECTIONS ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Statement</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Accessibility Statement</h2>
              </div>
            </div>
            <div className="space-y-0">
              {sections.map((section, si) => (
                <div key={si} className="border border-gray-200 mb-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-gray-200">
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-xs font-bold rounded flex-shrink-0">
                      {section.number}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{section.title}</h3>
                  </div>
                  {section.content.map((item, ii) => (
                    <div key={ii} className={['p-5 grid grid-cols-1 sm:grid-cols-4 gap-3 bg-white', ii > 0 ? 'border-t border-gray-100' : ''].join(' ')}>
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
          </div>
        </section>

        {/* ─── CONTACT / CTA ────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white border-t-4 border-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Contact</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Accessibility Support</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  If you need assistance accessing our portal or would like to report an
                  accessibility barrier, our team is here to help.
                </p>
                <div className="border border-gray-200 bg-gray-50 divide-y divide-gray-100">
                  {[
                    { label: 'Email',    value: 'accessibility@digitalgov.gov.pg' },
                    { label: 'Phone',    value: '+675 180-1234' },
                    { label: 'Hours',    value: 'Monday – Friday, 8:00 AM – 5:00 PM' },
                    { label: 'Response', value: 'Within 5 business days' },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-4 px-4 py-3">
                      <span className="text-xs font-semibold text-gray-500 w-20 flex-shrink-0 pt-0.5">{c.label}</span>
                      <span className="text-xs text-gray-700">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 bg-gray-50 p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Related Pages</p>
                <div className="space-y-0">
                  {[
                    { label: 'Privacy Policy',         href: '/privacy-policy' },
                    { label: 'Terms of Service',        href: '/terms-of-service' },
                    { label: 'Standards & Compliance',  href: '/standards-compliance' },
                    { label: 'Contact the DTO',         href: '/contact' },
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
