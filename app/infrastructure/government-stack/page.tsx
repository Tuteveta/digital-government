'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight,
  Home,
  Layers,
  Database,
  Cpu,
  Globe,
  Shield,
  Code,
  Sparkles,
  CheckCircle,
  Zap,
  Server,
  Cloud,
  Network
} from 'lucide-react';

export default function GovernmentStackPage() {
  const stackMetrics = [
    { icon: Layers, value: '6', label: 'Core Components', description: 'Integrated services' },
    { icon: Server, value: '50+', label: 'Applications', description: 'Running on stack' },
    { icon: Cloud, value: '99.9%', label: 'Availability', description: 'Service uptime' },
    { icon: Zap, value: '3x', label: 'Faster Deploy', description: 'Development speed' },
    { icon: Database, value: '500TB+', label: 'Data Managed', description: 'Storage capacity' },
    { icon: Network, value: '120+', label: 'Agencies', description: 'Using the stack' }
  ];

  const stackLayers = [
    {
      icon: Database,
      title: 'Infrastructure Layer',
      description: 'Foundation layer providing compute, storage, and network resources through virtualization and cloud infrastructure.'
    },
    {
      icon: Cpu,
      title: 'Platform Layer',
      description: 'Middleware services including databases, application servers, messaging queues, and development frameworks.'
    },
    {
      icon: Code,
      title: 'Application Layer',
      description: 'Government applications and services built on standardized platforms with common interfaces and APIs.'
    }
  ];

  const stackDefinitions = [
    {
      number: '01',
      category: 'CYBER SECURITY &',
      title: 'GOVERNANCE',
      description: 'Standards, Regulations, and procedures that govern the use of technology within the government. This includes protecting government systems, networks and data from cyber threats.'
    },
    {
      number: '02',
      category: 'HOSTING &',
      title: 'COMM INFRASTRUCTURE',
      description: 'Cloud-based government data and applications hosting and a secure network communication and data transfer. Core components include GovCloud, GovNetwork, Satellite System.'
    },
    {
      number: '03',
      category: 'SECURED DATA',
      title: 'EXCHANGE',
      description: 'Online platforms that provide a single point of access to various government services: Citizens\' Portal, Government Portal, Investment Portal and Students\' Portal.'
    },
    {
      number: '04',
      category: 'SHARE MICRO',
      title: 'SERVICES',
      description: 'Modular services that each perform a specific function enabling scalability, easy maintenance and fast deployment.'
    },
    {
      number: '05',
      category: 'DIGITAL',
      title: 'SERVICES',
      description: 'Digital services provided by various government bodies to citizens and businesses.'
    },
    {
      number: '06',
      category: 'E-GOVERNMENT',
      title: 'PORTAL',
      description: 'Online platforms that provide a single point of access to various government services: Citizens\' Portal, Government Portal, Investment Portal and Students\' Portal.'
    }
  ];

  const keyBenefits = [
    {
      icon: Zap,
      title: 'Cost Efficiency',
      description: 'Shared infrastructure and services reduce duplication and lower total cost of ownership across government.',
      metric: '40% cost reduction'
    },
    {
      icon: Server,
      title: 'Faster Deployment',
      description: 'Pre-built components and standardized platforms enable rapid development and deployment of new services.',
      metric: '3x faster delivery'
    },
    {
      icon: Network,
      title: 'Interoperability',
      description: 'Common standards and APIs enable seamless integration and data exchange between government systems.',
      metric: '100% compatibility'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Breadcrumbs - BLUE BANNER */}
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
              <Link href="/infrastructure" className="hover:text-white transition-colors">
                Infrastructure
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Government Stack</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Government Stack</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Integrated technology platform enabling efficient digital services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Metrics - ALL RED ICONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/10 text-primary rounded-full text-xs font-bold mb-4 border border-gray-200">
                <Sparkles className="w-3.5 h-3.5" />
                STACK METRICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Stack by the Numbers
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Powering government digital transformation through standardization
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackMetrics.map((metric, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <metric.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-900 font-semibold uppercase tracking-wide mb-1">
                      {metric.label}
                    </div>
                    <p className="text-xs text-gray-600">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Overview
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The Government Stack provides a standardized technology platform that reduces duplication, 
                  improves interoperability, and accelerates digital service delivery across government.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Built on open standards and modern cloud-native architecture, the stack enables agencies 
                  to rapidly develop and deploy digital services while maintaining security and compliance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Key components include identity management, payment gateways, notification services, 
                  document management, workflow automation, and data exchange platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Stack Definition - IMAGE SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/10 text-primary rounded-full text-xs font-bold mb-4 border border-gray-200">
                <Database className="w-3.5 h-3.5" />
                STACK DEFINITION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Stack Components
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Six integrated layers powering digital government services
              </p>
            </div>

            {/* Stack Definition Cards matching the image */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackDefinitions.map((def, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                  <CardHeader>
                    <div className="text-6xl font-bold text-white/20 mb-4">
                      {def.number}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                      {def.category}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-4">
                      {def.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 leading-relaxed">
                      {def.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Layers - ALL RED ICONS */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/10 text-primary rounded-full text-xs font-bold mb-4 border border-gray-200">
                <Layers className="w-3.5 h-3.5" />
                ARCHITECTURE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stack Architecture Layers
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Three-tier architecture ensuring scalability and flexibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {stackLayers.map((layer, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <layer.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {layer.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed">
                      {layer.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits - ALL RED ICONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/10 text-primary rounded-full text-xs font-bold mb-4 border border-gray-200">
                <CheckCircle className="w-3.5 h-3.5" />
                BENEFITS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Transforming government service delivery through standardization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <benefit.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h3>
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-gray-200">
                            {benefit.metric}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - BLUE BACKGROUND */}
        <section className="py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
              <Layers className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build on the Government Stack
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Leverage our standardized platform to accelerate your digital service development. 
              Contact us to learn how the Government Stack can support your agency's needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white shadow-xl text-base px-8 py-5 font-semibold group border-2 border-red-400"
                >
                  Get Started
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/digital-services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl text-base px-8 py-5 font-semibold"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link href="/infrastructure">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-2 border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-semibold">Infrastructure</span>
                </Button>
              </Link>

              <Link href="/infrastructure/government-private-network">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-2 border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="font-semibold">Government Network</span>
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