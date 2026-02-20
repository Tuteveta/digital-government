'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  FileText,
  CheckCircle,
} from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Acceptance of Terms',
    content: [
      {
        heading: 'Agreement',
        text: 'By accessing or using the Digital Government Portal and associated services operated by the Digital Transformation Office (DTO) of Papua New Guinea, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the portal.',
      },
      {
        heading: 'Eligibility',
        text: 'Access to this portal is restricted to designated Digital Transformation Officers and authorised government agency staff. Use of this portal constitutes your representation that you are an authorised user and that your access credentials have been issued by the DTO.',
      },
    ],
  },
  {
    number: '02',
    title: 'Portal Access & Accounts',
    content: [
      {
        heading: 'Account Security',
        text: 'You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify the DTO immediately upon becoming aware of any unauthorised use of your account or any other breach of security.',
      },
      {
        heading: 'Access Restrictions',
        text: 'Your portal access is personal and non-transferable. You must not share your credentials with any other person. Access is granted on the basis of your role and department, and is subject to ongoing review and revocation by the DTO at any time.',
      },
      {
        heading: 'Account Termination',
        text: 'The DTO reserves the right to suspend or terminate your account without notice if you violate these Terms, your employment with a government agency ends, or your access is no longer required for official duties.',
      },
    ],
  },
  {
    number: '03',
    title: 'Acceptable Use',
    content: [
      {
        heading: 'Permitted Use',
        text: 'The portal may be used solely for legitimate government business purposes, including submitting service requests, accessing compliance resources, registering for training, and performing duties assigned to your role as a Digital Transformation Officer.',
      },
      {
        heading: 'Prohibited Activities',
        text: 'You must not use the portal to transmit malicious code, attempt to gain unauthorised access to systems, interfere with the operation of the portal, engage in any activity that violates Papua New Guinea law, or use the portal for any personal, commercial, or non-governmental purpose.',
      },
      {
        heading: 'Content Standards',
        text: 'All content you submit through the portal must be accurate, truthful, and relevant to your official duties. You must not submit false, misleading, or defamatory information. The DTO reserves the right to remove any content that violates these standards.',
      },
    ],
  },
  {
    number: '04',
    title: 'Intellectual Property',
    content: [
      {
        heading: 'Government Ownership',
        text: 'All content, software, documentation, templates, and materials available on the portal are the property of the Government of Papua New Guinea or its licensors. These are protected by copyright and other intellectual property laws.',
      },
      {
        heading: 'Limited Licence',
        text: 'You are granted a limited, non-exclusive, non-transferable licence to access and use portal content solely for official government purposes. This licence does not permit reproduction, distribution, modification, or commercial use of any portal materials.',
      },
    ],
  },
  {
    number: '05',
    title: 'Data & Privacy',
    content: [
      {
        heading: 'Privacy Policy',
        text: 'Your use of the portal is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the portal, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.',
      },
      {
        heading: 'Government Records',
        text: 'All data and content submitted through the portal may constitute official government records subject to the record-keeping requirements of Papua New Guinea. Submissions may be subject to disclosure under applicable legislation.',
      },
    ],
  },
  {
    number: '06',
    title: 'Liability & Disclaimers',
    content: [
      {
        heading: 'Service Availability',
        text: 'While the DTO endeavours to maintain portal availability at all times, we do not warrant that the portal will be uninterrupted, error-free, or free of viruses or other harmful components. Planned and unplanned maintenance may cause temporary unavailability.',
      },
      {
        heading: 'Limitation of Liability',
        text: 'To the extent permitted by law, the Government of Papua New Guinea and the DTO shall not be liable for any indirect, incidental, or consequential loss arising from your use of or inability to use the portal, even if we have been advised of the possibility of such loss.',
      },
      {
        heading: 'Accuracy of Information',
        text: 'Portal content is provided for informational purposes and is updated periodically. The DTO makes reasonable efforts to ensure accuracy but does not warrant that all information is current, complete, or free from errors. Users should verify critical information with the relevant authority.',
      },
    ],
  },
  {
    number: '07',
    title: 'Changes to These Terms',
    content: [
      {
        heading: 'Amendments',
        text: 'The DTO reserves the right to modify these Terms of Service at any time. Continued use of the portal following notification of changes constitutes your acceptance of the revised terms. We will endeavour to provide reasonable notice of material changes.',
      },
      {
        heading: 'Governing Law',
        text: 'These Terms are governed by the laws of Papua New Guinea. Any dispute arising from your use of the portal shall be subject to the exclusive jurisdiction of the courts of Papua New Guinea.',
      },
    ],
  },
];

export default function TermsOfServicePage() {
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
              <span className="text-white font-medium">Terms of Service</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
                <p className="text-xl text-blue-50 mt-2">Conditions governing use of the Digital Government Portal</p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Terms & Conditions</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                Effective: 1 January 2026<br />
                <span className="text-gray-400">Last reviewed: February 2026</span>
              </p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed border-l-4 border-primary/30 pl-4 mb-4">
              These Terms of Service govern your access to and use of the Digital Government
              Portal operated by the Digital Transformation Office (DTO) of Papua New Guinea.
              Please read these terms carefully before using the portal.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              By registering for or using the DTO Officer Portal, you confirm that you are an
              authorised Digital Transformation Officer or government agency staff member, and
              that you agree to comply with these Terms of Service and all applicable laws and
              government policies.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              These Terms should be read in conjunction with our Privacy Policy, which describes
              how we handle your personal information.
            </p>
            <div>
              {[
                'Access is restricted to authorised government personnel only',
                'All portal activity is logged and subject to audit',
                'Misuse may result in disciplinary or legal action',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TERMS SECTIONS ───────────────────────────────────────────── */}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Terms Enquiries</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  If you have questions about these Terms of Service or wish to report a
                  breach of these terms, please contact the DTO Legal and Compliance team.
                </p>
                <div className="border border-gray-200 bg-white divide-y divide-gray-100">
                  {[
                    { label: 'Email',    value: 'legal@digitalgov.gov.pg' },
                    { label: 'Phone',    value: '+675 180-1234' },
                    { label: 'Address',  value: 'Level 5, IPA Haus, Waigani Drive, Port Moresby' },
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
                    { label: 'Privacy Policy',         href: '/privacy-policy' },
                    { label: 'Standards & Compliance', href: '/standards-compliance' },
                    { label: 'Data Governance',        href: '/standards-compliance/data-governance' },
                    { label: 'Contact the DTO',        href: '/contact' },
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
