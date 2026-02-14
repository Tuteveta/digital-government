'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServiceStandardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Standards</h1>
            <p className="text-xl max-w-3xl">
              Delivering quality digital services that meet citizen expectations
            </p>
          </div>
        </section>

        {/* Service Delivery Standards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Level Agreements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Clear commitments on availability, performance, and support for all digital 
                    government services with measurable targets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive metrics to measure service quality, user satisfaction, and 
                    continuous improvement initiatives.
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
                The Digital Transformation Office establishes and maintains service standards to ensure 
                consistent, high-quality delivery of digital government services across all departments 
                and agencies.
              </p>
              <p className="text-gray-700 mb-4">
                These standards define expectations for service availability, response times, user 
                experience, and support. Regular monitoring and reporting track performance against 
                these standards.
              </p>
              <p className="text-gray-700">
                We continuously review and update service standards based on user feedback, technology 
                evolution, and best practices to ensure they remain relevant and achievable.
              </p>
            </div>
          </div>
        </section>

        {/* Key Standards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Service Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Availability</h3>
                <p className="text-gray-600">
                  99.9% uptime for critical services with planned maintenance windows communicated 
                  in advance to minimize disruption.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Performance</h3>
                <p className="text-gray-600">
                  Fast response times with pages loading in under 3 seconds and transactions 
                  processed efficiently.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Support</h3>
                <p className="text-gray-600">
                  24/7 support availability with clear escalation procedures and defined response 
                  times based on issue severity.
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
