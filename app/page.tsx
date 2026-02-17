'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Database, 
  Mail, 
  Cloud, 
  Server,
  FileText,
  Shield,
  Network,
  Lock,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const heroSlides = [
  {
    title: "DIGITAL TRANSFORMATION",
    subtitle: "Building Papua New Guinea's digital future",
    image: "image1.jpg",
  },
  {
    title: "E-GOVERNMENT PORTAL",
    subtitle: "One stop point access to all public services",
    image: "/image2.jpg",
  },
  {
    title: "INNOVATIVE SOLUTIONS",
    subtitle: "Modern technology for efficient government services",
    image: "image3.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Slider Section - MOBILE OPTIMIZED */}
      <section 
        className="relative h-[450px] sm:h-[550px] md:h-[600px] overflow-hidden cursor-pointer"
        onClick={handleHeroClick}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-blue-900/90 to-primary/95" />
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[5000ms]"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 animate-pulse" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        ))}

        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none z-20"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/40 rounded-full animate-ping" />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
          </div>
        ))}
        
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center text-white px-4 sm:px-6 max-w-6xl">
            <div className="animate-fade-in-up">
              {/* MOBILE OPTIMIZED TITLE */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl tracking-tight leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              {/* MOBILE OPTIMIZED SUBTITLE */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 drop-shadow-lg font-light max-w-3xl mx-auto px-2">
                {heroSlides[currentSlide].subtitle}
              </p>
              {/* MOBILE OPTIMIZED BUTTONS */}
              <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap px-2">
                <Link href="/digital-services">
                  <Button 
                    size="default"
                    className="bg-red-500 hover:bg-red-600 text-white shadow-2xl text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-300 rounded-lg font-semibold group"
                  >
                    Explore Services
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    size="default"
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-md border-2 border-white/80 text-white hover:bg-white hover:text-primary shadow-2xl text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE OPTIMIZED SLIDER CONTROLS */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* MOBILE OPTIMIZED SLIDE INDICATORS */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8 sm:w-10 md:w-12' 
                  : 'bg-white/50 hover:bg-white/75 w-6 sm:w-7 md:w-8'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-blue-100/50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2 sm:mb-3">
              OUR IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">
              Delivering Excellence
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Making a difference in digital government transformation
            </p>
          </div>
          
          {/* MOBILE OPTIMIZED STATS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: Users, value: '50K+', label: 'Active Users' },
              { icon: Award, value: '15+', label: 'Services' },
              { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
              { icon: Globe, value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group animate-fade-in-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="text-center border border-gray-300/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Cards Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2 sm:mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              Comprehensive Digital Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Providing world-class digital infrastructure and services to power government operations
            </p>
          </div>
          
          {/* MOBILE OPTIMIZED SERVICE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
            {[
              { 
                icon: FileText, 
                title: 'Application Services', 
                desc: 'Secure hosting for government applications with 99.9% uptime guarantee',
                features: ['24/7 Monitoring', 'Auto Scaling', 'Secure Infrastructure']
              },
              { 
                icon: Mail, 
                title: 'Email Hosting', 
                desc: 'Professional email services with advanced security and collaboration tools',
                features: ['Unlimited Storage', 'Spam Protection', 'Mobile Access']
              },
              { 
                icon: Cloud, 
                title: 'Virtual Private Cloud', 
                desc: 'Scalable cloud infrastructure with dedicated resources and full control',
                features: ['Custom Configuration', 'High Performance', 'Cost Effective']
              },
              { 
                icon: Server, 
                title: 'Data Hosting', 
                desc: 'Secure data center services with enterprise-grade storage solutions',
                features: ['Disaster Recovery', 'Data Encryption', 'Regular Backups']
              },
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-300/60 bg-white overflow-hidden animate-fade-in-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <CardHeader className="relative pb-2 sm:pb-3 pt-4 sm:pt-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl mx-auto">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors mb-1.5 sm:mb-2 text-center leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-gray-600 leading-relaxed text-center min-h-[45px] sm:min-h-[50px]">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2 sm:pt-3 pb-4 sm:pb-5">
                  <div className="space-y-1 sm:space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 sm:mt-4 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-1.5 sm:py-2 px-3 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/digital-services">
              <Button 
                size="default"
                className="shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base group bg-primary hover:bg-primary/90"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
              <div className="relative aspect-video bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white/10">
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20">
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                      <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] md:border-l-[14px] border-l-white border-t-[6px] sm:border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[7px] md:border-b-[8px] border-b-transparent ml-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-xs sm:text-sm text-blue-100 font-medium">Watch Our Story</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-semibold mb-3 sm:mb-4">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                Transforming Government Services
              </h2>
              <p className="text-sm sm:text-base text-blue-50 mb-3 sm:mb-4 leading-relaxed">
                The Digital Transformation Office (DTO) is at the forefront of Papua New Guinea's 
                journey towards becoming a digitally enabled nation.
              </p>
              <p className="text-sm sm:text-base text-blue-50 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Through strategic adoption of information and communication technologies, we drive 
                innovation with integrity.
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
                {[
                  'Enhanced digital infrastructure',
                  'Streamlined government processes',
                  'Improved citizen services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="default"
                  className="bg-white text-primary hover:bg-blue-50 border-2 border-white shadow-lg px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-sm sm:text-base font-semibold group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Technology Stack - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2 sm:mb-3">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              Government Technology Infrastructure
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              A comprehensive technology ecosystem promoting interoperability and efficiency
            </p>
          </div>
          
          {/* MOBILE OPTIMIZED TECH STACK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { icon: Database, title: 'E-Governmental Portal' },
              { icon: FileText, title: 'Digital Services' },
              { icon: Shield, title: 'Shared Micro Services' },
              { icon: Database, title: 'Secured Data Exchange' },
              { icon: Network, title: 'Hosting & Communication' },
              { icon: Lock, title: 'Cyber Security & Governance' },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border border-gray-300/60 hover:-translate-y-2 animate-fade-in-up bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-sm sm:text-base font-bold flex-1 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Join thousands of government employees leveraging our digital services
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2">
            <Link href="/login">
              <Button 
                size="default"
                className="bg-white text-primary hover:bg-blue-50 shadow-xl text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 md:py-5 font-semibold group hover:scale-105 transition-all duration-300"
              >
                Member Login
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="default"
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 md:py-5 font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}