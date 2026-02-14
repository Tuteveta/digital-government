'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Infrastructure</h1>
            <p className="text-xl max-w-3xl">
              World-class digital infrastructure powering Papua New Guinea's digital transformation
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                The Digital Transformation Office maintains a robust and secure digital infrastructure 
                that serves as the backbone for all government digital services. Our infrastructure is 
                designed with redundancy, scalability, and security at its core.
              </p>
              <p className="text-gray-700 mb-4">
                We leverage cutting-edge technology and best practices to ensure high availability, 
                data integrity, and seamless service delivery across all government departments and agencies.
              </p>
              <p className="text-gray-700">
                Our infrastructure components work together to create a comprehensive ecosystem that 
                supports digital government transformation while maintaining the highest standards of 
                security, reliability, and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500TB+</div>
                  <div className="text-sm text-gray-600">Storage Capacity</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10Gbps</div>
                  <div className="text-sm text-gray-600">Network Speed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">High Availability</h3>
                <p className="text-gray-600">
                  99.9% uptime SLA with redundant systems, failover capabilities, and 24/7 monitoring 
                  to ensure continuous service delivery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Scalability</h3>
                <p className="text-gray-600">
                  Elastic infrastructure that grows with demand, supporting increasing workloads and 
                  user base without compromising performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Security First</h3>
                <p className="text-gray-600">
                  Multi-layered security architecture with encryption, access controls, and continuous 
                  monitoring to protect sensitive government data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Components Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Infrastructure Components</h2>
            <p className="text-gray-700 mb-8">
              Use the Infrastructure menu in the navigation bar above to explore our five core 
              infrastructure components in detail.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Government Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Integrated technology stack providing standardized services and infrastructure 
                    across all government departments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Government Private Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Secure, high-speed network infrastructure connecting government agencies 
                    nationwide with redundancy and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Government Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Scalable cloud platform offering Infrastructure as a Service (IaaS) and 
                    Platform as a Service (PaaS) for government applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Cyber Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Comprehensive security framework protecting government digital assets with 
                    advanced threat detection and response capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Government Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Unified digital gateway providing citizens and businesses with seamless 
                    access to government services and information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

