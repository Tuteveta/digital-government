'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  Newspaper,
  Calendar,
  User,
  ArrowRight,
} from 'lucide-react';
import { newsArticles } from '@/lib/mockData';

const metrics = [
  { value: String(newsArticles.length), label: 'Latest Articles', sublabel: 'Published this month' },
  { value: '3',   label: 'Categories',     sublabel: 'Digital, Infrastructure, Security' },
  { value: 'Feb', label: 'Latest Update',  sublabel: 'February 2026' },
  { value: '24h', label: 'Update Cycle',   sublabel: 'New content daily' },
];

const categoryStyle: Record<string, string> = {
  'Digital Services': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Infrastructure':   'text-blue-700 bg-blue-50 border-blue-200',
  'Security':         'text-amber-700 bg-amber-50 border-amber-200',
};

export default function NewsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── 1. HERO ──────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <nav className="flex items-center gap-2 text-sm mb-6 text-blue-100">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">News & Updates</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">News & Updates</h1>
                <p className="text-xl text-blue-50 mt-2">Stay informed about digital government initiatives, services, and technology</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. METRICS ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Coverage</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">News at a Glance</h2>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                As of February 2026<br />
                <span className="text-gray-400">DTO Communications Office</span>
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-gray-200 divide-x divide-y lg:divide-y-0 divide-gray-200">
              {metrics.map((m, i) => (
                <div key={i} className="p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">{m.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{m.label}</div>
                  <div className="text-xs text-gray-500">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. NEWS ARTICLES ────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Latest</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Recent Articles</h2>
                <p className="text-sm text-gray-600">Announcements, updates, and news from the Digital Transformation Office</p>
              </div>
              <p className="text-xs text-gray-500 sm:text-right pb-0.5">
                {newsArticles.length} articles<br />
                <span className="text-gray-400">Updated regularly</span>
              </p>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 md:grid-cols-2">
              {newsArticles.map((article, index) => (
                <div key={article.id} className={['bg-white hover:bg-blue-50/30 transition-colors p-6 sm:p-7 group border-t border-gray-200', index % 2 === 1 ? 'md:border-l' : ''].join(' ')}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={['inline-flex items-center text-xs font-medium border px-2 py-0.5 rounded', categoryStyle[article.category] ?? 'text-gray-700 bg-gray-50 border-gray-200'].join(' ')}>
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />{formatDate(article.date)}
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />{article.author}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. NEWSLETTER / CTA ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Subscribe</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Stay Updated</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Subscribe to our newsletter for the latest updates on digital government
                  services, announcements, and technology news from the DTO.
                </p>
                <form className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 text-sm font-semibold transition-colors flex items-center justify-between px-4"
                  >
                    Subscribe to Newsletter
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
              </div>

              <div className="border border-gray-200 bg-white p-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Quick Navigation</p>
                <div className="space-y-0">
                  {[
                    { label: 'Digital Services', href: '/digital-services' },
                    { label: 'Infrastructure',   href: '/infrastructure' },
                    { label: 'Standards & Compliance', href: '/standards-compliance' },
                    { label: 'Contact the DTO', href: '/contact' },
                  ].map((item, i, arr) => (
                    <Link key={i} href={item.href} className={['flex items-center justify-between py-2.5 text-sm font-semibold text-gray-600 hover:text-primary transition-colors group', i < arr.length - 1 ? 'border-b border-gray-100' : ''].join(' ')}>
                      {item.label}
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
