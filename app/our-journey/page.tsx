'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight,
  Home,
  CheckCircle,
  Calendar,
  Rocket,
  Building2,
  Globe,
  Zap,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';

export default function OurJourneyPage() {
  const milestones = [
    {
      year: '2020',
      title: 'Establishment',
      description: 'Digital Transformation Office officially established under Gazette Notice No. 109',
      achievements: [
        'DTO infrastructure setup',
        'Initial team formation',
        'Strategic planning commenced'
      ]
    },
    {
      year: '2021',
      title: 'Infrastructure Development',
      description: 'Building the foundation for digital government services',
      achievements: [
        'Data center establishment',
        'Network infrastructure deployment',
        'Security frameworks implemented'
      ]
    },
    {
      year: '2022',
      title: 'Service Digitization',
      description: 'Launch of core digital services for government operations',
      achievements: [
        'Email hosting services launched',
        'Application hosting platform deployed',
        'Cloud infrastructure activated'
      ]
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Scaling services across government departments',
      achievements: [
        '50+ departments onboarded',
        'Provincial connectivity established',
        'Service catalog expanded'
      ]
    },
    {
      year: '2024',
      title: 'Innovation & Integration',
      description: 'Introducing advanced technologies and integrated platforms',
      achievements: [
        'AI/ML pilot projects initiated',
        'Unified government portal launched',
        'Mobile services deployment'
      ]
    },
    {
      year: '2025',
      title: 'Digital Nation Vision',
      description: 'Working towards comprehensive digital transformation',
      achievements: [
        'National digital strategy implementation',
        'Citizen-centric services expansion',
        'Smart government initiatives'
      ]
    }
  ];

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
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Our Journey</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Our Journey</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Transforming PNG through digital innovation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                MILESTONES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Digital Transformation Timeline
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Key achievements and milestones in our journey towards a digital Papua New Guinea
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-300 hidden md:block" />
                  )}
                  
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">{milestone.year}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {milestone.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            {milestone.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looking Forward Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                THE FUTURE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Looking Forward
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Our vision for the next phase of digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">2026-2028</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    Next Phase
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Comprehensive digital ecosystem deployment
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    Coverage Target
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Complete digital service accessibility
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    Citizens Empowered
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Direct digital service access
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building a Connected Digital Nation
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Our journey continues as we work towards creating a fully integrated digital ecosystem 
              that empowers every Papua New Guinean with access to efficient, transparent, and 
              innovative government services.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/our-achievements">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 shadow-xl text-base px-8 py-5 font-semibold group"
                >
                  View Our Achievements
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-semibold">About Us</span>
                </Button>
              </Link>

              <Link href="/our-achievements">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="font-semibold">Our Achievements</span>
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