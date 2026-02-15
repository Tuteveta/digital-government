'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { newsArticles } from '@/lib/mockData';

export default function NewsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.1) 75%)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
            }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News & Updates</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-blue-100">
              Stay informed about digital government initiatives, new services, and technology updates
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary to-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/20">{article.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="truncate text-xs">{article.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3 mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates on digital government services
            </p>
            <form className="flex gap-4 max-w-md mx-auto flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
