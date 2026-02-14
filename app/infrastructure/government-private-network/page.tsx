'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GovernmentPrivateNetworkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Private Network</h1>
            <p className="text-xl max-w-3xl">
              Secure, high-performance network infrastructure connecting government agencies nationwide
            </p>
          </div>
        </section>

        {/* Network Architecture */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Network Topology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Multi-tier architecture with redundant core, distribution, and access layers 
                    ensuring high availability and fault tolerance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fiber optic backbone with 10Gbps connectivity between major sites and redundant 
                    links for business continuity.
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
                The Government Private Network (GPN) provides secure, dedicated connectivity between 
                government agencies, enabling efficient communication and data exchange while maintaining 
                strict security and privacy controls.
              </p>
              <p className="text-gray-700 mb-4">
                Built on enterprise-grade networking equipment and fiber optic infrastructure, the GPN 
                delivers high-speed, low-latency connectivity with guaranteed bandwidth and quality of service.
              </p>
              <p className="text-gray-700">
                The network is designed with redundancy at every layer, including multiple fiber paths, 
                redundant core switches, and automatic failover mechanisms to ensure continuous operation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Security</h3>
                <p className="text-gray-600">
                  Isolated from public internet with encryption, firewalls, intrusion detection, 
                  and access controls protecting government data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Performance</h3>
                <p className="text-gray-600">
                  High-bandwidth connectivity with QoS policies ensuring priority for critical 
                  government applications and services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Reliability</h3>
                <p className="text-gray-600">
                  99.9% uptime SLA with redundant paths, equipment, and automatic failover for 
                  business continuity.
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
