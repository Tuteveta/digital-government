'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileCheck, Lock, Users, BookOpen, CheckCircle, AlertCircle, Award } from 'lucide-react';

export default function StandardsCompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.1) 75%)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
            }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Standards & Compliance</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-blue-100">
              Ensuring quality, security, and reliability in government digital services
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment to Excellence</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Digital Standards represent a foundational guide for crafting government digital 
                services with simplicity, clarity, reliability, and trustworthiness. Aimed at benefiting 
                citizens and businesses, these principles ensure efficient design and delivery.
              </p>
              <p className="text-lg text-gray-700">
                We maintain the highest standards of governance, security, and service quality to protect 
                citizen data and ensure seamless service delivery across all government departments.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Governance Framework</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-blue-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Data Governance</CardTitle>
                  <CardDescription>Protecting and managing government data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Data classification and handling procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Data quality management frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Privacy and data protection policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Data retention and archival standards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <FileCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Compliance</CardTitle>
                  <CardDescription>Meeting regulatory requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Legal and regulatory compliance monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Regular compliance audits and assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Risk management frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Compliance reporting and documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Service Standards</CardTitle>
                  <CardDescription>Delivering quality services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Service level agreements (SLAs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Performance monitoring and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Continuous improvement processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Customer satisfaction metrics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Standards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Security Standards</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle>Information Security</CardTitle>
                      <CardDescription>ISO 27001 Certified</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Access control and authentication</li>
                    <li>• Encryption standards (AES-256)</li>
                    <li>• Secure communications (TLS 1.3)</li>
                    <li>• Security incident management</li>
                    <li>• Penetration testing and audits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle>Cybersecurity</CardTitle>
                      <CardDescription>NIST Framework Aligned</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Threat intelligence and monitoring</li>
                    <li>• Vulnerability management program</li>
                    <li>• Security awareness training</li>
                    <li>• Incident response procedures</li>
                    <li>• Business continuity planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Digital Service Standards */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Digital Service Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'User-Centered Design', desc: 'Services designed with user needs first' },
                { title: 'Accessibility', desc: 'WCAG 2.1 AA compliance for all services' },
                { title: 'Open Standards', desc: 'Using open and interoperable standards' },
                { title: 'Agile Delivery', desc: 'Iterative development and continuous improvement' },
                { title: 'Digital by Default', desc: 'Digital channels as primary service delivery' },
                { title: 'Data-Driven', desc: 'Evidence-based decision making' },
                { title: 'Cloud First', desc: 'Leveraging cloud technologies' },
                { title: 'Privacy by Design', desc: 'Privacy built into every service' },
              ].map((standard, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{standard.title}</CardTitle>
                    <CardDescription className="text-sm">{standard.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Framework */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Policy Framework</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>ICT Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Comprehensive policies governing ICT use, procurement, and management across government
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Data Sharing Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Guidelines for secure and appropriate sharing of data between government entities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>Cybersecurity Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Framework for protecting government digital assets and critical infrastructure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our complete standards and compliance documentation
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Standards Guide
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Compliance Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
