'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Security</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive security framework protecting government digital assets and data
            </p>
          </div>
        </section>

        {/* Security Domains */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Network Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Firewalls, intrusion detection/prevention, DDoS protection, and network 
                    segmentation securing government networks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Secure development practices, code review, vulnerability scanning, and web 
                    application firewalls protecting applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Encryption at rest and in transit, data loss prevention, and access controls 
                    protecting sensitive information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Identity & Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Multi-factor authentication, single sign-on, role-based access control, and 
                    privileged access management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Endpoint Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Anti-malware, device encryption, mobile device management, and endpoint 
                    detection and response.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Security Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    24/7 security monitoring, incident response, threat intelligence, and security 
                    event management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Our comprehensive cybersecurity program protects government digital assets against 
                evolving threats through defense-in-depth strategy, continuous monitoring, and rapid 
                incident response.
              </p>
              <p className="text-gray-700 mb-4">
                The Security Operations Center (SOC) provides 24/7 monitoring and response capabilities, 
                leveraging advanced security tools, threat intelligence, and skilled analysts to detect 
                and respond to security incidents.
              </p>
              <p className="text-gray-700">
                Regular security assessments, penetration testing, and vulnerability management ensure 
                continuous improvement of security posture while compliance audits verify adherence to 
                security standards and regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Initiatives</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Awareness Training</h3>
                <p className="text-gray-600">
                  Regular security awareness programs for government employees on phishing, 
                  social engineering, and best practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Threat Intelligence</h3>
                <p className="text-gray-600">
                  Proactive threat hunting and intelligence sharing to identify and mitigate 
                  emerging threats before impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Incident Response</h3>
                <p className="text-gray-600">
                  Structured incident response process with clear escalation procedures and 
                  post-incident analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
