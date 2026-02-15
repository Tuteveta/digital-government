'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Target, 
  Eye, 
  Server, 
  Lightbulb, 
  Shield, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Building2,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Breadcrumbs */}
        <section className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-6 text-blue-100">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About Us</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl text-blue-50">
              Leading Papua New Guinea's digital transformation journey
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                OUR PURPOSE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To drive the digital transformation of government services in Papua New Guinea, 
                    making them more accessible, efficient, and transparent for all citizens and businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
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
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Digital Transformation Office (DTO) was established under Gazette Notice No. 109 
                to lead Papua New Guinea's journey towards becoming a digitally enabled nation. We are 
                committed to improving the efficiency and effectiveness of government services through 
                strategic adoption of information and communication technologies.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our office works closely with government departments and agencies at the national, 
                provincial, and district levels to deliver integrated digital services. We focus on 
                building robust infrastructure, establishing standards and governance frameworks, and 
                promoting innovation with integrity across the public sector.
              </p>
              <p className="text-gray-700 leading-relaxed">
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
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                WHAT WE DO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Focus Areas
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Strategic pillars driving our digital transformation initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    Infrastructure
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building and maintaining world-class digital infrastructure to support government 
                    operations and service delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fostering a culture of innovation and continuous improvement in government service 
                    delivery through technology adoption.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    Governance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Establishing standards, policies, and frameworks to ensure secure, reliable, and 
                    compliant digital services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                OUR IMPACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Making a Difference
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: '50K+', label: 'Users Served' },
                { icon: Award, value: '15+', label: 'Services Live' },
                { icon: Building2, value: '100+', label: 'Departments' },
                { icon: TrendingUp, value: '99.9%', label: 'Uptime' }
              ].map((stat, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-semibold">Back to Home</span>
                </Button>
              </Link>

              <Link href="/our-journey">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="font-semibold">Our Journey</span>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}