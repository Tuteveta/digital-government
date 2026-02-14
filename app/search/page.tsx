'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import Link from 'next/link';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results - replace with actual search logic
  const mockResults = [
    {
      title: 'Digital Services',
      description: 'Comprehensive digital infrastructure and services for government departments including application hosting, email services, and cloud infrastructure.',
      url: '/digital-services'
    },
    {
      title: 'Infrastructure - Government Cloud',
      description: 'Scalable cloud platform offering Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) for government applications.',
      url: '/infrastructure/government-cloud'
    },
    {
      title: 'About Us',
      description: 'Learn about the Digital Transformation Office and our mission to drive digital government excellence in Papua New Guinea.',
      url: '/about'
    },
    {
      title: 'Standards & Compliance',
      description: 'Ensuring quality, security, and reliability in government digital services through comprehensive standards and compliance frameworks.',
      url: '/standards-compliance'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with the Digital Transformation Office for inquiries, support, or collaboration opportunities.',
      url: '/contact'
    }
  ];

  // Filter results based on query
  const results = query 
    ? mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Search Results</h1>
            </div>
            <p className="text-xl text-blue-100">
              {query ? `Showing results for "${query}"` : 'Enter a search query to begin'}
            </p>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {!query ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600">Please enter a search term</p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-2">No results found for "{query}"</p>
                <p className="text-gray-500">Try different keywords or check your spelling</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-8">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
                <div className="space-y-6">
                  {results.map((result, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Link href={result.url}>
                          <CardTitle className="text-2xl text-primary hover:underline cursor-pointer">
                            {result.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-sm text-gray-500">
                          {window.location.origin}{result.url}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{result.description}</p>
                        <Link 
                          href={result.url}
                          className="inline-block mt-4 text-primary hover:underline font-medium"
                        >
                          Visit page →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
