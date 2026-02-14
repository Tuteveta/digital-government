'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GovernmentCloudPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Cloud</h1>
            <p className="text-xl max-w-3xl">
              Secure, scalable cloud platform for government applications and services
            </p>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Infrastructure as a Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Virtual machines, storage, and networking resources on-demand with full control 
                    over operating systems and applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Platform as a Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Development platforms, databases, and middleware services enabling rapid 
                    application development and deployment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Software as a Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ready-to-use applications including email, collaboration tools, and enterprise 
                    software accessible via web browsers.
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
                The Government Cloud provides a secure, compliant, and cost-effective platform for 
                hosting government applications and data. Built on enterprise-grade infrastructure, 
                it offers the flexibility and scalability of public cloud with the security and 
                control of private infrastructure.
              </p>
              <p className="text-gray-700 mb-4">
                The platform supports hybrid cloud deployments, allowing agencies to maintain sensitive 
                workloads on-premises while leveraging cloud services for less critical applications. 
                This approach provides optimal balance between security, performance, and cost.
              </p>
              <p className="text-gray-700">
                Advanced automation, orchestration, and self-service capabilities enable agencies to 
                provision resources quickly while maintaining governance and cost control through 
                centralized management and monitoring.
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
                <h3 className="text-xl font-semibold mb-3 text-primary">Compliance</h3>
                <p className="text-gray-600">
                  Meets government security and compliance requirements with data residency, 
                  encryption, and audit capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Elasticity</h3>
                <p className="text-gray-600">
                  Auto-scaling capabilities to handle varying workloads with pay-per-use pricing 
                  for cost optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Resilience</h3>
                <p className="text-gray-600">
                  Multi-zone deployment with automated backup, disaster recovery, and high 
                  availability for critical services.
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
