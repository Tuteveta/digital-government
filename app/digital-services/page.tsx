'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, Cloud, Server, Database, Shield } from 'lucide-react';

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Services</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive digital services for government departments and agencies
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-gray-700 text-lg">
                We currently offer the following Digital services to all Government Departments and Agencies 
                at the National, Provincial and District Government levels. The Digital Transformation Office 
                was approved under Gazette Notice No. 109 to provide public service bodies with enhanced 
                connectivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Application Services</CardTitle>
                  <CardDescription>
                    Comprehensive application hosting and management services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom application hosting</li>
                    <li>• Web application deployment</li>
                    <li>• Database management</li>
                    <li>• 24/7 monitoring and support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Email Hosting</CardTitle>
                  <CardDescription>
                    Secure and reliable email services for government
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Government domain emails</li>
                    <li>• Advanced security features</li>
                    <li>• Large storage capacity</li>
                    <li>• Mobile device support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Virtual Private Cloud</CardTitle>
                  <CardDescription>
                    Scalable and secure cloud infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Isolated virtual networks</li>
                    <li>• Scalable computing resources</li>
                    <li>• High availability</li>
                    <li>• Disaster recovery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Server className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Data Hosting</CardTitle>
                  <CardDescription>
                    Secure data center services for government data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Secure data storage</li>
                    <li>• Regular backups</li>
                    <li>• Compliance with standards</li>
                    <li>• Fast data access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>Shared Services</CardTitle>
                  <CardDescription>
                    Common services for efficient operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Identity management</li>
                    <li>• Payment gateways</li>
                    <li>• Document management</li>
                    <li>• Notification services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Security Services</CardTitle>
                  <CardDescription>
                    Comprehensive cybersecurity solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Threat monitoring</li>
                    <li>• Security audits</li>
                    <li>• Incident response</li>
                    <li>• Compliance management</li>
                  </ul>
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
