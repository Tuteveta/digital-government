'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Database, Cpu, Globe, Shield, Code } from 'lucide-react';

export default function GovernmentStackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Stack</h1>
            <p className="text-xl max-w-3xl">
              Integrated technology platform enabling efficient digital government services
            </p>
          </div>
        </section>

        {/* Stack Layers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Infrastructure Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Foundation layer providing compute, storage, and network resources through 
                    virtualization and cloud infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Platform Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Middleware services including databases, application servers, messaging queues, 
                    and development frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Government applications and services built on standardized platforms with 
                    common interfaces and APIs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Core Components</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                The Government Stack provides a standardized technology platform that reduces duplication, 
                improves interoperability, and accelerates digital service delivery across government.
              </p>
              <p className="text-gray-700 mb-4">
                Built on open standards and modern cloud-native architecture, the stack enables agencies 
                to rapidly develop and deploy digital services while maintaining security and compliance.
              </p>
              <p className="text-gray-700">
                Key components include identity management, payment gateways, notification services, 
                document management, workflow automation, and data exchange platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cost Efficiency</h3>
                <p className="text-gray-600">
                  Shared infrastructure and services reduce duplication and lower total cost of 
                  ownership across government.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Faster Deployment</h3>
                <p className="text-gray-600">
                  Pre-built components and standardized platforms enable rapid development and 
                  deployment of new services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Interoperability</h3>
                <p className="text-gray-600">
                  Common standards and APIs enable seamless integration and data exchange between 
                  government systems.
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
