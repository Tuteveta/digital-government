'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: 'New Digital Identity System Launched for Citizens',
    excerpt: 'The Digital Transformation Office announces the rollout of a new secure digital identity system, making government services more accessible to all Papua New Guineans.',
    date: '2026-02-10',
    category: 'Digital Services',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
  },
  {
    id: 2,
    title: 'Government Cloud Platform Achieves ISO 27001 Certification',
    excerpt: 'Our cloud infrastructure has been certified to meet international security standards, ensuring the highest level of data protection for government services.',
    date: '2026-02-05',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
  },
  {
    id: 3,
    title: 'Digital Skills Training Program Expanded to Rural Areas',
    excerpt: 'New initiative brings digital literacy training to provincial and district government offices, empowering staff with essential digital skills.',
    date: '2026-01-28',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  },
  {
    id: 4,
    title: 'E-Procurement System Saves Government K50 Million',
    excerpt: 'The new electronic procurement platform has delivered significant cost savings and improved transparency in government purchasing.',
    date: '2026-01-20',
    category: 'Digital Services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    id: 5,
    title: 'Cybersecurity Awareness Month Launched',
    excerpt: 'DTO kicks off month-long campaign to promote cybersecurity best practices across all government departments.',
    date: '2026-01-15',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
  },
  {
    id: 6,
    title: 'New Data Center Opens in Port Moresby',
    excerpt: 'State-of-the-art facility will enhance government service delivery with improved reliability and disaster recovery capabilities.',
    date: '2026-01-10',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
  },
];

const categories = ['All', 'Digital Services', 'Infrastructure', 'Training', 'Security'];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl max-w-3xl">
              Stay informed about the latest developments in digital government transformation
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b sticky top-[180px] z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Featured Story</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <Card className="overflow-hidden hover:shadow-2xl transition-all border-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div 
                  className="h-80 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url('${newsArticles[0].image}')` }}
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-semibold">
                      {newsArticles[0].category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(newsArticles[0].date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{newsArticles[0].title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{newsArticles[0].excerpt}</p>
                  <Link href={`/news/${newsArticles[0].id}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                    Read Full Story <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Recent Updates</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link 
                      href={`/news/${article.id}`} 
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest digital government news and updates
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
