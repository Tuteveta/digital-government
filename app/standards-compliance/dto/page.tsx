'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DTOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation Office</h1>
            <p className="text-xl max-w-3xl">
              Leading Papua New Guinea's journey to digital government excellence
            </p>
          </div>
        </section>

        {/* DTO Structure */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mandate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Established under Gazette Notice No. 109 to lead digital transformation across 
                    all levels of government in Papua New Guinea.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Setting standards, providing infrastructure, and enabling government agencies to 
                    deliver efficient digital services to citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">About DTO</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                The Digital Transformation Office (DTO) serves as the central authority for digital 
                government initiatives in Papua New Guinea. We provide leadership, governance, and 
                technical expertise to drive digital transformation across government.
              </p>
              <p className="text-gray-700 mb-4">
                Our work encompasses infrastructure development, standards establishment, policy 
                formulation, and capacity building to enable effective digital service delivery. We 
                collaborate with government agencies, private sector partners, and international 
                organizations to achieve our goals.
              </p>
              <p className="text-gray-700">
                Through strategic planning and coordinated implementation, we ensure digital 
                transformation initiatives align with national priorities and deliver tangible 
                benefits to citizens and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Responsibilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Standards & Policy</h3>
                <p className="text-gray-600">
                  Developing and maintaining standards, policies, and guidelines for digital 
                  government services and infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Infrastructure</h3>
                <p className="text-gray-600">
                  Providing shared digital infrastructure including cloud services, networks, 
                  and platforms for government use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Capacity Building</h3>
                <p className="text-gray-600">
                  Training government employees and building organizational capability to effectively 
                  use digital technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Focus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Strategic Focus Areas</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Digital Service Delivery</h3>
                <p className="text-gray-700">
                  Enabling government agencies to provide accessible, user-friendly digital services 
                  that meet citizen needs and expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Data & Analytics</h3>
                <p className="text-gray-700">
                  Promoting data-driven decision making through proper data management, analytics 
                  capabilities, and information sharing across government.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cybersecurity</h3>
                <p className="text-gray-700">
                  Protecting government digital assets and citizen data through comprehensive 
                  cybersecurity programs and incident response capabilities.
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
