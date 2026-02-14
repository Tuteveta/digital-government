'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, FileCheck, AlertTriangle } from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance</h1>
            <p className="text-xl max-w-3xl">
              Ensuring adherence to legal, regulatory, and policy requirements
            </p>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Legal Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Adherence to Papua New Guinea laws, regulations, and legal frameworks governing 
                    digital government operations and data management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Meeting requirements set by government regulatory bodies and international 
                    standards organizations for digital services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Policy Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ensuring alignment with government policies, procedures, and internal guidelines 
                    for digital transformation initiatives.
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
                The Digital Transformation Office maintains a comprehensive compliance program to ensure 
                all digital government services meet legal, regulatory, and policy requirements. This 
                commitment protects citizen data, ensures service reliability, and builds public trust.
              </p>
              <p className="text-gray-700 mb-4">
                Our compliance framework covers data protection, privacy, security, accessibility, and 
                service delivery standards. Regular audits and assessments verify ongoing adherence to 
                these requirements.
              </p>
              <p className="text-gray-700">
                We work closely with legal counsel, regulatory bodies, and policy makers to stay current 
                with evolving requirements and ensure timely implementation of new compliance obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Key Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Compliance Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Data Protection</h3>
                <p className="text-gray-600">
                  Compliance with data protection laws, privacy regulations, and information 
                  security requirements for handling citizen data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Accessibility</h3>
                <p className="text-gray-600">
                  Meeting accessibility standards to ensure digital services are usable by all 
                  citizens, including those with disabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Audit & Reporting</h3>
                <p className="text-gray-600">
                  Regular compliance audits, reporting requirements, and documentation to 
                  demonstrate adherence to standards.
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
