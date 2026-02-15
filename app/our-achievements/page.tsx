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
  Trophy,
  Award,
  Users,
  Server,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Building2,
  Globe,
  Target,
  Clock
} from 'lucide-react';

export default function OurAchievementsPage() {
  const impactMetrics = [
    { icon: Server, value: '85+', label: 'Digital Services', description: 'Active government services' },
    { icon: Building2, value: '120+', label: 'Departments', description: 'Successfully onboarded' },
    { icon: Users, value: '250K+', label: 'Transactions', description: 'Monthly digital transactions' },
    { icon: Award, value: '5K+', label: 'Users Trained', description: 'Government employees' },
    { icon: Shield, value: '3', label: 'Data Centers', description: 'Tier III certified facilities' },
    { icon: TrendingUp, value: '92%', label: 'Satisfaction', description: 'User satisfaction rate' }
  ];

  const keyAchievements = [
    {
      icon: Shield,
      title: 'ISO 27001 Certification',
      description: 'Information security management system certified',
      year: '2023'
    },
    {
      icon: Trophy,
      title: 'Regional Digital Excellence Award',
      description: 'Recognition for innovative government digital transformation',
      year: '2024'
    },
    {
      icon: Server,
      title: 'Tier III Data Center',
      description: 'First government-owned Tier III certified data center in PNG',
      year: '2022'
    },
    {
      icon: Users,
      title: '500K+ Citizens Served',
      description: 'Digital services reaching half a million Papua New Guineans',
      year: '2024'
    },
    {
      icon: Zap,
      title: 'K50M Cost Savings',
      description: 'Annual government operational cost reduction',
      year: '2024'
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Consistent service availability and reliability',
      year: '2024'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Pacific Digital Innovation Award',
      organization: 'Pacific Islands Forum',
      description: 'Outstanding achievement in digital government transformation'
    },
    {
      year: '2023',
      title: 'Best Government Cloud Initiative',
      organization: 'APAC Tech Summit',
      description: 'Recognition for government cloud infrastructure deployment'
    },
    {
      year: '2023',
      title: 'Cybersecurity Excellence Award',
      organization: 'Regional Cyber Security Alliance',
      description: 'Excellence in government cybersecurity frameworks'
    },
    {
      year: '2022',
      title: 'Digital Transformation Leadership',
      organization: 'Commonwealth Innovation Awards',
      description: 'Leading digital transformation in the Pacific region'
    }
  ];

  const successStories = [
    {
      title: 'Digital Identity System',
      description: 'Implemented nationwide digital identity verification system, reducing processing time by 80% and serving 200K+ citizens.',
      impact: '80% faster processing',
      icon: Users
    },
    {
      title: 'E-Procurement Platform',
      description: 'Government procurement digitized, saving K30M annually through transparent and efficient procurement processes.',
      impact: 'K30M annual savings',
      icon: Target
    },
    {
      title: 'Rural Connectivity Program',
      description: 'Extended digital services to 50+ rural districts through satellite and wireless infrastructure deployment.',
      impact: '50+ districts connected',
      icon: Globe
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Established comprehensive cybersecurity framework protecting critical government infrastructure and data.',
      impact: 'Zero major breaches',
      icon: Shield
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
              <span className="text-white font-medium">Our Achievements</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Our Achievements</h1>
                <p className="text-xl text-blue-50 mt-2">
                  Milestones in digital transformation excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                IMPACT METRICS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact by the Numbers
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Quantifiable results demonstrating our commitment to digital excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <metric.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
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

        {/* Key Achievements */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                MAJOR MILESTONES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Achievements
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Significant accomplishments that mark our digital transformation journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyAchievements.map((achievement, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <achievement.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-gray-200">
                        {achievement.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                RECOGNITION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                International and regional recognition for excellence in digital government
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-gray-200">
                            {award.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {award.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-2">
                          {award.organization}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-gray-200">
                CASE STUDIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Real-world impact of our digital transformation initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {successStories.map((story, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                        <story.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {story.title}
                        </CardTitle>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                          <CheckCircle className="w-3 h-3" />
                          {story.impact}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building on Our Success
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Our achievements fuel our commitment to continue advancing Papua New Guinea's digital transformation. 
              Together, we're creating a more connected, efficient, and transparent government.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/digital-services">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 shadow-xl text-base px-8 py-5 font-semibold group"
                >
                  Explore Our Services
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link href="/our-journey">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-semibold">Our Journey</span>
                </Button>
              </Link>

              <Link href="/infrastructure">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group border-gray-300 hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="font-semibold">Infrastructure</span>
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