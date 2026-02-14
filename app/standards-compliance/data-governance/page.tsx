'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DataGovernancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Governance</h1>
            <p className="text-xl max-w-3xl">
              Managing government data as a strategic asset with quality, security, and integrity
            </p>
          </div>
        </section>

        {/* Data Management Framework */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ensuring accuracy, completeness, consistency, and timeliness of government data 
                    through quality management processes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Protecting data from unauthorized access, breaches, and loss through comprehensive 
                    security controls and encryption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Data Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Safeguarding citizen privacy through proper data handling, consent management, 
                    and compliance with privacy regulations.
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
                Data Governance establishes policies, procedures, and standards for managing government 
                data throughout its lifecycle. This ensures data is properly classified, protected, 
                retained, and disposed of according to regulations.
              </p>
              <p className="text-gray-700 mb-4">
                The framework defines roles and responsibilities for data stewardship, establishes data 
                quality standards, and implements controls to protect data integrity and confidentiality.
              </p>
              <p className="text-gray-700">
                Regular data audits and quality assessments verify compliance with governance policies 
                while identifying opportunities for improvement in data management practices.
              </p>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Data Governance Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Data Classification</h3>
                <p className="text-gray-600">
                  Systematic categorization of data based on sensitivity, criticality, and regulatory 
                  requirements to ensure appropriate handling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Data Lifecycle</h3>
                <p className="text-gray-600">
                  Managing data from creation through archival or deletion, ensuring proper retention 
                  and disposal according to policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Data Stewardship</h3>
                <p className="text-gray-600">
                  Clear accountability for data quality, security, and compliance with designated 
                  data stewards and data owners.
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
