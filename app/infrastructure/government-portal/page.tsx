'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GovernmentPortalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Portal</h1>
            <p className="text-xl max-w-3xl">
              Single digital gateway for accessing government services and information
            </p>
          </div>
        </section>

        {/* Portal Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Citizen Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access to government services including applications, payments, document 
                    requests, and service status tracking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Business Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Business registration, licensing, permits, tax filing, and procurement 
                    opportunities for enterprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Information Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Centralized access to government information, policies, regulations, and 
                    public data resources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Digital Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Secure authentication and single sign-on enabling seamless access across 
                    all government services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Payment Gateway</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integrated payment processing for government fees, taxes, and service 
                    charges with multiple payment options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Automated alerts and notifications for application status, deadlines, and 
                    important government announcements.
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
                The Government Portal serves as the primary digital interface between government and 
                citizens, providing a unified platform for accessing services, information, and engaging 
                with government agencies.
              </p>
              <p className="text-gray-700 mb-4">
                Built on user-centered design principles, the portal offers intuitive navigation, 
                personalized dashboards, and responsive design ensuring accessibility across desktop, 
                tablet, and mobile devices.
              </p>
              <p className="text-gray-700">
                Integration with government systems enables real-time service delivery, automated 
                processing, and seamless data exchange while maintaining security and privacy through 
                robust authentication and authorization mechanisms.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Convenience</h3>
                <p className="text-gray-600">
                  24/7 access to government services from anywhere, eliminating need for physical 
                  visits and reducing wait times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Transparency</h3>
                <p className="text-gray-600">
                  Real-time status tracking, clear processes, and open data promoting accountability 
                  and trust in government.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Efficiency</h3>
                <p className="text-gray-600">
                  Automated workflows, digital documents, and electronic payments reducing processing 
                  time and administrative burden.
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
