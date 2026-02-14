'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl">
              Leading Papua New Guinea's digital transformation journey
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To drive the digital transformation of government services in Papua New Guinea, 
                    making them more accessible, efficient, and transparent for all citizens and businesses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A digitally connected Papua New Guinea where government services are seamlessly 
                    delivered through innovative technology, fostering economic growth and improving 
                    quality of life for all.
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
                The Digital Transformation Office (DTO) was established under Gazette Notice No. 109 
                to lead Papua New Guinea's journey towards becoming a digitally enabled nation. We are 
                committed to improving the efficiency and effectiveness of government services through 
                strategic adoption of information and communication technologies.
              </p>
              <p className="text-gray-700 mb-4">
                Our office works closely with government departments and agencies at the national, 
                provincial, and district levels to deliver integrated digital services. We focus on 
                building robust infrastructure, establishing standards and governance frameworks, and 
                promoting innovation with integrity across the public sector.
              </p>
              <p className="text-gray-700">
                Through our initiatives, we aim to bridge the digital divide, enhance service delivery, 
                and create a more transparent and accountable government that serves the needs of all 
                Papua New Guineans.
              </p>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Infrastructure</h3>
                <p className="text-gray-600">
                  Building and maintaining world-class digital infrastructure to support government 
                  operations and service delivery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p className="text-gray-600">
                  Fostering a culture of innovation and continuous improvement in government service 
                  delivery through technology adoption.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Governance</h3>
                <p className="text-gray-600">
                  Establishing standards, policies, and frameworks to ensure secure, reliable, and 
                  compliant digital services.
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
